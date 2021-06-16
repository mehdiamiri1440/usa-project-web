(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_components_layouts_main_help_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router_components_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../router/components/route */ "./resources/assets/js/router/components/route.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Route: _router_components_route__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: ["assets", "isUserLogin", "userType"],
  methods: {
    stopLoader: function stopLoader() {
      this.$store.state.routeStore.isLoading = false;
    }
  },
  mounted: function mounted() {
    var _this = this;

    var self = this;

    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        self.$nextTick(_this.stopLoader());
      }
    };
  },
  updated: function updated() {
    this.$nextTick(this.stopLoader());
  },
  metaInfo: function metaInfo() {
    return {
      title: " باسکول چگونه کار می کند؟ ",
      titleTemplate: "باسکول | %s",
      meta: [{
        name: "description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
      }, {
        name: "author",
        content: "باسکول"
      }, {
        property: "og:description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
      }, {
        property: "og:site_name",
        content: "باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران"
      }, {
        property: "og:title",
        content: " باسکول | بازار خرید و فروش عمده محصولات کشاورزی "
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=template&id=21cd6c4a&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=template&id=21cd6c4a&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-21cd6c4a");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-21cd6c4a");

var _hoisted_1 = {
  "class": "main-content-index-pages"
};
var _hoisted_2 = {
  "class": "parallax-section policy"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "overlay"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "container"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-right"
}, "باسکول چگونه کار می کند؟", -1
/* HOISTED */
);

var _hoisted_6 = {
  id: "accordion",
  role: "tablist",
  "aria-multiselectable": "true",
  "class": "panel-group"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "panel panel-default"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingFirst",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseFirst",
  "aria-expanded": "false",
  "aria-controls": "collapseFirst",
  "class": "collapsed"
}, " باسکول چیست؟ ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  id: "collapseFirst",
  role: "tabpanel",
  "aria-labelledby": "headingFirst",
  "class": "panel-collapse collapse"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "panel-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " باسکول بازار خرید و فروش عمده محصولات کشاورزی است که خریداران را به فروشندگان دست اول محصولات کشاورزی متصل کرده و خریدار و فروشنده بدون واسطه می توانند با یکدیگر ارتباط بر قرار کنند. ")])])], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "panel panel-default"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingTwo",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseTwo",
  "aria-expanded": "false",
  "aria-controls": "collapseTwo",
  "class": "collapsed"
}, " خدمات باسکول برای فروشندگان چیست؟ ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  id: "collapseTwo",
  role: "tabpanel",
  "aria-labelledby": "headingTwo",
  "class": "panel-collapse collapse"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "panel-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" اگر کشاورز، باغدار و تولید کننده محصولات کشاورزی هستید می توانید به عنوان فروشنده در بازار باسکول فعالیت کنید. پس از ثبت محصول خود و تکمیل پروفایل، به جدید ترین درخواست های خرید که توسط خریداران بر روی باسکول قرار گرفته است می توانید پاسخ دهید. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" از طریق باسکول با خریداران در سراسر کشور آشنا شده و محصولات خود را راحت تر و با قیمت مناسب تر به فروش برسانید. ")])])])], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "panel panel-default"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingThree",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseThree",
  "aria-expanded": "false",
  "aria-controls": "collapseThree",
  "class": "collapsed"
}, " خدمات باسکول برای خریداران چیست؟ ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  id: "collapseThree",
  role: "tabpanel",
  "aria-labelledby": "headingThree",
  "class": "panel-collapse collapse"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "panel-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" اگر صادر کننده، خریدار عمده و بنکدار هستید می توانید به عنوان خریدار در بازار باسکول فعالیت کنید. شما میتوانید از طریق لیست محصولات، کالای مورد نظر خود را جستجو کرده و از راه ارسال پیام همچنین استعلام قیمت با فروشندگان به صورت مستقیم و بدون واسطه ارتباط برقرار کنید. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" با ثبت درخواست خرید این درخواست برای تمامی فروشندگان کالای مورد نظر ارسال شده و شما می توانید بهترین قیمت را پیدا کنید. ")])])])], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "panel panel-default"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingFour",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseFour",
  "aria-expanded": "false",
  "aria-controls": "collapseFour",
  "class": "collapsed"
}, " چگونه در سامانه باسکول ثبت نام کنم؟ ")])], -1
/* HOISTED */
);

