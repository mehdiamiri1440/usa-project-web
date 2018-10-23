
var viz = false;
function dropdown() {
    $(".profile-list").fadeIn("slow", function(){
        viz = true;
    });
}

function toggle_header() {
    var menu_but = $(".clouse_menu");
    var profile = $(".profile");
    var header_menu = $(".header-menu span");
    var header_menu_a = $(".header-menu a");
    var logo = $(".logo");
    var copy_right = $(".copy-right");
    var right_header_desk = $(".right-header.desktop-header");
    var little_main_header = $(".main-header");
    var main = $("#main");
    var next_move = "shrink";
     var menu_but_icon = $(".clouse_menu i");
    menu_but.click(function () {
        menu_but_icon.toggleClass("fa-angle-left  fa-angle-right",200);
        if (next_move == "expand") {
            $(this).css({
                width : "30%"
            });
            profile.fadeIn();
            copy_right.css('display','block');
            logo.fadeIn();
            header_menu.css('display','inline');
            header_menu_a.css({
                "text-align" : "right"
            });
            right_header_desk.removeClass("little_header",200);
            little_main_header.removeClass("little-main-header",200);
            main.removeClass("little-main",200);
            next_move = "shrink";
        } else {
            $(this).css({
                width : "100%"
            });
            profile.css('display','none');
            header_menu.css('display','none');
            copy_right.css('display','none');
            logo.css('display','none');
            header_menu_a.css({
                "text-align" : "center"
            });
            right_header_desk.addClass("little_header",200);
            little_main_header.addClass("little-main-header",200);
            main.addClass("little-main",200);
            next_move = "expand";
        }
    });
}
function toggle_show_header() {
    var el = $('.show-header button');
    var el_clouse = $('.clouse_menu_mob');
    var flag = true;
    var right_header = $(".right-header.mobile-header");
    var back = $(".background_mob_sec");
    el.on('click', function () {
        if (flag == true){
            console.log('flag = true');
            right_header.animate({
                right:'0'
            },300);
            back.fadeIn();

            flag = false;
        }else{
            right_header.animate({
                right:'-300px'
            },300);

            flag = true;
        }
    });
    el_clouse.on('click', function () {
        if (flag == true){
            right_header.animate({
                right:'0'
            },300);
            flag = false;
        }else{
            right_header.animate({
                right:'-300px'

            },300);
            back.fadeOut();
            flag = true;
        }
    });
    $(".background_mob_sec").on('click', function () {
        console.log('back');
            right_header.animate({
            right:'-300px'

        },300);
        back.fadeOut();
        flag = true;
    })

}
$(document).click(function() {
    if (viz) {
        $('.profile-list').fadeOut("slow");
        viz = false;
    }
});
$(document).ready(function () {
    toggle_header();
    toggle_show_header();
});