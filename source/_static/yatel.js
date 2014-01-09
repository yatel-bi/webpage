$(document).ready(function() {

    var URL = "https://pypi.python.org/pypi/yatel/json";

    $.get(URL, function(data) {
        alert(data);
    });


});
