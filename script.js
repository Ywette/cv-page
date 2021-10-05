var map;

function initMap() {
    var mapCenter = {
        lat: 33.589886,
        lng: -7.603869
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: mapCenter,
        styles: mapStyle,
        disableDefaultUI: true
    });
}