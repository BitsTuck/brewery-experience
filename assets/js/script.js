
function getParams(){
var searchparamArr = document.location.search.split('&');

var query = searchparamArr[0].split('=').pop();
var format = searchparamArr[1].split('=').pop();

searchbrew(query, format);

}
function searchbrew(query){
    var locQueryUrl = 'https://api.openbrewerydb.org/v1/breweries/search?query='

}