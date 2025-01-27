/*
Removing data
To manage the data stored in localStorage or sessionStorage, 
you might need to remove specific items or clear all stored data. 
This can be done using the removeItem and clear methods.

Methods Overview
removeItem(key):

Description: Removes the key-value pair associated with the specified key.
Usage: This method takes one argument, the key of the item you want to remove.
Example: localStorage.removeItem('myKey');
clear():

Description: Clears all key-value pairs stored in localStorage.
Usage: This method does not take any arguments.
Example: localStorage.clear();

*/


// Inspect the storage in developer tools!
document.getElementById('saveString').addEventListener('click', function () {
  localStorage.setItem('myString', 'Hello, World!');
});

document.getElementById('saveArray').addEventListener('click', function () {
  const myArray = [1, 2, 3, 4, 5];
  localStorage.setItem('myArray', JSON.stringify(myArray));
});

document.getElementById('logStorage').addEventListener('click', function () {
  console.log(localStorage);
});

document.getElementById('removeItem').addEventListener('click', function () {
  localStorage.removeItem('myString');
});

document.getElementById('clearStorage').addEventListener('click', function () {
  localStorage.clear();
});
