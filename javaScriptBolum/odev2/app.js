let input = document.querySelector("#task");
let addButton = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
// let deleteButton = document.querySelectorAll(".");
let test = document.querySelector(".toast-body");

function deleteTodo() {
  //deleting element from list
  document.querySelectorAll(".deleteTodoButton").forEach((item) => {
    item.addEventListener("click", () => {
      //handle click
      item.parentElement.remove();
    });
  });
}

function doneTodo() {
  let todos = document.querySelectorAll("li");
  todos.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("doneElement");
    });
  });
}

function addTodo() {
  let todo = input.value;
  let newTodo = document.createElement("li");
  newTodo.innerHTML = '<span class="deleteTodoButton">x</span>' + todo;
  list.appendChild(newTodo);
  input.value = "";
  $(".success").toast("show");
}

//adding and removing element to list
addButton.addEventListener("click", function newElement() {
  if (input.value === "") {
    // alert("Please write something to add");
    $(".error").toast("show");
  } else {
    addTodo();
    doneTodo();
    deleteTodo();
  }
});

// doneTodo();
deleteTodo();
