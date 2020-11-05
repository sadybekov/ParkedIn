/**
 * Initiates a map with parking coordinates and zooms at Lake Louise Parking
 */
function initMap() {
    //Coordinates
    const lakeLouise = { lat: 51.425, lng: -116.1773 };
    const lakeLouiseParking = { lat: 51.417123, lng: -116.215194 };
    const moraineLakeParking = { lat: 51.3294, lng: -116.1817 };
    const overflowParking = { lat: 51.3867448, lng: -116.1302803 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10.5,
        center: lakeLouiseParking,
    });
    // const marker = new google.maps.Marker({
    //     position: lakeLouise,
    //     map: map,
    // });
    
    //Markers
    const markerMoraineLakeParking = new google.maps.Marker({
        position: moraineLakeParking,
        map: map,
    }); 
    const markerLakeLouiseParking = new google.maps.Marker({
        position: lakeLouiseParking,
        map: map,
    });
    const markerOverflowParking = new google.maps.Marker({
        position: overflowParking,
        map: map,
    });
}

const countMoraineLake = 0

/**
 * Parking objects
 */

 //Lake Louise
const parkingLakeLouise = {
    name: "Lake Louise",
    stalls: 200,
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

//Moraine Lake
const parkingMoraineLake = {
    name: "Moraine Lake",
    stallsTotal: 100,
    stallsTaken: countMoraineLake, //TODO create count that is parking specific 
    stallsAvailable: this.stallsTotal-this.stallsTaken,
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
    stalls: 400,
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
const parkings = [parkingLakeLouise, parkingMoraineLake, parkingOverflow]

/**
 * Parking name assignment
 */
document.querySelector("#ParkingOneName").innerHTML = parkings[0].name
document.querySelector("#ParkingTwoName").innerHTML = parkings[1].name
document.querySelector("#ParkingThreeName").innerHTML = parkings[2].name

/**
 * Toggle zoom at parking zone
 */
var buttonLakeLoiseParking = document.querySelectorAll("#headingOne")
console.log(buttonLakeLoiseParking[0])
var count = 0
buttonLakeLoiseParking[0].addEventListener("click", function() {
    count ++;
    console.log(count)
})
