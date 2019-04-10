// LOOPS

/*
 * Loops allow us to run a block of code, any number of times, until a condition is met.
 * We have several options for running a block of code repeatedly.
 * WHILE LOOPS, FOR LOOPS, AND FOR IN LOOPS.
 * These help us avoid re-writing the same code over and over again.
 */


/*
 * 1) WHILE LOOP
 * While the condition is true, the block of statements following the while statement is executed.
 * This is repeated until the condition becomes false.
 * A stopping condition must always be included to prevent an infinite loop.
 */

var sum = 0;
var number = 1;
while (number <= 20) {
    sum += number;
    number++;
}

/*
 * 2) FOR LOOP
 * The For Loop consists of three parts.
 * First, the initializer, initializes the loop and is executed once.
 * Second, the test condition. If true, the body of the loop is executed.
 * If false, the loop stops.
 * Third, an updater, invoked after each iteration.
 * All three parts are written on a single line separated by a semicolon.
 */
 
 for (var i = 1; i <= 50; i++) {
     sum = sum + i;
 }

// We can also count backwards by using (i--).
// We can also iterate forward (or backwards) with i += number.

// If the number of iterations is known, use the For Loop.
// Use the While Loop if you want to loop until a certain condition is met.

/*
 * 3) FOR IN LOOP
 * The For In Loop iterates through the properties of an object and executes the code once for each property of the object.
 */

let person = {
    name: 'Gary',
    age: 37,
    gender: 'male'
};

for (let key in person) {
    console.log(person[key]);
}
// prints Gary, 37, male

// *** LOOPING OVER AN ARRAY ***

// For Loops can be used to modify an array.

let arrayExample = [];

for (let i = 0; i < 3; i++) {
    arrayExample.push(i);
    console.log(arrayExample);
}
/* prints to the console
[0]
[0, 1]
[0, 1, 2]
*/

// The loop runs until i < 3 is no longer true.
// Each time it loops, the array prints to the console.

// Sometimes we might want a loop to run a number of times without knowing exactly how many times to run it. We can make use of the length property of an array to have the loop run for each item in the array.

let bigCats = ['lion', 'cheetah', 'tiger', 'leopard'];
for (let i = 0; i < bigCats.length; i++) {
    console.log(bigCats[i]);
}
/*
lion
cheetah
tiger
leopard
*/

// *** LOOPING OVER AN OBJECT ***

// We can loop over objects using the For In Loop. There are also other ways specific to objects.

let card = {
    name: 'Kane',
    power: 300,
    pro: true
}

// Object.keys will return all of an object's keys inside of an array.

console.log(Object.keys(card));
// prints [ 'name', 'power', 'pro' ]

// Object.values will return all values of an object in an array.

// console.log(Object.values(card));
// output [ 'Kane', 300, true ]