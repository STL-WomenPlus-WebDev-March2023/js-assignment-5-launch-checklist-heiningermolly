// Write your JavaScript code here!

function validateInput(testInput) {
    if (testInput === "") {
     return "Empty"
    } else if (isNaN(testInput)) {
     return "Not a Number"
    } else if (!isNaN(testInput)) {
     return "Is a Number"
    }
 };

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");

        if (validateInput(pilotInput.value) === "Empty" || 
        validateInput(copilotInput.value) === "Empty" ||
        validateInput(fuelLevelInput.value) === "Empty" ||
        validateInput(cargoLevelInput.value) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
        }
        else if (validateInput(pilotInput.value) === "Is a Number" ||
        validateInput(copilotInput.value) === "Is a Number") {
            alert("Name Not Accepted! Text Only!");
            event.preventDefault();
        }
        else if (validateInput(fuelLevelInput.value) === "Not a Number") {
            alert("Value Not Accepted! Fuel Level Must Be A Number!");
            event.preventDefault();
        }
        else if (validateInput(cargoLevelInput.value) === "Not a Number") {
            alert("Value Not Accepted! Cargo Mass Must Be A Number!");
            event.preventDefault();
        };
        // else {

        if (Number(fuelLevelInput.value) < 10000) {
            document.getElementById("launchStatus").style = "color:red";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready to launch";
            document.getElementById("fuelStatus").innerHTML = "NOT ENOUGH FUEL FOR JOURNEY!!!!!"
        };
        if (Number(cargoLevelInput.value) > 10000) {
            document.getElementById("launchStatus").style = "color:red";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready to launch";
            document.getElementById("cargoStatus").innerHTML = "TOO HEAVY TO LAUNCH!!!!!"
        };
        let faultyItems = document.getElementById("faultyItems");
        faultyItems.style = "visibility:visible";
        document.getElementById("pilotStatus").innerHTML += `: ${pilotInput.value}`;
        document.getElementById("copilotStatus").innerHTML += `: ${copilotInput.value}`;
        document.getElementById("launchStatus").style = "color:green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready to launch";

        event.preventDefault();
        // };
    });
    
;

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});