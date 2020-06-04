webpackJsonp([24],{

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(450)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(452)
/* template */
var __vue_template__ = __webpack_require__(453)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62042756"
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
Component.options.__file = "resources/assets/js/components/dashboard/seller/request/buyAd-requests.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62042756", Component.options)
  } else {
    hotAPI.reload("data-v-62042756", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(451);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("718e3050", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62042756\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buyAd-requests.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62042756\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buyAd-requests.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.requests .main-content[data-v-62042756] {\n  padding-top: 50px;\n}\n.wrapper_no_pro[data-v-62042756] {\n  text-align: center;\n  font-size: 23px;\n  padding: 15px 0;\n}\n.content_no_pic[data-v-62042756] {\n  font-size: 70px;\n  margin: 20px auto;\n  color: #bdbdbd;\n}\n.text_no_pic[data-v-62042756] {\n  margin: 30px auto;\n  color: #bdbdbd;\n}\n.list-title[data-v-62042756],\n.needs[data-v-62042756],\n.list-time[data-v-62042756],\n.list-notice[data-v-62042756] {\n  float: right;\n  text-align: center;\n  line-height: 1.618;\n  font-weight: bold;\n  padding: 5px;\n}\n.list-group-item[data-v-62042756] {\n  border: 1px solid #ddd;\n  padding: 11px 0;\n}\n.list-group-item[data-v-62042756]:nth-last-of-type(2n + 1) {\n  background: #fdfdfd !important;\n}\n.detail-success[data-v-62042756] {\n  padding: 8px 0;\n  width: 100%;\n  background: #00c569;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  font-size: 13px;\n  font-weight: bold;\n}\n.main-content > ul[data-v-62042756] {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 10px #e1e1e1;\n          box-shadow: 0 0 10px #e1e1e1;\n  overflow: hidden;\n}\n.main-content .list-group-item p[data-v-62042756] {\n  text-align: center;\n  direction: rtl;\n}\n#main.little-main[data-v-62042756] {\n  margin-right: 80px;\n}\n.message-list[data-v-62042756] {\n  padding: 19px;\n  text-align: center;\n  background: #eff3f6;\n  line-height: 1.618;\n}\n.text-red[data-v-62042756] {\n  color: #e41c38;\n}\n.request-detail .green-button[data-v-62042756] {\n  font-size: 16px;\n  padding: 8px 30px;\n}\n.title[data-v-62042756] {\n  text-align: right;\n  padding: 13px 15px;\n}\n.title h1[data-v-62042756] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.fix-request-header-box[data-v-62042756] {\n  background: #eff3f6;\n  position: fixed;\n  right: 250px;\n  left: 0;\n  z-index: 1;\n  border-radius: 0;\n  padding: 10px 0;\n}\n.fix-request-bottom[data-v-62042756] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  background: #fff;\n  border-radius: 0;\n  padding: 10px 0;\n}\n.request-update button[data-v-62042756] {\n  margin: 0;\n  padding: 3px 14px;\n  margin-right: 6px;\n}\n#main.little-main .fix-request-header-box[data-v-62042756] {\n  right: 80px;\n}\n.detail-contents[data-v-62042756] {\n  margin: 15px auto;\n}\n.detail-contents > div[data-v-62042756] {\n  background: #fff;\n  padding: 15px;\n  margin-bottom: 15px;\n  line-height: 25px;\n  font-size: 30px;\n}\n.list-notice[data-v-62042756] {\n  text-align: right;\n  height: 32px;\n}\n.list-notice button[data-v-62042756] {\n  background: none;\n\n  border: none;\n\n  color: #777;\n\n  padding: 0;\n\n  position: relative;\n\n  top: -5px;\n}\n.list-notice button > span[data-v-62042756]:first-of-type {\n  position: relative;\n\n  font-size: 26px;\n}\n.list-notice button > span.request-count[data-v-62042756] {\n  font-size: 18px;\n\n  position: relative;\n\n  top: -5px;\n}\n.list-notice button > span > i[data-v-62042756]:last-of-type {\n  position: absolute;\n\n  left: 17px;\n\n  color: #fff;\n\n  font-size: 15px;\n\n  top: 7px;\n}\n.hide-reply[data-v-62042756] {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n.default-list-title[data-v-62042756] {\n    padding: 4px 0;\n}\n.fix-request-header-box[data-v-62042756],\n  #main.little-main .fix-request-header-box[data-v-62042756] {\n    right: 0;\n}\n}\n@media screen and (max-width: 767px) {\n.main-content[data-v-62042756] {\n    padding: 0;\n}\n.title[data-v-62042756] {\n    text-align: center;\n}\n.detail-success[data-v-62042756] {\n    max-width: 300px;\n    margin: 0 auto;\n}\n.default-button-full-with[data-v-62042756] {\n    max-width: 300px;\n}\n.list-notice button > span.request-count[data-v-62042756] {\n    font-size: 15px;\n    top: -5px;\n}\n.list-notice button > span > i[data-v-62042756]:last-of-type {\n    left: 16px;\n\n    font-size: 12px;\n    top: 7px;\n}\n.list-notice button > span[data-v-62042756]:first-of-type {\n    font-size: 23px;\n}\n.list-notice button > span.request-count[data-v-62042756] {\n    font-size: 15px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["storage"],
  data: function data() {
    return {
      currentUser: {
        profile: "",
        user_info: ""
      },
      buyAds: "",
      popUpMsg: "",
      load: false,
      textActive: false,
      items: [{
        message: "درخواست های جدید",
        url: "buyAdRequests"
      }],
      isRequests: true
    };
  },
  methods: {
    init: function init() {
      this.load = true;
      var self = this;

      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;
      });

      axios.post("/get_related_buyAds_list_to_the_seller").then(function (response) {
        self.buyAds = response.data.buyAds;
        self.load = false;
        setTimeout(function () {
          $(".list-notice button").tooltip();
        }, 100);
      });
    },
    openChat: function openChat(buyAd, event) {
      var self = this;

      var id = "#loader-" + buyAd.id;
      self.hideReplyBtn(event, id);

      axios.post("/get_user_permission_for_buyAd_reply", {
        buy_ad_id: buyAd.id
      }).then(function (response) {
        self.showReplyBtn(event, id);

        if (response.data.permission == true) {
          var contact = {
            contact_id: buyAd.myuser_id,
            first_name: buyAd.first_name,
            last_name: buyAd.last_name,
            profile_photo: null,
            user_name: buyAd.user_name,
            buyAd_id: buyAd.id
          };

          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("ChatInfo", contact);

          self.registerComponentStatistics("buyAdReply", "openChat", "click on open chatBox");
        } else {
          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "buyAdReplyLimit");
          self.registerComponentStatistics("buyAdReply", "openChat", "permission denied");
        }
      });
    },
    hideReplyBtn: function hideReplyBtn(e, id) {
      return new Promise(function (resolve, reject) {
        $(e.target).hide();
        resolve(true);
      }).then(function () {
        $(id).show();
      });
    },
    showReplyBtn: function showReplyBtn(e, id) {
      return new Promise(function (resolve, reject) {
        $(id).hide();
        resolve(true);
      }).then(function () {
        $(e.target).show();
      });
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    }
  },
  mounted: function mounted() {
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", this.items);
  },
  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/buyAd-requests" });
  }
});

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function(){},staticRenderFns:[]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62042756", module.exports)
  }
}

/***/ })

});