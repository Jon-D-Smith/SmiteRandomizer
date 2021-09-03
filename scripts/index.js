const picker = document.getElementById("picker")
const container = document.getElementById("container")

picker.addEventListener("click", (e) => {
    const p = document.createElement('p')
    p.innerHTML = "clicked"
    container.appendChild(p)
})