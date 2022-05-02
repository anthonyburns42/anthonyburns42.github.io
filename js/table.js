// array is variable from object.js.

let table = document.getElementById("main-table");
let select = document.getElementById("pages");

// Get array length/total count of objects.
const arLength = array.length;

// Divide array length by 10 to find number of pages.
const pageNum = arLength/10;


function createTable(min, max) {
    // Iterate over array, print to html.
    array.forEach((item, index) => {
        if (index >= min && index <= max) {
            let tr = document.createElement("tr");
            table.appendChild(tr);
            tr.innerHTML = "<td class='center'>" + item.num + "</td><td>" + item.name + "</td><td>" + item.office + "</td><td>" + item.product + "</td><td>" + item.title + "</td><td class='center'>" + item.completedDate + "</td>";

        }
    });
}

function changePage() {
    // Get option value.
    let page = this.value;
    // Setting up min and max for array items/pagination. 10 per page.
    let max = page * 10 - 1;
    let min = max - 9;

    // Clear placeholder html or old data first.
    table.innerHTML = "";

    // Create table for newly selected page.
    createTable(min, max);
}

// Create first page of table on page load.
createTable(0,9);

// Create html of options for select based on data.
for (var i = 0; i < pageNum; i++) {
    let option = document.createElement("option");
    option.appendChild(document.createTextNode(i + 1));
    option.value = i + 1;
    select.appendChild(option);
}

// Set Event Listener on the select dropdown.
select.addEventListener("change", changePage);


// Statistics, total, unique offices, unique products

// Graphs