var _hoisted_12 = {
  id: "collapseFour",
  role: "tabpanel",
  "aria-labelledby": "headingFour",
  "class": "panel-collapse collapse"
};
var _hoisted_13 = {
  "class": "panel-body"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" جهت ثبت نام دکمه ورود به باسکول یا ");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ورود/ثبت نام");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" کلیک کنید ");

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" سپس در صفحه ورود روی دکمه ی ");

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ثبت نام در باسکول");

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" کلیک کنید. ");

var _hoisted_20 = {
  "class": "desktop-image"
};
var _hoisted_21 = {
  "class": "mobile-image"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در صفحه ی ثبت نام ابتدا شماره تلفن همراه خود را وارد کنید سپس دکمه ارسال کد تایید را بزنید. ", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "desktop-image"
};
var _hoisted_24 = {
  "class": "mobile-image"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " کد چهار رقمی ارسال شده به تلفن همراه خود را وارد کنید. ", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "desktop-image"
};
var _hoisted_27 = {
  "class": "mobile-image"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " مشخصات فردی خود را وارد کرده و روی دکمه \"مرحله بعد\" کلیک کنید ", -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "desktop-image"
};
var _hoisted_30 = {
  "class": "mobile-image"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " استان و شهر خود را انتخاب کرده و روی دکمه \"مرحله بعد\" کلیک کنید ", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "desktop-image"
};
var _hoisted_33 = {
  "class": "mobile-image"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " یک نام کاربری انگلیسی بدون فاصله برای خود انتخاب کرده و وارد کنید به عنوان مثال: amiri243 ", -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "desktop-image"
};
var _hoisted_36 = {
  "class": "mobile-image"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در مرحله ی پایانی نوع کاربری و حوزه فعالیت خود را وارد کرده و دکمه ی ثبت نهایی را کلیک کنید ", -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "desktop-image"
};
var _hoisted_39 = {
  "class": "mobile-image"
};
var _hoisted_40 = {
  "class": "panel panel-default"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingten",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseten",
  "aria-expanded": "false",
  "aria-controls": "collapseten",
  "class": "collapsed"
}, " چگونه پروفایل خود را کامل کنم؟ ")])], -1
/* HOISTED */
);

var _hoisted_42 = {
  id: "collapseten",
  role: "tabpanel",
  "aria-labelledby": "headingten",
  "class": "panel-collapse collapse"
};
var _hoisted_43 = {
  "class": "panel-body"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, " تکمیل پروفایل تجاری کسب و کار شما باعث معرفی شما به دیگر خریداران و فروشندگان شده و باعث ایجاد اعتماد در مشتریان و افزایش فروش شما خواهد شد. ", -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, " برای تکمیل پروفایل خود ابتدا از نوار داشبورد کنار صفحه گزینه ویرایش پروفایل را انتخاب کنید. ", -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" در قسمت اول می توانید نوع کسب و کار خود را مشخص نمایید. اگر در قالب شرکت فعالیت می کنید گزینه (حقوقی) و اگر در قالب شخصی فعالیت می کنید گزینه (حقیقی) را انتخاب کنید. در این قسمت یک تصویر برای پروفایل خود بارگذاری کنید. پس از تکمیل اطلاعات حتما بر روی گزینه ثبت تغییرات در پایین صفحه کلیک کنید. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br")], -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "desktop-image"
};
var _hoisted_48 = {
  "class": "mobile-image"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" در قسمت دوم ، می توانید توضیحات و تصاویر مربوط به کسب و کار خود و همچنین مجوز ها، استاندارد ها و گواهینامه های کسب و کار خود را بار گذاری کنید. توجه کنید که کامل کردن پروفایل تجاری باعث ایجاد اعتماد و افزایش تعداد مشتریان شما می شود. پس از تکمیل اطلاعات حتما بر روی گزینه ثبت تغییرات در پایین صفحه کلیک کنید. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br")], -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "desktop-image"
};
var _hoisted_51 = {
  "class": "mobile-image"
};
var _hoisted_52 = {
  "class": "mobile-image"
};
var _hoisted_53 = {
  "class": "panel panel-default"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingFive",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseFive",
  "aria-expanded": "false",
  "aria-controls": "collapseFive",
  "class": "collapsed"
}, " چگونه در باسکول محصول ثبت کنم؟ (فروشندگان) ")])], -1
/* HOISTED */
);

