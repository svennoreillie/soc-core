import $ from 'jquery';
import toastr from 'toastr';

$(document).ready(function () {

    function init() {
        setActiveLinks();
        navbarCompleted();
        sidebarCompleted();
        socCompleted();
    }

    //Loading navigation content 
    $("#navbarContent").load("elements/navigation.html", navbarCompleted);
    $("#sidebarContent").load("elements/sidebar.html", sidebarCompleted);


    $("#socforms").load("elements/components_forms.html");
    $("#socformelements").load("elements/components_formelements.html");
    $("#soctabs").load("elements/components_tabs.html");

    $("#socComponentContent").load("elements/components_soc.html", socCompleted);
    $("#typographyContent").load("elements/typography.html");
    $("#gridContent").load("elements/grid.html");
    $("#documentationInfo").load("elements/documentation_generalinfo.html");
    $("#socforms").load("elements/components_forms.html");
    $("#socformelements").load("elements/components_formelements.html");
    


    $("#bootstrapComponentContent").load("elements/components_bootstrap.html", bootstrapCompleted);

    //Url changes
    $(window).on('hashchange', setActiveLinks);

    //Privates
    function bootstrapCompleted() {
        $("#toastBtn_info").click(function (e) {
            toastr.info('Toasts are so much more than regular bread!')
        });
        $("#toastBtn_warning").click(function (e) {
            toastr.warning('Where is that toast?')
        });
        $("#toastBtn_error").click(function (e) {
            toastr.error('Toast is officially lost now')
        });
        $("#toastBtn_success").click(function (e) {
            toastr.success('Congrats! Have some toast')
        });
    }

    function setActiveLinks() {
        //remove all actives
        $(".navbar a").parent("li").removeClass("active");

        var hash = window.location.hash;
        $("[href='" + hash + "']").parent("li").addClass("active");
    }

    function socCompleted() {
        $("#showLoaderBtn").click(function (e) {
            $(".soc-page").addClass("is-loading");

            setTimeout(function () {
                $(".soc-page").removeClass("is-loading");
            }, 5000);
        });

        $(".soc-collapser").click(function (event) {
            event.preventDefault();
            var panel = $(this).parents(".soc-panel").first();
            panel.toggleClass("collapsed");
        });
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