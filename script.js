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


//variables
let parkingLots = [];
const availableLots = document.getElementsByClassName("counter");
const availableParkingNumbers = []
const namesParkingLots = document.getElementsByClassName("buttonName");

//methods
/**
 * Fetch parkingLots object from server
 * returns an array of parking lots and
 * updates stalls available
 * 1 - Lake Louise
 * 2 - Moraine Lake
 * 3 - Overflow 
 */
function retrieveParkingLots() {
    fetch ('http://localhost:8082/parkingLots')
    .then(response => response.json())
    .then(lots => {
        parkingLots = lots;
        // debugger;
    })
    .then(parkingLots => updateStallsAvailable());

}

/**
 * goes through the array of parking lots and updates stalls available
 */
function updateStallsAvailable() {
    for (let i = 0; i < parkingLots.length; i++) {
        namesParkingLots[i].innerHTML = parkingLots[i].name;  
        availableLots[i].innerHTML = calculateStallsAvailable(parkingLots[i]);
        parkingWarning(availableLots[i])
    };
}

/**
 * calculates stalls available for each obj
 * @param {parkingLot} obj 
 */
function calculateStallsAvailable (obj) {
    let stallsAvailable = obj.capacity - obj.stallsOccupied;
    if (stallsAvailable === 0) {
        stallsAvailable = "FULL";
    }
    return stallsAvailable;
}

/**
 * onload loader of UI
 */
function pageLoad() {
    retrieveParkingLots();
}

/**
 * sets intervals for stallsAvailable updates
 */
const setIntervalUpdateStallsAvailable = setInterval(retrieveParkingLots, 5000);
/**
 * returns an object of a parkign by id
 * @param {
 * 1 - Lake Louise
 * 2 - Moraine Lake
 * 3 - Overflow 
 * } id 
 */
function retrieveParkingLot(id) {
    fetch (`http://localhost:8082/parkingLot?id=${id}`)
    .then(response => response.json())
    .then(lot => {
        console.log(lot);
        debugger;
    });
}



/**
 * Parking name assignment
 * TO DO link name asignment to array of parking lots
 */
// function assignNames(){
    // for (let i = 0; i < parkingLots.length; i++) {
    //     namesParkingLots[i].innerHTML = parkingLots[i].name   
    // }
// }

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






//***********************************************************************//


//this adds the available stalls to the object 
// parkingLakeLouise.stallsAvailable = calculateStallsAvailable(parkingLakeLouise);
// parkingMoraineLake.stallsAvailable = calculateStallsAvailable(parkingMoraineLake);
// parkingOverflow.stallsAvailable = calculateStallsAvailable(parkingOverflow);

// this displays the # of available stalls from the object onto the display screen

// availableLots[0].innerHTML = parkingLakeLouise.stallsAvailable;
// availableLots[1].innerHTML = parkingMoraineLake.stallsAvailable;
// availableLots[2].innerHTML = parkingOverflow.stallsAvailable;
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