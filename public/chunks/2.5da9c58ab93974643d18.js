webpackJsonp([2],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(764)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(766)
/* template */
var __vue_template__ = __webpack_require__(777)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c5ebe4ce"
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
Component.options.__file = "resources/assets/js/components/layouts/main/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5ebe4ce", Component.options)
  } else {
    hotAPI.reload("data-v-c5ebe4ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "/images/loading.gif?36a44a255896f2fb037f388ad92a4323";

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = "/images/web-logo.svg?b986ac3ee95fbc6d3331a8f1f15faea3";

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(765);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("905f23a4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5ebe4ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5ebe4ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n/*general styles*/\nh1[data-v-c5ebe4ce],\nh2[data-v-c5ebe4ce],\nh3[data-v-c5ebe4ce],\nh4[data-v-c5ebe4ce],\np[data-v-c5ebe4ce],\ndiv[data-v-c5ebe4ce],\nspan[data-v-c5ebe4ce] {\n  line-height: 1.618;\n}\np[data-v-c5ebe4ce] {\n  font-size: 14px;\n}\nh1[data-v-c5ebe4ce] {\n  font-size: 26px;\n\n  font-weight: 500;\n}\nh2[data-v-c5ebe4ce] {\n  font-size: 17px;\n\n  font-weight: normal;\n}\ni[data-v-c5ebe4ce] {\n  position: relative;\n  top: 1px;\n  padding: 0 2px;\n}\n#main-content[data-v-c5ebe4ce] {\n  margin-bottom: -60px;\n}\n.hidden[data-v-c5ebe4ce] {\n  display: none !important;\n}\n#intro[data-v-c5ebe4ce]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(25, 102, 142, 0.4);\n  background: radial-gradient(\n    circle,\n    rgba(0, 0, 0, 0.2) 0%,\n    rgba(0, 0, 0, 0.4) 100%\n  );\n  z-index: 0;\n}\n#intro > div[data-v-c5ebe4ce] {\n  position: relative;\n  z-index: 1;\n}\n.box-content[data-v-c5ebe4ce] {\n  overflow: hidden;\n  background: #fff;\n  padding: 15px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n}\n.title-box[data-v-c5ebe4ce] {\n  text-align: center;\n}\n.title-box h3[data-v-c5ebe4ce] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #4b4b4b;\n  margin-bottom: 12px;\n}\n.title-box a[data-v-c5ebe4ce] {\n  margin: 20px auto 10px;\n  width: inherit;\n  font-size: 17px;\n  border-radius: 8px;\n  padding: 7px 22px 6px;\n  direction: rtl;\n  font-weight: normal;\n}\n.title-box a i[data-v-c5ebe4ce] {\n  top: 3px;\n}\n.title-box p[data-v-c5ebe4ce] {\n  margin-top: 20px;\n  font-size: 15px;\n  text-align: right;\n  line-height: 28px;\n}\n.section-wrapper[data-v-c5ebe4ce] {\n  margin-top: 30px;\n}\n.section-wrapper .title-box[data-v-c5ebe4ce] {\n  text-align: right;\n\n  margin-top: 85px;\n}\n.product-hidden[data-v-c5ebe4ce] {\n  display: none;\n}\n\n/*intro section style */\n#intro[data-v-c5ebe4ce] {\n  margin-top: 93px;\n\n  text-align: center;\n\n  padding: 25px 15px;\n\n  direction: rtl;\n\n  position: relative;\n  background-color: #404b55;\n}\n#intro h1[data-v-c5ebe4ce] {\n  margin-top: 18px;\n  font-size: 30px;\n  margin-bottom: 16px;\n}\n#intro h1[data-v-c5ebe4ce],\n#intro h2[data-v-c5ebe4ce] {\n  color: #fff;\n  font-weight: bold;\n}\n#intro h2[data-v-c5ebe4ce] {\n  margin-bottom: 16px;\n  font-size: 15px;\n}\n.search-wrapper[data-v-c5ebe4ce] {\n  position: relative;\n\n  max-width: 593px;\n\n  margin: 0 auto;\n}\n.hero-search-input[data-v-c5ebe4ce] {\n  display: block;\n  min-width: 455px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 8px;\n  margin: 35px auto 0;\n  max-width: 670px;\n}\n.hero-search-input input[data-v-c5ebe4ce] {\n  padding: 11px 15px;\n  border-radius: 12px;\n  margin: 0;\n  float: right;\n  border: none;\n  font-size: 16px;\n}\n.hero-search-input button[data-v-c5ebe4ce] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n\n  border: none;\n\n  margin: 0;\n\n  padding: 16px 31px;\n\n  color: #fff;\n\n  background: #000546;\n\n  border-radius: 8px 0 0 8px;\n\n  position: absolute;\n\n  left: 0;\n\n  top: 0;\n\n  font-size: 20px;\n}\n.hero-search-input button[data-v-c5ebe4ce]:hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  padding-left: 33px;\n  padding-right: 33px;\n}\n.hero-search-input button[data-v-c5ebe4ce]:before {\n  position: relative;\n\n  top: 2px;\n}\n.main-cta-page[data-v-c5ebe4ce] {\n  font-size: 17px;\n  border-radius: 8px;\n  padding: 7px 22px 6px;\n  direction: rtl;\n  font-weight: normal;\n  margin: 20px auto 0;\n  display: block;\n  max-width: 270px;\n}\n#intro a.green-button[data-v-c5ebe4ce] {\n  font-size: 20px;\n  margin: 0 auto;\n  width: initial;\n  padding: 13px 33px;\n  font-weight: 400;\n  line-height: 1;\n  border-radius: 12px;\n  margin-top: 62px;\n  margin-bottom: 30px;\n}\n#intro a.green-button i[data-v-c5ebe4ce] {\n  font-size: 21px;\n  top: 3px;\n}\n\n/*sub navigation styles*/\n.last-buyAds-carousel[data-v-c5ebe4ce] {\n  z-index: 0;\n}\n.secondary-nav-wrapper[data-v-c5ebe4ce] {\n  background: #fff;\n\n  color: #4b4b4b;\n\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);\n\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);\n\n  direction: rtl;\n\n  text-align: center;\n}\n.category-item[data-v-c5ebe4ce] {\n  font-size: 16px;\n\n  color: #777;\n\n  padding: 7px 50px 13px;\n\n  display: inline-block;\n\n  line-height: 1.618;\n\n  position: relative;\n\n  font-weight: bold;\n}\n.category-item i[data-v-c5ebe4ce]:before {\n  position: relative;\n\n  right: 5px;\n\n  top: 2px;\n}\n.sub-category-item[data-v-c5ebe4ce]:hover {\n  background: #00c569;\n  border-color: #00c569;\n  color: #fff;\n}\n.sub-category-item[data-v-c5ebe4ce] {\n  font-size: 15px;\n  color: #5f6368;\n  display: inline-block;\n  line-height: 1.618;\n  position: relative;\n  padding: 5px 0px;\n  width: 100%;\n  background: #fff;\n  border-radius: 8px;\n  margin-top: 20px;\n  border: 1px solid #ddd;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.product-link.green-button[data-v-c5ebe4ce] {\n  width: initial;\n\n  margin: 0;\n\n  font-size: 14px;\n\n  font-weight: bold;\n}\n.product-link.green-button i[data-v-c5ebe4ce] {\n  position: relative;\n  top: 3px;\n  right: 5px;\n}\nnav[data-v-c5ebe4ce] {\n  position: relative;\n}\nnav li[data-v-c5ebe4ce] {\n  opacity: 0;\n\n  cursor: pointer;\n}\nnav li.active > h2 a[data-v-c5ebe4ce]:before {\n  content: \" \";\n\n  background: #00c569;\n\n  width: 100%;\n\n  display: block;\n\n  position: absolute;\n\n  left: 0;\n\n  bottom: 0;\n\n  height: 3px;\n}\nnav li.active > h2 a[data-v-c5ebe4ce]:after {\n  content: \" \";\n\n  display: inline-block;\n\n  width: 0;\n\n  height: 0;\n\n  border-style: solid;\n\n  border-width: 8px 8px 0 8px;\n\n  border-color: #00c569 transparent transparent transparent;\n\n  position: absolute;\n\n  bottom: -8px;\n\n  left: calc(50% - 8px);\n\n  z-index: 1001;\n}\nnav li > ul[data-v-c5ebe4ce] {\n  position: absolute;\n\n  pointer-events: none;\n\n  left: 0;\n\n  opacity: 0;\n\n  -webkit-transition: 500ms;\n\n  transition: 500ms;\n\n  border: 1px solid #f1f1f1;\n}\nnav > ul > li[data-v-c5ebe4ce] {\n  opacity: 1;\n\n  padding: 0;\n\n  direction: ltr;\n\n  -webkit-transition: 500ms;\n\n  transition: 500ms;\n}\nli.active > ul[data-v-c5ebe4ce] {\n  opacity: 1;\n\n  pointer-events: initial;\n\n  background: #fff;\n\n  border-radius: 0 0 4px 4px;\n\n  -webkit-box-shadow: 0 5px 6px rgba(0, 0, 0, 0.07);\n\n          box-shadow: 0 5px 6px rgba(0, 0, 0, 0.07);\n\n  padding: 20px 15px;\n\n  z-index: 1000;\n}\nli.active > ul > li[data-v-c5ebe4ce],\nul:hover > li[data-v-c5ebe4ce] {\n  opacity: 1;\n}\nnav > ul > li li ul[data-v-c5ebe4ce] {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  top: 0;\n  right: 0;\n}\nnav > ul > li > ul > li[data-v-c5ebe4ce] {\n  -webkit-transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: transform 0.4s, opacity 0.4s;\n  transition: transform 0.4s, opacity 0.4s, -webkit-transform 0.4s;\n  -webkit-transform: translateY(150%);\n          transform: translateY(150%);\n  opacity: 0;\n}\nnav > ul > li.active > ul > li[data-v-c5ebe4ce] {\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n  opacity: 1;\n}\nli > ul > li > ul > li[data-v-c5ebe4ce] {\n  -webkit-transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: transform 0.4s, opacity 0.4s;\n  transition: transform 0.4s, opacity 0.4s, -webkit-transform 0.4s;\n  -webkit-transform: translateX(195px) translateY(0%);\n          transform: translateX(195px) translateY(0%);\n  opacity: 0;\n}\nli > ul > li.active > ul > li[data-v-c5ebe4ce] {\n  -webkit-transform: translateX(0) translateY(0%);\n          transform: translateX(0) translateY(0%);\n  opacity: 1;\n}\n.default-item.carousel-item[data-v-c5ebe4ce] {\n  padding: 0;\n  text-align: center;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #f0f0f1;\n  margin-bottom: 20px;\n}\n\n/*requests section style*/\n.requests-contents[data-v-c5ebe4ce] {\n  padding: 0;\n  margin-top: 20px;\n  overflow: hidden;\n  padding-bottom: 10px;\n}\n.buyAds-placeholder[data-v-c5ebe4ce] {\n  border: 1px solid #ddd;\n  padding: 8px 11px 10px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  background: #fdfdfd !important;\n  overflow: hidden;\n}\n.wrapper_no_pro[data-v-c5ebe4ce] {\n  text-align: center;\n  font-size: 23px;\n  padding: 15px 0;\n}\n.content_no_pic[data-v-c5ebe4ce] {\n  font-size: 70px;\n  margin: 20px auto;\n  color: #bdbdbd;\n}\n.text_no_pic[data-v-c5ebe4ce] {\n  margin: 30px auto;\n  color: #bdbdbd;\n}\n.list-time[data-v-c5ebe4ce] {\n  direction: rtl;\n}\n.list-title[data-v-c5ebe4ce],\n.needs[data-v-c5ebe4ce],\n.list-time[data-v-c5ebe4ce] {\n  float: right;\n  text-align: center;\n  line-height: 1.618;\n  font-weight: bold;\n  padding: 0;\n  padding-top: 5px;\n}\n.list-group-item[data-v-c5ebe4ce] {\n  border: 1px solid #ddd;\n\n  padding: 7px 0;\n}\n.list-group-item a[data-v-c5ebe4ce] {\n  margin: 0;\n\n  width: initial;\n\n  padding: 6px 15px 9px;\n\n  direction: rtl;\n\n  font-size: 14px;\n\n  font-weight: bold;\n}\n.main-content > ul[data-v-c5ebe4ce] {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 10px #e1e1e1;\n          box-shadow: 0 0 10px #e1e1e1;\n  overflow: hidden;\n}\n.main-content .list-group-item p[data-v-c5ebe4ce] {\n  text-align: center;\n  direction: rtl;\n}\n#main.little-main[data-v-c5ebe4ce] {\n  margin-right: 80px;\n}\n.message-list[data-v-c5ebe4ce] {\n  padding: 19px;\n  text-align: center;\n  background: #eff3f6;\n  line-height: 1.618;\n}\n.title[data-v-c5ebe4ce] {\n  text-align: right;\n  padding: 13px 15px;\n}\n.title h1[data-v-c5ebe4ce] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.list-placeholder-wrapper[data-v-c5ebe4ce] {\n  border: 1px solid rgb(221, 221, 221);\n\n  position: relative;\n\n  overflow: hidden;\n\n  border-radius: 0 0 3px 3px;\n\n  margin-bottom: 20px;\n\n  border-top: none;\n\n  background: #f6f6f6;\n}\n.list-placeholder-wrapper ul[data-v-c5ebe4ce] {\n  margin: 0;\n\n  overflow: hidden;\n\n  border: none;\n}\n.list-placeholder-wrapper li[data-v-c5ebe4ce] {\n  background: none;\n\n  -webkit-filter: blur(8px);\n\n  filter: blur(8px);\n}\n.list-placeholder[data-v-c5ebe4ce]::after {\n  position: absolute;\n\n  width: 100%;\n\n  height: 100%;\n\n  content: \"\";\n\n  left: 0;\n\n  top: 0;\n}\n.list-placeholder-wrapper .link[data-v-c5ebe4ce] {\n  position: absolute;\n\n  width: 100%;\n\n  text-align: center;\n\n  top: calc(50% - 82px);\n\n  padding: 15px;\n}\n.list-placeholder-wrapper .link-wrapper-content[data-v-c5ebe4ce] {\n  max-width: 500px;\n\n  background: white;\n\n  padding: 15px;\n\n  border-radius: 4px;\n\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n\n  margin: 0 auto;\n}\n.list-placeholder-wrapper .link p[data-v-c5ebe4ce] {\n  font-size: 19px;\n\n  font-weight: bold;\n\n  color: #4b4b4b;\n\n  margin-bottom: 4px;\n\n  line-height: 1.618;\n}\n.list-placeholder-wrapper .link a[data-v-c5ebe4ce] {\n  font-size: 14px;\n\n  font-weight: bold;\n\n  margin-top: 4px;\n}\n\n/*product section style*/\n.carousel-item[data-v-c5ebe4ce] {\n  padding: 0;\n  text-align: center;\n}\n.products-contents[data-v-c5ebe4ce] {\n  padding: 0;\n  margin-top: 5px;\n}\n.products-contents .product-placeholder-wrapper[data-v-c5ebe4ce] {\n  margin-top: 15px;\n}\n\n/*services section*/\n#services-section[data-v-c5ebe4ce] {\n  text-align: center;\n}\n#services-section h3[data-v-c5ebe4ce] {\n  margin-top: 24px;\n  font-size: 21px;\n  font-weight: 500;\n  color: #404b55;\n  margin-bottom: 26px;\n}\n.box-image[data-v-c5ebe4ce] {\n  height: 85px;\n}\n.box-image img[data-v-c5ebe4ce] {\n  width: initial;\n\n  height: 100%;\n}\n.service-box[data-v-c5ebe4ce] {\n  padding: 0;\n  position: relative;\n  top: 0;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-radius: 12px;\n  border: 1px solid #f0f0f1;\n  margin-bottom: 30px;\n}\n.service-box[data-v-c5ebe4ce]:hover {\n  top: -5px;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  -webkit-box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);\n}\n.service-box a[data-v-c5ebe4ce] {\n  padding: 15px;\n  display: block;\n  color: #4b4b4b;\n}\n.service-box a h4[data-v-c5ebe4ce] {\n  font-size: 17px;\n\n  font-weight: bold;\n}\n.service-box p[data-v-c5ebe4ce] {\n  margin-top: 5px;\n}\n\n/*links section styles */\n#benefit-links[data-v-c5ebe4ce] {\n  background: #fff;\n\n  text-align: right;\n}\n.links-title[data-v-c5ebe4ce] {\n  color: #777;\n\n  font-size: 16px;\n\n  font-weight: bold;\n\n  margin-top: 24px;\n}\n.benefit-links-item[data-v-c5ebe4ce] {\n  line-height: 1.4;\n  margin-top: 6px;\n  direction: rtl;\n  margin-bottom: 50px;\n}\n.benefit-links-item h4[data-v-c5ebe4ce] {\n  line-height: 1.4;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.benefit-links-item a[data-v-c5ebe4ce] {\n  font-size: 10px;\n  color: #bdc4cc;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.benefit-links-item a[data-v-c5ebe4ce]:hover {\n  color: #00c569;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n\n/*mobile responsive styles*/\n.mobile-requests-contents[data-v-c5ebe4ce] {\n  background: #fff;\n  border: 1px solid #ddd;\n  margin-bottom: 30px;\n  padding: 5px 0 20px;\n}\n.mobile-requests-buttons[data-v-c5ebe4ce] {\n  font-size: 14px;\n  width: initial;\n  font-weight: bold;\n  margin: 25px 0 0;\n}\n.main-incobac-logo img[data-v-c5ebe4ce] {\n  width: 200px;\n}\n.web-category-wrapper[data-v-c5ebe4ce] {\n  background: #fff;\n  position: absolute;\n  right: 15px;\n  left: 15px;\n  border-radius: 12px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);\n  padding: 8px 0 0;\n}\n.web-category-wrapper > .section-title[data-v-c5ebe4ce] {\n  margin: 0 14px;\n}\n.web-category-wrapper > ul[data-v-c5ebe4ce] {\n  margin-top: 10px;\n  height: 267px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  overflow: hidden;\n}\n\n/* .web-category-wrapper > ul > li {\n  position: relative;\n} */\n.web-category-wrapper > ul > li:hover .sub-categories-wrapper[data-v-c5ebe4ce] {\n  display: block;\n}\n.web-category-wrapper > ul > li button[data-v-c5ebe4ce] {\n  width: 100%;\n  background: none;\n  border: none;\n  padding: 8px 20px 9px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  z-index: 1;\n}\n.web-category-wrapper > ul > li span[data-v-c5ebe4ce],\n.web-category-wrapper > ul > li i[data-v-c5ebe4ce] {\n  position: relative;\n  z-index: 1;\n  font-size: 16px;\n  color: #5f6368;\n}\n.web-category-wrapper > ul > li span[data-v-c5ebe4ce] {\n  font-weight: 500;\n}\n.web-category-wrapper > ul > li:hover button[data-v-c5ebe4ce]::after {\n  width: 100%;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.web-category-wrapper > ul > li button[data-v-c5ebe4ce]::after {\n  content: \" \";\n  -webkit-transition: 150ms;\n  transition: 150ms;\n  background-color: #00c569;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  width: 0%;\n  z-index: 0;\n  background: #fbfbfb;\n}\n.web-category-wrapper .sub-categories-wrapper[data-v-c5ebe4ce] {\n  position: absolute;\n  right: 100%;\n  background: #fbfbfb;\n  /* top: 0; */\n  width: 600px;\n  border-radius: 12px 0 12px 12px;\n  overflow: hidden;\n  display: none;\n  min-height: 90px;\n  padding: 15px 20px 30px;\n  -webkit-box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.16);\n          box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.16);\n}\n.web-banner-wrapper[data-v-c5ebe4ce] {\n  margin-top: 70px;\n}\n.load-more-categories[data-v-c5ebe4ce] {\n  width: 100%;\n  background: #f2f2f2;\n  border: none;\n  border-radius: 0 0 12px 12px;\n  font-size: 17px;\n  font-weight: 500;\n  color: #556080;\n  padding: 8px 0px;\n  margin-top: 0;\n}\n.rotate-icon[data-v-c5ebe4ce] {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.web-banner-wrapper .banner-item[data-v-c5ebe4ce] {\n  height: 160px;\n  background-size: cover;\n  border-radius: 12px;\n  background-color: #404b55;\n  background-position: 50% 0;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  border-radius: 12px;\n  position: relative;\n  margin-top: 20px;\n  border: none;\n  width: 100%;\n  z-index: 0;\n}\n.web-banner-wrapper .banner-contents[data-v-c5ebe4ce] {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  text-align: right;\n  color: #fff;\n  direction: rtl;\n}\n.web-banner-wrapper .banner-contents p[data-v-c5ebe4ce] {\n  font-size: 40px;\n  padding: 0 20px;\n}\n.web-banner-wrapper .banner-contents > div[data-v-c5ebe4ce] {\n  position: absolute;\n  left: 20px;\n  bottom: 15px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50px;\n  font-size: 18px;\n  padding: 5px 17px;\n}\n.web-banner-wrapper .banner-item[data-v-c5ebe4ce]::after {\n  content: \" \";\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: radial-gradient(\n    circle,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 0.5) 100%\n  );\n}\n.web-banner-wrapper .banner-more-categories[data-v-c5ebe4ce] {\n  height: 160px;\n  background-color: #f0f7e7;\n  overflow: hidden;\n  border-radius: 12px;\n  position: relative;\n  margin-top: 20px;\n  border: none;\n  width: 100%;\n}\n.web-banner-wrapper .banner-more-categories .banner-contents[data-v-c5ebe4ce] {\n  text-align: center;\n  color: #404b55;\n}\n.web-banner-wrapper .banner-more-categories .banner-contents p[data-v-c5ebe4ce] {\n  font-size: 32px;\n  padding: 9px 0 0;\n  width: 60px;\n  height: 60px;\n  background: #fff;\n  border-radius: 50px;\n  margin: 18px auto 0;\n}\n.web-banner-wrapper .banner-more-categories .banner-contents div[data-v-c5ebe4ce] {\n  position: relative;\n  bottom: initial;\n  left: initial;\n  background: #fff;\n  display: inline-block;\n  margin-top: 16px;\n}\n.web-banner-wrapper .banner-more-categories .banner-contents div i[data-v-c5ebe4ce] {\n  color: #1da1f2;\n}\n\n/* mobile categories styles \n******************************************/\n.mobile-banner[data-v-c5ebe4ce] {\n  padding: 20px 15px;\n}\n.mobile-banner .banner-item-wrapper[data-v-c5ebe4ce] {\n  background: #f2f2f2;\n  border-radius: 12px;\n  padding: 25px 0 0;\n  overflow: hidden;\n}\n.mobile-banner .banner-item-wrapper > div > div[data-v-c5ebe4ce] {\n  padding: 0 7px;\n  text-align: center;\n}\n.mobile-banner .banner-item[data-v-c5ebe4ce] {\n  text-align: center;\n  display: block;\n  background: none;\n  border: none;\n  padding: 0;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.mobile-banner .banner-item-wrapper .banner-item .item-image[data-v-c5ebe4ce] {\n  height: 45px;\n  width: 45px;\n  border-radius: 50px;\n  background-size: cover;\n  margin: 0 auto;\n  background-position: center;\n  background-color: #fff;\n}\n.mobile-banner .banner-item-wrapper .banner-item.all-banners .item-image[data-v-c5ebe4ce] {\n  background-color: #fff;\n  padding-top: 7px;\n  font-size: 22px;\n}\n.mobile-banner .banner-item-wrapper .banner-item p[data-v-c5ebe4ce] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #313a43;\n  margin-top: 5px;\n}\n\n/* categories modal styles \n******************************************/\n.modal-content[data-v-c5ebe4ce] {\n  overflow: hidden;\n  border-radius: 12px;\n}\n.close-modal[data-v-c5ebe4ce] {\n  font-size: 20px;\n\n  color: #777;\n\n  position: absolute;\n\n  right: 0;\n\n  padding: 8px 15px 2px;\n\n  top: 0;\n}\n.modal-title[data-v-c5ebe4ce] {\n  font-size: 16px;\n\n  font-weight: 800;\n\n  color: #474747;\n\n  text-align: center;\n}\n.modal-header[data-v-c5ebe4ce] {\n  padding: 9px 15px 10px;\n}\n.form-check-wrapper[data-v-c5ebe4ce] {\n  direction: rtl;\n}\n.report-form textarea[data-v-c5ebe4ce] {\n  max-width: 600px;\n\n  margin: 0px auto;\n\n  height: 110px;\n\n  max-height: 170px;\n\n  border-radius: 5px;\n\n  direction: rtl;\n}\n.main-text[data-v-c5ebe4ce] {\n  text-align: center;\n  /* margin: 20px 0 40px; */\n}\n.form-check-wrapper button[data-v-c5ebe4ce] {\n  width: 100%;\n\n  border: none;\n\n  background: none;\n\n  border-bottom: 1px solid #eee;\n\n  text-align: right;\n\n  padding: 12px 15px 13px;\n}\n.form-check-wrapper button[data-v-c5ebe4ce]:hover {\n  background: #fafafa;\n  cursor: pointer;\n}\n.form-check-wrapper li[data-v-c5ebe4ce] {\n  position: relative;\n}\n.form-check-wrapper li i[data-v-c5ebe4ce] {\n  position: absolute;\n\n  top: 15px;\n\n  left: 20px;\n\n  font-size: 18px;\n\n  color: #777;\n}\n.loading-list[data-v-c5ebe4ce] {\n  padding: 90px 0 130px;\n}\n.main-contents-wrapper[data-v-c5ebe4ce] {\n  padding: 20px;\n  position: relative;\n  border-radius: 12px;\n  border: 1px solid #f0f0f1;\n  margin: 30px auto;\n  direction: rtl;\n  max-height: 400px;\n  overflow-y: scroll;\n}\n.main-contents-wrapper > p[data-v-c5ebe4ce] {\n  margin: 20px auto;\n}\n.main-contents-wrapper p[data-v-c5ebe4ce]:last-of-type {\n  margin-bottom: 30px;\n}\n.items-wrapper[data-v-c5ebe4ce] {\n  padding: 0 3px;\n}\n@media screen and (max-width: 1199px) {\n.title-box a[data-v-c5ebe4ce] {\n    font-size: 15px;\n    padding: 7px 15px 6px;\n}\n}\n@media screen and (max-width: 992px) {\n.title-box a[data-v-c5ebe4ce] {\n    font-size: 17px;\n    padding: 7px 22px 6px;\n}\n.product-hidden[data-v-c5ebe4ce] {\n    display: block;\n}\n.section-wrapper .title-box[data-v-c5ebe4ce] {\n    margin-top: 35px;\n}\n}\n@media screen and (max-width: 767px) {\n.form-check-wrapper li:last-of-type button[data-v-c5ebe4ce] {\n    border: none;\n}\n.modal-body[data-v-c5ebe4ce] {\n    margin-left: 0;\n    margin-right: 0;\n}\n.mobile-banner .banner-item-wrapper .banner-item p[data-v-c5ebe4ce] {\n    height: 35px;\n}\n#intro[data-v-c5ebe4ce] {\n    margin-top: 75px;\n    padding: 20px 0;\n}\n.hero-search-input[data-v-c5ebe4ce] {\n    width: 100%;\n\n    margin-bottom: 15px;\n\n    min-width: initial;\n\n    overflow: hidden;\n}\n.hero-search-input button[data-v-c5ebe4ce] {\n    padding: 14px 20px 15px;\n}\n.hero-search-input button[data-v-c5ebe4ce]:hover {\n    padding: 14px 20px 15px;\n}\n#intro a.green-button[data-v-c5ebe4ce] {\n    margin: 15px auto;\n\n    float: none !important;\n}\n.secondary-nav-wrapper[data-v-c5ebe4ce] {\n    padding: 0;\n}\n.category-item[data-v-c5ebe4ce] {\n    padding: 7px 15px 13px;\n}\n.category-item i[data-v-c5ebe4ce]::before {\n    position: relative;\n    right: 1px;\n    top: 4px;\n}\nli.active > ul[data-v-c5ebe4ce] {\n    left: 0;\n\n    right: 0;\n}\n.product-link.green-button[data-v-c5ebe4ce] {\n    margin: 15px 0 0;\n}\n#categories-modal > div[data-v-c5ebe4ce] {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n}\n.modal-content[data-v-c5ebe4ce] {\n    min-height: 100%;\n\n    border-radius: 0;\n\n    border: none;\n\n    float: right;\n\n    width: 100%;\n}\n.title-box p[data-v-c5ebe4ce] {\n    text-align: center;\n}\n.section-wrapper .title-box[data-v-c5ebe4ce] {\n    text-align: center;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 766:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (2734:15)\n\n\u001b[0m \u001b[90m 2732 | \u001b[39m      let pageWidth \u001b[33m=\u001b[39m window\u001b[33m.\u001b[39mouterWidth\u001b[33m;\u001b[39m\n \u001b[90m 2733 | \u001b[39m      \u001b[36mif\u001b[39m (pageWidth \u001b[33m<=\u001b[39m \u001b[35m991\u001b[39m) {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 2734 | \u001b[39m        \u001b[36mreturn\u001b[39m \u001b[33m=\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m      | \u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2735 | \u001b[39m      } \u001b[36melse\u001b[39m {\n \u001b[90m 2736 | \u001b[39m        \u001b[36mreturn\u001b[39m \u001b[33m=\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2737 | \u001b[39m      }\u001b[0m\n");

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        class: {
          "loader-wrapper": _vm.isLoading,
          "finish-loader-show": !_vm.isLoading
        }
      },
      [_vm._m(0)]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        {
          staticClass: "categories-modal modal fade",
          attrs: { id: "categories-modal", tabindex: "-1", role: "dialog" }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-dialog-centered",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "a",
                    {
                      staticClass: "close-modal",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.closeModal()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-times" })]
                  ),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body row" }, [
                  !_vm.isCategories
                    ? _c(
                        "ul",
                        { staticClass: "form-check-wrapper" },
                        _vm._l(_vm.categoryModalList, function(item, index) {
                          return _c(
                            "li",
                            {
                              key: item.category_name + index,
                              staticClass: "col-xs-12 col-sm-4 pull-right"
                            },
                            [
                              _c("button", {
                                staticClass: "default-button-list",
                                domProps: {
                                  textContent: _vm._s(item.category_name)
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.routeCategories(item.category_name)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-angle-left" })
                            ]
                          )
                        })
                      )
                    : _c(
                        "ul",
                        { staticClass: "form-check-wrapper" },
                        _vm._l(_vm.categoryModalList, function(item, index) {
                          return _c(
                            "li",
                            {
                              key: item.category_name + index,
                              staticClass: "col-xs-12 col-sm-4 pull-right"
                            },
                            [
                              _c("button", {
                                staticClass: "default-button-list",
                                domProps: {
                                  textContent: _vm._s(item.category_name)
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.activeSubCategories(item.id)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-angle-left" })
                            ]
                          )
                        })
                      )
                ])
              ])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "container-fluid", attrs: { id: "intro" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              {
                attrs: {
                  name: "fadeIn",
                  delay: "0.5s",
                  duration: "1s",
                  iteration: 1,
                  offset: 0,
                  animateClass: "animated",
                  begin: false
                }
              },
              [
                _c("h2", { staticClass: "intro-site-title" }, [
                  _vm._v(
                    "\n              ارتباط مستقیم با خریداران و فروشندگان عمده محصولات کشاورزی\n            "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "search-wrapper" },
              [
                _c("div", { staticClass: "hero-search-input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mainSearchBoxText,
                        expression: "mainSearchBoxText"
                      }
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "محصول مورد نظر خود را جستجو کنید"
                    },
                    domProps: { value: _vm.mainSearchBoxText },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.mainSearchBoxText = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "hidden-sm hidden-md hidden-lg fa fa-search",
                    on: { click: _vm.search }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "hidden-xs", on: { click: _vm.search } },
                    [_c("i", { staticClass: "fa fa-search" })]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "green-button",
                    attrs: { to: { name: "productList" } }
                  },
                  [
                    _vm._v("\n              لیست محصولات\n              "),
                    _c("i", { staticClass: "fa fa-angle-left" })
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "categories-banner container",
        attrs: { id: "categories-banner" }
      },
      [
        _c("div", { staticClass: "web-banner-wrapper hidden-xs hidden-sm" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "banner-item-wrapper" }, [
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(7) + ")"
                    },
                    attrs: { id: "banner-item-1" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("حبوبات")
                      }
                    }
                  },
                  [_vm._m(3)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-9" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(1) + ")"
                    },
                    attrs: { id: "banner-item-2" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("میوه")
                      }
                    }
                  },
                  [_vm._m(4)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(5) + ")"
                    },
                    attrs: { id: "banner-item-3" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("ادویه")
                      }
                    }
                  },
                  [_vm._m(5)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-6" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(2) + ")"
                    },
                    attrs: { id: "banner-item-4" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("صیفی")
                      }
                    }
                  },
                  [_vm._m(6)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(3) + ")"
                    },
                    attrs: { id: "banner-item-5" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("غلات")
                      }
                    }
                  },
                  [_vm._m(7)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-6" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(4) + ")"
                    },
                    attrs: { id: "banner-item-6" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("خشکبار")
                      }
                    }
                  },
                  [_vm._m(8)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(6) + ")"
                    },
                    attrs: { id: "banner-item-7" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("دامپروری")
                      }
                    }
                  },
                  [_vm._m(9)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-more-categories",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal(false)
                      }
                    }
                  },
                  [_vm._m(10)]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm.cehckPageWidth()
          ? _c(
              "div",
              { staticClass: "mobile-banner-wrapper hidden-md hidden-lg" },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "mobile-banner" }, [
                    _c("div", { staticClass: "banner-item-wrapper" }, [
                      _vm.categoryList.length
                        ? _c(
                            "div",
                            _vm._l(_vm.categoryList, function(item, index) {
                              return _c(
                                "div",
                                {
                                  key: "mobile-banner-category-" + index,
                                  staticClass: "col-xs-3 pull-right",
                                  class: { hidden: index > 6 }
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "banner-item",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.openCategoriesModal(
                                            item.category_name
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("div", {
                                        staticClass: "item-image",
                                        style: {
                                          backgroundImage:
                                            "url(" +
                                            _vm.getMobileImageUrl(index + 1) +
                                            ")"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("p", {
                                        staticClass: "item-text",
                                        domProps: {
                                          textContent: _vm._s(
                                            item.category_name
                                          )
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            })
                          )
                        : _c(
                            "div",
                            _vm._l(7, function(item, index) {
                              return _c(
                                "div",
                                {
                                  key:
                                    "placeholder-mobile-banner-category-" +
                                    index,
                                  staticClass: "col-xs-3 pull-right",
                                  class: { hidden: index > 6 }
                                },
                                [
                                  _c("button", { staticClass: "banner-item" }, [
                                    _c("div", {
                                      staticClass: "item-image",
                                      style: {
                                        backgroundColor: "#fff"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("p", {
                                      staticClass: "item-text",
                                      domProps: { textContent: _vm._s("---") }
                                    })
                                  ])
                                ]
                              )
                            })
                          ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-xs-3 pull-right" }, [
                        _c(
                          "button",
                          {
                            staticClass: "banner-item all-banners",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.openCategoriesModal(false)
                              }
                            }
                          },
                          [
                            _vm._m(11),
                            _vm._v(" "),
                            _c("p", { staticClass: "item-text" }, [
                              _vm._v("همه")
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            )
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "section-wrapper container latest-product",
        attrs: { id: "product-section" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12 col-md-9" }, [
            _c("div", { staticClass: "section-title" }, [
              _vm._v("آخرین محصولات ثبت شده")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 products-contents" },
              [
                _vm.lastProducts
                  ? _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "hidden-sm hidden-md hidden-lg" },
                        [
                          _c(
                            "div",
                            { staticClass: "owl-carousel" },
                            _vm._l(_vm.lastProducts, function(
                              product,
                              productIndex
                            ) {
                              return _c(
                                "div",
                                { key: "products-carousel-" + productIndex },
                                [
                                  _c("ProductGridArticle", {
                                    key: "product-item-" + product.id,
                                    attrs: {
                                      productIndex: productIndex,
                                      "last-product": product,
                                      str: _vm.str
                                    }
                                  })
                                ],
                                1
                              )
                            })
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "hidden-xs" },
                        _vm._l(_vm.lastProducts, function(
                          product,
                          productIndex
                        ) {
                          return _c(
                            "div",
                            {
                              key: "products-" + productIndex,
                              staticClass:
                                "col-xs-6 col-sm-4 items-wrapper pull-right col-md-3",
                              class: { "product-hidden": productIndex > 7 }
                            },
                            [
                              _c("ProductGridArticle", {
                                key: "product-item-" + product.id,
                                attrs: {
                                  productIndex: productIndex,
                                  "last-product": product,
                                  str: _vm.str
                                }
                              })
                            ],
                            1
                          )
                        })
                      )
                    ])
                  : _c(
                      "div",
                      { staticClass: "row product-placeholder-wrapper" },
                      _vm._l(9, function(item, index) {
                        return _c(
                          "div",
                          {
                            key: "placeholder-product-item-" + index,
                            staticClass:
                              "col-md-3 col-sm-4 items-wrapper col-xs-6 pull-right",
                            class: {
                              "product-hidden": index > 7,
                              "hidden-xs": index > 1
                            }
                          },
                          [_vm._m(12, true)]
                        )
                      })
                    ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "green-button bg-light-green main-cta-page",
                    attrs: { to: { name: "productList" } }
                  },
                  [
                    _vm._v("مشاهده همه محصولات\n            "),
                    _c("i", { staticClass: "fa fa-angle-left" })
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-3 pull-right" }, [
            _vm.isUserLogin && _vm.userType == 0
              ? _c(
                  "div",
                  { staticClass: "title-box" },
                  [
                    _c("div", { staticClass: "section-title" }, [
                      _vm._v("ارتباط با فروشندگان")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n            محصولات فروشندگان را ببینید و بدون واسطه با آن ها ارتباط برقرار\n            کنید\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "green-button",
                        attrs: { to: { name: "productList" } }
                      },
                      [_vm._v("لیست محصولات")]
                    )
                  ],
                  1
                )
              : _vm.isUserLogin && _vm.userType == 1
                ? _c(
                    "div",
                    { staticClass: "title-box" },
                    [
                      _c("div", { staticClass: "section-title" }, [
                        _vm._v("ثبت و معرفی محصول")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n            با ثبت و معرفی محصول خود، بدون واسطه با خریداران عمده ارتباط\n            برقرار کنید\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "registerProductSeller" } }
                        },
                        [_vm._v("ثبت محصول")]
                      )
                    ],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "title-box" },
                    [
                      _c("div", { staticClass: "section-title" }, [
                        _vm._v("ثبت نام خریداران")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n            برای استعلام قیمت و خرید محصولات کشاورزی از بهترین فروشندگان عمده\n            هم اکنون ثبت نام کنید\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "register" } }
                        },
                        [
                          _vm._v("ثبت نام رایگان\n            "),
                          _c("i", { staticClass: "fa fa-angle-left" })
                        ]
                      )
                    ],
                    1
                  )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "section-wrapper container",
        attrs: { id: "requests-section" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xs-12 col-md-9" },
            [
              _c("div", { staticClass: "section-title" }, [
                _vm._v("آخرین درخواست های خرید")
              ]),
              _vm._v(" "),
              _vm.lastRequests
                ? _c("div", { staticClass: "requests-contents" }, [
                    _c(
                      "div",
                      { staticClass: "row hidden-xs" },
                      _vm._l(_vm.lastRequests, function(buyAd, index) {
                        return _c(
                          "div",
                          {
                            key: "buyAd-item-" + index,
                            staticClass: "col-xs-12 col-sm-6 col-md-4"
                          },
                          [
                            _c("LandingPageBuyAds", { attrs: { buyAd: buyAd } })
                          ],
                          1
                        )
                      })
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "owl-carousel hidden-sm hidden-md hidden-lg last-buyAds-carousel"
                      },
                      _vm._l(_vm.lastRequests, function(buyAd, index) {
                        return _c("LandingPageBuyAds", {
                          key: "mobile-buyAd-item-" + index,
                          attrs: { buyAd: buyAd }
                        })
                      })
                    )
                  ])
                : _c(
                    "div",
                    { staticClass: "requests-contents" },
                    _vm._l(6, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: "default-request-" + index,
                          staticClass: "col-xs-12 col-sm-6 col-md-4",
                          class: { "hidden-xs": index > 0 }
                        },
                        [_vm._m(13, true)]
                      )
                    })
                  ),
              _vm._v(" "),
              !_vm.isUserLogin || (_vm.isUserLogin && _vm.userType == 1)
                ? _c(
                    "router-link",
                    {
                      staticClass: "green-button bg-light-green main-cta-page",
                      attrs: { to: { name: "buyAdRequestsSeller" } }
                    },
                    [
                      _vm._v("مشاهده همه درخواست ها\n          "),
                      _c("i", { staticClass: "fa fa-angle-left" })
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-3 pull-right" }, [
            _vm.isUserLogin && _vm.userType == 0
              ? _c(
                  "div",
                  { staticClass: "title-box" },
                  [
                    _c("div", { staticClass: "section-title" }, [
                      _vm._v("یک درخواست و چندین قیمت")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n            از فروشندگان عمده قیمت بگیرید و با یک درخواست چندین قیمت دریافت\n            کنید\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "green-button",
                        attrs: { to: { name: "registerRequestBuyer" } }
                      },
                      [_vm._v("ثبت درخواست خرید")]
                    )
                  ],
                  1
                )
              : _vm.isUserLogin && _vm.userType == 1
                ? _c(
                    "div",
                    { staticClass: "title-box" },
                    [
                      _c("div", { staticClass: "section-title" }, [
                        _vm._v("خریداران عمده")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n            درخواست های خریداران عمده را ببینید و بدون واسطه با آن ها ارتباط\n            برقرار کنید\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "buyAdRequestsSeller" } }
                        },
                        [_vm._v("لیست درخواست های خرید")]
                      )
                    ],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "title-box" },
                    [
                      _c("div", { staticClass: "section-title" }, [
                        _vm._v("ثبت نام فروشندگان")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n            برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و\n            صادرکنندگان هم اکنون ثبت نام کنید\n          "
                        )
                      ]),
                      _vm._v(" "),
                      !_vm.isUserLogin
                        ? _c(
                            "router-link",
                            {
                              staticClass: "green-button",
                              attrs: { to: { name: "register" } }
                            },
                            [
                              _vm._v("ثبت نام رایگان "),
                              _c("i", { staticClass: "fa fa-angle-left" })
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "section-wrapper container",
        attrs: { id: "services-section" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("h3", { staticClass: "col-xs-12" }, [
            _vm._v(
              "\n        ارتباط مستقیم با خریداران و فروشندگان عمده محصولات کشاورزی\n      "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "service-boxs-wrapper col-xs-12" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-xs-12 col-md-4 hidden-md hidden-lg" },
                [
                  _c(
                    "article",
                    { staticClass: "service-box main-incobac-logo" },
                    [
                      _c("router-link", { attrs: { to: { name: "help" } } }, [
                        _c("div", { staticClass: "box-image" }, [
                          _c("img", {
                            attrs: {
                              loading: "lazy",
                              src: __webpack_require__(439)
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("باسکول چیست؟")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  باسکول بازار خرید و فروش عمده محصولات کشاورزی\n                  "
                          ),
                          _c("br"),
                          _vm._v(
                            "است که خریداران را به فروشندگان عمده متصل کرده "
                          ),
                          _c("br"),
                          _vm._v(
                            "و\n                  خریداران و فروشندگان بدون واسطه می توانند با یکدیگر ارتباط\n                  برقرار کنند\n                "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-xs-12 col-sm-6 col-md-4 pull-right" },
                [
                  _c(
                    "article",
                    { staticClass: "service-box" },
                    [
                      _c("router-link", { attrs: { to: { name: "help" } } }, [
                        _c("div", { staticClass: "box-image" }, [
                          _c("img", {
                            attrs: {
                              loading: "lazy",
                              src: __webpack_require__(778)
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("خدمات فروشندگان")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  معرفی محصولات به خریداران عمده\n                  "
                          ),
                          _c("br"),
                          _vm._v("دسترسی به درخواست های خرید روزانه "),
                          _c("br"),
                          _vm._v(
                            "گسترش شبکه ی\n                  تجاری و مشتریان "
                          ),
                          _c("br"),
                          _vm._v(
                            "فروش بدون واسطه و مقرون به صرفه\n                  "
                          ),
                          _c("br")
                        ])
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-xs-12 col-sm-6 col-md-4 pull-right hidden-xs hidden-sm"
                },
                [
                  _c(
                    "article",
                    { staticClass: "service-box main-incobac-logo" },
                    [
                      _c("router-link", { attrs: { to: { name: "help" } } }, [
                        _c("div", { staticClass: "box-image" }, [
                          _c("img", {
                            attrs: {
                              loading: "lazy",
                              src: __webpack_require__(439)
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("باسکول چیست؟")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  باسکول بازار خرید و فروش عمده محصولات کشاورزی\n                  "
                          ),
                          _c("br"),
                          _vm._v(
                            "است که خریداران را به فروشندگان عمده متصل کرده "
                          ),
                          _c("br"),
                          _vm._v(
                            "و\n                  خریداران و فروشندگان بدون واسطه می توانند با یکدیگر ارتباط\n                  برقرار کنند\n                "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-xs-12 col-sm-6 col-md-4 pull-right" },
                [
                  _c(
                    "article",
                    { staticClass: "service-box" },
                    [
                      _c("router-link", { attrs: { to: { name: "help" } } }, [
                        _c("div", { staticClass: "box-image" }, [
                          _c("img", {
                            attrs: { src: __webpack_require__(779) }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("خدمات خریداران")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  استعلام قیمت از فروشندگان و کشاورزان\n                  "
                          ),
                          _c("br"),
                          _vm._v("دسترسی بدون واسطه به فروشندگان متنوع "),
                          _c("br"),
                          _vm._v(
                            "صرفه جویی\n                  در زمان و هزینه خرید محصول "
                          ),
                          _c("br"),
                          _vm._v(
                            "گسترش شبکه تامین کنندگان\n                  "
                          ),
                          _c("br")
                        ])
                      ])
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm.userType != 1
      ? _c(
          "section",
          {
            staticClass: "container",
            attrs: { id: "register-request-section" }
          },
          [
            _c("main-register-request-form", {
              attrs: { "wrapper-bg": "true", "is-user-login": _vm.isUserLogin }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm._m(14),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "container-fluid", attrs: { id: "benefit-links" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "links-title col-xs-12" }, [
              _vm._v("لینک های مفید")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "benefit-links-item col-xs-12" }, [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _vm._l(_vm.footerLinks.wholesaleDate, function(item, index) {
                    return _c(
                      "h4",
                      {
                        key: "wholesale-date-item-" + index,
                        staticClass: "col-xs-6 col-sm-4 col-md-2 pull-right"
                      },
                      [
                        _c("router-link", {
                          attrs: { to: _vm.getSubCategoryUrl(item.link) },
                          domProps: {
                            textContent: _vm._s("فروش عمده" + " " + item.name)
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm.categoryList.length
                    ? _c(
                        "div",
                        _vm._l(_vm.categoryList, function(category, index) {
                          return _c(
                            "div",
                            { key: "wholesale-categories-item-" + index },
                            _vm._l(category.subcategories, function(
                              subCategory,
                              subIndex
                            ) {
                              return _c(
                                "h4",
                                {
                                  key:
                                    "wholesale-sub-categories-item-" + subIndex,
                                  staticClass:
                                    "col-xs-6 col-sm-4 col-md-2 pull-right"
                                },
                                [
                                  _c("router-link", {
                                    attrs: {
                                      to: _vm.getSubCategoryUrl(
                                        subCategory.category_name
                                      )
                                    },
                                    domProps: {
                                      textContent: _vm._s(
                                        "فروش عمده" +
                                          " " +
                                          subCategory.category_name
                                      )
                                    }
                                  })
                                ],
                                1
                              )
                            })
                          )
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.footerLinks.wholesaleRise, function(item, index) {
                    return _c(
                      "h4",
                      {
                        key: "wholesale-rise-item-" + index,
                        staticClass: "col-xs-6 col-sm-4 col-md-2 pull-right"
                      },
                      [
                        _c("router-link", {
                          attrs: { to: _vm.getSubCategoryUrl(item.link) },
                          domProps: {
                            textContent: _vm._s(
                              "فروش عمده برنج" + " " + item.name
                            )
                          }
                        })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-loader" }, [
      _c("img", { attrs: { src: __webpack_require__(385) } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-title" }, [
      _c("span", [_vm._v(" دسته بندی ها ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { name: "fadeIn" } }, [
      _c("h1", { staticClass: "intro-site-title" }, [
        _vm._v(
          "\n              باسکول | بازار خرید و فروش عمده محصولات کشاورزی\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("حبوبات")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("میوه")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("ادویه")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("صیفی")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("غلات")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("خشکبار")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("دامپروری")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_c("i", { staticClass: "fa fa-list" })]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  همه دسته ها\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-image" }, [
      _c("i", { staticClass: "fa fa-list" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "article",
      { staticClass: "carousel-item default-item col-xs-12" },
      [
        _c("span", {
          staticClass:
            "default-index-product-image placeholder-content col-xs-12 pull-right"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass:
            "content-default-width placeholder-content margin-10 col-xs-10 col-xs-offset-1 pull-right"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass:
            "content-default-width placeholder-content col-xs-8 margin-10 col-xs-offset-2 pull-right"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass:
            "content-default-width placeholder-content margin-10 col-xs-10 col-xs-offset-1 pull-right"
        }),
        _vm._v(" "),
        _c("span", { staticClass: "margin-10" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("article", { staticClass: "buyAds-placeholder" }, [
      _c("span", {
        staticClass:
          "content-default-width placeholder-content padding-10-0 margin-10 col-xs-6 col-xs-offset-3 pull-right"
      }),
      _vm._v(" "),
      _c("span", {
        staticClass:
          "content-default-width placeholder-content padding-10-0 margin-10 col-xs-10 col-xs-offset-1"
      }),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c("span", {
          staticClass:
            "content-default-width placeholder-content padding-10-0 margin-10 col-xs-6 col-xs-offset-3"
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "container", attrs: { id: "main-contents-section" } },
      [
        _c("div", { staticClass: "col-xs-12" }, [
          _c("div", { staticClass: "row" }, [
            _c("article", { staticClass: "main-contents-wrapper" }, [
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("عمده فروشی مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            عمده فروشی مواد غذایی به عنوان یک تجارت پرسود در تمام جهان به حساب\n            می آید که به صورت کلی دو حالت دارد، در حالت اول خود تولید کننده\n            اقدام به فروش محصولات به مصرف کننده اصلی می کند و در حالت دوم، یک\n            سری از افراد به عنوان واسطه بین تولید کننده اصلی و مصرف کننده\n            نهایی عمل می کنند که اصطلاحا به این افراد بنکدار یا مراکز پخش عمده\n            گفته می شود. خرید از تولید کننده اصلی باعث می شود شما در هزینه\n            خودتان صرفه جویی کنید و از پرداخت هزینه های جانبی به واسطه های\n            متعدد برای رسیدن به کالا خودداری کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در حال حاضر افراد زیادی در زمینه عمده فروشی مواد غذایی فعالیت\n            دارند و انواع مواد غذایی را با قیمت های مقرون به صرفه در اختیار\n            شما قرار می دهند، سایت باسکول به عنوان یک کانال دو طرفه برای\n            برقراری ارتباط بین عمده فروشان و خریداران عمل می کند. بنابراین اگر\n            شما عمده فروش مواد غذایی هستید می توانید با ثبت نام در سایت\n            باسکول، هزاران خریدار از سراسر ایران را در کمترین زمان ممکن جذب\n            کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("خرید عمده مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            خرید عمده مواد غذایی به صورت آنلاین به یک روش راحت و کاربردی در\n            سال های اخیر تبدیل شده است و طرفداران بسیار زیادی پیدا کرده است.\n            خرید عمده هر محصولی از فروشنده اصلی باعث کم کردن هزینه های جانبی\n            شما می شود که این موضوع در خصوص خرید عمده مواد غذایی نیز صدق می\n            کند و خرید عمده مواد غذایی از کارخانه، بهترین انتخاب برای شما می\n            باشد تا با کمک آن بهترین محصول را با قیمت مناسب خریداری کنید. در\n            سایت باسکول این امکان برای شما فراهم شده است که فروشندگان مواد\n            غذایی را پیدا کرده، محصولات آنها را به نسبت قیمت و کیفیت مقایسه\n            کنید و در نهایت بهترین فروشنده را برای خرید عمده مواد غذایی را\n            پیدا کرده و با او معامله کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            همچنین شما می توانید بعد از ثبت نام در سایت یا اپلیکیشن، یک\n            درخواست خرید عمده مواد غذایی با جزئیاتی مانند میزان و نوع محصول\n            مورد نظر خودتان، ثبت کنید و منتظر بمانید تا فروشنده مورد نظر با\n            شما ارتباط برقرار کند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("قیمت عمده مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            همانطور که می دانید مواد غذایی شامل اقلام بسیار زیاد و متنوعی است\n            که هر یک از آنها دارای قیمت های متفاوتی می باشند. به صورت کلی قیمت\n            عمده مواد غذایی به عوامل مختلفی مانند نحوه ارائه، کیفیت، بسته\n            بندی، نوع مواد غذایی و غیره بستگی دارد اما این موضوع در خصوص همه\n            اقلام مواد غذایی صدق می کند که اگر شما محصول مورد نظر خودتان را از\n            تولید کننده اصلی یعنی شرکت های تولیدی، خریداری کنید، واسطه ها را\n            از بین خواهید برد و قیمت نهایی محصول بسیار پایین تر از حد انتظار\n            خواهد بود. یکی از مهم ترین ویژگی های وب سایت باسکول این است که\n            خریدار می تواند با هزاران فروشنده مواد غذایی از سراسر ایران ارتباط\n            برقرار کند و از آنها استعلام قیمت بگیرید و در نتیجه به نسبت کیفیت\n            و برند مواد غذایی تصمیم به خرید محصول با قیمت مورد نظر خودش بگیرد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش عمده مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            بازار خرید و فروش مواد غذایی، یکی از پر رونق ترین و فعال ترین\n            بازارهای حال حاضر در جهان و ایران است و به علت حضور در چرخه تامین\n            غذا فعالیت آن دائمی است و در تمام طول سال مشتریان خاص خودش را\n            دارد. برای فروش عمده مواد غذایی می توانید وارد سایت یا اپلیکیشن\n            باسکول شوید و محصولات خودتان را بارگذاری کنید تا خریداران عمده\n            بتوانند آنها را مشاهده کنند و در صورت تطابق با نیازشان با شما تماس\n            برقرار کنند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            بنابراین اگر در زمینه فروش عمده مواد غذایی فعالیت دارید، انتخاب\n            سایت باسکول به عنوان بستر فروش محصولات خود به صورت آنلاین، می\n            تواند بهترین گزینه و انتخاب برای شما باشد و شما را با خریداران\n            معتبر آشنا میکند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("عمده فروش مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            یکی از مشکلاتی که عمده فروش مواد غذایی با آن سروکار دارد، واسطه\n            های بسیار زیاد است، در واقع واسطه ها، مواد غذایی را با قیمت خیلی\n            پایین خریداری می کند و با قیمتی بالاتر در اختیار خریدار بعدی قرار\n            می دهند، که خوشبختانه در سال های اخیر با توجه به اینکه تعداد زیادی\n            عمده فروش مواد غذایی با پلتفرم های آنلاین آشنا شدند و به دنبال\n            فروش محصول خود به خریدار اصلی با قیمت مناسب و واقعی هستند، این\n            مشکلات کمتر شده است. سایت باسکول در همین راستا میتواند شما را با\n            خریداران متعددی آشنا کند و روند فروش مواد غذایی را بهبود ببخشد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("سایت عمده فروشان")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            زمانی که حرف از سایت عمده فروشان زده می شود، معمولا یک سوال اساسی\n            در ذهن افراد در خصوص میزان امنیت معاملات شکل می گیرد، سایت باسکول\n            با استراتژِی های متعدد سعی در این دارد که شما یک معامله کاملا ایمن\n            با خریداران و فروشندگان معتبر داشته باشد و در همین راستا سیستم های\n            اعتبار سنجی و احراز هویت را به کار برده است تا هر دو طرف معامله با\n            امنیت بیشتری با یکدیگر آشنا شوند. باسکول به عنوان سایت عمده فروشان\n            شناخته شده است و روزانه هزاران فروشنده عمده در این سایت به فعالیت\n            میپردازند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش عمده محصولات کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            فروش عمده محصولات کشاورزی به صورت مستقیم و بدون واسطه باعث می شود\n            هر دو طرف معامله، یعنی فروشنده و خریدار سود بیشتری کسب کنند، در\n            واقع در این حالت نیازی به پرداخت هزینه به واسطه های متعدد نیست و\n            شما میتوانید محصول کشاورزی را با قیمت واقعی خریداری کنید که این\n            موضوع در خصوص اقلام کشاورزی نیز صدق می کند و فروشنده یا کشاورز می\n            تواند سود بیشتری از فروش محصولات خودش به دست آورد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            سایت باسکول این امکان را در اختیار شما قرار داده است که بعد از ثبت\n            نام و قرار دادن کالا در سایت، محصول خودتان را با قیمت واقعی و بدون\n            دخالت هیچ واسطه ای به فروش برسانید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("قیمت عمده محصولات کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            محصولات کشاورزی به نسبت کیفیت، نوسانات ارز، بسته بندی، نوع محصول و\n            نحوه تحویل به صورت فله و بسته بندی، دارای قیمت های بسیار مختلفی می\n            باشند و این امکان وجود ندارد که قیمت محصولات کشاورزی به صورت ثابت\n            در یک بازه زمانی بماند. بنابراین بهترین راه برای به دست آوردن قیمت\n            عمده محصولات کشاورزی برقراری ارتباط با فروشندگان عمده است. در حال\n            حاضر هزاران فروشنده محصولات غذایی در سایت باسکول فعالیت دارند که\n            شما می توانید برای اطلاع از قیمت عمده انواع محصولات کشاورزی به\n            صورت دقیق و به روز، با آنها به صورت مستقیم ارتباط برقرار کرده و از\n            آنها استعلام قیمت بگیرید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("بازار کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            همانطور که میدانید بخش کشاورزی یکی مهمترین بخش های تامین نیازهای\n            افراد است که شامل بسیاری از مواد غذایی می باشد. در چند سال اخیر\n            توجه بسیار زیادی به بازار کشاورزی آنلاین شده است تا جایی که عمده\n            خرید و فروش های محصولات کشاورزی به صورت آنلاین صورت می گیرد. در\n            حال حاضر پلتفرم های بسیار زیادی در زمینه بازار کشاورزی فعالیت\n            دارند و باعث رونق بیشتر بازار خرید و فروش محصولات کشاورزی در جهان\n            شده اند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            باسکول به عنوان یک پلتفرم که در زمینه بازار کشاورزی آنلاین فعالیت\n            دارد، امکان خرید و فروش بدون واسطه و مستقیم را برای شما فراهم می\n            کند و شما با کمک آن میتوانید سود بیشتری از خرید و فروش محصولات\n            کشاورزی مورد نظر خودتان به دست بیاورید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("بازار کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            باسکول به عنوان یک پلتفرم آنلاین، یک فضای دو طرفه ایجاد کرده و سعی\n            دارد با حذف واسطه ها در وقت و هزینه شما تا میزان زیادی صرفه جویی\n            کند، عدم دسترسی به فروشندگان و خریداران عمده محصولات کشاورزی باعث\n            شده است که بازار خرید آن ها رو به رکود برود و زمینه فعالیت واسطه\n            ها را تا حد زیادی گسترش داده است. هدف باسکول این است که یک ارتباط\n            مستقیم و بدون واسطه را بین خریدار عمده با فروشنده اصلی ایجاد کند\n            تا هر دو طرف، محصول را با قیمت اصلی معامله کنند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در حال حاضر باسکول به عنوان بازارگاه کشاورزی آنلاین، هزاران کشاورز\n            یا فروشنده عمده محصولات کشاورزی را در خود جای داده است و شما\n            میتوانید به راحتی و با چند کلیک با آنها ارتباط برقرار کنید، در\n            صورتی که خود شما فروشنده هستید پیشنهاد می کنیم در سایت باسکول ثبت\n            نام کنید و از خدمات متنوع باسکول همچون اطلاع از آخرین درخواست های\n            خرید و ارتباط با هزاران خریدار از سراسر کشور برخوردار شوید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش مستقیم محصولات کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در سال های گذشته فروش مستقیم محصولات کشاورزی برای همه افراد وجود\n            نداشت و واسطه گری افراد باعث می شد که کشاورز محصول خود را با هزینه\n            کمتر به فروش برساند و از طرف دیگر خریدار قیمت بیشتری برای آن\n            پرداخت کند. در حال حاضر سایت ها و پلتفرم هایی وجود دارند که به شما\n            امکان فروش مستقیم محصولات کشاورزی را می دهند. سایت باسکول با هدف\n            ارتباط دادن تولید کننده اصلی محصولات کشاورزی با خریدار، سعی در\n            کاهش هزینه های هر دو طرف دارد و باعث می شود در زمان و هزینه خریدار\n            و فروشنده صرفه جویی شود.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در حال حاضر هزاران نفر از افرادی که به دنبال فروش مستقیم محصولات\n            کشاورزی هستند در سایت باسکول حضور دارند و شما میتوانید محصول مورد\n            نظر خودتان را با کیفیت بسیار عالی و قیمت مطلوب از آنها خریداری\n            کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("خرید و فروش عمده")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            خرید و فروش عمده انواع محصولات به دو صورت حضوری و آنلاین صورت\n            میگیرد، که در حال حاضر با توجه به شرایط و مزایای معامله آنلاین،\n            بیشتر افراد تمایل به خرید و فروش عمده به صورت آنلاین دارند. شما در\n            هر دو صورت محصول خودتان را از بنکدار یا فروشنده عمده، تحویل می\n            گیرید با این تفاوت که خرید آنلاین را با چند کلیک ساده انجام می\n            دهید و این امکان را دارید که قیمت ها و کیفیت محصولات را مقایسه\n            کنید و بهترین انتخاب ممکن را بدون صرف هزینه و هدر رفتن زمان، داشته\n            باشید. این موضوع در مورد فروش عمده نیز صدق می کند و بنکدار می\n            تواند محصولات مختلفی را در سایت قرار داده و محصول خودش را به افراد\n            بیشتری معرفی و در نتیجه با قیمت مناسب به فروش برساند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش عمده میوه و تره بار")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            با توجه به شرایطی همچون عدم دسترسی به بازار های جدید در سطح کشور و\n            هزینه های بالای تبلیغات آفلاین، امروزه تلاش کسب و کارهای مختلف\n            برای پیشبرد انجام معاملات به صورت آنلاین است که فروش عمده میوه و\n            تره بار نیز از این قضیه مستثنی نیست. باسکول به عنوان یک پلتفرم\n            برای خریداران و فروشندگان عمده فعالیت دارد و اجتماع بزرگی از\n            صادرکنندگان میوه و تره بار به سراسر ایران و خارج از کشور را در خود\n            جای داده است، اگر شما هم در زمینه فروش عمده میوه و تره بار فعالیت\n            دارید، می توانید محصولات خودتان را با بهترین قیمت به فروش برسانید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            از طرف دیگر خریداران میتوانند با صدها سالن سورت و بسته بندی میوه و\n            تره بار در سراسر ایران به صورت مستقیم و بدون واسطه ارتباط برقرار\n            کرده و محصول مورد نظر خود را از نظر کیفیت و قیمت بررسی کنند و سپس\n            اقدام به خرید نمایند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش عمده میوه و تره بار")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در حال حاضر عمده فروشی آنلاین به یکی از راه های مقرون به صرفه برای\n            فروش محصولات به حساب می آید. چند سال پیش کمتر کسی می توانست به\n            عمده فروشی آنلاین اعتماد کند و معاملات خودش را به صورت آنلاین\n            انجام دهد، اما با گذشت زمان و فعالیت کسب و کارهای مختلف در زمینه ی\n            عمده فروشی آنلاین، کم کم افراد به دلیل ویژگی ها و مزیت هایی که\n            عمده فروشی آنلاین به نسبت معاملات حضوری داشت، استفاده از این خدمات\n            افزایش یافت تا جایی که در حال حاضر بخشی از فروش عمده محصولات مختلف\n            مانند مواد غذایی و کشاورزی به صورت آنلاین صورت می گیرد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            سایت باسکول در چند سال اخیر توانسته است یک اجتماع از فروشندگان و\n            خریداران معتبر از سراسر ایران و جهان در خود تشکیل دهد و باعث رونق\n            بیشتر عمده فروشی آنلاین شود. بنابراین اگر شما هم در زمینه خرید و\n            فروش عمده فعالیت دارید، پیشنهاد میکنم در سایت باسکول ثبت نام کنید\n            و از مزایای آن نهایت استفاده را ببرید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروشگاه عمده")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            اگر به دنبال کم کردن هزینه های اضافی و جانبی هنگام خرید عمده\n            محصولات مختلف هستید، پیشنهاد میکنم از فروشگاه های عمده آنلاین\n            مانند باسکول استفاده کنید و امکان دخالت واسطه ها در معاملات را به\n            صفر برسانید. فروشگاه عمده باید دارای یک سری ویژگی ها باشد تا\n            اعتماد خریدار و فروشنده را جلب کند و زمینه یک معامله ایمن را برای\n            آنها فراهم کند. سایت باسکول امکانات متعددی مانند : مقایسه قیمت و\n            کیفیت، اعتبارسنجی فروشنده و خریدار، احراز هویت و غیره را در اختیار\n            شما قرار داده است تا از هر گونه سوء استفاده احتمالی جلوگیری کند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            بنابراین اگر به دنبال یک فروشگاه عمده معتبر برای فروش محصولات خود\n            و یا خرید محصولات از فروشنده اصلی هستید، سایت باسکول بهترین گزینه\n            برای شما می باشد.\n          "
                )
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c5ebe4ce", module.exports)
  }
}

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "/images/seller.jpg?eea58c1809a3dc12b3b1312e6308f748";

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "/images/buyer.jpg?eb6d74ea165894067207c805adbfb329";

/***/ })

});