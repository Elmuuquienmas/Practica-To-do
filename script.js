let tareas = [];

function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const tarea = input.value.trim();

    if (tarea) {
        tareas.push({ texto: tarea, completada: false });
        input.value = '';
        actualizarLista();
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between bg-white p-3 rounded-md shadow-sm';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.completada;
        checkbox.className = 'mr-2';
        checkbox.onclick = () => completarTarea(index);

        const span = document.createElement('span');
        span.textContent = tarea.texto;
        span.className = tarea.completada ? 'line-through text-gray-500 flex-grow' : 'flex-grow';

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'bg-red-500 text-white px-2 py-1 rounded-md text-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500';
        botonEliminar.onclick = () => eliminarTarea(index);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function completarTarea(index) {
    tareas[index].completada = !tareas[index].completada;
    actualizarLista();
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarLista();
}