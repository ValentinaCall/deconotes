// Script to handle copying build files to the docs folder for GitHub Pages
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const buildDir = path.join(__dirname, 'dist');
const docsDir = path.join(__dirname, 'docs');

// Create docs directory if it doesn't exist
if (!await fs.access(docsDir).catch(() => false)) {
  await fs.mkdir(docsDir, { recursive: true });
  console.log('Created docs directory');
}

// Function to copy files recursively
async function copyDirectory(source, destination) {
  // Create destination folder if it doesn't exist
  if (!await fs.access(destination).catch(() => false)) {
    await fs.mkdir(destination, { recursive: true });
  }
  
  // Get all files and folders in the source directory
  const entries = await fs.readdir(source, { withFileTypes: true });
  
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);
    
    if (entry.isDirectory()) {
      // Recursive copy for directories
      await copyDirectory(sourcePath, destPath);
    } else {
      // Copy files
      await fs.copyFile(sourcePath, destPath);
      console.log(`Copied: ${entry.name}`);
    }
  }
}

// Main function to handle the build process
async function main() {
  // Clean up docs directory
  if (await fs.access(docsDir).catch(() => false)) {
    await fs.rm(docsDir, { recursive: true, force: true });
    await fs.mkdir(docsDir, { recursive: true });
    console.log('Cleaned docs directory');
  }

  // Copy build files to docs directory
  try {
    await copyDirectory(buildDir, docsDir);
    console.log('Successfully copied build files to docs directory');
    
    // Create a simple .nojekyll file to prevent GitHub Pages from ignoring files starting with underscore
    await fs.writeFile(path.join(docsDir, '.nojekyll'), '');
    console.log('Created .nojekyll file');
    
    // Create a GitHub Pages-specific index.html in case of 404s
    // This copies the main index.html to 404.html to handle client-side routing
    const indexFile = path.join(docsDir, 'index.html');
    const notFoundFile = path.join(docsDir, '404.html');
    
    if (await fs.access(indexFile).catch(() => false)) {
      await fs.copyFile(indexFile, notFoundFile);
      console.log('Created 404.html file for client-side routing');
    }
    
  } catch (error) {
    console.error('Error copying files:', error);
    process.exit(1);
  }

  console.log('GitHub Pages deployment files prepared in /docs folder');
}

// Run the main function
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});