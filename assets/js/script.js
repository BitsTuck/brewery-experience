function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.0902, lng: -95.7129},
        zoom: 5,
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

function breweryApi() {

    $('.searchBtn').on('click', function(event) {
    event.preventDefault();
    var citySelection = $('.brewSearch').children().eq(0).val();
    var brewUrl = `https://api.openbrewerydb.org/v1/breweries?by_city=${citySelection}&per_page=50`
    
    fetch (brewUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        map.setCenter(new google.maps.LatLng(data[0].latitude, data[0].longitude));
        map.setZoom(10);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].latitude, data[i].longitude);
            var markerOptions = {
                
                position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
                map: map,
                icon: './assets/images/beer-mug.png',
                title: data[i].name
                
            }
            
        
            let marker = new google.maps.Marker(markerOptions);
            marker.setMap(map);
            
            
           
        }
    })
    });
};
$('.searchBtn').on('click', function(event){
event.preventDefault();
console.log($('.brewSearch').val());

});
breweryApi();

<<<<<<< HEAD
breweryApi();

=======
>>>>>>> origin




// Map ID: 40a6433050f67110
<<<<<<< HEAD
// API key: AIzaSyAgUNZngbasW9LtIjfNm5M_ICxJxjlCIkc


// var cityData = jsonData.map(element => element.name.city);
// console.log(cityData);
// });
// window.onload = () => {
// var searchcityElement = document.getElementsByClassName("field");
// searchcityElement.onkeyup = (event) => {
//     searchbrew(searchcityElement.value);

=======
// API key: AIzaSyAgUNZngbasW9LtIjfNm5M_ICxJxjlCIkc
>>>>>>> origin
