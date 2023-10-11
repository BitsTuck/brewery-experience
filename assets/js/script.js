function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.0902, lng: -95.7129},
        zoom: 5,
        mapId: '40a6433050f67110'
    })
};
// the function searchbrew makes url varaible turns reponse to a json object array when entering city name

function breweryApi() {

    $('.searchBtn').on('click', function(event) {
    event.preventDefault();
    var citySelection = $('.brewSearch').children().eq(0).val();
    var brewUrl = `https://api.openbrewerydb.org/v1/breweries?by_city=${citySelection}&per_page=100`
    
    fetch (brewUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        map.setCenter(new google.maps.LatLng(data[1].latitude, data[1].longitude));
        map.setZoom(12);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].latitude, data[i].longitude);
            var name = data[i].name;
            var url = data[i].website_url
            console.log(name);
            
            var markerOptions = {
                position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
                map: map,
                icon: './assets/images/beer-mug.png',
            }

            let infowindow = new google.maps.InfoWindow({
                content: name,
            })
                
            

            let marker = new google.maps.Marker(markerOptions);
            //marker.setMap(map);
            marker.addListener('click', function() {
                infowindow.open(map, marker);
                infowindow.setContent(name);
            });
        }
    })
    });
};

function resetMap() {
    $('.resetMap').on('click', function(event) {
        location.reload();
    })
};

$('.favorites').on("submit", (e) => {
    e.preventDefault();
    var brewName = JSON.parse(localStorage.getItem("Brewery")) || [];
    brewName.push({brewery: input.value});
    localStorage.setItem("Brewery", JSON.stringify(brewName));
});









resetMap();
breweryApi();





// Map ID: 40a6433050f67110
// API key: AIzaSyAgUNZngbasW9LtIjfNm5M_ICxJxjlCIkc
