let themeToggle = document.getElementById("themeToggle");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let containers = document.querySelectorAll(".container, .container2");
let navbar = document.querySelector(".navbar");
let tracks = document.querySelectorAll(".tracks, .tracks2");
let img = document.getElementById("meninossmt");
let menuToggle = document.querySelector(".menu-toggle"); 
let mds = document.querySelector("h2");
let copyright = document.querySelector("footer");

// Menu burger toggle
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

// Tema claro/escuro toggle
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    h1.classList.toggle("dark");
    
    containers.forEach(container => container.classList.toggle("dark"));
    navbar.classList.toggle("dark");
    tracks.forEach(track => track.classList.toggle("dark"));

    // Troca o ícone do botão e o estado da imagem
    if (body.classList.contains("dark")) {
        themeToggle.innerHTML = "🌙"; 
        img.src = "/capa do naofuck.png";   
        mds.style.display = "block"; // Exibe o h2
        copyright.style.color = "black";
    } else {
        themeToggle.innerHTML = "☀️"; 
        img.src = "/meninossmt.gif"; 
        mds.style.display = "none"; // Oculta o h2
        copyright.style.color = "white"
    }
});
