document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");
    
    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            if (answer.classList.contains("hidden")) {
                answer.classList.remove("hidden");
            } else {
                answer.classList.add("hidden");
            }
        });
    });

    const taskList = document.getElementById("taskList");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");

    addTaskBtn.addEventListener("click", () => {
        const taskName = taskInput.value.trim();
        if (taskName !== "") {
            addTask(taskName);
            taskInput.value = "";
        }
    });

    function addTask(taskName) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskName;
        taskList.appendChild(taskItem);
    }
});
