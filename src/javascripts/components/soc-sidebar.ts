import $ = require("jquery");

class SideBar {
    constructor() {
        $(document).ready(
            () => {
                this.sideToggler();
            }); 
    }

    private sideToggler() {
        $("#soc-sidebar-toggler").click(function (e) {
            e.preventDefault();
            $(".soc-page").toggleClass("closed");
            $("#soc-sidebar-toggler i").toggleClass("hide");
        });
    }
}

export = SideBar;