// console.log(array);

let table = document.getElementById("main-table");

// Clear placeholder html or old data first.
table.innerHTML = "";

// Iterate over array, print to html.
array.forEach((item) => {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    tr.innerHTML = "<td class='center'>" + item.num + "</td><td>" + item.name + "</td><td>" + item.office + "</td><td>" + item.product + "</td><td>" + item.title + "</td><td class='center'>" + item.completedDate + "</td>";
});