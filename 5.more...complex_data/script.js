/*
More...complex data
Objective:
Get the value of an input field, store it in localStorage as an array of objects.

Instructions:

  Store data:

  1.From the boilerplate, get the contents of the input once the form is submitted.
  2.Make sure the input is not empty before saving!
  3.For every user input, create an object with the following properties:
    I. id: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID check this out,
since an UUID may not a valid CSS selector, we will remove the hyphens and prepend the prefix task-
    II. content: the user input
  4.Store this value in localStorage as part of an array. 
Store the new value at the beginning of the array!
  5.Reset the form

  Retrieve data:

  1.Every time you hit the "Submit" button, add a new list item to the empty ul. 
Make sure the new item is at the top!
    I.   Set the id of the object as an id to the list item element, it'll come in handy.
    II.  Within the list item, add a red button that reads 'Delete'. Make it look cool! :D
    III. Attach an event to this button on click, for now, just log the id of the item!
  
  2.Make sure that when the document loads, you populate the contents of your storage item into the list. 
You can try to add an event listener of type load to the window itself!

  Delete:
    1. Make sure that clicking on a given 'Delete' button, 
    deletes the item from the DOM but also from the array in localStorage. Tip: use the .filter method 

    Reload:

    1.Just because we can. Add an event to the reload button so it reloads the preview. 
    https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
    Your store data should reload too!

    Bonus:

      1. Chances are your code for creating the list items on load and new creation is VERY similar, 
if not the same, try to abstract it into a reusable function called createListItem. 
This approach is called DRY
https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

Tip: Verify the Storage section in the browser's developer tools to make sure the data is there!

*/

const form = document.querySelector("#form");
const userInput = document.querySelector("#userInput");
const quoteList = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

const createListItem = (task) => {
  const newLi = document.createElement("li");
  const newP = document.createElement("p");
  const deleteBtn = document.createElement("button");

  newLi.setAttribute("id", task.id);
  newLi.className = "flex gap-4 items-baseline px-4 justify=between";

  newP.textContent = task.textContent;

  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded";
  deleteBtn.addEventListener("click", () => {
    const currTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = currTasks.filter((q) => q.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    e.target.parentElement.remove();
  });

  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);

  return newLi;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userInput.value.trim()) {
    alert("Cannot submit an empty task");
    return;
  }
  const currTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTask = {
    id: "task-" + crypto.randomUUID().replaceAll("-", ""),
    content: userInput.value.trim(),
  };
  const updatedTasks = [newTask, ...currTasks];
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  const newLi = createListItem(newTask);
  quoteList.prepend(newLi);

  e.target.reset();
});

// Retrieve data:

// 1.Every time you hit the "Submit" button, add a new list item to the empty ul.
// Make sure the new item is at the top!
//   I.   Set the id of the object as an id to the list item element, it'll come in handy.
//   II.  Within the list item, add a red button that reads 'Delete'. Make it look cool! :D
//   III. Attach an event to this button on click, for now, just log the id of the item!

// 2.Make sure that when the document loads, you populate the contents of your storage item into the list.
// You can try to add an event listener of type load to the window itself!

const renderStorage = () => {
  const currTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  currTasks.forEach((task) => {
    const newLi = createListItem(task);
    quoteList.appendChild(newLi);
  });
};
renderStorage();

// Reload:

//     1.Just because we can.
// Add an event to the reload button so it reloads
// the preview.

reloadBtn.addEventListener("click", () => {
  window.location.reload();
});

// // Store data:
// // console.log("hi");
// // from the boilerplate, get the contents of the input once the form is submitted.
// const taskInput = document.querySelector("#taskInput");
// const formTaskInput = document.querySelector("#formTaskInput");

// // for every user input, create an object  id and content: the user input
// let tasksInputObjects = {
//   _id: "36b8f84d-df4e-4d49-b662-bcde71a87aaa",
//   task: "learn",
//   _id: "36b8f84d-df4e-4d49-b662-bcde71a87bbb",
//   task: "code",
//   _id: "36b8f84d-df4e-4d49-b662-bcde71a87ccc",
//   task: "repeat",
// };

// //form
// formTaskInput.addEventListener("submit", () => {
//   let taskInputValue = taskInput.value;
//   //make sure the input is not empty before saving
//   if (taskInputValue !== "") {
//     // set item to a stringified
//     sessionStorage.setItem("taskInput", JSON.stringify(taskInputValue));

//     // create a new task
//     let uuid = self.crypto.randomUUID();
//     let newTask = { _id: uuid, task: taskInputValue };

//     // store this value in localStorage as part of an array.
//     // store the new value at the beginning of the array!
//     localStorage.setItem(
//       "tasksInputObjects",
//       JSON.stringify([newTask, ...tasksInputObjects])
//     );
//   }

//   // reset the form
//   formTaskInput.reset();
//   taskInputValue.value = "";
// });
