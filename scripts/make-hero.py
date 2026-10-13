"""Build the hero images from source-assets/bg-portrait.png.

Writes public/hero.jpg (the scene) and public/hero-cutout.webp (the same
scene with only the person kept, so the big name can sit between the room
and the person).

    pip install "rembg[cpu]" pillow numpy
    python scripts/make-hero.py
"""
import numpy as np
from PIL import Image, ImageDraw
from rembg import new_session, remove

SRC = "source-assets/bg-portrait.png"
# The image generator's sparkle watermark, bottom right.
WATERMARK = (1229, 619, 1284, 676)

scene = Image.open(SRC).convert("RGB")
a = np.asarray(scene).astype(np.float32)
m = Image.new("L", scene.size, 0)
ImageDraw.Draw(m).ellipse(WATERMARK, fill=255)
mask = np.asarray(m) > 0
a[mask] = a[~mask].mean(0)
for _ in range(600):  # fill the hole by diffusing in the surrounding pixels
    avg = (np.roll(a, 1, 0) + np.roll(a, -1, 0) + np.roll(a, 1, 1) + np.roll(a, -1, 1)) / 4
    a[mask] = avg[mask]
a[mask] += np.random.default_rng(1).normal(0, 3, (mask.sum(), 1))
scene = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))
scene.save("public/hero.jpg", quality=90)

person = remove(scene, session=new_session("u2net_human_seg"))
person.save("public/hero-cutout.webp", quality=92)
print("wrote public/hero.jpg and public/hero-cutout.webp")
