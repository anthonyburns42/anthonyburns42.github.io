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
// Print total number of product entries to html.
document.getElementById("total-count").innerHTML = arLength;

// Function to get unique values of property.
function getUnique(array, prop) {
    let b = {};
    array.forEach(el => {
        b[el[prop]] = (b[el[prop]] || 0) + 1;
    });
    return b;
}

// Function to sort array of unique values by how many times it appears in the table. Then print to the id of the location.
function sortPrint(array, location) {
    //To sort object by values, results in array of arrays in order largest to smallest.
    let entries = Object.entries(array);
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    //Print to html the office and number per office. First clear list, then repopulate list.
    document.getElementById(location).innerHTML = '';
    sorted.forEach(function(innerArr) {
        document.getElementById(location).insertAdjacentHTML('beforeend', "<li>" + innerArr[0] + ": " + innerArr[1] + "</li>");
    });
}

// Get unique values of Office from the array of objects.
let offices = getUnique(array, 'office');
document.getElementById("unq-offices").innerHTML = Object.keys(offices).length;

// Get unique values of Product form the array of objects.
let products = getUnique(array, 'product');
document.getElementById("unq-products").innerHTML = Object.keys(products).length;

sortPrint(offices, 'office-list');
sortPrint(products, 'prod-list');

// Graphs