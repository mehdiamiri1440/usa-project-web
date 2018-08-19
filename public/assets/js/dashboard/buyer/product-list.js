function scrull_css_header() {
    var get_with = $(window).width();
    var header_el = $(".sub-header");
    var sidebar_el = $(".right-sidebar");
    if (get_with > 751) {
        header_el.removeClass("sub-header-fix");
        sidebar_el.removeClass("sidebar-fix");
    }
    $(window).resize(function () {
        get_with = $(window).width();
        if (get_with > 751) {
            header_el.removeClass("sub-header-fix");
            sidebar_el.removeClass("sidebar-fix");
        }
    });
    $(window).scroll(function () {
        var sc = $(this).scrollTop();
        $(window).resize(function () {
            get_with = $(window).width();
            if (get_with > 751) {
                header_el.removeClass("sub-header-fix");
                sidebar_el.removeClass("sidebar-fix");
            }
        });
        if (sc >= 202) {
            if (get_with > 751) {
                header_el.addClass("sub-header-fix");
                sidebar_el.addClass("sidebar-fix");

            } else {
                header_el.removeClass("sub-header-fix");
                sidebar_el.removeClass("sidebar-fix");
            }
        } else {
            header_el.removeClass("sub-header-fix");
            sidebar_el.removeClass("sidebar-fix");
        }
    })
}
function dropdown() {
    $(".profile-list").toggle("fade");
}
$(document).ready(function () {
    scrull_css_header();
   
});