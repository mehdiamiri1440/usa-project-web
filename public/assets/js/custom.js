var visible = false;

function dropdown() {
    $(".profile-list").fadeIn("slow", function () {
        visible = true;
    });
}

function dropdownList() {
    $(".icon-header-list").fadeIn("slow", function () {
        visible = true;
    });
}


$(document).click(function () {
    if (visible) {
        $('.profile-list').fadeOut("slow");
        $('.icon-header-list').fadeOut("slow");
        visible = false;
    }
});
