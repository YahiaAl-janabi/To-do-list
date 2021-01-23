function addListItem() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("todo-input").value;
  let t = document.createTextNode(inputValue);
  let y = document.createTextNode("\u2BC1" + " ");

  li.appendChild(t);
  li.prepend(y);

  if (inputValue === "") {
    alert("please write something");
  } else {
    document.querySelector("ul").appendChild(li);
  }
}
let count = 0;
function maxItems() {
  let submit = document.getElementById("todo-submit").onclick;
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

//This is the anonymous function for listening for the event handler
document.getElementById("todo-submit").onclick = function () {
  maxItems();
  listBorderShow();
};
