const humBtn = document.getElementById("toggle-button")
const navLinks = document.getElementById("navbar-links")

humBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})

const humBtn2 = document.getElementById("toggle-button2")
const navLinks2 = document.getElementById("navbar2-links")

humBtn2.addEventListener("click", () => {
    navLinks2.classList.toggle("active")
})

