// 1. Write a function that uses both var, let, and const to create three variables
// with different scoping. Use a template literal to return a string explaining the
// scopes of each variable. Test this function and print the result.
function testScopes() {
  var varScope = "var scope";
  let letScope = "let scope is block scope";
  const constScope = "const scope is block scope";
  return ` 
    varScope: ${varScope},letScope: ${letScope}, constScope: ${constScope}
    `;
}
// test the function
console.log(testScopes());


// Output: varScope: var scope, letScope: let scope is block scope, constScope
// 2- Create a function called createMultiplier that takes a single parameter
// multiplier. This function should return another function that takes a number
// as input and returns that number multiplied by the original multiplier.
// Demonstrate this closure by creating functions like double and triple using
// createMultiplier and calling them with different numbers.
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
// Specific multiplier functions
const double = createMultiplier(2);
const triple = createMultiplier(3);
// Call these functions
console.log(double(3));
console.log(double(8));
console.log(triple(2));
console.log(triple(3));


// 3. Create a function that accepts an object with properties name, age, country,
// and city. Destructure these properties in the function parameters and set
// default values for country and city. The function should return a string using
// the destructured values with template literals.
function userinfo({ name, age, city = "not specified", country = "unknown" }) {
  return `${name} is ${age} years old and lives in ${city} ,${country}`;
}
const user1 = { name: "Ali", age: 25, city: "Karachi", country: "pakistan" };
console.log(userinfo(user1));
const user2 = { name: "Ahmed", age: 30 };
console.log(userinfo(user2));


// 4. Write a function called calculateTotal that takes a price and a variable
// number of discounts as arguments (use rest parameters). Subtract each discount
// from the price using the spread operator and return the final discounted price.
function calculateTotal(Price, ...discounts) {
  discounts.forEach((discounts) => {
    Price -= discounts;
  });
  return Price;
}
const finalPrice = calculateTotal(1000, 55, 100);
console.log("Final discounted price:", finalPrice);


// 5. Create an object calculator that has two methods: add and subtract. Use
// enhanced object literals and arrow functions to define these methods. Each
// method should take two numbers and return the result. Test these methods by
// calling them with different numbers.
const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
};
console.log("addition :", calculator.add(5, 8));
console.log("subtract :", calculator.subtract(9, 7));


// 6. Create an array of objects representing books with properties title, author,
// and yearPublished. Write a function that uses a for..of loop to iterate over
// this array and logs each book's information in a formatted string.
const books = [
  { title: "Harry potter", author: "J.K Rowling", yearPublished: 1997 },
  {
    title: "rich dad poor dad",
    author: "Robert Kiyosaki",
    yearPublished: 1997,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
];
// Function to log book information
function displayBooks(bookArray) {
  for (const book of bookArray) {
    console.log(
      `Title:${book.title} , Author:${book.author} , Year Published : ${book.yearPublished}`
    );
  }
}
displayBooks(books);


//  7. Write a generator function called idGenerator that generates unique IDs
// starting from 1. Call this generator multiple times to get unique IDs and print
// them.
// Generator function to create unique IDs
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
// Create an instance of the generator
const generatedId = idGenerator();
// Generate and print unique IDs
console.log(generatedId.next().value);
console.log(generatedId.next().value);
console.log(generatedId.next().value);
console.log(generatedId.next().value);
console.log(generatedId.next().value);


// 9. Create an object student with properties name, age, grade, and subjects
// (an array of subjects). Use a for..in loop to iterate over the properties of the
// object and log each property and its value.
const student = {
  name: "Ali",
  age: 19,
  grade: "A",
  subjects: ["Math", "English", "Physics"],
};
for (let property in student) {
  console.log(`${property} :${student[property]}`);
}


// 10.Given an array of numbers, use the map method to create a new array where
// each element is the square of the original array elements. Print both the original
// and the modified array. let numbers = [1, 2, 3, 4];
let numbers = [1, 2, 3, 4];
let squaredArray = numbers.map((number) => number * number);
console.log("Original array :", numbers);
console.log("Squared Array :", squaredArray);


// 11. Write a function operate that takes two numbers and a callback function as
// arguments. The callback will perform a mathematical operation (e.g., addition,
// subtraction) on the two numbers. Define separate functions for addition and
// subtraction, and pass them as callbacks to operate.
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function operate(num1, num2, callback) {
  return callback(num1, num2);
}
let resultAdd = operate(10, 5, add);
console.log("Addition Resule :", resultAdd);
let resultSubtract = operate(16, 6, subtract);
console.log("subtraction Rresult", resultSubtract);


// 12.Use setTimeout to create a function that prints "Hello, World!" after a delay of 3
// seconds.
function printHellowWorl() {
  console.log("Hello, World!");
}
setTimeout(printHellowWorl, 3000);


// 13.Use setInterval to create a function that logs the current time every 2
// seconds. After 10 seconds, clear the interval.
function logTime() {
  const currentTime = new Date().toLocaleDateString();
  console.log("Current Time:", currentTime);
}
const intervalId = setInterval(logTime, 2000);
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared after 10 seconds.");
}, 10000);


// 14.Create a function fetchData that returns a promise. Inside the function, use
// setTimeout to simulate a network request that resolves with a message ("Data
// received!") after 2 seconds. Then, call fetchData and handle the response with
// .then() and .catch().
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data receieved");
    }, 2000);
  });
}
fetchData()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("An error occurred", error);
  });


//     15.Rewrite the fetchData function (from Question 5) using async and await.
// Call this new function and log the result.
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Recieved!");
    }, 2000);
  });
}
async function main() {
  try {
    const message = await fetchData();
    console.log(message);
  } catch (error) {
    console.log("An error occurred", error);
  }
}
main();


// 16.Write a function that accepts two parameters, base and exponent, and uses
// the exponentiation operator (**) to calculate and return the result. Test this
// function with different values.
function exponentiation(base, exponent) {
  let result = base ** exponent;
  return result;
}
console.log(exponentiation(2, 5));
console.log(exponentiation(7, 2));
console.log(exponentiation(3, 1));
console.log(exponentiation(9, -4));
console.log(exponentiation(10, 0));


// 17.Define a class Animal with a constructor that accepts name and species. Add
// a method speak that logs a message like "Dog says Woof!" Create instances of
// this class with different animals and call the speak method for each.
class animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    console.log(`${this.species} named ${this.name} says:Woof!`);
  }
}
const dog = new animal("Buddy", "dog");
const cat = new animal("Meeaaowonn", "Cat");
const cow = new animal("MooMoo", "Cow");
dog.speak();
cat.speak();
cow.speak();


// 18.Create a function that checks if a number is even or odd using the ternary
// operator. The function should return "Even" if the number is even and "Odd" if it
// is odd. Test the function with various numbers.
function CheckEvenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(CheckEvenOdd(10));
console.log(CheckEvenOdd(8));
console.log(CheckEvenOdd(3));
console.log(CheckEvenOdd(9));
console.log(CheckEvenOdd(7));
console.log(CheckEvenOdd(11));


// 19.Create an object user with a nested object address. The address object
// should have a property city. Write a function to safely log the city name using
// optional chaining, even if the address or city properties do not exist.
const user = {
  name: "Jhon doe",
  age: 25,
  address: {
    city: "New York",
  },
};
function logCityName(user) {
  const cityName = user?.address?.city;
  console.log(cityName ? `${cityName}` : "City not available");
}
logCityName(user);
const withOutAddress = {
  name: "Sara",
  age: 30,
};
logCityName(withOutAddress);