var _hoisted_55 = {
  id: "collapseFive",
  role: "tabpanel",
  "aria-labelledby": "headingFive",
  "class": "panel-collapse collapse"
};
var _hoisted_56 = {
  "class": "panel-body"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ابتدا وارد پنل کاربری خود شوید.");

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("لینک ورود");

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در سمت راست منوی داشبورد خود بر روی (ثبت محصول) کلیک کنید. ", -1
/* HOISTED */
);

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "سپس در وسط صفحه بر روی دکمه ی (ثبت محصول) کلیک کنید.", -1
/* HOISTED */
);

var _hoisted_61 = {
  "class": "desktop-image"
};
var _hoisted_62 = {
  "class": "mobile-image"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در مرحله اول دسته بندی و نوع محصول را وارد کرده و روی دکمه \"مرحله بعد\" کلیک کنید. ", -1
/* HOISTED */
);

var _hoisted_64 = {
  "class": "desktop-image"
};
var _hoisted_65 = {
  "class": "mobile-image"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در مرحله دوم میزان موجودی و قیمت محصول خود را وارد کنید و روی دکمه \"مرحله بعد\" کلیک کنید. ", -1
/* HOISTED */
);

var _hoisted_67 = {
  "class": "desktop-image"
};
var _hoisted_68 = {
  "class": "mobile-image"
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در مرحله سوم مکان محصول خود را انتخاب کنید سپس روی دکمه \"مرحله بعد\" کلیک کنید. ", -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "desktop-image"
};
var _hoisted_71 = {
  "class": "mobile-image"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در مرحله چهارم تصاویر محصول خود را وارد کنید سپس روی دکمه \"مرحله بعد\" کلیک کنید. ", -1
/* HOISTED */
);

var _hoisted_73 = {
  "class": "desktop-image"
};
var _hoisted_74 = {
  "class": "mobile-image"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در مرحله آخر توضیحات مربوط به محصول خود مانند کیفیت، استاندارد، نوع بسته بندی و ... را وارد کنید سپس روی دکمه \"ثبت نهایی\" کلیک کنید. ", -1
/* HOISTED */
);

var _hoisted_76 = {
  "class": "desktop-image"
};
var _hoisted_77 = {
  "class": "mobile-image"
};

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" محصول شما پس از تایید ناظران باسکول در صفحه ی ");

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("لیست محصولات");

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" نمایش داده می شود و خریداران می توانند درخواست های خرید خود را برای شما ارسال کنند. ");

var _hoisted_81 = {
  "class": "panel panel-default"
};

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingSix",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseSix",
  "aria-expanded": "false",
  "aria-controls": "collapseSix",
  "class": "collapsed"
}, " چگونه درخواست خرید خود را در باسکول ثبت کنم؟ (خریداران) ")])], -1
/* HOISTED */
);

var _hoisted_83 = {
  id: "collapseSix",
  role: "tabpanel",
  "aria-labelledby": "headingSix",
  "class": "panel-collapse collapse"
};
var _hoisted_84 = {
  "class": "panel-body"
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ابتدا وارد پنل کاربری خود شوید. ");

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("لینک ورود");

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در سمت راست پنل خود لینک ثبت درخواست جدید را کلیک کنید(پنل خریداران) ")], -1
/* HOISTED */
);

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " شما می توانید در قسمت (ثبت درخواست خرید) در منوی داشبورد کنار صفحه، اطلاعات محصول مورد نیاز خود از قبیل نوع محصول، وزن، قیمت و ... را وارد کرده و درخواست خرید خود را ثبت کنید. این درخواست خرید شما برای تمامی فروشندگان محصول مورد نظرتان ارسال شده و شما می توانید بهترین محصول با بهترین قیمت را از میان فروشندگان بیابید. ", -1
/* HOISTED */
);

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " برای شروع روی دکمه \"ثبت درخواست خرید\" در وسط صفحه کلیک کنید ", -1
/* HOISTED */
);

var _hoisted_90 = {
  "class": "desktop-image"
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " در مرحله دوم نوع و میزان محصول مورد نیاز خود را وارد کنید و روی دکمه \"ثبت درخواست\" کلیک کنید. ", -1
/* HOISTED */
);

var _hoisted_92 = {
  "class": "desktop-image"
};
var _hoisted_93 = {
  "class": "mobile-image"
};
var _hoisted_94 = {
  "class": "mobile-image"
};
var _hoisted_95 = {
  "class": "mobile-image"
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" درخواست شما پس از تایید ناظران باسکول برای تامین کنندگان مربوطه ارسال می شود تا قیمت ، تصاویر و سایر جزییات محصولشان را برایتان ارسال کنند. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" برای مشاهده ی پاسخ فروشندگان به قسمت پیام ها مراجعه کنید. ")], -1
/* HOISTED */
);

