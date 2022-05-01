// console.log(array);

let table = document.getElementById("main-table");

// Clear placeholder html or old data first.
table.innerHTML = "";

let min = 0;
let max = 9;

// Iterate over array, print to html.
array.forEach((item, index) => {
    if (index >= min && index <= max) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        tr.innerHTML = "<td class='center'>" + item.num + "</td><td>" + item.name + "</td><td>" + item.office + "</td><td>" + item.product + "</td><td>" + item.title + "</td><td class='center'>" + item.completedDate + "</td>";

    }
});

// Pagination

// Statistics, total, unique offices, unique products

// Graphs