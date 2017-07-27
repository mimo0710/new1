require(["jquery","dialoganother"], function ($,Dialog) {
    $("#btn").on("click", function () {
        var settings = {
            width:600,
            content:"form.html"
        };
        //dialog.open(settings);
        var dialog = new Dialog(settings);
        dialog.open();
    });
});