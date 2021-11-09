// SCROLL
// cuando el usuario hace scroll se ejecuta la función stickyfy
window.onscroll = function () { stickyfy() };

var header = document.getElementById("header");

// Se añade la clase "sticky" al header cuando se llega a la posición de scroll definida y se quita cuando no se cumple la condición
function stickyfy() {
	if (window.pageYOffset > 1) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}


// MENU MOBILE
const menuIconBar = document.getElementById("menuIconBar");
const menuIcon = document.getElementById("menuIcon");
const menu = document.querySelector("#menu");

function toggleClassActive() {
	if (
		!(menuIconBar.classList.contains("menu-icon-cross")
			|| menuIconBar.classList.contains("menu-icon-hamburguer"))
	) {
		menuIconBar.classList.add("menu-icon-cross");
	} else if (menuIconBar.classList.contains("menu-icon-cross")) {
		menuIconBar.classList.remove("menu-icon-cross");
		menuIconBar.classList.add("menu-icon-hamburguer");
	} else if (menuIconBar.classList.contains("menu-icon-hamburguer")) {
		menuIconBar.classList.remove("menu-icon-hamburguer");
		menuIconBar.classList.add("menu-icon-cross");
	}

	menu.classList.toggle("menu-visible");
}

menuIcon.addEventListener('click', toggleClassActive);