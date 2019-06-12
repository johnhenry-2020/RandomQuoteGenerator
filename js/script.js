const quotes = [
  {
    quote:
      "You can’t separate peace from freedom because no one can be at peace unless he has his freedom.",
    citation: "Malcolm X",
    source: "Speech, Prospects for Freedom",
    year: 1965,
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/malcolm-x-thinks-jovemini-art.jpg"
  },
  {
    quote:
      "I am an invisible man...I am a man of substance, of flesh and bone, fiber and liquids—and I might even be said to possess a mind. I am invisible, understand, simply because people refuse to see me.",
    citation: "Ralph Ellison",
    source: "Invisible Man",
    year: 1952,
    image: "https://image.pbs.org/poster_images/assets/Intro_Ellison_still3.png"
  },

  {
    quote:
      "Herein lies the tragedy of the age: not that men are poor—all men know something of poverty; not that men are wicked—who is good? Not that men are ignorant—what is truth? Nay, but that men know so little of men.",
    citation: "W.E.B. Du Bois",
    source: "The Souls of Black Folk",
    year: 1903,
    image: "http://yourblackworld.net/wp-content/uploads/2017/02/Screenshot-331-1000x600.png"
  },

  {
    quote:
      "If one is lucky, a solitary fantasy can totally transform one million realities.",
    citation: "Maya Angelou",
    source: "The Heart of a Woman",
    year: 1981,
    image: "https://static1.squarespace.com/static/51734e04e4b08db710716119/5a4b7e6571c10bd7b36d5c7d/5a4b7e6571c10bd7b36d5c90/1510978279747/maya-angelou-she-was-spe-012.jpg"
  },

  {
    quote:
      "It is the duty of the younger Negro artist...to change through the force of his art that old whispering ‘I want to be white,’ hidden in the aspirations of his people, to ‘Why should I be white? I am a Negro—and beautiful!",
    citation: "Langston Hughes",
    source: "The Negro Artist and the Racial Mountain, The Nation",
    year: 1926,
    image: "https://www.thevillagecelebration.com/wp-content/uploads/2018/12/headshot-2-1000x600.jpg"
  },

  {
    quote:
      "We are not fighting for integration, nor are we fighting for separation. We are fighting for recognition as human beings...In fact, we are actually fighting for rights that are even greater than civil rights and that is human rights.",
    citation: "Malcom X",
    source: "Black Revolution",
    year: 1964,
    image: "http://www.chrflagship.uwc.ac.za/wp-content/uploads/2018/02/MalcomX3.jpg"
  }
];

const getRandomQuote = () => {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNum];
  return randomQuote;
}


const imageEvent = document.querySelector("#loadQuote");
const background = document.querySelector('#background');


const printQuote = () => {
  const random = getRandomQuote();
  let printMe = '';
  printMe += '<p class="quote">' +
    random.quote + '</p>' + '<p class="source">' +
    random.source + '<span class="citation">' +
    random.citation + '</span>';
  if (random.year) {
    printMe += '<span class="year">' + random.year + '</span>';
  } + '</p>';
  document.getElementById('quote-box').innerHTML = printMe;
  background.style.backgroundImage = "url(" + random.image + ")";
}


// string interpelation
//  '<p class="quote">' +
//   random.quote + '</p>' + '<p class="source">' +
//   random.source + '<span class="citation">' +
//   random.citation + '</p>'


// string literals
// `sentence ${variable}`
