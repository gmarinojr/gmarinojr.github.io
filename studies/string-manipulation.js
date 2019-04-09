// STRING MANIPULATION

// String Manipulation with Operators
    // strings can be concateneated together by using the + operator.

// examples //

var good = 'good';
var day = 'day';
var sir = 'sir!';
console.log(good + day + sir); // prints good day sir!

good += (day + sir);
console.log(good) // prints good day sir!

var a = 'Agent' + ' ' + 27;
console.log(a); // prints Agent 27

// STRING PROPERTIES //

// .length - reflects the length of a string.
var firstName = 'gary';
console.log(firstName.length); // prints 4

// STRING METHODS //

// .charAt() - returns the character at the specified index.
console.log(firstName.charAt(3)); // prints y

// .concat() - combines two strings into one new string.
console.log(firstName.concat(' marino')); // prints gary marino

// .includes() - determines if a string ends with the characters of another string.
var lastName = 'marino';
console.log(lastName.includes(firstName));  // prints false

// .endsWith() - determines whether a string ends with the characters of another string.
console.log(lastName.endsWith(firstName)); // prints false

// .indexOf() - returns the index within the string of the last occurrence of the specified value or -1 if not found.
var sentence = "My name is Gary Marino";
console.log(sentence.indexOf(firstName)); // prints 11

// .replace() - finds a match between a regular expression and a string. Also replaces the matched substin with a new substring.
var sentence2 = 'Performing the replace method is hard.';
var regex1 = /hard/gi;
console.log(sentence2.replace(regex1, 'easy')); // prints Performing the replace method is easy.

// .slice()

// .startsWith()

// .toLowerCase()

// .toUpperCase()