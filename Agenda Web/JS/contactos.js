
if (!localStorage.getItem("contactos")) {
    const contactosIniciales = [
        {
            nombre: "Carlos Pérez",
            telefono: "5551-2345",
            correo: "carlos@gmail.com",
            direccion: "Zona 1, Guatemala",
            favorito: true
        },
        {
            nombre: "Ana López",
            telefono: "5552-6789",
            correo: "ana@gmail.com",
            direccion: "Zona 10, Guatemala",
            favorito: true
        },
        {
            nombre: "Luis Gómez",
            telefono: "5553-1122",
            correo: "luis@gmail.com",
            direccion: "Mixco",
            favorito: false
        },
        {
            nombre: "María Fernández",
            telefono: "5554-3344",
            correo: "maria@gmail.com",
            direccion: "Villa Nueva",
            favorito: false
        },
        {
            nombre: "José Ramírez",
            telefono: "5555-5566",
            correo: "jose@gmail.com",
            direccion: "Zona 7, Guatemala",
            favorito: false
        }
    ];

    localStorage.setItem("contactos", JSON.stringify(contactosIniciales));
}


const userName = document.getElementById("userName");
userName.textContent = localStorage.getItem("usuario") || "Usuario";

userName.onclick = () => {
    window.location.href = "perfil.html";
};

const contactList = document.getElementById("contactList");

let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
let mostrandoFavoritos = false;


userName.textContent = localStorage.getItem("usuario") || "Usuario";


function renderContactos() {
    contactList.innerHTML = "";

    let lista = mostrandoFavoritos
        ? contactos.map((c, i) => ({ ...c, index: i })).filter(c => c.favorito)
        : contactos.map((c, i) => ({ ...c, index: i }));

    if (lista.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay contactos favoritos";
    li.classList.add("mensaje-vacio");
    contactList.appendChild(li);
    return;
}


    lista.forEach((contacto) => {
        const li = document.createElement("li");
        li.classList.add("contact-item");

        
        li.onclick = () => verDetalle(contacto.index);

        const nombre = document.createElement("span");
        nombre.textContent = contacto.nombre;

        const star = document.createElement("span");
        star.innerHTML = "★";
        star.classList.add("star");
        if (contacto.favorito) star.classList.add("favorito");

        
        star.onclick = (e) => {
            e.stopPropagation(); 
            contactos[contacto.index].favorito = !contactos[contacto.index].favorito;
            localStorage.setItem("contactos", JSON.stringify(contactos));
            renderContactos();
        };

        li.appendChild(nombre);
        li.appendChild(star);
        contactList.appendChild(li);
    });
}

function mostrarContactos() {
    mostrandoFavoritos = false;
    setTabActive(0);
    renderContactos();
}

function mostrarFavoritos() {
    mostrandoFavoritos = true;
    setTabActive(1);
    renderContactos();
}

function setTabActive(index) {
    document.querySelectorAll(".tab").forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
    });
}


function nuevoContacto() {
    window.location.href = "nuevo-contacto.html";
}

function verDetalle(index) {
    localStorage.setItem("contactoSeleccionado", index);
    window.location.href = "detalle-contacto.html";
}

renderContactos();

const userPhoto = document.getElementById("userPhoto");

const fotoUsuario = localStorage.getItem("fotoUsuario");
if (fotoUsuario) {
    userPhoto.src = fotoUsuario;
}

function irTodo() {
    window.location.href = "todo.html";
}
