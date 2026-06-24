const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("active");
});


const linkTema = document.getElementById("toggleTema");

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

document.getElementById("trocarTema").addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    localStorage.setItem("tema", darkMode ? "dark" : "light");
});