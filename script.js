function addListItem() {
  let li = document.createElement("li"); //creation of the li variable that represents the html li element.
  let inputValue = document.getElementById("todo-input").value; //creation of the inputValue variable that represents the value of the input.
  let t = document.createTextNode(inputValue); //creation of the html input value.
  li.appendChild(t); //appending the html input value the li variable that represents the html li element.
  if (inputValue === "") {
    alert("please write something"); //when there is no value in the input
  } else {
    document.querySelector("ul").appendChild(li); //when there is a value in the input the li variable that represents the html li element with the input value is appended to the ul element
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
  addListItem();
  listBorderShow();
};
document.querySelector("body").onload = function () {
  listBorderHide();
};
