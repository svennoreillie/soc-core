import $ = require("jquery")

export default class SideBar {
    constructor(private doc: HTMLDocument) {
        doc.onload = this.sideToggler;
    }

    private sideToggler() {
        $("#soc-sidebar-toggler").click(function (e) {
            e.preventDefault();
            $(".soc-page").toggleClass("closed");
            $("#soc-sidebar-toggler i").toggleClass("hide");
        });
    }
}