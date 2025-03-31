
// Write your code here

// Definition of the numbers
let num1 = 31;
let num2 = 2;

// Multiply num1 and num2 to get 62
let multiply = num1 * num2; // 62

// Generate a random integer greater than 0
let random = Math.floor(Math.random() * 100) + 1; // Ensures a number > 0

// Define variables for mod operation
let num3 = 16;
let num4 = 6;

// Calculate remainder (modulus) to get 4
let mod = num3 % num4; // 4

// Find the highest number in a given set
let max = Math.max(10, 5, 20, 15, 2); // 20

// Export variables if using a testing environment
module.exports = { multiply, random, mod, max };
