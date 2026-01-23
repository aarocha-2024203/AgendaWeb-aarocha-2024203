const index = localStorage.getItem("contactoSeleccionado");
const contactos = JSON.parse(localStorage.getItem("contactos")) || [];

if (index === null || !contactos[index]) {
    alert("Contacto no encontrado");
    window.location.href = "contactos.html";
}


document.getElementById("nombre").textContent = contactos[index].nombre;
document.getElementById("telefono").textContent = contactos[index].telefono;
document.getElementById("email").textContent =
    contactos[index].email || contactos[index].correo || "No registrado";

document.getElementById("direccion").textContent = contactos[index].direccion || "No registrada";


function volver() {
    window.location.href = "contactos.html";
}

// Eliminar contacto
function eliminarContacto() {
    if (confirm("¿Seguro que deseas eliminar este contacto?")) {
        contactos.splice(index, 1);
        localStorage.setItem("contactos", JSON.stringify(contactos));
        window.location.href = "contactos.html";
    }
}
