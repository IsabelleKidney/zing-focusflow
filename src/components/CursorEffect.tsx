import { useEffect, useRef } from "react";

const CursorEffect = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, dx = 0, dy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = `${mx - 4}px`;
      dot.style.top = `${my - 4}px`;
      if (!dot.classList.contains("visible")) {
        dot.classList.add("visible");
        ring.classList.add("visible");
      }
    };

    const moveRing = () => {
      dx += (mx - dx) * 0.15;
      dy += (my - dy) * 0.15;
      ring.style.left = `${dx - 16}px`;
      ring.style.top = `${dy - 16}px`;
      requestAnimationFrame(moveRing);
    };

    document.addEventListener("mousemove", onMove);
    moveRing();

    const hoverTargets = document.querySelectorAll("a, button, .faq-q");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => { dot.classList.add("hover"); ring.classList.add("hover"); });
      el.addEventListener("mouseleave", () => { dot.classList.remove("hover"); ring.classList.remove("hover"); });
    });

    document.addEventListener("mouseleave", () => {
      dot.classList.remove("visible");
      ring.classList.remove("visible");
    });

    return () => { document.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CursorEffect;
