webpackJsonp([22],{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(472)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(474)
/* template */
var __vue_template__ = __webpack_require__(475)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5cb1f166"
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
Component.options.__file = "resources/assets/js/components/layouts/main/contact_us.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cb1f166", Component.options)
  } else {
    hotAPI.reload("data-v-5cb1f166", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(473);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("583a2edc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5cb1f166\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contact_us.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5cb1f166\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contact_us.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\np[data-v-5cb1f166], span[data-v-5cb1f166], div[data-v-5cb1f166], h3[data-v-5cb1f166]{\n    line-height: 1.618;\n}\n", ""]);

// exports


/***/ }),

/***/ 474:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        stopLoader: function stopLoader() {
            this.$nextTick(function () {
                __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit('isLoading', false);
            });
        }
    },
    mounted: function mounted() {
        var self = this;
        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                self.$nextTick(self.stopLoader());
            }
        };
    },
    updated: function updated() {
        this.$nextTick(this.stopLoader());
    },
    created: function created() {
        gtag('config', 'UA-129398000-1', { 'page_path': '/contact-us' });
    },
    metaInfo: function metaInfo() {

        return {
            title: ' تماس با ما ',
            titleTemplate: 'باسکول | %s',
            meta: [{
                name: 'description',
                content: 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
            }, {
                name: 'author',
                content: 'باسکول'
            }, {
                'property': 'og:description',
                'content': 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
            }, {
                'property': 'og:site_name',
                'content': 'باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران'
            }, {
                'property': 'og:title',
                'content': ' باسکول | بازار خرید و فروش عمده محصولات کشاورزی '
            }]

        };
    }
});

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-content-index-pages" }, [
      _c("section", { staticClass: "parallax-section policy" }, [
        _c("div", { staticClass: "overlay" }),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: " col-md-12 col-sm-12" }, [
              _c("h3", { staticClass: "text-right" }, [_vm._v("ارتباط با ما")]),
              _vm._v(" "),
              _c("p", { staticClass: "text-right" }, [
                _vm._v(
                  "از هریک از راه های زیر که برایتان راحت تر است با ما در ارتباط باشید."
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("ul", { staticClass: "text-right" }, [
                _c("li", [_vm._v("شماره تماس :‌09118413054 / 09178928266")]),
                _vm._v(" "),
                _c("li", [_vm._v("ایمیل پشتیبانی :‌support@buskool.com")]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("ایمیل شخصی مدیر فنی :‌ ali_delkhosh@ymail.com")
                ]),
                _vm._v(" "),
                _c("li")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-right" }, [
                _vm._v(
                  "\n                        سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل support@buskool.com با ما در میان\n                        بگذارید.\n                    "
                )
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-5cb1f166", module.exports)
  }
}

/***/ })

});