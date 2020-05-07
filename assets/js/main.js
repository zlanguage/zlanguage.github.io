import highlight from "./zhighlight.js";

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
menu.addEventListener("click", () => {
    menu.style.display = "none";
    nav.classList.add("w3-animate-left");
    nav.style.display = "block";
    setTimeout(() => {
        overlay.style.display = "block";
    }, 400);
})
overlay.addEventListener("click", () => {
    menu.style.display = "block";
    nav.style.display = "none";
    overlay.style.display = "none";
});
window.onload = highlight;