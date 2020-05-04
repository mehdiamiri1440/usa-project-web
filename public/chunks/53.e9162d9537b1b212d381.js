webpackJsonp([53],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(440)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(442)
/* template */
var __vue_template__ = __webpack_require__(443)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3897649e"
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
Component.options.__file = "resources/assets/js/components/dashboard/buyer/guide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3897649e", Component.options)
  } else {
    hotAPI.reload("data-v-3897649e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(441);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1e877232", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3897649e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./guide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3897649e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./guide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.help[data-v-3897649e] {\n    direction: rtl;\n    line-height: 1.618;\n}\nol[data-v-3897649e] {\n    list-style: inherit;\n    list-style-type: decimal !important;\n}\nul[data-v-3897649e] {\n    padding: 0 15px;\n    list-style: inherit;\n}\n.help .title_list_help[data-v-3897649e] {\n    font-size: 16px;\n    font-weight: 800;\n}\n.help .title_list_help ol[data-v-3897649e] {\n    margin: 25px 0;\n    font-size: 14px;\n    font-weight: 400;\n    padding: 15px 30px;\n    -webkit-box-shadow: 0 0 9px rgba(0, 0, 0, .075);\n            box-shadow: 0 0 9px rgba(0, 0, 0, .075);\n    background: #fff;\n}\n.help .title_list_help li[data-v-3897649e] {\n    padding: 6px 0;\n}\n.title[data-v-3897649e] {\n    text-align: right;\n    padding: 13px 15px ;\n}\n.title h1[data-v-3897649e] {\n\n    font-size: 18px;\n    font-weight: bold;\n}\n@media screen and (max-width: 767px) {\n.title[data-v-3897649e] {\n        text-align: center;\n}\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            items: [{
                message: 'راهنما',
                url: 'guide'
            }]
        };
    },
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit('subHeader', this.items);
    },
    created: function created() {
        gtag('config', 'UA-129398000-1', { 'page_path': '/guide' });
    }
});

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "main-content col-xs-12" }, [
    _c("div", { staticClass: "help" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("ul", { staticClass: "col-xs-12" }, [
        _c("li", { staticClass: "title_list_help" }, [
          _vm._v(
            "\n                بازرگانان و خریدارن محترم می توانید طبق راهنمای زیر، نسبت به ثبت سفارش و استعلام قیمت محصولات اقدام کنید:\n                "
          ),
          _c("ol", { staticClass: "list-group" }, [
            _c("li", [
              _vm._v(
                "\n                        در صورتی که از طریق گوشی موبایل خود از خدمات وبسایت استفاده می کنید بالای صفحه گوشه سمت راست روی آیکون مربوطه بزنید تا به منو دسترسی پیدا کنید.\n\n                    "
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              [
                _vm._v("\n                        به قسمت "),
                _c(
                  "router-link",
                  { attrs: { to: { name: "registerRequestBuyer" } } },
                  [_vm._v(" ثبت درخواست خرید ")]
                ),
                _vm._v(
                  " رفته و اطلاعات لازم جهت خرید محصول مورد نظر خود را وارد کنید.\n                    "
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n                        پس از تنظیم و ثبت درخواست خرید، این درخواست ابتدا باید به تایید کارشناسان ما برسد و سپس به تامین کنندگان مرتبط ارسال می شود تا پیشنهادهای خود را برای شما ارسال کنند.\n                    "
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              [
                _vm._v("\n                        در قسمت "),
                _c("router-link", { attrs: { to: { name: "productList" } } }, [
                  _vm._v("لیست محصولات ")
                ]),
                _vm._v(
                  " می توانید متناسب با نیاز خود محصول و تامین کنندگان مورد نظر را پیدا کرده و نسبت به انجام معامله با وی و کسب اطلاعات بیشتر، با مراجعه به صفحه ی پروفایل فروشنده و کلیک روی دکمه ی ارسال پیام با او وارد چت شوید.\n                    "
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n                        سامانه ی باسکول به منظور حفظ حریم خصوصی افراد شماره فروشندگان و خریداران را  به دیگران نمایش نمی دهد. افراد در صورت تمایل میتوانند شماره تماس خود را در پیام رد و بدل کنند.\n                    "
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n                        هر گونه بروز رسانی پروفایل، پس از تایید کارشناسان ما برای دیگران قابل مشاهده خواهد بود.تایید پرفایل از طریق پیامک به اطاع شما می رسد.\n                    "
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n                        در صورت بروز هرگونه مشکل با خدمتگزاران خود تماس بگیرید.\n                    "
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12 col-sm-4 pull-right" }, [
          _c("h1", [
            _vm._v("\n                    راهنما\n                   ")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3897649e", module.exports)
  }
}

/***/ })

});