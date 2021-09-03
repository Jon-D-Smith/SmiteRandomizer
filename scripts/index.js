const picker = document.getElementById("picker")
const container = document.getElementById("container")
const characterList = document.getElementById("characters")


const p = document.createElement('p')

p.innerHTML = ""
picker.addEventListener("click", (e) => {
    const random = Math.floor(Math.random() * characters.length)
    
    p.innerHTML = `<h2>${characters[random].name}</h2>`
    container.innerHTML = ""
    container.appendChild(p)
})

document.addEventListener('onload', characters.map(character => {
    let li = document.createElement('li')
    li.innerHTML = `${character.name} - ${character.type}`
    characterList.appendChild(li)
    console.log('hi')
}))