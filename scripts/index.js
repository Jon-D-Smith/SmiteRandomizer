// Bind DOM elements
const picker = document.getElementById("picker");
const container = document.getElementById("container");
const characterList = document.getElementById("characters");
const filters = document.getElementById("filters");

// Set filter
let filter = "";
let filteredList;
// Create elements
const p = document.createElement("p");
p.classList.add("gods-name");
p.innerHTML = "";

const img = document.createElement("img");
img.classList.add("headshot");
document.addEventListener(
  "onload",
  characters.map((character) => {
    let li = document.createElement("p");
    const img = document.createElement("img");
    let div = document.createElement("div");
    div.classList.add("icons");
    li.innerHTML = `${character.name} - ${character.type}`;
    img.src = character.url;
    div.appendChild(li);
    div.appendChild(img);
    characterList.appendChild(div);
    filteredList = characters;
  })
);

picker.addEventListener("click", (e) => {
  const random = Math.floor(Math.random() * filteredList.length);
  p.innerHTML = `${filteredList[random].name}`;
  img.src = filteredList[random].url;
  container.innerHTML = "";
  container.appendChild(p);
  container.appendChild(img);
});

filters.addEventListener("change", (e) => {
  e.preventDefault();
  for (let i = 0, length = filters.length; i < length; i++) {
    if (filters[i].checked) {
      filter = filters[i].value;
      if (filter == "all") {
        filteredList = characters;
      } else {
        filteredList = characters.filter(
          (character) => character.type == filter
        );
      }
      break;
    }
  }
  characterList.innerHTML = "";
  filteredList.map((character) => {
    let li = document.createElement("p");
    const img = document.createElement("img");
    let div = document.createElement("div");
    div.classList.add("icons");
    li.innerHTML = `${character.name} - ${character.type}`;
    img.src = character.url;
    div.appendChild(li);
    div.appendChild(img);
    characterList.appendChild(div);
  });
});
