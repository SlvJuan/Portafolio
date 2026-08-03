const tarea = document.getElementById("task");
const lista = document.querySelector(".lists");

function clicked() {
    if (tarea.value === "") {
        alert("La tarea no debe estar vacía");
    } else {
        let li = document.createElement("li");
        li.innerHTML = tarea.value;
        lista.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Carácter '×' para el botón de cerrar [cite: 866]
        li.appendChild(span);
        
        tarea.value = "";
        guardar();
    }
}

lista.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        guardar();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        guardar();
    }
});

// Guardado persistente usando LocalStorage [cite: 896, 897]
function guardar() {
    localStorage.setItem("data", lista.innerHTML);
}

function getData() {
    lista.innerHTML = localStorage.getItem("data") || "";
}

// Cargar los datos al iniciar la página [cite: 898]
getData();