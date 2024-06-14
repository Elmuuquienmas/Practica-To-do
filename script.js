let tareas = []
// Función para agregar una nueva tarea
function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const tarea = input.value.trim();

    if (tarea) {
        tareas.push(tarea);
        input.value = '';
        actualizarLista();
    }
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarTarea(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarLista();
}