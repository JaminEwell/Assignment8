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


var addEmployee = function() {
    "use strict";
    var header = "",
        html = "",
        msg, name, title, extension;
    msg = "Showing 1 employee";
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;

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
});