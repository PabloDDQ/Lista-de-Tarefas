document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");

    addTaskButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText.length > 15) {
            alert("O item deve ter no máximo 15 caracteres.");
            return;
        }
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class='editButton'>Editar</button>
                <button class='deleteButton'>Remover</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            li.querySelector('.editButton').addEventListener("click", () => editTask(li));
            li.querySelector('.deleteButton').addEventListener("click", () => deleteTask(li));
        }
    }

    function editTask(li) {
        const span = li.querySelector("span");
        const newText = prompt("Editar tarefa:", span.textContent);
        if (newText !== null && newText.trim() !== "" && newText.trim().length <= 15) {
            span.textContent = newText.trim();
        } else {
            alert("O item deve ter no máximo 15 caracteres.");
        }
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }
});
