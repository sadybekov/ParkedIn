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
const parkingInfoCards = document.getElementsByClassName("card-body");

//methods

/**
 * Onloads the list of functions to set up the page.
 * Can be populated with more functions later on.
 */
function pageLoad() {
    retrieveParkingLots();
}

/**
 * Fetches parkingLots object from server
 * updates stalls available
 * returns an array of parking lots with following IDs
 * 1 - Lake Louise
 * 2 - Moraine Lake
 * 3 - Overflow 
 */
function retrieveParkingLots() {
    fetch ('http://localhost:8082/parkingLots')
    .then(response => response.json()) //converts response json file to an object
    .then(lots => {
        parkingLots = lots;
    })
    .then(parkingLots => updateStallsAvailable());
}

/**
 * goes through the array of parking lots and updates stalls available
 */
function updateStallsAvailable() {
    for (let i = 0; i < parkingLots.length; i++) {
        namesParkingLots[i].innerHTML = parkingLots[i].name;  
        //parkingInfoCards[i].innerHTML = parkingLots[i].hours;
        availableLots[i].innerHTML = calculateStallsAvailable(parkingLots[i]);
        parkingWarning(availableLots[i])
    };
}

// parkingLots[0].hours is shows the lake louise hours object. 

let hours = Object.entries(parkingLots[0].hours);
console.log(hours);

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
 * sets intervals for stallsAvailable updates
 */
//const setIntervalUpdateStallsAvailable = setInterval(retrieveParkingLots, 5000);
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
    .then(response => response.json()) //converts response json file to an object
    .then(lot => {
        console.log(lot);
        //debugger;
    });
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
