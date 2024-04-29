/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let part1Big = part1.substring(0, 3) + part1.substring(3).toUpperCase();
let part2Big = part2.substring(0, 5) + part2.substring(5).toUpperCase();
let result = part1Big + part2Big;

// Print the cameLtaiL-formatted string
console.log(result);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tipAmount = billTotal * 0.15;
// Print out the tipAmount
console.log(tipAmount);
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor(Math.random() * 10 + 1);
// Print the generated random number
console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false
console.log("1: " + expression1);
const expression2 = a || b; //false -> incorrect
console.log("2: " + expression2);

const expression3 = !a && b; //true -> incorrect
console.log("3: " + expression3);

const expression4 = !(a && b); //true
console.log("4: " + expression4);

const expression5 = !a || !b; //true
console.log("5: " + expression5);

const expression6 = !(a || b); //false
console.log("6: " + expression6);

const expression7 = a && a; //true
console.log("7: " + expression7);
