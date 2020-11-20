/**
 * Initiates a map with parking coordinates and zooms at Lake Louise Parking
 */

//Coordinates
const lakeLouiseTownCoordinates = { lat: 51.425, lng: -116.1773 };
const lakeLouiseParkingCoordinates = { lat: 51.4149585, lng: -116.2134862};
const moraineLakeParkingCoordinates = { lat: 51.3294, lng: -116.1817 };
const overflowParkingCoordinates = { lat: 51.3867448, lng: -116.1302803 };

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10.5,
        center: lakeLouiseParkingCoordinates,
    });
    //Markers
    const markerMoraineLakeParking = new google.maps.Marker({
        position: moraineLakeParkingCoordinates,
        map: map,
    }); 
    const markerLakeLouiseParking = new google.maps.Marker({
        position: lakeLouiseParkingCoordinates,
        map: map,
    });
    const markerOverflowParking = new google.maps.Marker({
        position: overflowParkingCoordinates,
        map: map,
    });

    const buttonLakeLoiseParking = document.querySelector("#headingOne")
    const buttonMoraineLakeParking = document.querySelector("#headingTwo")
    const buttonOverflowParking = document.querySelector("#headingThree")
    
    buttonLakeLoiseParking.addEventListener("click", function() {
        map.panTo(lakeLouiseParkingCoordinates);
        map.setZoom(16);
    })
    buttonMoraineLakeParking.addEventListener("click", function() {
        map.panTo(moraineLakeParkingCoordinates);
        map.setZoom(16);
    })
    buttonOverflowParking.addEventListener("click", function() {
        map.panTo(overflowParkingCoordinates);
        map.setZoom(15);
    })

}

/**
 * Parking objects
 */
 
 //Lake Louise
const parkingLakeLouise = {
    name: "Lake Louise",
    capacity: 15,
    stallsTaken: 0,
    hours: {
        monday: "8:00 - 22:00",
        tuesday: "8:00 - 22:00",
        wednesday: "8:00 - 22:00",
        thursday: "8:00 - 22:00",
        friday: "8:00 - 22:00",
        saturday: "8:00 - 22:00",
        sunday: "8:00 - 22:00",
    },
    responsible: "007",
}

let countMoraineLake = 0;
//Moraine Lake

const parkingMoraineLake = {
    name: "Moraine Lake",
    capacity: 15,
    stallsTaken: 6,
    hours: {
        monday: "8:00 - 22:00",
        tuesday: "8:00 - 22:00",
        wednesday: "8:00 - 22:00",
        thursday: "8:00 - 22:00",
        friday: "8:00 - 22:00",
        saturday: "8:00 - 22:00",
        sunday: "8:00 - 22:00",
    },
    responsible: "001",
}

//Overflow
const parkingOverflow = {
    name: "Overflow",
    capacity: 15,
    stallsTaken: 15,
    hours: {
        monday: "8:00 - 22:00",
        tuesday: "8:00 - 22:00",
        wednesday: "8:00 - 22:00",
        thursday: "8:00 - 22:00",
        friday: "8:00 - 22:00",
        saturday: "8:00 - 22:00",
        sunday: "8:00 - 22:00",
    },
    responsible: "002",
}

/**
 * Array of parking zones
 * [0] - Lake Louise
 * [1] - Moraine Lake
 * [2] - Overflow
 */

//const parkingLots = [parkingLakeLouise, parkingMoraineLake, parkingOverflow]

/**
 * Fetch parkingLots object from server 
 */

const parkingLots = []

function retrieveParkingLots() {
    fetch ('http://localhost:8082/parkingLots')
    .then(response => response.json())
    .then(lots => {
        console.log(lots);
        debugger;
        // availableLots[0].innerHTML = parkingLakeLouise.stallsAvailable;
        // availableLots[1].innerHTML = parkingMoraineLake.stallsAvailable;
        // availableLots[2].innerHTML = parkingOverflow.stallsAvailable;
    });
}





/**
 * Parking name assignment
 */

