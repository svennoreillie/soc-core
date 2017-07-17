import $ from 'jquery';

$(document).ready(function () {


    //Set actions on sidebar toggler
    $("#soc-sidebar-toggler").click(function (e) {
        e.preventDefault();
        $(".soc-page").toggleClass("closed");
        $("#soc-sidebar-toggler i").toggleClass("hide");
    });

});