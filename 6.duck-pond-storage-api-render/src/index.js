//selector main section
const pond = document.querySelector("#pond");
//btn selector header
const summonBtn = document.querySelector("#summon-btn");

//render html to page
const renderDucks = (ducksArray, container) => {
  container.innerHTML = "";
  ducksArray.forEach((duck) => {
    container.innerHTML += ` 
        <div class='shadow-xl hover:shadow-2xl hover:cursor-pointer w-96 rounded-md m-auto flex-flex-col'>
             <figure class='rounded-t-md overflow-hidden w-full h-96'>
                <img
                    class='w-full h-full'
                    src=${duck.imgUrl}
                    alt=${duck.name}
                />
            </figure>
            <div class='flex flex-col p-6 pt-2 rounded-b-md bg-slate-800 h-40'>
                <h2 class='text-3xl border-b-2 mb-4 border-b-gray-400'>
                    ${duck.name}
                </h2>
                <p>${duck.quote}</p>
            </div>
        </div>
        `;
  });
};

//render one item to page
const renderSingleDuck = (duckObj, container) => {
  const { imgUrl, name, quote } = duckObj;
  //create the element
  const card = document.createElement("div");
  //add classes for Tailwind styling
  card.className =
    "shadow-xl hover:shadow-2xl hover:cursor-pointer w-96 rounded-md m-auto flex-flex-col";

  const figure = document.createElement("figure");
  figure.className = "rounded-t-md overflow-hidden w-full h-96";
  const img = document.createElement("img");
  img.className = "w-full";
  img.src = imgUrl;
  img.alt = name;
  figure.appendChild(img);

  const body = document.createElement("div");
  body.className = "flex flex-col p-6 pt-2 rounded-b-md bg-slate-800 h-40";
  const title = document.createElement("h2");
  title.className = "text-3xl border-b-2 mb-4 border-b-gray-400";
  title.textContent = name;
  const text = document.createElement("p");
  text.textContent = quote;
  body.appendChild(title);
  body.appendChild(text);

  card.appendChild(figure);
  card.appendChild(body);

  //add the element to the DOM as a child on the container (in this case, the <section id="pond">)
  container.appendChild(card);
};

//render error
const renderErrorMsg = (errorMsg, container) => {
  console.error(errorMsg);
  const h2 = document.createElement("h2");
  h2.className = "inline-block m-auto text-6xl mb-6 text-red-600";
  h2.textContent = errorMsg;
  container.appendChild(h2);
};

//using async/await
summonBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://duckpond-89zn.onrender.com/ducks");
    // console.log(res);

    if (!res.ok) {
      throw new Error(`${res.status} Something went wrong! `);
    }
    const data = await res.json();
    renderDucks(data, pond);
  } catch (error) {
    renderErrorMsg(error, pond);
  }
});

//without async/await

// addForm.addEventListener('submit', (e) => {
//     // prevent the page from reloading
//     e.preventDefault();

//     const name = addForm.querySelector('#name');
//     const imgUrl = addForm.querySelector('#img-url');
//     const quote = addForm.querySelector('#quote');

//     //check (or validate) if user gives appropriate input
//     if (!name.value || !imgUrl.value || !quote.value) {
//         alert('Please fill in all required fields!');
//         //have an early return, to stop the function from going on if the user doesn't give us the inputs we want
//         return;
//     }
//     const newDuck = {
//         _id: ducksInThePond.length,
//         name: name.value,
//         imgUrl: imgUrl.value,
//         quote: quote.value,
//     };
//     renderSingleDuck(newDuck, pond);

//     e.target.reset();
// });
