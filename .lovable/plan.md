

## Replace Brown-Haired Girl Hero Image

### What We'll Do
Generate a completely new image for slide 1 (`src/assets/hero-woman-earpiece-young.jpg`) using the higher-quality image model.

### Image Specification
- **Subject:** 25-year-old woman with brown hair, polished and successful appearance
- **Setting:** Modern office environment (blurred in background due to shallow depth of field)
- **Expression:** Confident, focused, composed — not smiling too broadly
- **Styling:** Professional/polished — well-groomed hair, subtle makeup, smart attire visible at edges
- **Crop/Proportion:** Extreme close-up matching the outdoor girl — face fills nearly the entire frame from edge to edge, top of head cropped slightly, chin near bottom of frame
- **Subject position:** Positioned to the right side of the frame so left-aligned hero text has clear space
- **Realism cues:** Natural skin texture with pores, real lighting from office windows, shallow depth of field, editorial photography style

### Technical Details
- Use `google/gemini-3-pro-image-preview` for higher quality
- Generate via the image generation edge function
- Save as `src/assets/hero-woman-earpiece-young.jpg`
- No code changes needed — the Hero component already references this file
