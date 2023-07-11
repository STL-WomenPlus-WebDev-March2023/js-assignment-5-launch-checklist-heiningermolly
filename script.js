// function validateInput(testInput) {
//     if (testInput === "") {
//      return "Empty"
//     } else if (isNaN(testInput)) {
//      return "Not a Number"
//     } else if (!isNaN(testInput)) {
//      return "Is a Number"
//     }
//  };
 
 
 window.addEventListener("load", function() {
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
 
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        // list.style.visibility = "hidden";
        
formSubmission(window.document, list, pilot, copilot, fuelLevel, cargoLevel);

 }
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
 