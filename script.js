document.querySelector()

function initMap() {
    const lakeLouise = { lat: 51.425, lng: -116.1773 };
    const lakeLouiseParking = { lat: 51.417123, lng: -116.215194 };
    const morainLakeParking = { lat: 51.3294, lng: -116.1817 };
    const overFlowParking = { lat: 51.3867448, lng: -116.1302803 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10.5,
        center: lakeLouiseParking,
    });
    // const marker = new google.maps.Marker({
    //     position: lakeLouise,
    //     map: map,
    // });
    const markerMorainLakeParking = new google.maps.Marker({
        position: morainLakeParking,
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