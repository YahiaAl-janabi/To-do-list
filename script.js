function AddListItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todo-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("you must write something!");
  } else {
    document.querySelector("ul").appendChild(li);
  }

  console.log(li.innerHTML);
}

document.getElementById("todo-submit").onclick = function () {
  AddListItem();
};
