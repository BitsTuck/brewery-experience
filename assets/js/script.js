
function getParams(){
var searchparamArr = document.location.search.split('&');

var query = searchparamArr[0].split('=').pop();
var format = searchparamArr[1].split('=').pop();

searchbrew(query, format);

}
function searchApi(query, format) {
    var locQueryUrl = 'https://api.openbrewerydb.org/v1/breweries/search?query={search}';
  
    if (format) {
      locQueryUrl = 'https://api.openbrewerydb.org/v1/breweries/' + format + 'query={search}';
    }
  
    locQueryUrl = locQueryUrl + '&q=' + query;
    console.log(locQueryUrl);
  
    fetch(locQueryUrl)
      .then(function (response) {
  
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (locRes) {
        // write query to page so user knows what they are viewing
        resultTextEl.textContent = locRes.search.query;
  
        console.log(locRes);
  
        if (!locRes.results.length) {
          console.log('No results found!');
          resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
        } else {
          resultContentEl.textContent = '';
          for (var i = 0; i < locRes.results.length; i++) {
            printResults(locRes.results[i]);
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  
  function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchApi(searchInputVal, formatInputVal);
  }
  
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);
  
  getParams();