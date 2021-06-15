import swal from "../../sweetalert.min.js";
import router from "../../router/router.js"
import axios from 'axios'




// eventBus.$on("productId", ($event) => {
//   this.productId = $event;
// });

// eventBus.$on("buyAdId", ($event) => {
//   this.buyAdId = $event;
// });

// eventBus.$on("joinGroupId", ($event) => {
//   this.joinGroupId = $event;
// });
// eventBus.$on("joinGroupMessage", ($event) => {
//   this.joinGroupMessage = $event;
// });

// eventBus.$on("activeContactId", ($event) => {
//   this.activeContactId = $event;
// });

// eventBus.$on("reoprtModal", ($event) => {
//   this.reportedUserId = $event;
//   $("#report-modal").modal("show");
// });

// eventBus.$on("shareModalUrl", ($event) => {
//   this.shareModalUrl = $event;
//   $("#share-modal").modal("show");
// });

// eventBus.$on("reviewUserData", ($event) => {
//   this.reviewUserData = $event;
//   this.reviewUserPrfileId = $event.id;
//   $("#review-modal").modal("show");
// });

// eventBus.$on("modal", ($event) => {
//   this.openRelatedSwalModal($event);
// });


// const openRelatedSwalModal = (modalName) => {
//     switch (modalName) {
//         case "sendMsg":
//             this.raiseSendMessageModal();
//             break;
//         case "elevator":
//             this.raiseElevatorModal();
//             break;
//         case "deleteProduct":
//             this.raiseDeleteProductModal();
//             break;
//         case "deleteBuyAdModal":
//             this.raiseDeleteBuyAdModal();
//             break;
//         case "productEditDone":
//             this.raiseProductEditSuccessModal();
//             break;
//         case "userRegisterSuccess":
//             this.raiseUserRegisterSuccessModal();
//             break;
//         case "registerProductLimit":
//             this.raiseRegisterProductLimitModal();
//             break;
//         case "buyAdReplyLimit":
//             this.raiseBuyAdReplyLimitModal();
//             break;
//         case "profileEditSuccess":
//             this.raiseProfileEditSuccessModal();
//             break;
//         case "passwordResetSuccess":
//             this.raisePasswordResetSuccessModal();
//             break;
//         case "guide":
//             this.raiseGuideModal();
//             break;
//         case "deleteUserComment":
//             this.raiseDeleteUserCommentModal();
//             break;
//         case "verificationInfoUploadDone":
//             this.raiseVerificationUploadSuccessModal();
//             break;
//         case "goldenBuyAdReplyLimit":
//             this.raiseGoldenBuyAdReplyLimitModal();
//             break;
//     }
// }

function handleBackBtn() {

    if (window.history.state) {
        history.pushState(null, null, window.location);
    }

    $(window).on("popstate", function (e) {
        if (isModalOpen()) {
            swal.close();
            window.localStorage.removeItem("contact"); // it's been set before modal openning
            window.localStorage.removeItem("msgToSend");
            window.localStorage.removeItem("pathname");
            // window.location.href = window.location.pathname;
        }
    });
}
function registerComponentStatistics(
    categoryName,
    actionName,
    labelName
) {
    gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
    });
}

function isModalOpen() {
    return swal.getState().isOpen;
}

const raiseSendMessageModal = () => {


    handleBackBtn();

    swal({
        title: "ارتباط با مخاطب",
        text: "برای ارتباط با هزاران خریدار و فروشنده در باسکول ابتدا ثبت نام کنید.",
        className: "custom-swal-with-cancel",
        buttons: {
            success: {
                text: "ورود سریع / ثبت نام",
                value: "register",
            },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "register":
                router.push({ name: "register" });
                break;
            default:
                window.localStorage.removeItem("contact");
                window.localStorage.removeItem("pathname");
                break;
        }
    });
}
const raiseElevatorModal = (state) => {

    handleBackBtn();

    let price = document.createElement("div");
    price.innerHTML =
        '<h1 class="green-text" dir="rtl"><span>25,000</span> تومان </h1><br/><p class="swal-text">' +
        state.elevatorText +
        "</p>";

    swal({
        title: "اعمال نردبان",
        content: price,
        className: "custom-swal-with-cancel",
        buttons: {
            success: {
                text: "پرداخت از طریق درگاه",
                value: "pay",
            },
            // wallet: {
            //   text: "پرداخت از کیف پول",
            //   value: "wallet",
            //   className: "bg-blue",
            // },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "pay":
                window.location.href = "/payment/elevator/" + state.productId;
                break;
            case "wallet":
                axios
                    .post("/wallet-expend/elevator", {
                        product_id: state.productId,
                    })
                    .then((response) => {
                        swal({
                            title: "نردبان اعمال شد",
                            text: "اعمال نردبان با موفقیت انجام شد.",
                            icon: "success",
                            className: "custom-swal-with-cancel",
                            buttons: {
                                close: {
                                    text: "بستن",
                                    value: "close",
                                    className: "bg-cancel",
                                },
                            },
                        }).then((value) => {
                            if (value == "close") {
                                window.location.reload();
                            }
                        });
                    })
                    .catch((err) => {
                        swal({
                            title: "خطا",
                            text: err.response.data.msg,
                            icon: "error",
                            className: "custom-swal-with-cancel",
                            buttons: {
                                wallet: {
                                    text: "افزایش موجودی",
                                    value: "wallet",
                                    className: "bg-blue",
                                },
                                close: {
                                    text: "بستن",
                                    value: "close",
                                    className: "bg-cancel",
                                },
                            },
                        });
                    });
                break;
        }
    });
}

