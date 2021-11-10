// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
                document.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>
                `
}

function validateInput(testInput) {
    if(testInput.name === "pilotName" || testInput.name === "copilotName") {
            if(testInput.value === "" ) {
                console.log(`Text fields must be filled for ${testInput.name} text box` );
            }
    } 
    if (testInput.name === "fuelLevel" || testInput.name === "cargoMass") {
               if(isNaN(testInput.value ) || testInput.value === "") {
            console.log(`The value of the text box ${testInput.name} is not a number` );
        }
    }
    return testInput.value;
}

function formSubmission(mydocument, list, pilot, copilot, fuelLevel, cargoLevel) {
        mydocument.style.visibility = 'visible';
        let header2 = document.getElementById("launchStatus");
        pilot.innerHTML = `Pilot ${list[0]} is ready for launch`; 
        copilot.innerHTML = `coPilot ${list[1]} is ready for launch`; 
        if(list[2] < 10000) {
            fuelLevel.innerHTML = "Fuel level too low for launch";  
        } else {
            fuelLevel.innerHTML = `Fuel level ${list[2]} is ready for launch`;
        }

        if (list[3] > 10000) {
            cargoLevel.innerHTML = "too much mass for the shuttle to take off";  
        } else {
            cargoLevel.innerHTML = `Cargo Mass ${list[3]} is ready for launch`;
        }

        if (list[2] < 10000 || list[3] > 10000){
            header2.innerHTML = "Shuttle not ready for launch"; 
            header2.style.color = "red";
        } else {
            header2.innerHTML = "Shuttle is ready for launch"; 
            header2.style.color = "green";
        }
        
        document.getElementById("formSubmit").addEventListener("submit", function(event){
            event.preventDefault();
          });
}

async function myFetch() {
   let planetsReturned;
   let listedPlanets;
   let selectedPlanet;
   let missionTargetId = document.getElementById("missionTarget");
       planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then(function(result) {
                    listedPlanets = result;
                    selectedPlanet =  pickPlanet(listedPlanets);
                    addDestinationInfo(missionTargetId, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);

            }); 
       });

    return planetsReturned;
}

function pickPlanet(planets) {
   
    let index = Math.floor(Math.random()*planets.length);
        return planets[index];
        
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
