function addListItem() {
  //creation of the li variable that represents the html li element.
  var li = document.createElement("li");
  //creation of the inputValue variable that represents the value of the input.
  var inputValue = document.getElementById("todo-input").value;
  //creation of the html input value.
  var t = document.createTextNode(inputValue);
  //appending the html input value the li variable that represents the html li element.
  li.appendChild(t);
  //when there is no value in the input
  if (inputValue === "") {
    alert("please write something");
  }
  //when there is a value in the input the li variable that represents the html li element with the input value is appended to the ul element
  else {
    document.querySelector("ul").appendChild(li);
  }
}

function listBorderHide() {
  var ul = document.querySelector("ul");
  if ((ul.innerHTML = " ")) {
    ul.style.display = "none";
  }
}

function listBorderShow() {
  var ul = document.querySelector("ul");
  if (ul.innerHTML != " ") {
    ul.style.display = "block";
  }
}

document.querySelector("body").onload = function () {
  listBorderHide();
};

//This is the anonymous function for listening for the event handler
document.getElementById("todo-submit").onclick = function () {
  addListItem();
  listBorderShow();
};
