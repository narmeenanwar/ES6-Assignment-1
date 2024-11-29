// 8. Create a module named mathOperations.js with functions for basic math
// operations (add, subtract, multiply, and divide).Import these functions
// into a new file app.js, and use them to perform calculations. Log each result.
export const add = (num1 , num2 ) => (num1 + num2)
export const subtract = (num1 , num2 ) => (num1 - num2)
export const multiply = (num1 , num2 ) => (num1 * num2)
export const divide = (num1 , num2 ) => {
    if(num2 === 0){
        throw new Error('Cannot divide by zero')
    }
    return num1 / num2
}