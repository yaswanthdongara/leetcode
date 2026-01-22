/*
Title: notes_part2_2026-01-22T15-44-40-579Z.js
Description: 
Date: 22/01/2026, 9:32:36 pm
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
