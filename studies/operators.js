// *** OPERATORS ***

/*
 * Operators are used to assign values, compare values, perform arithmetic and more.
 * These operations are applied to OPERANDS.
 * They are symbolsor signs which affect strings, numbers, etc.
 *
 * 1) ASSIGNMENT OPERATORS
 * Assignment operators are used to assign values to variables.
 * Values are assigned from the right side of the equals sign to the left.
 */
 
// Simple Assignment
let name = 'Gary';
let num1 = 20;
let num2 = 19;

// Addition Assignment
num1 += num2; // num1 = num1 + num2

// Subtraction Assignment
num1 -= num2; // num1 = num1 - num2

// Multiplication Assignment
num1 *= num2; // num1 = num1 * num2

// Division Assignment
num1 /= num2; // num1 = num1 / num2

/*
 * 2) ARITHMETIC OPERATORS
 * Arithmetic operators are used to perform arithmetic on variables or numbers and return a single numerical value.
 */
 
// Addition
name + '' + num1 + num2; // Gary 2019

// Subtraction
5 - 5; // 0
name - 5; // NaN

// Multiplication
4 * 3; // 12

// Division
15 / 5; // 3

/*
 * 3) COMPARISON OPERATORS
 * Comparison operators are used in logical statements to determine equality or difference between variables or values.
 */
 
let x = 7;

// Equality Operator.
x == 7; // true
x == '7'; // true
x == 77; // false

// Inequality Operator
x != 17; // true
x != 7; // false

// Identity / Strict Equality
x === '7'; // false
x === 7; // true

// Non-identity / Strict Inequality
x !== 'Seven'; // true
x !== 7; // false

// Greater Than Operator
x > undefined; // false
x > 1; // true

// Greater Than or Equal Operator
x >= 0; // true
x >= 17; // false

// Less Than Operator
x < 4; // false
x < undefined; // false

// Less Than or Equal Operator
x <= 7; // true
x <= '7'; // true

/*
 * 4) LOGICAL OPERATORS
 * Logical operators are used to determine the logic between variables or values
 */
 
// && AND
(num1 < 40 && num2 > 18); // true.
// Since both return true the entire thing is true.
// If one were false the whole thing would be false

// || OR
(name === 'Gary' || x !== 7); // true.
// Since one of these returns true the entire result is true.
// Both would have to be false in order to return false.

// ! NOT
!(num1 === num1); // false.
// The ! operator basically inverts the comparison.
// Two different values would produce true.

/*
 * 5) UNARY OPERATORS
 * A unary operator takes a single operand/argument and performs an operation.
 */
 
// typeof is used to identify what a value's data type is.
typeof 1; // number
typeof 'Gary'; // string
typeof true; // boolean
// Arrays, Objects, null and Date return 'object' when tested.

// Since Arrays can not be tested properly with typeof we need to use a different unary operator. Array.isArray().
// This is useful when you need to know how to process its values.
Array.isArray([]); // true

/*
 * 6) TERNARY OPERATORS
 * A ternary assigns a value to a variable based on a condition.
 * The only ternary operator is the Conditional Operator(? :).
 * This operator first evaluates an expression, like an If statement, for a true or false value and then executes the given statement listed for the result.
 * condition ? value if true : value if false
 */
 
 var age = 24;
 var enterCasino = age > 21 ? 'yes' : 'no';