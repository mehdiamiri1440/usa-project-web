(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_components_dashboard_buyer_profile_profile_verification_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _verification_components_document_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-components/document-image */ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue");
// import IdCard from "./verification-components/id-card";
// import UserImage from "./verification-components/user-image";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    // IdCard,
    // UserImage,
    DocumentImage: _verification_components_document_image__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: ["currentUser"],
  data: function data() {
    return {
      currentStep: 0,
      userImage: "",
      idCardImage: "",
      documetImage: ""
    };
  },
  methods: {
    uploadFiles: function uploadFiles() {
      var _this = this;

      this.$store.state.dashboardStore.submiting = true;
      var data = new FormData();
      data.append("images_count", 3);
      data.append("image_0", this.idCardImage.file);
      data.append("image_1", this.userImage.file);
      data.append("image_2", this.documetImage.file);
      axios.post("/verify/upload-photos", data, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        _this.$store.state.dashboardStore.submiting = false;
        _this.$store.state.dashboardStore.uploadPercentage = 0;
        _this.currentStep = 3; // setTimeout(function () {
        //   window.location.href = "/buyer/profile";
        // }, 3000);
      })["catch"](function (e) {
        _this.$store.state.dashboardStore.submiting = false;
        _this.$store.state.dashboardStore.uploadPercentage = 0;
      });
    },
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  watch: {
    uploadPercentage: function uploadPercentage() {
      this.$store.state.dashboardStore.uploadPercentage = this.uploadPercentage;
    },
    "product.product_name": function productProduct_name(name) {
      this.errors.product_name = "";
    },
    currentStep: function currentStep(step) {
      this.scrollToTop();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _upload_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../upload-image */ "./resources/assets/js/components/dashboard/upload-image.vue");
/* harmony import */ var _imageuploadify_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../imageuploadify.min */ "./resources/assets/js/imageuploadify.min.js");
/* harmony import */ var _imageuploadify_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imageuploadify_min__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    UploadFile: _upload_image__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      documentImageFile: [],
      isCompressor: false,
      errors: {
        documentImageFile: ""
      }
    };
  } // methods: {
  //   nextStep() {
  //     this.checkImageErrors();
  //     if (!this.isCompressor && !this.errors.documentImageFile) {
  //       this.$parent.uploadFiles();
  //     }
  //   },
  //   backStep() {
  //     this.$parent.currentStep--;
  //   },
  //   imageValidator(files) {
  //     var errorsStatus = false;
  //     if (files.length) {
  //       for (var i = 0; i <= files.length; i++) {
  //         if (files[i]) {
  //           if (
  //             !files[i].type ||
  //             files[i].type == "" ||
  //             files[i].type == "image/gif" ||
  //             files[i].type == "image/svg+xml" ||
  //             files[i].type == "application/postscript" ||
  //             files[i].type == "text/xml" ||
  //             files[i].type == "application/x-gzip"
  //           ) {
  //             errorsStatus = true;
  //             this.errors.documentImageFile = "تصویر باید فرمت معتبری باشند.";
  //           }
  //           if (files[i].size > 5242880) {
  //             errorsStatus = true;
  //             this.errors.documentImageFile =
  //               "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
  //           } else if (files[i].file.size < 20480) {
  //             errorsStatus = true;
  //             this.errors.documentImageFile =
  //               "حجم تصویر پایین است، باید بیشتر از 20 کیلوبایت باشد.";
  //           }
  //         }
  //       }
  //       if (!errorsStatus) {
  //         this.errors.documentImageFile = "";
  //         this.$parent.documetImage = this.documentImageFile[0];
  //       }
  //     }
  //   },
  //   checkImageErrors() {
  //     let imagesCount = this.documentImageFile.length;
  //     if (imagesCount == 0) {
  //       this.errors.documentImageFile =
  //         "لطفا تصویر یکی از اسناد که به نام فرد دارنده کارت ملی است را بارگذاری کنید";
  //     } else {
  //       this.imageValidator(this.documentImageFile);
  //     }
  //   },
  // },
  // mounted() {
  //   $('#verification-document input[type="file"]').imageuploadify();
  // },
  // watch: {
  //   documentImageFile: function (files) {
  //     if (!this.isCompressor) {
  //       this.imageValidator(files);
  //     }
  //     // this.errors.documentImageFile = "";
  //   },
  // },

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_0__);
// import loadImage from "blueimp-load-image";
// import Cropper from 'cropperjs'
// import ImageCompressor from "@xkeshi/image-compressor";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      files: []
    };
  },
  components: {
    FileUpload: (vue_upload_component__WEBPACK_IMPORTED_MODULE_0___default())
  },
  methods: {
    /**
     * Has changed
     * @param  Object|undefined   newFile   Read only
     * @param  Object|undefined   oldFile   Read only
     * @return undefined
     */
    inputFile: function inputFile(newFile, oldFile) {
      if (newFile && oldFile && !newFile.active && oldFile.active) {
        // Get response data
        console.log("response", newFile.response);

        if (newFile.xhr) {
          //  Get the response status code
          console.log("status", newFile.xhr.status);
        }
      }
    },

    /**
     * Pretreatment
     * @param  Object|undefined   newFile   Read and write
     * @param  Object|undefined   oldFile   Read only
     * @param  Function           prevent   Prevent changing
     * @return undefined
     */
    inputFilter: function inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Filter non-image file
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent();
        }
      } // Create a blob field


      newFile.blob = "";
      var URL = window.URL || window.webkitURL;

      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=template&id=13617c65&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=template&id=13617c65&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-13617c65");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-13617c65");

var _hoisted_1 = {
  key: 0,
  "class": "main-content col-xs-12"
};
var _hoisted_2 = {
  "class": "row title-wrapper"
};
var _hoisted_3 = {
  key: 0,
  "class": "section-title"
};
var _hoisted_4 = {
  key: 1
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "main-section"
};
var _hoisted_7 = {
  "class": "header-section"
};
var _hoisted_8 = {
  key: 0,
  "class": "wrapper-progressbar"
};
var _hoisted_9 = {
  "class": "progressbar-items"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "progrees-item active-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "wrapper-counter"
}, "1"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "کارت ملی")], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "line-item"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "wrapper-counter"
}, "2", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "تصویر شما", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "line-item"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "wrapper-counter"
}, "3", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "مدارک مرتبط", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "main-section-wrapper"
};
var _hoisted_18 = {
  "class": "success-step"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "icon-wrapper"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-check"
})], -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "success-title"
}, " اطلاعات شما با موفقیت برای کارشناسان باسکول ارسال شد ", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "success-text"
}, " پس از تایید کارشناسان حساب شما احراز هویت خواهد شد. ", -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "section-background"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = {
  key: 1,
  "class": "main-content col-xs-12"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\" data-v-13617c65><section class=\"wrapper-section user-verified-wrapper text-center\" data-v-13617c65><div class=\"user-verified-icon-wrapper\" data-v-13617c65><span class=\"user-verified-icon\" data-v-13617c65><i class=\"fa fa-certificate\" data-v-13617c65></i></span></div><h3 data-v-13617c65>اطلاعات هویتی شما احراز شده است.</h3><!-- &lt;p class=&quot;gray-text margin-10-0&quot;&gt;توضیحات اضافه در صورت لزوم&lt;/p&gt; --></section></div>", 1);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DocumentImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DocumentImage");

  return !$props.currentUser.user_info.is_verified ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_ctx.currentStep >= 0 && _ctx.currentStep <= 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, " احراز هویت ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, [_hoisted_5]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["row wrapper-section", {
      success: _ctx.currentStep == 3
    }]
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("header", _hoisted_7, [_ctx.currentStep >= 0 && _ctx.currentStep <= 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    "class": ["progrees-item", {
      'active-item': _ctx.currentStep >= 1
    }]
  }, [_hoisted_11, _hoisted_12, _hoisted_13], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    "class": ["progrees-item", {
      'active-item': _ctx.currentStep >= 2
    }]
  }, [_hoisted_14, _hoisted_15, _hoisted_16], 2
  /* CLASS */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("main", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <IdCard v-show=\"currentStep == 0\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <UserImage v-show=\"currentStep == 1\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DocumentImage, null, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.currentStep == 2]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, _hoisted_20, _hoisted_21], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.currentStep == 3]])])]), _hoisted_22], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"currentStep == 3\" class=\"main-button-wrapper\">\n      <router-link\n        v-if=\"currentUser.user_info.is_buyer\"\n        :to=\"{ name: 'productList' }\"\n        tag=\"button\"\n        class=\"green-button\"\n      >\n        لیست محصولات\n        <i class=\"fa fa-arrow-left\"></i>\n      </router-link>\n      <router-link\n        v-else\n        :to=\"{ name: 'buyAdRequestsSeller' }\"\n        tag=\"button\"\n        class=\"green-button\"\n      >\n        درخواست های خرید\n        <i class=\"fa fa-arrow-left\"></i>\n      </router-link>\n    </div> ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("section", _hoisted_23, [_hoisted_24]));
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=template&id=703b8bf8&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=template&id=703b8bf8&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_profile_verification_madarek_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../img/profile-verification/madarek.jpg */ "./resources/assets/img/profile-verification/madarek.jpg");



var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-703b8bf8");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-703b8bf8");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "title-section"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" تصویر "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "red-text"
}, " یکی "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" از این اسناد (اجاره نامه یا جواز کسب یا سند مالکیت) که به نام فرد دارنده کارت ملی است. ")], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", {
  "class": "wrapper-section verification-document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-12 pull-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "main-title-wrapper"
}, "نمونه تصویر یکی از این اسناد"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "image-file-wrapper"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_profile_verification_madarek_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
  "class": "placeholder-content"
})])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "wrapper-section"
};
var _hoisted_4 = {
  "class": "col-xs-12 pull-right"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "main-title-wrapper"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" بارگذاری تصویر یکی از اسناد که به نام فرد دارنده کارت ملی است "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "red-text"
}, "*")], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "col-xs-12 text-left action-button-wrapper"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, " ثبت نهایی ", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "button-icon-wrapper"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-arrow-right"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, " مرحله قبل ", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <UploadFile\n          id=\"verification-document\"\n          uploadName=\"documentImageFile\"\n          uploadAccept=\"image/*\"\n          :uploadMinSize=\"1024\"\n          :uploadSize=\"1024 * 1024 * 10\"\n          :uploadMultiple=\"true\"\n          :uploadDrop=\"true\"\n          :uploadDropDirectory=\"true\"\n          :uploadAddIndex=\"false\"\n          :uploadThread=\"2\"\n          :uploadOCompress=\"1024 * 1024\"\n          :uploadUploadAuto=\"false\"\n          imageWrapperSize=\"col-xs-12\"\n          imageAccessUploadCount=\"1\"\n          :maximum=\"1\"\n        /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
    "class": "upload-error red-text col-xs-12",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errors.documentImageFile)
  }, null, 8
  /* PROPS */
  , ["textContent"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": ["green-button next", {
      disabled: _ctx.documentImageFile.length == 0 || _ctx.errors.documentImageFile || _ctx.isCompressor
    }],
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.nextStep && _ctx.nextStep.apply(_ctx, arguments);
    }, ["prevent"]))
  }, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" v-if=\"isCompressor\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
    "class": ["fa fa-check", {
      empty: _ctx.isCompressor
    }]
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["spinner-border", {
      empty: !_ctx.isCompressor
    }]
  }, [_hoisted_9], 2
  /* CLASS */
  )])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "green-button back",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.backStep();
    }, ["prevent"]))
  }, [_hoisted_10, _hoisted_11])])]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=template&id=88de57fe&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=template&id=88de57fe&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-88de57fe");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-88de57fe");

