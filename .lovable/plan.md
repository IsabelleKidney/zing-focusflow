

## Fresh Hero Image Generation — Younger Subject (22 years old)

Generate a completely new photorealistic hero image to replace `src/assets/hero-male-workzone.jpg`, using the higher-quality image generation model for better realism.

### Image Description

A 22-year-old guy sitting in a modern university library, focused on his laptop. He has a natural, slightly messy hairstyle — not styled or perfect, just normal hair. He's wearing a small in-ear device. The library is contemporary — clean lines, warm lighting, modern furniture. A few other students are visible in the soft-focus background. The image should look like a candid photo taken on a nice camera, not a studio shoot — natural ambient lighting, shallow depth of field, real skin texture with slight imperfections.

### Key Details to Reduce AI Look
- "Candid photography" / "editorial photography" style
- Natural skin texture with pores, slight stubble or peach fuzz
- Imperfect, slightly messy hair with flyaways — not freshly styled
- Natural/ambient library lighting (not studio)
- Background people slightly out of focus for realism and depth
- Young-looking face (22, not mid-20s) — could pass for a final-year uni student

### Technical Steps

1. Create a backend function to call `google/gemini-3-pro-image-preview` with the detailed prompt
2. Save the result as `src/assets/hero-male-workzone.jpg`
3. No code changes needed — the Hero component already references this file

