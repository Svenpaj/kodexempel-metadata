// Import the exifr library, which is used to extract metadata from image files
import exifr from 'exifr';

// Use the exifr library to asynchronously parse and extract metadata from the specified image file
let metadata = await exifr.parse('greyhound-with-meta.jpg')

// Output the extracted metadata to the console
console.log(metadata);