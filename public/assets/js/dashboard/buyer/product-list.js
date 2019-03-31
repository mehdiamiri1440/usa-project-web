function scrull_css_header() {
    var get_with = $(window).width();
    var headerElement = $(".sub-header");
    var sidebarElement = $(".right-sidebar");
    if (get_with > 751) {
        headerElement.removeClass("sub-header-fix");
        sidebarElement.removeClass("sidebar-fix");
    }
    $(window).resize(function () {
        get_with = $(window).width();
        if (get_with > 751) {
            headerElement.removeClass("sub-header-fix");
            sidebarElement.removeClass("sidebar-fix");
        }
    });
    $(window).scroll(function () {
        var sc = $(this).scrollTop();
        $(window).resize(function () {
            get_with = $(window).width();
            if (get_with > 751) {
                headerElement.removeClass("sub-header-fix");
                sidebarElement.removeClass("sidebar-fix");
            }
        });
        if (sc >= 202) {
            if (get_with > 751) {
                headerElement.addClass("sub-header-fix");
                sidebarElement.addClass("sidebar-fix");

            } else {
                headerElement.removeClass("sub-header-fix");
                sidebarElement.removeClass("sidebar-fix");
            }
        } else {
            headerElement.removeClass("sub-header-fix");
            sidebarElement.removeClass("sidebar-fix");
        }
    })
}

function formBut(link) {
    $index = ($(link).parents('article').index() + 1);
    $element = $('article:nth-of-type(' + $index + ') .buy_details');
    $element.slideToggle("125", "swing");
    $('.buy_details').not($element).slideUp();
}

function subBut(link) {
    var index = ($(link).parents('article').index() + 1);
    var productId = $('article:nth-of-type(' + index + ') .buy_details input#product-id');
    var requirementAmount = $('article:nth-of-type(' + index + ') .buy_details input#requirement-amount');
    var packType = $('article:nth-of-type(' + index + ') .buy_details input#pack-type');
    var description = $('article:nth-of-type(' + index + ') .buy_details textarea#description');
}

$(document).ready(function () {
    scrull_css_header();

});
