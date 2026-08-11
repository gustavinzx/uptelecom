const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgs = [
  'slide1.jpg',
  'slide3.jpg',
  'bg_plans_hq.jpg',
  'bg_combo_hq.jpg',
  'astro_4.png',
  'astro_1.png',
  'logo_up_horizontal.png'
];

async function optimize() {
  for (const img of imgs) {
    const p = path.join(__dirname, 'public', 'imgs', img);
    if (!fs.existsSync(p)) {
      console.log('Skipping', img);
      continue;
    }
    const ext = path.extname(img);
    const out = p.replace(ext, '.webp');
    await sharp(p)
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(out);
    console.log('Optimized', img, 'to webp');
  }
}

optimize();
