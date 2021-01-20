function addListItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todo-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("please write something");
  } else {
    document.querySelector("ul").appendChild(li);
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
  addListItem();
  listBorderShow();
};
document.querySelector("body").onload = function () {
  listBorderHide();
};
