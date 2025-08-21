// Import the database driver
import mysql from 'mysql2/promise';

// Create a connection 'db' to the database
const db = await mysql.createConnection({
    host:'your-ip-here', 
    port: your-port-here,
    user: 'db-username-here', 
    password: 'db-user-password-here',
    database: 'your-database-name-here'
});

// A small function for a query
async function query(sql){
   let result = await db.execute(sql);
   return result[0];
}

let result = await query("SELECT filename FROM jsontest WHERE description->'$.uploadedBy' = 'svenpaj'");

let result2 = await query("SELECT filename FROM jsontest WHERE JSON_CONTAINS(description, '\"vacation\"', '$.tags');");

let result3 = await query("SELECT filename FROM jsontest WHERE JSON_EXTRACT(description, '$.camera.make') = 'Apple' OR JSON_EXTRACT(description, '$.camera.make') = 'Nikon'");

let result4 = await query("SELECT filename FROM jsontest WHERE JSON_EXTRACT(description, '$.tags') = 'work'");

let result5 = await query("SELECT filename FROM jsontest WHERE JSON_CONTAINS(description, '\"work\"', '$.tags')");


// Show the result
console.log('Result: ', result);
console.log('Result2: ', result2);
console.log('Result3: ', result3);
console.log('Result4: ', result4);
console.log('Result5: ', result5);

await db.end();

