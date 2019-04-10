function dropdown() {
    $(".profile-list").toggle("fade");
}
function toggleHeader() {
    var menuCloseButton= $(".close_menu");
    var menuCloseButtonIcon = $(".close_menu i");
    var profile = $(".profile");
    var headerMenu= $(".header-menu span");
    var headerMenuLink = $(".header-menu a");
    var logo = $(".logo");
    var copyRight = $(".copy-right");
    var rightHeaderDesktop = $(".right-header.desktop-header");
    var littleMainHeader = $(".main-header");
    var main = $("#main");
    var nextMove = "shrink";
    menuCloseButton.click(function () {
        if (nextMove == "expand") {
            $(this).css({
                width: "30%"
            });
            menuCloseButtonIcon.switchClass("fa-angle-left", " fa-angle-right", 200);
            profile.fadeIn();
            copyRight.css('display', 'block');
            logo.fadeIn();
            headerMenu.css('display', 'inline');
            headerMenuLink.css({
                "text-align": "right"
            });
            rightHeaderDesktop.removeClass("little_header", 200);
            littleMainHeader.removeClass("little-main-header", 200);
            main.removeClass("little-main", 200);
            nextMove = "shrink";
        } else {
            $(this).css({
                width: "100%"
            });
            menuCloseButtonIcon.switchClass("fa-angle-right", " fa-angle-left", 200);
            profile.css('display', 'none');
            headerMenu.css('display', 'none');
            copyRight.css('display', 'none');
            logo.css('display', 'none');
            headerMenuLink.css({
                "text-align": "center"
            });
            rightHeaderDesktop.addClass("little_header", 200);
            littleMainHeader.addClass("little-main-header", 200);
            main.addClass("little-main", 200);
            nextMove = "expand";
        }
    });
}
function toggleShowHeader() {
    var showHeaderButtonElement = $('.show-header button');
    var closeHeaderButtonMobile = $('.close_menu_mob');
    var flag = true;
    var rightHeader = $(".right-header.mobile-header");
    var back = $(".background_mob_sec");
    showHeaderButtonElement.on('click', function () {
        if (flag == true) {
            rightHeader.animate({
                right: '0'
            }, 300);
            back.fadeIn();

            flag = false;
        } else {
            rightHeader.animate({
                right: '-300px'
            }, 300);

            flag = true;
        }
    });
    closeHeaderButtonMobile.on('click', function () {
        if (flag == true) {
            rightHeader.animate({
                right: '0'
            }, 300);
            flag = false;
        } else {
            rightHeader.animate({
                right: '-300px'

            }, 300);
            back.fadeOut();
            flag = true;
        }
    })
}

$(document).ready(function () {
    toggleHeader();
    toggleShowHeader();
    $('input[type="file"]').imageuploadify();

});
