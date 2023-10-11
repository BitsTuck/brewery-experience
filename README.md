# brewery-experience


Version 1
Deployed 12 October 2023

<img width="1536" alt="Screenshot 2023-10-11 at 13 31 32" src="https://github.com/BitsTuck/brewery-experience/assets/144712161/03fa3a78-5948-41b9-a4e0-d2892544db60">

Deployed page: https://bitstuck.github.io/brewery-experience/

## Description

Project #1 for the University of Texas at Austin specified that we create an application with real-world implications to showcase the skills that we learned in the first part of the course. Group #6, comprised of Michael Tritsch, Libby You, Martin Sandoval and Elizabeth Tucker, decided to create a brewery tracker, titled Brewery Experience. 

Per the assignment, we made our brewery tracker with two open-sourced APIs: the Google Maps API and the Open Brewery Database API. The aim was to enable users to enter a city name, and to be able to see local beweries in the area. This involved integrating the two APIs so that the map would display the breweries by location.

There is also an About Us page, which talks about who we are and why we created this app, as well as a page to store favorite items.

## User Story

As a fan of breweries, I want a centralized app that tells me about local breweries in my area and around the country.

WHEN I load the page, a map appears along with information about the application and a search bar.

WHEN I put in my city in the search bar, the map shows me breweries in the metropolitan area.

WHEN I hover over the map marker, I am able to read the name of the brewery via markers.

WHEN I find a brewery I like or want to see, I can add it to a list.

## Installation

N/A

## Usage

When the page loads, you will see a search bar on the left and a favorites input on the right, followed by a map centered around the United States. 

<img width="1536" alt="Screenshot 2023-10-11 at 13 31 32" src="https://github.com/BitsTuck/brewery-experience/assets/144712161/03fa3a78-5948-41b9-a4e0-d2892544db60">

To search for breweries in your city of choice, enter your city name in the seach bar on the left, and press Search.

The Google Map will zoom to your city, and will display beer mug icons where local breweries are located. If you click on any one of these icons, the name of the brewery will be displayed. 

<img width="1089" alt="Screenshot 2023-10-11 at 15 26 06" src="https://github.com/BitsTuck/brewery-experience/assets/144712161/66fb14d2-fecd-4cbc-a8aa-27957e18e1bc">

To navigate the Google Map, use Command + scroll (for Mac), Control + scroll (for Windows). The map can also be "grabbed" and "dragged" to change the viewport.

When you find a favorite beer or brewery (or area! the world is your pint glass), type it into the Favorites bar on the upper right. Click Submit. To view your stored Favorites, click on the Favorites button to be taken to the Favorites page.

<img width="1182" alt="Screenshot 2023-10-11 at 15 31 37" src="https://github.com/BitsTuck/brewery-experience/assets/144712161/80549697-be6b-459b-ab84-a24c6d6f871e">

To reset the map on the home page, click the Reset button below the brewery Search field.

![Gif demonstrating how to use Brewery Experience](./assets/images/Brewery%20Experience.gif)



## Challenges

Our group was able to work comfortably and collaborate closely in order to determine what exactly we wanted to create. The idea came about organically. The creative process did present some challenges.

The original plan was for the user to come to a landing page, where they would type in their city name. By clicking the search bar, they would be taken to another page and the map would be displayed, along with the beweries in the user's designated city. This was a challenging ask for the time alloted, and so this idea was iceboxed. Instead, the user goes directly to the map page and enters the city to see their results. An About Us page was added in place of the initial landing page and a favorites page was created to store user input about their favorite breweries/beers.

There were learning curves with Bulma, the CSS framework we selected, as well as with the APIs themselves and their combination, and then getting them to display the information we wanted. 

Additionally, deciding the best way to effectively utilize local storage was the subject of much discussion. Ultimately our decision was made based on time constraints, as opposed to the ideal version of the app we would like to produce.

## Icebox Items:
<ul>
<li>A modal that asks users' age (21+) before they enter the site</li>
<li>Refined search by brewery type, proprietor, etc.</li>
<li>Random brewery selector</li>
<li>Search by zip code</li>
<li>Rating system</li>
<li>Find breweries by user location</li>
<li>Ability to give driving/walking directions</li>
</ul>


## Credits

Brewery Experience was a collaboration between Michael Tritsch, Libby You, Martin Sandoval, and Elizabeth Tucker. 
<ul>
<li><a href="https://bulma.io/" target=_blank>Bulma</a> was our CSS framework.</li>
<li>Our colors were selected from <a href="https://color.adobe.com/explore" target=_blank>Adobe Color</a>.</li>
<li>Our fonts are Rock Salt and Catamaran, selected through <a href="https://fontjoy.com" target=_blank>FontJoy</a> and provided by <a href="https://fonts.google.com/" target=_blank>Google Fonts</a>.</li>
<li>We used the <a href="https://developers.google.com/maps" target=_blank>Google Maps API</a>.</li>
<li>We used the <a href="https://www.openbrewerydb.org/" target=_blank>Open Brewery Database API</a>.</li>
<li>Images were provided by <a href="https://pixabay.com/photos/beer-lemonade-drops-water-fresh-253791/" target=_blank>Pixabay</a>.</li>
<li>Icons were provided by <a href="https://www.flaticon.com/free-icons/beer" title="beer icons">Beer icons created by Good Ware - Flaticon</a></li>
</ul>
JavaScript and JQuery made our site great.

Ian Darland, TA extraordinare, was helpful in getting the search zoom feature to work.



## Initial Wireframes 
![2_720](https://github.com/BitsTuck/brewery-experience/assets/144712161/d5e11df5-6349-44f5-8f14-4be689bd8852)
![3_720](https://github.com/BitsTuck/brewery-experience/assets/144712161/85c38ac3-fbd1-49f6-97b9-1274af9111a6)
![1_720](https://github.com/BitsTuck/brewery-experience/assets/144712161/fd048c46-5c90-42df-8313-131a502b6814)



## License

Please refer to the license in the repo.

---