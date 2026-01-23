const profileName = document.getElementById("profileName");
const profilePhoto = document.getElementById("profilePhoto");
const photoInput = document.getElementById("photoInput");


profileName.textContent = `Nombre del usuario: ${localStorage.getItem("usuario") || "Usuario"}`;

const fotoGuardada = localStorage.getItem("fotoUsuario");
profilePhoto.src = fotoGuardada || "../img/user.jpg";


function cambiarFoto() {
    photoInput.click();
}

photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        localStorage.setItem("fotoUsuario", reader.result);
        profilePhoto.src = reader.result;
    };
    reader.readAsDataURL(file);
});


function volver() {
    window.location.href = "contactos.html";
}
