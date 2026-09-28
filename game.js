// =========================================
// MENÚ PARA CELULAR
// =========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Cerrar menú al seleccionar una sección

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// =========================================
// AÑO AUTOMÁTICO DEL FOOTER
// =========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================================
// BOTÓN DE CONTACTO
// =========================================

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", () => {

    alert(
        "Próximamente podrás contactar directamente con Byron Gonzales Izquierdo."
    );

});