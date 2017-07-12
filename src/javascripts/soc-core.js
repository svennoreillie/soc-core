import $ from 'jquery';

$(document).ready(function () {
    //Loading navigation content 
    $("#navbarContent").load("elements/navigation.html", navbarCompleted);
    $("#sidebarContent").load("elements/sidebar.html");
    $("#typographyContent").load("elements/typography.html");
    $("#gridContent").load("elements/grid.html");
    $("#bootstrapComponentContent").load("elements/components_bootstrap.html");


    $(".soc-search-button").click(function (event) {
        event.preventDefault();
        $(".soc-search-form").toggle("fast");
    });


    $(window).on('hashchange', setActiveLinks);


    function setActiveLinks() {
        //remove all actives
        $(".navbar a").parent("li").removeClass("active");

        var hash = window.location.hash;
        $("[href='" + hash + "']").parent("li").addClass("active");
    }

    function navbarCompleted() {
        //Set actions on sidebar toggler
        $("#soc-sidebar-toggler").click(function (e) {
            e.preventDefault();
            $(".soc-page").toggleClass("closed");
            $("#soc-sidebar-toggler i").toggleClass("hide");
        });
    }

    init();

    function init() {
        setActiveLinks();
    }

});