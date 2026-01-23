let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const todoList = document.getElementById("todoList");
const form = document.getElementById("todoForm");

// AGREGAR TAREA
form.addEventListener("submit", e => {
    e.preventDefault();

    const tarea = {
        titulo: document.getElementById("titulo").value,
        prioridad: parseInt(document.getElementById("prioridad").value)
    };

    tareas.push(tarea);
    guardar();
    form.reset();
});

// MOSTRAR TAREAS
function render() {
    todoList.innerHTML = "";

    // ORDENAR POR PRIORIDAD
    tareas.sort((a, b) => a.prioridad - b.prioridad);

    tareas.forEach((t, i) => {
        const li = document.createElement("li");
        li.className = "todo-item";

        // TEXTO
        const texto = document.createElement("span");
        texto.className = "todo-text";
        texto.textContent = `${t.titulo} (Prioridad: ${nombrePrioridad(t.prioridad)})`;

        // CONTENEDOR DE BOTONES
        const acciones = document.createElement("div");
        acciones.className = "todo-actions";

        // BOTÓN EDITAR
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "✏️";
        btnEditar.className = "editar";
        btnEditar.onclick = () => editar(i);

        // BOTÓN ELIMINAR
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "🗑";
        btnEliminar.className = "eliminar";
        btnEliminar.onclick = () => eliminar(i);

        acciones.appendChild(btnEditar);
        acciones.appendChild(btnEliminar);

        li.appendChild(texto);
        li.appendChild(acciones);
        todoList.appendChild(li);
    });
}


function editar(index) {
    const nuevo = prompt("Editar tarea:", tareas[index].titulo);
    if (nuevo) {
        tareas[index].titulo = nuevo;
        guardar();
    }
}

function eliminar(index) {
    if (confirm("¿Eliminar tarea?")) {
        tareas.splice(index, 1);
        guardar();
    }
}

function guardar() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    render();
}

function nombrePrioridad(p) {
    return p === 1 ? "Alta" : p === 2 ? "Media" : "Baja";
}

function volver() {
    window.location.href = "contactos.html";
}

render();
