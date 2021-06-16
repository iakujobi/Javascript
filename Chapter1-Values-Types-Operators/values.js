// Unary Operators - Not all operators are symbols. Some are written as words.
// One example is typeof operator
// Produces a string value naming the type of the value you give it
console.log(typeof 4.5) // number

// Boolean Values
console.log(3 > 2) // true
console.log("Aardvark" > "Zoroaster") // false

// Ternary or Conditional Operators - Operates on 3 values.
// Value on the left of the question mark "picks" which of the other 2 values will come out
// When it is true, it chooses the middle value
// When false, it chooses the value on the right
console.log(true ? 1 : 2) // 1

var number = 5; // in-line comment
/* this is a 
multi-line comment */

///////////////////////////////////////////////////

// Data Types: 
// undefined, null, boolean, string, number, and object.

var myName = 'Beau'; // will be used throughout your whole program
myName = 8;

let ourName = "freeCodeCamp"; // only be used within the scope of where it is defined 

const pi = 3.14; // a variable that can never change.

/////////////////////////////////

// Note: Special Numbers: Infinity, -Infinity, NaN (not a number)

// Automatic Type Conversion - Type coercion
console.log(8 * null); // 0
console.log("5" - 1); // 4
console.log("5" + 1); // 51
console.log("five" * 2) // NaN
console.log(false * 2) // true
console.log(null == undefined) // true
console.log(null == 0) // false

// Short Circuiting of Logical Operators
console.log(null || "user") // user
console.log("Agnes" || "user") // Agnes


///////////////////////////////////////////////////////

var a; // declaration of a variable
var b = 2; // declaration and assignment to a variable
a = 7;
console.log(a) // 7

// Escaping Literal Quotes - the double quotes inside will not be considered when we put an (ESCAPE CHARACTER - \ ) in front of it.
var myStr = "I am a \"double quote\" string inside \"double quote\" "
console.log(myStr)

// Back quote ` `
var str = ` I can use a single quote ' ' and double quote " " inside a string when I use a back text quote `
console.log(str)
/****
CODE    OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed

****/

// concatenate strings 
var str = "This is the start. " + "This is the end."
console.log(str) // This is the start. This is the end.
// OR
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr) // I come first. I come second.

//find length of a string
var firstNameLength = "Ada";
firstNameLength = firstNameLength.length;
console.log(firstNameLength) // 3

//brackets
var firstName = "Ada";
// firstName = firstName[0];
// console.log(firstName) // A
var lastletterOfFirstName = firstName[firstName.length - 1]; //to find the letter of a string even if we don't know it
console.log(lastletterOfFirstName) // a

//blanks
function wordBlanks(myNoun, myAdjective, myVerb)
{
    var result = " ";
    return result;
}
console.log(wordBlanks("dog", "big", "ran"));

//Arrays
var ourArrays = ["John", 23];
console.log(ourArrays) // [ 'John', 23 ]

//Nested Arrays
var myArray = [["the universe", 42], ["everything", 1232]];

//push() - add element to the end of the list
var myArray = ["Tom", 'J', "cat"];
myArray.push(["happy"]);
// myArray is now ["Tome", 'J', "cat", ["happy"]]

//pop() - remove the last element in a list
var list = [1, 2, 3];
var removeFromList = list.pop();
// list is now [1,2]

//shift() = removes the first element in the array
var newList = ['sam', 4, 5];
var removedNewList = newList.shift();
// removedNewList is now [4,5]

//unshift() = add element to the beginning of the list
var list = [5, 6, 7, 8];
list.unshift(23);
//list is now [23,5,6,7,8]