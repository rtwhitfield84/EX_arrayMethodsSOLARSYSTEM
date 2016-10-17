var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach(function(planet){
	el.innerHTML +="<h3>" + " " + planet + " " + "</h3>";
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var capPlanets = planets.map(function(planet){return planet.charAt(0).toUpperCase() + planet.slice(1);});
el.innerHTML += "<h3>" + capPlanets + "</h3>";


// Use the filter method to create a new array that contains planets with the letter 'e'
var filteredPlanets = planets.filter(function(planet){return planet.indexOf("e") === 1;});
el.innerHTML += "<h3>" + filteredPlanets + "</h3>";

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var newSentence = words.reduce(function(first, second){return  first + " " + second;});
el.innerHTML += "<h1>" + newSentence + "</h1>";
