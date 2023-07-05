// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
     return "Empty"
    } else if (isNaN(testInput)) {
     return "Not a Number"
    } else if (!isNaN(testInput)) {
     return "Is a Number"
    }
 }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function(event) {
        let pilotInput = document.querySelector("input[name=pilotName");
        alert(pilotInput);
        let copilotInput = document.querySelector("input[name=copilotName");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel");
        let cargoLevelInput = document.querySelector("input[name=cargoMass");
        if (validateInput(pilotInput) === "Empty" || 
        validateInput(copilotInput) === "Empty" ||
        validateInput(fuelLevelInput) === "Empty" ||
        validateInput(cargoLevelInput) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
        };
        if (validateInput(pilotInput) === "Is a Number" ||
        validateInput(copilotInput) === "Is a Number") {
            alert("Name Not Accepted! Text Only!");
            event.preventDefault();
        };
        if (validateInput(fuelLevelInput) === "Not a Number" ||
        validateInput(cargoLevelInput) === "Not a Number") {
            alert("Value Not Accepted! Integers Only!");
            event.preventDefault();
        };
    })
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
