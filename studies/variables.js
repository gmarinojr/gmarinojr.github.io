/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'Gary';
console.log(myName); // prints => Gary

// 3. re-assignment //
myName = 'Gary';
console.log(myName); // prints => Gary

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
myVariable = true;
myVariable = "someString";
console.log(myVariable);
/* 
* camelCase
*   Variables start with a lowercase letter and each following word starts with an uppercase letter.
*/
var firstName = 'Gary';
console.log(firstName);
/*
* Reserved Keywords
*   certain keywords which can be interpreted for ode to run correctly are
*   reserved.
* some reserved words are:
* var, const, let, for, in, while, function, alert, eval, window,
* document, location, parseFloat, isNaN.
*/

// Loosely Typed any type of value can be re-assigned to a variable.


var age = 37;
age = 'thirty seven';
console.log(age);

/*
* Flexibilty & Legibility
* By changing the value of a variable you change it throughtout your code.
* Ideally variables should be named to clearly represent their stored values.
*/

// LETS & CONSTANTS //

// Let statements declare a block scope local varaible. Let is limited to the block its used inside. They are not hoisted.

let num = 5;

function numLock() {
    let num = 6;
}

console.log(num); // output 5.
//Since let statements are locked in their local scope, num doesn't get reassigned the value of 6 and remains 5.


// Constants are created with the keyword const and must be assigned a value immediately.
// Constants cannot be left undefined. They also remain in the scope they are created and are not hoisted.

const temperature = 98;
console.log(temperature); // outputs 98

temperature = 101;
console.log(temperature); // outputs 98

// HOISTING //

// All var and function declarations are pushed to the top of the program before statments are executed.
// Only the declaration is pushed to the top, not the initialization. let and const values are NOT hoisted.

function tempTest(temp) {
    if (temp === '98') {
        console.log(status); // error
        const status = 'Healthy';
        console.log(status); // Healthy
    } else {
        console.log(status); // error
        const status = 'Not Well';
        console.log(status); // Not well
    }
}