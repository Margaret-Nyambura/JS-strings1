// Extract the last four character from the string "extravaganza"
let x = 'extravaganza';
let result = x.substring (7,11);
console.log({result});

// insert the string at the fourth index of the below variable
 let food = "The quick fox jumped over the lazy dog";
let stringToAdd = "eat";
let indexPosition = 4;
let newString = food.slice(0, 4) + stringToAdd + food.slice(indexPosition);
console.log(newString);

// count how many times the following string appears in the string variable
let story = "The quick brown fox jumps over the lazy dog";
console.log(story.match("the"));
console.log(story.match("brown"));

// find the following words from the following strings
let statement = "The pupils are reading in the library";
console.log(statement.search("are"));

let statement2 = "The child was sitting on the table before it fell";
console.log(statement2.search("sitting"));

// convert to upperCase
let text = "wonderful";
console.log(text.toUpperCase(text));
// convert to lowerCase
let text2 = "amazing"
let text3 = "undERneath"
console.log(text2.toLowerCase(text2));
console.log(text3.toLowerCase(text3));
// convert to TitleCase
let word = "A wonderful world"
console.log(word.toTitleCase(word));