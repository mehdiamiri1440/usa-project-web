webpackJsonp([2],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(326)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(328)
/* template */
var __vue_template__ = __webpack_require__(329)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5da72368"
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
Component.options.__file = "resources/assets/js/components/dashboard/group-messages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5da72368", Component.options)
  } else {
    hotAPI.reload("data-v-5da72368", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Push v1.0
 * =========
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2017 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function(i,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):i.Push=t()}(this,function(){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(t)}function t(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function n(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function e(i,t,e){return t&&n(i.prototype,t),e&&n(i,e),i}function o(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)}function r(i,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}var s="PushError:",c={errors:{incompatible:"".concat(s," Push.js is incompatible with browser."),invalid_plugin:"".concat(s," plugin class missing from plugin manifest (invalid plugin). Please check the documentation."),invalid_title:"".concat(s," title of notification must be a string"),permission_denied:"".concat(s," permission request declined"),sw_notification_error:"".concat(s," could not show a ServiceWorker notification due to the following reason: "),sw_registration_error:"".concat(s," could not register the ServiceWorker due to the following reason: "),unknown_interface:"".concat(s," unable to create notification: unknown interface")}},a=function(){function i(n){t(this,i),this._win=n,this.GRANTED="granted",this.DEFAULT="default",this.DENIED="denied",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED]}return e(i,[{key:"request",value:function(i,t){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:"_requestWithCallback",value:function(i,t){var n=this,e=this.get(),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n._win.Notification.permission;void 0===e&&n._win.webkitNotifications&&(e=n._win.webkitNotifications.checkPermission()),e===n.GRANTED||0===e?i&&i():t&&t()};e!==this.DEFAULT?o(e):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(o):this._win.Notification&&this._win.Notification.requestPermission?this._win.Notification.requestPermission().then(o).catch(function(){t&&t()}):i&&i()}},{key:"_requestAsPromise",value:function(){var i=this,t=this.get(),n=t!==this.DEFAULT,e=this._win.Notification&&this._win.Notification.requestPermission,o=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise(function(r,s){var c=function(t){return function(t){return t===i.GRANTED||0===t}(t)?r():s()};n?c(t):o?i._win.webkitNotifications.requestPermission(function(i){c(i)}):e?i._win.Notification.requestPermission().then(function(i){c(i)}).catch(s):r()})}},{key:"has",value:function(){return this.get()===this.GRANTED}},{key:"get",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),i}(),u=function(){function n(){t(this,n)}return e(n,null,[{key:"isUndefined",value:function(i){return void 0===i}},{key:"isNull",value:function(i){return null===obj}},{key:"isString",value:function(i){return"string"==typeof i}},{key:"isFunction",value:function(i){return i&&"[object Function]"==={}.toString.call(i)}},{key:"isObject",value:function(t){return"object"===i(t)}},{key:"objectMerge",value:function(i,t){for(var n in t)i.hasOwnProperty(n)&&this.isObject(i[n])&&this.isObject(t[n])?this.objectMerge(i[n],t[n]):i[n]=t[n]}}]),n}(),f=function i(n){t(this,i),this._win=n},l=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.Notification}},{key:"create",value:function(i,t){return new this._win.Notification(i,{icon:u.isString(t.icon)||u.isUndefined(t.icon)||u.isNull(t.icon)?t.icon:t.icon.x32,body:t.body,tag:t.tag,requireInteraction:t.requireInteraction})}},{key:"close",value:function(i){i.close()}}]),n}(),h=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:"getFunctionBody",value:function(i){var t=i.toString().match(/function[^{]+{([\s\S]*)}$/);return void 0!==t&&null!==t&&t.length>1?t[1]:null}},{key:"create",value:function(i,t,n,e,o){var r=this;this._win.navigator.serviceWorker.register(e),this._win.navigator.serviceWorker.ready.then(function(e){var s={id:i,link:n.link,origin:document.location.href,onClick:u.isFunction(n.onClick)?r.getFunctionBody(n.onClick):"",onClose:u.isFunction(n.onClose)?r.getFunctionBody(n.onClose):""};void 0!==n.data&&null!==n.data&&(s=Object.assign(s,n.data)),e.showNotification(t,{icon:n.icon,body:n.body,vibrate:n.vibrate,tag:n.tag,data:s,requireInteraction:n.requireInteraction,silent:n.silent}).then(function(){e.getNotifications().then(function(i){e.active.postMessage(""),o(i)})}).catch(function(i){throw new Error(c.errors.sw_notification_error+i.message)})}).catch(function(i){throw new Error(c.errors.sw_registration_error+i.message)})}},{key:"close",value:function(){}}]),n}(),_=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:"create",value:function(i,t){var n=this._win.navigator.mozNotification.createNotification(i,t.body,t.icon);return n.show(),n}}]),n}(),v=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:"create",value:function(i,t){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(u.isString(t.icon)||u.isUndefined(t.icon)?t.icon:t.icon.x16,i),this._win.external.msSiteModeActivate(),null}},{key:"close",value:function(){this._win.external.msSiteModeClearIconOverlay()}}]),n}(),d=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.webkitNotifications}},{key:"create",value:function(i,t){var n=this._win.webkitNotifications.createNotification(t.icon,i,t.body);return n.show(),n}},{key:"close",value:function(i){i.cancel()}}]),n}();return new(function(){function i(n){t(this,i),this._currentId=0,this._notifications={},this._win=n,this.Permission=new a(n),this._agents={desktop:new l(n),chrome:new h(n),firefox:new _(n),ms:new v(n),webkit:new d(n)},this._configuration={serviceWorker:"/serviceWorker.min.js",fallback:function(i){}}}return e(i,[{key:"_closeNotification",value:function(i){var t=!0,n=this._notifications[i];if(void 0!==n){if(t=this._removeNotification(i),this._agents.desktop.isSupported())this._agents.desktop.close(n);else if(this._agents.webkit.isSupported())this._agents.webkit.close(n);else{if(!this._agents.ms.isSupported())throw t=!1,new Error(c.errors.unknown_interface);this._agents.ms.close()}return t}return!1}},{key:"_addNotification",value:function(i){var t=this._currentId;return this._notifications[t]=i,this._currentId++,t}},{key:"_removeNotification",value:function(i){var t=!1;return this._notifications.hasOwnProperty(i)&&(delete this._notifications[i],t=!0),t}},{key:"_prepareNotification",value:function(i,t){var n,e=this;return n={get:function(){return e._notifications[i]},close:function(){e._closeNotification(i)}},t.timeout&&setTimeout(function(){n.close()},t.timeout),n}},{key:"_serviceWorkerCallback",value:function(i,t,n){var e=this,o=this._addNotification(i[i.length-1]);navigator&&navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",function(i){var t=JSON.parse(i.data);"close"===t.action&&Number.isInteger(t.id)&&e._removeNotification(t.id)}),n(this._prepareNotification(o,t))),n(null)}},{key:"_createCallback",value:function(i,t,n){var e,o=this,r=null;if(t=t||{},e=function(i){o._removeNotification(i),u.isFunction(t.onClose)&&t.onClose.call(o,r)},this._agents.desktop.isSupported())try{r=this._agents.desktop.create(i,t)}catch(e){var s=this._currentId,c=this.config().serviceWorker,a=function(i){return o._serviceWorkerCallback(i,t,n)};this._agents.chrome.isSupported()&&this._agents.chrome.create(s,i,t,c,a)}else this._agents.webkit.isSupported()?r=this._agents.webkit.create(i,t):this._agents.firefox.isSupported()?this._agents.firefox.create(i,t):this._agents.ms.isSupported()?r=this._agents.ms.create(i,t):(t.title=i,this.config().fallback(t));if(null!==r){var f=this._addNotification(r),l=this._prepareNotification(f,t);u.isFunction(t.onShow)&&r.addEventListener("show",t.onShow),u.isFunction(t.onError)&&r.addEventListener("error",t.onError),u.isFunction(t.onClick)&&r.addEventListener("click",t.onClick),r.addEventListener("close",function(){e(f)}),r.addEventListener("cancel",function(){e(f)}),n(l)}n(null)}},{key:"create",value:function(i,t){var n,e=this;if(!u.isString(i))throw new Error(c.errors.invalid_title);return n=this.Permission.has()?function(n,o){try{e._createCallback(i,t,n)}catch(i){o(i)}}:function(n,o){e.Permission.request().then(function(){e._createCallback(i,t,n)}).catch(function(){o(c.errors.permission_denied)})},new Promise(n)}},{key:"count",value:function(){var i,t=0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&t++;return t}},{key:"close",value:function(i){var t;for(t in this._notifications)if(this._notifications.hasOwnProperty(t)&&this._notifications[t].tag===i)return this._closeNotification(t)}},{key:"clear",value:function(){var i,t=!0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&(t=t&&this._closeNotification(i));return t}},{key:"supported",value:function(){var i=!1;for(var t in this._agents)this._agents.hasOwnProperty(t)&&(i=i||this._agents[t].isSupported());return i}},{key:"config",value:function(i){return(void 0!==i||null!==i&&u.isObject(i))&&u.objectMerge(this._configuration,i),this._configuration}},{key:"extend",value:function(i){var t,n={}.hasOwnProperty;if(!n.call(i,"plugin"))throw new Error(c.errors.invalid_plugin);n.call(i,"config")&&u.isObject(i.config)&&null!==i.config&&this.config(i.config),t=new(0,i.plugin)(this.config());for(var e in t)n.call(t,e)&&u.isFunction(t[e])&&(this[e]=t[e])}}]),i}())("undefined"!=typeof window?window:global)});
//# sourceMappingURL=push.min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("32fa29de", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5da72368\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group-messages.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5da72368\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group-messages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.loading-container[data-v-5da72368] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  min-height: 86vh;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  background: #fff;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  position: relative;\n  align-items: center;\n  z-index: 1;\n}\n.whatsapp-loading-gif[data-v-5da72368] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 20%;\n  height: 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.chat-not-loaded[data-v-5da72368] {\n  opacity: 0;\n}\n.chat-loaded[data-v-5da72368] {\n  opacity: 1;\n}\n.contact-is-search img[data-v-5da72368] {\n  display: block;\n  width: 60px;\n  margin: 18px auto;\n}\n.clock-icon[data-v-5da72368] {\n  font-size: 14px;\n}\n.check-items[data-v-5da72368] {\n  padding-left: 10px;\n  color: #00a65a;\n}\n.main-content[data-v-5da72368] {\n  padding: 65px 250px 0 0;\n\n  direction: rtl;\n\n  border-bottom: 2px solid #f2f2f2;\n  height: 100%;\n  position: fixed;\n\n  /*right: 0;*/\n  background: #fff;\n\n  left: 0;\n\n  bottom: 0;\n\n  top: 0;\n}\n.little-main .main-content[data-v-5da72368] {\n  padding: 65px 80px 0 0;\n}\n.lds-ring[data-v-5da72368] {\n  display: inline-block;\n\n  position: absolute;\n\n  width: 64px;\n\n  height: 64px;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n}\n.lds-ring div[data-v-5da72368] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 5px solid #00c569;\n  border-radius: 50%;\n  -webkit-animation: lds-ring-data-v-5da72368 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring-data-v-5da72368 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #00c569 transparent transparent transparent;\n}\n.lds-ring-alt[data-v-5da72368] {\n  display: block;\n  margin-top: 50px;\n  direction: rtl;\n  text-align: center;\n}\n.lds-ring div[data-v-5da72368]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div[data-v-5da72368]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div[data-v-5da72368]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n.loade-more-messages .lds-ring[data-v-5da72368] {\n  width: 50px;\n\n  height: 50px;\n}\n.loade-more-messages .lds-ring > div[data-v-5da72368] {\n  width: 36px;\n\n  height: 36px;\n}\n@-webkit-keyframes lds-ring-data-v-5da72368 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes lds-ring-data-v-5da72368 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n\n/*preloader image style*/\n.contacts-switch-buttons-wrapper[data-v-5da72368] {\n  float: right;\n  width: 100%;\n  background: #eef3f3;\n  border-bottom: 3px solid #e3e3e3;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-5da72368] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-5da72368] {\n  border: none;\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 15px 0;\n  position: relative;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-5da72368] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-5da72368],\n.contacts-switch-buttons-wrapper .contact-button[data-v-5da72368]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\n.contact-title[data-v-5da72368] {\n  font-size: 16px;\n  padding: 18px 8px 23px;\n  border-bottom: 2px solid #f2f2f2;\n}\n.contact-title i[data-v-5da72368] {\n  font-size: 26px;\n  position: relative;\n  top: 5px;\n}\n.contact-title span[data-v-5da72368] {\n  font-size: 16px;\n  padding-right: 4px;\n}\n.contact-wrapper[data-v-5da72368],\n.contact-wrapper > div[data-v-5da72368] {\n  height: 100%;\n}\n.contact-wrapper .contact-body[data-v-5da72368] {\n  height: calc(100% - 100px);\n  float: right;\n  width: 100%;\n}\n.send-message-form[data-v-5da72368] {\n  overflow: hidden;\n  padding: 4px 15px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.message-input[data-v-5da72368] {\n  float: left;\n  width: calc(100% - 60px);\n}\n.default-message-wrapper[data-v-5da72368] {\n  position: relative;\n  height: 100%;\n  background: #f6f6f6;\n}\n.default-message-wrapper .default-main-contents[data-v-5da72368] {\n  width: 250px;\n\n  height: 250px;\n\n  background: #fff;\n\n  border-radius: 250px;\n\n  position: absolute;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n\n  text-align: center;\n\n  padding-top: 60px;\n  -webkit-box-shadow: 0 0 10px #ebebeb;\n          box-shadow: 0 0 10px #ebebeb;\n}\n.default-message-wrapper .default-main-contents i[data-v-5da72368] {\n  font-size: 55px;\n}\n.default-message-wrapper .default-main-contents p[data-v-5da72368] {\n  font-size: 16px;\n\n  margin: 20px 0;\n}\n@media screen and (max-width: 992px) {\n.main-content[data-v-5da72368] {\n    padding: 65px 0 0;\n}\n}\n@media screen and (max-width: 768px) {\n.send-message-form .button-wrapper button[data-v-5da72368] {\n    padding: 12px 13px;\n    font-size: inherit;\n}\n.send-message-form .message-input input[data-v-5da72368] {\n    padding: 13px 15px;\n}\n.default-main-contents[data-v-5da72368] {\n    display: none;\n}\n.main-content[data-v-5da72368] {\n    padding: 65px 0 0;\n}\n.hidden_element[data-v-5da72368] {\n    display: none;\n}\n.back-state[data-v-5da72368] {\n    display: block;\n}\n.message-wrapper .message-contact-title span[data-v-5da72368] {\n    padding-top: 6px;\n\n    width: 170px;\n\n    overflow: hidden;\n\n    height: 40px;\n\n    line-height: 1.618;\n\n    text-overflow: ellipsis;\n\n    white-space: nowrap;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-5da72368] {\n    width: 33.3333%;\n}\n.reply-info p[data-v-5da72368] {\n    width: 100%;\n}\n}\n@media screen and (max-width: 370px) {\n.message-wrapper .message-contact-title span[data-v-5da72368] {\n    width: 130px;\n}\n}\n@media screen and (max-width: 330px) {\n.message-wrapper .message-contact-title-img[data-v-5da72368] {\n    margin: 0 15px;\n}\n.message-wrapper .message-contact-title span[data-v-5da72368] {\n    font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_push_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_messages_components_my_group_list__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_messages_components_my_group_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__group_messages_components_my_group_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_messages_components_group_main_chat_wrapper__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_messages_components_group_main_chat_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__group_messages_components_group_main_chat_wrapper__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["defultimg", "str", "loading_img"],
  components: {
    MyGroupList: __WEBPACK_IMPORTED_MODULE_2__group_messages_components_my_group_list___default.a,
    MainChatWrapper: __WEBPACK_IMPORTED_MODULE_3__group_messages_components_group_main_chat_wrapper___default.a
  },
  data: function data() {
    return {
      isImageLoad: false,
      isChatMessagesLoaded: true,
      isFirstMessageLoading: true,
      selectedIndex: -1,
      items: [{
        message: "پیام ها",
        url: "messages"
      }],
      isSearchingContact: false,
      contactList: [],
      chatMessages: "",
      selectedContact: "",
      currentUserId: "",
      currentContactUserId: "",
      msgToSend: "",
      isComponentActive: false,
      contactNameSearchText: "",
      isContactListLoaded: false,
      assets: this.$parent.assets,
      groupList: [],
      isGroupChatMessagesLoaded: true,
      groupChatMessages: [],
      selectedGroup: "",
      isSearchingGroup: false,
      groupNameSearchText: "",
      popUpMsg: "",
      isChatLoadeMore: false,
      groupMessageCount: 50,
      groupMessageLoading: false,
      lastGroupMessage: false,
      UnsubscribeGroups: [],
      reloadGroupList: false,
      allGroupsIsSubscribe: false,
      allGroupsIsUnSubscribe: false,
      allGroupIsload: false,
      replyMessage: "",
      loadReplyData: false
    };
  },

  methods: {
    init: function init() {
      this.loadContactList();
      this.loadGroupList();
    },
    loadImage: function loadImage() {
      this.isImageLoad = false;
    },
    ImageLoaded: function ImageLoaded() {
      this.isImageLoad = true;
    },
    loadContactList: function loadContactList() {
      var self = this;
      this.isContactListLoaded = false;

      axios.post("/get_contact_list").then(function (response) {
        self.contactList = response.data.contact_list;
        self.currentUserId = response.data.user_id;
        self.isContactListLoaded = true;
      }).catch(function (e) {
        //
      });
    },
    loadGroupList: function loadGroupList() {
      var self = this;
      self.allGroupIsload = true;

      axios.post("/group/get_groups_list").then(function (response) {
        self.groupList = response.data.groups;
        if (self.groupList.length == 0) {
          self.allGroupsIsUnSubscribe = true;
        } else {
          self.allGroupsIsUnSubscribe = false;
        }

        self.getUnsubscribeGroups();
      }).catch(function (e) {
        //
      });
    },
    loadChatHistory: function loadChatHistory(contact, index) {
      var self = this;
      self.isChatLoadeMore = false;
      self.handleBackBtnClickOnDevices();
      self.isChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;
      self.selectedGroup = "";

      this.selectedContact = contact;
      this.currentContactUserId = contact.contact_id;

      axios.post("/get_user_chat_history", {
        user_id: contact.contact_id
      }).then(function (response) {
        self.chatMessages = response.data.messages;
        self.currentUserId = response.data.current_user_id;
        self.scrollToEnd(0);
      }).catch(function (e) {
        //
      });

      var index = this.searchForObjectIndexInArray(contact.contact_id, this.contactList);

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("messageCount", -1 * contact.unread_msgs_count);

      contact.unread_msgs_count = 0;

      this.contactList.splice(index, 1, contact);
    },
    loadGroupChatHistory: function loadGroupChatHistory(group, index) {
      var self = this;

      this.groupMessageCount = 50;
      this.lastGroupMessage = false;
      this.groupMessageLoading = false;
      self.handleBackBtnClickOnDevices();
      self.isChatLoadeMore = false;
      self.isGroupChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;
      self.selectedContact = "";
      self.selectedGroup = group;
      this.isChatMessagesLoaded = true;

      axios.post("/group/get_group_chats", {
        group_id: group.id,
        message_count: self.groupMessageCount
      }).then(function (response) {
        self.groupChatMessages = response.data.messages;
        self.isGroupChatMessagesLoaded = false;

        self.scrollToEnd(0);
      }).catch(function (e) {
        //
      });

      var index = this.searchForObjectIndexInArray(group.id, this.groupList);

      group.unread_messages = 0;

      this.groupList.splice(index, 1, group);
    },
    scrollToEnd: function scrollToEnd(time) {
      var chatPageElementList = $(".chat-page ul");
      var self = this;
      setTimeout(function () {
        chatPageElementList.animate({ scrollTop: chatPageElementList.prop("scrollHeight") }, 0, "swing", function () {
          self.isChatMessagesLoaded = false;
        });
      }, time);
    },
    sendMessage: function sendMessage() {
      var self = this;

      var tempMsg = self.msgToSend;
      self.msgToSend = "";

      if (tempMsg) {
        var msgObject = {
          sender_id: self.currentUserId,
          receiver_id: self.currentContactUserId,
          text: tempMsg
        };

        self.chatMessages.push(msgObject);
        self.scrollToEnd(0);

        axios.post("/messanger/send_message", msgObject).then(function (response) {
          self.isFirstMessageLoading = false;
          self.loadChatHistory(self.selectedContact, -10);
        }).catch(function (e) {
          //
        });
      }
    },
    sendMessageToGroup: function sendMessageToGroup() {
      var self = this;
      var tempMsg = self.msgToSend;
      self.msgToSend = "";

      if (tempMsg) {
        var msgObject = {
          text: tempMsg,
          group_id: self.selectedGroup.id
        };

        var tempMsgObject = {
          text: tempMsg,
          is_link: false,
          user_name: "test",
          first_name: "kjlk",
          last_name: "family",
          user_id: self.currentUserId,
          parent_id: null,
          parent_text: null,
          parent_author_first_name: null,
          parent_author_last_name: null
        };

        if (self.replyMessage.id && self.loadReplyData) {
          msgObject.replied_msg_id = self.replyMessage.id;
        }

        self.groupChatMessages.push(tempMsgObject);

        self.scrollToEnd(0);

        axios.post("/group/send_message", msgObject).then(function (response) {
          self.isFirstMessageLoading = false;
          self.resetReplyMessage();

          self.loadGroupChatHistory(self.selectedGroup, -10);
        }).catch(function (e) {
          //
        });
      }
    },
    keepChatUpdated: function keepChatUpdated(contact) {
      var self = this;
      setTimeout(function () {
        self.loadChatHistory(contact);
      }, 20000);
    },
    pushNotification: function pushNotification(header, body, link) {
      __WEBPACK_IMPORTED_MODULE_1_push_js___default.a.create(header, {
        body: body,
        timeout: 4000,
        link: link,
        onClick: function onClick() {
          window.focus();
          this.close();
        }
      });
    },
    goToButtomOfChat: function goToButtomOfChat() {
      $(".chat-page ul").animate({ scrollTop: $(".chat-page ul").prop("scrollHeight") }, 0);
    },
    searchForObjectIndexInArray: function search(contactId, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].contact_id === contactId) {
          return i;
        }
      }
    },
    pageHasBeenReloaded: function pageHasBeenReloaded() {
      if (window.performance) {
        //                  TYPE_BACK_FORWARD
        if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
          return true;
        } else {
          return false;
        }
      }
    },
    parseDateTime: function parseDateTime(dateTimeString) {
      //
    },
    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    handleBackBtnClickOnDevices: function handleBackBtnClickOnDevices() {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        if (self.isDeviceMobile()) {
          if (window.location.pathname == "/seller/messages" || window.location.pathname == "/buyer/messages") {
            if (self.selectedContact) {
              self.selectedContact = "";
            }
          }
        }
      });
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    subscribeUser: function subscribeUser(groupId) {
      this.popUpMsg = "آیا میخواهید در گروه عضو شوید؟";
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("joinGroupMessage", this.popUpMsg);
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("joinGroupId", groupId);
      $("#join-to-group").modal("show");
    },
    checkMessageName: function checkMessageName(index, prevIndex) {
      var isMessageName = false;
      if (this.groupChatMessages[prevIndex] && prevIndex >= 0) {
        if (this.groupChatMessages[index].user_id != this.groupChatMessages[prevIndex].user_id) {
          isMessageName = true;
        }
      } else {
        isMessageName = true;
      }

      return isMessageName;
    },
    groupMessageAutoLoader: function groupMessageAutoLoader() {
      var self = this;
      $(".message-wrapper.group-messages ul").scroll(function () {
        var scroll = $(this).scrollTop();

        if (scroll <= 1000 && !self.groupMessageLoading && !self.lastGroupMessage) {
          self.isChatLoadeMore = true;
          self.loadMoreGroupMessage();
        }
      });
    },

    loadMoreGroupMessage: function loadMoreGroupMessage() {
      var self = this;
      self.groupMessageLoading = true;
      if (self.groupMessageCount < 2000) {
        self.groupMessageCount = self.groupMessageCount + 50;
      }
      axios.post("/group/get_group_chats", {
        group_id: self.selectedGroup.id,
        message_count: self.groupMessageCount
      }).then(function (response) {
        var currentDataSize = self.groupChatMessages.length;
        var newDataSize = response.data.messages.length;
        if (currentDataSize == newDataSize) {
          self.groupMessageCount - 50;
          self.lastGroupMessage = true;
        } else {
          self.groupChatMessages = response.data.messages;
          self.lastGroupMessage = false;
        }
        self.isGroupChatMessagesLoaded = false;
        self.groupMessageLoading = false;
        self.isChatLoadeMore = false;

        // self.scrollToEnd(0);
      }).catch(function (e) {
        //
      });
    },
    getUnsubscribeGroups: function getUnsubscribeGroups() {
      var self = this;
      axios.post("/group/get_all_groups").then(function (response) {
        self.checkUserIsSubscribe(response.data.all_groups);
      });
    },
    checkUserIsSubscribe: function checkUserIsSubscribe(groups) {
      var subscribeGroups = this.groupList;
      var self = this;

      for (var i = 0, len = subscribeGroups.length; i < len; i++) {
        for (var j = 0, len2 = groups.length; j < len2; j++) {
          if (subscribeGroups[i].id === groups[j].id) {
            groups.splice(j, 1);
            len2 = groups.length;
          }
        }
      }
      if (groups == 0) {
        this.allGroupsIsSubscribe = true;
      } else {
        this.allGroupsIsSubscribe = false;
      }
      self.allGroupIsload = false;
      self.UnsubscribeGroups = groups;
    },
    replyMessageData: function replyMessageData(msg) {
      this.loadReplyData = true;
      this.replyMessage = msg;

      var chatPageElementList = $(".chat-page ul");
      var self = this;
      setTimeout(function () {
        chatPageElementList.animate({ scrollTop: chatPageElementList.prop("scrollHeight") }, 100, "swing", function () {
          self.isChatMessagesLoaded = false;
        });
      }, 0);
    },
    resetReplyMessage: function resetReplyMessage() {
      this.loadReplyData = false;

      setTimeout(function () {
        this.replyMessage = "";
      }, 100);
    }
  },
  watch: {
    contactNameSearchText: function contactNameSearchText() {
      var self = this;
      if (self.contactNameSearchText !== "") {
        self.isSearchingContact = true;
        axios.post("/get_contact_list").then(function (response) {
          self.contactList = response.data.contact_list;
          self.currentUserId = response.data.user_id;

          var text = self.contactNameSearchText.split(" ");
          self.contactList = self.contactList.filter(function (contact) {
            return text.every(function (el) {
              if (contact.first_name.indexOf(el) > -1 || contact.last_name.indexOf(el) > -1) {
                return true;
              } else return false;
            });
          });

          self.isSearchingContact = false;
        }).catch(function (e) {
          //
        });
      } else {
        self.loadContactList();
      }
    },
    groupNameSearchText: function groupNameSearchText() {
      var self = this;
      // self.groupList = [];
      if (self.groupNameSearchText !== "") {
        self.isSearchingGroup = true;
        axios.post("/group/get_groups_list").then(function (response) {
          self.groupList = response.data.groups;
          var text = self.groupNameSearchText.split(" ");
          self.isSearchingGroup = false;
          self.groupList = self.groupList.filter(function (group) {
            return text.every(function (el) {
              if (group.name.indexOf(el) > -1) {
                return true;
              } else return false;
            });
          });
        }).catch(function (e) {
          //
        });
      } else {
        self.loadGroupList();
      }
    },
    isGroupChatMessagesLoaded: function isGroupChatMessagesLoaded(event) {
      if (event == false) {
        this.groupMessageAutoLoader();
      }
    },
    reloadGroupList: function reloadGroupList(event) {
      this.reloadGroupList = false;
      this.loadGroupList();
    }
  },
  mounted: function mounted() {
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", this.items);
  },

  created: function created() {
    var _this = this;

    gtag("config", "UA-129398000-1", { page_path: "/messages" });

    var self = this;

    if (__WEBPACK_IMPORTED_MODULE_1_push_js___default.a.Permission.has() === false) {
      __WEBPACK_IMPORTED_MODULE_1_push_js___default.a.Permission.request(function () {}, function () {});
    }
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("reloadAllGroupLists", function ($event) {
      _this.reloadGroupList = $event;
    });

    Echo.private("testChannel." + self.currentContactUserId).listen("newMessage", function (e) {
      var senderId = e.new_message.sender_id;
      //update contact list
      self.loadContactList();

      if (self.currentContactUserId) {
        if (self.currentContactUserId === senderId) {
          self.chatMessages.push(e.new_message);
          self.scrollToEnd(0);

          if (self.isComponentActive == false) {
            self.pushNotification("پیام جدید", e.new_message.text, "/dashboard/messages");
          }
        }
      } else {
        _this.pushNotification("پیام جدید", e.new_message.text, "/dashboard/messages");
      }
    });
  },
  activated: function activated() {
    this.isComponentActive = true;
  },
  deactivated: function deactivated() {
    this.isComponentActive = false;
  }
});

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "main-content col-xs-12" },
    [
      _c(
        "div",
        {
          staticClass: "col-xs-12 contact-wrapper pull-right col-sm-4 col-md-3",
          class: { hidden_element: _vm.selectedContact || _vm.selectedGroup }
        },
        [
          _c(
            "div",
            { staticClass: "row" },
            [
              _c("div", { staticClass: "contacts-switch-buttons-wrapper" }, [
                _c(
                  "div",
                  { staticClass: "switch-button-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "contact-button",
                        attrs: { to: { path: "messages" }, tag: "button" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-user" }),
                        _vm._v("\n            مخاطبین من\n          ")
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "switch-button-item hidden-lg hidden-md hidden-sm"
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "contact-button",
                        attrs: { to: { path: "add-new-group" }, tag: "button" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-plus" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-users" }),
                        _vm._v("\n            افزودن گروه\n          ")
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("my-group-list")
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("MainChatWrapper")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "switch-button-item" }, [
      _c("button", { staticClass: "contact-button active" }, [
        _c("i", { staticClass: "fa fa-users" }),
        _vm._v("\n            گروه های من\n          ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5da72368", module.exports)
  }
}

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(618)
  __webpack_require__(620)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(622)
/* template */
var __vue_template__ = __webpack_require__(623)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-454cea3c"
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
Component.options.__file = "resources/assets/js/components/dashboard/group-messages-components/group-main-chat-wrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-454cea3c", Component.options)
  } else {
    hotAPI.reload("data-v-454cea3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(619);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("775a8d0e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454cea3c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group-main-chat-wrapper.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454cea3c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group-main-chat-wrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.loading-container[data-v-454cea3c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  min-height: 86vh;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  background: #fff;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  position: relative;\n  align-items: center;\n  z-index: 1;\n}\n.whatsapp-loading-gif[data-v-454cea3c] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 20%;\n  height: 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.chat-not-loaded[data-v-454cea3c] {\n  opacity: 0;\n}\n.chat-loaded[data-v-454cea3c] {\n  opacity: 1;\n}\n.contact-is-search img[data-v-454cea3c] {\n  display: block;\n  width: 60px;\n  margin: 18px auto;\n}\n.clock-icon[data-v-454cea3c] {\n  font-size: 14px;\n}\n.check-items[data-v-454cea3c] {\n  padding-left: 10px;\n  color: #00a65a;\n}\n.message-wrapper[data-v-454cea3c] {\n  border-right: 2px solid #f2f2f2;\n  position: relative;\n  height: 100%;\n}\n.message-wrapper .message-contact-title[data-v-454cea3c] {\n  font-size: 16px;\n  padding: 7px 0 8px;\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n  overflow: hidden;\n  color: #fff;\n}\n.message-contact-title a[data-v-454cea3c] {\n  color: #fafafa;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-contact-title a[data-v-454cea3c]:hover {\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-wrapper .message-contact-title-img[data-v-454cea3c] {\n  width: 35px;\n  height: 35px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin: 0 22px 0 17px;\n}\n.message-wrapper .message-contact-title img[data-v-454cea3c] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.message-wrapper .message-contact-title span[data-v-454cea3c] {\n  float: right;\n  display: block;\n  padding-top: 9px;\n}\n.back-state .green-button[data-v-454cea3c] {\n  background: #fff;\n  color: #00c569;\n  padding: 5px 14px;\n  border-radius: 5px;\n  font-size: 12px;\n  margin: 6px 0 0 25px;\n}\n.back-state[data-v-454cea3c] {\n  display: none;\n}\n.message-wrapper .chat-page ul[data-v-454cea3c] {\n  padding: 20px;\n\n  overflow-x: hidden;\n\n  position: absolute;\n\n  left: 0;\n\n  right: 0;\n\n  bottom: 57px;\n\n  top: 50px;\n\n  -webkit-transition: 100ms;\n\n  transition: 100ms;\n}\n.message-wrapper .chat-page ul li[data-v-454cea3c] {\n  overflow: hidden;\n}\n.message-wrapper .chat-page li > div[data-v-454cea3c] {\n  max-width: 455px;\n  font-size: 14px;\n  line-height: 1.612;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 8px;\n  padding: 5px 10px;\n  margin: 0 auto 3px;\n  display: inline-block;\n  position: relative;\n}\n.message-wrapper .chat-page .message-receive[data-v-454cea3c] {\n  float: left;\n  background: #f7f7f7;\n}\n.message-wrapper .chat-page .message-send[data-v-454cea3c] {\n  float: right;\n  background: #dcf8c6;\n}\n.message-wrapper .chat-page span.message-chat-date[data-v-454cea3c] {\n  text-align: left;\n  font-size: 10px;\n  padding-top: 3px;\n  width: 100%;\n  direction: ltr;\n  display: block;\n}\n.send-message-form .message-input input[data-v-454cea3c] {\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n}\n.button-wrapper[data-v-454cea3c] {\n  float: right;\n  line-height: 1.1;\n}\n.button-wrapper svg[data-v-454cea3c] {\n  height: 21px;\n  position: relative;\n  right: -3px;\n  top: 3px;\n}\n.send-message-form .button-wrapper button[data-v-454cea3c] {\n  border: none;\n  background: #00c569;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 22px;\n  color: #fff;\n  padding-left: 5px;\n}\n.contact-not-found[data-v-454cea3c] {\n  text-align: center;\n  margin: 15px auto;\n}\n.contact-not-found i[data-v-454cea3c] {\n  font-size: 26px;\n}\n.contact-not-found p[data-v-454cea3c] {\n  margin-bottom: 7px;\n}\n.group-message-wrapper[data-v-454cea3c] {\n  height: 100%;\n}\n.group-message-wrapper h2[data-v-454cea3c] {\n  margin: 30px 15px;\n\n  overflow: hidden;\n\n  background: #fff;\n\n  border-radius: 5px;\n\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n\n  padding: 15px;\n  text-align: center;\n  font-size: 23px;\n}\n.main-group-message[data-v-454cea3c] {\n  position: relative;\n}\n.main-group-message .group-item[data-v-454cea3c] {\n  margin-bottom: 20px;\n}\n.main-group-message .group-item button[data-v-454cea3c] {\n  padding: 5px 6px;\n  display: block;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  border: none;\n  border-bottom: 2px solid #fff;\n  text-align: right;\n  width: 100%;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n.main-group-message .group-item:hover button[data-v-454cea3c] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  border-bottom: 2px solid #00a65a;\n}\n.contact-wrapper .contact-items[data-v-454cea3c] {\n  position: relative;\n  overflow-y: scroll;\n  height: calc(100% + 40px);\n}\n.contact-wrapper .contact-items > ul[data-v-454cea3c] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.group-item img[data-v-454cea3c] {\n  width: 45px;\n  float: right;\n  margin-left: 10px;\n  border-radius: 50px;\n}\n.group-item p[data-v-454cea3c] {\n  margin-top: 15px;\n  font-weight: bold;\n  color: #707070;\n}\n.loade-more-messages[data-v-454cea3c] {\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: 65px;\n  background: #fff;\n  z-index: 1;\n  border-radius: 100px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  left: calc(50% - 30px);\n}\n.group-item-icon[data-v-454cea3c] {\n  color: #00c569;\n  padding-top: 15px;\n  padding-left: 5px;\n}\n.reply-icon[data-v-454cea3c] {\n  display: none;\n  padding: 5px;\n  padding-top: 5px;\n  background: #fff;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  font-size: 14px;\n  text-align: center;\n  padding-top: 6px;\n  color: #00c569;\n  position: absolute;\n  top: 11px;\n}\n.message-send .reply-icon[data-v-454cea3c] {\n  left: -45px;\n}\n.message-receive .reply-icon[data-v-454cea3c] {\n  right: -45px;\n}\n.group-chat-list-item > div[data-v-454cea3c]:hover {\n  cursor: pointer;\n}\n.group-chat-list-item > div:hover .reply-icon[data-v-454cea3c] {\n  display: inline-block;\n}\n.reply-message-wrapper[data-v-454cea3c] {\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  overflow: hidden;\n  height: 0;\n}\n.reply-message-wrapper.reply-active[data-v-454cea3c] {\n  height: 55px;\n}\n.reply-message-wrapper .cancle-reply button[data-v-454cea3c] {\n  background: none;\n  border: none;\n  padding: 14px 19px;\n  font-size: 18px;\n  color: #666;\n}\n.cancle-reply[data-v-454cea3c] {\n  width: 50px;\n\n  height: 50px;\n\n  float: right;\n}\n.reply-info[data-v-454cea3c] {\n  width: calc(100% - 58px);\n\n  float: left;\n\n  border-right: 3px solid #00c569;\n\n  background: #fff;\n\n  border-radius: 5px;\n\n  padding: 7px 15px;\n}\n.reply-info p[data-v-454cea3c] {\n  height: 15px;\n}\n.reply-info p[data-v-454cea3c],\n.replied-message-item-wrapper p[data-v-454cea3c] {\n  width: calc(100% - 15px);\n\n  overflow: hidden;\n\n  text-overflow: ellipsis;\n\n  white-space: nowrap;\n\n  font-size: 12px;\n}\n.reply-info p[data-v-454cea3c]:first-of-type,\n.replied-message-item-wrapper p[data-v-454cea3c]:first-of-type {\n  margin-bottom: 4px;\n  color: #00c569;\n  font-size: 13px;\n}\n.message-wrapper .chat-page ul.reply-is-true[data-v-454cea3c] {\n  bottom: 113px;\n}\n.replied-message-item-wrapper[data-v-454cea3c] {\n  border-radius: 5px;\n\n  font-size: 13px;\n  padding: 5px;\n\n  border-right: 3px solid #00c569;\n\n  margin-bottom: 5px;\n}\n.message-send .replied-message-item-wrapper[data-v-454cea3c] {\n  background: #cfe9ba;\n}\n.message-receive .replied-message-item-wrapper[data-v-454cea3c] {\n  background: #f0f0f0;\n}\n", ""]);

// exports


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(621);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("28b5b851", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454cea3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./group-main-chat-wrapper.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454cea3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./group-main-chat-wrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 622:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.$parent.selectedGroup
      ? _c(
          "div",
          {
            staticClass:
              "col-xs-12 message-wrapper group-messages col-sm-8 col-md-9",
            class: { hidden_element: !_vm.$parent.selectedGroup }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "message-contact-title" }, [
                _c(
                  "div",
                  { staticClass: "contact-title-contents pull-right" },
                  [
                    _c("div", { staticClass: "message-contact-title-img" }, [
                      _c("img", { attrs: { src: _vm.$parent.defultimg } })
                    ]),
                    _vm._v(" "),
                    _vm.$parent.selectedGroup.name
                      ? _c("span", {
                          domProps: {
                            textContent: _vm._s(
                              "گروه " + _vm.$parent.selectedGroup.name
                            )
                          }
                        })
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "back-state pull-left" }, [
                  _c(
                    "a",
                    {
                      staticClass: "green-button",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.$parent.selectedGroup = !_vm.$parent.selectedGroup
                        }
                      }
                    },
                    [_vm._v("بازگشت")]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.$parent.selectedGroup
                ? _c("div", { staticClass: "chat-page" }, [
                    this.isChatLoadeMore
                      ? _c("div", { staticClass: "loade-more-messages" }, [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.$parent.isImageLoad,
                                  expression: "!$parent.isImageLoad"
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
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        class: [
                          _vm.$parent.isGroupChatMessagesLoaded &&
                          _vm.$parent.isFirstMessageLoading
                            ? "chat-not-loaded"
                            : "chat-loaded",
                          { "reply-is-true": _vm.$parent.loadReplyData }
                        ]
                      },
                      _vm._l(_vm.$parent.groupChatMessages, function(
                        msg,
                        index
                      ) {
                        return _c(
                          "li",
                          {
                            key: msg.id,
                            staticClass: "group-chat-list-item",
                            class: {
                              "margin-top-10": _vm.$parent.checkMessageName(
                                index,
                                index - 1
                              )
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                class: [
                                  msg.user_id == _vm.$parent.currentUserId
                                    ? "message-send"
                                    : "message-receive"
                                ]
                              },
                              [
                                _vm._m(0, true),
                                _vm._v(" "),
                                msg.parent_id
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "replied-message-item-wrapper"
                                      },
                                      [
                                        _c("p", {
                                          domProps: {
                                            textContent: _vm._s(
                                              msg.parent_author_first_name +
                                                " " +
                                                msg.parent_author_last_name
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("p", {
                                          domProps: {
                                            textContent: _vm._s(msg.parent_text)
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$parent.checkMessageName(index, index - 1)
                                  ? _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            path: "/profile/" + msg.user_name
                                          }
                                        }
                                      },
                                      [
                                        _c("p", {
                                          domProps: {
                                            textContent: _vm._s(
                                              msg.first_name +
                                                " " +
                                                msg.last_name
                                            )
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                msg.is_link
                                  ? _c("span", {
                                      domProps: { innerHTML: _vm._s(msg.text) }
                                    })
                                  : _c("span", {
                                      domProps: {
                                        textContent: _vm._s(msg.text)
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.$parent.replyMessageData(msg)
                                        }
                                      }
                                    }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "message-chat-date" },
                                  [
                                    msg.created_at
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("$parent.moment")(
                                                msg.created_at,
                                                "jYY/jMM/jDD, h:mm A"
                                              )
                                            )
                                          )
                                        ])
                                      : _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("$parent.moment")(
                                                Date(),
                                                "jYY/jMM/jDD, h:mm A"
                                              )
                                            )
                                          )
                                        ]),
                                    _vm._v(" "),
                                    msg.user_id === _vm.$parent.currentUserId
                                      ? _c(
                                          "span",
                                          { staticClass: "check-items" },
                                          [
                                            msg.created_at
                                              ? _c("i", {
                                                  staticClass: "fa fa-check"
                                                })
                                              : _c("i", {
                                                  staticClass: "far fa-clock"
                                                })
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      })
                    ),
                    _vm._v(" "),
                    _vm.$parent.isGroupChatMessagesLoaded &&
                    _vm.$parent.isFirstMessageLoading
                      ? _c("div", { staticClass: "loading-container" }, [
                          _c("div", { staticClass: "image-wrapper" }, [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.$parent.isImageLoad,
                                    expression: "$parent.isImageLoad"
                                  }
                                ]
                              },
                              [
                                _c("transition", [
                                  _c("img", {
                                    attrs: { src: "", alt: "alt" },
                                    on: { load: _vm.$parent.ImageLoaded }
                                  })
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !_vm.$parent.isImageLoad,
                                    expression: "!$parent.isImageLoad"
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
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "send-message-form" }, [
                      _c(
                        "div",
                        {
                          staticClass: "reply-message-wrapper",
                          class: { "reply-active": this.loadReplyData }
                        },
                        [
                          _c("div", { staticClass: "cancle-reply" }, [
                            _c(
                              "button",
                              {
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.$parent.resetReplyMessage()
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-times" })]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "reply-info" }, [
                            _c("p", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.$parent.replyMessage.first_name +
                                    " " +
                                    _vm.$parent.replyMessage.last_name
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c("p", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.$parent.replyMessage.text
                                )
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("form", [
                        _c("div", { staticClass: "message-input" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.$parent.msgToSend,
                                expression: "$parent.msgToSend"
                              }
                            ],
                            attrs: {
                              type: "text",
                              placeholder: "پیغامی بگذارید "
                            },
                            domProps: { value: _vm.$parent.msgToSend },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$parent,
                                  "msgToSend",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "button-wrapper" }, [
                          _c(
                            "button",
                            {
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.$parent.sendMessageToGroup()
                                }
                              }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "13.347",
                                    height: "12.766",
                                    viewBox: "0 0 13.347 12.766"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      id: "send-message-icon",
                                      "data-name": "send-message-icon",
                                      d:
                                        "M2511.158-3909.893l12.347-5.929-12.347-5.837.235,4.51,10.029,1.327-10.029,1.477Z",
                                      transform:
                                        "translate(-2510.658 3922.159)",
                                      fill: "#fff",
                                      stroke: "#fff",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "1"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.$parent.selectedGroup &&
    _vm.$parent.UnsubscribeGroups.length == 0 &&
    _vm.$parent.allGroupsIsSubscribe
      ? _c(
          "div",
          {
            staticClass: "col-xs-12 default-message-wrapper col-sm-8 col-md-9"
          },
          [_vm._m(1)]
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.$parent.selectedGroup
      ? _c(
          "div",
          { staticClass: "col-xs-12 group-message-wrapper col-sm-8 col-md-9" },
          [
            _c("h2", [_vm._v("برای عضویت در گروه کلیک کنید")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "main-group-message" },
              [
                _vm.$parent.UnsubscribeGroups.length == 0 &&
                !_vm.$parent.allGroupsIsSubscribe
                  ? _c("div", { staticClass: "loade-more-messages" }, [
                      _vm._m(2)
                    ])
                  : _vm._l(_vm.$parent.UnsubscribeGroups, function(
                      group,
                      index
                    ) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "group-item col-xs-4 pull-right"
                        },
                        [
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.$parent.subscribeUser(group.id)
                                }
                              }
                            },
                            [
                              group.photo
                                ? _c("img", {
                                    attrs: {
                                      src: _vm.$parent.str + group.photo,
                                      alt: "گروه " + group.name
                                    }
                                  })
                                : _c("img", {
                                    attrs: {
                                      src:
                                        _vm.$parent.assets +
                                        "assets/img/group-category.jpg",
                                      alt: ""
                                    }
                                  }),
                              _vm._v(" "),
                              _c("p", {
                                staticClass: "pull-right",
                                domProps: {
                                  textContent: _vm._s("گروه " + group.name)
                                }
                              }),
                              _vm._v(" "),
                              _vm._m(3, true)
                            ]
                          )
                        ]
                      )
                    })
              ],
              2
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "reply-icon" }, [
      _c("i", { staticClass: "fa fa-reply" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "default-main-contents" }, [
      _c("i", { staticClass: "fa fa-users" }),
      _vm._v(" "),
      _c("p", [_vm._v("شما در همه گروه ها عضو شده اید")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lds-ring" }, [
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "group-item-icon pull-left" }, [
      _c("i", { staticClass: "fa fa-arrow-left" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-454cea3c", module.exports)
  }
}

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(625)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(627)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d1af5e76"
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
Component.options.__file = "resources/assets/js/components/dashboard/group-messages-components/my-group-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1af5e76", Component.options)
  } else {
    hotAPI.reload("data-v-d1af5e76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(626);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("62b37598", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1af5e76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-group-list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1af5e76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-group-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.contact-body .contact-search[data-v-d1af5e76] {\n  padding: 9px 7px;\n  background: #eef3f3;\n}\n.contact-body .contact-search .contact-search-input-wrapper[data-v-d1af5e76] {\n  position: relative;\n}\n.contact-body .contact-search .contact-search-input-wrapper i[data-v-d1af5e76] {\n  position: absolute;\n  left: 12px;\n  font-size: 20px;\n  color: #c1c1c1;\n  top: 8px;\n}\n.contact-body .contact-search .contact-search-input-wrapper input[data-v-d1af5e76] {\n  padding: 9px 15px;\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n}\n.contact-body .contact-image[data-v-d1af5e76] {\n  width: 45px;\n  height: 45px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  border: 1px solid #f2f2f2;\n  position: relative;\n}\n.contact-body .contact-image img[data-v-d1af5e76] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.contact-body .contact-item a[data-v-d1af5e76] {\n  font-size: 13px;\n  color: #595959;\n  overflow: hidden;\n  padding: 9px 7px;\n  border-bottom: 1px solid #b6b6b6;\n  display: block;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.contact-body .contact-item a[data-v-d1af5e76]:hover,\n.contact-body .contact-item a.active[data-v-d1af5e76] {\n  background: #f6f6f6;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.contact-body .contact-item:last-of-type a[data-v-d1af5e76] {\n  border-bottom: none;\n}\n.contact-body .contact-item span.contact-name[data-v-d1af5e76] {\n  float: right;\n  padding-right: 15px;\n  padding-top: 6px;\n  font-weight: bold;\n}\n.contact-body .contact-item span.contact-last-message[data-v-d1af5e76] {\n  float: right;\n  padding-right: 15px;\n  width: calc(100% - 95px);\n  padding-top: 10px;\n  font-weight: lighter;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.contact-body .contact-item .contact-date[data-v-d1af5e76] {\n  float: left;\n  padding-top: 5px;\n  width: 50px;\n  direction: ltr;\n  text-align: center;\n}\n.contact-body .contact-item .my-contact-date[data-v-d1af5e76] {\n  float: left;\n  padding-top: 3px;\n  width: 50px;\n  direction: ltr;\n  text-align: left;\n}\n.last-message-date[data-v-d1af5e76] {\n  display: inline-block;\n  height: 17px;\n  width: 100px;\n  font-size: 10px;\n  line-height: 2;\n}\n.count-number[data-v-d1af5e76] {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  background: #00c569;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 10px;\n  line-height: 2;\n  margin: 5px auto;\n}\n.contact-body .contact-item span.contact-name[data-v-d1af5e76] {\n  padding-top: 16px;\n}\n.not-found-item[data-v-d1af5e76] {\n  text-align: center;\n  padding: 40px 15px;\n}\n.not-found-item p[data-v-d1af5e76] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #777;\n}\n.not-found-item i[data-v-d1af5e76] {\n  margin: 5px;\n}\nli.add-group-button-wrapper[data-v-d1af5e76] {\n  padding: 10px 5px;\n}\n.add-group-button.green-button[data-v-d1af5e76] {\n  width: 100%;\n  margin: 0;\n  padding: 7px 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contact-body my-groups" }, [
    _c("div", { staticClass: "contact-search" }, [
      _c("form", { attrs: { action: "" } }, [
        _c("div", { staticClass: "contact-search-input-wrapper" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.$parent.groupNameSearchText,
                expression: "$parent.groupNameSearchText"
              }
            ],
            attrs: { type: "text", placeholder: "جستجوی گروه" },
            domProps: { value: _vm.$parent.groupNameSearchText },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.$parent,
                  "groupNameSearchText",
                  $event.target.value
                )
              }
            }
          }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-search" })
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.$parent.groupList.length === 0 && _vm.$parent.allGroupsIsUnSubscribe
      ? _c("div", { staticClass: "not-found-item" }, [_vm._m(0)])
      : _vm.$parent.groupList.length === 0
        ? _c("div", { staticClass: "not-found-item" }, [
            !_vm.$parent.groupNameSearchText && !_vm.$parent.isSearchingGroup
              ? _c("div", { staticClass: "image-wrapper" }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            !_vm.$parent.isImageLoad || _vm.$parent.isImageLoad,
                          expression:
                            "!$parent.isImageLoad || $parent.isImageLoad"
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
              : _vm.$parent.groupNameSearchText && !_vm.$parent.isSearchingGroup
                ? _c("div", [_vm._m(1)])
                : _vm.$parent.isSearchingGroup
                  ? _c("div", { staticClass: "contact-is-search" }, [_vm._m(2)])
                  : _vm.$parent.isSearchingGroup
                    ? _c("div", [_vm._m(3)])
                    : _vm._e()
          ])
        : _c("div", { staticClass: "contact-items" }, [
            _c(
              "ul",
              [
                _vm.$parent.selectedGroup || _vm.$parent.selectedContact
                  ? _c(
                      "li",
                      { staticClass: "add-group-button-wrapper hidden-xs" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "add-group-button green-button",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                ;(_vm.$parent.selectedGroup = ""),
                                  (_vm.$parent.selectedContact = "")
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-plus" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-users" }),
                            _vm._v("\n          افزودن گروه\n        ")
                          ]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.$parent.groupList, function(group, index) {
                  return _c("li", { key: index, staticClass: "contact-item" }, [
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$parent.loadGroupChatHistory(group, index)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "contact-image" }, [
                          group.photo
                            ? _c("img", {
                                attrs: {
                                  src: _vm.$parent.str + "/" + group.photo,
                                  alt: group.name
                                }
                              })
                            : _c("img", {
                                attrs: {
                                  src:
                                    _vm.$parent.assets +
                                    "assets/img/group-category.jpg"
                                }
                              })
                        ]),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "contact-name",
                          domProps: {
                            textContent: _vm._s("گروه " + group.name)
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "contact-date" }, [
                          group.unread_messages !== 0
                            ? _c("p", {
                                staticClass: "count-number",
                                domProps: {
                                  textContent: _vm._s(group.unread_messages)
                                }
                              })
                            : _vm._e()
                        ])
                      ]
                    )
                  ])
                })
              ],
              2
            )
          ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-user" }),
      _vm._v(" "),
      _c("span", [_vm._v("شما هنوز در گروهی عضو نیستید")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", {}, [
      _c("i", { staticClass: "fa fa-user" }),
      _vm._v(" "),
      _c("span", [_vm._v("گروهی یافت نشد")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lds-ring" }, [
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-user" }),
      _vm._v(" "),
      _c("span", [_vm._v("گروهی یافت نشد")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d1af5e76", module.exports)
  }
}

/***/ })

});