/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
//create an array with 10 quotes with source, citation and year in it

const quotes = [
    {
        quote: "If you've never tried, how will you ever know if there's any chance?",
        source: "Jack Ma"
       
    },
    {
        quote: "Entrepreneurship is neither a science nor an art. It is a practice",
        source: "Peter Drucker"
    },
    {
        quote: "I didn't get there by wishing for it or hoping for it, but by working for it",
        source: "Estee Lauder"
    },
    {
        quote: "You never lose in business, either you win or you learn",
        source: "Melinda Emerson"
    },
    {
        quote: "Stay afraid, but do it anyway. What's important is the action. You don't have to wait to be confident. Just do it, and eventually, the confidence will follow",
        source: "Carrie Fisher"
    },
    {
        quote: "Dream big. Start small. But most of all, start",
        source: "Simon Sinek"
    },
    {
        quote: "Whether you think you can or you can't, you're right",
        source: "Henry Ford"
    }
]


//testing code so far
// console.log(quotes[5]);
// console.log(quotes.length);
// console.log(typeof(quotes));




/***
 * `getRandomQuote` function
 ***/
//  Create the getRandomQuote function. The getRandomQuote function should
//  create a random number, and use that random number to return a random quote
//  object from the quotes array

function getRandomQuote(){
    const random = Math.floor(Math.random() * quotes.length);
    return random;
        
}
    

// getRandomQuote()



/***
 * `printQuote` function
 ***/
 function printQuote() {
     const randoms = getRandomQuote();
     console.log(randoms)
     const displayQuote = document.querySelector('.quote');
     displayQuote.innerHTML = quotes[randoms].quote;
     const displaySource = document.querySelector('.source');
     displaySource.innerHTML = quotes[randoms].source;
    //  const displayCitation = document.querySelector('.citaion');
    //  displayQuote.innerHTML = quotes[randoms].citaion;
    //  const displayYear = document.querySelector('.year');
    //  displayQuote.innerHTML = quotes[randoms].year;
 
    }

    




    
// printQuote();


const btn = document.querySelector('.load-quote');
btn.addEventListener('click', ()=>{
    printQuote();
})

// getRandomQuote();

// const quote = document.querySelector('.quote');
// const source = document.querySelector('.source');
// const citation = document.querySelector('.citation');
// const year = document.querySelector('.year');



/***
 * click event listener for the print quote button
 ***/

// printQuote.addEventListener('click',()=>{
//     quote.innerHTML = quotes[random].quote;
//     source.innerHTML = quotes[random].source;
//     citation.innerHTML = quotes[random].citation;
//     year.innerHTML = quotes[random].year;

// } )