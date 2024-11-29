import { add, subtract, multiply, divide } from "./mathOperations.js";

console.log("Addition :", add(5, 10));
console.log("Subtraction :", subtract(5, 20));
console.log("Multiplication :", multiply(7, 10));
try {
  console.log("Division :", divide(5, 10));
  console.log("Division  by zero:", divide(10, 0));
} catch (error) {
  console.error(error.message);
}
