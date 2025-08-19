// Declare a new function named start
async function start() {
    // read json
    let rawData = await fetch('many-people.json');

    // convert json to a javascript data structure
    let persons = await rawData.json();

    // create a variable name that initially is an empty string
    let html = "";
    // loop through persons
    for (let person of persons) {
        html += `
                <section>
                    <h4>${person.firstname} är ${person.age}år gammal</h4>
                </section>
                `;
    }

    // Add the content of the html variable
    // to the html inside the body tag
    document.body.innerHTML += html;
}

// Call the function start in order to run
// the code written inside the start function

start();

