document.querySelector()

function initMap() {
    const lakeLouise = { lat: 51.425, lng: -116.1773 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: lakeLouise,
    });
        const marker = new google.maps.Marker({
            position: lakeLouise,
            map: map,
    });
}