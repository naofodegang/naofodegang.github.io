let themeToggle = document.getElementById("themeToggle");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let containers = document.querySelectorAll(".container, .container2");
let navbar = document.querySelector(".navbar");
let tracks = document.querySelectorAll(".tracks, .tracks2");
let img = document.getElementById("meninossmt")

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    h1.classList.toggle("dark");
    
    containers.forEach(container => container.classList.toggle("dark"));
    navbar.classList.toggle("dark");
    tracks.forEach(track => track.classList.toggle("dark"));

    // Troca o ícone do botão
    if (body.classList.contains("dark")) {
        themeToggle.innerHTML = "🌙"; 
        img.src = "capa do naofuck.png"; 
    } else {
        themeToggle.innerHTML = "☀️"; 
        img.src = "meninossmt.gif"; 
    }
});
