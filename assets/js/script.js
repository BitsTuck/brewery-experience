function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.261407876987132, lng: -97.74064430143332},
        zoom: 8,
        mapId: '40a6433050f67110'
    })

// Custom markers
    var markerOptions = {
        position: new google.maps.LatLng(30.380399007158175, -97.7152186045917),
        map: map,
        icon: './assets/images/beer-mug.png',
        title: 'BREWERY DB INFO HERE'
    }

    let marker = new google.maps.Marker(markerOptions);
    marker.setMap(map);
};
// the function searchbrew makes url varaible turns reponse to a json object array when entering city name

function searchbrew(query) {
    var url = 'https://api.openbrewerydb.org/v1/breweries?q=_${query}';
    fetch (url)
    .then(response => response.json())
    .then((jsonData) => {
        jsonData.map(element => element.name.city);
         console.log(jsonData);
    });
    window.onload = () => {
        var searchcityElement = document.getElementsByClassName("field");
        searchcityElement.onkeyup = (event) => {
            searchbrew(searchcityElement.value);
        };
    }
}









// Map ID: 40a6433050f67110
// API key: AIzaSyAgUNZngbasW9LtIjfNm5M_ICxJxjlCIkc
