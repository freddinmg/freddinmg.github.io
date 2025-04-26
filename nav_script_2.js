$(document).ready(function () {
    $("#nav-button-1").on("click", function () {
        $("#nav-list-1 .nav-links").toggle("fold");
    })
    $("#nav-list-1 .nav-close-button").on("click", function () {
        $("#nav-list-1 .nav-links").hide("fold");
    })

    $("#nav-button-2").on("click", function () {
        $("#nav-list-2 .nav-links").toggle("fold");
    })
    $("#nav-list-2 .nav-close-button").on("click", function () {
        $("#nav-list-2 .nav-links").hide("fold");
    })
});