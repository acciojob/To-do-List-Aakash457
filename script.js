const input = document.getElementById("newTodoInput");
const addButton = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {
    const todoText = input.value.trim();

    // Prevent empty or whitespace-only todos
    if (todoText === "") {
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = todoText;

    // Add it to the ordered list
    todoList.appendChild(li);

    // Clear the input after adding
    input.value = "";
});