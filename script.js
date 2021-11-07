// Write your JavaScript code here!
//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let faultyList = document.getElementById("faultyItems");
    let pilotStatu = document.getElementById("pilotStatus");
    let coPilotStatu = document.getElementById("copilotStatus");
    let fuelStatu = document.getElementById("fuelStatus");
    let cargoStatu = document.getElementById("cargoStatus"); 
  
    let pilotName = document.querySelector("input[name=pilotName]");
    let coPilotName = document.querySelector("input[name=copilotName]");
    let fuelAmt = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
      
    form.addEventListener("submit", function(event) {
        let validPilot = validateInput(pilotName);
        let validCoPilot = validateInput(coPilotName);
        let validFuelLevel = validateInput(fuelAmt);
        let validCargoMass = validateInput(cargoMass);
        if (validPilot === "" || validCoPilot === "" ||
            validFuelLevel === "" || validCargoMass === "" ) {
                alert("All fields are required");
                event.preventDefault();
            };
        let validArr = [validPilot, validCoPilot, validFuelLevel, validCargoMass];
       
        formSubmission(faultyList, validArr, pilotStatu, coPilotStatu, fuelStatu, cargoStatu);
    });
 
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
    let listedPlanetsResponse = myFetch();
       
});
