const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
    e.preventDefault();

    const contacto = {
        nombre: nombre.value,
        telefono: telefono.value,
        email: email.value,
        direccion: direccion.value,
        favorito: false
    };

    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push(contacto);
    localStorage.setItem("contactos", JSON.stringify(contactos));

    window.location.href = "contactos.html";
});

function volver() {
    window.location.href = "contactos.html";
}
