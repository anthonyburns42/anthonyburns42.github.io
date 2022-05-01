// console.log(array);

let table = document.getElementById("main-table");

array.forEach((item, index) => {
    console.log(index, item.name);
    let tr = document.createElement("tr");
    table.appendChild(tr);
    tr.innerHTML = "<td>" + item.num + "</td><td>" + item.name + "</td><td>" + item.office + "</td><td>" + item.product + "</td><td>" + item.title + "</td><td>" + item.completedDate + "</td>";
});