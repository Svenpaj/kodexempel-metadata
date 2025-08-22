import exifr from 'exifr';
import fs from 'fs';

let images = fs.readdirSync('images');

for (let image of images) {
    if(image.slice(-4) == '.jpg') {
        console.log('IMAGE: ' + image)
        let metadata = await exifr.parse('images/' + image);
        jsonData = metadata.JSON.stringify();
        await query('insert into metadatatable (filename, metadata) VALUES(?)', [filename, jsonData])

        console.log(metadata);
    }
}
