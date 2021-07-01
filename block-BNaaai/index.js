let url = require("url");

let URLstring = `https://blog.altcampus.io:80/students/register?name=altcampus&gender=male`;

const parsedURL = url.parse(URLstring);

// console.log(parsedURL);
console.log(parsedURL.pathname);
console.log(parsedURL.query);
console.log(parsedURL.host);
console.log(parsedURL.protocol);
console.log(parsedURL.port);

let googleURL = "https://www.google.com/";

let parsedGoogleURL = url.parse(googleURL);
console.log(parsedGoogleURL);
