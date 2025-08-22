
// Import the exifr library for extracting metadata from image files
import exifr from 'exifr';
// Import the built-in Node.js file system module
import fs from 'fs';


// Read all filenames in the 'images' directory
let images = fs.readdirSync('images');


// Loop through each file in the images directory
for (let image of images) {
    // Check if the file has a .jpg extension
    if(image.slice(-4) == '.jpg') {
        // Print the image filename
        console.log('IMAGE: ' + image)

        // Extract metadata from the image file (returns a Promise)
        let metadata = await exifr.parse('images/' + image);

        // Convert metadata to JSON string (corrected usage)
        let jsonData = JSON.stringify(metadata);

        // Example: Save metadata to a database (this line is a placeholder and will not work unless you define the query function and database connection)
        // await query('insert into metadatatable (filename, metadata) VALUES(?, ?)', [image, jsonData])

        // Print the extracted metadata to the console
        console.log(metadata);
    }
}
