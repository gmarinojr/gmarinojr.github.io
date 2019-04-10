// *** DATA TYPES ***

/*
 * DATA TYPES make up the language of JavaScript.
 * They are what we use in our code.
 * 
 * 1) Simple / Primitive Data Types
 *  Primitives have values that are copied by  value.
 *  This mean they are immutable and can not be changed once created.
 *  They must be assigned to a variable.
 *
 * 2) Complex Data Types
 *  Complex values are copied by reference.
 *  This means their values are shared and can be changed.
 *  They are mutable.
 *  Complex data types are also referred to as reference types.
 *
 * SIMPLE DATA TYPES
 *
 * 1) NUMBERS
 * Number values are simply numbers.
 * No quotes are needed and can be expressed simply as a number.
 * Numbers along with the correct arithmitec operator can produce sums inside of containers.
 */
 
let year = 2019;
// year returns 2019

let mathematics = (9 - 8) * 3;
// mathematics returns 3.

/*
 * 2) STRINGS
 * Strings are text and must be enclosed with either single quotes, double quotes or backticks.
 * Backticks offer extended functionality when using strings.
 */
 
let firstName = 'Gary'; // prints Gary

// While Strings can't be subtracted or multiplied, they can be added togther.
// Also known as concatenate.

let lastName = 'Marino'; // prints Gary Marino

/*
 * 3) Booleans
 * Booleans, typically used in conditional statements, are true or false values.
 * Booleans are created using operators such as comparison operators.
 * Two comparison operators are > (greater than) and < (less than).
 * Other comparison operators are >=, <=, === and !== (greater than equal to, less that equal to, strictly equal and strictly unequal).
 */
 
let greaterThan = 10 > 1;
// returns true

let falseResult = false;
// returns false

/*
 * 4) null
 * The null value is unique to itself.
 * It can only be null.
 * It represents a non existing object.
 * It has no value.
 */
 
let nully = null + 10;
console.log(nully); // prints 10 since null is converted to 0.

/*
 * 5) UNDEFINED
 * The undefined value is similar to null in that it carries no information.
 * Its meaning is 'value is not assigned'.
 */

let unDef = undefined + 10;
console.log(unDef); // prints NaN since undefined doesn't convert to any number.

let noDef;
console.log(noDef); // undefined

// *** SPECIAL NUMBERS *** //

/*
 * 6) NaN
 * NaN is Not A Number.
 * NaN can be returned if you try to divide zero by zero for example.
 * It doesn't produce a meaningful result.
 */
 
console.log(isNaN(NaN)); // prints true

/*
 * 7) INFINITY and -INFINITY
 * These represent positive and negative infinities.
 * They are greater (or less) than anything else.
 */
 
console.log(Infinity + 1);


// *** COMPLEX DATA TYPES ***

/*
 * Complex data types are collections of values.
 * Think of a collection as a box that can hold simple data types as well as other complex data types.
 * We can now carry around many values as one.
 * Complex data types refer to their values by reference. 
 *
 * 8) ARRAYS
 * An array is a zero indexed list. Meaning the first item has an index of 0.
 * Values are stored in a particular place and this is called an elements index.
 * Arrays are bookended by square brackets, [].
 * Elements can be accessed using Bracket Notation.
 */
 
let exArray = [27, 'iPhone', 'NXT', ['Crown Royal', 'Jameson']];
let phone = exArray[1]; // iPhone by using bracket notation

// We can replace array elements with bracket notation as well.
exArray[2] = 'NEXT';
exArray[4] = 'Spark';
console.log(exArray);
// prints [ 27, 'iPhone', 'NEXT', [ 'Crown Royal', 'Jameson' ], 'Spark' ]

// We access sub-arrays by first accessing the array by its index followed by the element's index.
exArray[3][1];
// Jameson

// The length property tells us how many elements are in an array.
exArray.length -1; // Spark

// ARRAY METHODS

// .push() adds a value(s) to the end of an Array.
exArray.push('Computer');
// [ 27, 'iPhone', 'NEXT', [ 'Crown Royal', 'Jameson' ], 'Spark', 'Computer' ]

/*
 * 9) OBJECTS
 * Objects are collections of key/value pairs.
 * Unlike Arrays, an Object's values are not ordered nor are they indexed.
 * Also, curly braces, {}, are used instead of brackets.
 * Every value has a corresponding key.
 */
 
let player = {
    name: 'Kane',
    power: 300,
    tier: 'Gothic',
    pro: true
};

// In addition to accessing values with bracket notation, we can use DOT NOTATION.
console.log(player['name']); // prints Kane
console.log(player.name); // prints Kane

// Keys can be stored in variables as strings.
let rank = player.tier; // Gothic

// Properties can be added to Objects using either dot or bracket notation.
player.season = 2;
player['fullyTrained'] = true;
console.log(player);
// prints { name: 'Kane', power: 300, tier: 'Gothic', pro: true, season: 2, fullyTrained: true }

// Objects do not have a length property.

/*
 * 10) FUNCTIONS
 * A Function is a collection of statements that perform a task and return values.
 * We create functions with the keyword function, function name, and code block inside of curly braces.
 */