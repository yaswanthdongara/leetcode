/*
Title: notes_part2_2026-01-22T15-44-40-579Z.js
Description: 
Date: 23/01/2026, 10:43:35 am
*/

How Can You Trim Whitespace from a String?

you can trim whitespace using JavaScript's trim(), trimStart(), and trimEnd() methods.

let message = "   Hello!   ";
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"
let trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "
let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);  // "   Hello!"


How Can You Replace Parts of a String with Another?

The replace() method in JavaScript allows you to find a specified value (like a word or character) in a string and replace it with another value. The method returns a new string with the replacement and leaves the original unchanged because JavaScript strings are immutable.

basic syntax:

string.replace(searchValue, newValue);

let text = "I love JavaScript!";
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"

By default, the replace() method will only replace the first occurrence of the searchValue. If the value appears multiple times in the string, only the first one will be replaced.
you will need to use the replaceAll() method instead of the replace() method. This method returns a new string for all matches to the substring.


How Can You Repeat a String x Number of Times?

Whether you're generating repeated patterns or simply duplicating text, the repeat() method provides a simple and effective way to achieve this.

basic syntax:

string.repeat(count);

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"

The count parameter must be a non-negative number. If you pass a negative number, JavaScript will throw a RangeError.
The count must be a finite number. If you try to repeat a string an infinite number of times or use Infinity as the count, you will also get a RangeError.
In JavaScript, Infinity is a special value that represents an infinite quantity. It's used to denote numbers that are larger than any finite number.
If the count is not an integer (such as a decimal like 2.5), the repeat() method will round it down to the nearest integer.
If you pass 0 as the count, the repeat() method will return an empty string.


What Is the Number Type in JavaScript, and What Are the Different Types of Numbers Available?

JavaScript uses one unified Number type to account for numbers. This means you can work with whole numbers, decimals, and even special numeric values all under the same Number data type umbrella.

JavaScript's Number type includes various kinds of numeric values, ranging from simple integers and floating-point numbers to special cases like Infinity and NaN, or "Not a Number". 
Sometimes in JavaScript, some mathematical operations don't result in a valid number. For instance, if you try to perform a mathematical operation on something that isn't a number, you'll get NaN, which stands for "Not a Number"

const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN
const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); //number

Apart from the standard decimal system (base 10), JavaScript also supports numbers in different bases such as binary, octal, and hexadecimal. 


What Happens When You Try to Do Calculations with Numbers and Strings?

One such surprise occurs when you mix numbers and strings in calculations. The first thing you'll probably try is to add a number and a string. In JavaScript, the + operator does double duty. It handles both addition and string concatenation, which is a way to join two strings together.
When you use + with a number and a string, JavaScript decides to treat them both as strings and joins them together. If you check the type of the result with the typeof operator, you'd see it's indeed a string

const result = '10' + 5;
console.log(result); // 105
console.log(typeof result); // string

JavaScript sees a string in '10' and a number in 5, so it converts the number to a string and concatenates them. This is known as type coercion. Type coercion is when a value from one data type is converted into another.

Things get more interesting when you try to perform other arithmetic operations like subtraction, multiplication, or division with a string and number. In these cases, JavaScript tries to convert the string into a number before doing the math – another type coercion! 

onst subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

But what if the string doesn't look like a number?

const subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = 'abc' * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number

What if you perform arithmetic operations with a boolean (true or false)? Let's see what happens. JavaScript treats booleans as numbers in mathematical operations: true becomes 1, and false becomes 0

const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string

For null and undefined, JavaScript treats null as 0 and undefined as NaN in mathematical operations

const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number

Prefix (++x) increases the value of the variable first, then returns a new value. Postfix (x++) returns the current value of the variable first, then increases it

console.log(5 == "5"); // true

The equality operator uses type coercion before checking if each value is equal.

The strict equality operator will check if the types are the same and if the values are the same. Here is an example using the strict equality operator to compare a number and string. This operator is represented by a triple equals sign (===).

console.log(5 === '5'); // false

What Are Unary Operators, and How Do They Work?

Unary operators act on a single operand to perform operations like type conversion, value manipulation, or checking certain conditions. Let's look at some common unary operators and how they work.

The unary plus operator converts its operand into a number. If the operand is already a number, it remains unchanged.

const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number

there's a unary negation operator. It negates the value of the operand. It works similarly to the unary plus, except it flips the sign.
onst str = '42';
const strToNegativeNum = -str;
console.log(strToNegativeNum); // -42

The logical NOT operator, represented by an exclamation mark (!), is another unary operator. It flips the boolean value of its operand. So, if the operand is true, it becomes false, and if it's false, it becomes true. 

The ~ operator flips every bit, meaning it changes all 1s to 0s and all 0s to 1s. 

const num = 5; // The binary for 5 is 00000101

console.log(~num); // -6

The void keyword is a unary operator that evaluates an expression and returns undefined.
void is also commonly used in hyperlinks to prevent navigation

bit is the most basic unit of information. It can have only two values: 0 or 1.

