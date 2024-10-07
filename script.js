const mascara = document.querySelector(".mascara")
const body = document.querySelector("body")
const form = document.querySelector("form")
const menuLinks = document.querySelector(".menu-links")

const mostrarFormulario = () => {
    mascara.style.visibility = "visible"
    form.style.visibility = "visible"
    form.style.opacity = "1"
    form.style.top = "50%"
    body.style.overflow = "hidden"
    
    ocultarMenu()
}

const ocultarFormulario = () => {
    mascara.style.visibility = "hidden"
    form.style.visibility = "hidden"
    form.style.opacity = "0"
    form.style.top = "150%"
    body.style.overflow = "auto"
}

const mostrarMenu = () => {
    menuLinks.style.display = "flex"
}

const ocultarMenu = () => {
    menuLinks.style.display = "none"
}

window.addEventListener("scroll", () => {
    const header = document.querySelector("header")

    header.classList.toggle("scrolling", window.scrollY > 100)
})