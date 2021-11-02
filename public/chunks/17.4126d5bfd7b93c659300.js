webpackJsonp([17],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      phoneNumber: ""
    };
  },
  methods: {
    submitPhone: function submitPhone() {
      if (!this.phoneNumber) {
        this.$parent.errors.phone = "لطفا  شماره موبایل خود را وارد کنید";
      } else if (this.phoneNumber && this.phoneNumber.length < 11) {
        this.$parent.errors.phone = "لطفا  شماره موبایل خود را به صورت کامل وارد کنید";
      } else if (!this.$parent.errors.phone) {
        this.$parent.sendVerificationCode();
      }
    }
  },
  watch: {
    phoneNumber: function phoneNumber(value) {
      this.$parent.errors.phone = "";

      if (value) {
        if (this.phoneNumber.length >= 11) {
          this.phoneNumber = this.phoneNumber.substring(0, 11);
        }
        var number = this.$parent.toLatinNumbers(value);
        if (!this.$parent.validateRegx(number, /^\d*$/)) {
          this.$parent.errors.phone = "لطفا شماره موبایل را به صورت عددی وارد کنید";
        } else if (number.length >= 2) {
          if (number.substring(0, 2) != "09") {
            this.$parent.errors.phone = "فرمت شماره موبایل درست نیست";
          }
        }
        if (!this.$parent.errors.phone) {
          this.$parent.step1.phone = number;
        }
      }
    }
  },
  mounted: function mounted() {
    if (this.$parent.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
  }
});

/***/ }),

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      errors: {
        number1: "",
        number2: "",
        number3: "",
        number4: ""
      },
      code: {
        number1: "",
        number2: "",
        number3: "",
        number4: ""
      },
      currentCode: ""
    };
  },
  methods: {
    init: function init() {
      this.inputCodeLimits();
    },
    submitVerifyCode: function submitVerifyCode() {
      if (this.$parent.step2.verification_code) {
        if (!this.$parent.errors.verification_code) {
          this.$parent.verifyCode();
        }
      } else {
        this.$parent.errors.verification_code = "لطفا کد تایید را وارد کنید.";
      }
    },
    inputCodeLimits: function inputCodeLimits() {
      var inputElements = [].concat(_toConsumableArray($("input.code-input")));

      inputElements.forEach(function (ele, index) {
        ele.addEventListener("keydown", function (e) {
          if (e.keyCode === 8 && e.target.value === "") inputElements[Math.max(0, index - 1)].focus();
        });
        ele.addEventListener("input", function (e) {
          var _e$target$value = _toArray(e.target.value),
              first = _e$target$value[0],
              rest = _e$target$value.slice(1);

          e.target.value = first ? first : "";
          if (index !== inputElements.length - 1 && first !== undefined) {
            inputElements[index + 1].focus();
            inputElements[index + 1].value = rest.join("");
            inputElements[index + 1].dispatchEvent(new Event("input"));
          }
        });
      });
    },
    validateVerifyNumber: function validateVerifyNumber(value) {
      this.errors.each;
      if (!this.$parent.validateRegx(value, /^\d*$/)) {
        return "لطفا  فقط عدد وارد کنید";
      }
    },
    sumCodeNumbers: function sumCodeNumbers() {
      var code = this.code.number1 + this.code.number2 + this.code.number3 + this.code.number4;

      this.currentCode = this.$parent.toLatinNumbers(code);
    },
    resetNumbers: function resetNumbers() {
      this.currentCode = "";
      this.code.number1 = "";
      this.code.number2 = "";
      this.code.number3 = "";
      this.code.number4 = "";
      this.$parent.errors.verification_code = "";
    },
    reSendCode: function reSendCode() {
      this.resetNumbers();
      this.$parent.sendVerificationCode();
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    "code.number1": function codeNumber1(value) {
      this.sumCodeNumbers();
      this.errors.number1 = false;
      if (value) {
        var error = this.validateVerifyNumber(this.currentCode);
        this.$parent.errors.verification_code = error;
      }
    },
    "code.number2": function codeNumber2(value) {
      this.sumCodeNumbers();
      this.errors.number2 = false;
      if (value) {
        var error = this.validateVerifyNumber(this.currentCode);
        this.$parent.errors.verification_code = error;
      }
    },
    "code.number3": function codeNumber3(value) {
      this.sumCodeNumbers();
      this.errors.number3 = false;
      if (value) {
        var error = this.validateVerifyNumber(this.currentCode);
        this.$parent.errors.verification_code = error;
      }
    },
    "code.number4": function codeNumber4(value) {
      this.sumCodeNumbers();
      this.errors.number4 = false;
      if (value) {
        var error = this.validateVerifyNumber(this.currentCode);
        this.$parent.errors.verification_code = error;
      }
    },
    currentCode: function currentCode(value) {
      if (value) {
        this.$parent.step2.verification_code = value;
        if (value.length == 4) {
          this.submitVerifyCode();
        }
      }
    },
    "$parent.step2.verification_code": function $parentStep2Verification_code(code) {
      if (!code) [this.resetNumbers()];
    }
  }
});

/***/ }),

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      name: "",
      family: "",
      activityDomain: "",
      activityType: "",
      error: ""
    };
  },
  methods: {
    nexStep: function nexStep() {
      this.$parent.errors.name = "";
      this.$parent.errors.family = "";
      this.$parent.step3.name = this.name;
      this.$parent.step3.family = this.family;
      this.$parent.step3.sex = 1;
      this.$parent.setPersonalInformation();
    },
    setProvince: function setProvince(event) {
      $("#province").addClass("active").removeClass("error");
      this.$parent.setProvinceName(event);
    },
    setCity: function setCity(event) {
      $("#city").addClass("active").removeClass("error");
      this.$parent.setCityName(event);
      if ($(event.target).val().length >= 0) {
        $(".submit-button").removeClass("disabled").addClass("active");
      }
    }
  },

  mounted: function mounted() {
    this.$parent.getProvinceList();
  },

  watch: {
    name: function name(text) {
      if (text == " ") {
        this.name = "";
      }
      text = $.trim(text);

      this.$parent.errors.name = "";
      if (text) {
        var error = this.$parent.textValidator(text, "نام");
        if (error) {
          this.$parent.errors.name = error;
        } else {
          this.$parent.step4.name = this.name;
        }
      } else {
        this.$parent.step4.name = "";
      }
    },
    family: function family(text) {
      if (text == " ") {
        this.family = "";
      }
      text = $.trim(text);
      this.$parent.errors.family = "";

      if (text) {
        var error = this.$parent.textValidator(text, "نام خانوادگی");
        if (error) {
          this.$parent.errors.family = error;
        } else {
          this.$parent.step4.family = text;
        }
      } else {
        this.$parent.step4.family = "";
      }
    }
  }
});

