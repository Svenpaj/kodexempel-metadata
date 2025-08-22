// Import the MySQL database driver that supports promises (async/await)
import mysql from 'mysql2/promise';

// Create a connection to the MySQL database using your credentials
// This connection object (db) will be used to run queries
const db = await mysql.createConnection({
    host:'your-ip-here', // The IP address of your MySQL server
    port: your-port-here, // The port number for MySQL (default is 3306)
    user: 'db-username-here', // Your database username
    password: 'db-user-password-here', // Your database password
    database: 'your-database-name-here' // The name of the database to use
});

// Define a helper function to run SQL queries on the database
// It takes a SQL string and returns the result rows
async function query(sql){
   let result = await db.execute(sql); // db.execute returns [rows, fields]
   return result[0]; // We only need the rows
}

// Query 1: Find all filenames where the uploadedBy field in the JSON is 'svenpaj'
let result = await query("SELECT filename FROM jsontest WHERE description->'$.uploadedBy' = 'svenpaj'");

// Query 2: Find filenames where the tags array in the JSON contains 'vacation'
let result2 = await query("SELECT filename FROM jsontest WHERE JSON_CONTAINS(description, '\"vacation\"', '$.tags');");

// Query 3: Find filenames where the camera make is either 'Apple' or 'Nikon'
let result3 = await query("SELECT filename FROM jsontest WHERE JSON_EXTRACT(description, '$.camera.make') = 'Apple' OR JSON_EXTRACT(description, '$.camera.make') = 'Nikon'");

// Query 4: Find filenames where the tags array is exactly 'work' (not recommended for arrays)
let result4 = await query("SELECT filename FROM jsontest WHERE JSON_EXTRACT(description, '$.tags') = 'work'");

// Query 5: Find filenames where the tags array contains 'work'
let result5 = await query("SELECT filename FROM jsontest WHERE JSON_CONTAINS(description, '\"work\"', '$.tags')");

// Print the results of each query to the console
console.log('Result: ', result);   // Output for Query 1
console.log('Result2: ', result2); // Output for Query 2
console.log('Result3: ', result3); // Output for Query 3
console.log('Result4: ', result4); // Output for Query 4
console.log('Result5: ', result5); // Output for Query 5

// Close the database connection when done
await db.end();

