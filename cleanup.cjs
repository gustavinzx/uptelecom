const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const indexHtml = path.join(__dirname, 'index.html');
const imgsDir = path.join(__dirname, 'public', 'imgs');
const looseImgsDir = path.join(__dirname, '..', 'imgs');

// Function to recursively read all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

// 1. Get all source code files
const srcFiles = getAllFiles(srcDir);
srcFiles.push(indexHtml);

// Read all content into memory (it's small enough)
let allCodeContent = '';
srcFiles.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
    allCodeContent += fs.readFileSync(file, 'utf8');
  }
});

// 2. Read all images
const allImages = fs.readdirSync(imgsDir);

console.log(`Checking ${allImages.length} images for usage...`);

let deletedCount = 0;
// 3. Check usage and delete
allImages.forEach(img => {
  // Check if the exact filename is mentioned anywhere in the code
  if (!allCodeContent.includes(img)) {
    // Also check without extension in case it's dynamically generated, though unlikely
    const nameWithoutExt = path.parse(img).name;
    // We'll be strict: if the filename isn't there, it's unused.
    fs.unlinkSync(path.join(imgsDir, img));
    console.log(`Deleted unused image: ${img}`);
    deletedCount++;
  }
});

console.log(`\nDeleted ${deletedCount} unused images from public/imgs.`);

// 4. Delete lighthouse reports
const rootFiles = fs.readdirSync(__dirname);
rootFiles.forEach(file => {
  if (file.startsWith('lighthouse-report') && file.endsWith('.json')) {
    fs.unlinkSync(path.join(__dirname, file));
    console.log(`Deleted report: ${file}`);
  }
});

// 5. Delete loose imgs directory in parent folder
if (fs.existsSync(looseImgsDir)) {
  fs.rmSync(looseImgsDir, { recursive: true, force: true });
  console.log(`Deleted loose imgs directory at ${looseImgsDir}`);
} else {
  console.log(`Loose imgs directory not found at ${looseImgsDir}`);
}