document.querySelector("#ParkingOneName").innerHTML = parkingLots[0].name
document.querySelector("#ParkingTwoName").innerHTML = parkingLots[1].name
document.querySelector("#ParkingThreeName").innerHTML = parkingLots[2].name

/**
 * Toggle zoom at parking zone
 */
// const buttonLakeLoiseParking = document.querySelector("#headingOne")
// // console.log(buttonLakeLoiseParking[0])

// let count = 0
// buttonLakeLoiseParking.addEventListener("click", function() {
//     count ++;
//     console.log(count)
//     console.log(typeof(map))
//     map = {
//         zoom: 15,
//         center: moraineLakeParkingCoordinates,
//     }
// })



const Plus = document.getElementsByClassName("buttonCounterPlus");
const Minus = document.getElementsByClassName("buttonCounterMinus");
let availableLots = document.getElementsByClassName("counter");

//***********************************************************************//
// function to calculate number of stalls available for each obj
function calculateStallsAvailable (obj) {
    let stallsAvailable = obj.capacity - obj.stallsTaken;
    if (stallsAvailable === 0) {
        stallsAvailable = "FULL";
    }
    return stallsAvailable;
}

//this adds the available stalls to the object 
parkingLakeLouise.stallsAvailable = calculateStallsAvailable(parkingLakeLouise);
parkingMoraineLake.stallsAvailable = calculateStallsAvailable(parkingMoraineLake);
parkingOverflow.stallsAvailable = calculateStallsAvailable(parkingOverflow);

// this displays the # of available stalls from the object onto the display screen

availableLots[0].innerHTML = parkingLakeLouise.stallsAvailable;
availableLots[1].innerHTML = parkingMoraineLake.stallsAvailable;
availableLots[2].innerHTML = parkingOverflow.stallsAvailable;
//***********************************************************************//

function addStalls(obj) {
    if (obj.stallsTaken < obj.capacity) {
        obj.stallsTaken ++;
    }
    obj.stallsAvailable = obj.capacity - obj.stallsTaken;
    if (obj.stallsAvailable === 0) {
        obj.stallsAvailable = "FULL";
    }
}

function subtractStalls(obj) {
    if (obj.stallsTaken > 0) {
        obj.stallsTaken --;
    }
    obj.stallsAvailable = obj.capacity - obj.stallsTaken; 
}

//***********************************************************************//
//function for parking warning colours  
function parkingWarning (availableLots) {
    if (parseInt(availableLots.innerHTML) <= 10 && parseInt(availableLots.innerHTML) >= 1 ) {
        availableLots.style.color = "#FFA500";
    } else if (availableLots.innerHTML === "FULL") {
        availableLots.style.color = "#FF0000";
    } else if (parseInt(availableLots.innerHTML) > 10) {
        availableLots.style.color = "#ADFF2F";
    }
}

parkingWarning(availableLots[0]);
parkingWarning(availableLots[1]);
parkingWarning(availableLots[2]);
//***********************************************************************//

Plus[0].onclick = () => {addStalls(parkingLakeLouise); availableLots[0].innerHTML = parkingLakeLouise.stallsAvailable; parkingWarning (availableLots[0]); 
}
Minus[0].onclick = () => {subtractStalls(parkingLakeLouise); availableLots[0].innerHTML = parkingLakeLouise.stallsAvailable; parkingWarning (availableLots[0]); 
}

Plus[1].onclick = () => { addStalls(parkingMoraineLake); availableLots[1].innerHTML = parkingMoraineLake.stallsAvailable; parkingWarning (availableLots[1]);
}
Minus[1].onclick = () => { subtractStalls(parkingMoraineLake); availableLots[1].innerHTML = parkingMoraineLake.stallsAvailable; parkingWarning (availableLots[1]);
}

Plus[2].onclick = () => {  addStalls(parkingOverflow); availableLots[2].innerHTML = parkingOverflow.stallsAvailable; parkingWarning (availableLots[2]);
}
Minus[2].onclick = () => { subtractStalls(parkingOverflow); availableLots[2].innerHTML = parkingOverflow.stallsAvailable; parkingWarning (availableLots[2]);
}

