function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.261407876987132, lng: -97.74064430143332},
        zoom: 8
    })

// Custom markers
    var markerOptions = {
        position: new google.maps.LatLng(30.380399007158175, -97.7152186045917),
        map: map,
        icon: './assets/images/beer-mug.png'
    }

    let marker = new google.maps.Marker(markerOptions);
    marker.setMap(map);

};








// Map ID: 40a6433050f67110
// API key: AIzaSyAgUNZngbasW9LtIjfNm5M_ICxJxjlCIkc
