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

function buildTable(data) {
    var table = document.createElement("table");
    table.className = "gridtable";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
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
            td.appendChild(document.createTextNode(el[o]))
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;
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

var loadEmployees = function() {
    "use strict";
    var header, html, name, title, extension;

};

var deleteEmployee = function() {
    "use strict";
};


window.addEventListener("load", function() {
    "use strict";
    $("submit").addEventListener("click", addEmployee);
    display();

});

window.onload = function() {
    document.getElementById("content").appendChild(buildTable(employees));
}