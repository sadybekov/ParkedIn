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
        map.setZoom(12);
    })
    buttonMoraineLakeParking.addEventListener("click", function() {
        map.panTo(moraineLakeParkingCoordinates);
        map.setZoom(12);
    })
    buttonOverflowParking.addEventListener("click", function() {
        map.panTo(overflowParkingCoordinates);
        map.setZoom(12);
    })

}

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
let countMoraineLake = 0;
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