/***/ }),

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_number_vue__ = __webpack_require__(1049);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ff8bdc6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_number_vue__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(1053)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ff8bdc6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_number_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ff8bdc6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_number_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ff8bdc6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_number_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/register/register-steps/register-number.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ff8bdc6", Component.options)
  } else {
    hotAPI.reload("data-v-3ff8bdc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1053:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1054);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("705d265e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3ff8bdc6\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register-number.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3ff8bdc6\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register-number.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\np[data-v-3ff8bdc6],\nspan[data-v-3ff8bdc6] {\n  line-height: 1.5;\n}\nlabel.input-title[data-v-3ff8bdc6] {\n  text-align: center;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 26px;\n}\n.submit-button[data-v-3ff8bdc6] {\n  background: #c2c9d1;\n  color: #9e9e9e;\n  border: none;\n  border-radius: 8px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 0 9px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  cursor: default;\n  margin: 5px auto 0;\n  display: block;\n}\n.submit-button.active[data-v-3ff8bdc6] {\n  background: #00c569;\n  cursor: pointer;\n  color: #fff;\n}\n.title-contents[data-v-3ff8bdc6] {\n  font-weight: bold;\n  font-size: 19px;\n}\n.form-contents[data-v-3ff8bdc6] {\n  margin: 0 auto;\n  max-width: 400px;\n}\n.form-contents lable[data-v-3ff8bdc6] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-3ff8bdc6] {\n  margin: 6px auto 4px;\n  position: relative;\n}\ninput[data-v-3ff8bdc6] {\n  width: 100%;\n\n  border-radius: 8px;\n\n  border: 1px solid;\n\n  padding: 8px 15px 9px 45px;\n\n  color: #bebebe;\n\n  direction: ltr;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n}\n.input-wrapper i[data-v-3ff8bdc6] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n}\ninput[data-v-3ff8bdc6]:focus,\ninput:focus + i[data-v-3ff8bdc6] {\n  color: #333;\n}\ninput.active[data-v-3ff8bdc6] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-3ff8bdc6] {\n  color: #00c569;\n}\ninput.active[data-v-3ff8bdc6]:focus,\ninput.active:focus + i[data-v-3ff8bdc6],\ninput.active + i[data-v-3ff8bdc6] {\n  border-color: #00c569;\n}\ninput.error[data-v-3ff8bdc6] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-3ff8bdc6] {\n  color: #e41c38;\n}\ninput.error[data-v-3ff8bdc6]:focus,\ninput.error:focus + i[data-v-3ff8bdc6] {\n  border-color: #e41c38;\n}\n.error-message[data-v-3ff8bdc6] {\n  text-align: right;\n  color: #e41c38;\n  height: 25px;\n  margin-bottom: 5px;\n  direction: rtl;\n  font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-contents col-xs-12" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "label",
        { staticClass: "input-title", attrs: { for: "phone-number" } },
        [
          _vm._v(
            "\n      برای ورود یا ثبت نام، شماره همراه خود را وارد کنید.\n    "
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "input-wrapper user-phone-number-wrapper" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.phoneNumber,
              expression: "phoneNumber"
            }
          ],
          staticClass: "dire",
          class: {
            error: _vm.$parent.errors.phone,
            active: this.phoneNumber.length >= 11
          },
          attrs: {
            id: "phone-number",
            type: "tel",
            placeholder: "شماره موبایل",
            pattern: "[0-9]*"
          },
          domProps: { value: _vm.phoneNumber },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.phoneNumber = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-phone-square-alt" })
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "error-message" }, [
        _vm.$parent.errors.phone
          ? _c("i", { staticClass: "fa fa-exclamation" })
          : _vm._e(),
        _vm._v(" "),
        _vm.$parent.errors.phone
          ? _c("span", {
              domProps: { textContent: _vm._s(_vm.$parent.errors.phone) }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "submit-button disabled",
          class: {
            active: this.phoneNumber.length >= 11 && _vm.$parent.step1.sendCode
          },
          attrs: { disabled: !_vm.$parent.step1.sendCode },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.submitPhone()
            }
          }
        },
        [
          _vm._v("\n      ورود\n      "),
          _vm.$parent.verifyCodeBtnLoading
            ? _c("i", { staticClass: "fas fa-circle-notch fa-spin" })
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ff8bdc6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_verify_code_vue__ = __webpack_require__(1050);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7016fd54_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_verify_code_vue__ = __webpack_require__(1059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(1057)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7016fd54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_verify_code_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7016fd54_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_verify_code_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7016fd54_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_verify_code_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/register/register-steps/verify-code.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7016fd54", Component.options)
  } else {
    hotAPI.reload("data-v-7016fd54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1058);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("41757142", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7016fd54\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verify-code.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7016fd54\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verify-code.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\np[data-v-7016fd54],\nspan[data-v-7016fd54] {\n  line-height: 1.5;\n}\n.from-wrapper[data-v-7016fd54] {\n  max-width: 400px;\n  margin: 0 auto;\n  overflow: hidden;\n  width: 100%;\n}\n.title-contents[data-v-7016fd54] {\n  font-weight: 500;\n  font-size: 18px;\n  color: #555;\n  margin-bottom: 16px;\n}\n.form-contents[data-v-7016fd54] {\n  line-height: 1.618;\n}\n.form-contents label[data-v-7016fd54] {\n  text-align: center;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 26px;\n  color: #000;\n}\n.input-wrapper[data-v-7016fd54] {\n  margin: 0 auto;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\ninput[data-v-7016fd54] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid;\n  color: #bdc4cc;\n  padding: 8px 0 8px;\n  direction: ltr;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n  background: #fbfbfb;\n  max-width: 70px;\n  text-align: center;\n}\n.input-wrapper i[data-v-7016fd54] {\n  display: inline-block;\n  position: absolute;\n  left: 15px;\n  font-size: 21px;\n  color: #bebebe;\n  top: 11px;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\ninput[data-v-7016fd54]:focus,\ninput:focus + i[data-v-7016fd54] {\n  color: #333;\n}\ninput.active[data-v-7016fd54] {\n  border-color: #4dc0bb;\n  color: #333;\n}\ninput.active + i[data-v-7016fd54] {\n  color: #4dc0bb;\n}\ninput.active[data-v-7016fd54]:focus,\ninput.active:focus + i[data-v-7016fd54],\ninput.active + i[data-v-7016fd54] {\n  border-color: #4dc0bb;\n}\ninput.error[data-v-7016fd54] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-7016fd54] {\n  color: #e41c38;\n}\ninput.error[data-v-7016fd54]:focus,\ninput.error:focus + i[data-v-7016fd54] {\n  border-color: #e41c38;\n}\n.error-message[data-v-7016fd54] {\n  color: #e41c38;\n  height: 22px;\n  direction: rtl;\n  font-size: 13px;\n  padding-top: 2px;\n}\n.step-action[data-v-7016fd54] {\n  margin-top: 18px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.submit-button[data-v-7016fd54] {\n  background: #e0e0e0;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  width: 100%;\n  font-size: 18px;\n  padding: 8px;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n  cursor: default;\n  max-width: 147px;\n  display: inline-block;\n}\n.submit-button.back-button[data-v-7016fd54] {\n  background: #fff;\n  color: #909090;\n  border: 1px solid #bebebe;\n  cursor: pointer;\n  max-width: 127px;\n}\n.submit-button.active[data-v-7016fd54] {\n  background: #00c569;\n  cursor: pointer;\n}\n.submit-button.active:hover i[data-v-7016fd54] {\n  right: 3px;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.submit-button i[data-v-7016fd54] {\n  position: relative;\n  top: 1px;\n  font-size: 14px;\n  right: 0;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.count-down-timer[data-v-7016fd54] {\n  text-align: center;\n  margin-top: 16px;\n  margin-bottom: -2px;\n}\n.count-down-timer p[data-v-7016fd54] {\n  font-weight: bold;\n}\n.resend-code-button[data-v-7016fd54] {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-rtl from-wrapper" }, [
    _c(
      "form",
      {
        staticClass: "form-contents col-xs-12",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.submitVerifyCode()
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("label", { staticClass: "input-title", attrs: { for: "code" } }, [
            _vm._v("\n        کد ۴ رقمی ارسال شده به شماره ی\n        "),
            _c("span", {
              domProps: { textContent: _vm._s(_vm.$parent.step1.phone) }
            }),
            _vm._v("\n        را وارد کنید.\n      ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-wrapper" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.code.number1,
                  expression: "code.number1"
                }
              ],
              staticClass: "code-input",
              class: {
                error: this.$parent.errors.verification_code,
                active: _vm.code.number1.length
              },
              attrs: {
                id: "code",
                name: "code",
                placeholder: "_",
                maxlength: "1",
                type: "tel",
                pattern: "[0-9]*",
                onfocus: "this.select();"
              },
              domProps: { value: _vm.code.number1 },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.code, "number1", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.code.number2,
                  expression: "code.number2"
                }
              ],
              staticClass: "code-input",
              class: {
                error: this.$parent.errors.verification_code,
                active: _vm.code.number2.length
              },
              attrs: {
                name: "code",
                placeholder: "_",
                maxlength: "1",
                type: "tel",
                pattern: "[0-9]*",
                onfocus: "this.select();"
              },
              domProps: { value: _vm.code.number2 },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.code, "number2", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.code.number3,
                  expression: "code.number3"
                }
              ],
              staticClass: "code-input",
              class: {
                error: this.$parent.errors.verification_code,
                active: _vm.code.number3.length
              },
              attrs: {
                name: "code",
                placeholder: "_",
                maxlength: "1",
                type: "tel",
                pattern: "[0-9]*",
                onfocus: "this.select();"
              },
              domProps: { value: _vm.code.number3 },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.code, "number3", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.code.number4,
                  expression: "code.number4"
                }
              ],
              staticClass: "code-input",
              class: {
                error: this.$parent.errors.verification_code,
                active: _vm.code.number4.length
              },
              attrs: {
                name: "code",
                placeholder: "_",
                maxlength: "1",
                type: "tel",
                pattern: "[0-9]*",
                onfocus: "this.select();"
              },
              domProps: { value: _vm.code.number4 },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.code, "number4", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "error-message" }, [
            _vm.$parent.errors.verification_code
              ? _c("span", {
                  domProps: {
                    textContent: _vm._s(_vm.$parent.errors.verification_code)
                  }
                })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "count-down-timer" }, [
            _vm.$parent.step2.showTimer
              ? _c("p", { staticClass: "gray-text text-center" }, [
                  _vm._v("\n          ارسال مجدد کد تا\n          "),
                  _c("span", {
                    staticClass: "blue-text",
                    domProps: {
                      textContent: _vm._s(_vm.$parent.step2.timeCounterDown)
                    }
                  }),
                  _vm._v("\n          ثانیه دیگر\n        ")
                ])
              : _c(
                  "button",
                  {
                    staticClass: "resend-code-button blue-text",
                    attrs: {
                      type: "button",
                      disabled: _vm.$parent.step2.reSendCode === false,
                      value: _vm.$parent.step2.timeCounterDown
                    },
                    on: {
                      click: function($event) {
                        _vm.reSendCode()
                      }
                    }
                  },
                  [_vm._v("\n          ارسال مجدد کد تایید\n        ")]
                )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "step-action text-left" }, [
            _c(
              "button",
              {
                staticClass: "submit-button disabled",
                class: {
                  active:
                    _vm.currentCode.length >= 4 &&
                    !this.$parent.errors.verification_code &&
                    !_vm.$parent.step3.verifyCodeLoader
                },
                attrs: { disabled: _vm.$parent.step3.verifyCodeLoader },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.submitVerifyCode()
                  }
                }
              },
              [
                _vm._v("\n          ثبت کد\n\n          "),
                _vm.$parent.step3.verifyCodeLoader
                  ? _c("i", { staticClass: "fas fa-circle-notch fa-spin" })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "submit-button back-button",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.$parent.currentStep--
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-arrow-right" }),
                _vm._v("\n          مرحله قبل\n        ")
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7016fd54", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_complementary_info_vue__ = __webpack_require__(1051);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8e3cdb54_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_complementary_info_vue__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(1061)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8e3cdb54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_complementary_info_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8e3cdb54_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_complementary_info_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8e3cdb54_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_complementary_info_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/register/register-steps/complementary-info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e3cdb54", Component.options)
  } else {
    hotAPI.reload("data-v-8e3cdb54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1062);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("54bf2f72", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-8e3cdb54\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./complementary-info.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-8e3cdb54\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./complementary-info.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\np[data-v-8e3cdb54],\nspan[data-v-8e3cdb54] {\n  line-height: 1.5;\n}\ninput[type=\"text\"][data-v-8e3cdb54],\nselect[data-v-8e3cdb54],\ntextarea[data-v-8e3cdb54] {\n  border-radius: 8px;\n}\nlabel.input-title[data-v-8e3cdb54] {\n  display: inline-block;\n  background: #fff;\n  padding: 5px;\n  position: relative;\n  z-index: 1;\n  bottom: -13px;\n  right: 12px;\n  font-weight: 400;\n  color: #000;\n  font-size: 12px;\n  margin: 0;\n}\n.submit-button[data-v-8e3cdb54] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 0 9px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  cursor: default;\n}\n.submit-button.active[data-v-8e3cdb54] {\n  background: #00c569;\n  cursor: pointer;\n}\n.title-contents[data-v-8e3cdb54] {\n  font-weight: bold;\n  font-size: 19px;\n}\n.form-contents[data-v-8e3cdb54] {\n  margin: 5px auto;\n}\n.form-contents lable[data-v-8e3cdb54] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-8e3cdb54] {\n  margin: 6px auto 4px;\n  position: relative;\n}\ninput[data-v-8e3cdb54] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid;\n  padding: 8px 15px 9px;\n  color: #bebebe;\n  direction: ltr;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  direction: rtl;\n  margin: 0;\n}\n.input-wrapper i[data-v-8e3cdb54] {\n  display: inline-block;\n  position: absolute;\n  left: 15px;\n  font-size: 20px;\n  color: #bebebe;\n  top: 9px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\ninput.active[data-v-8e3cdb54] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-8e3cdb54] {\n  color: #00c569;\n}\ninput.active[data-v-8e3cdb54]:focus,\ninput.active:focus + i[data-v-8e3cdb54],\ninput.active + i[data-v-8e3cdb54] {\n  border-color: #00c569;\n}\ninput.error[data-v-8e3cdb54] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-8e3cdb54] {\n  color: #e41c38;\n}\ninput.error[data-v-8e3cdb54]:focus,\ninput.error:focus + i[data-v-8e3cdb54] {\n  border-color: #e41c38;\n}\n.error-message[data-v-8e3cdb54] {\n  text-align: center;\n  color: #e41c38;\n  font-weight: bold;\n  height: 25px;\n  margin-bottom: 5px;\n  direction: rtl;\n  font-size: 12px;\n}\n.radio-wrapper[data-v-8e3cdb54] {\n  margin: 10px auto;\n}\n.label-radio[data-v-8e3cdb54] {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  direction: rtl;\n  padding: 0 29px 0 15px;\n  font-size: 14px;\n}\n.label-radio[data-v-8e3cdb54]:nth-of-type(2) {\n  margin-left: 16px;\n}\n/* Hide the browser's default radio button */\n.label-radio input[data-v-8e3cdb54] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  margin: 0;\n}\n\n/* Create a custom radio button */\n.checkmark[data-v-8e3cdb54] {\n  position: absolute;\n  top: 16px;\n  right: 13px;\n  height: 12px;\n  width: 12px;\n  background-color: #eee;\n  border-radius: 50%;\n}\n\n/* On mouse-over, add a grey background color */\n.label-radio:hover input ~ .checkmark[data-v-8e3cdb54] {\n  background-color: #ccc;\n}\n\n/* When the radio button is checked, add a blue background */\n.label-radio input:checked ~ .checkmark[data-v-8e3cdb54] {\n  background-color: #00c569;\n}\n.label-radio input:checked ~ label[data-v-8e3cdb54]::after {\n  border-color: #00c569;\n}\n.label-radio label[data-v-8e3cdb54]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -2px;\n  bottom: 0;\n  z-index: 0;\n  margin: 0;\n  padding: 0;\n  border-radius: 3px;\n  border: 1px solid #bdc4cc;\n}\n.label-radio.error label[data-v-8e3cdb54]::after {\n  border: 1px solid #e41c38;\n}\n.label-radio label svg[data-v-8e3cdb54] {\n  width: 20px;\n  height: 30px;\n  float: right;\n  margin-top: -5px;\n}\n.label-radio label span[data-v-8e3cdb54] {\n  margin: 0 5px;\n}\n.cls-1[data-v-8e3cdb54] {\n  fill: #333;\n}\n.cls-2[data-v-8e3cdb54] {\n  fill: #333;\n}\nselect[data-v-8e3cdb54] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid;\n  padding: 8px 15px;\n  position: relative;\n  z-index: 1;\n  color: #bebebe;\n  direction: rtl;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  background: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n}\n.input-wrapper i[data-v-8e3cdb54] {\n  display: inline-block;\n  position: absolute;\n  left: 15px;\n  font-size: 20px;\n  color: #bebebe;\n  top: 9px;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\nselect option[data-v-8e3cdb54] {\n  color: #333;\n}\nselect[data-v-8e3cdb54]:focus {\n  color: #333;\n}\nselect.active[data-v-8e3cdb54] {\n  color: #00c569;\n}\nselect.active[data-v-8e3cdb54]:focus {\n  color: #00c569;\n}\nselect.error[data-v-8e3cdb54] {\n  color: #e41c38;\n}\nselect.error[data-v-8e3cdb54]:focus {\n  color: #e41c38;\n}\n.input-wrapper[data-v-8e3cdb54]:after {\n  content: \"\\F107\";\n  color: #bebebe;\n  position: absolute;\n  display: inline-block;\n  top: 14px;\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n  font-weight: 900;\n  left: 25px;\n  font-size: 15px;\n  z-index: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-contents col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "user-phone-number-wrapper" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-6 pull-right" }, [
              _c(
                "label",
                { staticClass: "input-title", attrs: { for: "first-name" } },
                [_vm._v("نام ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.name,
                    expression: "name"
                  }
                ],
                staticClass: "dire",
                class: {
                  error: _vm.$parent.errors.name,
                  active: _vm.name.length
                },
                attrs: { id: "first-name", type: "text" },
                domProps: { value: _vm.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.name = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("p", { staticClass: "error-message" }, [
                _vm.$parent.errors.name
                  ? _c("span", {
                      domProps: { textContent: _vm._s(_vm.$parent.errors.name) }
                    })
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-6" }, [
              _c(
                "label",
                { staticClass: "input-title", attrs: { for: "last-name" } },
                [_vm._v("نام خانوادگی")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.family,
                    expression: "family"
                  }
                ],
                staticClass: "dire",
                class: {
                  error: _vm.$parent.errors.family,
                  active: _vm.family.length
                },
                attrs: { id: "last-name", type: "text" },
                domProps: { value: _vm.family },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.family = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "error-message" }, [
              _vm.$parent.errors.family
                ? _c("span", {
                    domProps: { textContent: _vm._s(_vm.$parent.errors.family) }
                  })
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "input-wrapper province-wrapper col-xs-6 pull-right"
            },
            [
              _c(
                "select",
                {
                  staticClass: "dire",
                  class: { error: _vm.error },
                  attrs: { id: "province" },
                  on: {
                    change: function($event) {
                      _vm.setProvince($event)
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", disabled: "" } }, [
                    _vm._v("استان")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.$parent.step3.provinceList, function(
                    province,
                    index
                  ) {
                    return _c("option", {
                      key: index,
                      domProps: {
                        selected:
                          _vm.$parent.step3.province == province.province_name,
                        value: province.province_name,
                        textContent: _vm._s(province.province_name)
                      }
                    })
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "input-wrapper province-wrapper col-xs-6" },
            [
              _c(
                "select",
                {
                  staticClass: "dire",
                  class: { error: _vm.error },
                  attrs: { id: "city" },
                  on: {
                    change: function($event) {
                      _vm.setCity($event)
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", disabled: "" } }, [
                    _vm._v("شهر")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.$parent.step3.cityList, function(city, index) {
                    return _c("option", {
                      key: index,
                      domProps: {
                        selected: _vm.$parent.step3.city == city.city_name,
                        value: city.city_name,
                        textContent: _vm._s(city.city_name)
                      }
                    })
                  })
                ],
                2
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-wrapper activity-domain-wrapper" }, [
          _c(
            "select",
            {
              staticClass: "dire",
              class: { error: _vm.error },
              attrs: { id: "activity-domain" },
              on: {
                change: function($event) {
                  _vm.getActivityDomain($event)
                }
              }
            },
            [
              _c("option", { attrs: { disabled: "", selected: "" } }, [
                _vm._v("انتخاب کنید")
              ]),
              _vm._v(" "),
              _vm._l(_vm.$parent.step4.categoryList, function(category, index) {
                return _c("option", {
                  key: index,
                  domProps: {
                    selected: _vm.$parent.step4.categoryId == category.id,
                    value: category.id,
                    textContent: _vm._s(category.category_name)
                  }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("p", { staticClass: "error-message" }, [
            _vm.$parent.errors.category_id
              ? _c("span", {
                  domProps: {
                    textContent: _vm._s(_vm.$parent.errors.category_id)
                  }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "radio-wrapper" }, [
          _c("div", { staticClass: "radio-wrapper" }, [
            _c("div", { staticClass: "label-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.activityType,
                    expression: "activityType"
                  }
                ],
                attrs: { type: "radio", value: "1", name: "radio" },
                domProps: {
                  checked: "1" == _vm.$parent.step4.activity_type,
                  checked: _vm._q(_vm.activityType, "1")
                },
                on: {
                  change: function($event) {
                    _vm.activityType = "1"
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "checkmark" }),
              _vm._v(" "),
              _c("label", [
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16.55",
                      height: "20.411",
                      viewBox: "0 0 16.55 20.411"
                    }
                  },
                  [
                    _c("path", {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Path_7",
                        "data-name": "Path 7",
                        d:
                          "M15.781,12.574l-3.81-1.1a1.017,1.017,0,0,1-.2-.082.333.333,0,0,0-.16-.105,1.036,1.036,0,0,1-.388-.8V9.419a3.676,3.676,0,0,0,1.233-2.747V3.784a3.684,3.684,0,1,0-7.368,0V6.672A3.675,3.675,0,0,0,6.286,9.385v1.094a1.037,1.037,0,0,1-.745.991l-3.812,1.1A2.407,2.407,0,0,0,0,14.875v4.567a.337.337,0,1,0,.674,0V14.875a1.73,1.73,0,0,1,1.243-1.654l1.415-.409a.331.331,0,0,0,.026.032L5.17,14.656a1.38,1.38,0,0,0,1.781.149l.636-.453a1.213,1.213,0,0,0,.45.722L6.613,21.943a.526.526,0,0,0,.127.451l1.425,1.894.031.036a.819.819,0,0,0,1.157,0l.017-.017,1.442-1.915a.528.528,0,0,0,.123-.455L9.515,15.073a1.213,1.213,0,0,0,.449-.721l.636.453a1.38,1.38,0,0,0,1.781-.149l1.834-1.834,1.38.4a1.73,1.73,0,0,1,1.243,1.654v4.567a.337.337,0,0,0,.674,0V14.875A2.407,2.407,0,0,0,15.781,12.574ZM10.012,1.05l-.03-.024.037.017ZM5.766,6.674V4.89q.186.018.373.018A3.936,3.936,0,0,0,8.918,3.761L9.929,2.751a1.531,1.531,0,0,1,.795.466,2.382,2.382,0,0,0,1.062.616v2.84a3.01,3.01,0,1,1-6.021,0Zm3.01,3.684A3.661,3.661,0,0,0,10.554,9.9v.582a1.706,1.706,0,0,0,.411,1.106l-1.9,1.351a1.17,1.17,0,0,0-.58,0L6.561,11.568a1.705,1.705,0,0,0,.4-1.089V9.873a3.66,3.66,0,0,0,1.816.484Zm-2.219,3.9a.708.708,0,0,1-.914-.077L4.064,12.6l1.664-.482A1.685,1.685,0,0,0,6.013,12L7.86,13.319c-.007.009-.015.016-.022.025Zm3.7,7.75-1.4,1.855a.144.144,0,0,1-.179,0l-1.4-1.855,1.383-6.681c.034,0,.067.005.1.005a.67.67,0,0,0,.1-.005ZM11.9,14.178a.708.708,0,0,1-.913.076l-1.28-.911c-.007-.009-.015-.016-.022-.025l1.83-1.3a1.685,1.685,0,0,0,.264.1l1.7.491Z",
                        transform: "translate(0 -0.1)"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "cls-1",
                      attrs: {
                        id: "Path_8",
                        "data-name": "Path 8",
                        d:
                          "M199.657,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,199.657,230.69Z",
                        transform: "translate(-185.887 -215.15)"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "cls-1",
                      attrs: {
                        id: "Path_9",
                        "data-name": "Path 9",
                        d:
                          "M51.407,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,51.407,230.69Z",
                        transform: "translate(-47.628 -215.15)"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "cls-1",
                      attrs: {
                        id: "Path_10",
                        "data-name": "Path 10",
                        d:
                          "M101.82,98.128a2.188,2.188,0,0,0,2.022-1.39.337.337,0,1,0-.628-.244,1.5,1.5,0,0,1-2.793,0,.337.337,0,1,0-.628.244,2.188,2.188,0,0,0,2.028,1.39Z",
                        transform: "translate(-93.045 -89.797)"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", [_vm._v("خریدار")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "label-radio" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.activityType,
                    expression: "activityType"
                  }
                ],
                attrs: { type: "radio", value: "0", name: "radio" },
                domProps: {
                  checked: "0" == _vm.$parent.step4.activity_type,
                  checked: _vm._q(_vm.activityType, "0")
                },
                on: {
                  change: function($event) {
                    _vm.activityType = "0"
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "checkmark" }),
              _vm._v(" "),
              _c("label", [
                _c(
                  "svg",
                  {
                    attrs: {
                      id: "Layer_1",
                      "data-name": "Layer 1",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "17.511",
                      height: "24.462",
                      viewBox: "0 0 17.511 24.462"
                    }
                  },
                  [
                    _c(
                      "g",
                      {
                        attrs: {
                          id: "Layer_1",
                          "data-name": "Layer 1",
                          transform: "translate(0 0)"
                        }
                      },
                      [
                        _c("path", {
                          staticClass: "cls-1",
                          attrs: {
                            id: "Path_11",
                            "data-name": "Path 11",
                            d:
                              "M14.915,13.164l-3.6-1.043a.98.98,0,0,1-.7-.936V10.3a.318.318,0,0,0-.018-.1,3.474,3.474,0,0,0,1.183-2.611V6.03H14.35V5.138H11.774V3.582a3.482,3.482,0,1,0-6.964,0V5.138H2.185V6.03H4.811V7.586a3.474,3.474,0,0,0,1.155,2.588.318.318,0,0,0-.026.127v.885a.98.98,0,0,1-.7.936L1.634,13.164A2.275,2.275,0,0,0,0,15.339v4.316a.318.318,0,0,0,.637,0V15.339a1.635,1.635,0,0,1,1.175-1.564l1.282-.369v6.627a.478.478,0,1,0,.955,0v-6.7a.475.475,0,0,0-.041-.191l1.223-.354v1.465a1.517,1.517,0,0,0,1.539,1.491H9.764A1.517,1.517,0,0,0,11.3,14.252V12.781l1.248.361a.477.477,0,0,0-.015.118v6.773a.478.478,0,1,0,.955,0V13.415l1.246.361a1.635,1.635,0,0,1,1.175,1.563v4.316a.318.318,0,1,0,.637,0V15.339A2.275,2.275,0,0,0,14.915,13.164ZM5.448,3.582a2.845,2.845,0,1,1,5.69,0V5.138H5.448Zm0,4V6.03h5.69V7.586a2.845,2.845,0,1,1-5.69,0ZM9.764,15.1H6.771a.88.88,0,0,1-.9-.854V12.517a1.62,1.62,0,0,0,.708-1.333v-.573a3.471,3.471,0,0,0,3.4.02v.55a1.62,1.62,0,0,0,.694,1.324v1.742a.88.88,0,0,1-.9.858Z",
                            transform: "translate(0 -0.1)"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          staticClass: "cls-1",
                          attrs: {
                            id: "Path_12",
                            "data-name": "Path 12",
                            d:
                              "M101.307,118.036a2.068,2.068,0,0,0,1.911-1.314.318.318,0,1,0-.594-.231,1.414,1.414,0,0,1-2.64,0,.318.318,0,1,0-.594.231A2.068,2.068,0,0,0,101.307,118.036Z",
                            transform: "translate(-93.039 -108.888)"
                          }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("span", [_vm._v("فروشنده")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "error-message" }, [
            _vm.error
              ? _c("span", { domProps: { textContent: _vm._s(_vm.error) } })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "submit-button disabled",
            class: { active: _vm.name.length && _vm.family.length },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.nexStep()
              }
            }
          },
          [_vm._v("\n        مرحله بعد\n      ")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8e3cdb54", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__ = __webpack_require__(472);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_658de808_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(958)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-658de808"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_658de808_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_658de808_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/register/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-658de808", Component.options)
  } else {
    hotAPI.reload("data-v-658de808", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 265:
/***/ (function(module, exports) {

/*!
 * device-uuid.js v1.0.4 (https://github.com/biggora/device-uuid/)
 * Copyright 2016-2017 Alexey Gordeyev
 * Licensed under MIT (https://github.com/biggora/device-uuid/blob/master/LICENSE)
 */
/*global
 screen, window, navigator
 */
(function (exports) {
    'use strict';

    var BOTS = [
        '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
        'googlebot',
        'baiduspider',
        'gurujibot',
        'yandexbot',
        'slurp',
        'msnbot',
        'bingbot',
        'facebookexternalhit',
        'linkedinbot',
        'twitterbot',
        'slackbot',
        'telegrambot',
        'applebot',
        'pingdom',
        'tumblr ',
        'Embedly',
        'spbot'
    ];
    var IS_BOT_REGEXP = new RegExp('^.*(' + BOTS.join('|') + ').*$');

    var DeviceUUID = function (options) {
        options = options ? options : {};
        var defOptions = {
            version: false,
            language: false,
            platform: true,
            os: true,
            pixelDepth: true,
            colorDepth: true,
            resolution: false,
            isAuthoritative: true,
            silkAccelerated: true,
            isKindleFire: true,
            isDesktop: true,
            isMobile: true,
            isTablet: true,
            isWindows: true,
            isLinux: true,
            isLinux64: true,
            isChromeOS: true,
            isMac: true,
            isiPad: true,
            isiPhone: true,
            isiPod: true,
            isAndroid: true,
            isSamsung: true,
            isSmartTV: true,
            isRaspberry: true,
            isBlackberry: true,
            isTouchScreen: true,
            isOpera: false,
            isIE: false,
            isEdge: false,
            isIECompatibilityMode: false,
            isSafari: false,
            isFirefox: false,
            isWebkit: false,
            isChrome: false,
            isKonqueror: false,
            isOmniWeb: false,
            isSeaMonkey: false,
            isFlock: false,
            isAmaya: false,
            isPhantomJS: false,
            isEpiphany: false,
            source: false,
            cpuCores: false
        };
        for (var key in options) {
            if (options.hasOwnProperty(key) && typeof defOptions[key] !== 'undefined') {
                defOptions[key] = options[key];
            }
        }
        this.options = defOptions;
        this.version = '1.0.0';
        this._Versions = {
            Edge: /Edge\/([\d\w\.\-]+)/i,
            Firefox: /firefox\/([\d\w\.\-]+)/i,
            IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
            Chrome: /chrome\/([\d\w\.\-]+)/i,
            Chromium: /(?:chromium|crios)\/([\d\w\.\-]+)/i,
            Safari: /version\/([\d\w\.\-]+)/i,
            Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
            Ps3: /([\d\w\.\-]+)\)\s*$/i,
            Psp: /([\d\w\.\-]+)\)?\s*$/i,
            Amaya: /amaya\/([\d\w\.\-]+)/i,
            SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
            OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
            Flock: /flock\/([\d\w\.\-]+)/i,
            Epiphany: /epiphany\/([\d\w\.\-]+)/i,
            WinJs: /msapphost\/([\d\w\.\-]+)/i,
            PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
            UC: /UCBrowser\/([\d\w\.]+)/i
        };
        this._Browsers = {
            Edge: /edge/i,
            Amaya: /amaya/i,
            Konqueror: /konqueror/i,
            Epiphany: /epiphany/i,
            SeaMonkey: /seamonkey/i,
            Flock: /flock/i,
            OmniWeb: /omniweb/i,
            Chromium: /chromium|crios/i,
            Chrome: /chrome/i,
            Safari: /safari/i,
            IE: /msie|trident/i,
            Opera: /opera|OPR/i,
            PS3: /playstation 3/i,
            PSP: /playstation portable/i,
            Firefox: /firefox/i,
            WinJs: /msapphost/i,
            PhantomJS: /phantomjs/i,
            UC: /UCBrowser/i
        };
        this._OS = {
            Windows10: /windows nt 10\.0/i,
            Windows81: /windows nt 6\.3/i,
            Windows8: /windows nt 6\.2/i,
            Windows7: /windows nt 6\.1/i,
            UnknownWindows: /windows nt 6\.\d+/i,
            WindowsVista: /windows nt 6\.0/i,
            Windows2003: /windows nt 5\.2/i,
            WindowsXP: /windows nt 5\.1/i,
            Windows2000: /windows nt 5\.0/i,
            WindowsPhone8: /windows phone 8\./,
            OSXCheetah: /os x 10[._]0/i,
            OSXPuma: /os x 10[._]1(\D|$)/i,
            OSXJaguar: /os x 10[._]2/i,
            OSXPanther: /os x 10[._]3/i,
            OSXTiger: /os x 10[._]4/i,
            OSXLeopard: /os x 10[._]5/i,
            OSXSnowLeopard: /os x 10[._]6/i,
            OSXLion: /os x 10[._]7/i,
            OSXMountainLion: /os x 10[._]8/i,
            OSXMavericks: /os x 10[._]9/i,
            OSXYosemite: /os x 10[._]10/i,
            OSXElCapitan: /os x 10[._]11/i,
            OSXSierra: /os x 10[._]12/i,
            Mac: /os x/i,
            Linux: /linux/i,
            Linux64: /linux x86_64/i,
            ChromeOS: /cros/i,
            Wii: /wii/i,
            PS3: /playstation 3/i,
            PSP: /playstation portable/i,
            iPad: /\(iPad.*os (\d+)[._](\d+)/i,
            iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
            Bada: /Bada\/(\d+)\.(\d+)/i,
            Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i
        };
        this._Platform = {
            Windows: /windows nt/i,
            WindowsPhone: /windows phone/i,
            Mac: /macintosh/i,
            Linux: /linux/i,
            Wii: /wii/i,
            Playstation: /playstation/i,
            iPad: /ipad/i,
            iPod: /ipod/i,
            iPhone: /iphone/i,
            Android: /android/i,
            Blackberry: /blackberry/i,
            Samsung: /samsung/i,
            Curl: /curl/i
        };

        this.DefaultAgent = {
            isAuthoritative: true,
            isMobile: false,
            isTablet: false,
            isiPad: false,
            isiPod: false,
            isiPhone: false,
            isAndroid: false,
            isBlackberry: false,
            isOpera: false,
            isIE: false,
            isEdge: false,
            isIECompatibilityMode: false,
            isSafari: false,
            isFirefox: false,
            isWebkit: false,
            isChrome: false,
            isKonqueror: false,
            isOmniWeb: false,
            isSeaMonkey: false,
            isFlock: false,
            isAmaya: false,
            isPhantomJS: false,
            isEpiphany: false,
            isDesktop: false,
            isWindows: false,
            isLinux: false,
            isLinux64: false,
            isMac: false,
            isChromeOS: false,
            isBada: false,
            isSamsung: false,
            isRaspberry: false,
            isBot: false,
            isCurl: false,
            isAndroidTablet: false,
            isWinJs: false,
            isKindleFire: false,
            isSilk: false,
            isCaptive: false,
            isSmartTV: false,
            isUC: false,
            isTouchScreen: false,
            silkAccelerated: false,
            colorDepth: -1,
            pixelDepth: -1,
            resolution: [],
            cpuCores: -1,
            language: 'unknown',
            browser: 'unknown',
            version: 'unknown',
            os: 'unknown',
            platform: 'unknown',
            geoIp: {},
            source: '',
            hashInt: function (string) {
                var hash = 0, i, chr, len;
                if (string.length === 0) { return hash; }
                for (i = 0, len = string.length; i < len; i++) {
                    chr = string.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0;
                }
                return hash;
            },
            hashMD5: function (string) {
                function rotateLeft(lValue, iShiftBits) {
                    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
                }

                function addUnsigned(lX, lY) {
                    var lX4, lY4, lX8, lY8, lResult;
                    lX8 = (lX & 0x80000000);
                    lY8 = (lY & 0x80000000);
                    lX4 = (lX & 0x40000000);
                    lY4 = (lY & 0x40000000);
                    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

                    if (lX4 & lY4) {
                        return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                    }
                    if (lX4 | lY4) {
                        if (lResult & 0x40000000) {
                            return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                        } else {
                            return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                        }
                    } else {
                        return (lResult ^ lX8 ^ lY8);
                    }
                }

                function gF(x, y, z) {
                    return (x & y) | ((~x) & z);
                }

                function gG(x, y, z) {
                    return (x & z) | (y & (~z));
                }

                function gH(x, y, z) {
                    return (x ^ y ^ z);
                }

                function gI(x, y, z) {
                    return (y ^ (x | (~z)));
                }

                function gFF(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gF(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gGG(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gG(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gHH(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gH(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gII(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gI(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function convertToWordArray(string) {
                    var lWordCount;
                    var lMessageLength = string.length;
                    var lNumberOfWordsTemp1 = lMessageLength + 8;
                    var lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
                    var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
                    var lWordArray = new Array(lNumberOfWords - 1);
                    var lBytePosition = 0;
                    var lByteCount = 0;

                    while (lByteCount < lMessageLength) {
                        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                        lBytePosition = (lByteCount % 4) * 8;
                        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
                        lByteCount++;
                    }

                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                    return lWordArray;
                }

                function wordToHex(lValue) {
                    var wordToHexValue = '', wordToHexValueTemp = '', lByte, lCount;
                    for (lCount = 0; lCount <= 3; lCount++) {
                        lByte = (lValue >>> (lCount * 8)) & 255;
                        wordToHexValueTemp = '0' + lByte.toString(16);
                        wordToHexValue = wordToHexValue + wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2);
                    }
                    return wordToHexValue;
                }

                function utf8Encode(string) {
                    string = string.replace(/\r\n/g, '\n');
                    var utftext = '';

                    for (var n = 0; n < string.length; n++) {
                        var c = string.charCodeAt(n);
                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        } else if ((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        } else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
                    }
                    return utftext;
                }

                var x = [];
                var k, AA, BB, CC, DD, a, b, c, d;
                var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
                var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
                var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
                var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
                string = utf8Encode(string);
                x = convertToWordArray(string);
                a = 0x67452301;
                b = 0xEFCDAB89;
                c = 0x98BADCFE;
                d = 0x10325476;

                for (k = 0; k < x.length; k += 16) {
                    AA = a;
                    BB = b;
                    CC = c;
                    DD = d;
                    a = gFF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                    d = gFF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                    c = gFF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                    b = gFF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                    a = gFF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                    d = gFF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                    c = gFF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                    b = gFF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                    a = gFF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                    d = gFF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                    c = gFF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                    b = gFF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                    a = gFF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                    d = gFF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                    c = gFF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                    b = gFF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                    a = gGG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                    d = gGG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                    c = gGG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                    b = gGG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                    a = gGG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                    d = gGG(d, a, b, c, x[k + 10], S22, 0x2441453);
                    c = gGG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                    b = gGG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                    a = gGG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                    d = gGG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                    c = gGG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                    b = gGG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                    a = gGG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                    d = gGG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                    c = gGG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                    b = gGG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                    a = gHH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                    d = gHH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                    c = gHH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                    b = gHH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                    a = gHH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                    d = gHH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                    c = gHH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                    b = gHH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                    a = gHH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                    d = gHH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                    c = gHH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                    b = gHH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                    a = gHH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                    d = gHH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                    c = gHH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                    b = gHH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                    a = gII(a, b, c, d, x[k + 0], S41, 0xF4292244);
                    d = gII(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                    c = gII(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                    b = gII(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                    a = gII(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                    d = gII(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                    c = gII(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                    b = gII(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                    a = gII(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                    d = gII(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                    c = gII(c, d, a, b, x[k + 6], S43, 0xA3014314);
                    b = gII(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                    a = gII(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                    d = gII(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                    c = gII(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                    b = gII(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                    a = addUnsigned(a, AA);
                    b = addUnsigned(b, BB);
                    c = addUnsigned(c, CC);
                    d = addUnsigned(d, DD);
                }
                var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
                return temp.toLowerCase();
            }
        };

        this.Agent = {};

        this.getBrowser = function (string) {
            switch (true) {
                case this._Browsers.Edge.test(string):
                    this.Agent.isEdge = true;
                    return 'Edge';
                case this._Browsers.PhantomJS.test(string):
                    this.Agent.isPhantomJS = true;
                    return 'PhantomJS';
                case this._Browsers.Konqueror.test(string):
                    this.Agent.isKonqueror = true;
                    return 'Konqueror';
                case this._Browsers.Amaya.test(string):
                    this.Agent.isAmaya = true;
                    return 'Amaya';
                case this._Browsers.Epiphany.test(string):
                    this.Agent.isEpiphany = true;
                    return 'Epiphany';
                case this._Browsers.SeaMonkey.test(string):
                    this.Agent.isSeaMonkey = true;
                    return 'SeaMonkey';
                case this._Browsers.Flock.test(string):
                    this.Agent.isFlock = true;
                    return 'Flock';
                case this._Browsers.OmniWeb.test(string):
                    this.Agent.isOmniWeb = true;
                    return 'OmniWeb';
                case this._Browsers.Opera.test(string):
                    this.Agent.isOpera = true;
                    return 'Opera';
                case this._Browsers.Chromium.test(string):
                    this.Agent.isChrome = true;
                    return 'Chromium';
                case this._Browsers.Chrome.test(string):
                    this.Agent.isChrome = true;
                    return 'Chrome';
                case this._Browsers.Safari.test(string):
                    this.Agent.isSafari = true;
                    return 'Safari';
                case this._Browsers.WinJs.test(string):
                    this.Agent.isWinJs = true;
                    return 'WinJs';
                case this._Browsers.IE.test(string):
                    this.Agent.isIE = true;
                    return 'IE';
                case this._Browsers.PS3.test(string):
                    return 'ps3';
                case this._Browsers.PSP.test(string):
                    return 'psp';
                case this._Browsers.Firefox.test(string):
                    this.Agent.isFirefox = true;
                    return 'Firefox';
                case this._Browsers.UC.test(string):
                    this.Agent.isUC = true;
                    return 'UCBrowser';
                default:
                    // If the UA does not start with Mozilla guess the user agent.
                    if (string.indexOf('Mozilla') !== 0 && /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)) {
                        this.Agent.isAuthoritative = false;
                        return RegExp.$1;
                    }
                    return 'unknown';
            }
        };

        this.getBrowserVersion = function (string) {
            var regex;
            switch (this.Agent.browser) {
                case 'Edge':
                    if (this._Versions.Edge.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'PhantomJS':
                    if (this._Versions.PhantomJS.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chrome':
                    if (this._Versions.Chrome.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chromium':
                    if (this._Versions.Chromium.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Safari':
                    if (this._Versions.Safari.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Opera':
                    if (this._Versions.Opera.test(string)) {
                        return RegExp.$1 ? RegExp.$1 : RegExp.$2;
                    }
                    break;
                case 'Firefox':
                    if (this._Versions.Firefox.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'WinJs':
                    if (this._Versions.WinJs.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'IE':
                    if (this._Versions.IE.test(string)) {
                        return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                    }
                    break;
                case 'ps3':
                    if (this._Versions.Ps3.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'psp':
                    if (this._Versions.Psp.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Amaya':
                    if (this._Versions.Amaya.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Epiphany':
                    if (this._Versions.Epiphany.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'SeaMonkey':
                    if (this._Versions.SeaMonkey.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Flock':
                    if (this._Versions.Flock.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'OmniWeb':
                    if (this._Versions.OmniWeb.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'UCBrowser':
                    if (this._Versions.UC.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                default:
                    if (this.Agent.browser !== 'unknown') {
                        regex = new RegExp(this.Agent.browser + '[\\/ ]([\\d\\w\\.\\-]+)', 'i');
                        if (regex.test(string)) {
                            return RegExp.$1;
                        }
                    }
            }
        };

        this.getOS = function (string) {
            switch (true) {
                case this._OS.WindowsVista.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows Vista';
                case this._OS.Windows7.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 7';
                case this._OS.Windows8.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 8';
                case this._OS.Windows81.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 8.1';
                case this._OS.Windows10.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 10.0';
                case this._OS.Windows2003.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 2003';
                case this._OS.WindowsXP.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows XP';
                case this._OS.Windows2000.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 2000';
                case this._OS.WindowsPhone8.test(string):
                    return 'Windows Phone 8';
                case this._OS.Linux64.test(string):
                    this.Agent.isLinux = true;
                    this.Agent.isLinux64 = true;
                    return 'Linux 64';
                case this._OS.Linux.test(string):
                    this.Agent.isLinux = true;
                    return 'Linux';
                case this._OS.ChromeOS.test(string):
                    this.Agent.isChromeOS = true;
                    return 'Chrome OS';
                case this._OS.Wii.test(string):
                    return 'Wii';
                case this._OS.PS3.test(string):
                    return 'Playstation';
                case this._OS.PSP.test(string):
                    return 'Playstation';
                case this._OS.OSXCheetah.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Cheetah';
                case this._OS.OSXPuma.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Puma';
                case this._OS.OSXJaguar.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Jaguar';
                case this._OS.OSXPanther.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Panther';
                case this._OS.OSXTiger.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Tiger';
                case this._OS.OSXLeopard.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Leopard';
                case this._OS.OSXSnowLeopard.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Snow Leopard';
                case this._OS.OSXLion.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Lion';
                case this._OS.OSXMountainLion.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Mountain Lion';
                case this._OS.OSXMavericks.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Mavericks';
                case this._OS.OSXYosemite.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Yosemite';
                case this._OS.OSXElCapitan.test(string):
                    this.Agent.isMac = true;
                    return 'OS X El Capitan';
                case this._OS.OSXSierra.test(string):
                    this.Agent.isMac = true;
                    return 'macOS Sierra';
                case this._OS.Mac.test(string):
                    this.Agent.isMac = true;
                    return 'OS X';
                case this._OS.iPad.test(string):
                    this.Agent.isiPad = true;
                    return string.match(this._OS.iPad)[0].replace('_', '.');
                case this._OS.iPhone.test(string):
                    this.Agent.isiPhone = true;
                    return string.match(this._OS.iPhone)[0].replace('_', '.');
                case this._OS.Bada.test(string):
                    this.Agent.isBada = true;
                    return 'Bada';
                case this._OS.Curl.test(string):
                    this.Agent.isCurl = true;
                    return 'Curl';
                default:
                    return 'unknown';
            }
        };

        this.getPlatform = function (string) {
            switch (true) {
                case this._Platform.Windows.test(string):
                    return 'Microsoft Windows';
                case this._Platform.WindowsPhone.test(string):
                    this.Agent.isWindowsPhone = true;
                    return 'Microsoft Windows Phone';
                case this._Platform.Mac.test(string):
                    return 'Apple Mac';
                case this._Platform.Curl.test(string):
                    return 'Curl';
                case this._Platform.Android.test(string):
                    this.Agent.isAndroid = true;
                    return 'Android';
                case this._Platform.Blackberry.test(string):
                    this.Agent.isBlackberry = true;
                    return 'Blackberry';
                case this._Platform.Linux.test(string):
                    return 'Linux';
                case this._Platform.Wii.test(string):
                    return 'Wii';
                case this._Platform.Playstation.test(string):
                    return 'Playstation';
                case this._Platform.iPad.test(string):
                    this.Agent.isiPad = true;
                    return 'iPad';
                case this._Platform.iPod.test(string):
                    this.Agent.isiPod = true;
                    return 'iPod';
                case this._Platform.iPhone.test(string):
                    this.Agent.isiPhone = true;
                    return 'iPhone';
                case this._Platform.Samsung.test(string):
                    this.Agent.isiSamsung = true;
                    return 'Samsung';
                default:
                    return 'unknown';
            }
        };

        this.testCompatibilityMode = function () {
            var ua = this;
            if (this.Agent.isIE) {
                if (/Trident\/(\d)\.0/i.test(ua.Agent.source)) {
                    var tridentVersion = parseInt(RegExp.$1, 10);
                    var version = parseInt(ua.Agent.version, 10);
                    if (version === 7 && tridentVersion === 7) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 11.0;
                    }

                    if (version === 7 && tridentVersion === 6) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 10.0;
                    }

                    if (version === 7 && tridentVersion === 5) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 9.0;
                    }

                    if (version === 7 && tridentVersion === 4) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 8.0;
                    }
                }
            }
        };

        this.testSilk = function () {
            var ua = this;
            switch (true) {
                case new RegExp('silk', 'gi').test(ua.Agent.source):
                    this.Agent.isSilk = true;
                    break;
                default:
            }

            if (/Silk-Accelerated=true/gi.test(ua.Agent.source)) {
                this.Agent.SilkAccelerated = true;
            }
            return this.Agent.isSilk ? 'Silk' : false;
        };

        this.testKindleFire = function () {
            var ua = this;
            switch (true) {
                case /KFOT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire';
                case /KFTT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD';
                case /KFJWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9';
                case /KFJWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9 4G';
                case /KFSOWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 7';
                case /KFTHWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7';
                case /KFTHWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7 4G';
                case /KFAPWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9';
                case /KFAPWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9 4G';
                default:
                    return false;
            }
        };

        this.testCaptiveNetwork = function () {
            var ua = this;
            switch (true) {
                case /CaptiveNetwork/gi.test(ua.Agent.source):
                    ua.Agent.isCaptive = true;
                    ua.Agent.isMac = true;
                    ua.Agent.platform = 'Apple Mac';
                    return 'CaptiveNetwork';
                default:
                    return false;
            }
        };

        this.testMobile = function testMobile() {
            var ua = this;
            switch (true) {
                case ua.Agent.isWindows:
                case ua.Agent.isLinux:
                case ua.Agent.isMac:
                case ua.Agent.isChromeOS:
                    ua.Agent.isDesktop = true;
                    break;
                case ua.Agent.isAndroid:
                case ua.Agent.isSamsung:
                    ua.Agent.isMobile = true;
                    ua.Agent.isDesktop = false;
                    break;
                default:
            }
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isiPod:
                case ua.Agent.isiPhone:
                case ua.Agent.isBada:
                case ua.Agent.isBlackberry:
                case ua.Agent.isAndroid:
                case ua.Agent.isWindowsPhone:
                    ua.Agent.isMobile = true;
                    ua.Agent.isDesktop = false;
                    break;
                default:
            }
            if (/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isMobile = true;
                ua.Agent.isDesktop = false;
            }
        };

        this.testTablet = function testTablet() {
            var ua = this;
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isAndroidTablet:
                case ua.Agent.isKindleFire:
                    ua.Agent.isTablet = true;
                    break;
            }
            if (/tablet/i.test(ua.Agent.source)) {
                ua.Agent.isTablet = true;
            }
        };

        this.testNginxGeoIP = function testNginxGeoIP(headers) {
            var ua = this;
            Object.keys(headers).forEach(function (key) {
                if (/^GEOIP/i.test(key)) {
                    ua.Agent.geoIp[key] = headers[key];
                }
            });
        };

        this.testBot = function testBot() {
            var ua = this;
            var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
            if (isBot) {
                ua.Agent.isBot = isBot[1];
            } else if (!ua.Agent.isAuthoritative) {
                // Test unauthoritative parse for `bot` in UA to flag for bot
                ua.Agent.isBot = /bot/i.test(ua.Agent.source);
            }
        };

        this.testSmartTV = function testBot() {
            var ua = this;
            var isSmartTV = new RegExp('smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv', 'gi').exec(ua.Agent.source.toLowerCase());
            if (isSmartTV) {
                ua.Agent.isSmartTV = isSmartTV[1];
            }
        };

        this.testAndroidTablet = function testAndroidTablet() {
            var ua = this;
            if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isAndroidTablet = true;
            }
        };

        this.testTouchSupport = function () {
            var ua = this;
            ua.Agent.isTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        };

        this.getLaguage = function () {
            var ua = this;
            ua.Agent.language = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || '').toLowerCase();
        };

        this.getColorDepth = function () {
            var ua = this;
            ua.Agent.colorDepth = screen.colorDepth || -1;
        };

        this.getScreenResolution = function () {
            var ua = this;
            ua.Agent.resolution = [screen.availWidth, screen.availHeight];
        };

        this.getPixelDepth = function () {
            var ua = this;
            ua.Agent.pixelDepth = screen.pixelDepth || -1;
        };

        this.getCPU = function () {
            var ua = this;
            ua.Agent.cpuCores = navigator.hardwareConcurrency || -1;
        };

        this.reset = function reset() {
            var ua = this;
            for (var key in ua.DefaultAgent) {
                if (ua.DefaultAgent.hasOwnProperty(key)) {
                    ua.Agent[key] = ua.DefaultAgent[key];
                }
            }
            return ua;
        };

        this.parse = function get(source) {
            source = source || navigator.userAgent;
            var ua = new DeviceUUID();
            ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
            ua.Agent.os = ua.getOS(ua.Agent.source);
            ua.Agent.platform = ua.getPlatform(ua.Agent.source);
            ua.Agent.browser = ua.getBrowser(ua.Agent.source);
            ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
            ua.testBot();
            ua.testSmartTV();
            ua.testMobile();
            ua.testAndroidTablet();
            ua.testTablet();
            ua.testCompatibilityMode();
            ua.testSilk();
            ua.testKindleFire();
            ua.testCaptiveNetwork();
            ua.testTouchSupport();
            ua.getLaguage();
            ua.getColorDepth();
            ua.getPixelDepth();
            ua.getScreenResolution();
            ua.getCPU();
            return ua.Agent;
        };

        this.get = function (customData) {
            var pref = 'a', du = this.parse();
            var dua = [];
            for (var key in this.options) {
                if (this.options.hasOwnProperty(key) && this.options[key] === true) {
                    dua.push(du[key]);
                }
            }
            if (customData) {
                dua.push(customData);
            }
            if (!this.options.resolution && du.isMobile) {
                dua.push(du.resolution);
            }
            // 8, 9, a, b
            pref = 'b';
            var tmpUuid = du.hashMD5(dua.join(':'));
            var uuid = [
                tmpUuid.slice(0,8),
                tmpUuid.slice(8,12),
                '4' + tmpUuid.slice(12,15),
                pref + tmpUuid.slice(15,18),
                tmpUuid.slice(20)
            ];
            return uuid.join('-');
        };

        this.Agent = this.DefaultAgent;
        return this;
    };

    exports.DeviceUUID = DeviceUUID;
    return new DeviceUUID(navigator.userAgent);

})(this);


/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_steps_register_number__ = __webpack_require__(1052);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_steps_verify_code__ = __webpack_require__(1056);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_steps_complementary_info_vue__ = __webpack_require__(1060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_device_uuid_lib_device_uuid__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_device_uuid_lib_device_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_device_uuid_lib_device_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sweetalert_min_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sweetalert_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sweetalert_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    RegisterNumber: __WEBPACK_IMPORTED_MODULE_1__register_steps_register_number__["a" /* default */],
    VerifyCode: __WEBPACK_IMPORTED_MODULE_2__register_steps_verify_code__["a" /* default */],
    ComplementaryInfo: __WEBPACK_IMPORTED_MODULE_3__register_steps_complementary_info_vue__["a" /* default */]
  },
  props: ["isUserLogin", "userType"],
  data: function data() {
    return {
      isImageLoad: false,
      loginCheckerLoading: true,
      currentStep: 3,
      step1: {
        phone: "",
        sendCode: true
      },
      step2: {
        verification_code: "",
        reSendCode: false,
        timeCounterDown: 120,
        showTimer: false,
        now: null
      },
      step3: {
        name: "",
        family: "",
        password: "",
        re_password: "",
        user_name: "",
        sex: "آقا",
        province: "",
        city: "",
        national_code: "",
        provinceList: "",
        cityList: ""
      },
      step4: {
        activity_type: "",
        rules: 0,
        categoryList: "",
        categoryId: "",
        formSubmitActive: true
      },
      errors: {
        first_name: [],
        last_name: [],
        province: [],
        city: [],
        user_name: [],
        national_code: [],
        password: [],
        password_conf: [],
        sex: [],
        verification_code: "",
        phone: "",
        category_id: []
      },
      errorFlag: false,
      userNameUnique: true,
      nationalCodeUnique: true,
      popUpMsg: "",
      verifyCodeBtnLoading: false
    };
  },
  methods: {
    ImageLoaded: function ImageLoaded() {
      this.isImageLoad = true;
    },
    loadImage: function loadImage() {
      this.isImageLoad = false;
    },
    setPersonalInformation: function setPersonalInformation() {
      // this.firstNameValidator(this.step3.first_name);
      // this.lastNameValidator(this.step3.last_name);
      if (this.errors.first_name.length == 0 && this.errors.last_name.length == 0) {
        this.goToStep(4);
      }
    },
    setLocation: function setLocation(isUserMobile) {
      if (isUserMobile) {
        this.getCategory();
        this.step3.password = this.makeRandomString(8);
        this.goToStep(6);
      } else {
        this.goToStep(5);
      }
    },
    makeRandomString: function makeRandomString(length) {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    setAccount: function setAccount() {
      // this.userNameValidator(this.step3.user_name);
      this.passwordValidator(this.step3.password);
      if (
      // !this.errors.user_name[0] &&
      !this.errors.password[0]
      //&& !this.errors.password_conf[0]
      ) {
          this.register_details();
        }
    },

    stopLoader: function stopLoader() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("isLoading", false);
    },
    goToStep: function goToStep(step) {
      if (step < 1) {
        step = 1;
      } else if (step > 6) {
        step = 6;
      }

      this.currentStep = step;
      // this.checkLevel();
      this.scrollToTop();
    },
    checkLevel: function checkLevel() {
      var progressElement = $(".custom-progressbar.active");
      switch (this.currentStep) {
        case 1:
          progressElement.css("width", "0");
          break;
        case 2:
          progressElement.css("width", "18%");
          break;
        case 3:
          progressElement.css("width", "36%");
          break;
        case 4:
          progressElement.css("width", "54%");
          break;
        case 5:
          progressElement.css("width", "73%");
          break;
        case 6:
          progressElement.css("width", "90%");
          break;
      }
    },

    sendVerificationCode: function sendVerificationCode() {
      this.verifyCodeBtnLoading = true;
      this.step2.reSendCode = false;
      this.step1.sendCode = false;
      var self = this;

      this.step2.now = new Date().getTime();
      this.step2.showTimer = true;
      this.step2.timeCounterDown = 119;

      axios.post("/send_verification_code", {
        phone: this.toLatinNumbers(this.step1.phone)
      }).then(function (response) {
        self.verifyCodeBtnLoading = false;

        self.goToStep(2);
        self.step1.sendCode = true;

        self.step2.verification_code = "";
        self.errors.verification_code = "";

        setTimeout(function () {
          self.step2.reSendCode = true;
        }, 120000);

        self.registerComponentStatistics("Register", "send-verification-code", "verification-code-sent-to-user");
      }).catch(function (err) {
        self.verifyCodeBtnLoading = false;

        self.errors.phone = err.response.data.errors.phone;

        self.step1.sendCode = true;

        self.registerComponentStatistics("Register-Error", "phone-number-verification", "error:" + self.errors.phone[0]);
      });
    },
    verifyCode: function verifyCode() {
      var self = this;

      self.verifyCodeBtnLoading = true;

      var deviceInfo = new __WEBPACK_IMPORTED_MODULE_4_device_uuid_lib_device_uuid___default.a.DeviceUUID();
      var deviceId = null;
      if (deviceInfo.get()) {
        deviceId = deviceInfo.get();
      }

      axios.post("/verify_code", {
        verification_code: this.toLatinNumbers(this.step2.verification_code),
        phone: this.toLatinNumbers(this.step1.phone),
        device_id: deviceId
      }).then(function (response) {
        self.verifyCodeBtnLoading = false;

        if (response.data.status === true) {
          if (response.data.redirected) {
            // it's very tricky condition, be careful
            window.location.href = "/login";
          } else {
            self.goToStep(3);
            self.getProvinceList();
          }
        } else {
          self.goToStep(2);
          self.errors.verification_code = response.data.msg;
          self.registerComponentStatistics("Register-Error", "verification-code-wrong", "error:" + self.errors.verification_code[0]);
        }
      }).catch(function (error) {
        self.verifyCodeBtnLoading = false;

        self.goToStep(2);
        self.errors.verification_code = "";
        self.errors.verification_code = "وارد کردن کد الزامی است.";
        self.registerComponentStatistics("Register-Error", "verification-code-empty", "error:" + self.errors.verification_code);
      });
    },
    register_details: function register_details() {
      this.errorFlag = false;

      this.checkStep3();

      if (this.errorFlag === false && this.userNameUnique === true && this.nationalCodeUnique === true) {
        this.goToStep(6);
        this.getCategory();
      }
    },
    submitForm: function submitForm() {
      var self = this;
      this.step4.formSubmitActive = false;
      this.errorFlag = false;

      this.checkStep4();

      var object = {
        phone: this.toLatinNumbers(this.step1.phone),
        first_name: this.step3.first_name,
        last_name: this.step3.last_name,
        verification_code: this.toLatinNumbers(this.step2.verification_code),
        password: this.step3.password,
        user_name: this.step3.user_name,
        sex: this.step3.sex,
        province: this.step3.province,
        city: this.step3.city,
        activity_type: this.step4.activity_type,
        national_code: this.toLatinNumbers(this.step3.national_code),
        category_id: this.step4.categoryId
      };
      if (this.errorFlag === false) {
        axios.post("api/v1/users", object).then(function (response) {
          if (response.status === 201) {
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "userRegisterSuccess");
            self.createCookie("registerNewUser", true, 60);
            self.createCookie("firstLogin", true, 1);

            var deviceInfo = new __WEBPACK_IMPORTED_MODULE_4_device_uuid_lib_device_uuid___default.a.DeviceUUID();
            var deviceId = null;
            if (deviceInfo.get()) {
              deviceId = deviceInfo.get();
            }

            axios.post("/dologin", {
              phone: object.phone,
              password: object.password,
              device_id: deviceId
            }).then(function (response) {
              if (response.data.status) {
                if (self.isUserComeFromChatBoxOpen()) {
                  __WEBPACK_IMPORTED_MODULE_5__sweetalert_min_js___default.a.close(); //close modal

                  self.returnUserToPreviousPageAndChatBox(response.data);
                } else {
                  self.redirectUserToPanel(response.data);
                }
              }
            }).catch(function (err) {
              console.log("err");
            });
            self.registerComponentStatistics("Register", "successful-register", "user-registered-successfully");
          }
        }).catch(function (err) {
          self.formSubmitActive = true;
          self.registerComponentExceptions("User register API failed", true);
        });
      }
    },
    setCategoryId: function setCategoryId(e) {
      e.preventDefault();

      this.step4.categoryId = $(e.target).val();
    },
    checkStep3: function checkStep3() {
      // this.userNameValidator(this.step3.user_name);
      // this.firstNameValidator(this.step3.first_name);
      // this.lastNameValidator(this.step3.last_name);
      this.provinceValidator(this.step3.province);
      this.cityValidator(this.step3.city);
      this.nationalCodeValidator(this.step3.national_code);
      this.passwordValidator(this.step3.password);
      this.sexValidator(this.step3.sex);

      if (this.errorFlag) {
        this.registerComponentStatistics("Register-Error", "step-3", "validation error in step 3");
      }
    },
    checkStep4: function checkStep4() {
      this.activityTypeValidator(this.step4.activity_type);
      this.categoryIdValidator(this.step4.categoryId);

      if (this.errorFlag) {
        this.registerComponentStatistics("Register-Error", "step-4", "validation error in step 4");
      }
    },
    // firstNameValidator: function (name) {
    //   this.errors.first_name = [];

    //   if (name === "") {
    //     this.errors.first_name.push("فیلد الزامی است");
    //     this.errorFlag = true;
    //   }
    //   if (!this.validateRegx(name, /^[\u0600-\u06FF\s]+$/)) {
    //     this.errors.first_name.push("فیلد باید فارسی باشد");
    //     this.errorFlag = true;
    //   }

    //   if (this.errors.first_name[0]) {
    //     this.registerComponentStatistics(
    //       "Register-Error",
    //       "first-name",
    //       "input:" + name + " Error:" + this.errors.first_name[0]
    //     );
    //   }
    // },
    // lastNameValidator: function (name) {
    //   this.errors.last_name = [];

    //   if (name === "") {
    //     this.errors.last_name.push("فیلد الزامی است");
    //     this.errorFlag = true;
    //   }
    //   if (!this.validateRegx(name, /^[\u0600-\u06FF\s]+$/)) {
    //     this.errors.last_name.push("فیلد باید فارسی باشد");
    //     this.errorFlag = true;
    //   }

    //   if (this.errors.last_name[0]) {
    //     this.registerComponentStatistics(
    //       "Register-Error",
    //       "last-name",
    //       "input:" + name + " Error:" + this.errors.last_name[0]
    //     );
    //   }
    // },
    provinceValidator: function provinceValidator(province) {
      this.errors.province = [];

      if (province === "") {
        this.errors.province.push("فیلد استان الزامی است");
        this.errorFlag = true;
      }
      if (!this.validateRegx(province, /^[\u0600-\u06FF\s]+$/)) {
        this.errors.province.push("استان باید فارسی باشد");
        this.errorFlag = true;
      }

      if (this.errors.province[0]) {
        this.registerComponentStatistics("Register-Error", "province", "input:" + province + " Error:" + this.errors.province[0]);
      }
    },
    cityValidator: function cityValidator(city) {
      this.errors.city = [];

      if (city === "") {
        this.errors.city.push("فیلد شهر الزامی است");
        this.errorFlag = true;
      }
      if (!this.validateRegx(city, /^[\u0600-\u06FF\s]+$/)) {
        this.errors.city.push("شهر باید فارسی باشد");
        this.errorFlag = true;
      }

      if (this.errors.city[0]) {
        this.registerComponentStatistics("Register-Error", "city", "input:" + city + " Error:" + this.errors.city[0]);
      }
    },
    userNameValidator: function userNameValidator(userName) {
      if (this.userNameUnique === true) {
        this.errors.user_name = [];
      }

      if (userName === "") {
        this.errors.user_name.push("نام کاربری الزامی است");

        this.errorFlag = true;
      }
      if (!this.validateRegx(userName, /^\w+$/)) {
        this.errors.user_name.push(" شامل حروف غیر مجاز است");
        this.errorFlag = true;
      }

      if (this.errors.user_name[0]) {
        this.registerComponentStatistics("Register-Error", "username", "input:" + username + " Error:" + this.errors.last_name[0]);
      }
    },
    nationalCodeValidator: function nationalCodeValidator(code) {
      code = this.toLatinNumbers(code);

      if (this.nationalCodeUnique === true) {
        this.errors.national_code = [];
      }
      if (code !== "" && !this.isIrNationalCode(code)) {
        this.errors.national_code.push("کد ملی معتبر نیست");
        this.errorFlag = true;
      }
    },
    isIrNationalCode: function isIrNationalCode(input) {
      if (!/^\d{10}$/.test(input)) {
        return false;
      }

      var check = parseInt(input[9]);
      var sum = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (x) {
        return parseInt(input[x]) * (10 - x);
      }).reduce(function (x, y) {
        return x + y;
      }) % 11;

      return sum < 2 && check == sum || sum >= 2 && check + sum == 11;
    },
    passwordValidator: function passwordValidator(pass) {
      this.errors.password = [];
      this.errors.password_conf = [];

      if (pass === "") {
        this.errors.password.push("رمز عبور الزامی است");
        this.errorFlag = true;
      }
      if (pass.length < 8) {
        this.errors.password.push("رمز عبور حداقل ۸ کاراکتر باشد");
        this.errorFlag = true;
      }
      // if (passConf === "") {
      //     this.errors.password_conf.push("تکرار رمز عبور الزامی است");
      //     this.errorFlag = true;
      // }
      // if (passConf !== pass) {
      //     this.errors.password_conf.push("رمز عبور مطابقت ندارد");
      //     this.errorFlag = true;
      // }

      if (this.errors.password[0]) {
        this.registerComponentStatistics("Register-Error", "password", "input:" + pass + " Error:" + this.errors.password[0]);
      }
      // if (this.errors.password_conf[0]) {
      //     this.registerComponentStatistics(
      //         "Register-Error",
      //         "passwordConfirmation",
      //         "input:" + passConf + " Error:" + this.errors.password_conf[0]
      //     );
      // }
    },
    sexValidator: function sexValidator(sex) {
      this.errors.sex = [];

      if (sex === "") {
        this.errors.sex.push("جنسیت الزامی است");
        this.errorFlag = true;
      }

      if (this.errors.sex[0]) {
        this.registerComponentStatistics("Register-Error", "sex", "input:" + sex + " Error:" + this.errors.sex[0]);
      }
    },
    categoryIdValidator: function categoryIdValidator(categoryId) {
      this.errors.category_id = [];
      if (categoryId === "") {
        this.errors.category_id.push("انتخاب حوزه ی فعالیت الزامی است.");
        this.errorFlag = true;
      }

      if (this.errors.category_id[0]) {
        this.registerComponentStatistics("Register-Error", "category-selection", "input:" + categoryId + " Error:" + this.errors.category_id[0]);
      }
    },
    activityTypeValidator: function activityTypeValidator(activityType) {
      this.errors.activity_type = [];
      if (activityType === "") {
        this.errors.activity_type.push("انتخاب نوع کاربری الزامی است.");
        this.errorFlag = true;
      }

      if (this.errors.activity_type[0]) {
        this.registerComponentStatistics("Register-Error", "activity-type", "input:" + activity_type + " Error:" + this.errors.activity_type[0]);
      }
    },
    validateRegx: function validateRegx(input, regx) {
      return regx.test(input);
    },
    getCategory: function getCategory() {
      var _this = this;

      axios.post("/get_category_list").then(function (response) {
        return _this.step4.categoryList = response.data.categories;
      });
    },
    getCategoryId: function getCategoryId(categoryId) {
      this.step4.categoryId = categoryId;
    },
    getProvinceList: function getProvinceList() {
      var _this2 = this;

      axios.post("/location/get_location_info").then(function (response) {
        return _this2.step3.provinceList = response.data.provinces;
      });
    },
    getCityList: function getCityList(provinceId) {
      var _this3 = this;

      axios.post("/location/get_location_info", {
        province_id: provinceId
      }).then(function (response) {
        return _this3.step3.cityList = response.data.cities;
      });
    },
    setProvinceName: function setProvinceName(e) {
      e.preventDefault();

      this.step3.province = $(e.target).val();

      var provinceId = "";

      for (var i = 0; i < this.step3.provinceList.length; i++) {
        if (this.step3.province === this.step3.provinceList[i].province_name) {
          provinceId = this.step3.provinceList[i].id;
          break;
        }
      }

      this.getCityList(provinceId);
    },
    setCityName: function setCityName(e) {
      e.preventDefault();

      this.step3.city = $(e.target).val();
    },
    toLatinNumbers: function toLatinNumbers(num) {
      if (num == null) {
        return null;
      }

      return num.toString().replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
    },
    updateCounterDownTimer: function updateCounterDownTimer(seconds) {
      if (seconds !== 1) {
        this.step2.timeCounterDown = seconds;
      } else this.step2.showTimer = false;
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
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);
    },

    isOsIOS: function isOsIOS() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
          safari = /safari/.test(userAgent),
          ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    isUserComeFromChatBoxOpen: function isUserComeFromChatBoxOpen() {
      if (window.localStorage.getItem("contact") && window.localStorage.getItem("pathname")) {
        return true;
      }

      return false;
    },
    returnUserToPreviousPageAndChatBox: function returnUserToPreviousPageAndChatBox(userInfo) {
      if (this.isUserInInquirySubmissionProcess()) {
        var contact = JSON.parse(window.localStorage.getItem("contact"));
        var pathname = window.localStorage.getItem("msgToSend");

        if (userInfo.is_buyer) {
          window.location.href = "/buyer/register-request";
        } else if (userInfo.is_seller) {
          window.location.href = "/switch-role";
        } else {
          window.localStorage.removeItem("contact");
          window.localStorage.removeItem("msgToSend");

          this.redirectUserToPanel(userInfo);
        }
      } else if (this.isUserComeFromChatBoxOpen()) {
        var _contact = JSON.parse(window.localStorage.getItem("contact"));
        var _pathname = window.localStorage.getItem("pathname");

        window.localStorage.removeItem("contact");
        window.localStorage.removeItem("pathname");

        if (userInfo.id != _contact.contact_id) {
          window.localStorage.setItem("comeFromAuthentication", true);

          this.$router.push({ path: _pathname });

          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("ChatInfo", _contact);
        } else {
          this.redirectUserToPanel(userInfo);
        }
      } else {
        this.redirectUserToPanel(userInfo);
      }
    },
    redirectUserToPanel: function redirectUserToPanel(userInfo) {
      if (userInfo.is_seller == true) {
        localStorage.setItem("showSnapShot", true);
        window.location.href = "/seller/register-product";
      } else if (userInfo.is_buyer == true) {
        localStorage.setItem("showSnapShot", true);
        window.location.href = "/buyer/register-request";
      }
    },
    isUserInInquirySubmissionProcess: function isUserInInquirySubmissionProcess() {
      if (window.localStorage.getItem("contact") && window.localStorage.getItem("msgToSend")) {
        return true;
      }
      return false;
    },
    createCookie: function createCookie(name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }
  },
  watch: {
    "step2.timeCounterDown": function step2TimeCounterDown() {
      var self = this;
      var now = new Date().getTime();

      var distance = now - this.step2.now;

      var seconds = 119 - Math.floor(distance % (1000 * 120) / 1000) + 1;

      setTimeout(function () {
        self.updateCounterDownTimer(seconds);
      }, 1000);
    },
    "step3.user_name": function step3User_name() {
      var self = this;
      if (this.step3.user_name.length > 0) {
        axios.post("/user/is_user_name_unique", {
          user_name: this.step3.user_name
        }).then(function (response) {
          if (response.data.status === true) {
            self.errors.user_name = [];
            self.userNameUnique = true;
          }
        }).catch(function (err) {
          self.errors.user_name = [];
          self.errors.user_name.push("نام کاربری قبلا گرفته شده");

          self.errorFlag = true;
          self.userNameUnique = false;
        });
      }
    },
    "step3.national_code": function step3National_code() {
      var self = this;

      this.step3.national_code = this.toLatinNumbers(this.step3.national_code);

      if (this.step3.national_code.length > 0 && this.step3.national_code < 10) {
        this.errors.national_code = [];
        this.errors.national_code.push("کد ملی ۱۰ رقمی است");

        this.errorFlag = true;
      } else if (this.step3.national_code.length === 10) {
        axios.post("user/is_national_code_unique", {
          national_code: this.toLatinNumbers(this.step3.national_code)
        }).then(function (response) {
          if (response.data.status === true) {
            self.errors.national_code = [];
            self.nationalCodeUnique = true;
          }
        }).catch(function (err) {
          self.errors.national_code = [];
          self.errors.national_code.push("کد ملی قبلا گرفته شده");

          self.errorFlag = true;
          self.nationalCodeUnique = false;
        });
      }
    }
  },
  created: function created() {
    var self = this;

    var userInfo = {
      is_buyer: !self.userType,
      is_seller: self.userType
    };

    if (self.isUserLogin && self.userType == 1) {
      if (self.isUserInInquirySubmissionProcess()) {
        self.returnUserToPreviousPageAndChatBox(userInfo);
      } else {
        self.$router.push("/seller/register-product");
      }
    } else if (self.isUserLogin && self.userType != 1) {
      // self.returnUserToPreviousPageAndChatBox(userInfo);
      self.$router.push("/buyer/register-request");
    } else {
      self.loginCheckerLoading = false;
    }
    gtag("config", "UA-129398000-1", { page_path: "/register" });
  },

  mounted: function mounted() {
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        // self.$nextTick(this.stopLoader());
      }
    };
    // this.checkLevel();
  },
  updated: function updated() {
    this.$nextTick(this.stopLoader());
  },
  metaInfo: function metaInfo() {
    return {
      title: "ثبت نام",
      titleTemplate: "باسکول | %s",
      meta: [{
        name: "description",
        content: "خرید عمده و قیمت میوه | خرید عمده و قیمت غلات | خرید عمده و قیمت صیفی جات | خرید و قیمت عمده خشکبار"
      }, {
        name: "author",
        content: "باسکول"
      }, {
        property: "og:description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی"
      }, {
        property: "og:site_name",
        content: "باسکول بازارآنلاین خرید و فروش محصولات غذایی و کشاورزی ایران"
      }, {
        property: "og:title",
        content: "باسکول | ثبت نام"
      }]
    };
  }
});

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(959);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("31b0ad8f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-658de808\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-658de808\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\np[data-v-658de808],\nspan[data-v-658de808] {\n  line-height: 1.5;\n}\n#main-content[data-v-658de808] {\n  padding-bottom: 0;\n  padding-top: 80px;\n}\n.error-message[data-v-658de808] {\n  direction: rtl;\n  font-size: 11px;\n}\n#main[data-v-658de808] {\n  margin-top: 21px;\n  height: 100%;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  min-height: 400px;\n}\ninput[type=\"number\"][data-v-658de808] {\n  -moz-appearance: textfield;\n}\ninput[type=\"number\"][data-v-658de808]::-webkit-inner-spin-button,\ninput[type=\"number\"][data-v-658de808]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.main-wrapper[data-v-658de808] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 620px;\n}\n.wraper-main-contents[data-v-658de808] {\n  text-align: right;\n  margin: 40px auto;\n}\n\n/*main contents styles */\n.main-contents[data-v-658de808] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-top: 16px;\n  border: 1px solid #e0e0e0;\n  min-height: 350px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n}\n@media screen and (max-width: 767px) {\n#main[data-v-658de808] {\n    padding: 0;\n}\n.progrees-item p[data-v-658de808] {\n    display: none;\n}\n.main-wrapper[data-v-658de808] {\n    top: calc(50% - 30px);\n}\n.progressbar-items[data-v-658de808] {\n    padding: 0 15px;\n}\n.main-contents[data-v-658de808] {\n    border-radius: 0;\n}\n.main-content-header[data-v-658de808] {\n    direction: rtl;\n    text-align: center;\n    background: none;\n    color: #333;\n    padding: 14px 0;\n    border-bottom: 2px solid #00c569;\n}\n.main-content-header a[data-v-658de808],\n  .main-content-header h1[data-v-658de808] {\n    font-size: 17px;\n}\n.main-content-header a[data-v-658de808] {\n    color: #333;\n    text-align: left;\n}\n.title-contents[data-v-658de808] {\n    font-weight: bold;\n    font-size: 16px;\n}\n.form-contents label[data-v-658de808] {\n    font-size: 12px;\n}\n.small-description[data-v-658de808] {\n    font-size: 11px;\n\n    font-weight: bold;\n}\ninput[data-v-658de808] {\n    font-size: 13px;\n    padding: 8px 15px 9px 35px;\n}\n}\n@media screen and (max-width: 400px) {\n.form-contents .col-xs-10[data-v-658de808] {\n    padding: 0;\n}\n.form-contents .col-xs-3[data-v-658de808] {\n    padding: 0 5px;\n}\n.col-xs-10.col-xs-offset-1.col-sm-8.col-sm-offset-2[data-v-658de808] {\n    padding: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.loginCheckerLoading
      ? _c("div", [
          _c("main", { staticClass: "container", attrs: { id: "main" } }, [
            _c("div", { staticClass: "main-wrapper" }, [
              _c(
                "div",
                { staticClass: "main-contents text-rtl" },
                [
                  _vm.currentStep == 1
                    ? _c("RegisterNumber")
                    : _vm.currentStep == 2
                    ? _c("VerifyCode")
                    : _vm.currentStep == 3
                    ? _c("ComplementaryInfo")
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ])
      : _c("div", [
          _c("div", { staticClass: "loading-container" }, [
            _c("div", { staticClass: "image-wrapper" }, [
              _c(
                "a",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isImageLoad,
                      expression: "isImageLoad"
                    }
                  ]
                },
                [
                  _c("transition", [
                    _c("img", {
                      attrs: { src: "", alt: "alt" },
                      on: { load: _vm.ImageLoaded }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-loader text-muted" }, [
                _vm._v("\n          ... در حال انتقال به پنل کاربری\n        ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isImageLoad,
                      expression: "!isImageLoad"
                    }
                  ],
                  staticClass: "lds-ring"
                },
                [
                  _c("div"),
                  _vm._v(" "),
                  _c("div"),
                  _vm._v(" "),
                  _c("div"),
                  _vm._v(" "),
                  _c("div")
                ]
              )
            ])
          ])
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-658de808", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});