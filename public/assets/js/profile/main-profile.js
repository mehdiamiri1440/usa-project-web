
function dropdown() {
    $(".profile-list").toggle("fade");
}
$(document).ready(function () {
    var slider_el = $(".owl-carousel");
    slider_el.owlCarousel({
        loop:false,
        margin:10
    });
    slider_el.magnificPopup({
        delegate: 'a',
        type: 'image'
    });

});