var _hoisted_97 = {
  "class": "panel panel-default"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingeleven",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseEleven",
  "aria-expanded": "false",
  "aria-controls": "collapseEleven",
  "class": "collapsed"
}, " چگونه درخواست های خرید را ببینیم؟ (فروشندگان) ")])], -1
/* HOISTED */
);

var _hoisted_99 = {
  id: "collapseEleven",
  role: "tabpanel",
  "aria-labelledby": "headingeleven",
  "class": "panel-collapse collapse"
};
var _hoisted_100 = {
  "class": "panel-body"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " فروشندگان محترم می توانند در این قسمت درخواست های خریدی که از سوی خریداران اعلام شده است را ببینند و با خریداران ارتباط برقرار کنند. برای دیدن درخواست های خرید می توانید در منوی کنار صفحه به قسمت (درخواست های خرید) مراجعه کنید. ")], -1
/* HOISTED */
);

var _hoisted_102 = {
  "class": "desktop-image"
};
var _hoisted_103 = {
  "class": "mobile-image"
};
var _hoisted_104 = {
  "class": "mobile-image"
};
var _hoisted_105 = {
  "class": "panel panel-default"
};

var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingEight",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseEight",
  "aria-expanded": "false",
  "aria-controls": "collapseEight",
  "class": "collapsed"
}, " پیام رسان باسکول ")])], -1
/* HOISTED */
);

var _hoisted_107 = {
  id: "collapseEight",
  role: "tabpanel",
  "aria-labelledby": "headingEight",
  "class": "panel-collapse collapse"
};
var _hoisted_108 = {
  "class": "panel-body"
};

var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " خریداران و فروشندگان عزیز می توانند از طریق پیام رسان تجاری باسکول در هر لحظه (بدون ایجاد مزاحمت در اثر تعداد زیاد تماس) با یکدیگر ارتباط برقرار کنند، به صورت روزانه استعلام قیمت بگیرند و در صورت صلاح دید نسبت به تبادل شماره ی تماس و برقراری تماس تلفنی اقدام کنند. ", -1
/* HOISTED */
);

var _hoisted_110 = {
  "class": "desktop-image"
};
var _hoisted_111 = {
  "class": "mobile-image"
};
var _hoisted_112 = {
  "class": "mobile-image"
};

var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "panel panel-default"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  role: "tab",
  id: "headingSeven",
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "panel-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "data-toggle": "collapse",
  "data-parent": "#accordion",
  href: "#collapseSeven",
  "aria-expanded": "false",
  "aria-controls": "collapseSeven",
  "class": "collapsed"
}, " آیا جهت عضویت در سامانه هزینه ای باید پرداخت شود؟ ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  id: "collapseSeven",
  role: "tabpanel",
  "aria-labelledby": "headingSeven",
  "class": "panel-collapse collapse"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "panel-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " شما با عضویت رایگان می توانید به صورت محدود از خدمات باسکول استفاده کنید. برای استفاده نامحدود از خدمات باسکول ( ثبت محصولات بیشتر، دیدن همه درخواست های خرید اولویت در نمایش و...) می توانید حساب کاربری خود را به عضویت ویژه ارتقا دهید و به عنوان کاربر ویژه در جمع خریداران و فروشندگان فعالیت کنید. ")])])], -1
/* HOISTED */
);

var _hoisted_114 = {
  "class": "col-xs-12"
};
var _hoisted_115 = {
  "class": "row"
};
var _hoisted_116 = {
  "class": "main-green-button"
};

var _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("لیست محصولات");

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" لیست درخواست های خرید ");

