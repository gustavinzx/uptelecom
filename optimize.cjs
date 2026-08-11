const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMGS_DIR = path.join(__dirname, 'public', 'imgs');
const VALID_EXT = ['.jpg', '.jpeg', '.png'];

// Larguras máximas por tipo de uso — ajuste os nomes de arquivo conforme necessário
const MAX_WIDTH_DEFAULT = 1920; // imagens de fundo full-bleed (hero, seções)
const MAX_WIDTH_CARD = 900;     // imagens usadas em cards/thumbnails menores

function getMaxWidth(filename) {
  // Imagens de fundo de seção inteira ficam maiores, ícones/mascotes menores
  if (filename.toLowerCase().includes('astro') || filename.toLowerCase().includes('logo')) {
    return 600;
  }
  return MAX_WIDTH_DEFAULT;
}

async function optimizeAll() {
  const files = fs.readdirSync(IMGS_DIR);
  const targets = files.filter(f => VALID_EXT.includes(path.extname(f).toLowerCase()));

  console.log(`Encontradas ${targets.length} imagens para otimizar...`);

  for (const file of targets) {
    const inputPath = path.join(IMGS_DIR, file);
    const outputPath = inputPath.replace(path.extname(file), '.webp');

    const inputStats = fs.statSync(inputPath);
    const maxWidth = getMaxWidth(file);

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const savedPct = (100 - (outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(
      `✓ ${file} → ${path.basename(outputPath)} | ` +
      `${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB (-${savedPct}%)`
    );
  }

  console.log('Otimização concluída.');
}

optimizeAll();
