// Script to handle copying build files to the docs folder for GitHub Pages
const fs = require('fs');
const path = require('path');

// Paths
const buildDir = path.join(__dirname, 'dist', 'public');
const docsDir = path.join(__dirname, 'docs');

// Create docs directory if it doesn't exist
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
  console.log('Created docs directory');
}

// Function to copy files recursively
function copyDirectory(source, destination) {
  // Create destination folder if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }
  
  // Get all files and folders in the source directory
  const entries = fs.readdirSync(source, { withFileTypes: true });
  
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);
    
    if (entry.isDirectory()) {
      // Recursive copy for directories
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${entry.name}`);
    }
  }
}

// Clean up docs directory
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
  fs.mkdirSync(docsDir, { recursive: true });
  console.log('Cleaned docs directory');
}

// Copy build files to docs directory
try {
  copyDirectory(buildDir, docsDir);
  console.log('Successfully copied build files to docs directory');
  
  // Create a simple .nojekyll file to prevent GitHub Pages from ignoring files starting with underscore
  fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
  console.log('Created .nojekyll file');
  
  // Create a GitHub Pages-specific index.html in case of 404s
  // This copies the main index.html to 404.html to handle client-side routing
  const indexFile = path.join(docsDir, 'index.html');
  const notFoundFile = path.join(docsDir, '404.html');
  if (fs.existsSync(indexFile)) {
    fs.copyFileSync(indexFile, notFoundFile);
    console.log('Created 404.html file for client-side routing');
  }
  
} catch (error) {
  console.error('Error copying files:', error);
  process.exit(1);
}

console.log('GitHub Pages deployment files prepared in /docs folder');