/* 
Store and retrieve data
Objective:
Get the value of an input field, store it in localStorage as an array of strings

Instructions:

Store data:

1.From the boilerplate, get the contents of the input once the form is submitted.
2.Make sure the input is not empty before saving!
3.Store this value in localStorage as part of an array. Store the new value at the beginning of the array!
4.Reset the form

Retrieve data:

1.Every time you hit the "Submit" button, add a new list item to the empty ul. 
Make sure the new item is at the top!
2.Make sure that when the document loads, you populate the contents of your storage item into the list. 
You can try to add an event listener of type load to the window itself!

Reload:

1.Just because we can. Add an event to the reload button so it reloads the preview. 
https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
Your store data should reload too!


Tip: Verify the Storage section in the browser's developer tools to make sure the data is there!

*/

// Store data:

// 1.From the boilerplate, get the contents of the input once the form is submitted.
// 2.Make sure the input is not empty before saving!
// 3.Store this value in localStorage as part of an array.
// Store the new value at the beginning of the array!
// 4.Reset the form ???

//selectors
const quoteForm = document.querySelector("form");
const quoteBtn = document.getElementById("quote-btn");
const quoteList = document.getElementById("quote-list");
const userInput = document.querySelector("#userInput");
const reloadBtn = document.querySelector("#reload");

// console.log(quoteList.firstElementChild);

//add quotes to local storage
quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //trim quote
  const quoteText = userInput.value.trim();
  // console.log("quoteText", quoteText);

  if (!quoteText) {
    alert("Cannot submit an empty quote!");
    return;
  }
  if (quoteText) {
    const currentQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

    //   // addedQuotes.unshift(addedQuotes);
    //   // localStorage.setItem("quotes", JSON.stringify(addedQuotes));
    localStorage.setItem(
      "quotes",
      JSON.stringify([quoteText, ...currentQuotes])
    );
  }

  // 1.Every time you hit the "Submit" button, add a new list item to the empty ul.
  // Make sure the new item is at the top!

  // create a item in list
  const li = document.createElement("li");

  li.textContent = userInput.value;
  console.log(quoteList.firstElementChild);
  //inert before the element
  quoteList.insertBefore(li, quoteList.firstElementChild);

  //append quote to the list
  // quoteList.appendChild(li);
  //prepend quote to the list
  // quoteList.prepend(li);

  //reset target
  e.target.reset();
});

// Retrieve data:

// 1.Every time you hit the "Submit" button, add a new list item to the empty ul.
// Make sure the new item is at the top!
// 2.Make sure that when the document loads, you populate the contents of your storage item into the list.
// You can try to add an event listener of type load to the window itself!
const renderStorage = () => {
  const currentQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  currentQuotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote;
    quoteList.appendChild(li);
  });
};

// Reload:
// 1.Just because we can. Add an event to the reload
// button so it reloads the preview.
// Your store data should reload too!
reloadBtn.addEventListener("click", () => {
  window.location.reload();
});

// Retrieve data:

// 1.Every time you hit the "Submit" button, add a new list item to the empty ul.
// quoteBtn.addEventListener("click", () => {
//   //userInput
//   const li = document.createElement("li");
//   li.textContent = userInput.value;
//   quoteList.appendChild(li);
// });

// Make sure the new item is at the top!
// 2.Make sure that when the document loads, you populate the contents of your storage item into the list.
// You can try to add an event listener of type load to the window itself!

// console.log("*** local storage ***");
// const formUserInput = document.querySelector("#formUserInput");
// const sessionStorageBtn = document.getElementById("addItemSessionStorage");
// let userDataArray = ["code", "repeat"];
// let userInput;

// // set item to a stringified version of an array with the old and new user input
// localStorage.setItem("userData", JSON.stringify([...userDataArray]));

// // get previous data or an empty array
// const previousDataInLocalStorage =
//   JSON.parse(localStorage.getItem("userData")) || [];
// console.log("previousDataInLocalStorage: " + previousDataInLocalStorage);

// console.log("*** end of local storage ***");

// console.log("*** session storage ***");

// // form
// formUserInput.addEventListener("submit", () => {
//   userInput = sessionStorageBtn.value;

//   //make sure the input is not empty before saving
//   if (userInput !== "") {
//     // set item to a stringified
//     sessionStorage.setItem("userInput", JSON.stringify(userInput));

//     // store this value in localStorage as part of an array.
//     // store the new value at the beginning of the array!
//     localStorage.setItem(
//       "userInput",
//       JSON.stringify([userInput, ...userDataArray])
//     );
//   }

//   // reset the form
//   formUserInput.reset();
//   userInput.value = "";
// });

// // get user input to a parse
// const previousUserData = JSON.parse(sessionStorage.getItem("userInput"));
// console.log("previousUserData:" + previousUserData);
// console.log("*** end of session storage ***");