var _hoisted_1 = {
  "class": "image-upload-wrapper"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Upload file ");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_file_upload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("file-upload");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.files, function (file) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.name) + " - Error: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.error) + ", Success: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.success), 1
    /* TEXT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_file_upload, {
    ref: "upload",
    modelValue: _ctx.files,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.files = $event;
    }),
    "post-action": "/post.method",
    "put-action": "/put.method",
    onInputFile: $options.inputFile,
    onInputFilter: $options.inputFilter
  }, {
    "default": _withId(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "onInputFile", "onInputFilter"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.$refs.upload.active = true;
    }, ["prevent"])),
    type: "button"
  }, " Start upload ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !_ctx.$refs.upload || !_ctx.$refs.upload.active]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.$refs.upload.active = false;
    }, ["prevent"])),
    type: "button"
  }, " Stop upload ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.$refs.upload && _ctx.$refs.upload.active]])]);
});

/***/ }),

/***/ "./resources/assets/js/imageuploadify.min.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/imageuploadify.min.js ***!
  \***************************************************/
/***/ (() => {

;

(function ($, window, document, undefined) {
  window.addEventListener("dragover", function (e) {
    e = e || event;
    e.preventDefault();
  }, false);
  window.addEventListener("drop", function (e) {
    e = e || event;
    e.preventDefault();
  }, false);

  var compareMimeType = function compareMimeType(mimeTypes, fileType, formatFile) {
    if (mimeTypes.length < 2 && mimeTypes[0] === "*") {
      return true;
    }

    for (var index = 1; index < mimeTypes.length; index += 3) {
      if (mimeTypes[index + 1] === "*" && fileType.search(new RegExp(mimeTypes[index])) != -1) {
        return true;
      } else if (mimeTypes[index + 1] && mimeTypes[index + 1] != "*" && fileType.search(new RegExp("\\*" + mimeTypes[index + 1] + "\\*")) != -1) {
        return true;
      } else if (mimeTypes[index + 1] && mimeTypes[index + 1] != "*" && fileType.search(new RegExp(mimeTypes[index + 1])) != -1) {
        return true;
      } else if (mimeTypes[index + 1] === "" && (fileType.search(new RegExp(mimeTypes[index])) != -1 || formatFile.search(new RegExp(mimeTypes[index])) != -1)) {
        return true;
      }
    }

    return false;
  };

  $.fn.imageuploadify = function (opts) {
    var settings = $.extend({}, $.fn.imageuploadify.defaults, opts);
    this.each(function () {
      var self = this;

      if (!$(self).attr("multiple")) {
        return;
      }

      var accept = $(self).attr("accept") ? $(self).attr("accept").replace(/\s/g, "").split(",") : null;
      var result = [];
      accept.forEach(function (item) {
        var regexp;

        if (item.search(/\//) != -1) {
          regexp = new RegExp("([A-Za-z-.]*)\/([A-Za-z-*.]*)", "g");
        } else {
          regexp = new RegExp("\.([A-Za-z-]*)()", "g");
        }

        var r = regexp.exec(item);
        result = result.concat(r);
      });
      var totalFiles = [];
      var counter = 0;
      var dragbox = $("<div class=\"imageuploadify\"><div class=\"imageuploadify-overlay\"><i class=\"fa fa-picture-o\"></i></div><div class=\"imageuploadify-images-list text-center\"><div id='custom-upload-image-icons' ><i class=\"fa fa-plus-square\"></i><i class=\"fa fa-camera\"></i></div><span class='imageuploadify-message'>\u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u0635\u0648\u06CC\u0631</span></div></div>");
      var overlay = dragbox.find(".imageuploadify-overlay");
      var uploadIcon = dragbox.find(".imageuploadify-overlay i");
      var imagesList = dragbox.find(".imageuploadify-images-list");
      var addIcon = dragbox.find(".imageuploadify-images-list i");
      var addMsg = dragbox.find(".imageuploadify-images-list span");
      var button = dragbox.find(".imageuploadify-images-list button");

      var retrieveFiles = function retrieveFiles(files) {
        for (var index = 0; index < files.length; ++index) {
          if (!accept || compareMimeType(result, files[index].type, /(?:\.([^.]+))?$/.exec(files[index].name)[1])) {
            var id = Math.random().toString(36).substr(2, 9);
            readingFile(id, files[index]);
            totalFiles.push({
              id: id,
              file: files[index]
            });
          }
        }
      };

      var readingFile = function readingFile(id, file) {
        var fReader = new FileReader();
        var width = dragbox.width();
        var boxesNb = Math.floor(width / 100);
        var marginSize = Math.floor((width - boxesNb * 100) / (boxesNb + 1));
        var container = $("<div class='imageuploadify-container'></div>"); // $(`<div class='imageuploadify-container'><button type='button' class='btn btn-danger fa  fa-times '></button></div>`);

        var details = container.find(".imageuploadify-details");
        var deleteBtn = container.find("button");
        container.css("margin-left", marginSize + "px");
        details.hover(function () {
          $(this).css("opacity", "1");
        }).mouseleave(function () {
          $(this).css("opacity", "0");
        });

        if (file.type && file.type.search(/image/) != -1) {
          fReader.onloadend = function (e) {
            var image = $("<img class='img_ditails'> <input class='img_ditails_file' value='" + e.target.result + "'>");
            image.attr("src", e.target.result);
            container.append(image);
            imagesList.append(container);
            imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");
            imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
          };
        } else if (file.type) {
          var type = "<i class='fa fa-file'></i>";

          if (file.type.search(/audio/) != -1) {
            type = "<i class='fa fa-file-audio-o'></i>";
          } else if (file.type.search(/video/) != -1) {
            type = "<i class='fa fa-file-video-o'></i>";
          }

          fReader.onloadend = function (e) {
            var span = $("<span>" + type + "</span>");
            span.css("font-size", "5em");
            container.append(span);
            imagesList.append(container);
            imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");
            imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
          };
        }

        deleteBtn.on("click", function () {
          $(this.parentElement).remove();

          for (var index = 0; totalFiles.length > index; ++index) {
            if (totalFiles[index].id === id) {
              totalFiles.splice(index, 1);
              break;
            }
          }
        });
        fReader.readAsDataURL(file);
      };

      var disableMouseEvents = function disableMouseEvents() {
        overlay.css("display", "flex");
        dragbox.css("border-color", "#3AA0FF");
        button.css("pointer-events", "none");
        addMsg.css("pointer-events", "none");
        addIcon.css("pointer-events", "none");
        imagesList.css("pointer-events", "none");
      };

      var enableMouseEvents = function enableMouseEvents() {
        overlay.css("display", "none");
        dragbox.css("border-color", "rgb(210, 210, 210)");
        button.css("pointer-events", "initial");
        addMsg.css("pointer-events", "initial");
        addIcon.css("pointer-events", "initial");
        imagesList.css("pointer-events", "initial");
      };

      button.mouseenter(function onMouseEnter(event) {
        button.css("background", "#3AA0FF").css("color", "white");
      }).mouseleave(function onMouseLeave() {
        button.css("background", "white").css("color", "#3AA0FF");
      });
      button.on("click", function onClick(event) {
        event.stopPropagation();
        event.preventDefault();
        $(self).click();
      });
      dragbox.on("dragenter", function onDragenter(event) {
        event.stopPropagation();
        event.preventDefault();
        counter++;
        disableMouseEvents();
      });
      dragbox.on("dragleave", function onDragLeave(event) {
        event.stopPropagation();
        event.preventDefault();
        counter--;

        if (counter === 0) {
          enableMouseEvents();
        }
      });
      dragbox.on("drop", function onDrop(event) {
        event.stopPropagation();
        event.preventDefault();
        enableMouseEvents();
        var files = event.originalEvent.dataTransfer.files;
        retrieveFiles(files);
      });
      $(window).bind("resize", function (e) {
        window.resizeEvt;
        $(window).resize(function () {
          clearTimeout(window.resizeEvt);
          window.resizeEvt = setTimeout(function () {
            var width = dragbox.width();
            var boxesNb = Math.floor(width / 100);
            var marginSize = Math.floor((width - boxesNb * 100) / (boxesNb + 1));
            var containers = imagesList.find(".imageuploadify-container");

            for (var index = 0; index < containers.length; ++index) {
              $(containers[index]).css("margin-right", "0px");
              $(containers[index]).css("margin-left", marginSize + "px");
            }

            imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");
            imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
          }, 500);
        });
      });
      $(self).on("change", function onChange() {
        var files = this.files;
        retrieveFiles(files);
      });
      $(self).closest("form").on("submit", function (event) {
        event.stopPropagation();
        event.preventDefault(event);
        var inputs = this.querySelectorAll("input, textarea, select, button");
        var formData = new FormData();

        for (var index = 0; index < inputs.length; ++index) {
          if (inputs[index].tagName === "SELECT" && inputs[index].hasAttribute("multiple")) {
            var options = inputs[index].options;

            for (var _i = 0; options.length > _i; ++_i) {
              if (options[_i].selected) {
                formData.append(inputs[index].getAttribute("name"), options[_i].value);
              }
            }
          } else if (!inputs[index].getAttribute("type") || inputs[index].getAttribute("type").toLowerCase() !== "checkbox" && inputs[index].getAttribute("type").toLowerCase() !== "radio" || inputs[index].checked) {
            formData.append(inputs[index].name, inputs[index].value);
          } else if ($(inputs[index]).getAttribute("type") != "file") {
            formData.append(inputs[index].name, inputs[index].value);
          }
        }

        for (var i = 0; i < totalFiles.length; i++) {
          formData.append(self.name, totalFiles[i].file);
        }

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (e) {
          if (xhr.status == 200 && xhr.readyState === XMLHttpRequest.DONE) {
            window.location.replace(xhr.responseURL);
          }
        };

        xhr.open("POST", $(this).attr("action"), true);
        xhr.send(formData);
        return false;
      });
      $(self).hide();
      dragbox.insertAfter(this);
    });
    return this;
  };

  $.fn.imageuploadify.defaults = {};
})(jQuery, window, document);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/*main style*/\n.main-content[data-v-13617c65] {\n  max-width: 685px;\n  position: absolute;\n  left: calc(50% - 342px);\n  top: 65px;\n  margin-bottom: 50px;\n  height: 100%;\n  direction: rtl;\n}\n.main-content > div.wrapper-section[data-v-13617c65] {\n  border: 1px solid #dadce0;\n  border-radius: 12px;\n  min-height: 400px;\n}\n.main-content > div.wrapper-section.finish-stage[data-v-13617c65] {\n  border: none;\n}\n.main-content > div.wrapper-section.empty-section[data-v-13617c65] {\n  border: none;\n  border-radius: 4px;\n  min-height: initial;\n}\n.main-content .section-title[data-v-13617c65] {\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.main-content div.section-title p[data-v-13617c65] {\n  font-size: 15px;\n}\n.section-background[data-v-13617c65] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: white;\n  content: \"\";\n  z-index: -1;\n}\n.wrapper-progressbar.title h2[data-v-13617c65] {\n  font-size: 23px;\n  font-weight: bold;\n  text-align: right;\n}\n.header-section > h2[data-v-13617c65] {\n  font-weight: 600;\n}\n/*progressbar styles*/\n.wrapper-progressbar[data-v-13617c65] {\n  position: relative;\n  padding: 0;\n  top: -12px;\n  overflow: hidden;\n}\n.progressbar-items[data-v-13617c65] {\n  display: flex;\n  justify-content: space-between;\n  direction: rtl;\n  position: relative;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.progrees-item[data-v-13617c65] {\n  text-align: center;\n  color: #bebebe;\n  position: relative;\n  flex: 1;\n}\n.progrees-item span.wrapper-counter[data-v-13617c65] {\n  width: 20px;\n  height: 20px;\n  font-size: 13px;\n  background: #bebebe;\n  border-radius: 50px;\n  color: #fff;\n  display: inline-block;\n  margin-bottom: 6px;\n  padding-top: 4px;\n  position: relative;\n  z-index: 1;\n}\n.progrees-item span.line-item[data-v-13617c65] {\n  height: 1px;\n  font-size: 13px;\n  background: #dadce0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: 11px;\n  left: 50%;\n  z-index: 0;\n}\n.progrees-item.active-item[data-v-13617c65] {\n  color: #333;\n}\n.progrees-item.active-item span[data-v-13617c65],\n.progrees-item.active-item span.line-item[data-v-13617c65] {\n  background: #00c569;\n}\n.custom-progressbar.active-item[data-v-13617c65] {\n  width: 97%;\n  height: 1px;\n  position: absolute;\n  top: 11px;\n}\n.custom-progressbar .progress-bar[data-v-13617c65] {\n  background: #00c569;\n  float: right;\n  width: 0;\n}\n.active-progress-wrapper[data-v-13617c65] {\n  max-width: 320px;\n  margin: 0 auto;\n  position: relative;\n}\n.main-section-wrapper[data-v-13617c65] {\n  padding: 0 5px;\n}\n.wrapper-section.success[data-v-13617c65] {\n  border: none !important;\n  background: #edf8e6;\n  text-align: center;\n  min-height: initial !important;\n}\n.success-step[data-v-13617c65] {\n  margin: 30px auto 50px;\n}\n.success-step .icon-wrapper[data-v-13617c65] {\n  width: 120px;\n  height: 120px;\n  background: #fff;\n  border-radius: 120px;\n  font-size: 76px;\n  color: #21ad93;\n  padding-top: 22px;\n  margin: 0 auto 30px;\n}\n.success-title[data-v-13617c65],\n.success-text[data-v-13617c65] {\n  color: #21ad93;\n  font-size: 18px;\n  line-height: 1.618;\n  margin-bottom: 16px;\n  font-weight: 500;\n}\n.success-text[data-v-13617c65] {\n  font-size: 15px;\n}\n.main-button-wrapper[data-v-13617c65] {\n  text-align: center;\n  margin-top: 25px;\n}\n.main-button-wrapper button[data-v-13617c65] {\n  font-size: 18px;\n  border-radius: 12px;\n  padding: 13px 30px;\n}\n.main-button-wrapper button i[data-v-13617c65] {\n  position: relative;\n  top: 3px;\n  margin-right: 8px;\n}\n.user-verified-icon-wrapper[data-v-13617c65] {\n  margin-top: 50px;\n}\n.user-verified-icon[data-v-13617c65] {\n  position: relative;\n  font-size: 95px;\n  color: #1da1f2;\n}\n.user-verified-icon[data-v-13617c65]::before {\n  content: \"\\F00C\";\n  position: absolute;\n  left: 22px;\n  font-family: \"Font Awesome 5 Free\";\n  color: #fff;\n  top: 37px;\n  font-size: 52px;\n  z-index: 1;\n  line-height: 1;\n  font-weight: 900;\n}\n@media screen and (max-width: 767px) {\n.wrapper-section.success[data-v-13617c65] {\n    margin-top: -33px;\n}\n.title-wrapper[data-v-13617c65] {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n.main-section-wrapper[data-v-13617c65] {\n    max-width: initial;\n    margin: 0px auto;\n}\n.main-content .section-title p[data-v-13617c65] {\n    line-height: 1.618;\n}\n.main-content > div.wrapper-section[data-v-13617c65] {\n    border: none;\n    border-radius: 0;\n}\n.main-content[data-v-13617c65] {\n    max-width: initial;\n    background: #fff;\n    border-radius: 0;\n    box-shadow: none;\n    direction: rtl;\n    transform: translate(0, 0);\n    top: 0;\n    padding-top: 20px;\n    width: 100%;\n    left: 0;\n}\n.active-progress-wrapper[data-v-13617c65] {\n    right: -15px;\n    max-width: initial;\n}\n.success-register[data-v-13617c65] {\n    margin-top: -20px;\n}\n.success-register p[data-v-13617c65] {\n    line-height: 1.618;\n}\n.success-register h2 i[data-v-13617c65] {\n    display: block;\n    margin: 0 auto 20px;\n    width: 80px;\n    height: 80px;\n    font-size: 45px;\n    padding-top: 17px;\n}\n.wrapper-progressbar[data-v-13617c65] {\n    top: 0;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#verification-document .imageuploadify .imageuploadify-images-list {\n  padding: 100px 0;\n}\n#verification-document .image-upload-wrapper {\n  padding: 0;\n}\n#verification-document .article-images .image {\n  border-radius: 12px;\n  height: 275px;\n  background: #f7f7f7;\n}\n#verification-document .article-images .image img {\n  min-height: initial;\n}\n#verification-document .upload,\n#verification-document .article-images {\n  padding: 0;\n}\n#verification-document .imageuploadify #custom-upload-image-icons {\n  margin: 0 48%;\n}\n@media screen and (max-width: 768px) {\n#verification-document .imageuploadify .imageuploadify-images-list {\n    padding: 50px 0;\n}\n#verification-document .article-images .image {\n    border-radius: 12px;\n    height: 151px;\n    background: #f7f7f7;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#verification-document[data-v-703b8bf8] {\n  overflow: hidden;\n}\n.title[data-v-703b8bf8] {\n  padding: 13px 0;\n}\n.title h1[data-v-703b8bf8] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.small-description[data-v-703b8bf8] {\n  font-size: 12px;\n  color: #bdc4cc;\n}\n.image-file-wrapper img[data-v-703b8bf8] {\n  border-radius: 12px;\n  border: 1px solid #bdc4cc;\n  min-height: 272px;\n}\n.main-title-wrapper[data-v-703b8bf8] {\n  padding-top: 15px;\n  padding-bottom: 10px;\n  font-size: 15px;\n  line-height: 1.618;\n}\n.upload-error[data-v-703b8bf8] {\n  line-height: 1.618;\n}\n.green-button[data-v-703b8bf8] {\n  border-radius: 12px;\n  margin: 44px 5px 50px;\n  font-size: 21px;\n  font-weight: 500;\n  padding: 13px 50px;\n  position: relative;\n}\n.green-button.next i[data-v-703b8bf8] {\n  position: relative;\n  top: 3px;\n  margin-right: 14px;\n}\n.green-button.back[data-v-703b8bf8] {\n  background: #fff;\n  border: 1px solid #bdc4cc;\n  color: #777777;\n  padding: 13px 30px;\n}\n.green-button.back[data-v-703b8bf8]:hover {\n  background: #f7f7f7;\n}\n.action-button-wrapper[data-v-703b8bf8] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n}\n.disabled[data-v-703b8bf8] {\n  color: #fff;\n  background: #ccc;\n}\n.user-verified-icon-wrapper[data-v-703b8bf8] {\n  margin-top: 50px;\n}\n.user-verified-icon[data-v-703b8bf8] {\n  position: relative;\n  font-size: 95px;\n  color: #1da1f2;\n}\n.user-verified-icon[data-v-703b8bf8]::before {\n  content: \"\\F00C\";\n  position: absolute;\n  left: 22px;\n  font-family: \"Font Awesome 5 Free\";\n  color: #fff;\n  top: 37px;\n  font-size: 52px;\n  z-index: 1;\n  line-height: 1;\n  font-weight: 900;\n}\n.title-section[data-v-703b8bf8] {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  font-size: 18px;\n  color: #313a43;\n  line-height: 1.618;\n  padding: 0 15px;\n}\n.button-icon-wrapper[data-v-703b8bf8] {\n  display: inline;\n}\n.button-icon-wrapper[data-v-703b8bf8] {\n  display: inline;\n}\n.spinner-border[data-v-703b8bf8] {\n  position: absolute;\n  left: 50px;\n  top: 19px;\n}\n.upload-error[data-v-703b8bf8] {\n  height: 25px;\n  margin: 15px 0;\n  padding: 0;\n}\n@media screen and (max-width: 992px) {\n.upload-error[data-v-703b8bf8] {\n    text-align: center;\n}\n}\n@media screen and (max-width: 768px) {\n.main-title-wrapper[data-v-703b8bf8] {\n    padding-top: 25px;\n}\n.green-button[data-v-703b8bf8] {\n    border-radius: 12px;\n    margin: 44px 0 50px;\n    font-size: 18px;\n    font-weight: 500;\n    padding: 13px 27px;\n}\n.spinner-border[data-v-703b8bf8] {\n    position: absolute;\n    left: 27px;\n    top: 15px;\n}\n.green-button.next i[data-v-703b8bf8] {\n    position: relative;\n    top: 3px;\n    margin-right: 10px;\n}\n.wrapper-section > div[data-v-703b8bf8] {\n    padding: 0;\n}\n.green-button.next[data-v-703b8bf8] {\n    min-width: 163px;\n}\n.green-button.back[data-v-703b8bf8] {\n    padding: 13px 20px;\n}\n.title-section[data-v-703b8bf8],\n  .action-button-wrapper[data-v-703b8bf8] {\n    padding: 0 5px;\n}\n.image-file-wrapper img[data-v-703b8bf8] {\n    min-height: 151px;\n}\n.image-file-wrapper[data-v-703b8bf8],\n  #verification-document[data-v-703b8bf8] {\n    max-width: 360px;\n    margin: 0 auto;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-crop[data-v-88de57fe] {\n  display: inline-block;\n  background: #00c569;\n  color: #fff;\n  padding: 10px 35px;\n  border-radius: 3px;\n  text-align: center;\n  border: none;\n  transition: 300ms;\n}\n.btn-cancel[data-v-88de57fe] {\n  display: inline-block;\n  background: #e8312d;\n  color: #fff;\n  padding: 10px 35px;\n  border-radius: 3px;\n  text-align: center;\n  border: none;\n  transition: 300ms;\n}\n#modal-edit-file[data-v-88de57fe] {\n  overflow: scroll;\n}\n.form-group[data-v-88de57fe] {\n  margin: 0;\n  overflow: hidden;\n}\n.image-upload-wrapper[data-v-88de57fe],\n.article-images[data-v-88de57fe] {\n  position: relative;\n}\n.actions-content[data-v-88de57fe] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  text-align: center;\n  display: block;\n  right: 0;\n  opacity: 0;\n  background: rgba(49, 58, 67, 0.85);\n  transition: 300ms;\n}\n.image[data-v-88de57fe] {\n  transition: 300ms;\n  top: 0;\n  overflow: hidden;\n  border-radius: 3px;\n  position: relative;\n  height: 115px;\n}\n.image img[data-v-88de57fe] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n}\n.image-upload-wrapper .btn-group .dropdown-menu[data-v-88de57fe] {\n  display: block;\n  visibility: hidden;\n  transition: all 0.2s;\n}\n.image-upload-wrapper .btn-group:hover > .dropdown-menu[data-v-88de57fe] {\n  visibility: visible;\n}\n.image-upload-wrapper label.dropdown-item[data-v-88de57fe] {\n  margin-bottom: 0;\n}\n.image-upload-wrapper .btn-group .dropdown-toggle[data-v-88de57fe] {\n  margin-right: 0.6rem;\n}\n.image-upload-wrapper .filename[data-v-88de57fe] {\n  margin-bottom: 0.3rem;\n}\n.image-upload-wrapper .btn-is-option[data-v-88de57fe] {\n  margin-top: 0.25rem;\n}\n.image-upload-wrapper .edit-image img[data-v-88de57fe] {\n  max-width: 100%;\n}\n.image-upload-wrapper .edit-image-tool[data-v-88de57fe] {\n  margin-top: 0.6rem;\n}\n.image-upload-wrapper .edit-image-tool .btn-group[data-v-88de57fe] {\n  margin-right: 0.6rem;\n}\n.image-upload-wrapper .footer-status[data-v-88de57fe] {\n  padding-top: 0.4rem;\n}\n.image-upload-wrapper .drop-active[data-v-88de57fe] {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  position: absolute;\n  z-index: 9999;\n  opacity: 0;\n  text-align: center;\n  background: #000;\n}\n.image-upload-wrapper .drop-active h3[data-v-88de57fe] {\n  margin: -0.5em 0 0;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  font-size: 40px;\n  color: #fff;\n  padding: 0;\n}\n.fade[data-v-88de57fe] {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.modal-backdrop[data-v-88de57fe] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade[data-v-88de57fe] {\n  visibility: hidden;\n}\n.modal-backdrop.fade.show[data-v-88de57fe] {\n  visibility: visible;\n}\n.fade.show[data-v-88de57fe] {\n  display: block;\n  z-index: 1072;\n}\n.fade.show[data-v-88de57fe] {\n  opacity: 1;\n}\n.modal-backdrop.show[data-v-88de57fe] {\n  opacity: 0.5;\n}\n.modal[data-v-88de57fe] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n}\n.modal.fade .modal-dialog[data-v-88de57fe] {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.modal-lg[data-v-88de57fe] {\n  max-width: 800px;\n}\n.modal.show .modal-dialog[data-v-88de57fe] {\n  transform: translate(0, 0);\n}\n.modal-content[data-v-88de57fe] {\n  background: transparent;\n\n  box-shadow: none;\n\n  border: none;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  /*background-color: #fff;*/\n  /*background-clip: padding-box;*/\n  /*border: 1px solid rgba(0,0,0,.2);*/\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-header[data-v-88de57fe] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\nbutton.close[data-v-88de57fe] {\n  position: absolute;\n  top: -25px;\n  right: -12px;\n  background: #dc3545;\n  opacity: 1;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 30px;\n  padding-top: 4px;\n  border: 0;\n  z-index: 1;\n}\n.modal-title[data-v-88de57fe] {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body[data-v-88de57fe] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 0 15px;\n}\n.modal-footer[data-v-88de57fe] {\n  display: block;\n  border-top: none;\n  background: #fff;\n  margin-top: -2px;\n  text-align: center;\n  padding: 15px;\n}\n.btn-primary[data-v-88de57fe] {\n  display: inline-block;\n  background: #00c569;\n  color: #fff;\n  padding: 10px 35px;\n  border-radius: 3px;\n  text-align: center;\n  border: none;\n  transition: 300ms;\n}\n.btn[data-v-88de57fe] {\n  display: inline-block;\n\n  font-weight: 400;\n\n  text-align: center;\n\n  white-space: nowrap;\n\n  vertical-align: middle;\n\n  -webkit-user-select: none;\n\n  -moz-user-select: none;\n\n  -ms-user-select: none;\n\n  user-select: none;\n\n  border: 1px solid transparent;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  padding: 1.2rem 3.75rem;\n  font-size: 1.6rem;\n  line-height: 1.25;\n  border-radius: 0.25rem;\n  transition: all 0.15s ease-in-out;\n}\n.progress[data-v-88de57fe] {\n  display: flex;\n  overflow: hidden;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-align: center;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.bg-danger[data-v-88de57fe] {\n  background-color: #dc3545 !important;\n}\n@media only screen and (max-width: 991px) {\n.actions-content[data-v-88de57fe] {\n    opacity: 1;\n    background: none;\n}\n.modal.show .modal-dialog[data-v-88de57fe] {\n    margin: 40px 20px;\n}\n.btn-cancel[data-v-88de57fe],\n  .btn-crop[data-v-88de57fe] {\n    width: 100%;\n    margin: 8px 0 !important;\n}\n.image[data-v-88de57fe] {\n    height: 150px;\n}\n}\n@media only screen and (max-width: 767px) {\n.imageuploadify .imageuploadify-images-list[data-v-88de57fe] {\n    padding: 78px 0;\n}\n.image[data-v-88de57fe] {\n    height: 200px;\n}\n}\n@media only screen and (max-width: 512px) {\n.imageuploadify .imageuploadify-images-list[data-v-88de57fe] {\n    padding: 53px 0;\n}\n.image[data-v-88de57fe] {\n    height: 150px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/img/profile-verification/madarek.jpg":
/*!***************************************************************!*\
  !*** ./resources/assets/img/profile-verification/madarek.jpg ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/madarek.jpg?b918bb440a3ba6992799c3812f77dd49");

/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profile_verification_vue_vue_type_template_id_13617c65_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile_verification.vue?vue&type=template&id=13617c65&scoped=true */ "./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=template&id=13617c65&scoped=true");
/* harmony import */ var _profile_verification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile_verification.vue?vue&type=script&lang=js */ "./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=script&lang=js");
/* harmony import */ var _profile_verification_vue_vue_type_style_index_0_id_13617c65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css */ "./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css");




;
_profile_verification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _profile_verification_vue_vue_type_template_id_13617c65_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_profile_verification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-13617c65"
/* hot reload */
if (false) {}

_profile_verification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_profile_verification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _document_image_vue_vue_type_template_id_703b8bf8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-image.vue?vue&type=template&id=703b8bf8&scoped=true */ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=template&id=703b8bf8&scoped=true");
/* harmony import */ var _document_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-image.vue?vue&type=script&lang=js */ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=script&lang=js");
/* harmony import */ var _document_image_vue_vue_type_style_index_0_id_703b8bf8_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css */ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css");
/* harmony import */ var _document_image_vue_vue_type_style_index_1_id_703b8bf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css */ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css");




;

_document_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _document_image_vue_vue_type_template_id_703b8bf8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_document_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-703b8bf8"
/* hot reload */
if (false) {}

_document_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_document_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/upload-image.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/upload-image.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _upload_image_vue_vue_type_template_id_88de57fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-image.vue?vue&type=template&id=88de57fe&scoped=true */ "./resources/assets/js/components/dashboard/upload-image.vue?vue&type=template&id=88de57fe&scoped=true");
/* harmony import */ var _upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-image.vue?vue&type=script&lang=js */ "./resources/assets/js/components/dashboard/upload-image.vue?vue&type=script&lang=js");
/* harmony import */ var _upload_image_vue_vue_type_style_index_0_id_88de57fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css */ "./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css");




