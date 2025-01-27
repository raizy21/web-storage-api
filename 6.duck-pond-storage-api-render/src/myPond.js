// set item to local storage
localStorage.setItem("newThing", "Look ma, I'm in local storage!");
// override first item
localStorage.setItem("newThing", "What happens now?");
localStorage.setItem("newThing2", "I am a banana!");
localStorage.setItem("newThing3", "Learn,sleep and repeat.");

// get item from local storage
const myThing = localStorage.getItem("newThing");
console.log("myThing: ", myThing);

const myThing2 = localStorage.getItem("newThing2");
console.log("myThing2: ", myThing2);

const myThing3 = localStorage.getItem("newThing3");
console.log("myThing3: ", myThing3);

//remove item storage
setTimeout(() => {
  //remove items
  localStorage.removeItem("newThing");
  //clean tho whole storage
  //   localStorage.clear();
}, 2000);

//remove item storage
setTimeout(() => {
  //remove items
  localStorage.removeItem("newThing2");
}, 4000);

//remove item storage
setTimeout(() => {
  //remove items
  localStorage.removeItem("newThing3");
}, 6000);

//remove item that are not in storage
setTimeout(() => {
  //remove items
  localStorage.removeItem("newThing");
}, 4000);

//clean tho whole storage
setTimeout(() => {
  localStorage.clear();
}, 8000);

//selector to add a new form
const addForm = document.querySelector("#add-form");

const myPond = document.querySelector("#my-pond");

//set a empty element in storage so you can save items
// if item empty set a empty array
const myDucks = JSON.parse(localStorage.getItem("myDucks")) || [];

console.log("myDucks: ", myDucks); //array of objects
console.log("type of myDucks", typeof myDucks); //string

//use parse to work with the item
const parsedDucks = JSON.parse(myDucks);
console.log("parsedDucks: ", parsedDucks); //array of objects
console.log("type of parsedDucks:", typeof parsedDucks); //object

// const renderSingleDuck = (duckObj, container) => {
//   const { imgUrl, name, quote } = duckObj;
//   //create the element
//   const card = document.createElement("div");
//   //add classes for Tailwind styling
//   card.className =
//     "shadow-xl hover:shadow-2xl hover:cursor-pointer w-96 rounded-md m-auto flex-flex-col";

//   const figure = document.createElement("figure");
//   figure.className = "rounded-t-md overflow-hidden w-full h-96";
//   const img = document.createElement("img");
//   img.className = "w-full";
//   img.src = imgUrl;
//   img.alt = name;
//   figure.appendChild(img);

//   const body = document.createElement("div");
//   body.className = "flex flex-col p-6 pt-2 rounded-b-md bg-slate-800 h-40";
//   const title = document.createElement("h2");
//   title.className = "text-3xl border-b-2 mb-4 border-b-gray-400";
//   title.textContent = name;
//   const text = document.createElement("p");
//   text.textContent = quote;
//   body.appendChild(title);
//   body.appendChild(text);

//   card.appendChild(figure);
//   card.appendChild(body);

//   //add the element to the DOM as a child on the container (in this case, the <section id="pond">)
//   container.appendChild(card);
// };

//submit event add a new item
addForm.addEventListener("submit", (e) => {
  // prevent the page from reloading
  e.preventDefault();

  //selectors
  const name = addForm.querySelector("#name");
  const imgUrl = addForm.querySelector("#img-url");
  const quote = addForm.querySelector("#quote");

  //check (or validate) if user gives appropriate input
  if (!name.value || !imgUrl.value || !quote.value) {
    alert("Please fill in all required fields!");
    //have an early return, to stop the function from going on if the user
    // doesn't give us the inputs we want
    return;
  }

  //data form duck item
  const newDuck = {
    _id: crypto.randomUUID(),
    name: name.value,
    imgUrl: imgUrl.value,
    quote: quote.value,
  };

  // console.log(newDuck);
  //add new item at the end of an array
  const updatedDucks = [...myDucks, newDuck];
  //set in local storage the new duck
  localStorage.setItem("myDucks", JSON.stringify(updatedDucks));
  //render all ducks with for each
  updatedDucks.forEach((duck) => renderSingleDuck(duck, myPond));

  //reset event
  e.target.reset();
});
