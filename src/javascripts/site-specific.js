import $ from 'jquery';

$(document).ready(function () {

    function init() {
        setActiveLinks();
        navbarCompleted();
        sidebarCompleted();
    }

    //Loading navigation content 
    $("#navbarContent").load("elements/navigation.html", navbarCompleted);
    $("#sidebarContent").load("elements/sidebar.html", sidebarCompleted);
    $("#socComponentContent").load("elements/components_soc.html");
    $("#typographyContent").load("elements/typography.html");
    $("#gridContent").load("elements/grid.html");

    $("#bootstrapComponentContent").load("elements/components_bootstrap.html");

    //Url changes
    $(window).on('hashchange', setActiveLinks);


    //Privates
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

    function sidebarCompleted() {
        $(".searchContent1").load("elements/searchresult.html");
        $(".searchContent2").load("elements/searchresult2.html");
        $(".searchContent3").load("elements/searchresult3.html");

        $(".soc-search-button").click(function (event) {
            event.preventDefault();
            $(".soc-search-form").toggle("fast");
        });
    }

    init();

});