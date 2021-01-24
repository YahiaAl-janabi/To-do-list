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
  if (count >= 6) {
    alert("Task limit reached");
  } else {
    taskCreateFunc();
  }
}

//This function is used for hiding the list border when there is no li items.
function listBorderHide() {
  let ul = document.querySelector("ul");
  if (ul.innerHTML === "") {
    ul.style.display = "none";
  }
}

// This function is used for showing the list border when there are list items.
function listBorderShow() {
  let ul = document.querySelector("ul");
  if (ul.innerHTML !== "") {
    ul.style.display = "block";
  }
}

//When submit is clicked taskAddFunc() and listBorderShow() are called
document.getElementById("todo-submit").onclick = function () {
  taskAddFunc();
  listBorderShow();
};

//When the body loads listBorderHide() is called
document.querySelector("body").onload = function () {
  listBorderHide();
};