const raiseDeleteProductModal = (productId) => {

    handleBackBtn();

    swal({
        title: "حذف محصول",
        text: "آیا میخواهید این محصول را حذف کنید؟",
        // content: closeIconBtn,
        className: "custom-swal-with-cancel",
        buttons: {
            delete: {
                text: "حذف کن",
                value: "delete",
                className: "bg-red",
            },
            reject: {
                text: "انصراف",
            },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "delete":
                axios
                    .post("/delete_product_by_id", {
                        product_id: productId,
                    })
                    .then(function (response) {
                        swal({
                            title: "حذف شد",
                            text: "محصول شما از لیست محصولات باسکول حذف شد.",
                            icon: "success",
                            className: "custom-swal-with-cancel",
                            buttons: {
                                close: {
                                    text: "بستن",
                                    value: "close",
                                    className: "bg-cancel",
                                },
                            },
                        }).then((value) => {
                            if (value == "close") {
                                window.location.reload();
                            }
                        });

                        registerComponentStatistics(
                            "product",
                            "product-deleted",
                            "product-deleted-successfully"
                        );
                    })
                    .catch(function (err) {
                        console.log(err);
                        registerComponentStatistics(
                            "product",
                            "product-delete-failed",
                            "product-delete-failed"
                        );
                        //show modal
                        swal({
                            title: "خطا",
                            text: "خطایی رخ داده است. دوباره تلاش کنید.",
                            icon: "error",
                            className: "custom-swal-with-cancel",
                            buttons: {
                                close: {
                                    text: "بستن",
                                    value: "close",
                                    className: "bg-cancel",
                                },
                            },
                        });
                    });

                break;
        }
    });
}

const raiseDeleteBuyAdModal = (buyAdId) => {

    handleBackBtn();

    swal({
        title: "حذف درخواست",
        text: "آیا میخواهید این درخواست را حذف کنید؟",
        // content: closeIconBtn,
        className: "custom-swal-with-cancel",
        buttons: {
            delete: {
                text: "حذف کن",
                value: "delete",
                className: "bg-red",
            },
            reject: {
                text: "انصراف",
            },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "delete":
                axios
                    .post("/delete_buy_ad_by_id", {
                        buy_ad_id: buyAdId,
                    })
                    .then(function (response) {
                        swal({
                            title: "حذف شد",
                            text: "درخواست خرید شما با موفقیت حذف شد.",
                            icon: "success",
                            className: "custom-swal-with-cancel",
                            buttons: {
                                close: {
                                    text: "بستن",
                                    value: "close",
                                    className: "bg-cancel",
                                },
                            },
                        }).then((value) => {
                            if (value == "close") {
                                window.location.reload();
                            }
                        });

                        registerComponentStatistics(
                            "buyAds",
                            "buyAds-deleted",
                            "buyAds-deleted-successfully"
                        );
                    })
                    .catch(function (err) {
                        console.log(err);
                        registerComponentStatistics(
                            "buyAds",
                            "buyAds-delete-failed",
                            "buyAds-delete-failed"
                        );
                        //show modal
                        swal({
                            title: "خطا",
                            text: "خطایی رخ داده است. دوباره تلاش کنید.",
                            icon: "error",
                            className: "custom-swal-with-cancel",
                            buttons: {
                                close: {
                                    text: "بستن",
                                    value: "close",
                                    className: "bg-cancel",
                                },
                            },
                        });
                    });

                break;
        }
    });
}

const raiseProductEditSuccessModal = () => {
    handleBackBtn();
    swal({
        title: "ویرایش محصول",
        text: "ویرایش محصول شما با موفقیت انجام شد.",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    });
}

const raiseUserRegisterSuccessModal = () => {
    handleBackBtn();
    swal({
        title: "ثبت نام موفق",
        text: "به باسکول خوش آمدید. لطفا کمی صبر کنید...",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    });
}

