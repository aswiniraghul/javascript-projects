// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

  let altitude = 0;
  let PositionX = 0;
  let PositionY = 0;

  // BUTTONS USED HERE
  const takeoffButton = document.getElementById('takeoff');
  const landButton = document.getElementById('landing');
  const abortButton = document.getElementById('missionAbort');


  const flightStatus = document.getElementById('flightStatus');
  const shuttleBackground = document.getElementById('shuttleBackground');
  const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

  
  const rocket = document.getElementById('rocket');

  takeoffButton.addEventListener("click", function() {
    let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
    
    if (shouldTakeOff) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      altitude = 10000;
      spaceShuttleHeight.innerHTML = altitude;
      PositionY += 10;
      rocket.style.marginBottom = PositionY + 'px';
    }
  });

  landButton.addEventListener("click", function () {
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    resetRocket();
  });

  abortButton.addEventListener("click", function () {
    let shouldAbort = confirm("Confirm that you want to abort the mission.");
    
    if (shouldAbort) {
      flightStatus.innerHTML = "Mission aborted.";
      resetRocket();
    }
  });

  
  //different approach event delegation for (up down right left)
  // (an alternative to placing click listeners on four individual objects)
  document.addEventListener("click", function(event) {
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
    
    if (event.target.id === "left" && PositionX > -(bkgWidth / 2) - 40) {
      PositionX -= 10;
      rocket.style.marginLeft = PositionX + 'px';
    }
    if (event.target.id === "right" && PositionX < (bkgWidth / 2 - 40)) {
      PositionX += 10;
      rocket.style.marginLeft = PositionX + 'px';
    }
    if (event.target.id === "up" && altitude < 250000) {
      PositionY += 10;
      rocket.style.marginBottom = PositionY + 'px';
      altitude += 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
    if (event.target.id === "down" && altitude > 0) {
      PositionY -= 10;
      rocket.style.marginBottom = PositionY + 'px';
      altitude -= 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }

  });
//used instead of defining seperately 
  function resetRocket() {
    shuttleBackground.style.backgroundColor = "green";
    altitude = 0;
    spaceShuttleHeight.innerHTML = altitude;
    PositionX = 0;
    PositionY = 0;
    rocket.style.marginLeft = PositionX + 'px';
    rocket.style.marginBottom = PositionY + 'px';
  }

});

/*upButton.addEventListener("click", function () {
  document.getElementById("rocket").style.top = -10 + 'px';
  document.getElementById("spaceShuttleHeight").innerHTML += 10;
});

downButton.addEventListener("click", function () {
  document.getElementById("rocket").style.bottom = 10 + 'px';
  document.getElementById("spaceShuttleHeight").innerHTML -= 10;
});

leftButton.addEventListener("click", function () {
  document.getElementById("rocket").style.left = -10 + 'px';
});

rightButton.addEventListener("click", function () {
  document.getElementById("rocket").style.right = 10 + 'px';
});
};
*/