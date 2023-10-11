// Calling the Google Maps API
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.0902, lng: -95.7129},
        zoom: 5,
        // Custom MAP ID with selected POIs removed and custom colors
        mapId: '40a6433050f67110'
    })
};

// Open Brewery DB API call
function breweryApi() {

    // Event listener on the search input button to gather breweries by city (SEE: ${citySelection})
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
        // Centers the map on the searched city by using a set coordinates within the brewery data
        map.setCenter(new google.maps.LatLng(data[3].latitude, data[3].longitude));
        map.setZoom(12);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].latitude, data[i].longitude);
            var name = data[i].name;
            console.log(name);
            // Placing the custom mug markers to denote breweries within the designated city
            var markerOptions = {
                position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
                map: map,
                icon: './assets/images/beer-mug.png',
            }
            // Info window text content
            let infowindow = new google.maps.InfoWindow({
                content: name
            })
            // Assigns an infowindow to the brewery markers
            // When marker is clicked, the brewery name appears
            let marker = new google.maps.Marker(markerOptions);
            marker.addListener('click', function() {
                infowindow.open(map, marker);
                infowindow.setContent(content);
            });
        }
    })
    });
};

// General page reload function to clear the map
function resetMap() {
    $('.resetMap').on('click', function(event) {
        location.reload();
    })
};

// localStorage functionality
$('.brewStorage').on('submit', function(event) {
    event.preventDefault();
    console.log($('.brewery').val());
    var favInput = $('.brewery').val();
    var brewery = JSON.parse(localStorage.getItem('Brewery'));
    if (!brewery) {
        brewery = [];
    };
    brewery.push(favInput);
    localStorage.setItem("Brewery", JSON.stringify(brewery));
})

resetMap();
breweryApi();
