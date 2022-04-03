"use strict";

console.log("Tony, it is working!");

var addButton = document.getElementById("add-btn");
var userInput = document.getElementById("new-item");
var todoList = document.getElementById("to-do-list");
var completedList = document.getElementById("completed-list");
// var item = document.getElementsByTagName("li");

// function inputLength() {
//     return userInput.value.length;
// }

// function listLength() {
//     return item.length;
// }

function deleteItem(e) {
    e.target.parentNode.remove();
}

let dltBtns = document.querySelectorAll(".remove");
dltBtns.forEach(function(i) {
    i.addEventListener("click", deleteItem);
});

function moveItem(e) {
    var tgt = e.target.parentNode;
    completedList.appendChild(tgt);
    e.target.nextSibling.remove();
    e.target.remove();
}

let dnBtns = document.querySelectorAll(".move");
dnBtns.forEach(function(i) {
    i.addEventListener("click", moveItem);
});

function createItem() {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(userInput.value));
    todoList.appendChild(item);
    userInput.value = "";

    var doneButton = document.createElement("button");
    doneButton.appendChild(document.createTextNode("Done"));
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    // doneButton.classList.add("move");
    // deleteButton.classList.add("remove");
    item.append(doneButton, deleteButton);

    doneButton.addEventListener("click", moveItem);
    deleteButton.addEventListener("click", deleteItem);
}

document.getElementById("add-btn").onclick = createItem;

// function addListAfterClick() {
//     //makes sure that an empty input field doesn't create a li
//     if (inputLength() > 0) {
//         createListElement();
//     }
// }

// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
//         //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
//         createListElement();
//     }
// }


// addButton.addEventListener("click", addListAfterClick);

// userInput.addEventListener("keypress", addListAfterKeypress);