function addListItem() {
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  var inputValue = document.getElementById("todo-input").value;
  var t = document.createTextNode(inputValue);
  var y = document.createTextNode("\u2BC1" + " ");

  li.appendChild(t);
  li.prepend(y);

  if (inputValue === "") {
    alert("please write something");
  } else {
    document.querySelector("ul").appendChild(li);
  }
}
var count = 0;
function maxItems() {
  var submit = document.getElementById("todo-submit").onclick;
  if (submit) {
    count++;
  }
  console.log(count);
  if (count >= 6) {
    alert("Task limit reached");
  } else {
    addListItem();
  }
}

//This function is used for hiding the list border when there is no li items.
function listBorderHide() {
  var ul = document.querySelector("ul");
  if (ul.innerHTML === "") {
    ul.style.display = "none";
  }
}

// This function is used for showing the list border when there are list items.
function listBorderShow() {
  var ul = document.querySelector("ul");
  if (ul.innerHTML !== "") {
    ul.style.display = "block";
  }
}

//This is the anonymous function for listening for the event handler
document.getElementById("todo-submit").onclick = function () {
  maxItems();
  listBorderShow();
};

document.querySelector("body").onload = function () {
  listBorderHide();
};
