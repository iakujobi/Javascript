// Bindings or Variables
// To create bindings, we can use let, var (variable), const
let ten = 10
console.log(ten * ten) // 100

let result
console.log(result) // undefined

// prompt("Enter password: ")

// Return Values
console.log(Math.max(2, 4)) // 4
console.log(Math.min(2, 4) + 100) // 102

// Control Flow 
// Prompt is only use on the browser
// let theNumber = Number((prompt("Pick a number: ")))
// console.log("Your number is the square root of " +
//     theNumber * theNumber)

// Conditional Execution - use the keyword 'if'
// let theNumber = Number((prompt("Pick a number: ")))
// if (!Number.isNaN(theNumber))
// {
//     console.log("Your number is the square root of " +
//         theNumber * theNumber)
// }

// While and do While loops 
// While loops
let number = 0;
while (number <= 12)
{
    console.log(number)
    number = number + 2
}
// 0
// 2
// 4
// 6
// 8
// 10
// 12

// Do while loops
// let yourName
// do
// {
//     yourName = prompt("Who are you?")
// } while (!yourName)
// console.log(yourName)

// For loops
for (let number = 0; number <= 12; number = number + 2)
{
    console.log(number)
}
// 0
// 2
// 4
// 6
// 8
// 10
// 12

// Dispatching on a Value with Switch
switch (prompt("What is the weather like?"))
{
    case "rainy":
        console.log("Remember to bring an umbrella.")
        break
    case "sunny":
        console.log("Dress lightly.")
    case "cloudy":
        console.log("Go outside.")
        break
    default:
        console.log("Unknown weather type!")
        break
}
