$(document).ready(function () {

    // Click event
    $("#registerBtn").click(function () {
        $("#message").text("Registration Successful!");
    });

    // Fade In
    $("#showBtn").click(function () {
        $("#eventCard").fadeIn();
    });

    // Fade Out
    $("#hideBtn").click(function () {
        $("#eventCard").fadeOut();
    });

});