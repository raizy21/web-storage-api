/*
Web Storage API
The Web Storage API provides mechanisms by which browsers can store key-value pairs on the client side. 
This API is comprised of two main storage objects: window.localStorage and window.sessionStorage. 
Both provide a simple way to store data, but they differ in scope and lifetime of the data.

window.localStorage
  Scope: Data is stored per origin (protocol + domain + port) and is accessible across all pages 
under the same origin.
  Lifetime: Data persists even after the browser is closed and reopened.
  Use Case: Ideal for storing long-term data like user settings, preferences, or any state 
that should persist beyond a single session.

window.sessionStorage
  Scope: Data is stored per origin and per window (or tab). 
Data from different tabs or windows is not shared, even if they are from the same origin.
  Lifetime: Data is available only for the duration of the page session. 
Once the tab or window is closed, the data is cleared.
  Use Case: Suitable for storing temporary data specific to a particular window or tab session, 
such as form inputs during a multi-step form process.

After adding a few items. Open the Developer Tools in your Browser and look for 
Storage under Application (Chrome) or a similar 
term in another browser. Check how the data is stored for both local and session storage. 

To test data persistance, click the reload button? See? Session storage is gone!

*/

// Array of 10 random tasks as strings
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];
// Get elements from DOM
const localStorageBtn = document.getElementById("add-item-localstorage");
const sessionStorageBtn = document.getElementById("add-item-sessionstorage");
const itemListLocal = document.getElementById("item-list1");
const itemListSession = document.getElementById("item-list2");
const reload = document.getElementById("reload");

// When you click on the blue button a new task will be added and stored in localStorage
localStorageBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  const task = tasks[Math.floor(Math.random() * 10)];
  newItem.textContent = task;
  itemListLocal.appendChild(newItem);
  itemListLocal.scrollTop = itemListLocal.scrollHeight;
  // Get previous data OR an empty array
  const previousData = JSON.parse(localStorage.getItem("localExample")) || [];
  // Set item to a stringified version of an array with the old and new tasks
  localStorage.setItem("localExample", JSON.stringify([...previousData, task]));
});

// When you click on the red button a new task will be added and stored in sessionStorage
sessionStorageBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  const task = tasks[Math.floor(Math.random() * 10)];
  newItem.textContent = task;
  itemListSession.appendChild(newItem);
  itemListSession.scrollTop = itemListSession.scrollHeight;
  // Get previous data  OR an empty array
  const previousData =
    JSON.parse(sessionStorage.getItem("sessionExample")) || [];
  // Set item to a stringified version of an array with the old and new tasks
  sessionStorage.setItem(
    "sessionExample",
    JSON.stringify([...previousData, task])
  );
});

reload.addEventListener("click", () => {
  window.location.reload();
});

// This function runs as soon as it's loaded. 
// It's called an IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(() => {
  // Populate localStorage content
  const dataInLocalStorage =
    JSON.parse(localStorage.getItem("localExample")) || [];
  dataInLocalStorage.forEach((e) => {
    const newItem = document.createElement("li");
    newItem.textContent = e;
    itemListLocal.appendChild(newItem);
    itemListLocal.scrollTop = itemListLocal.scrollHeight;
  });

  // Populate sessionStorage content
  const dataInSessionStorage =
    JSON.parse(sessionStorage.getItem("localExample")) || [];
  dataInSessionStorage.forEach((e) => {
    const newItem = document.createElement("li");
    newItem.textContent = e;
    itemListSession.appendChild(newItem);
    itemListSession.scrollTop = itemListSession.scrollHeight;
  });
})();
