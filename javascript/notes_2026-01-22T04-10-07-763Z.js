/*
Title: notes_2026-01-22T04-10-07-763Z.js
Description: 
Date: 22/01/2026, 5:40:27 pm
*/

Symbol and BigInt are two types that are less commonly used

A Symbol is a special type of value in JavaScript that is always unique and cannot be changed. It's often used to create unique labels or identifiers for properties

Symbol('mySymbol');

BigInt is used for very large numbers that exceed the limit of the Number type

1234567890123456789012345678901234567890n;
we create a BigInt by adding n at the end of a very large number.

One advantage of using the let keyword to declare variables is that you can reassign values to them. In programming, reassignment means giving a new value to a variable that already has one.

Variables in JavaScript must begin with a letter, an underscore (_), or a dollar sign ($). They cannot start with a number.

There are certain keywords in JavaScript that you cannot use as variable names, such as let, const, function, or return, as they are reserved for the language itself.

You should also avoid using special characters like exclamation points (!) or at (@) symbols, in your variable names. It is best to keep variable names readable by using letters, numbers, underscores, or dollar signs.


const is used to declare variables that are constant. Once you assign a value to a variable declared with const, you cannot reassign it.


Variables declared with const must be assigned a value at the time of declaration. If you try to declare a const variable without assigning it a value, you will get an error

You can also use the var keyword, but it's not as recommended anymore. The var is kind of like let, except it has a wider scope, which is more likely to cause problems in your program.

strings are indeed immutable, which means that once a string is created, it cannot be changed. When you modify a string, what actually happens is that a new string is created with the modified value, while the original string remains unchanged.

One disadvantage of using the + operator for string concatenation is that it can lead to spacing issues if you don't carefully manage the spacing between the concatenated strings.

If you need to add or append to an existing string, then you can use the += operator. This is helpful when you want to build upon a string by adding more text to it over time.

Another way you can concatenate strings is to use the concat() method.

let result = str1.concat(' ', str2); 
let result = str1.concat(' ', str2,' ',str3); //can be used to concatinate any number of strings

JavaScript is a dynamically typed language, meaning you don't need to specify the data type of a variable when you declare it. Instead, the type is determined based on the value assigned to the variable while the program is running. This allows you to change the type of a variable throughout the program.

The typeof operator in JavaScript is a simple yet powerful tool that lets you see the data type of a variable or value. It always returns a string indicating the type.
console.log(typeof num);
we have a variable called exampleVariable and have assigned it the value of null. But when we use the typeof operator, it returns the string object.

To get the last character of a string, you can use the length of the string minus one. 
console.log(greeting[greeting.length - 1]);

you can escape the inner quotes by placing a backslash (\) before them:
let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
The backslash tells JavaScript to treat the quotes as literal characters, so they appear correctly in the output.
You can also escape other special characters, such as the backslash itself (\\), or single quotes within a string surrounded by single quotes (\').
let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!

In JavaScript, template literals are a powerful and flexible way to work with strings. Unlike regular strings, which use single (') or double (") quotes, template literals are defined with backticks (`).

Template literals make it easier to create strings that span multiple lines or include expressions (like variables or even JavaScript code) directly within the string.
example:
const name = "Alice";
const greeting = `Hello, ${name}!`;

Another great feature of template literals is that they support multiline strings. With regular strings, you would need to use escape characters (\n) to create new lines. With template literals, you can simply write the string across multiple lines, and the formatting is preserved:

let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

Another feature of template literals is that they allow you to embed JavaScript expressions directly within the string, like in this example:

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 
