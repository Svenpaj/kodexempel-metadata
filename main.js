
// This function will run our main program logic
// It is marked as 'async' so we can use 'await' for asynchronous operations
async function start() {
    // Fetch the JSON file from the server (asynchronously)
    // 'fetch' returns a promise that resolves to a response object
    let rawData = await fetch('many-people.json');

    // Convert the response to a JavaScript object (array of people)
    // The .json() method also returns a promise
    let persons = await rawData.json();

    // Create an empty string to build up our HTML content
    let html = "";

    // Loop through each person in the array
    // For each person, add a section of HTML with their name and age
    for (let person of persons) {
        html += `
            <section>
                <h4>${person.firstname} är ${person.age} år gammal</h4>
            </section>
        `;
    }

    // Insert the generated HTML into the web page
    // This adds our new content to the end of the <body>
    document.body.innerHTML += html;
}

// Call the start function to begin the program
// This will execute all the code inside start()
start();

