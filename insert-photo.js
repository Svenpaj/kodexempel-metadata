
// Define an array of photo objects, each with a filename and metadata
// The metadata contains information about the photo, such as who uploaded it, when, tags, dimensions, file size, and camera info
const photos = [
  {
    filename: "photo_2025_08_20.jpg",
    metadata: {
      uploadedBy: "svenpaj", // Who uploaded the photo
      uploadDate: "2025-08-20T14:00:00Z", // When it was uploaded (ISO format)
      tags: ["vacation", "beach", "family"], // Tags describing the photo
      dimensions: { width: 1920, height: 1080 }, // Image width and height in pixels
      sizeBytes: 2048000, // File size in bytes
      camera: { make: "Canon", model: "EOS 80D" } // Camera make and model
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


// Import the MySQL database driver that supports promises (async/await)
import mysql from 'mysql2/promise';

// Create a connection to the MySQL database using your credentials
// This connection object (db) will be used to run queries
// TODO: Replace the following database credentials with your own
const db = await mysql.createConnection({
  host: 'YOUR_HOST',      // e.g., 'localhost' or your MySQL server IP
  port: YOUR_PORT,             // e.g., 3306 (default MySQL port)
  user: 'YOUR_USERNAME',  // Your MySQL username
  password: 'YOUR_PASSWORD', // Your MySQL password
  database: 'YOUR_DATABASE'  // The name of your database
});

// Define a helper function to run SQL queries on the database
// It takes a SQL string and returns the result rows
async function query(sql){
    let result = await db.execute(sql); // db.execute returns [rows, fields]
    return result[0]; // We only need the rows
}

// Loop through each photo in the array and insert it into the database
for (const photo of photos) {
  // Convert the metadata object to a JSON string for storage in the database
  const jsonString = JSON.stringify(photo.metadata);
  // Insert the filename and JSON metadata into the jsontest table
  let [result] = await db.execute(
    'INSERT INTO jsontest (filename, description) VALUES (?, ?)',
    [photo.filename, jsonString]
  );
  // Print a message to the console for each inserted photo
  console.log(`Inserted: ${photo.filename}`, result);
}

// Close the database connection when done
await db.end();

