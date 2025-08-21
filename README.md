## Prerequisites
- Node.js installed
- MySQL database setup
- Database credentials (host, port, user, password, database name)
- Database table 'jsontest' with a varchar column 'filename' and a JSON column 'description'

### To run
1. Install dependencies: `npm install`
2. Update the database connection details in `connect-to-db.js`
3. Run the script: `node connect-to-db.js`

### Further use
- Modify the SQL queries in `connect-to-db.js` to suit your needs.
- Integrate this script into a larger application as needed.
- Feel free to modify and extend the functionality as required for further training.
  - Create a different table and populate it with JSON data.
  - Add more complex queries or data processing as needed.