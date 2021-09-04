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
p.innerHTML = "";

document.addEventListener(
  "onload",
  characters.map((character) => {
    let li = document.createElement("li");
    li.innerHTML = `${character.name} - ${character.type}`;
    characterList.appendChild(li);
    filteredList = characters;
  })
);

picker.addEventListener("click", (e) => {
  const random = Math.floor(Math.random() * filteredList.length);
  p.innerHTML = `<h3>${filteredList[random].name}</h3>`;
  container.innerHTML = "";
  container.appendChild(p);
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
    let li = document.createElement("li");
    li.innerHTML = `${character.name} - ${character.type}`;
    characterList.appendChild(li);
  });
});
