#!/bin/bash

# Set variables
SOURCE_DIR="dist/public"
DOCS_DIR="docs"

# Build the project using the existing build script
echo "Building project..."
npm run build

# Create docs directory if it doesn't exist
mkdir -p $DOCS_DIR

# Preserve our existing GitHub-specific files
echo "Preserving GitHub-specific files..."
mkdir -p temp_gh_pages
if [ -f "$DOCS_DIR/.nojekyll" ]; then
  cp $DOCS_DIR/.nojekyll temp_gh_pages/
fi
if [ -f "$DOCS_DIR/404.html" ]; then
  cp $DOCS_DIR/404.html temp_gh_pages/
fi

# Clear the docs directory
echo "Clearing docs directory..."
rm -rf $DOCS_DIR/*

# Restore preserved files
if [ -f "temp_gh_pages/.nojekyll" ]; then
  cp temp_gh_pages/.nojekyll $DOCS_DIR/
fi
if [ -f "temp_gh_pages/404.html" ]; then
  cp temp_gh_pages/404.html $DOCS_DIR/
fi
rm -rf temp_gh_pages

# Copy all files from the source directory to the docs directory
echo "Copying build files to docs directory..."
cp -R $SOURCE_DIR/* $DOCS_DIR/

# Create the .nojekyll file if it doesn't exist
if [ ! -f "$DOCS_DIR/.nojekyll" ]; then
  echo "Creating .nojekyll file..."
  touch $DOCS_DIR/.nojekyll
fi

# Create a 404.html file for GitHub Pages if it doesn't exist
if [ ! -f "$DOCS_DIR/404.html" ]; then
  echo "Creating 404.html file for client-side routing..."
  if [ -f "$DOCS_DIR/index.html" ]; then
    cp $DOCS_DIR/index.html $DOCS_DIR/404.html
  fi
fi

# Add a base tag to index.html for GitHub Pages
if [ -f "$DOCS_DIR/index.html" ]; then
  echo "Updating base path in index.html..."
  sed -i 's/<head>/<head>\n    <base href="\.\/">/' $DOCS_DIR/index.html
fi

echo "Deployment files prepared in the docs folder!"
echo "You can now commit and push these changes to your GitHub repository."
echo "Then enable GitHub Pages in your repository settings to use the docs folder."
