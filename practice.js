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

// Note: Special Numbers - Infinity, -Infinity, NaN


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
function wordBlanks(myNoun, myAdjective, myVerb) {
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
var list = [1,2,3];
var removeFromList = list.pop();
// list is now [1,2]

//shift() = removes the first element in the array
var newList = ['sam', 4, 5];
var removedNewList = newList.shift();
// removedNewList is now [4,5]

//unshift() = add element to the beginning of the list
var list = [5,6,7,8];
list.unshift(23);
//list is now [23,5,6,7,8]


function fun() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    console.log(output);
}

fun();