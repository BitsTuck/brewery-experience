// Sets the localStorage items to append as a list on the favorite page
var brewery = JSON.parse(localStorage.getItem('Brewery'));

console.log(brewery);

for (var i = 0; i < brewery.length; i++) {
    var breweryName = brewery[i];
    var li = $('<li></li>');
    li.text(breweryName);

    $('.brewList').append(li);
};