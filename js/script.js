/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array containing five 'quote' objects
***/
const quotes = [
  {
    quote: "Love your Enemies, for they tell you your Faults.",
    source: "Benjamin Franklin",
    citation: "Poor Richard's Almanack",
    year: "1756",
    tags: "politics"
},{
  quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  source: "Helen Keller",
  tags: "life"
},{
  quote: "Beware; for I am fearless, and therefore powerful.",
  source: "Mary Shelley",
  citation: "Frankenstein"
},{
  quote: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.",
  source: "Harper Lee",
  citation: "To Kill a Mockingbird"
},{
  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
  source: "Nelson Mandela"
}];



/***
 * `getRandomQuote` function
 * Pulls a random quote object from quotes array
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length)); //creates and stores a random number from 0 to the last number of index of given array 
  return quotes[randomNumber];
}


/***
 * `printQuote` function
 * Prints random quote retrieved by getRandomQuote() on the browser
***/

function printQuote() {
  let randomQuote = getRandomQuote();                        
  let htmlStr = `<p class="quote"> ${randomQuote.quote} </p>
                 <p class="source"> ${randomQuote.source}`;

  if (randomQuote.citation) {
    htmlStr += `<span class="citation">${randomQuote.citation}</span>`; 
  };

  if (randomQuote.year) {
    htmlStr += `<span class="year">${randomQuote.year}</span>`;
  };

  if (randomQuote.tags) {
    htmlStr += `<span class="tags">, ${randomQuote.tags}</span>`;
  };

  htmlStr += `</p>`
  document.getElementById('quote-box').innerHTML = htmlStr;
  
  updateBackgoundColor(); //randomizes background color everytime printQuote() is called

};

/**Sets background color to a random color  */
function updateBackgoundColor(){
  document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

/**Timer function that calls printQuote() every 10 seconds  */
function myTimer(){
  setInterval(printQuote,15000);
}

myTimer(); //Will call printQuote() every 10 seconds updating quote and background color

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/



document.getElementById('load-quote').addEventListener("click", printQuote, false);