What Are Conditional Statements, and How Do If/Else If/Else Statements Work?

An if statement takes a condition and runs a block of code if that condition is truthy. Truthy values are any values that result in true when evaluated in a Boolean context like an if statement. Here are examples of truthy values:

non-empty strings, for example, hello

any number other than 0 and -0, for example, 4, -5, and others

arrays

objects

the boolean true

On the other hand, falsy values are values that evaluate to false in a boolean context. JavaScript has few falsy values, which makes them easy to remember. Here are a few falsy values:

boolean false

0 (zero)

"" (empty string)

null

undefined

NaN (Not a Number)

const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}

The ternary operator is a compact way to write simple if/else statements. It has three parts: a condition, a result if the condition is true, and a result if it is false. Here's the basic syntax:

condition ? expressionIfTrue : expressionIfFalse;

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

The nullish coalescing operator is more sophisticated than logical OR and logical AND. Represented by a double question mark (??), it helps in scenarios where you want to return a value only if the first one is null or undefined. Here is an example of working with the nullish coalescing operator:

const result = null ?? 'default';

console.log(result); // default

What Is the Math Object in JavaScript, and What Are Some Common Methods?

The Math.random() method generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This means the possible output can be 0, but it will never actually reach 1. Here is an example working with the Math.random() method:

const randomNum = Math.random();

console.log(randomNum);

Math.min() and Math.max() both take a set of numbers and return the minimum and maximum value, respectively. Here is an example of working both of those methods:

const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9

Math.ceil() will round 4.3 up to the nearest whole integer, which is 5 in this case. 
Math.floor() will round 4.7 down to the nearest whole integer, which is 4 in this case. 
Math.round() is the hybrid of Math.ceil() and Math.floor(). It rounds a number to its nearest integer, taking the decimal point into account:
So, if the decimal point is less than 5, the number is rounded down. And if the decimal point is 5 or greater, the number is rounded up.

Generating a random number between 20 and 1 would look like this:

const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);
The formula to generate a random number between two values is the following:
Math.random() * (maximum - minimum) + minimum;

Another helpful Math method would be the Math.trunc() method. Math.trunc() removes the decimal part of a number, returning only the integer portion, without rounding

If you need to get the square root or cube root of a number, you can use the Math.sqrt() and Math.cbrt() methods, respectively:

console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3

Math.abs() returns the absolute value of a number, turning negatives into positives. 

console.log(Math.abs(-5)); // 5

Math.pow() takes two numbers and raise the first to the power of the second. 

console.log(Math.pow(2, 3)); // 8

One peculiar property of NaN is that it's not equal to anything, including itself
console.log(NaN === NaN);
This unique behavior makes it challenging to check if a value is NaN using standard comparison operators. To address this, JavaScript provides the isNaN() function. The isNaN() function property is used to determine whether a value is NaN or not. However, it's important to understand how isNaN() works, as it can sometimes produce unexpected results. Here's how isNaN() behaves:
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(isNaN("37"));      // false: "37" is converted to 37
console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
console.log(isNaN(""));        // false: empty string is converted to 0
console.log(isNaN(" "));       // false: string with a space is converted to 0

console.log(isNaN("blabla"));  // true: "blabla" is not a number

As you can see, isNaN() first attempts to convert the parameter to a number. If it can't be converted, it returns true. This behavior can lead to some surprising results, especially when dealing with strings that can be coerced into numbers.

Due to these potential inconsistencies, ES6 (the sixth edition of JavaScript, released in 2015) introduced Number.isNaN(). This method does not attempt to convert the parameter to a number before testing. It only returns true if the value is exactly NaN:
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN("blabla"));   // false

parseFloat() and parseInt() are two essential methods in JavaScript for converting strings to numbers. These methods are particularly useful when dealing with user input or processing data that comes in string format but needs to be treated as numerical values.

console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5"));   // 3.14
console.log(parseFloat("abc 3.14")); // NaN
As you can see, parseFloat() starts parsing from the beginning of the string and continues until it encounters a character that can't be part of a floating-point number. If it can't find a valid number at the start of the string, it returns NaN (Not a Number).

parseInt(), on the other hand, parses a string argument and returns an integer. Like parseFloat(), it starts from the beginning of the string, but it stops at the first non-digit character. Here's how parseInt() works:

console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN
parseInt() stops parsing at the first non-digit it encounters. For floating-point numbers, it returns only the integer part. If it can't find a valid integer at the start of the string, it returns NaN.

console.log(parseFloat("  3.14"));  // 3.14
console.log(parseInt("  42"));      // 42
console.log(parseFloat("+3.14"));  // 3.14
console.log(parseInt("-42"));      // -42

The .toFixed() method is a built-in JavaScript function that formats a number using fixed-point notation. It's particularly useful when you need to control the number of decimal places in a number, especially for displaying currency values or when working with precise measurements.
let num = 3.14159;
console.log(num.toFixed(2));
It's important to note that .toFixed() returns a string, not a number.
The .toFixed() method rounds the number to the nearest value that can be represented with the specified number of decimal places.