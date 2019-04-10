// *** FUNCTIONS ***

/* Functions allow us to encapsulate a block of code and execute it multiple times when and however we want.
 *
 * Two Phases of a Function
 *
 * 1) DECLARATION
 * Declaration is the action or instruction we give the computer to perform.
 * Placeholders are used in place of concrete values because Functions can be used multiple times.
 * These placeholders are called PARAMETERS.
 */
 
 function name(parameter) {
     // function body where your code is written
 }
 
 /* Declarations consist of:
  * Function Keyword
  * Function Name
  * Parameters inside of parentheses
  * Function Body enclosed in curly braces
  *
  * The second phase of a Function is:
  *
  * 2) CALL / INVOCATION / EXECUTIONS
  * All Functions need a RETURN STATEMENT to return any value.
  * A Function call consists of two parts.
  *     a) The Function Name
  *     b) Arguments
  * Arguments should be enclosed in parentheses.
  * The arguments will be substituted for parameters throughout the function.
  */
  
function myName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
myName('Gary', 'Marino'); // outputs Gary Marino

// We can also assign Functions to Variables.
// This allows us to use the function inside of other Functions.

var person = function(p1, p2) {
    // code block
};

/*
 * Two Ways to Create Functions
 *  Function Declaration
 *      function name(parameter) {
            // code block
        }
 *  Function Expressions
 *      const name = function(parameter) {
            // code block
        }
 */
 
 // SCOPE
 /*
  * Scope refers to how and where variables are accessible throughout your code.
  * There are 2 scope types.
  *
  * 1) GLOBAL SCOPE
  * If a variable is defined outside of a function, it is in the global scope and can be accessed.
  */
  
let x = 10;
function studies() {
    x = 50;
}
console.log(x); // 10
studies();
console.log(x); // 50

 /*
  * 2) LOCAL SCOPE
  * Local scope is the area inside of a function body.
  * Anything declared in here is only available within the function or other functions declared within it.
  */
  
function studies1() {
    let y = 27;
}
// console.log(y); // reference error

// CLOSURE
/*
 * Closure is when a function references variables inside another function body.
 * In the example below, closure occurs on line 97.
 * It is trying to reference outside of its function.
 */
 
function myName(firstName, lastName) {
    var greeting = 'Hello';
    return firstName + lastName;
    function allTog() {
        return greeting + firstName + lastName;
    }
}
myName('Gary', 'Marino'); // outputs Gary Marino