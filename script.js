//Creates the task from input value
function taskCreateFunc() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("todo-input").value;
  let textNode_inputValue = document.createTextNode(inputValue);
  let textNode_unicodeDiamond = document.createTextNode("\u2BC1" + " ");
  li.appendChild(textNode_inputValue);
  li.prepend(textNode_unicodeDiamond);
  if (inputValue === "") {
    alert("please write something");
  } else {
    document.querySelector("ul").appendChild(li);
  }

  document.getElementById("todo-input").value = "";
}

//Counts the number of tasks
let count = 0;
function taskCountFunc() {
  let submit = document.getElementById("todo-submit").onclick;
  if (submit) {
    count++;
  }
}

//Adds the created task to the list and limits the amount of possible tasks to 5
function taskAddFunc() {
  taskCountFunc();
  if (count >= 10) {
    alert("Task limit reached");
  } else {
    taskCreateFunc();
  }
}
function clearListFunc() {
  let clearList = document.getElementById("clearlist");

  if (clearList.onclick) {
    location.reload();
  }
}

//This function is used for hiding the list border when there is no li items.
function listBorderHide() {
  let ul = document.querySelector("ul");
  let clearList = document.getElementById("clearlist");
  if (ul.innerHTML === "") {
    ul.style.display = "none";
    clearList.style.display = "none";
  }
}

// This function is used for showing the list border when there are list items.
function listBorderShow() {
  let clearList = document.getElementById("clearlist");
  let ul = document.querySelector("ul");
  if (ul.innerHTML !== "") {
    ul.style.display = "block";
    clearList.style.display = "block";
  }
}

function FocusInput() {
  let toDoInput = document.getElementById("todo-input");
  toDoInput.focus();
}

//When submit is clicked taskAddFunc() and listBorderShow() are called
document.getElementById("todo-submit").onclick = function () {
  taskAddFunc();
  listBorderShow();
  FocusInput();
};

//When the body loads listBorderHide() is called
document.querySelector("body").onload = function () {
  listBorderHide();
  FocusInput();
};

document.getElementById("clearlist").onclick = function () {
  clearListFunc();
  listBorderHide();
};
