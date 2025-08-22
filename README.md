# kodexempel-metadata

This project demonstrates how to extract metadata (EXIF) from JPEG images using Node.js and the [exifr](https://www.npmjs.com/package/exifr) library.

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- npm (comes with Node.js)

## Installation
1. Clone this repository or download the code.
2. Open a terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Place your `.jpg` images in the `images/` folder.
2. Run the program:
   ```bash
   node test-extract.js
   ```
3. The script will print the filename and extracted metadata for each `.jpg` image in the `images/` folder.

## Notes
- The script uses the `exifr` library to extract metadata from JPEG images.
- There is a placeholder line for saving metadata to a database. This line is commented out and will not work unless you implement a database connection and the `query` function.
- Only files with the `.jpg` extension are processed.

## Example Output
```
IMAGE: boat.jpg
{ ...metadata... }
IMAGE: kayak.jpg
{ ...metadata... }
```