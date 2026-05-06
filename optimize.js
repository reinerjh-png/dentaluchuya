const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const images = [
  'ortodonciainv.png',
  'ortodonciameta.png',
  'ortopediatria.png',
  'tecnologia.png',
];

async function convertToWebP(filename) {
  const inputPath = path.join(publicDir, filename);
  const outputName = filename.replace(/\.png$/i, '.webp');
  const outputPath = path.join(publicDir, outputName);

  const before = fs.statSync(inputPath).size;
  await sharp(inputPath).webp({ quality: 82 }).toFile(outputPath);
  const after = fs.statSync(outputPath).size;

  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(`✅ ${filename} → ${outputName}  (${(before/1024).toFixed(0)} KB → ${(after/1024).toFixed(0)} KB, -${saved}%)`);
}

(async () => {
  console.log('Convirtiendo imágenes PNG → WebP...\n');
  for (const img of images) {
    await convertToWebP(img);
  }
  console.log('\n¡Conversión completada!');
})();
