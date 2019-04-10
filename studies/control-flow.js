// CONTROL FLOW //

/* 
 * Even though code is written and ran from top to bottom,
 * different actions may need to be ran at different times depending on the situation.
 * We can create this change by asking questions that return a boolean, True or False.
 * There are 4 ways we can do this.
 */

let gmj = {
    firstName: 'Gary',
    lastName: 'Marino',
    age: 37
};
 
// 1) IF STATEMENTS
/*
 * An IF STATEMENT is used when we want a piece of code to run only if a certain condition is met.
 * An If statement is written starting with the keyword FOR.
 * Next, inside of parentheses, a testing condition that asks a true or false question.
 * Last, inside of curly braces, an action to be performed if the condition results in true.
 * There can be multiple statements inside the curly braces to be executed.
 * Everything inside of the curly braces is Code Block.
 */
 
 if (gmj.firstName === 'Gary'){
     console.log('You are ' + gmj.firstName + '.');
 }
 // firstName has a property of 'Gary'
 // therefore the result is true and You are Gary. is logged to the console.
 
 // 2) ELSE IF STATEMENTS
/*
 * Situations that need two or more possible conditions can be acheived by chaining If statements with an ELSE IF STATEMENT.
 * An else if statement is written out the same way except instead of the keyword IF, we use Else.
 * An Else If statement can only follow an If statement, never proceed one.
 * Their code block is only executed if the previous condition resulted in false and the Else If condition reults in true.
 */
 
 // 3) ELSE STATEMENTS
 /*
  * When all conditions return false and you want to have one catch-all defualt statement you will use an ELSE STATEMENT.
  * Else statements must be ran last because they have no condition attached.
  * Like If and If Else statements, we use a keyword of ELSE followed by curly braces.
  */
  
  if (gmj.firstName === 'Bob') {
      console.log('You are ' + gmj.firstName + '.');
  } else if (gmj.firstName === 'Garry') {
      console.log('You are not Gary!');
  } else {
      console.log('Who are you?');
  }
  // Since the first two conditions return false, the else statement is printed to the console.
  
  // 4) SWITCH STATEMENTS
  /*
   * While If Else statements work quite effectively, there is a cleaner way to control the glow if you have many If statements.
   * Switch statements replace multiple Ifs by comparing a value with multiple variants.
   * These variants are called case blocks.
   * If a match is made, switch executes the case clause until the end of the switch or a break statement is reached.
   * A break statement will stop the code from executing any further.
   */
   
switch (gmj.firstName) {
    case 'Bob':
        console.log('Bob?');
        break;
        
    case 'Jerry':
    case 'Gerry':
        console.log('Well, it rhymes.');
        break;
        
    case 'Gary':
        console.log('Yahtzee!');
        break;
           
    default:
        console.log('Sorry, no Gary here.');
   }