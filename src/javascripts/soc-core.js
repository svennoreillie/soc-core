import bootstrap from 'bootstrap-sass';
import $ from 'jquery';
import toastr from 'toastr';

$(document).ready(function () {


    //Set actions on sidebar toggler
    $("#soc-sidebar-toggler").click(function (e) {
        e.preventDefault();
        $(".soc-page").toggleClass("closed");
        $("#soc-sidebar-toggler i").toggleClass("hide");
    });

    $(".soc-collapser").click(function (event) {
        event.preventDefault();
        var panel = $(this)
            .parents(".soc-panel")
            .first();
        panel.toggleClass("collapsed");

    });

    $(".soc-loader-block").click(function (event) {
        event.preventDefault();
    });

    function resizeHeader() {
        $(".fixed").height($(".fixed>.soc-header").height());
    }

    resizeHeader();
    $(window).resize(resizeHeader);

});