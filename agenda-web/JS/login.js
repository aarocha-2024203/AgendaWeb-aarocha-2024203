document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;

    
    localStorage.setItem("usuario", usuario);

    
    window.location.href = "../HTML/contactos.html";
});
