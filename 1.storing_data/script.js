/*
Storing data
The Web Storage API allows you to store data on the client side. 
This can be done using two types of storage objects: localStorage and sessionStorage.

There's a caveat though, you can only save data as string, 
this is not the end of the world!

Through a process called serialisation, 
we can convert an object, 
including arrays, into a string. 
However, we want a very particular string format, enter JSON

JSON (JavaScript Object Notation)
JSON is a lightweight data interchange format that is easy for humans to read and write 
and easy for machines to parse and generate. 
In JavaScript, objects and arrays can be easily converted to JSON strings using JSON.stringify, 
and JSON strings can be parsed back into JavaScript objects using JSON.parse. 
As the name suggest, a JSON string that represents an object looks VERY similar to a native JavaScript 
object.


Spread Operator and Preserving Array Contents
The spread operator (...) in JavaScript allows an iterable, 
such as an array, to be expanded in places where zero or more arguments or elements are expected. 
This is useful for various purposes, such as copying arrays, 
merging arrays, or adding new elements to an array while preserving the existing contents.


*/

// Inspect the storage in developer tools!
document.getElementById("saveString").addEventListener("click", function () {
  localStorage.setItem("myString", "Hello, World!");
});

document.getElementById("saveArray").addEventListener("click", function () {
  const myArray = [1, 2, 3, 4, 5];
  localStorage.setItem("myArray", JSON.stringify(myArray));
});

document.getElementById("saveObject").addEventListener("click", function () {
  const myObject = { name: "John", age: 30, city: "New York" };
  localStorage.setItem("myObject", JSON.stringify(myObject));
});

/* 
Let's say you want to store an array in localStorage and then later retrieve it, 
add more elements to it, and store the updated array back in localStorage. 
The spread operator makes this process straightforward.
*/

document.getElementById("addToArray").addEventListener("click", function () {
  const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
  const newArray = [...storedArray, 6, 7, 8];
  localStorage.setItem("myArray", JSON.stringify(newArray));
});

// Check the console to see all your keys and values!
document.getElementById("logStorage").addEventListener("click", function () {
  console.log("Current LocalStorage:", localStorage);
});
