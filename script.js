"use strict";

const todoAdd = document.getElementById("todo-add");
const statut = document.getElementById("status");
const todolist = document.getElementById("todolist");

const todos = []


todoAdd.addEventListener("keydown", addTodo);

/** FUNCTIONS */
function addTodo(e) {
    if (e.key === "Enter") {
        const todo = todoAdd.value;
        todos.push(todo);
        //["tache1","tache2","tache2"]

        insertTodos()
        todoAdd.value = "";
    }
    updateStatus()
}

function updateStatus() {
    if (todos.length > 0){
        statut.style.display = "none";
    }else{
        statut.style.display = "block"
    }
}

function insertTodos() {
        // création d'une balise <li></li>
        const liElement = document.createElement("li");
        // ajout de la classe "todo"
        liElement.classList.add("todo");
        //insérer le text das le li
        const task = todos[todos.length - 1]
        liElement.innerHTML = task;
        todolist.append(liElement)
    
    
}