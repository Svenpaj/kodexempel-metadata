

// Array of metadata objects and filenames
const photos = [
  {
    filename: "photo_2025_08_20.jpg",
    metadata: {
      uploadedBy: "svenpaj",
      uploadDate: "2025-08-20T14:00:00Z",
      tags: ["vacation", "beach", "family"],
      dimensions: { width: 1920, height: 1080 },
      sizeBytes: 2048000,
      camera: { make: "Canon", model: "EOS 80D" }
    }
  },
  {
    filename: "photo_2025_08_21.jpg",
    metadata: {
      uploadedBy: "alex",
      uploadDate: "2025-08-21T10:30:00Z",
      tags: ["work", "conference"],
      dimensions: { width: 2560, height: 1440 },
      sizeBytes: 3048000,
      camera: { make: "Apple", model: "iPhone 14 Pro" }
    }
  },
  {
    filename: "photo_2025_08_22.jpg",
    metadata: {
      uploadedBy: "jane",
      uploadDate: "2025-08-22T08:15:00Z",
      tags: ["nature", "mountain", "vacation"],
      dimensions: { width: 4000, height: 3000 },
      sizeBytes: 5048000,
      camera: { make: "Nikon", model: "D3500" }
    }
  },
  {
    filename: "photo_2025_08_23.jpg",
    metadata: {
      uploadedBy: "svenpaj",
      uploadDate: "2025-08-23T12:00:00Z",
      tags: ["city", "friends"],
      dimensions: { width: 1920, height: 1080 },
      sizeBytes: 2048000,
      camera: { make: "Apple", model: "iPhone 13" }
    }
  },
  {
    filename: "photo_2025_08_24.jpg",
    metadata: {
      uploadedBy: "alex",
      uploadDate: "2025-08-24T09:45:00Z",
      tags: ["family", "birthday"],
      dimensions: { width: 3000, height: 2000 },
      sizeBytes: 4048000,
      camera: { make: "Canon", model: "EOS 90D" }
    }
  }
];


  // Import the database driver
import mysql from 'mysql2/promise';

// Create a connection 'db' to the database
const db = await mysql.createConnection({
    host:'5.189.183.23', 
    port: 4567,
    user: 'dm24-hbg-grupp8', 
    password: 'HYRNK71837',
    database: 'dm24-hbg-grupp8'
});

// A small function for a query
async function query(sql){
    let result = await db.execute(sql);
    return result[0];
 }


// Insert all photos into the database
for (const photo of photos) {
  const jsonString = JSON.stringify(photo.metadata);
  let [result] = await db.execute(
    'INSERT INTO jsontest (filename, description) VALUES (?, ?)',
    [photo.filename, jsonString]
  );
  console.log(`Inserted: ${photo.filename}`, result);
}


await db.end();

