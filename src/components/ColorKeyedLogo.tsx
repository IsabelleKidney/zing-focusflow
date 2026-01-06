import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /**
   * Color-key tolerance in 0-255 per channel (higher = removes more background).
   * Defaults tuned for very light, nearly-uniform logo backgrounds.
   */
  tolerance?: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function ColorKeyedLogo({ src, alt, className, tolerance = 10 }: Props) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        const img = new Image();
        img.decoding = "async";
        img.src = src;

        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error("Failed to load image"));
        });

        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h) throw new Error("Invalid image size");

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) throw new Error("No canvas context");

        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, w, h);
        const data = imageData.data;

        // Average corner pixels to estimate the background color baked into the PNG.
        const corners = [
          [0, 0],
          [w - 1, 0],
          [0, h - 1],
          [w - 1, h - 1],
        ] as const;

        let bgR = 0,
          bgG = 0,
          bgB = 0;
        for (const [x, y] of corners) {
          const idx = (y * w + x) * 4;
          bgR += data[idx + 0];
          bgG += data[idx + 1];
          bgB += data[idx + 2];
        }
        bgR = Math.round(bgR / corners.length);
        bgG = Math.round(bgG / corners.length);
        bgB = Math.round(bgB / corners.length);

        // Remove pixels that match the estimated background color.
        // Use a small tolerance to avoid eating into the artwork.
        // Manhattan distance tends to work well for near-neutral backgrounds.
        const tol = clamp(tolerance, 0, 80);
        for (let i = 0; i < data.length; i += 4) {
          const a = data[i + 3];
          if (a === 0) continue;

          const r = data[i + 0];
          const g = data[i + 1];
          const b = data[i + 2];

          const dist = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
          if (dist <= tol * 3) {
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);

        const out = canvas.toDataURL("image/png");
        if (!cancelled) setProcessedSrc(out);
      } catch {
        if (!cancelled) setProcessedSrc(null);
      }
    };

    // Reset then process
    setProcessedSrc(null);
    run();

    return () => {
      cancelled = true;
    };
  }, [src, tolerance]);

  return (
    <div className="inline-flex items-center bg-muted">
      <img
        src={processedSrc ?? src}
        alt={alt}
        className={cn("block", className)}
        draggable={false}
      />
    </div>
  );
}
