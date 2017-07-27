import bootstrap from 'bootstrap-sass';
import $ from 'jquery';
import toastr from 'toastr';

$(document).ready(function () {

    function init() {
        resizeHeader();

        let elements = $(".soc-main .fixed");
        if (elements.length > 0) {
            //fixed header might exist
            $('soc-main').bind("DOMSubtreeModified", function () {
                resizeHeader();
            });
        }
    }

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

    $(window).resize(resizeHeader);


    function resizeHeader() {
        let items = $(".soc-main .fixed")
        let height = 0;
        $.each(items, function (i, element) {
            height += $(this).height();
        })
        if (height != 0) {
            $(".soc-main-content").css('margin-top', height + 'px');
        }
    }


    init();

});