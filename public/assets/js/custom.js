var viz = false;

function dropdown() {
    $(".profile-list").fadeIn("slow", function () {
        viz = true;
    });
}

function dropdownList() {
    $(".icon-header-list").fadeIn("slow", function () {
        viz = true;
    });
}


$(document).click(function () {
    if (viz) {
        $('.profile-list').fadeOut("slow");
        $('.icon-header-list').fadeOut("slow");
        viz = false;
    }
});
$(document).ready(function () {

});