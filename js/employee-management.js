/*eslint-env browser*/

var employees;

employees = [
    ["Bob Baker", "CEO", 3765],
    ["Fred Flintstone", "Manager", 1066],
    ["Queen Latifah", "Singer", 5032],
    ["Todd Rick", "Baker", 3045],
    ["Thomas Hanks", "Actor", 5866]
];

var $ = function(id) {
    "use strict";
    return window.document.getElementById(id);
};


function countEmployees(data) {
    "use strict";
    var count = 0;
    for (var i = 0; i < data.length; i++) {

        count++;
    }
    return count;
}



function buildTable(data) {
    "use strict";
    var table = document.createElement("table");
    table.className = "employees";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    tbody.id = "employeeBody";
    var headRow = document.createElement("tr");
    ["Name", "Title", "Extension", "Remove"].forEach(function(el) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(el));
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    data.forEach(function(el) {
        var tr = document.createElement("tr");
        for (var o in el) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(el[o]));
            tr.appendChild(td);

        }
        var cell = tr.insertCell(-1);
        cell.innerHTML = "<button id='delete'>Delete</button>";
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;
}


function updateEmployee() {
    "use strict";
    var table = document.getElementsByClassName("employees");
    var tbody = document.getElementById("employeeBody");
    var name = $("name").value;
    var title = $("title").value;
    var extension = $("extension").value;
    var row = tbody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = title;
    cell3.innerHTML = extension;
    cell4.innerHTML = "<button id='delete'>Delete</button>";


    //var tbodyNode = document.createElement("tbody");
    //tableNode.appendChild(tbodyNode);




}


var addEmployee = function() {
    "use strict";

    var header = "",
        html = "",
        required,
        msg, name, title, extension;
    msg = "Please enter required field";
    required = "<span>Required field</span>";
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;

    if (name === "") {
        name = required;
        header = msg;

    }
    if (title === "") {
        title = required;
        header = msg;

    }
    if (extension === "") {
        extension = required;
        header = msg;

    }

    $("employee_header").innerHTML = header;
    if (header === msg) {
        html = html + "<tr><td>Name:</td><td>" + name + "</td></tr>";
        html = html + "<tr><td>Title:</td><td>" + title + "</td></tr>";
        html = html + "<tr><td>Extension:</td><td>" + extension + "</td></tr>";
        $("employee_info").innerHTML = html;
    } else {
        $("employee_info").innerHTML = "";
        $("form").submit();
    }


};


var deleteEmployee = function() {
    "use strict";
    var tbody = document.getElementById("employeeBody");
    tbody.deleteRow(-1);
};


window.addEventListener("load", function() {
    "use strict";
    $("submit").addEventListener("click", updateEmployee);
});

//$("delete").add("click", deleteEmployee);
//};

window.onload = function() {
    document.getElementById("content").appendChild(buildTable(employees));
    var numEmployees = countEmployees(employees);
    document.getElementById("showing").innerHTML = 'Showing ' + numEmployees + ' Employees';
};