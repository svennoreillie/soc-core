require('./../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js');

$(function() {    
    $("#soc-sidebar-toggler").click(function (e) {
        e.preventDefault();
        $(".soc-page").toggleClass("closed");
        $("#soc-sidebar-toggler i").toggleClass("hide");
    });
});