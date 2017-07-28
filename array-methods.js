console.log ("array-methods.js");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");
var el2 = document.getElementById("planets-cap");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function(item) {
    // console.log(item);
    el.innerHTML += `<li>${item}</li>`;
});



// Use the map method to create a new array where the first letter of each planet is capitalized
let planetCapitalized = planets.map(function(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
});
	console.log("planetCapitalized",planetCapitalized);


// Use the filter method to create a new array that contains planets with the letter 'e'
let planetsWithAnE = planetCapitalized.filter(function(planet) {
	return planet.includes("e");
});
	console.log ("planetsWithAnE", planetsWithAnE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let fullSentence = words.reduce((previous, current) => {
	return previous + " " + current;
});
console.log ("fullSentence", fullSentence);