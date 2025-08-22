# People from JSON: Metadata Extraction Example

This project demonstrates how to extract metadata from a photo using JavaScript and the [exifr](https://www.npmjs.com/package/exifr) library.

## Files

- `extract.js`: The main script that extracts and prints metadata from an image file.
- `greyhound-with-meta.jpg`: Example image file containing metadata.
- `package.json`: Project configuration and dependencies.

## How it works

1. The script imports the `exifr` library, which can read EXIF metadata from image files.
2. It uses `exifr.parse()` to extract metadata from `greyhound-with-meta.jpg`.
3. The extracted metadata is printed to the console.

## Usage

1. **Install dependencies:**
   ```bash
   npm install exifr
   ```
2. **Run the script:**
   ```bash
   node extract.js
   ```
