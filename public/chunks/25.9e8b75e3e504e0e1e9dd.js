webpackJsonp([25],{

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(862)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(864)
/* template */
var __vue_template__ = __webpack_require__(865)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01eaf54d"
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
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/main-register-request.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01eaf54d", Component.options)
  } else {
    hotAPI.reload("data-v-01eaf54d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(475)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(477)
/* template */
var __vue_template__ = __webpack_require__(478)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-039466f4"
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
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/main-register-request-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-039466f4", Component.options)
  } else {
    hotAPI.reload("data-v-039466f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(476);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1db18520", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-039466f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-register-request-form.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-039466f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-register-request-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.title-contents[data-v-039466f4] {\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n  padding: 0;\n}\n.form-contents-wrapper[data-v-039466f4] {\n  direction: rtl;\n}\n.submit-button[data-v-039466f4] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 16px;\n  padding: 8px 25px 7px;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  cursor: default;\n  margin: 0;\n}\n.submit-button i[data-v-039466f4] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  position: relative;\n  top: 2px;\n  left: -3px;\n}\n.input-text-wrapper[data-v-039466f4] {\n  height: 25px;\n  padding-top: 5px;\n}\n.small-description-text[data-v-039466f4] {\n  text-align: left;\n}\n.submit-button.default-back-button i[data-v-039466f4] {\n  left: 3px;\n}\n.submit-button.default-back-button[data-v-039466f4] {\n  background: #fff;\n  color: #777;\n  border: 1px solid #bdc4cc;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 14px;\n}\n.submit-button.default-back-button:hover i[data-v-039466f4] {\n  -webkit-transform: translateX(5px);\n          transform: translateX(5px);\n}\n.submit-button.active[data-v-039466f4] {\n  background: #00c569;\n  cursor: pointer;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.submit-button.active:hover i[data-v-039466f4] {\n  background: #00c569;\n  cursor: pointer;\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.action-control-wrapper[data-v-039466f4] {\n  padding: 20px 15px 50px;\n  background: #fff;\n}\nlabel[data-v-039466f4] {\n  margin: 0 auto 10px auto;\n  font-size: 15px;\n  font-weight: 400;\n  color: #777;\n}\n.small-label[data-v-039466f4] {\n  font-size: 15px;\n}\n.text-input-wrapper[data-v-039466f4] {\n  margin: 0 auto;\n  position: relative;\n  background: #fbfbfb;\n}\ninput[data-v-039466f4] {\n  background: none;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  padding: 8px 15px;\n  border: 1px solid #bdc4cc;\n  border-radius: 4px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.text-input-wrapper i[data-v-039466f4] {\n  position: absolute;\n  left: 15px;\n  top: 11px;\n  font-size: 18px;\n  color: #bdc4cc;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\ninput[data-v-039466f4]:focus,\ninput:focus + i[data-v-039466f4] {\n  color: #333;\n  border-color: #333;\n}\ninput.active[data-v-039466f4] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-039466f4] {\n  color: #00c569;\n}\ninput.active[data-v-039466f4]:focus,\ninput.active:focus + i[data-v-039466f4],\ninput.active + i[data-v-039466f4] {\n  border-color: #00c569;\n}\ninput.error[data-v-039466f4] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-039466f4] {\n  color: #e41c38;\n}\ninput.error[data-v-039466f4]:focus,\ninput.error:focus + i[data-v-039466f4] {\n  border-color: #e41c38;\n}\n.spinner-border[data-v-039466f4] {\n  width: 1.5rem;\n  height: 1.5rem;\n  top: -5px;\n  position: relative;\n  left: 2px;\n}\nselect[data-v-039466f4] {\n  width: 100%;\n\n  border-radius: 4px;\n\n  border: 1px solid;\n\n  padding: 8px 15px;\n\n  position: relative;\n\n  z-index: 1;\n\n  color: #777777;\n\n  direction: rtl;\n\n  -webkit-transition: 200ms;\n\n  transition: 200ms;\n\n  background: none;\n\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n}\n.input-wrapper i[data-v-039466f4] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  -webkit-transition: 200ms;\n\n  transition: 200ms;\n}\n.select-items.input-wrapper[data-v-039466f4] {\n  position: relative;\n  margin: 6px auto;\n}\n.select-items.input-wrapper[data-v-039466f4]:after {\n  content: \"\\F107\";\n\n  color: #777;\n\n  position: absolute;\n\n  display: inline-block;\n\n  top: 6px;\n\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n\n  font-weight: 900;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  z-index: 0;\n}\nselect option[data-v-039466f4] {\n  color: #333;\n}\nselect[data-v-039466f4]:focus {\n  color: #333;\n}\nselect.active[data-v-039466f4] {\n  color: #333;\n  color: #00c569;\n}\nselect.active[data-v-039466f4]:focus {\n  color: #00c569;\n}\nselect.error[data-v-039466f4] {\n  color: #333;\n  color: #e41c38;\n}\nselect.error[data-v-039466f4]:focus {\n  color: #e41c38;\n}\n.error-message[data-v-039466f4] {\n  text-align: right;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 25px;\n\n  direction: rtl;\n\n  font-size: 11px;\n}\n.small-description[data-v-039466f4] {\n  font-size: 11px;\n\n  font-weight: bold;\n\n  color: #777777;\n\n  line-height: 1.618;\n}\n.small-description-text[data-v-039466f4] {\n  text-align: right;\n\n  font-weight: bold;\n  color: #777777;\n\n  height: 25px;\n\n  direction: rtl;\n\n  font-size: 12px;\n}\n.submit-button-wrapper[data-v-039466f4] {\n  text-align: center;\n}\nlabel .small-label[data-v-039466f4] {\n  font-size: 12px;\n}\n@media screen and (max-width: 767px) {\nselect[data-v-039466f4] {\n    font-size: 12px;\n}\n.input-wrapper[data-v-039466f4]::after {\n    left: 14px;\n}\n.form-contents[data-v-039466f4] {\n    border-radius: 0;\n}\n.title-section[data-v-039466f4] {\n    padding: 0 15px;\n}\nselect[data-v-039466f4] {\n    font-size: 12px;\n}\n.input-wrapper[data-v-039466f4]::after {\n    left: 14px;\n}\n.title-contents.margin-top-30[data-v-039466f4] {\n    margin-top: 30px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["wrapperBg"],
  data: function data() {
    return {
      errors: {
        categorySelected: "",
        category_id: "",
        requirement_amount: "",
        name: ""
      },
      currentUser: {
        profile: "",
        user_info: ""
      },
      buyAd: {
        name: "",
        requirement_amount: "",
        price: "",
        description: "",
        address: "",
        pack_type: "",
        category_id: "",
        rules: false,
        categorySelected: ""
      },
      buyAdFields: ["name", "requirement_amount", "category_id"],
      categorySelected: "",
      categoryList: "",
      subCategoryList: "",
      cities: "",
      buyAdFiles: [],
      popUpMsg: "",
      profileConfirmed: false,
      disableSubmit: false,
      submiting: false,
      relatedProducts: null,
      requirement_amount_text: "",
      categoryName: "میوه",
      items: [{
        message: " ثبت درخواست جدید",
        url: "registerRequest"
      }]
    };
  },
  methods: {
    init: function init() {
      var _this = this;

      axios.post("/user/profile_info").then(function (response) {
        return _this.currentUser = response.data;
      });

      axios.post("/get_category_list").then(function (response) {
        return _this.categoryList = response.data.categories;
      });
    },
    loadSubCategoryList: function loadSubCategoryList(e) {
      // e.preventDefault();
      // var categoryId = $(e.target).val();
      // this.categorySelected = categoryId;
      // this.categoryName = this.categoryList[index].category_name;
      // axios
      //   .post("/get_category_list", {
      //     parent_id: categoryId,
      //   })
      //   .then((response) => (this.subCategoryList = response.data.categories));
    },
    formValidator: function formValidator() {
      if (!this.categorySelected) {
        this.errors.categorySelected = "دسته بندی الزامی است";
      }
      if (!this.buyAd.category_id) {
        this.errors.category_id = "نام محصول الزامی است";
      }

      this.nameValidator(this.buyAd.name);

      this.requirementAmountValidator(this.buyAd.requirement_amount);

      if (!this.errors.categorySelected && !this.errors.category_id && !this.errors.name && !this.errors.requirement_amount) {
        this.submitBuyAd();
      }
    },
    submitBuyAd: function submitBuyAd() {
      this.errors = "";
      var self = this;

      var formData = this.getBuyAdFormFields();

      this.buyAd.categorySelected = this.categorySelected;

      window.localStorage.setItem("buyAd", JSON.stringify(this.buyAd));

      window.location.href = "/buyer/register-request";
    },
    getBuyAdFormFields: function getBuyAdFormFields() {
      var formData = new FormData();
      var cnt = this.buyAdFields.length;

      for (var i = 0; i < cnt; i++) {
        formData.append(this.buyAdFields[i], this.toLatinNumbers(this.buyAd[this.buyAdFields[i]]));
      }
      return formData;
    },
    setCategoryId: function setCategoryId(e) {
      e.preventDefault();

      this.buyAd.category_id = $(e.target).val();
    },
    setCityId: function setCityId(cityId) {
      this.buyAd.city_id = cityId;
    },
    toLatinNumbers: function toLatinNumbers(num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/,/g, "");
      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num.toString().replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    registerComponentExceptions: function registerComponentExceptions(description) {
      var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      gtag("event", "exception", {
        description: description,
        fatal: fatal
      });
    },
    isOsIOS: function isOsIOS() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
          safari = /safari/.test(userAgent),
          ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);
    },

    nameValidator: function nameValidator(name) {
      this.toLatinNumbers(name);
      if (!name) {
        this.errors.name = "";
      } else if (!this.validateRegx(name, /^[\u0600-\u06FF\s\d]+$/)) {
        this.errors.name = "نوع محصول فرمت مناسبی نیست";
      }
    },
    requirementAmountValidator: function requirementAmountValidator(number) {
      this.errors.requirement_amount = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.requirement_amount = "فیلد میزان نیازمندی الزامی است";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.requirement_amount = "فقط عدد وارد کنید";
      }
    },
    validateRegx: function validateRegx(input, regx) {
      return regx.test(input);
    },
    convertUnits: function convertUnits(number) {
      var data = number / 1000;
      var text = "";
      if (number < 1000) {
        return number + " " + "کیلوگرم";
      } else {
        var ton = data.toString().split(".")[0];
        var kg = number.toString().substr(ton.length);
        kg = kg.replace(/^0+/, "");
        ton = this.getNumberWithCommas(ton);
        ton = ton + " " + "تن";

        if (kg) {
          kg = " و " + kg + " کیلوگرم";
          text = ton + kg;
        } else {
          text = ton;
        }

        return text;
      }
    },
    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
    }
  },
  mounted: function mounted() {
    if (this.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
    this.init();
  },

  watch: {
    categorySelected: function categorySelected(value) {
      console.log(value);
      this.errors.categorySelected = "";
    },
    "buyAd.category_id": function buyAdCategory_id() {
      this.errors.category_id = "";
    },
    "buyAd.requirement_amount": function buyAdRequirement_amount(value) {
      this.errors.requirement_amount = "";
      if (value) {
        if (value.length >= 13) {
          this.buyAd.requirement_amount = value.substring(0, 13);
        }
        var number = this.toLatinNumbers(this.buyAd.requirement_amount);
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.requirement_amount = "لطفا  فقط عدد وارد کنید";
        }
        if (!this.errors.requirement_amount) {
          this.buyAd.requirement_amount = this.getNumberWithCommas(number);
          this.requirement_amount_text = this.convertUnits(number);
        }
      } else {
        this.requirement_amount_text = "";
      }
    },

    "buyAd.name": function buyAdName() {
      this.errors.name = "";
    }
  }
});

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section-wrapper col-xs-12" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "text-right col-xs-12 form-contents-wrapper",
          class: { "wrapper-bg": _vm.wrapperBg }
        },
        [
          _c("div", { staticClass: "section-title" }, [
            _vm._v("ثبت درخواست خرید")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-contents col-xs-12" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xs-12 col-sm-6 pull-right" }, [
                _c("label", { attrs: { for: "stock" } }, [
                  _vm._v(" دسته بندی محصول ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-wrapper select-items" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.categorySelected,
                          expression: "categorySelected"
                        }
                      ],
                      class: {
                        active: _vm.categorySelected,
                        error: _vm.errors.categorySelected
                      },
                      attrs: { id: "category" },
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.categorySelected = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            _vm.loadSubCategoryList($event)
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { selected: "", disabled: "" } }, [
                        _vm._v("انتخاب دسته بندی")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categoryList, function(category) {
                        return _c("option", {
                          domProps: {
                            value: category.id,
                            textContent: _vm._s(category.category_name)
                          }
                        })
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "error-message col-xs-12" }, [
                  _vm.errors.categorySelected
                    ? _c("span", {
                        domProps: {
                          textContent: _vm._s(_vm.errors.categorySelected)
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xs-12 col-sm-6" }, [
                _c("label", { attrs: { for: "min-sale-amount" } }, [
                  _vm._v(" نام محصول ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-wrapper select-items" }, [
                  _c(
                    "select",
                    {
                      class: {
                        active: _vm.buyAd.category_id,
                        error: _vm.errors.category_id
                      },
                      attrs: { id: "sub-category" },
                      on: {
                        change: function($event) {
                          _vm.setCategoryId($event)
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { disabled: "", selected: "" } }, [
                        _vm._v("انتخاب زیر دسته بندی")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.subCategoryList, function(category) {
                        return _c("option", {
                          domProps: {
                            value: category.id,
                            textContent: _vm._s(category.category_name)
                          }
                        })
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "error-message" }, [
                  _vm.errors.category_id
                    ? _c("span", {
                        domProps: {
                          textContent: _vm._s(_vm.errors.category_id)
                        }
                      })
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xs-12 col-sm-6 pull-right" }, [
                _c(
                  "h2",
                  { staticClass: "title-contents margin-top-30 col-xs-12" },
                  [
                    _vm._v("\n              نوع\n              "),
                    _c("span", {
                      staticClass: "light-green-text",
                      domProps: {
                        textContent: _vm._s(
                           true
                            ? _vm.subCategoryName
                            : "محصول" + " "
                        )
                      }
                    }),
                    _vm._v(
                      "\n              مورد نیاز خود را وارد کنید.\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "description",
                    attrs: { for: "product-type" }
                  },
                  [
                    _vm.categoryName == "میوه"
                      ? _c("span", [_vm._v(" مثلا: مضافتی ")])
                      : _vm.categoryName == "صیفی"
                        ? _c("span", [
                            _vm._v(
                              "\n                مثلا: بذر متین صادراتی\n              "
                            )
                          ])
                        : _vm.categoryName == "غلات"
                          ? _c("span", [
                              _vm._v(
                                "\n                مثلا: هندی ۱۱۲۱\n              "
                              )
                            ])
                          : _vm.categoryName == "خشکبار"
                            ? _c("span", [_vm._v(" مثلا: فندقی ")])
                            : _vm.categoryName == "ادویه"
                              ? _c("span", [_vm._v(" مثلا: نگین ")])
                              : _vm.categoryName == "دامپروری"
                                ? _c("span", [
                                    _vm._v(
                                      "\n                مثلا: چهل گیاه\n              "
                                    )
                                  ])
                                : _c("span", [_vm._v(" مثلا: مضافتی")])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-input-wrapper" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buyAd.name,
                        expression: "buyAd.name"
                      }
                    ],
                    class: { active: _vm.buyAd.name, error: _vm.errors.name },
                    attrs: {
                      id: "product-type",
                      type: "text",
                      placeholder: "نوع محصول مورد نیاز خود را وارد کنید",
                      pattern: "[0-9]*"
                    },
                    domProps: { value: _vm.buyAd.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.buyAd, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.buyAd.name && !_vm.errors.name
                    ? _c("i", { staticClass: "fa fa-check-circle" })
                    : _vm.errors.name
                      ? _c("i", { staticClass: "fa fa-times-circle" })
                      : _c("i", { staticClass: "fa fa-edit" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-text-wrapper" }, [
                  _c("p", { staticClass: "error-message" }, [
                    _vm.errors.name
                      ? _c("span", {
                          staticClass: "red-text",
                          domProps: { textContent: _vm._s(_vm.errors.name) }
                        })
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xs-12 col-md-6" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "description",
                    attrs: { for: "requirement_amount" }
                  },
                  [_vm._v("\n              مثلا: 50,000\n            ")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-input-wrapper" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buyAd.requirement_amount,
                        expression: "buyAd.requirement_amount"
                      }
                    ],
                    class: {
                      active: _vm.buyAd.requirement_amount,
                      error: _vm.errors.requirement_amount
                    },
                    attrs: {
                      id: "requirement_amount",
                      type: "tel",
                      placeholder: "میزان نیازمندی را وارد کنید",
                      pattern: "[0-9]*"
                    },
                    domProps: { value: _vm.buyAd.requirement_amount },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.buyAd,
                          "requirement_amount",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.buyAd.requirement_amount && !_vm.errors.requirement_amount
                    ? _c("i", { staticClass: "fa fa-check-circle" })
                    : _vm.errors.requirement_amount
                      ? _c("i", { staticClass: "fa fa-times-circle" })
                      : _c("i", { staticClass: "fa fa-edit" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-text-wrapper" }, [
                  !_vm.errors.requirement_amount
                    ? _c("p", { staticClass: "small-description-text" }, [
                        _vm.requirement_amount_text
                          ? _c("span", {
                              staticClass: "blue-text",
                              domProps: {
                                textContent: _vm._s(_vm.requirement_amount_text)
                              }
                            })
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("p", { staticClass: "error-message" }, [
                    _vm.errors.requirement_amount
                      ? _c("span", {
                          staticClass: "red-text",
                          domProps: {
                            textContent: _vm._s(_vm.errors.requirement_amount)
                          }
                        })
                      : _vm._e()
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "submit-button-wrapper col-xs-12" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "button",
                  {
                    staticClass: "submit-button disabled",
                    class: {
                      active:
                        _vm.buyAd.category_id && _vm.buyAd.requirement_amount
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.formValidator($event)
                      }
                    }
                  },
                  [_vm._v("\n              ثبت درخواست\n            ")]
                )
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "title-contents col-xs-12" }, [
      _vm._v("\n              میزان نیازمندی\n\n              "),
      _c("span", { staticClass: "small-label" }, [_vm._v("(کیلوگرم)")]),
      _vm._v(" "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" * ")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-039466f4", module.exports)
  }
}

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(863);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("82d1ec1c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01eaf54d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-register-request.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01eaf54d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-register-request.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.header-request h2[data-v-01eaf54d] {\n  font-size: 22px;\n  margin: 0;\n  margin-bottom: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_register_request_form__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_register_request_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_register_request_form__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    mainRegisterRequestForm: __WEBPACK_IMPORTED_MODULE_0__main_register_request_form___default.a
  }
});

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-content-index-pages" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "main-request-content" },
          [
            _c("main-register-request-form", {
              attrs: { "wrapper-bg": "true" }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "header-request wrapper-bg text-center col-xs-12" },
      [
        _c("h2", [_vm._v("\n          ثبت درخواست خرید\n        ")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n          برای ثبت درخواست خرید فرم زیر را کامل کنید\n        "
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-01eaf54d", module.exports)
  }
}

/***/ })

});