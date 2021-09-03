characters = [
    {
        name: "Achilles",
        type: "Warrior"
    },
    {
        name: "Agni",
        type: "Mage"
    },
    {
        name: "Ah Muzen Cab",
        type: "Hunter"
    },
    {
        name: "Ah Puch",
        type: "Mage"
    },
    {
        name: "Amaterasu",
        type: "Warrior"
    },
    {
        name: "Ah Puch",
        type: "Mage"
    }
]
const picker = document.getElementById("picker")
const container = document.getElementById("container")
const p = document.createElement('p')

picker.addEventListener("click", (e) => {
    const random = Math.floor(Math.random() * characters.length)
    
    p.innerHTML = characters[random].name
    container.innerHTML = ""
    container.appendChild(p)
})