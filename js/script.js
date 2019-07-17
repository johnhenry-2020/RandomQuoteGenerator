/* =================================================== *
Project: Random Quote Generator (MAIN LOGIC - VANILLA JAVASCRIPT)
Author: Jonathan J. Jolivette
Created: 6.12.19
Version: 1.1
THANK YOU FOR YOUR SUPPORT
* =================================================== */
//bdDisplay function --> If the viewport is greater than, or equal to, 1400 pixels wide, no longer display the background image
const body = document.querySelector("body");
function bgDisplay(x) {
  if (fullScrn.matches) { // If media query matches
    body.className = "";
  }
  else {
    body.className = "background";
  }
}
let fullScrn = window.matchMedia("(min-width: 1400px)");
// Calling function at run time
bgDisplay(fullScrn);
fullScrn.addListener(bgDisplay); // Attach listener function on state changes


// ================================

//bdDisplay function --> If the viewport is less than, or equal to, 1400 pixels wide, encourage users to expand browswer window to full screen
function smDisplay(x) {
  if (smallScrn.matches) { // If media query matches
    alert('Please Increase Window To Full Screen For Best Vewing Experience');
  }
}
let smallScrn = window.matchMedia("(max-width: 1400px)");
// Calling function at run time
smDisplay(fullScrn);
smallScrn.addListener(smDisplay); // Attach listener function on state changes


// quotes element is an array of objects that stores all the key value pairs...
// used for inputting data/content onto DOM
// An additional "image" property added to the quote objects
// Image property is source of background image


const quotes = [
  {
    quote:
      "You can’t separate peace from freedom because no one can be at peace unless he has his freedom.",
    citation: "Malcolm X",
    source: "Speech, Prospects for Freedom",
    year: 1965,
    image: "./media/malcolm-x.jpg",
    id: 1
  },

  {
    quote:
      "I am an invisible man...I am a man of substance, of flesh and bone, fiber and liquids—and I might even be said to possess a mind. I am invisible, understand, simply because people refuse to see me.",
    citation: "Ralph Ellison",
    source: "Invisible Man",
    year: 1952,
    image: "./media/ellison.jpg",
    id: 2
  },

  {
    quote:
      "There is in this world no such force as the force of a person determined to rise. The human soul cannot be permanently chained.",
    citation: "W.E.B. Du Bois",
    source: "The Souls of Black Folk",
    year: 1903,
    image: "./media/dubois.jpg",
    id: 3
  },

  {
    quote:
      "If one is lucky, a solitary fantasy can totally transform one million realities.",
    citation: "Maya Angelou",
    source: "The Heart of a Woman",
    year: 1981,
    image: "./media/maya.jpg",
    id: 4
  },

  {
    quote:
      "It is the duty of the younger Negro artist...to change through the force of his art that old whispering ‘I want to be white,’ hidden in the aspirations of his people, to ‘Why should I be white? I am a Negro—and beautiful!",
    citation: "Langston Hughes",
    source: "The Negro Artist and the Racial Mountain, The Nation",
    year: 1926,
    image: "./media/langston.jpg",
    id: 5
  },

  {
    quote:
      "We are not fighting for integration, nor are we fighting for separation. We are fighting for recognition as human beings...In fact, we are actually fighting for rights that are even greater than civil rights and that is human rights.",
    citation: "Malcom X",
    source: "Black Revolution",
    year: 1964,
    image: "./media/x.jpg",
    id: 6
  }, {
    quote:
      "Never forget that intelligence rules the world and ignorance carries the burden. Therefore, remove yourself as far as possible from ignorance and seek as far as possible to be intelligent.",
    source: "Marcus Garvey Life & Lessons: A Centennial Companion to the Marcus Garvey & Universal Negro Improvement Association Papers",
    year: 1987,
    image: "./media/garvey.jpg",
    id: 7
  }
];

// arrow functions used throughout program
// arrow function syntax: (parameters) => {code} vs. function (parameters) {code}

const getRandomQuote = () => {
  // randomNum variable generates number between 0 & the number
  // of quote objets in quotes array rolling down the overall number
  // eliminating any decimal numbers insuring random number is always an integer vs float
  const randomNum = Math.floor(Math.random() * quotes.length);
  //randomQuote variable accesses a random index in quotes array
  const randomQuote = quotes[randomNum];
  return randomQuote;
}
// variable responisible for ability to select and in turn manipulate body of entire DOM
const background = document.querySelector('body');

// printQuote function outputs entire quote object to DOM
const printQuote = () => {
  //random variable stores the quote stored at the random index in quotes array
  const random = getRandomQuote();
  let printMe = '';
  // access each specific property found on quotes object and concatenate the...
  // properties with in the printMe empty string variable which displays to the DOM
  // with the structure and layout given to it via this program's HTML
  printMe += '<p class="quote">' +
    random.quote + '</p>' + '<p class="source">' +
    random.source + '<span class="citation">';
  // control flow used here to determine if a quote has a year associate with it...
  // if a year is associated with the quote than it is displayed on DOM w/ rest of properties
  if (random.citation) {
    printMe += '<span class="year">' + random.citation + '</span>'
  };
  // control flow used here to determine if a quote has a year associate with it...
  // if a year is associated with the quote than it is displayed on DOM w/ rest of properties
  if (random.year) {
    printMe += '<span class="year">' + random.year + '</span>';
  } + '</p>';
  // the structure and location of the quote object's properties are displayed to the DOM...
  // within the quote-box div
  document.getElementById('quote-box').innerHTML = printMe;
  // when the quote changes the background randomly changes along with the quote as well
  background.style.backgroundImage = "url(" + random.image + ")";
}


// UTILIZATION OF ARROWS TO NAVIGATE QUOTES
// Right and Left arrow keys trigger transition to new quote mimicing a click on quote button
//NOTE: The arrow keys don't trigger a keypress event, but they do trigger a keyup or keydown event.
document.addEventListener('keydown', (e) => {
  // let key = e.which;
  if (e.which == 13 || e.which == 39) { // the enter key code or right arrow
    printQuote();
    console.log(true);
  } else if (e.which == 37) { // left arrow
    printQuote();
    console.log(false);
  }
});

setInterval(function () { printQuote() }, 13000);


// NOTE:
// Future task(s):
// • (accessiblity feature with a toggle option) audio playback for each quote
// • create logic that keeps the program from repeating any quotes
