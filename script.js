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
 
 
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        
        if (validateInput(pilot.value) === "Empty" ||
        validateInput(copilot.value) === "Empty" ||
        validateInput(fuelLevel.value) === "Empty" ||
        validateInput(cargoLevel.value) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
     
        }

        else if (validateInput(pilot.value) === "Is a Number" ||
        validateInput(copilot.value) === "Is a Number" ||
        validateInput(fuelLevel.value) === "Not a Number" || 
        validateInput(cargoLevel.value) === "Not a Number" ){
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
     
        }

        else {formSubmission(window.document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
 }}
);
 
 
 
 
   let listedPlanets;
 
 
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       let luckyPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, luckyPlanet.name, luckyPlanet.diameter, luckyPlanet.star, luckyPlanet.distance, luckyPlanet.moons, luckyPlanet.image);
    });
  
 });
 