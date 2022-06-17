const quotes = [
    {
        quote: "Believe you can and you’re halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Every strike brings me closer to the next home run.",
        author: "Babe Ruth",
    },
    {
        quote: "I don’t walk away from things I think are unfinished.",
        author: "Arnold Schwarzenegger",
    },
    {
        quote: "If you are a terror to many, then beware of many.",
        author: "Ausonius",
    },
    {
        quote: "What's done cannot be undone.",
        author: "William Shakespeare",
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        quthor: "Wayne Gretzky",
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha",
    },
    {
        quote: "Either you run the day, or the day runs you",
        author: "Jim Rohn",
    },
    {
        quote: "Whether you think you can or you think you can’t, you’re right.",
        author: "Hery Ford",
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
];

const quoteText = document.querySelector(".quote-block span:first-child");
const author = document.querySelector(".quote-block span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteText.innerText = `${todaysQuote.quote} -${todaysQuote.author}`;
// author.innerText = todaysQuote.author;
