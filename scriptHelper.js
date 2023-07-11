// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   const destination = document.getElementById("missionTarget");
   destination.innerHTML = `


               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src="${imageUrl}">
`
}


function validateInput(testInput) {
   if (testInput === "") {
    return "Empty"
   } else if (isNaN(testInput)) {
    return "Not a Number"
   } else if (!isNaN(testInput)) {
    return "Is a Number"
   }
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Empty") {
        alert("All fields are required!");
        // event.preventDefault();
 
    }

    else if (validateInput(pilot.value) === "Is a Number" ||
    validateInput(copilot.value) === "Is a Number" ||
    validateInput(fuelLevel.value) === "Not a Number" || 
    validateInput(cargoLevel.value) === "Not a Number" ){
        alert("Make sure to enter valid information for each field!");
        // event.preventDefault();
 
    }

    else {





   list.style.visibility = "visible";

   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
   document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
   document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
   document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
  document.getElementById("launchStatus").style = "color:green";
  document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";

   if (Number(fuelLevel.value) < 10000) {
       document.getElementById("launchStatus").style = "color:red";
       document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
       document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
   };

   if (Number(cargoLevel.value) > 10000) {
       document.getElementById("launchStatus").style = "color:red";
       document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
       document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch"
   };



   }
};





async function myFetch() {
   let planetsReturned;




  
   planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
       });


   return planetsReturned;
}








function pickPlanet(planets) {
   let int = Math.floor(Math.random() * planets.length);
   return planets[int];
}






module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;