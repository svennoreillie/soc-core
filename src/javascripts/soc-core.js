import $ from 'jquery';

$(document).ready(function () {
    //Loading navigation content 
    $("#navbarContent").load("elements/navigation.html", navbarCompleted);
    $("#maincontent").load("elements/maincontent.html");
    $(".soc-search-button").click(function (event) {
        event.preventDefault();
        $(".soc-search-form").toggle("fast");
    });

    function navbarCompleted() {
        //Set actions on sidebar toggler
        $("#soc-sidebar-toggler").click(function (e) {
            e.preventDefault();
            $(".soc-page").toggleClass("closed");
            $("#soc-sidebar-toggler i").toggleClass("hide");
        });
    }

});