const raiseRegisterProductLimitModal = (state) => {
    handleBackBtn();

    let content = document.createElement("div");
    content.innerHTML =
        '<p dir="rtl" class="swal-guide">سقف تعداد محصولات ثبت شده شما پر شده است.</p><br/><p class="red-text swal-guide" dir="rtl"><b>برای ثبت محصولات جدید، لطفا دکمه افزایش ظرفیت را بزنید.</b></p>';
    swal({
        title: "محدودیت ثبت محصول جدید",
        content: content,
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
            success: {
                text: "افزایش ظرفیت",
                value: "promote",
                // className: "button-new-badge",
            },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "promote":
                router.push({ name: "dashboardProductPricing" });
                break;
        }
    });
}

const raiseBuyAdReplyLimitModal = () => {
    handleBackBtn();

    let content = document.createElement("div");
    content.innerHTML =
        '<p class="swal-guide" dir="rtl">ظرفیت روزانه پاسخ به درخواست های خرید شما پر شده است.</p><br/><p class="red-text swal-guide" dir="rtl"><b>برای افزایش ظرفیت، لطفا دکمه افزایش ظرفیت را بزنید.</b></p>';
    swal({
        title: "محدودیت پاسخ به درخواست ها",
        content: content,
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
            success: {
                text: "افزایش ظرفیت",
                value: "promote",
                // className: "button-new-badge",
            },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "promote":
                router.push({ name: "dashboardBuyAdPricing" });
                break;
        }
    });
}

const raiseProfileEditSuccessModal = () => {
    handleBackBtn();
    swal({
        title: "ویرایش پروفایل",
        text: "ویرایش پروفایل شما با موفقیت انجام شد.پس از تایید کارشناسان پروفایل شما برای همه قابل نمایش خواهد بود.",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    });
}

const raisePasswordResetSuccessModal = () => {
    handleBackBtn();
    swal({
        title: "بازیابی کلمه عبور",
        text: "کلمه عبور جدید به تلفن همراهتان ارسال شد.",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    });
}

const raiseGuideModal = () => {

    handleBackBtn();

    swal({
        title: "راهنما",
        text: "خریدار عمده هستید یا فروشنده عمده؟",
        className: "custom-swal-with-cancel",
        // icon: "success",
        buttons: {
            buyer: {
                text: "خریدارم",
                value: "buyer",
            },
            seller: {
                text: "فروشنده ام",
                value: "seller",
            },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "buyer":
                router.push({ name: "mainRegisterRequest" });
                break;
            case "seller":
                router.push({ name: "register" });
                break;
        }
    });
}

const raiseDeleteUserCommentModal = () => {
    handleBackBtn();

    swal({
        title: "حذف نظر",
        text: "تعداد نظرات حذف شده توسط شما به کاربران نمایش داده خواهد شد. آیا می خواهید این نظر را حذف کنید؟",
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
            delete: {
                text: "حذف کن",
                value: "delete",
                className: "bg-red",
            },
            reject: {
                text: "انصراف",
            },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "delete":
                router.push({ name: "mainRegisterRequest" });
                break;
        }
    });
}

const raiseVerificationUploadSuccessModal = () => {
    handleBackBtn();
    swal({
        title: "احراز هویت",
        text: "اطلاعات شما با موفقیت ارسال شد. در صورت تایید کارشناسان باسکول نشان احراز هویت به حساب کاربری شما داده می شود.",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    });
}

const raiseGoldenBuyAdReplyLimitModal = () => {

    handleBackBtn();

    let content = document.createElement("div");
    content.innerHTML =
        '<p><span class="swal-star-badge"><i class="fa fa-star"></i></span></p><br/><p class="swal-guide" dir="rtl">شما به درخواست هایی طلایی دسترسی ندارید.</p><br/><p class="red-text swal-guide" dir="rtl"><b>برای دسترسی به تمام درخواست های طلایی، عضویت خود را ارتقا دهید.</b></p>';
    swal({
        title: "درخواست های طلایی",
        content: content,
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
            success: {
                text: "ارتقا عضویت",
                value: "promote",
            },
            close: {
                text: "بستن",
                className: "bg-cancel",
            },
        },
    }).then((value) => {
        switch (value) {
            case "promote":
                router.push({ name: "dashboardPricingTableSeller" });
                break;
        }
    });
}



export default {
    raiseSendMessageModal,
    raiseElevatorModal,
    raiseDeleteProductModal,
    raiseDeleteBuyAdModal,
    raiseProductEditSuccessModal,
    raiseUserRegisterSuccessModal,
    raiseRegisterProductLimitModal,
    raiseBuyAdReplyLimitModal,
    raiseProfileEditSuccessModal,
    raisePasswordResetSuccessModal,
    raiseGuideModal,
    raiseDeleteUserCommentModal,
    raiseVerificationUploadSuccessModal,
    raiseGoldenBuyAdReplyLimitModal,
}
