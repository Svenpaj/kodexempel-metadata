# People Search App

This project is a simple web application for searching people stored in a MySQL database. It uses Node.js, Express, and MySQL on the backend, and a static HTML/CSS/JS frontend.

## Features
- Search for people by first name, last name, or hobby
- Responsive web interface
- Images and details for each person

## Prerequisites
- Node.js installed
- MySQL database with a `people` table (columns: `firstname`, `lastname`, `hobby`, `image`)
- Database credentials (host, port, user, password, database name)

## Setup & Run
1. Install dependencies:
  ```bash
  npm install
  ```
2. Update the database connection details in `server/server.js` if needed.
3. Start the server:
  ```bash
  node server/server.js
  ```
4. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Project Structure
- `server/server.js` – Express server and API routes
- `client/index.html` – Main web page
- `client/main.js` – Frontend logic for searching and displaying people
- `client/style.css` – Styles for the web app
- `client/images/` – Images for people

## API Endpoints
- `GET /api/people` – Get all people
- `GET /api/people/:searchTerm` – Search people by name or hobby

## Customization
- Add or update people in the MySQL `people` table
- Change frontend or backend logic as needed

---
Created for educational purposes. Feel free to modify and extend!