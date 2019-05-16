(function() {
    $("#container").mousemove(function(event) {
        if (event.pageX <= 13) {
            $("#bar").css({ "margin-left": 0 });
        } else if (event.pageX >= 750) {
            $("#bar").css({ "margin-left": 740 });
        } else {
            $("#bar").css({ "margin-left": event.pageX });
        }
        $("#top").width(event.pageX);
    });
})();