;
_upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _upload_image_vue_vue_type_template_id_88de57fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-88de57fe"
/* hot reload */
if (false) {}

_upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/dashboard/upload-image.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./profile_verification.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./document-image.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/upload-image.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/upload-image.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./upload-image.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=template&id=13617c65&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=template&id=13617c65&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_template_id_13617c65_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_template_id_13617c65_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./profile_verification.vue?vue&type=template&id=13617c65&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=template&id=13617c65&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=template&id=703b8bf8&scoped=true":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=template&id=703b8bf8&scoped=true ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_template_id_703b8bf8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_template_id_703b8bf8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./document-image.vue?vue&type=template&id=703b8bf8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=template&id=703b8bf8&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/dashboard/upload-image.vue?vue&type=template&id=88de57fe&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/upload-image.vue?vue&type=template&id=88de57fe&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_template_id_88de57fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_template_id_88de57fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./upload-image.vue?vue&type=template&id=88de57fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=template&id=88de57fe&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_style_index_0_id_13617c65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_style_index_0_id_13617c65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_style_index_0_id_13617c65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_style_index_0_id_13617c65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_profile_verification_vue_vue_type_style_index_0_id_13617c65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_0_id_703b8bf8_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_0_id_703b8bf8_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_0_id_703b8bf8_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_0_id_703b8bf8_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_0_id_703b8bf8_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_1_id_703b8bf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_1_id_703b8bf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_1_id_703b8bf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_1_id_703b8bf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_image_vue_vue_type_style_index_1_id_703b8bf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css":
/*!***************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_style_index_0_id_88de57fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_style_index_0_id_88de57fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_style_index_0_id_88de57fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_style_index_0_id_88de57fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_image_vue_vue_type_style_index_0_id_88de57fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/profile_verification.vue?vue&type=style&index=0&id=13617c65&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2e3b6a38", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=0&id=703b8bf8&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f67f1c6c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/buyer/profile/verification-components/document-image.vue?vue&type=style&index=1&id=703b8bf8&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("20cf3298", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/dashboard/upload-image.vue?vue&type=style&index=0&id=88de57fe&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("05ecdf78", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-upload-component/dist/vue-upload-component.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-upload-component/dist/vue-upload-component.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 Name: vue-upload-component 
Component URI: https://github.com/lian-yue/vue-upload-component#readme 
Version: 3.0.49 
Author: LianYue 
License: Apache-2.0 
Description: Vue.js file upload component, Multi-file upload, Upload directory, Drag upload, Drag the directory, Upload multiple files at the same time, html4 (IE 9), `PUT` method, Customize the filter 
 */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js")) :
  0;
}(this, (function (vue) { 'use strict';

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _ownKeys(Object(source), true).forEach(function (key) { _defineProperty2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }
  /**
   * Creates a XHR request
   *
   * @param {Object} options
   */


  var createRequest = function createRequest(options) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', options.url);
    xhr.responseType = 'json';

    if (options.headers) {
      Object.keys(options.headers).forEach(function (key) {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    }

    return xhr;
  };
  /**
   * Sends a XHR request with certain body
   *
   * @param {XMLHttpRequest} xhr
   * @param {Object} body
   */


  var sendRequest = function sendRequest(xhr, body) {
    return new Promise(function (resolve, reject) {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;

          try {
            response = JSON.parse(xhr.response);
          } catch (err) {
            response = xhr.response;
          }

          resolve(response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.onerror = function () {
        return reject(xhr.response);
      };

      xhr.send(JSON.stringify(body));
    });
  };
  /**
   * Sends a XHR request with certain form data
   *
   * @param {XMLHttpRequest} xhr
   * @param {Object} data
   */


  var sendFormRequest = function sendFormRequest(xhr, data) {
    var body = new FormData();

    for (var name in data) {
      body.append(name, data[name]);
    }

    return new Promise(function (resolve, reject) {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;

          try {
            response = JSON.parse(xhr.response);
          } catch (err) {
            response = xhr.response;
          }

          resolve(response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.onerror = function () {
        return reject(xhr.response);
      };

      xhr.send(body);
    });
  };
  /**
   * Creates and sends XHR request
   *
   * @param {Object} options
   *
   * @returns Promise
   */


  function request(options) {
    var xhr = createRequest(options);
    return sendRequest(xhr, options.body);
  }

  var ChunkUploadHandler = /*#__PURE__*/function () {
    /**
     * Constructor
     *
     * @param {File} file
     * @param {Object} options
     */
    function ChunkUploadHandler(file, options) {
      _classCallCheck(this, ChunkUploadHandler);

      this.file = file;
      this.options = options;
      this.chunks = [];
      this.sessionId = null;
      this.chunkSize = null;
      this.speedInterval = null;
    }
    /**
     * Gets the max retries from options
     */


    _createClass(ChunkUploadHandler, [{
      key: "createChunks",

      /**
       * Creates all the chunks in the initial state
       */
      value: function createChunks() {
        this.chunks = [];
        var start = 0;
        var end = this.chunkSize;

        while (start < this.fileSize) {
          this.chunks.push({
            blob: this.file.file.slice(start, end),
            startOffset: start,
            active: false,
            retries: this.maxRetries
          });
          start = end;
          end = start + this.chunkSize;
        }
      }
      /**
       * Updates the progress of the file with the handler's progress
       */

    }, {
      key: "updateFileProgress",
      value: function updateFileProgress() {
        this.file.progress = this.progress;
      }
      /**
       * Paues the upload process
       * - Stops all active requests
       * - Sets the file not active
       */

    }, {
      key: "pause",
      value: function pause() {
        this.file.active = false;
        this.stopChunks();
      }
      /**
       * Stops all the current chunks
       */

    }, {
      key: "stopChunks",
      value: function stopChunks() {
        this.chunksUploading.forEach(function (chunk) {
          chunk.xhr.abort();
          chunk.active = false;
        });
        this.stopSpeedCalc();
      }
      /**
       * Resumes the file upload
       * - Sets the file active
       * - Starts the following chunks
       */

    }, {
      key: "resume",
      value: function resume() {
        this.file.active = true;
        this.startChunking();
      }
      /**
       * Starts the file upload
       *
       * @returns Promise
       * - resolve  The file was uploaded
       * - reject   The file upload failed
       */

    }, {
      key: "upload",
      value: function upload() {
        var _this = this;

        this.promise = new Promise(function (resolve, reject) {
          _this.resolve = resolve;
          _this.reject = reject;
        });
        this.start();
        return this.promise;
      }
      /**
       * Start phase
       * Sends a request to the backend to initialise the chunks
       */

    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        request({
          method: 'POST',
          headers: _objectSpread2(_objectSpread2({}, this.headers), {}, {
            'Content-Type': 'application/json'
          }),
          url: this.action,
          body: Object.assign(this.startBody, {
            phase: 'start',
            mime_type: this.fileType,
            size: this.fileSize,
            name: this.fileName
          })
        }).then(function (res) {
          if (res.status !== 'success') {
            _this2.file.response = res;
            return _this2.reject('server');
          }

          _this2.sessionId = res.data.session_id;
          _this2.chunkSize = res.data.end_offset;

          _this2.createChunks();

          _this2.startChunking();
        }).catch(function (res) {
          _this2.file.response = res;

          _this2.reject('server');
        });
      }
      /**
       * Starts to upload chunks
       */

    }, {
      key: "startChunking",
      value: function startChunking() {
        for (var i = 0; i < this.maxActiveChunks; i++) {
          this.uploadNextChunk();
        }

        this.startSpeedCalc();
      }
      /**
       * Uploads the next chunk
       * - Won't do anything if the process is paused
       * - Will start finish phase if there are no more chunks to upload
       */

    }, {
      key: "uploadNextChunk",
      value: function uploadNextChunk() {
        if (this.file.active) {
          if (this.hasChunksToUpload) {
            return this.uploadChunk(this.chunksToUpload[0]);
          }

          if (this.chunksUploading.length === 0) {
            return this.finish();
          }
        }
      }
      /**
       * Uploads a chunk
       * - Sends the chunk to the backend
       * - Sets the chunk as uploaded if everything went well
       * - Decreases the number of retries if anything went wrong
       * - Fails if there are no more retries
       *
       * @param {Object} chunk
       */

    }, {
      key: "uploadChunk",
      value: function uploadChunk(chunk) {
        var _this3 = this;

        chunk.progress = 0;
        chunk.active = true;
        this.updateFileProgress();
        chunk.xhr = createRequest({
          method: 'POST',
          headers: this.headers,
          url: this.action
        });
        chunk.xhr.upload.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {
            chunk.progress = Math.round(evt.loaded / evt.total * 100);
          }
        }, false);
        sendFormRequest(chunk.xhr, Object.assign(this.uploadBody, {
          phase: 'upload',
          session_id: this.sessionId,
          start_offset: chunk.startOffset,
          chunk: chunk.blob
        })).then(function (res) {
          chunk.active = false;

          if (res.status === 'success') {
            chunk.uploaded = true;
          } else {
            if (chunk.retries-- <= 0) {
              _this3.stopChunks();

              return _this3.reject('upload');
            }
          }

          _this3.uploadNextChunk();
        }).catch(function () {
          chunk.active = false;

          if (chunk.retries-- <= 0) {
            _this3.stopChunks();

            return _this3.reject('upload');
          }

          _this3.uploadNextChunk();
        });
      }
      /**
       * Finish phase
       * Sends a request to the backend to finish the process
       */

    }, {
      key: "finish",
      value: function finish() {
        var _this4 = this;

        this.updateFileProgress();
        this.stopSpeedCalc();
        request({
          method: 'POST',
          headers: _objectSpread2(_objectSpread2({}, this.headers), {}, {
            'Content-Type': 'application/json'
          }),
          url: this.action,
          body: Object.assign(this.finishBody, {
            phase: 'finish',
            session_id: this.sessionId
          })
        }).then(function (res) {
          _this4.file.response = res;

          if (res.status !== 'success') {
            return _this4.reject('server');
          }

          _this4.resolve(res);
        }).catch(function (res) {
          _this4.file.response = res;

          _this4.reject('server');
        });
      }
      /**
       * Sets an interval to calculate and
       * set upload speed every 3 seconds
       */

    }, {
      key: "startSpeedCalc",
      value: function startSpeedCalc() {
        var _this5 = this;

        this.file.speed = 0;
        var lastUploadedBytes = 0;

        if (!this.speedInterval) {
          this.speedInterval = window.setInterval(function () {
            var uploadedBytes = _this5.progress / 100 * _this5.fileSize;
            _this5.file.speed = uploadedBytes - lastUploadedBytes;
            lastUploadedBytes = uploadedBytes;
          }, 1000);
        }
      }
      /**
       * Removes the upload speed interval
       */

    }, {
      key: "stopSpeedCalc",
      value: function stopSpeedCalc() {
        this.speedInterval && window.clearInterval(this.speedInterval);
        this.speedInterval = null;
        this.file.speed = 0;
      }
    }, {
      key: "maxRetries",
      get: function get() {
        return parseInt(this.options.maxRetries, 10);
      }
      /**
       * Gets the max number of active chunks being uploaded at once from options
       */

    }, {
      key: "maxActiveChunks",
      get: function get() {
        return parseInt(this.options.maxActive, 10);
      }
      /**
       * Gets the file type
       */

    }, {
      key: "fileType",
      get: function get() {
        return this.file.type;
      }
      /**
       * Gets the file size
       */

    }, {
      key: "fileSize",
      get: function get() {
        return this.file.size;
      }
      /**
       * Gets the file name
       */

    }, {
      key: "fileName",
      get: function get() {
        return this.file.name;
      }
      /**
       * Gets action (url) to upload the file
       */

    }, {
      key: "action",
      get: function get() {
        return this.options.action || null;
      }
      /**
       * Gets the body to be merged when sending the request in start phase
       */

    }, {
      key: "startBody",
      get: function get() {
        return this.options.startBody || {};
      }
      /**
       * Gets the body to be merged when sending the request in upload phase
       */

    }, {
      key: "uploadBody",
      get: function get() {
        return this.options.uploadBody || {};
      }
      /**
       * Gets the body to be merged when sending the request in finish phase
       */

    }, {
      key: "finishBody",
      get: function get() {
        return this.options.finishBody || {};
      }
      /**
       * Gets the headers of the requests from options
       */

    }, {
      key: "headers",
      get: function get() {
        return this.options.headers || {};
      }
      /**
       * Whether it's ready to upload files or not
       */

    }, {
      key: "readyToUpload",
      get: function get() {
        return !!this.chunks;
      }
      /**
       * Gets the progress of the chunk upload
       * - Gets all the completed chunks
       * - Gets the progress of all the chunks that are being uploaded
       */

    }, {
      key: "progress",
      get: function get() {
        var _this6 = this;

        var completedProgress = this.chunksUploaded.length / this.chunks.length * 100;
        var uploadingProgress = this.chunksUploading.reduce(function (progress, chunk) {
          return progress + (chunk.progress | 0) / _this6.chunks.length;
        }, 0);
        return Math.min(completedProgress + uploadingProgress, 100);
      }
      /**
       * Gets all the chunks that are pending to be uploaded
       */

    }, {
      key: "chunksToUpload",
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !chunk.active && !chunk.uploaded;
        });
      }
      /**
       * Whether there are chunks to upload or not
       */

    }, {
      key: "hasChunksToUpload",
      get: function get() {
        return this.chunksToUpload.length > 0;
      }
      /**
       * Gets all the chunks that are uploading
       */

    }, {
      key: "chunksUploading",
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.xhr && !!chunk.active;
        });
      }
      /**
       * Gets all the chunks that have finished uploading
       */

    }, {
      key: "chunksUploaded",
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.uploaded;
        });
      }
    }]);

    return ChunkUploadHandler;
  }();

  var CHUNK_DEFAULT_OPTIONS = {
    headers: {},
    action: '',
    minSize: 1048576,
    maxActive: 3,
    maxRetries: 5,
    handler: ChunkUploadHandler
  };
  var script = vue.defineComponent({
    props: {
      inputId: {
        type: String
      },
      name: {
        type: String,
        default: 'file'
      },
      accept: {
        type: String
      },
      capture: {},
      disabled: {
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      },
      maximum: {
        type: Number
      },
      addIndex: {
        type: [Boolean, Number]
      },
      directory: {
        type: Boolean
      },
      createDirectory: {
        type: Boolean,
        default: false
      },
      postAction: {
        type: String
      },
      putAction: {
        type: String
      },
      customAction: {
        type: Function
      },
      headers: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      data: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      timeout: {
        type: Number,
        default: 0
      },
      drop: {
        default: false
      },
      dropDirectory: {
        type: Boolean,
        default: true
      },
      size: {
        type: Number,
        default: 0
      },
      extensions: {
        type: [RegExp, String, Array],
        default: function _default() {
          return [];
        }
      },
      modelValue: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      thread: {
        type: Number,
        default: 1
      },
      // Chunk upload enabled
      chunkEnabled: {
        type: Boolean,
        default: false
      },
      // Chunk upload properties
      chunk: {
        type: Object,
        default: function _default() {
          return CHUNK_DEFAULT_OPTIONS;
        }
      }
    },
    emits: ['update:modelValue', 'input-filter', 'input-file'],
    data: function data() {
      return {
        files: this.modelValue,
        features: {
          html5: true,
          directory: false,
          drop: false
        },
        active: false,
        dropActive: false,
        uploading: 0,
        destroy: false,
        maps: {},
        dropElement: null,
        reload: false
      };
    },

    /**
     * mounted
     * @return {[type]} [description]
     */
    mounted: function mounted() {
      var _this7 = this;

      var input = document.createElement('input');
      input.type = 'file';
      input.multiple = true; // html5 特征

      if (window.FormData && input.files) {
        // 上传目录特征
        // @ts-ignore
        if (typeof input.webkitdirectory === 'boolean' || typeof input.directory === 'boolean') {
          this.features.directory = true;
        } // 拖拽特征


        if (this.features.html5 && typeof input.ondrop !== 'undefined') {
          this.features.drop = true;
        }
      } else {
        this.features.html5 = false;
      } // files 定位缓存


      this.maps = {};

      if (this.files) {
        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        }
      } // @ts-ignore


      this.$nextTick(function () {
        // 更新下父级
        if (_this7.$parent) {
          _this7.$parent.$forceUpdate(); // 拖拽渲染


          _this7.$parent.$nextTick(function () {
            _this7.watchDrop(_this7.drop);
          });
        } else {
          // 拖拽渲染
          _this7.watchDrop(_this7.drop);
        }
      });
    },

    /**
     * beforeUnmount
     * @return {[type]} [description]
     */
    beforeUnmount: function beforeUnmount() {
      // 已销毁
      this.destroy = true; // 设置成不激活

      this.active = false; // 销毁拖拽事件

      this.watchDrop(false); // 销毁不激活

      this.watchActive(false);
    },
    computed: {
      /**
       * uploading 正在上传的线程
       * @return {[type]} [description]
       */

      /**
       * uploaded 文件列表是否全部已上传
       * @return {[type]} [description]
       */
      uploaded: function uploaded() {
        var file;

        for (var i = 0; i < this.files.length; i++) {
          file = this.files[i];

          if (file.fileObject && !file.error && !file.success) {
            return false;
          }
        }

        return true;
      },
      chunkOptions: function chunkOptions() {
        return Object.assign(CHUNK_DEFAULT_OPTIONS, this.chunk);
      },
      className: function className() {
        return ['file-uploads', this.features.html5 ? 'file-uploads-html5' : 'file-uploads-html4', this.features.directory && this.directory ? 'file-uploads-directory' : undefined, this.features.drop && this.drop ? 'file-uploads-drop' : undefined, this.disabled ? 'file-uploads-disabled' : undefined];
      },
      forId: function forId() {
        return this.inputId || this.name;
      },
      iMaximum: function iMaximum() {
        if (this.maximum === undefined) {
          return this.multiple ? 0 : 1;
        }

        return this.maximum;
      },
      iExtensions: function iExtensions() {
        if (!this.extensions) {
          return;
        }

        if (this.extensions instanceof RegExp) {
          return this.extensions;
        }

        if (!this.extensions.length) {
          return;
        }

        var exts = [];

        if (typeof this.extensions === 'string') {
          exts = this.extensions.split(',');
        } else {
          exts = this.extensions;
        }

        exts = exts.map(function (value) {
          return value.trim();
        }).filter(function (value) {
          return value;
        });
        return new RegExp('\\.(' + exts.join('|').replace(/\./g, '\\.') + ')$', 'i');
      }
    },
    watch: {
      active: function active(_active) {
        this.watchActive(_active);
      },
      dropActive: function dropActive() {
        if (this.$parent) {
          this.$parent.$forceUpdate();
        }
      },
      drop: function drop(value) {
        this.watchDrop(value);
      },
      modelValue: function modelValue(files) {
        if (this.files === files) {
          return;
        }

        this.files = files;
        var oldMaps = this.maps; // 重写 maps 缓存

        this.maps = {};

        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        } // add, update


        for (var key in this.maps) {
          var newFile = this.maps[key];
          var oldFile = oldMaps[key];

          if (newFile !== oldFile) {
            this.emitFile(newFile, oldFile);
          }
        } // delete


        for (var _key in oldMaps) {
          if (!this.maps[_key]) {
            this.emitFile(undefined, oldMaps[_key]);
          }
        }
      }
    },
    methods: {
      newId: function newId() {
        return Math.random().toString(36).substr(2);
      },
      // 清空
      clear: function clear() {
        if (this.files.length) {
          var files = this.files;
          this.files = []; // 定位

          this.maps = {}; // 事件

          this.emitInput();

          for (var i = 0; i < files.length; i++) {
            this.emitFile(undefined, files[i]);
          }
        }

        return true;
      },
      // 选择
      get: function get(id) {
        if (!id) {
          return false;
        }

        if (_typeof(id) === 'object') {
          return this.maps[id.id || ''] || false;
        }

        return this.maps[id] || false;
      },
      // 添加
      add: function add(_files, index) {
        // 不是数组整理成数组
        var files;

        if (_files instanceof Array) {
          files = _files;
        } else {
          files = [_files];
        }

        if (index === undefined) {
          // eslint-disable-next-line
          index = this.addIndex;
        } // 遍历规范对象


        var addFiles = [];

        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          if (this.features.html5 && file instanceof Blob) {
            file = {
              id: '',
              file: file,
              size: file.size,
              // @ts-ignore
              name: file.webkitRelativePath || file.relativePath || file.name || 'unknown',
              type: file.type
            };
          }

          file = file;
          var fileObject = false;
          if (file.fileObject === false) ;else if (file.fileObject) {
            fileObject = true;
          } else if (typeof Element !== 'undefined' && file.el instanceof HTMLInputElement) {
            fileObject = true;
          } else if (typeof Blob !== 'undefined' && file.file instanceof Blob) {
            fileObject = true;
          }

          if (fileObject) {
            file = _objectSpread(_objectSpread({
              fileObject: true,
              size: -1,
              name: 'Filename',
              type: '',
              active: false,
              error: '',
              success: false,
              putAction: this.putAction,
              postAction: this.postAction,
              timeout: this.timeout
            }, file), {}, {
              response: {},
              progress: '0.00',
              speed: 0
            });
            file.data = _objectSpread(_objectSpread({}, this.data), file.data ? file.data : {});
            file.headers = _objectSpread(_objectSpread({}, this.headers), file.headers ? file.headers : {});
          } // 必须包含 id


          if (!file.id) {
            file.id = this.newId();
          }

          if (this.emitFilter(file, undefined)) {
            continue;
          } // 最大数量限制


          if (this.iMaximum > 1 && addFiles.length + this.files.length >= this.iMaximum) {
            break;
          }

          addFiles.push(file); // 最大数量限制

          if (this.iMaximum === 1) {
            break;
          }
        } // 没有文件


        if (!addFiles.length) {
          return;
        } // 如果是 1 清空


        if (this.iMaximum === 1) {
          this.clear();
        } // 添加进去 files


        var newFiles;

        if (index === true || index === 0) {
          newFiles = addFiles.concat(this.files);
        } else if (index) {
          var _newFiles;

          newFiles = this.files.concat([]);

          (_newFiles = newFiles).splice.apply(_newFiles, [index, 0].concat(addFiles));
        } else {
          newFiles = this.files.concat(addFiles);
        }

        this.files = newFiles; // 定位

        for (var _i = 0; _i < addFiles.length; _i++) {
          var _file = addFiles[_i];
          this.maps[_file.id] = _file;
        } // 事件


        this.emitInput();

        for (var _i2 = 0; _i2 < addFiles.length; _i2++) {
          this.emitFile(addFiles[_i2], undefined);
        }

        return _files instanceof Array ? addFiles : addFiles[0];
      },
      // 添加表单文件
      addInputFile: function addInputFile(el) {
        var _this8 = this;

        var files = [];
        var maximumValue = this.iMaximum; // @ts-ignore

        var entrys = el.webkitEntries || el.entries || undefined;

        if (entrys !== null && entrys !== void 0 && entrys.length) {
          return this.getFileSystemEntry(entrys).then(function (files) {
            return _this8.add(files);
          });
        }

        if (el.files) {
          for (var i = 0; i < el.files.length; i++) {
            var file = el.files[i];
            files.push({
              id: '',
              size: file.size,
              // @ts-ignore
              name: file.webkitRelativePath || file.relativePath || file.name,
              type: file.type,
              file: file
            });
          }
        } else {
          var names = el.value.replace(/\\/g, '/').split('/');

          if (!names || !names.length) {
            names = [el.value];
          } // @ts-ignore


          delete el.__vuex__;
          files.push({
            id: '',
            name: names[names.length - 1],
            el: el
          });
        }

        return Promise.resolve(this.add(files));
      },
      // 添加 DataTransfer
      addDataTransfer: function addDataTransfer(dataTransfer) {
        var _dataTransfer$items,
            _this9 = this;

        // dataTransfer.items 支持
        if (dataTransfer !== null && dataTransfer !== void 0 && (_dataTransfer$items = dataTransfer.items) !== null && _dataTransfer$items !== void 0 && _dataTransfer$items.length) {
          var entrys = []; // 遍历出所有 dataTransferVueUploadItem

          for (var i = 0; i < dataTransfer.items.length; i++) {
            var dataTransferTtem = dataTransfer.items[i];
            var entry = void 0; // @ts-ignore

            if (dataTransferTtem.getAsEntry) {
              // @ts-ignore
              entry = dataTransferTtem.getAsEntry() || dataTransferTtem.getAsFile();
            } else if (dataTransferTtem.webkitGetAsEntry) {
              entry = dataTransferTtem.webkitGetAsEntry() || dataTransferTtem.getAsFile();
            } else {
              entry = dataTransferTtem.getAsFile();
            }

            if (entry) {
              entrys.push(entry);
            }
          }

          return this.getFileSystemEntry(entrys).then(function (files) {
            return _this9.add(files);
          });
        } // dataTransfer.files 支持


        var maximumValue = this.iMaximum;
        var files = [];

        if (dataTransfer.files.length) {
          for (var _i3 = 0; _i3 < dataTransfer.files.length; _i3++) {
            files.push(dataTransfer.files[_i3]);

            if (maximumValue > 0 && files.length >= maximumValue) {
              break;
            }
          }

          return Promise.resolve(this.add(files));
        }

        return Promise.resolve([]);
      },
      // 获得 entrys    
      getFileSystemEntry: function getFileSystemEntry(entry) {
        var _this10 = this;

        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        return new Promise(function (resolve) {
          var maximumValue = _this10.iMaximum;

          if (!entry) {
            resolve([]);
            return;
          }

          if (entry instanceof Array) {
            // 多个
            var uploadFiles = [];

            var forEach = function forEach(i) {
              var v = entry[i];

              if (!v || maximumValue > 0 && uploadFiles.length >= maximumValue) {
                return resolve(uploadFiles);
              }

              _this10.getFileSystemEntry(v, path).then(function (results) {
                uploadFiles.push.apply(uploadFiles, _toConsumableArray(results));
                forEach(i + 1);
              });
            };

            forEach(0);
            return;
          }

          if (entry instanceof Blob) {
            resolve([{
              id: '',
              size: entry.size,
              name: path + entry.name,
              type: entry.type,
              file: entry
            }]);
            return;
          }

          if (entry.isFile) {
            entry.file(function (file) {
              resolve([{
                id: '',
                size: file.size,
                name: path + file.name,
                type: file.type,
                file: file
              }]);
            });
            return;
          }

          if (entry.isDirectory && _this10.dropDirectory) {
            var _uploadFiles = []; // 目录也要添加到文件列表

            if (_this10.createDirectory) {
              _uploadFiles.push({
                id: '',
                name: path + entry.name,
                size: 0,
                type: 'text/directory',
                file: new File([], path + entry.name, {
                  type: 'text/directory'
                })
              });
            }

            var dirReader = entry.createReader();

            var readEntries = function readEntries() {
              dirReader.readEntries(function (entries) {
                var forEach = function forEach(i) {
                  if (!entries[i] && i === 0 || maximumValue > 0 && _uploadFiles.length >= maximumValue) {
                    return resolve(_uploadFiles);
                  }

                  if (!entries[i]) {
                    return readEntries();
                  }

                  _this10.getFileSystemEntry(entries[i], path + entry.name + '/').then(function (results) {
                    _uploadFiles.push.apply(_uploadFiles, _toConsumableArray(results));

                    forEach(i + 1);
                  });
                };

                forEach(0);
              });
            };

            readEntries();
            return;
          }

          resolve([]);
        });
      },
      // 替换
      replace: function replace(id1, id2) {
        var file1 = this.get(id1);
        var file2 = this.get(id2);

        if (!file1 || !file2 || file1 === file2) {
          return false;
        }

        var files = this.files.concat([]);
        var index1 = files.indexOf(file1);
        var index2 = files.indexOf(file2);

        if (index1 === -1 || index2 === -1) {
          return false;
        }

        files[index1] = file2;
        files[index2] = file1;
        this.files = files;
        this.emitInput();
        return true;
      },
      // 移除
      remove: function remove(id) {
        var file = this.get(id);

        if (file) {
          if (this.emitFilter(undefined, file)) {
            return false;
          }

          var files = this.files.concat([]);
          var index = files.indexOf(file);

          if (index === -1) {
            console.error('remove', file);
            return false;
          }

          files.splice(index, 1);
          this.files = files; // 定位

          delete this.maps[file.id]; // 事件

          this.emitInput();
          this.emitFile(undefined, file);
        }

        return file;
      },
      // 更新
      update: function update(id, data) {
        var file = this.get(id);

        if (file) {
          var newFile = _objectSpread(_objectSpread({}, file), data); // 停用必须加上错误


          if (file.fileObject && file.active && !newFile.active && !newFile.error && !newFile.success) {
            newFile.error = 'abort';
          }

          if (this.emitFilter(newFile, file)) {
            return false;
          }

          var files = this.files.concat([]);
          var index = files.indexOf(file);

          if (index === -1) {
            console.error('update', file);
            return false;
          }

          files.splice(index, 1, newFile);
          this.files = files; // 删除  旧定位 写入 新定位 （已便支持修改id)

          delete this.maps[file.id];
          this.maps[newFile.id] = newFile; // 事件

          this.emitInput();
          this.emitFile(newFile, file);
          return newFile;
        }

        return false;
      },
      // 预处理 事件 过滤器
      emitFilter: function emitFilter(newFile, oldFile) {
        var isPrevent = false;
        this.$emit('input-filter', newFile, oldFile, function () {
          var prevent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          isPrevent = prevent;
          return isPrevent;
        });
        return isPrevent;
      },
      // 处理后 事件 分发
      emitFile: function emitFile(newFile, oldFile) {
        var _newFile,
            _this11 = this;

        this.$emit('input-file', newFile, oldFile);

        if ((_newFile = newFile) !== null && _newFile !== void 0 && _newFile.fileObject && newFile.active && (!oldFile || !oldFile.active)) {
          this.uploading++; // 激活
          // @ts-ignore

          this.$nextTick(function () {
            setTimeout(function () {
              newFile && _this11.upload(newFile).then(function () {
                var _newFile2;

                if (newFile) {
                  // eslint-disable-next-line
                  newFile = _this11.get(newFile) || undefined;
                }

                if ((_newFile2 = newFile) !== null && _newFile2 !== void 0 && _newFile2.fileObject) {
                  _this11.update(newFile, {
                    active: false,
                    success: !newFile.error
                  });
                }
              }).catch(function (e) {
                newFile && _this11.update(newFile, {
                  active: false,
                  success: false,
                  error: e.code || e.error || e.message || e
                });
              });
            }, Math.ceil(Math.random() * 50 + 50));
          });
        } else if ((!newFile || !newFile.fileObject || !newFile.active) && oldFile && oldFile.fileObject && oldFile.active) {
          // 停止
          this.uploading--;
        } // 自动延续激活
        // @ts-ignore


        if (this.active && (Boolean(newFile) !== Boolean(oldFile) || newFile.active !== oldFile.active)) {
          this.watchActive(true);
        }
      },
      emitInput: function emitInput() {
        this.$emit('update:modelValue', this.files);
      },
      // 上传
      upload: function upload(id) {
        var file = this.get(id); // 被删除

        if (!file) {
          return Promise.reject(new Error('not_exists'));
        } // 不是文件对象


        if (!file.fileObject) {
          return Promise.reject(new Error('file_object'));
        } // 有错误直接响应


        if (file.error) {
          if (file.error instanceof Error) {
            return Promise.reject(file.error);
          }

          return Promise.reject(new Error(file.error));
        } // 已完成直接响应


        if (file.success) {
          return Promise.resolve(file);
        } // 后缀


        if (file.name && this.iExtensions) {
          if (file.name.search(this.iExtensions) === -1) {
            return Promise.reject(new Error('extension'));
          }
        } // 大小


        if (this.size > 0 && file.size !== undefined && file.size >= 0 && file.size > this.size) {
          return Promise.reject(new Error('size'));
        }

        if (this.customAction) {
          return this.customAction(file, this);
        }

        if (this.features.html5) {
          if (this.shouldUseChunkUpload(file)) {
            return this.uploadChunk(file);
          }

          if (file.putAction) {
            return this.uploadPut(file);
          }

          if (file.postAction) {
            return this.uploadHtml5(file);
          }
        }

        if (file.postAction) {
          return this.uploadHtml4(file);
        }

        return Promise.reject(new Error('No action configured'));
      },

      /**
       * Whether this file should be uploaded using chunk upload or not
       *
       * @param Object file
       */
      shouldUseChunkUpload: function shouldUseChunkUpload(file) {
        return this.chunkEnabled && !!this.chunkOptions.handler && file.size && file.size > this.chunkOptions.minSize;
      },

      /**
       * Upload a file using Chunk method
       *
       * @param File file
       */
      uploadChunk: function uploadChunk(file) {
        var HandlerClass = this.chunkOptions.handler;
        file.chunk = new HandlerClass(file, this.chunkOptions);
        return file.chunk.upload().then(function (res) {
          return file;
        });
      },
      uploadPut: function uploadPut(file) {
        var querys = [];
        var value;

        for (var key in file.data) {
          value = file.data[key];

          if (value !== null && value !== undefined) {
            querys.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        }

        var putAction = file.putAction || '';
        var queryString = querys.length ? (putAction.indexOf('?') === -1 ? '?' : '&') + querys.join('&') : '';
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', putAction + queryString);
        return this.uploadXhr(xhr, file, file.file);
      },
      uploadHtml5: function uploadHtml5(file) {
        var form = new window.FormData();
        var value;

        for (var key in file.data) {
          value = file.data[key];

          if (value && _typeof(value) === 'object' && typeof value.toString !== 'function') {
            if (value instanceof File) {
              form.append(key, value, value.name);
            } else {
              form.append(key, JSON.stringify(value));
            }
          } else if (value !== null && value !== undefined) {
            form.append(key, value);
          }
        } // @ts-ignore


        form.append(this.name, file.file, file.file.name || file.file.filename || file.name);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', file.postAction || '');
        return this.uploadXhr(xhr, file, form);
      },
      uploadXhr: function uploadXhr(xhr, ufile, body) {
        var _this12 = this;

        var file = ufile;
        var speedTime = 0;
        var speedLoaded = 0; // 进度条

        xhr.upload.onprogress = function (e) {
          // 还未开始上传 已删除 未激活
          if (!file) {
            return;
          }

          file = _this12.get(file);

          if (!e.lengthComputable || !file || !file.fileObject || !file.active) {
            return;
          } // 进度 速度 每秒更新一次


          var speedTime2 = Math.round(Date.now() / 1000);

          if (speedTime2 === speedTime) {
            return;
          }

          speedTime = speedTime2;
          file = _this12.update(file, {
            progress: (e.loaded / e.total * 100).toFixed(2),
            speed: e.loaded - speedLoaded
          });
          speedLoaded = e.loaded;
        }; // 检查激活状态


        var interval = window.setInterval(function () {
          if (file) {
            if (file = _this12.get(file)) {
              var _file2;

              if ((_file2 = file) !== null && _file2 !== void 0 && _file2.fileObject && !file.success && !file.error && file.active) {
                return;
              }
            }
          }

          if (interval) {
            clearInterval(interval);
            interval = undefined;
          }

          try {
            xhr.abort();
            xhr.timeout = 1;
          } catch (e) {}
        }, 100);
        return new Promise(function (resolve, reject) {
          if (!file) {
            reject(new Error('not_exists'));
            return;
          }

          var complete;

          var fn = function fn(e) {
            // 已经处理过了
            if (complete) {
              return;
            }

            complete = true;

            if (interval) {
              clearInterval(interval);
              interval = undefined;
            }

            if (!file) {
              return reject(new Error('not_exists'));
            }

            file = _this12.get(file); // 不存在直接响应

            if (!file) {
              return reject(new Error('not_exists'));
            } // 不是文件对象


            if (!file.fileObject) {
              return reject(new Error('file_object'));
            } // 有错误自动响应


            if (file.error) {
              if (file.error instanceof Error) {
                return reject(file.error);
              }

              return reject(new Error(file.error));
            } // 未激活


            if (!file.active) {
              return reject(new Error('abort'));
            } // 已完成 直接相应


            if (file.success) {
              return resolve(file);
            }

            var data = {};

            switch (e.type) {
              case 'timeout':
              case 'abort':
                data.error = e.type;
                break;

              case 'error':
                if (!xhr.status) {
                  data.error = 'network';
                } else if (xhr.status >= 500) {
                  data.error = 'server';
                } else if (xhr.status >= 400) {
                  data.error = 'denied';
                }

                break;

              default:
                if (xhr.status >= 500) {
                  data.error = 'server';
                } else if (xhr.status >= 400) {
                  data.error = 'denied';
                } else {
                  data.progress = '100.00';
                }

            }

            if (xhr.responseText) {
              var contentType = xhr.getResponseHeader('Content-Type');

              if (contentType && contentType.indexOf('/json') !== -1) {
                data.response = JSON.parse(xhr.responseText);
              } else {
                data.response = xhr.responseText;
              }
            } // 更新
            // @ts-ignore


            file = _this12.update(file, data);

            if (!file) {
              return reject(new Error('abort'));
            } // 有错误自动响应


            if (file.error) {
              if (file.error instanceof Error) {
                return reject(file.error);
              }

              return reject(new Error(file.error));
            } // 响应


            return resolve(file);
          }; // 事件


          xhr.onload = fn;
          xhr.onerror = fn;
          xhr.onabort = fn;
          xhr.ontimeout = fn; // 超时

          if (file.timeout) {
            xhr.timeout = file.timeout;
          } // headers


          for (var key in file.headers) {
            xhr.setRequestHeader(key, file.headers[key]);
          } // 更新 xhr
          // @ts-ignore


          file = _this12.update(file, {
            xhr: xhr
          }); // 开始上传

          file && xhr.send(body);
        });
      },
      uploadHtml4: function uploadHtml4(ufile) {
        var _this13 = this;

        var file = ufile;

        if (!file) {
          return Promise.reject(new Error('not_exists'));
        }

        var onKeydown = function onKeydown(e) {
          if (e.keyCode === 27) {
            e.preventDefault();
          }
        };

        var iframe = document.createElement('iframe');
        iframe.id = 'upload-iframe-' + file.id;
        iframe.name = 'upload-iframe-' + file.id;
        iframe.src = 'about:blank';
        iframe.setAttribute('style', 'width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;');
        var form = document.createElement('form');
        form.setAttribute('action', file.postAction || '');
        form.name = 'upload-form-' + file.id;
        form.setAttribute('method', 'POST');
        form.setAttribute('target', 'upload-iframe-' + file.id);
        form.setAttribute('enctype', 'multipart/form-data');

        for (var key in file.data) {
          var value = file.data[key];

          if (value && _typeof(value) === 'object' && typeof value.toString !== 'function') {
            value = JSON.stringify(value);
          }

          if (value !== null && value !== undefined) {
            var el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = value;
            form.appendChild(el);
          }
        }

        form.appendChild(file.el);
        document.body.appendChild(iframe).appendChild(form);

        var getResponseData = function getResponseData() {
          var _doc;

          var doc;

          try {
            if (iframe.contentWindow) {
              doc = iframe.contentWindow.document;
            }
          } catch (err) {}

          if (!doc) {
            try {
              // @ts-ignore
              doc = iframe.contentDocument ? iframe.contentDocument : iframe.document;
            } catch (err) {
              // @ts-ignore
              doc = iframe.document;
            }
          } // @ts-ignore


          if ((_doc = doc) !== null && _doc !== void 0 && _doc.body) {
            return doc.body.innerHTML;
          }

          return null;
        };

        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            if (!file) {
              reject(new Error('not_exists'));
              return;
            }

            file = _this13.update(file, {
              iframe: iframe
            }); // 不存在

            if (!file) {
              return reject(new Error('not_exists'));
            } // 定时检查


            var interval = window.setInterval(function () {
              if (file) {
                if (file = _this13.get(file)) {
                  if (file.fileObject && !file.success && !file.error && file.active) {
                    return;
                  }
                }
              }

              if (interval) {
                clearInterval(interval);
                interval = undefined;
              } // @ts-ignore


              iframe.onabort({
                type: file ? 'abort' : 'not_exists'
              });
            }, 100);
            var complete;

            var fn = function fn(e) {
              var _file3;

              // 已经处理过了
              if (complete) {
                return;
              }

              complete = true;

              if (interval) {
                clearInterval(interval);
                interval = undefined;
              } // 关闭 esc 事件


              document.body.removeEventListener('keydown', onKeydown);

              if (!file) {
                return reject(new Error('not_exists'));
              }

              file = _this13.get(file); // 不存在直接响应

              if (!file) {
                return reject(new Error('not_exists'));
              } // 不是文件对象


              if (!file.fileObject) {
                return reject(new Error('file_object'));
              } // 有错误自动响应


              if (file.error) {
                if (file.error instanceof Error) {
                  return reject(file.error);
                }

                return reject(new Error(file.error));
              } // 未激活


              if (!file.active) {
                return reject(new Error('abort'));
              } // 已完成 直接相应


              if (file.success) {
                return resolve(file);
              }

              var response = getResponseData();
              var data = {};

              if (typeof e === 'string') {
                return reject(new Error(e));
              }

              switch (e.type) {
                case 'abort':
                  data.error = 'abort';
                  break;

                case 'error':
                  if (file.error) {
                    data.error = file.error;
                  } else if (response === null) {
                    data.error = 'network';
                  } else {
                    data.error = 'denied';
                  }

                  break;

                default:
                  if (file.error) {
                    data.error = file.error;
                  } else if (response === null) {
                    data.error = 'network';
                  } else {
                    data.progress = '100.00';
                  }

              }

              if (response !== null) {
                if (response && response.substr(0, 1) === '{' && response.substr(response.length - 1, 1) === '}') {
                  try {
                    response = JSON.parse(response);
                  } catch (err) {}
                }

                data.response = response;
              } // 更新


              file = _this13.update(file, data);

              if (!file) {
                return reject(new Error('not_exists'));
              }

              if ((_file3 = file) !== null && _file3 !== void 0 && _file3.error) {
                if (file.error instanceof Error) {
                  return reject(file.error);
                }

                return reject(new Error(file.error));
              } // 响应


              return resolve(file);
            }; // 添加事件


            iframe.onload = fn;
            iframe.onerror = fn;
            iframe.onabort = fn; // 禁止 esc 键

            document.body.addEventListener('keydown', onKeydown); // 提交

            form.submit();
          }, 50);
        }).then(function (res) {
          var _iframe$parentNode;

          iframe === null || iframe === void 0 ? void 0 : (_iframe$parentNode = iframe.parentNode) === null || _iframe$parentNode === void 0 ? void 0 : _iframe$parentNode.removeChild(iframe);
          return res;
        }).catch(function (res) {
          var _iframe$parentNode2;

          iframe === null || iframe === void 0 ? void 0 : (_iframe$parentNode2 = iframe.parentNode) === null || _iframe$parentNode2 === void 0 ? void 0 : _iframe$parentNode2.removeChild(iframe);
          return res;
        });
      },
      watchActive: function watchActive(active) {
        var file;
        var index = 0;

        while (file = this.files[index]) {
          index++;
          if (!file.fileObject) ;else if (active && !this.destroy) {
            if (this.uploading >= this.thread || this.uploading && !this.features.html5) {
              break;
            }

            if (!file.active && !file.error && !file.success) {
              this.update(file, {
                active: true
              });
            }
          } else {
            if (file.active) {
              this.update(file, {
                active: false
              });
            }
          }
        }

        if (this.uploading === 0) {
          this.active = false;
        }
      },
      watchDrop: function watchDrop(newDrop) {
        var oldDrop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (!this.features.drop) {
          return;
        }

        if (newDrop === oldDrop) {
          return;
        } // 移除挂载


        if (this.dropElement) {
          try {
            document.removeEventListener('dragenter', this.onDragenter, false);
            document.removeEventListener('dragleave', this.onDragleave, false);
            document.removeEventListener('drop', this.onDocumentDrop, false);
            this.dropElement.removeEventListener('dragover', this.onDragover, false);
            this.dropElement.removeEventListener('drop', this.onDrop, false);
          } catch (e) {}
        }

        var el = null;
        if (!newDrop) ;else if (typeof newDrop === 'string') {
          // @ts-ignore
          el = document.querySelector(newDrop) || this.$root.$el.querySelector(newDrop);
        } else if (newDrop === true) {
          // @ts-ignore
          el = this.$parent.$el;
        } else {
          el = newDrop;
        }
        this.dropElement = el;

        if (this.dropElement) {
          document.addEventListener('dragenter', this.onDragenter, false);
          document.addEventListener('dragleave', this.onDragleave, false);
          document.addEventListener('drop', this.onDocumentDrop, false);
          this.dropElement.addEventListener('dragover', this.onDragover, false);
          this.dropElement.addEventListener('drop', this.onDrop, false);
        }
      },
      onDragenter: function onDragenter(e) {
        var _dt$files, _dt$types;

        e.preventDefault();

        if (this.dropActive) {
          return;
        }

        if (!e.dataTransfer) {
          return;
        }

        var dt = e.dataTransfer;

        if (dt !== null && dt !== void 0 && (_dt$files = dt.files) !== null && _dt$files !== void 0 && _dt$files.length) {
          this.dropActive = true;
        } else if (!dt.types) {
          this.dropActive = true;
        } else if (dt.types.indexOf && dt.types.indexOf('Files') !== -1) {
          this.dropActive = true; // @ts-ignore
        } else if ((_dt$types = dt.types) !== null && _dt$types !== void 0 && _dt$types.contains && dt.types.contains('Files')) {
          this.dropActive = true;
        }
      },
      onDragleave: function onDragleave(e) {
        e.preventDefault();

        if (!this.dropActive) {
          return;
        } // @ts-ignore


        if (e.target.nodeName === 'HTML' || e.target === e.explicitOriginalTarget || !e.fromElement && (e.clientX <= 0 || e.clientY <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
          this.dropActive = false;
        }
      },
      onDragover: function onDragover(e) {
        e.preventDefault();
      },
      onDocumentDrop: function onDocumentDrop() {
        this.dropActive = false;
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        e.dataTransfer && this.addDataTransfer(e.dataTransfer);
      },
      inputOnChange: async function inputOnChange(e) {
        var _this14 = this;

        if (!(e.target instanceof HTMLInputElement)) {
          return Promise.reject(new Error("not HTMLInputElement"));
        }

        var target = e.target;

        var reinput = function reinput(res) {
          _this14.reload = true; // @ts-ignore

          _this14.$nextTick(function () {
            _this14.reload = false;
          });

          return res;
        };

        return this.addInputFile(e.target).then(reinput).catch(reinput);
      }
    }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("span", {
      class: _ctx.className
    }, [vue.renderSlot(_ctx.$slots, "default"), vue.createVNode("label", {
      for: _ctx.forId
    }, null, 8, ["for"]), !_ctx.reload ? (vue.openBlock(), vue.createBlock("input", {
      key: 0,
      ref: "input",
      type: "file",
      name: _ctx.name,
      id: _ctx.forId,
      accept: _ctx.accept,
      capture: _ctx.capture,
      disabled: _ctx.disabled,
      webkitdirectory: _ctx.directory && _ctx.features.directory,
      allowdirs: _ctx.directory && _ctx.features.directory,
      directory: _ctx.directory && _ctx.features.directory,
      multiple: _ctx.multiple && _ctx.features.html5,
      onChange: _cache[1] || (_cache[1] = function () {
        return _ctx.inputOnChange && _ctx.inputOnChange.apply(_ctx, arguments);
      })
    }, null, 40, ["name", "id", "accept", "capture", "disabled", "webkitdirectory", "allowdirs", "directory", "multiple"])) : vue.createCommentVNode("", true)], 2);
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "\n.file-uploads {\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  display: inline-block;\n}\n.file-uploads.file-uploads-html4 input, .file-uploads.file-uploads-html5 label {\n  /* background fix ie  click */\n  background: #fff;\n  opacity: 0;\n  font-size: 20em;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.file-uploads.file-uploads-html5 input, .file-uploads.file-uploads-html4 label {\n  /* background fix ie  click */\n  background: rgba(255, 255, 255, 0);\n  overflow: hidden;\n  position: fixed;\n  width: 1px;\n  height: 1px;\n  z-index: -1;\n  opacity: 0;\n}\n";
  styleInject(css_248z);
  script.render = render;

  return script;

})));
//# sourceMappingURL=vue-upload-component.js.map


/***/ })

}]);