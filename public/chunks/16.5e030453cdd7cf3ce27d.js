webpackJsonp([16],{

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(522)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(524)
/* template */
var __vue_template__ = __webpack_require__(525)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14adfcd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/seller/profile/profile_basic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14adfcd8", Component.options)
  } else {
    hotAPI.reload("data-v-14adfcd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(523);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1bad89bd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14adfcd8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile_basic.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14adfcd8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile_basic.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

throw new Error("Module build failed: CssSyntaxError: /Users/apple/Desktop/buskool/incobac-new-cli/resources/assets/js/components/dashboard/seller/profile/profile_basic.vue:5:1: Unknown word\n    at Input.error (/Users/apple/Desktop/buskool/incobac-new-cli/node_modules/postcss/lib/input.js:113:22)\n    at Parser.unknownWord (/Users/apple/Desktop/buskool/incobac-new-cli/node_modules/postcss/lib/parser.js:488:26)\n    at Parser.other (/Users/apple/Desktop/buskool/incobac-new-cli/node_modules/postcss/lib/parser.js:171:18)\n    at Parser.parse (/Users/apple/Desktop/buskool/incobac-new-cli/node_modules/postcss/lib/parser.js:84:26)\n    at parse (/Users/apple/Desktop/buskool/incobac-new-cli/node_modules/postcss/lib/parse.js:24:16)\n    at new LazyResult (/Users/apple/Desktop/buskool/incobac-new-cli/node_modules/postcss/lib/lazy-result.js:70:24)\n    at Processor.process (/Users/apple/Desktop/buskool/incobac-new-cli/node_modules/postcss/lib/processor.js:117:12)\n    at loadPostcssConfig.then.config (/Users/apple/Desktop/buskool/incobac-new-cli/node_modules/vue-loader/lib/style-compiler/index.js:61:10)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)");

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { eventBus } from "../../../../router/router";
// import UploadFile from "../../upload-image";

// export default {
//   props: ["str"],
//   components: {
//     UploadFile,
//   },
//   data: function () {
//     return {
//       currentUser: {
//         profile: {
//           is_company: "",
//           company_name: "",
//           company_register_code: "",
//           address: "",
//           public_phone: "",
//           profile_photo: "",
//           postal_code: "",
//           shaba_code: "",
//         },
//         user_info: "",
//         relateds: "",
//         certificates: "",
//       },
//       profileBasicFields: [
//         "is_company",
//         "company_name",
//         "company_register_code",
//         "public_phone",
//         "address",
//         "postal_code",
//         "shaba_code",
//       ],
//       profileComplementaryFields: [
//         "is_company",
//         "company_name",
//         "company_register_code",
//         "public_phone",
//         "description",
//       ],
//       profilePhoto: "",
//       errors: "",
//       popUpMsg: "",
//       items: [
//         {
//           message: "پروفایل",
//           url: "profileBasicSeller",
//         },
//         {
//           message: "احراز هویت",
//           url: "profileBasicSellerVeficiation",
//         },
//       ],
//       relatedFiles: [],
//       certificateFiles: [],
//       relatedFilesReset: false,
//       certificateFilesReset: false,
//       formEnabled: false,
//       rankState: {
//         is_company: 12,
//         company_name: 11,
//         company_register_code: 11,
//         public_phone: 11,
//         address: 11,
//         description: 11,
//         profile_photo: 11,
//         certificates: 11,
//         relateds: 11,
//       },
//       completeProfileProgress: 0,
//       uploadPercentage: 0,
//     };
//   },
//   methods: {
//     init: function () {
//       this.isLoaded = true;
//       $('input[type="file"]').imageuploadify();
//       var self = this;
//       axios.post("/user/profile_info").then(function (response) {
//         self.currentUser = response.data;
//         self.sumProgressNumber();
//       });
//     },
//     RegisterBasicProfileInfo: function () {
//       eventBus.$emit("submiting", true);
//       this.errors = "";
//       var self = this;
//       var data = new FormData();

//       for (var i = 0, cnt = this.profileBasicFields.length; i < cnt; i++) {
//         if (this.currentUser.profile[this.profileBasicFields[i]] != null) {
//           data.append(
//             this.profileBasicFields[i],
//             this.toLatinNumbers(
//               this.currentUser.profile[this.profileBasicFields[i]]
//             )
//           );
//         }
//       }

//       // Complementary  form check

//       for (var i = 0; i < this.profileComplementaryFields.length; i++) {
//         if (
//           this.profileComplementaryFields[i] === "description" &&
//           (this.currentUser.profile["description"] == null ||
//             this.currentUser.profile["description"] === "")
//         ) {
//           continue;
//         }
//         data.append(
//           this.profileComplementaryFields[i],
//           this.currentUser.profile[this.profileComplementaryFields[i]]
//         );
//       }

//       for (var i = 0; i < this.relatedFiles.length; i++) {
//         let file = this.relatedFiles[i];
//         data.append("related_" + i, file.file);
//       }

//       for (var i = 0; i < this.certificateFiles.length; i++) {
//         let file = this.certificateFiles[i];
//         data.append("certificate_" + i, file.file);
//       }

//       data.append("related_image_count", this.relatedFiles.length);
//       data.append("certificate_image_count", this.certificateFiles.length);

//       // end Complementary  form check

//       let profilePhoto = this.$refs.profilePhoto.files[0];
//       if (profilePhoto) {
//         data.append("profile_photo", profilePhoto);
//       }
//       axios
//         .post("/user/profile_modification", data, {
//           headers: {
//             "X-Requested-With": "XMLHttpRequest",
//             "Content-Type": "application/json",
//           },
//           onUploadProgress: function (progressEvent) {
//             this.uploadPercentage = parseInt(
//               Math.round((progressEvent.loaded * 100) / progressEvent.total)
//             );
//           }.bind(this),
//         })
//         .then(function (response) {
//           if (response.status === 200) {
//             eventBus.$emit("submiting", false);
//             eventBus.$emit("uploadPercentage", 0);
//             eventBus.$emit("modal", "profileEditSuccess");
//             self.relatedFilesReset = true;
//             self.certificateFilesReset = true;
//             axios.post("/user/profile_info").then(function (response) {
//               self.currentUser = response.data;
//               self.sumProgressNumber();
//             });
//           }
//           self.submiting = false;
//         })
//         .catch(function (err) {
//           self.scrollToTop();
//           if (err.response.status === 413) {
//             self.popUpMsg =
//               "اندازه تصاویر بزرگ تر 5  از مگابایت است یا فرمت مناسبی ندارد";
//             eventBus.$emit("submitSuccess", self.popUpMsg);
//             $("#custom-main-modal").modal("show");
//           }

//           self.errors = "";
//           self.errors = err.response.data.errors;

//           let tmpArray = Object.keys(self.errors);
//           //console.log((tmpArray.join() + "").includes('related') || (tmpArray.join() + "").includes('certificate') );
//           if (
//             (tmpArray.join() + "").includes("related") ||
//             (tmpArray.join() + "").includes("certificate")
//           ) {
//             eventBus.$emit("submiting", false);
//             eventBus.$emit("uploadPercentage", 0);
//             self.popUpMsg =
//               "اندازه تصاویر بزرگ تر 5  از مگابایت است یا فرمت مناسبی ندارد";
//             eventBus.$emit("submitSuccess", self.popUpMsg);
//             $("#custom-main-modal").modal("show");
//           }
//           eventBus.$emit("submiting", false);
//           eventBus.$emit("uploadPercentage", 0);
//         });
//     },
//     toLatinNumbers: function (num) {
//       if (num == null) {
//         return null;
//       }

//       return num
//         .toString()
//         .replace(/[\u0660-\u0669]/g, function (c) {
//           return c.charCodeAt(0) - 0x0660;
//         })
//         .replace(/[\u06f0-\u06f9]/g, function (c) {
//           return c.charCodeAt(0) - 0x06f0;
//         });
//     },
//     disableForm: function () {
//       var companyNumber = $("#company-number");
//       var companyName = $("#company-name");

//       this.currentUser.profile.company_register_code = "";
//       this.currentUser.profile.company_name = "";

//       companyNumber.attr("disabled", true);
//       companyName.attr("disabled", true);
//       this.formEnabled = false;
//     },
//     enableForm: function () {
//       var companyNumber = $("#company-number");
//       var companyName = $("#company-name");
//       companyName.val("");
//       companyNumber.prop("disabled", false);
//       companyName.prop("disabled", false);
//       this.formEnabled = true;
//     },
//     sumProgressNumber() {
//       this.completeProfileProgress = 0;

//       if (this.currentUser.profile.is_company) {
//         this.completeProfileProgress += this.rankState.is_company;
//       }
//       if (this.currentUser.profile.company_name) {
//         this.completeProfileProgress += this.rankState.company_name;
//       }
//       if (this.currentUser.profile.company_register_code) {
//         this.completeProfileProgress += this.rankState.company_register_code;
//       }
//       if (this.currentUser.profile.address) {
//         this.completeProfileProgress += this.rankState.address;
//       }
//       if (this.currentUser.profile.public_phone) {
//         this.completeProfileProgress += this.rankState.public_phone;
//       }
//       if (this.currentUser.profile.description) {
//         this.completeProfileProgress += this.rankState.description;
//       }
//       if (this.currentUser.profile.profile_photo) {
//         this.completeProfileProgress += this.rankState.profile_photo;
//       }

//       if (this.currentUser.certificates.length) {
//         this.completeProfileProgress += this.rankState.certificates;
//       }
//       if (this.currentUser.relateds.length) {
//         this.completeProfileProgress += this.rankState.relateds;
//       }
//     },
//     isOsIOS: function () {
//       var userAgent = window.navigator.userAgent.toLowerCase(),
//         safari = /safari/.test(userAgent),
//         ios = /iphone|ipod|ipad/.test(userAgent);

//       return ios;
//     },
//     scrollToTop() {
//       window.scrollTo(0, 0);
//     },
//   },
//   mounted() {
//     this.init();
//     eventBus.$emit("subHeader", this.items);
//     var self = this;
//     function show_image_preview(input) {
//       if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         var image = $(".image-preview");
//         var iconProfile = $("#icon-pro");
//         reader.onload = function (e) {
//           image.attr("src", e.target.result);
//           image.css("display", "inline");
//           iconProfile.css("display", "none");
//         };
//         reader.readAsDataURL(input.files[0]);
//       }
//     }

//     function image_checked() {
//       var image = $(".image-preview");
//       var iconProfile = $("#icon-pro");
//       if (image.attr("src") !== "") {
//         image.css("display", "inline");
//         iconProfile.css("display", "none");
//       }
//     }

//     image_checked();

//     $("#imgInp").change(function () {
//       show_image_preview(this);
//     });
//     if (this.isOsIOS()) {
//       $("#phone-number").attr("type", "text");
//       $("#company-number").attr("type", "text");
//     }
//   },
//   created() {
//     gtag("config", "UA-129398000-1", { page_path: "/profile-basic" });
//   },
//   watch: {
//     uploadPercentage: function () {
//       eventBus.$emit("uploadPercentage", this.uploadPercentage);
//     },
//     "currentUser.profile.is_company": function (value) {
//       if (value == 1) {
//         this.enableForm();
//       } else {
//         this.disableForm();
//       }
//     },
//     "currentUser.profile.company_register_code": function (value) {
//       this.currentUser.profile.company_register_code = this.toLatinNumbers(
//         value
//       );
//     },
//     completeProfileProgress: function (value) {
//       $(".custom-progress").css("width", value + "%");
//     },
//   },
// };
//

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function(){},staticRenderFns:[]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14adfcd8", module.exports)
  }
}

/***/ })

});