var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ثبت نام در باسکول");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, _hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'login'
    },
    target: "_blank"
  }, {
    "default": _withId(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'register'
    },
    target: "_blank"
  }, {
    "default": _withId(function () {
      return [_hoisted_18];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_19]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/web/login.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/mobile/login.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/web/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/mobile/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/web/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/mobile/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/web/3.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/mobile/3.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/web/4.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/mobile/4.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/web/5.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/mobile/5.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/web/6.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/register/mobile/6.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [_hoisted_44, _hoisted_45, _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/edit-profile/web/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/edit-profile/mobile/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/edit-profile/web/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/edit-profile/mobile/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/edit-profile/mobile/3.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'login'
    }
  }, {
    "default": _withId(function () {
      return [_hoisted_58];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_59, _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/web/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/mobile/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/web/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/mobile/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/web/3.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/mobile/3.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/web/4.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/mobile/4.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/web/5.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/mobile/5.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/web/6.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/post-product/mobile/6.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'productList'
    },
    target: "_blank"
  }, {
    "default": _withId(function () {
      return [_hoisted_79];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_80])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_81, [_hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'login'
    }
  }, {
    "default": _withId(function () {
      return [_hoisted_86];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [_hoisted_88, _hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/buyad/web/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/buyad/web/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/buyad/mobile/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/buyad/mobile/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/buyad/mobile/3.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])]), _hoisted_96])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/buy-ad-list/web/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/buy-ad-list/mobile/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/buy-ad-list/mobile/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_105, [_hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_108, [_hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/messenger/web/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/messenger/mobile/1.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $props.assets + 'assets/img/help/messenger/mobile/2.jpg'
  }, null, 8
  /* PROPS */
  , ["src"])])])])]), _hoisted_113]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_116, [$props.isUserLogin && $props.userType == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 0,
    to: {
      name: 'productList'
    },
    "class": "green-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_117];
    }),
    _: 1
    /* STABLE */

  })) : $props.isUserLogin && $props.userType == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 1,
    to: {
      name: 'buyAdRequestsSeller'
    },
    "class": "green-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_118];
    }),
    _: 1
    /* STABLE */

  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 2,
    to: {
      name: 'register'
    },
    "class": "green-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_119];
    }),
    _: 1
    /* STABLE */

  }))])])])])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-21cd6c4a] {\n  direction: rtl;\n  margin-bottom: 15px;\n}\np[data-v-21cd6c4a],\nspan[data-v-21cd6c4a],\ndiv[data-v-21cd6c4a],\nh3[data-v-21cd6c4a] {\n  line-height: 1.618;\n}\nli[data-v-21cd6c4a] {\n  margin-bottom: 15px;\n}\n.panel[data-v-21cd6c4a] {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n}\n.panel-title a[data-v-21cd6c4a] {\n  background: #ececec;\n}\n.desktop-image[data-v-21cd6c4a],\n.mobile-image[data-v-21cd6c4a] {\n  margin-bottom: 15px;\n}\n.mobile-image[data-v-21cd6c4a] {\n  max-width: 360px;\n  text-align: center;\n  margin: 0 auto;\n  display: none;\n}\n.main-green-button[data-v-21cd6c4a] {\n  max-width: 360px;\n  margin: 0 auto;\n  text-align: center;\n}\n.panel-heading[data-v-21cd6c4a],\n.panel-title[data-v-21cd6c4a] {\n  padding: 0;\n  margin: 0;\n}\n.panel-heading a[data-v-21cd6c4a] {\n  padding: 15px 20px;\n  display: block;\n  line-height: 1.618;\n}\n@media screen and (max-width: 768px) {\n.desktop-image[data-v-21cd6c4a] {\n    display: none;\n}\n.mobile-image[data-v-21cd6c4a] {\n    display: block;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/js/components/layouts/main/help.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/help.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _help_vue_vue_type_template_id_21cd6c4a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.vue?vue&type=template&id=21cd6c4a&scoped=true */ "./resources/assets/js/components/layouts/main/help.vue?vue&type=template&id=21cd6c4a&scoped=true");
/* harmony import */ var _help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.vue?vue&type=script&lang=js */ "./resources/assets/js/components/layouts/main/help.vue?vue&type=script&lang=js");
/* harmony import */ var _help_vue_vue_type_style_index_0_id_21cd6c4a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css */ "./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css");




;
_help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _help_vue_vue_type_template_id_21cd6c4a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-21cd6c4a"
/* hot reload */
if (false) {}

_help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/layouts/main/help.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/help.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/help.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./help.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/help.vue?vue&type=template&id=21cd6c4a&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/help.vue?vue&type=template&id=21cd6c4a&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_template_id_21cd6c4a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_template_id_21cd6c4a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./help.vue?vue&type=template&id=21cd6c4a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=template&id=21cd6c4a&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_style_index_0_id_21cd6c4a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_style_index_0_id_21cd6c4a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_style_index_0_id_21cd6c4a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_style_index_0_id_21cd6c4a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_help_vue_vue_type_style_index_0_id_21cd6c4a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/help.vue?vue&type=style&index=0&id=21cd6c4a&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3fccbe52", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);