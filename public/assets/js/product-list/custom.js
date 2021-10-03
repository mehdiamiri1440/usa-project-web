// function scrull_css_header() {
//     var get_with = $(window).width();
//     var mainElement = $("#main");

//     if (get_with > 751) {
//         mainElement.removeClass("main-padding-fix");
//     }
//     $(window).resize(function () {
//         get_with = $(window).width();
//         if (get_with > 751) {
//             mainElement.removeClass("main-padding-fix");
//         }
//     });
//     $(window).scroll(function () {
//         var sc = $(this).scrollTop();
//         $(window).resize(function () {
//             get_with = $(window).width();
//             if (get_with > 751) {
//                 mainElement.removeClass("main-padding-fix");
//             }
//         });
//         if (sc >= 106) {
//             if (get_with > 751) {
//                 mainElement.addClass("main-padding-fix");
//             } else {
//                 mainElement.removeClass("main-padding-fix");
//             }
//         } else {
//             mainElement.removeClass("main-padding-fix");
//         }
//     });
// }


// function collapseMethod() {

//     // let parentselemets = $('.category-products-widget > ul > li');
//     // for (let i = 1; i <= parentselemets.length; i++) {
//     //     let id = i;
//     //     let wrapperlistElemetn = $("aside .collapse-category-" + id);
//     //     let listElemetn = $(
//     //         "aside .collapse-category-" + id + " .sub-category-product"
//     //     );
//     //     let buttonElemetn = $("aside .collapse-category-" + id + " button span");
//     //     let subCategoryLength = $(".collapse-category-" + id + " > ul > li").length;
//     //     var initialHeight = subCategoryLength * 47;
//     //     if (checkListHeight(id, subCategoryLength) !== true) {
//     //         if (listElemetn.hasClass("little")) {
//     //             listElemetn.css("height", initialHeight + "px");
//     //             listElemetn.removeClass("little", 500);
//     //         } else {
//     //             listElemetn.css("height", "145px");
//     //             listElemetn.addClass("little", 500);
//     //         }
//     //         wrapperlistElemetn.toggleClass("list-open", 500);
//     //         buttonElemetn.text(function (i, v) {
//     //             return v === "بستن" ? "مشاهده بیشتر" : "بستن";
//     //         });

//     //         var wrapperlistElemetnMobile = $(
//     //             " #searchFilter .collapse-category-" + id
//     //         );
//     //         var listElemetnMobile = $(
//     //             "#searchFilter .collapse-category-" + id + " .sub-category-product"
//     //         );
//     //         var buttonElemetnMobile = $(
//     //             "#searchFilter .collapse-category-" + id + " button span"
//     //         );

//     //         if (listElemetnMobile.hasClass("little")) {
//     //             listElemetnMobile.css("height", initialHeight + "px");
//     //             listElemetnMobile.removeClass("little", 500);
//     //         } else {
//     //             listElemetnMobile.css("height", "145px");
//     //             listElemetnMobile.addClass("little", 500);
//     //         }
//     //         wrapperlistElemetnMobile.toggleClass("list-open", 500);
//     //         buttonElemetnMobile.text(function (i, v) {
//     //             return v === "بستن" ? "مشاهده بیشتر" : "بستن";
//     //         });
//     //     }

//     // }


//     setTimeout(() => {
//         sidebarScroll();
//     }, 300)
// }

// function checkListHeight(id, listItems) {
//     var buttonFilter = $(
//         " aside .collapse-category-" + id + " .green-button.button-toggle"
//     );

//     var mobileButton = $(
//         " #searchFilter .collapse-category-" +
//         id +
//         " .green-button.button-toggle"
//     );

//     if (listItems < 3) {
//         buttonFilter.css("display", "none");
//         mobileButton.css("display", "none");

//         return true;
//     } else {
//         return false;
//     }
// }


// function checkListHeightUpdate() {
//     var elements = $(" .category-products-widget > ul > li");
//     var elementClass = "";
//     var elementLenght = null;
//     var buttonFilter = "";

//     for (var i = 0; i < elements.length; i++) {
//         elementClass = $(elements[i]).attr("class");
//         elementLenght = $("." + elementClass + " .sub-category-item").length;
//         buttonFilter = $(" ." + elementClass + " .green-button.button-toggle");

//         if (elementLenght < 3) {
//             buttonFilter.css("display", "none");
//         }
//     }
// }

// function sidebarScroll() {
//     let sidebarHeight = $("#sidebar").outerHeight();
//     $("#main .main-content").css("min-height", sidebarHeight);
//     $("#sidebar").StickySidebar({
//         additionalMarginTop: 120,
//     });
// }



$(document).ready(() => {
    // collapseMethod();
    // scrull_css_header();
    // sidebarScroll();
})