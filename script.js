

function initMap() {
    const lakeLouise = { lat: 51.425, lng: -116.1773 };
    const lakeLouiseParking = { lat: 51.417123, lng: -116.215194 };
    const moraineLakeParking = { lat: 51.3294, lng: -116.1817 };
    const overFlowParking = { lat: 51.3867448, lng: -116.1302803 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10.5,
        center: lakeLouiseParking,
    });
    // const marker = new google.maps.Marker({
    //     position: lakeLouise,
    //     map: map,
    // });
    const markerMoraineLakeParking = new google.maps.Marker({
        position: moraineLakeParking,
        map: map,
    }); 
    const markerLakeLouiseParking = new google.maps.Marker({
        position: lakeLouiseParking,
        map: map,
    });
    const markerOverFlowParking = new google.maps.Marker({
        position: overFlowParking,
        map: map,
    });
}

const countMoraineLake

const parkingLakeLouise = {
    name: "Lake Louise Parking We did it!",
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

const parkingMoraineLake = {
    name: "Moraine Lake Parking",
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

const parkingOverFlow = {
    name: "Over Flow Parking",
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

const parkings = [parkingLakeLouise, parkingMoraineLake, parkingOverFlow]

document.querySelector("#ParkingOneName").innerHTML = parkings[0].name