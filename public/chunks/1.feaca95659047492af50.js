webpackJsonp([1,4],{

/***/ 238:
/***/ (function(module, exports) {

module.exports = "/images/512-buskool-logo.jpg?eac56955a30a44cc7dad1d6971926bf9";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "/* Magnific Popup CSS */\n.mfp-bg {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1042;\n  overflow: hidden;\n  position: fixed;\n  background: #0b0b0b;\n  opacity: 0.8; }\n\n.mfp-wrap {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1043;\n  position: fixed;\n  outline: none !important;\n  -webkit-backface-visibility: hidden; }\n\n.mfp-container {\n  cursor: initial;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding: 0 8px;\n  box-sizing: border-box; }\n\n.mfp-container:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }\n\n.mfp-align-top .mfp-container:before {\n  display: none; }\n\n.mfp-content {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 auto;\n  text-align: left;\n  z-index: 1045; }\n\n.mfp-inline-holder .mfp-content,\n.mfp-ajax-holder .mfp-content {\n  width: 100%;\n  cursor: auto; }\n\n.mfp-ajax-cur {\n  cursor: progress; }\n\n.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {\n  cursor: pointer;\n}\n\n.mfp-zoom {\n  cursor: pointer;\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n\n.mfp-auto-cursor .mfp-content {\n  cursor: auto; }\n\n.mfp-close,\n.mfp-arrow,\n.mfp-preloader,\n.mfp-counter {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none; }\n\n.mfp-loading.mfp-figure {\n  display: none; }\n\n.mfp-hide {\n  display: none !important; }\n\n.mfp-preloader {\n  color: #CCC;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  text-align: center;\n  margin-top: -0.8em;\n  left: 8px;\n  right: 8px;\n  z-index: 1044; }\n  .mfp-preloader a {\n    color: #CCC; }\n    .mfp-preloader a:hover {\n      color: #FFF; }\n\n.mfp-s-ready .mfp-preloader {\n  display: none; }\n\n.mfp-s-error .mfp-content {\n  display: none; }\n\nbutton.mfp-close,\nbutton.mfp-arrow {\n  overflow: visible;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  display: block;\n  outline: none;\n  padding: 0;\n  z-index: 1046;\n  box-shadow: none;\n  touch-action: manipulation; }\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n.mfp-close {\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-decoration: none;\n  text-align: center;\n  opacity: 0.65;\n  padding: 0 0 18px 10px;\n  color: #FFF;\n  font-style: normal;\n  font-size: 28px;\n  font-family: Arial, Baskerville, monospace; }\n  .mfp-close:hover,\n  .mfp-close:focus {\n    opacity: 1; }\n  .mfp-close:active {\n    top: 1px; }\n\n.mfp-close-btn-in .mfp-close {\n  color: #333; }\n\n.mfp-image-holder .mfp-close,\n.mfp-iframe-holder .mfp-close {\n  color: #FFF;\n  right: -6px;\n  text-align: right;\n  padding-right: 6px;\n  width: 100%; }\n\n.mfp-counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #CCC;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: nowrap; }\n\n.mfp-arrow {\n  position: absolute;\n  opacity: 0.65;\n  margin: 0;\n  top: 50%;\n  margin-top: -55px;\n  padding: 0;\n  width: 90px;\n  height: 110px;\n  -webkit-tap-highlight-color: transparent; }\n  .mfp-arrow:active {\n    margin-top: -54px; }\n  .mfp-arrow:hover,\n  .mfp-arrow:focus {\n    opacity: 1; }\n  .mfp-arrow:before,\n  .mfp-arrow:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin-top: 35px;\n    margin-left: 35px;\n    border: medium inset transparent; }\n  .mfp-arrow:after {\n    border-top-width: 13px;\n    border-bottom-width: 13px;\n    top: 8px; }\n  .mfp-arrow:before {\n    border-top-width: 21px;\n    border-bottom-width: 21px;\n    opacity: 0.7; }\n\n.mfp-arrow-left {\n  left: 0; }\n  .mfp-arrow-left:after {\n    border-right: 17px solid #FFF;\n    margin-left: 31px; }\n  .mfp-arrow-left:before {\n    margin-left: 25px;\n    border-right: 27px solid #3F3F3F; }\n\n.mfp-arrow-right {\n  right: 0; }\n  .mfp-arrow-right:after {\n    border-left: 17px solid #FFF;\n    margin-left: 39px; }\n  .mfp-arrow-right:before {\n    border-left: 27px solid #3F3F3F; }\n\n.mfp-iframe-holder {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n  .mfp-iframe-holder .mfp-content {\n    line-height: 0;\n    width: 100%;\n    max-width: 900px; }\n  .mfp-iframe-holder .mfp-close {\n    top: -40px; }\n\n.mfp-iframe-scaler {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56.25%; }\n  .mfp-iframe-scaler iframe {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #000; }\n\n/* Main image in popup */\nimg.mfp-img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  line-height: 0;\n  box-sizing: border-box;\n  padding: 40px 0 40px;\n  margin: 0 auto; }\n\n/* The shadow behind the image */\n.mfp-figure {\n  line-height: 0; }\n  .mfp-figure:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 40px;\n    bottom: 40px;\n    display: block;\n    right: 0;\n    width: auto;\n    height: auto;\n    z-index: -1;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #444; }\n  .mfp-figure small {\n    color: #BDBDBD;\n    display: block;\n    font-size: 12px;\n    line-height: 14px; }\n  .mfp-figure figure {\n    margin: 0; }\n\n.mfp-bottom-bar {\n  margin-top: -36px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  cursor: auto; }\n\n.mfp-title {\n  text-align: left;\n  line-height: 18px;\n  color: #F3F3F3;\n  word-wrap: break-word;\n  padding-right: 36px; }\n\n.mfp-image-holder .mfp-content {\n  max-width: 100%; }\n\n.mfp-gallery .mfp-image-holder .mfp-figure {\n  cursor: pointer; }\n\n@media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {\n  /**\n       * Remove all paddings around the image on small screen\n       */\n  .mfp-img-mobile .mfp-image-holder {\n    padding-left: 0;\n    padding-right: 0; }\n  .mfp-img-mobile img.mfp-img {\n    padding: 0; }\n  .mfp-img-mobile .mfp-figure:after {\n    top: 0;\n    bottom: 0; }\n  .mfp-img-mobile .mfp-figure small {\n    display: inline;\n    margin-left: 5px; }\n  .mfp-img-mobile .mfp-bottom-bar {\n    background: rgba(0, 0, 0, 0.6);\n    bottom: 0;\n    margin: 0;\n    top: auto;\n    padding: 3px 5px;\n    position: fixed;\n    box-sizing: border-box; }\n    .mfp-img-mobile .mfp-bottom-bar:empty {\n      padding: 0; }\n  .mfp-img-mobile .mfp-counter {\n    right: 5px;\n    top: 3px; }\n  .mfp-img-mobile .mfp-close {\n    top: 0;\n    right: 0;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    background: rgba(0, 0, 0, 0.6);\n    position: fixed;\n    text-align: center;\n    padding: 0; } }\n\n@media all and (max-width: 900px) {\n  .mfp-arrow {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75); }\n  .mfp-arrow-left {\n    -webkit-transform-origin: 0;\n    transform-origin: 0; }\n  .mfp-arrow-right {\n    -webkit-transform-origin: 100%;\n    transform-origin: 100%; }\n  .mfp-container {\n    padding-left: 6px;\n    padding-right: 6px; } }\n\n    /* overlay at start */\n.mfp-fade.mfp-bg {\n  opacity: 0;\n\n  -webkit-transition: all 0.15s ease-out;\n  -moz-transition: all 0.15s ease-out;\n  transition: all 0.15s ease-out;\n}\n/* overlay animate in */\n.mfp-fade.mfp-bg.mfp-ready {\n  opacity: 0.8;\n}\n/* overlay animate out */\n.mfp-fade.mfp-bg.mfp-removing {\n  opacity: 0;\n}\n\n/* content at start */\n.mfp-fade.mfp-wrap .mfp-content {\n  opacity: 0;\n\n  -webkit-transition: all 0.15s ease-out;\n  -moz-transition: all 0.15s ease-out;\n  transition: all 0.15s ease-out;\n}\n/* content animate it */\n.mfp-fade.mfp-wrap.mfp-ready .mfp-content {\n  opacity: 1;\n}\n/* content animate out */\n.mfp-fade.mfp-wrap.mfp-removing .mfp-content {\n  opacity: 0;\n}\n\n.mfp-figure::after{\n  box-shadow: none !important;\n  border-radius: 12px;\n}", ""]);

// exports


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!window.jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];if (void 0 !== a.transition) return !0;for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }return !1;
  };t.prototype = { constructor: t, init: function init() {
      var c = navigator.appVersion;b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    }, open: function open(c) {
      var e;if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;var g,
            h = c.items;for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;if (b.isOpen) return void b.updateItemHTML();b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));var i = a.magnificPopup.modules;for (e = 0; e < i.length; e++) {
        var j = i[e];j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);var k = b.wH = v.height(),
          n = {};if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();o && (n.marginRight = o);
      }b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");var r = b.st.mainClass;return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    }, close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    }, _close: function _close() {
      y(h);var c = r + " " + q + " ";if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = { marginRight: "" };b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    }, updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));var d = c.type;if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    }, appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    }, parseEl: function parseEl(c) {
      var d,
          e = b.items[c];if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];break;
          }
        }e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    }, addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };c || (c = {});var e = "click.magnificPopup";c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    }, _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    }, updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);var e = { status: a, text: d };y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    }, _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;if (d && e) return !0;if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    }, _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    }, _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    }, _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    }, _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    }, _parseMarkup: function _parseMarkup(b, c, d) {
      var e;d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);if (f.length > 0) {
            var g = e[1];"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }return b.scrollbarSize;
    } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    }, close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    }, registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) {
    A();var d = a(this);if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);return d;
  };var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      }, getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);if (f.length) {
            var g = f[0].parentNode;g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");return c.inlineElement = f, f;
        }return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      } } });var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      }, getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");var d = a.extend({ url: c.src, success: function success(d, e, f) {
            var g = { data: d, xhr: f };y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          }, error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          } }, b.st.ajax.settings);return b.req = a.ajax(d), "";
      } } });var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;var d = b.st.image.titleSrc;if (d) {
      if (a.isFunction(d)) return d.call(b, c);if (c.el) return c.el.attr(d) || "";
    }return "";
  };a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var c = b.st.image,
            d = ".image";b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      }, resizeImage: function resizeImage() {
        var a = b.currItem;if (a && a.img && b.st.image.verticalFit) {
          var c = 0;b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      }, _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      }, findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };e(1);
      }, getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");if (i.length) {
          var j = document.createElement("img");j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      } } });var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      } }, proto: { initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                f = "transition";return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;f = j(a);
              }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      }, _getOffset: function _getOffset(c) {
        var d;d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);e.top -= a(window).scrollTop() - f;var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      } } });var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      }, getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });var g = {};return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      } } });var S = function S(a) {
    var c = b.items.length;return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery";return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      }, next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      }, prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      }, goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      }, _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      } } });var U = "retina";a.magnificPopup.registerModule(U, { options: { replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      } } }), A();
});

/***/ }),

/***/ 267:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      is_contact: true
    };
  },
  methods: {
    activeComponentTooltip: function activeComponentTooltip() {
      $(".verified-user").popover({ trigger: "manual", html: true, animation: false }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
          $(_this).popover("hide");
        });
      }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
          if (!$(".popover:hover").length) {
            $(_this).popover("hide");
          }
        }, 300);
      });
    }
  },
  watch: {
    "$parent.contactList": function $parentContactList() {
      var _this2 = this;

      if (this.$parent.contactList) {
        setTimeout(function () {
          _this2.activeComponentTooltip();
        }, 10);
      }
    },
    "$parent.isChanleActive": function $parentIsChanleActive() {
      var _this3 = this;

      if (this.$parent.isChanleActive) {
        setTimeout(function () {
          _this3.activeComponentTooltip();
        }, 10);
      }
    }
  }
});

/***/ }),

/***/ 268:
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

// import StartStep from "./review-steps/start-step";
// import ReviewStep from "./review-steps/review-step";
// import ReviewDescription from "./review-steps/review-description";
// import FinalStep from "./review-steps/final-step";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["userFullName", "userId"],
  data: function data() {
    return {
      reviewData: {
        rate: "",
        reviewText: ""
      },
      errors: {
        reviewData: "",
        reviewText: ""
      },
      submitLoader: false
    };
  },
  methods: {
    reviewSteps: function reviewSteps(step) {
      this.$parent.reviewCurrentStep = step;
    },
    showReviewText: function showReviewText() {
      $("#chat-report-form").collapse("show");
    },
    resetData: function resetData() {
      var self = this;
      this.emptyErros();
      this.reviewData = {
        rate: "",
        reviewText: ""
      };
      $("#chat-report-form").collapse("hide");
    },
    reviewResetData: function reviewResetData() {
      $("#review-modal").modal("hide");
      this.resetData();
    },
    emptyErros: function emptyErros() {
      this.errors = {
        reviewData: "",
        reviewText: ""
      };
    },
    reviewTextValidator: function reviewTextValidator(reviewText) {
      this.errors.reviewText = "";

      if (reviewText != "") {
        if (!this.validateRegx(reviewText, /^[\u0600-\u06FF\a-zA-z\s_,.:/;()+-\d]+$/)) {
          this.errors.reviewText = "توضیحات شامل کاراکتر های غیرمجاز است";
        }
      }
    },
    validateRegx: function validateRegx(input, regx) {
      return regx.test(input);
    },
    submitReview: function submitReview() {
      var self = this;
      this.reviewTextValidator(self.reviewData.reviewText);
      if (self.reviewData.rate == "" && self.reviewData.reviewText == "") {
        this.errors.reviewData = "میزان رضایت یا نظر خود را وارد کنید";
      }
      if (!self.errors.reviewData && !self.errors.reviewText) {
        this.registerReview();
      }
    },
    registerReview: function registerReview() {
      var self = this;
      this.submitLoader = true;

      var reviewObg = {
        user_id: self.userId
      };

      if (self.reviewData.rate) {
        reviewObg.rating_score = self.reviewData.rate;
      }
      if (self.reviewData.reviewText) {
        reviewObg.text = self.reviewData.reviewText;
      }

      axios.post("/profile/add-comment", reviewObg).then(function (response) {
        self.submitLoader = false;
        if (response.data.status == true) {
          // self.$parent.isUserAuthorizedToPostComment();
          self.resetData();
          if (reviewObg.text) {
            self.$parent.successMessage = "نظر شما با موفقیت ثبت و پس از تایید نمایش داده خواهد شد";
          } else {
            self.$parent.successMessage = "نظر شما با موفقیت ثبت شد";
          }
          self.reviewSteps(1);
          // show success modal
        } else {
          self.errors.reviewData = "خطایی رخ داده است لطفا دوباره تلاش کنید";
        }
      });
    },
    handleBackBtnClickOnDevices: function handleBackBtnClickOnDevices() {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        self.reviewResetData();
      });
    }
  },
  watch: {
    "reviewData.rate": function reviewDataRate() {
      this.emptyErros();
    },
    "reviewData.reviewText": function reviewDataReviewText(value) {
      this.emptyErros();
      this.reviewTextValidator(value);
    }
  }
});

/***/ }),

/***/ 269:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      reportFormData: "",
      reportFormActive: false,
      stars: ""
    };
  }
});

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "/images/empty-message.svg?de5572e9650b06d1981ac6d77f76f741";

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("b9173ea0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-42216dd2\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-contact-list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-42216dd2\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-contact-list.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.contact-body .contact-search[data-v-42216dd2] {\n  background: #f0f0f0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.contact-items[data-v-42216dd2] {\n  padding-top: 102px;\n}\n.contact-items.is-buyer-list[data-v-42216dd2] {\n  padding-top: 60px;\n}\n.contact-body .contact-search .contact-search-input-wrapper[data-v-42216dd2] {\n  position: relative;\n  padding: 10px 7px;\n}\n.contact-body .contact-search .contact-search-input-wrapper > i[data-v-42216dd2] {\n  position: absolute;\n  right: 20px;\n  font-size: 16px;\n  color: #919191;\n  top: 21px;\n}\n.contact-body .contact-search .contact-search-input-wrapper input[data-v-42216dd2] {\n  padding: 8px 40px 8px 15px;\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n}\n.contact-body .contact-search .contact-search-input-wrapper > button[data-v-42216dd2] {\n  position: absolute;\n  left: 7px;\n  font-size: 16px;\n  color: #919191;\n  top: 12px;\n  background: none;\n  border: none;\n  padding: 7px 15px 1px;\n}\n.contact-body .contact-image[data-v-42216dd2],\n.contact-body .channel-image[data-v-42216dd2] {\n  width: 45px;\n  height: 45px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #dddddd;\n}\n.contact-body .channel-image img[data-v-42216dd2] {\n  width: 100%;\n  height: 100%;\n}\n.contact-body .contact-item a[data-v-42216dd2] {\n  font-size: 13px;\n  color: #666;\n  overflow: hidden;\n  padding: 10px 7px;\n  border-bottom: 1px solid #ededed;\n  display: block;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-left: 2px solid #fff;\n}\n.contact-body .contact-item a[data-v-42216dd2]:hover,\n.contact-body .contact-item a.active[data-v-42216dd2] {\n  background: #fafafa;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-left: 2px solid #00c569;\n}\n.contact-body .contact-item:last-of-type a[data-v-42216dd2] {\n  border-bottom: none;\n}\n.contact-body .contact-item span.contact-name[data-v-42216dd2] {\n  float: right;\n  position: relative;\n  font-size: 14px;\n  max-width: calc(100% - 85px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: right;\n  font-weight: 500;\n}\n.contact-body .contact-item span.contact-last-message[data-v-42216dd2] {\n  float: right;\n  width: calc(100% - 60px);\n  font-weight: lighter;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n  text-align: right;\n}\n.contact-body .contact-item .contact-date[data-v-42216dd2] {\n  float: left;\n  padding-top: 5px;\n  width: 50px;\n  direction: ltr;\n  text-align: center;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2],\n.contact-body .contact-item .my-channel-name-wraopper[data-v-42216dd2] {\n  float: right;\n  padding-top: 6px;\n  direction: ltr;\n  text-align: left;\n  width: calc(100% - 45px);\n  padding-right: 15px;\n}\n.contact-body .contact-item .my-channel-name-wraopper[data-v-42216dd2] {\n  padding-top: 15px;\n}\n.contact-body .contact-item .my-channel-name-wraopper .icon-wrapper[data-v-42216dd2] {\n  font-size: 16px;\n  color: #999;\n  float: left;\n  margin-left: 15px;\n}\n.last-message-date[data-v-42216dd2] {\n  display: inline-block;\n  height: 17px;\n  width: 70px;\n  font-size: 12px;\n  line-height: 2;\n  text-align: center;\n}\n.count-number[data-v-42216dd2] {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  background: #00c569;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 10px;\n  line-height: 2;\n}\n.count-number-wrapper[data-v-42216dd2] {\n  width: 60px;\n  float: left;\n  text-align: center;\n}\n.empty-list[data-v-42216dd2] {\n  text-align: center;\n  padding: 10px 15px 0;\n}\n.empty-list p[data-v-42216dd2] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #777;\n}\n.empty-list i[data-v-42216dd2] {\n  margin: 5px;\n}\n.load-more[data-v-42216dd2] {\n  margin: 0px 0 0;\n  display: inline-block;\n  background: #00c569;\n  color: #fff;\n  padding: 10px 25px;\n  border-radius: 0px;\n  text-align: center;\n  font-size: 15px;\n  font-weight: bold;\n  border: none;\n  width: 100%;\n}\n.verified-user[data-v-42216dd2] {\n  line-height: 1;\n  font-size: 15px;\n  position: relative;\n  right: 3px;\n  top: -2px;\n  float: right;\n}\n.verified-user[data-v-42216dd2]::before {\n  top: 4px;\n  left: 3px;\n  font-size: 9px;\n}\n.contacts-switch-buttons-wrapper[data-v-42216dd2] {\n  float: right;\n  width: 100%;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-42216dd2] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-42216dd2] {\n  border: none;\n  width: 100%;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  color: #666;\n  background: #f0f0f0;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-42216dd2] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-42216dd2],\n.contacts-switch-buttons-wrapper .contact-button[data-v-42216dd2]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\ni.fa-star[data-v-42216dd2] {\n  font-size: 16px;\n  background: linear-gradient(\n    21deg,\n    rgb(199, 168, 79) 0%,\n    rgb(249, 242, 159) 51%,\n    rgb(199, 168, 79) 100%\n  );\n  background-clip: border-box;\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  position: relative;\n  top: 2px;\n}\n.contact-button.active[data-v-42216dd2] {\n  border-radius: 4px 4px 0 0;\n}\n.buyad-lists-wrapper .contact-item > button[data-v-42216dd2] {\n  background: #fff;\n  border: none;\n  border-bottom: 2px solid #dddddd;\n  padding: 0;\n  text-align: center;\n}\n.buyad-expier[data-v-42216dd2] {\n  color: #556080;\n}\n.buyad-notice[data-v-42216dd2] {\n  color: #aeaeae;\n}\n.request-contact-image[data-v-42216dd2] {\n  width: 30px;\n  height: 30px;\n  float: right;\n}\n.buyad-info[data-v-42216dd2] {\n  font-size: 15px;\n  padding: 5px 0;\n  font-weight: bold;\n  color: #777;\n}\n.buyad-info span[data-v-42216dd2] {\n  color: #556080;\n}\n.buyad-header[data-v-42216dd2] {\n  padding: 8px 5px;\n  float: right;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2] {\n  float: right;\n  padding-top: 2px;\n  direction: ltr;\n  text-align: left;\n  width: calc(100% - 45px);\n  padding-right: 8px;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2]:last-of-type {\n  padding-top: 6px;\n}\n.empty-list i[data-v-42216dd2] {\n  color: #777;\n  margin-top: 50px;\n  font-size: 50px;\n  text-align: center;\n  margin-bottom: 10px;\n  display: block;\n}\n.empty-list p[data-v-42216dd2]:first-of-type {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.618;\n  margin-top: 11px;\n}\n.user-button[data-v-42216dd2] {\n  background: #00c569;\n  color: #fff;\n  border-radius: 4px;\n  padding: 8px 0;\n  max-width: 200px;\n  margin: 15px auto;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  display: block;\n  border: none;\n  width: 100%;\n  font-size: 17px;\n  font-weight: bold;\n}\n.user-button[data-v-42216dd2] :hover {\n  /* background: #00c569; */\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.user-not-fount[data-v-42216dd2] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n  padding-top: 60px;\n}\n.user-not-fount img[data-v-42216dd2] {\n  width: 200px;\n  display: block;\n  margin: 60px auto 20px;\n}\n.user-not-fount p[data-v-42216dd2] {\n  font-weight: 500;\n}\n@media screen and (max-width: 991px) {\n.contact-items[data-v-42216dd2] {\n    padding-bottom: 42px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contact-body my-contacts" }, [
    _c("div", { staticClass: "contact-search" }, [
      _c("div", { staticClass: "contact-search-input-wrapper" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.$parent.contactNameSearchText,
              expression: "$parent.contactNameSearchText"
            }
          ],
          attrs: { type: "text", placeholder: "جستجو پیام" },
          domProps: { value: _vm.$parent.contactNameSearchText },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(
                _vm.$parent,
                "contactNameSearchText",
                $event.target.value
              )
            }
          }
        }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-search" }),
        _vm._v(" "),
        _vm.$parent.contactNameSearchText
          ? _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.$parent.contactNameSearchText = ""
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-times" })]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.$parent.userType
        ? _c("div", { staticClass: "contacts-switch-buttons-wrapper" }, [
            _c(
              "div",
              { staticClass: "switch-button-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "contact-button",
                    attrs: {
                      to: { name: "messagesRequestSeller" },
                      tag: "button"
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-star" }),
                    _vm._v("\n\n          خریداران پیشنهادی\n        ")
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0)
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.$parent.contactList.length === 0
      ? _c("div", { staticClass: "not-found-item" }, [
          !_vm.$parent.contactNameSearchText && !_vm.$parent.isContactListLoaded
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
            : _vm.$parent.contactNameSearchText &&
              !_vm.$parent.isSearchingContact
            ? _c("div", [_vm._m(1)])
            : _vm.$parent.isSearchingContact
            ? _c("div", { staticClass: "contact-is-search" }, [_vm._m(2)])
            : _vm.$parent.isContactListLoaded
            ? _c(
                "div",
                {
                  staticClass: "contact-items",
                  class: { "is-buyer-list": !_vm.$parent.userType }
                },
                [
                  _c("ul", [
                    _c("li", { staticClass: "contact-item" }, [
                      _c(
                        "a",
                        {
                          class: {
                            active: _vm.$parent.isChanleActive
                          },
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.$parent.openChannel()
                            }
                          }
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _vm.$parent.channelInfo.unread_contents == 0
                            ? _c(
                                "div",
                                { staticClass: "my-channel-name-wraopper" },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "contact-name text-rtl" },
                                    [_vm._v(" کانال رسمی باسکول ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "verified-user",
                                      attrs: {
                                        "data-container": "body",
                                        "data-toggle": "popover",
                                        "data-placement": "bottom",
                                        "data-content":
                                          _vm.$parent.verifiedUserContent,
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-certificate"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(4)
                                ]
                              )
                            : _c(
                                "div",
                                { staticClass: "my-contact-info-wrapper" },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "contact-name text-rtl" },
                                    [_vm._v(" کانال رسمی باسکول ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "verified-user",
                                      attrs: {
                                        "data-container": "body",
                                        "data-toggle": "popover",
                                        "data-placement": "bottom",
                                        "data-content":
                                          _vm.$parent.verifiedUserContent,
                                        title: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-certificate"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "last-message-date" },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(
                                            _vm._f("moment")(
                                              _vm.$parent.channelInfo
                                                .last_content_date,
                                              "jYYYY/jMM/jDD"
                                            )
                                          ) +
                                          "\n              "
                                      )
                                    ]
                                  )
                                ]
                              ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "my-contact-info-wrapper" },
                            [
                              _c("span", {
                                staticClass: "contact-last-message",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$parent.channelInfo.last_content_title
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "count-number-wrapper" },
                                [
                                  _vm.$parent.channelInfo.unread_contents !== 0
                                    ? _c("p", {
                                        staticClass: "count-number",
                                        domProps: {
                                          textContent: _vm._s(
                                            _vm.$parent.channelInfo
                                              .unread_contents
                                          )
                                        }
                                      })
                                    : _vm._e()
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "div",
                        { staticClass: "empty-list" },
                        [
                          _c("i", { staticClass: "fa fa-user" }),
                          _vm._v(" "),
                          _c("p", [_vm._v("در حال حاضر پیامی وجود ندارد")]),
                          _vm._v(" "),
                          _vm.$parent.userType
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "user-button",
                                  attrs: {
                                    to: { name: "buyAdRequestsSeller" },
                                    tag: "button"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              شروع چت با خریداران\n            "
                                  )
                                ]
                              )
                            : _c(
                                "router-link",
                                {
                                  staticClass: "user-button",
                                  attrs: {
                                    to: { name: "productList" },
                                    tag: "button"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              شروع چت با فروشندگان\n            "
                                  )
                                ]
                              )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            : _vm._e()
        ])
      : _c(
          "div",
          {
            staticClass: "contact-items",
            class: { "is-buyer-list": !_vm.$parent.userType }
          },
          [
            _c(
              "ul",
              [
                _c("li", { staticClass: "contact-item" }, [
                  _c(
                    "a",
                    {
                      class: {
                        active: _vm.$parent.isChanleActive
                      },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.$parent.openChannel()
                        }
                      }
                    },
                    [
                      _vm._m(5),
                      _vm._v(" "),
                      _vm.$parent.channelInfo.unread_contents == 0
                        ? _c(
                            "div",
                            { staticClass: "my-channel-name-wraopper" },
                            [
                              _c(
                                "span",
                                { staticClass: "contact-name text-rtl" },
                                [_vm._v(" کانال رسمی باسکول ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "verified-user",
                                  attrs: {
                                    "data-container": "body",
                                    "data-toggle": "popover",
                                    "data-placement": "bottom",
                                    "data-content":
                                      _vm.$parent.verifiedUserContent,
                                    title: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-certificate" })]
                              ),
                              _vm._v(" "),
                              _vm._m(6)
                            ]
                          )
                        : _c(
                            "div",
                            { staticClass: "my-contact-info-wrapper" },
                            [
                              _c(
                                "span",
                                { staticClass: "contact-name text-rtl" },
                                [_vm._v(" کانال رسمی باسکول ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "verified-user",
                                  attrs: {
                                    "data-container": "body",
                                    "data-toggle": "popover",
                                    "data-placement": "bottom",
                                    "data-content":
                                      _vm.$parent.verifiedUserContent,
                                    title: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-certificate" })]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "last-message-date" }, [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        _vm.$parent.channelInfo
                                          .last_content_date,
                                        "jYYYY/jMM/jDD"
                                      )
                                    ) +
                                    "\n            "
                                )
                              ])
                            ]
                          ),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-contact-info-wrapper" }, [
                        _c("span", {
                          staticClass: "contact-last-message",
                          domProps: {
                            textContent: _vm._s(
                              _vm.$parent.channelInfo.last_content_title
                            )
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "count-number-wrapper" }, [
                          _vm.$parent.channelInfo.unread_contents !== 0
                            ? _c("p", {
                                staticClass: "count-number",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$parent.channelInfo.unread_contents
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.$parent.contactList, function(contact, index) {
                  return _c("li", { key: index, staticClass: "contact-item" }, [
                    _c(
                      "a",
                      {
                        class: {
                          active:
                            _vm.$parent.selectedContact.contact_id ==
                              contact.contact_id && !_vm.$parent.isChanleActive
                        },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$parent.loadChatHistory(contact, index, false)
                          }
                        }
                      },
                      [
                        contact.profile_photo
                          ? _c("div", {
                              staticClass: "contact-image",
                              style: {
                                backgroundImage:
                                  "url(" +
                                  _vm.$parent.str +
                                  "/" +
                                  contact.profile_photo +
                                  ")"
                              }
                            })
                          : _c("div", {
                              staticClass: "contact-image",
                              style: {
                                backgroundImage:
                                  "url(" +
                                  _vm.$parent.assets +
                                  "assets/img/user-defult.png" +
                                  ")"
                              }
                            }),
                        _vm._v(" "),
                        _c("div", { staticClass: "my-contact-info-wrapper" }, [
                          _c("span", { staticClass: "contact-name text-rtl" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  contact.first_name + " " + contact.last_name
                                ) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          contact.is_verified
                            ? _c(
                                "button",
                                {
                                  staticClass: "verified-user",
                                  attrs: {
                                    "data-container": "body",
                                    "data-toggle": "popover",
                                    "data-placement": "bottom",
                                    "data-content":
                                      _vm.$parent.verifiedUserContent,
                                    title: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-certificate" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", { staticClass: "last-message-date" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm._f("moment")(
                                    contact.last_msg_time_date,
                                    "jYYYY/jMM/jDD"
                                  )
                                ) +
                                "\n            "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "my-contact-info-wrapper" }, [
                          _c("span", {
                            staticClass: "contact-last-message",
                            domProps: {
                              textContent: _vm._s(
                                contact.last_msg.last_msg_text
                              )
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "count-number-wrapper" }, [
                            contact.unread_msgs_count !== 0
                              ? _c("p", {
                                  staticClass: "count-number",
                                  domProps: {
                                    textContent: _vm._s(
                                      contact.unread_msgs_count
                                    )
                                  }
                                })
                              : _vm._e()
                          ])
                        ])
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _vm.$parent.showLoadMoreBtn &&
                !_vm.$parent.contactNameSearchText
                  ? _c("li", { staticClass: "contact-item" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn load-more",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.$parent.loadMoreContacts()
                            }
                          }
                        },
                        [_vm._v("\n          ادامه پیام ها\n        ")]
                      )
                    ])
                  : _vm._e()
              ],
              2
            )
          ]
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "switch-button-item" }, [
      _c("button", { staticClass: "contact-button active" }, [
        _c("i", { staticClass: "fas fa-comment-alt" }),
        _vm._v("\n          پیام ها\n        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "user-not-fount" }, [
      _c("img", {
        attrs: { src: __webpack_require__(295), alt: "" }
      }),
      _vm._v(" "),
      _c("span", [_vm._v("پیام یافت نشد")])
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
    return _c("div", { staticClass: "channel-image" }, [
      _c("img", {
        attrs: { src: __webpack_require__(238) }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-bullhorn" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "channel-image" }, [
      _c("img", {
        attrs: { src: __webpack_require__(238) }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-bullhorn" })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-42216dd2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_chat_review_vue__ = __webpack_require__(268);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c3786fc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_review_vue__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(316)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c3786fc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_chat_review_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c3786fc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_review_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c3786fc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_review_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/review-component/chat-review.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c3786fc", Component.options)
  } else {
    hotAPI.reload("data-v-6c3786fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("e458081c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6c3786fc\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-review.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6c3786fc\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-review.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n/* Track */\n[data-v-6c3786fc]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n.user-image[data-v-6c3786fc] {\n  width: 90px;\n  height: 90px;\n  margin: 0 auto;\n  border-radius: 45px;\n  overflow: hidden;\n}\n.user-name[data-v-6c3786fc] {\n  text-align: center;\n  font-size: 18px;\n  color: #474747;\n  line-height: 1.618;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.main-text p[data-v-6c3786fc] {\n  font-size: 15px;\n  color: #777;\n  text-align: right;\n  margin: 15px auto 0;\n}\n.main-text > p[data-v-6c3786fc] {\n  font-weight: 800;\n  font-size: 15px;\n  color: #777;\n  text-align: center;\n  margin: 15px auto 0;\n  line-height: 1.618;\n}\n.main-text[data-v-6c3786fc] {\n  text-align: center;\n  margin: 0 0 20px;\n}\n\n/* rate styles */\n.rate[data-v-6c3786fc] {\n  padding: 0px;\n\n  margin: 0 auto;\n\n  overflow: hidden;\n\n  width: 260px;\n  height: 60px;\n}\n.rate:not(:checked) > input[data-v-6c3786fc] {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n  /* top: -9999px; */\n}\n.rate:not(:checked) > label[data-v-6c3786fc] {\n  float: left;\n\n  width: 45px;\n\n  overflow: hidden;\n\n  white-space: nowrap;\n\n  cursor: pointer;\n\n  font-size: 41px;\n\n  color: #ccc;\n\n  text-align: center;\n\n  height: 46px;\n\n  margin-left: 8px;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:first-of-type {\n  margin-left: 0;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:before {\n  content: \"\\F005\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n}\n.rate > input:checked ~ label[data-v-6c3786fc] {\n  color: #ffbb00;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:hover,\n.rate:not(:checked) > label:hover ~ label[data-v-6c3786fc] {\n  color: #fbca1e;\n}\n.rate > input:checked + label[data-v-6c3786fc]:hover,\n.rate > input:checked + label:hover ~ label[data-v-6c3786fc],\n.rate > label:hover ~ input:checked ~ label[data-v-6c3786fc] {\n  color: #fbca1e;\n}\n.rate label[data-v-6c3786fc]::after {\n  position: relative;\n\n  color: #777;\n\n  font-size: 20px;\n\n  top: -35px;\n\n  width: 100%;\n\n  text-align: center;\n\n  display: block;\n}\n#lable-star5[data-v-6c3786fc]::after {\n  content: \"5\";\n}\n#lable-star4[data-v-6c3786fc]::after {\n  content: \"4\";\n}\n#lable-star3[data-v-6c3786fc]::after {\n  content: \"3\";\n}\n#lable-star2[data-v-6c3786fc]::after {\n  content: \"2\";\n}\n#lable-star1[data-v-6c3786fc]::after {\n  content: \"1\";\n}\n.form-wrapper[data-v-6c3786fc] {\n  padding: 0 10px;\n}\n.chat-report-form-wrapper[data-v-6c3786fc] {\n  direction: rtl;\n\n  overflow: hidden;\n}\n.chat-report-form-wrapper textarea[data-v-6c3786fc] {\n  max-width: 600px;\n\n  margin: 15px auto 0px;\n\n  height: 110px;\n\n  max-height: 170px;\n\n  border-radius: 5px;\n\n  background: #fff;\n}\n.report-button-wrapper .green .review-button i[data-v-6c3786fc] {\n  color: #ffbb00;\n}\n\n/* end rate styles  */\n.error-input[data-v-6c3786fc] {\n  border: 1px solid #e41c39;\n}\n.main-text p.error-text[data-v-6c3786fc] {\n  font-size: 14px;\n  font-weight: 400;\n  height: 15px;\n  margin-top: 10px;\n}\n.btn-disable[data-v-6c3786fc] {\n  background: #dbdbdb;\n}\n.hint-reviews[data-v-6c3786fc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  max-width: 272px;\n  margin: 0 auto;\n  direction: rtl;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  font-size: 13px;\n  color: #bebebe;\n  padding-right: 7px;\n  font-weight: 500;\n}\n@media screen and (max-width: 1366px) {\n.rate[data-v-6c3786fc] {\n    width: 217px;\n}\n.rate:not(:checked) > label[data-v-6c3786fc] {\n    width: 40px;\n    font-size: 35px;\n    height: 44px;\n    margin-left: 4px;\n}\n.rate label[data-v-6c3786fc]::after {\n    font-size: 17px;\n    top: -30px;\n}\n.hint-reviews[data-v-6c3786fc] {\n    max-width: 233px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "rate-score-wrapper row" }, [
    _c("div", { staticClass: "main-text" }, [
      _c("p", [_vm._v("به این کاربر از 1 تا 5 امتیاز دهید")]),
      _vm._v(" "),
      _c("div", { staticClass: "rate" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar5", name: "rate", value: "5" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "5") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "5")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star5", for: "chatStar5", title: "5" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar4", name: "rate", value: "4" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "4") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "4")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star4", for: "chatStar4", title: "4" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar3", name: "rate", value: "3" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "3") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "3")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star3", for: "chatStar3", title: "3" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar2", name: "rate", value: "2" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "2") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "2")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star2", for: "chatStar2", title: "2" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar1", name: "rate", value: "1" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "1") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "1")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star1", for: "chatStar1", title: "1" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "chat-report-form-wrapper" }, [
        _c(
          "div",
          {
            staticClass: "form-wrapper collapse",
            attrs: { id: "chat-report-form" }
          },
          [
            _c("p", [
              _vm._v("\n          نظر خود را درباره\n          "),
              _vm.userFullName
                ? _c("span", {
                    staticClass: "light-green-text",
                    domProps: { textContent: _vm._s(_vm.userFullName) }
                  })
                : _c("span", { staticClass: "light-green-text" }, [
                    _vm._v("این کاربر")
                  ]),
              _vm._v("\n          اینجا بنویسید\n        ")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.reviewData.reviewText,
                  expression: "reviewData.reviewText"
                }
              ],
              class: { "error-input": _vm.errors.reviewText },
              attrs: {
                placeholder:
                  "نظرتان درباره این کاربر را با بقیه به اشتراک بگذارید..."
              },
              domProps: { value: _vm.reviewData.reviewText },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.reviewData, "reviewText", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "red-text error-text" }, [
          _vm.errors.reviewText || _vm.errors.reviewData
            ? _c("span", {
                domProps: {
                  textContent: _vm._s(
                    _vm.errors.reviewText || _vm.errors.reviewData
                  )
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "report-button-wrapper" }, [
          _c(
            "button",
            {
              staticClass: "green-button register-report hover-effect",
              class: {
                "btn-disable":
                  _vm.errors.reviewText ||
                  _vm.errors.reviewData ||
                  (!_vm.reviewData.reviewText && !_vm.reviewData.rate) ||
                  _vm.submitLoader
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.submitReview()
                }
              }
            },
            [_vm._v("\n          ثبت نظر\n        ")]
          )
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
    return _c("div", { staticClass: "hint-reviews" }, [
      _c("span", [_vm._v("خیلی خوب")]),
      _vm._v(" "),
      _c("span", [_vm._v("خیلی بد")])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c3786fc", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_success_submit_chat_review_vue__ = __webpack_require__(269);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d1f163d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_success_submit_chat_review_vue__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(320)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d1f163d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_success_submit_chat_review_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d1f163d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_success_submit_chat_review_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d1f163d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_success_submit_chat_review_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/review-component/success-submit-chat-review.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d1f163d", Component.options)
  } else {
    hotAPI.reload("data-v-4d1f163d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("a07bc07a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4d1f163d\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./success-submit-chat-review.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4d1f163d\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./success-submit-chat-review.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.main-text[data-v-4d1f163d] {\n  text-align: center;\n  margin: 20px 0 40px;\n}\n.main-text p[data-v-4d1f163d] {\n  font-weight: 800;\n  font-size: 16px;\n  color: #474747;\n  text-align: center;\n  margin: 15px auto;\n  padding: 0 30px;\n  line-height: 1.618;\n}\n.success-icon i[data-v-4d1f163d] {\n  display: inline-block;\n\n  font-size: 55px;\n\n  color: #00c569;\n\n  border: 1px solid;\n\n  border-radius: 50px;\n\n  width: 90px;\n\n  height: 90px;\n\n  padding-top: 18px;\n}\n@media screen and (max-width: 768px) {\n.success-icon[data-v-4d1f163d] {\n    margin-top: 80px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "main-text" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("p", { domProps: { textContent: _vm._s(_vm.$parent.successMessage) } })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "success-icon" }, [
      _c("i", { staticClass: "fa fa-check" })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d1f163d", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_push_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_components_main_channel_wrapper__ = __webpack_require__(610);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["isRequiredFixAlert", "userType", "currentUser", "str", "assets"],
  components: {
    myContactList: __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list__["default"],
    chatUserInfo: __WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info__["a" /* default */],
    MainChatWrapper: __WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper__["a" /* default */],
    MainChannelWrapper: __WEBPACK_IMPORTED_MODULE_5__messages_components_main_channel_wrapper__["a" /* default */]
  },
  data: function data() {
    return {
      isImageLoad: false,
      isImageOpened: false,
      chatMessagesLoader: true,
      isFirstMessageLoading: false,
      selectedIndex: -1,
      items: [{
        message: "پیام ها",
        url: "messages"
      }],
      isSearchingContact: false,
      contactList: [],
      channelInfo: {
        unread_contents: 0,
        last_content_title: "",
        last_content_date: ""
      },
      chatMessages: "",
      isNoticeActive: true,
      isLikeBoxActive: true,
      isLatestMessage: false,
      isGuideActive: false,
      selectedContact: "",
      currentUserId: "",
      currentContactUserId: "",
      msgToSend: "",
      isComponentActive: true,
      contactNameSearchText: "",
      isContactListLoaded: false,
      isCurrentStep: 0,
      fromContact: 0,
      toContact: 15,
      contactsCountInEachLoad: 20,
      showLoadMoreBtn: false,
      verifiedUserContent: this.$parent.verifiedUserContent,
      isCurrentUserVerified: false,
      isChatUpdate: true,
      userDataLoader: true,
      isChanleActive: false,
      userAllowedReview: false,
      isReviewSubmited: false,
      reviewSubmitLoader: false,
      totalChatCount: "",
      initialLoadChatCount: 30,
      LoadChatCount: "",
      delsaInfo: true
    };
  },

  methods: {
    init: function init() {
      this.loadContactList();
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

      axios.post("/get_contact_list", {
        from: self.fromContact,
        to: self.toContact
      }).then(function (response) {
        self.contactList = response.data.contact_list;
        self.channelInfo = response.data.channel_info;
        self.currentUserId = response.data.user_id;
        self.isCurrentUserVerified = response.data.is_verified;
        self.isContactListLoaded = true;

        if (self.contactList.length >= self.toContact) {
          self.showLoadMoreBtn = true;
        } else {
          self.showLoadMoreBtn = false;
        }
      }).catch(function (e) {
        //
      });
    },
    loadMoreContacts: function loadMoreContacts() {
      this.toContact = this.toContact + this.contactsCountInEachLoad;

      this.loadContactList();
    },
    openChannel: function openChannel() {
      this.channelInfo.unread_contents = 0;
      this.channelInfo.last_content_title = "";
      this.channelInfo.last_content_date = "";
      this.handleBackBtnClickOnDevices();
      this.isChanleActive = true;

      this.registerComponentStatistics("messenger", "openChannel", "clickOnChannel");
    },

    loadChatHistory: function loadChatHistory(contact, index, isUpdate) {
      this.isChanleActive = false;
      if (!isUpdate) {
        this.selectedContact = "";
        this.selectedContact = contact;
        this.chatMessages = "";
        this.userDataLoader = true;
      }
      var self = this;

      // enable loader for user info component

      self.isChatLoadeMore = false;
      self.handleBackBtnClickOnDevices();
      self.chatMessagesLoader = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;
      this.setUserGuideCookie();

      this.currentContactUserId = contact.contact_id;

      axios.post("/get_user_chat_history", {
        user_id: contact.contact_id,
        from: 0,
        to: this.initialLoadChatCount
      }).then(function (response) {
        self.isNoticeActive = true;
        var data = response.data.messages.reverse();
        self.totalChatCount = response.data.total_count;
        // convert to time to new design

        // let itemDate = "";
        // data = data.map((item) => {
        //   let date = item.created_at.substr(0, 10);
        //   item.isDateShow = true;
        //   if (itemDate == date) {
        //     item.isDateShow = false;
        //   }
        //   itemDate = date;
        //   return item;
        // });

        self.chatMessages = data;
        if (!self.chatMessages.length) {
          self.isNoticeActive = false;
        }
        self.userHasNotice();
        self.currentUserId = response.data.current_user_id;
        self.isLatestMessage = self.lastMessageMins(10, data[data.length - 1].created_at);
        self.chatMessagesLoader = false;
        self.$nextTick(function () {
          self.scrollToEnd(0);
        });
      }).catch(function (e) {
        //
      });

      var index = this.searchForObjectIndexInArray(contact.contact_id, this.contactList);

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("messageCount", -1 * contact.unread_msgs_count);

      contact.unread_msgs_count = 0;

      this.contactList.splice(index, 1, contact);
    },
    getMoreChat: function getMoreChat(position) {
      var _this = this;

      var contact = this.selectedContact;
      var tempCount = this.LoadChatCount + this.initialLoadChatCount;
      var chatWrapper = $("#chat-list");

      if (this.totalChatCount > this.chatMessages.length) {
        this.chatMessagesLoader = true;

        axios.post("/get_user_chat_history", {
          user_id: contact.contact_id,
          from: this.LoadChatCount,
          to: tempCount
        }).then(function (response) {
          var _chatMessages;

          _this.LoadChatCount = tempCount;
          var data = response.data.messages.reverse();
          (_chatMessages = _this.chatMessages).unshift.apply(_chatMessages, _toConsumableArray(data));

          _this.$nextTick(function () {
            chatWrapper.scrollTop(chatWrapper[0].scrollHeight - position.totalHeight);
            _this.chatMessagesLoader = false;
          });
        });
      }
    },
    cookieHasUser: function cookieHasUser(userId) {
      return userId == this.selectedContact.contact_id;
    },
    setUserGuideCookie: function setUserGuideCookie() {
      var contactUserId = this.selectedContact.contact_id;
      var cookie = this.getCookie("userGuideData");

      if (cookie) {
        var getAllGuidDataCookies = JSON.parse(cookie).userSelected;
        if (!getAllGuidDataCookies.find(this.cookieHasUser)) {
          getAllGuidDataCookies.push(contactUserId);
          this.createCookie("userGuideData", JSON.stringify({ userSelected: getAllGuidDataCookies }), 5400 * 365 // 2400 * 365 this time may 5 years
          );
          if (getAllGuidDataCookies.length > 20) {
            this.isGuideActive = false;
          } else {
            this.isGuideActive = true;
          }
        } else {
          this.isGuideActive = false;
        }
      } else {
        this.createCookie("userGuideData", JSON.stringify({ userSelected: [contactUserId] }), 5400 * 365 // 2400 * 365 this time may 2 years
        );
        this.isGuideActive = true;
      }
      if (this.isGuideActive == true) {
        $(".overlay-bg-guide").css("display", "block");
        setTimeout(function () {
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    },
    setNoticeCookie: function setNoticeCookie() {
      var contactUserId = this.selectedContact.contact_id;
      var cookie = this.getCookie("messengerNoticeData");
      if (cookie) {
        var getAllCookies = JSON.parse(cookie).userNoticeCloed;
        if (!getAllCookies.find(this.cookieHasUser)) {
          getAllCookies.push(contactUserId);
          this.createCookie("messengerNoticeData", JSON.stringify({ userNoticeCloed: getAllCookies }), 1000);
        }
      } else {
        this.createCookie("messengerNoticeData", JSON.stringify({ userNoticeCloed: [contactUserId] }), 1000);
      }
      this.isNoticeActive = false;
    },
    setLikeBoxCookie: function setLikeBoxCookie() {
      var contactUserId = this.selectedContact.contact_id;
      var cookie = this.getCookie("closeLikeBox");
      if (cookie) {
        var getAllCookies = JSON.parse(cookie).userCloseLikeBox;
        if (!getAllCookies.find(this.cookieHasUser)) {
          getAllCookies.push(contactUserId);
          this.createCookie("closeLikeBox", JSON.stringify({ userCloseLikeBox: getAllCookies }), 60 * 24);
        }
      } else {
        this.createCookie("closeLikeBox", JSON.stringify({ userCloseLikeBox: [contactUserId] }), 60 * 24);
      }
      this.isLikeBoxActive = false;
    },
    userHasLikeBox: function userHasLikeBox() {
      var cookie = this.getCookie("closeLikeBox");
      if (cookie) {
        var getAlCookies = JSON.parse(cookie).userCloseLikeBox;
        if (getAlCookies.find(this.cookieHasUser)) {
          this.isLikeBoxActive = false;
        }
      }
    },
    userHasNotice: function userHasNotice() {
      var cookie = this.getCookie("messengerNoticeData");
      if (cookie) {
        var getAlCookies = JSON.parse(cookie).userNoticeCloed;
        if (getAlCookies.find(this.cookieHasUser)) {
          this.isNoticeActive = false;
        }
      }
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
    },
    getCookie: function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    checkCookie: function checkCookie() {
      if (this.active_pakage_type == 3 || this.getCookie("closeSellerFixModal") == "false" || this.checkPricingRoute()) {
        this.isRequiredFixAlert = false;
      } else {
        this.isRequiredFixAlert = true;
      }
    },
    appendMessageToChatHistory: function appendMessageToChatHistory(contact) {
      var self = this;
      self.isLatestMessage = true;

      self.chatMessagesLoader = false;
      this.selectedContact = contact;
      this.currentContactUserId = contact.contact_id;

      axios.post("/get_user_chat_history", {
        user_id: contact.contact_id
      }).then(function (response) {
        self.chatMessages = response.data.messages;
        self.isLatestMessage = self.lastMessageMins(10, self.chatMessages[self.chatMessages.length - 1].created_at);

        self.currentUserId = response.data.current_user_id;
        self.scrollToEnd(0);
      }).catch(function (e) {
        //
      });
    },
    scrollToEnd: function scrollToEnd(time) {
      var chatPageElementList = $(".chat-page ul");
      var self = this;
      setTimeout(function () {
        chatPageElementList.animate({ scrollTop: chatPageElementList.prop("scrollHeight") }, 0, "swing", function () {
          self.chatMessagesLoader = false;
        });
      }, time);
    },
    sendMessage: function sendMessage() {
      var self = this;
      var tempMsg = self.msgToSend;
      self.msgToSend = "";

      if (tempMsg) {
        self.isLatestMessage = true;
        var msgObject = {
          sender_id: self.currentUserId,
          receiver_id: self.currentContactUserId,
          text: tempMsg
        };

        self.chatMessages.push(msgObject);

        self.scrollToEnd(0);

        axios.post("/messanger/send_message", msgObject).then(function (response) {
          self.isFirstMessageLoading = false;
          self.loadChatHistory(self.selectedContact, -10, true);
        }).catch(function (e) {
          //
        });
      }
    },
    keepChatUpdated: function keepChatUpdated(contact) {
      var self = this;
      setTimeout(function () {
        self.loadChatHistory(contact, -10, true);
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
    handleBackKeys: function handleBackKeys() {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $(".modal").modal("hide");
      });
    },
    handleBackBtnClickOnDevices: function handleBackBtnClickOnDevices() {
      var self = this;
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        var delsaModal = $("#delsa-promotion-modal").hasClass("in");

        if (self.isDeviceMobile() && !delsaModal) {
          if (window.location.pathname == "/seller/messenger/contacts" || window.location.pathname == "/buyer/messenger/contacts") {
            if (!self.isImageOpened) {
              if (self.selectedContact) {
                self.selectedContact = "";
              } else if (self.isChanleActive) {
                self.isChanleActive = false;
              }
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
    sendTokenToServer: function sendTokenToServer(token) {
      axios.post("/fcm/register_token", {
        token: token
      }).then(function (response) {
        var token = response.data.token;

        window.localStorage.setItem("storedToken", token);
      });
    },
    goToGroupList: function goToGroupList() {
      this.$router.push("group-messages");
      this.$parent.groupStep = 1;
    },
    activeReportModal: function activeReportModal(reportedUserId) {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("reoprtModal", reportedUserId);
    },
    activeReviewModal: function activeReviewModal() {
      var userImage = "";

      var selectedUserData = {
        id: this.selectedContact.contact_id,
        name: this.selectedContact.first_name + " " + this.selectedContact.last_name
      };

      if (this.selectedContact.profile_photo) {
        userImage = this.str + "/" + this.selectedContact.profile_photo;
        selectedUserData.img = userImage;
      }

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("reviewUserData", selectedUserData);
    },
    registerReview: function registerReview(reviewScore) {
      this.reviewSubmitLoader = true;

      var reviewObg = {
        user_id: this.selectedContact.contact_id,
        rating_score: reviewScore
      };

      var self = this;

      axios.post("/profile/add-comment", reviewObg).then(function (response) {
        self.reviewSubmitLoader = false;
        if (response.data.status == true) {
          self.isReviewSubmited = true;

          setTimeout(function () {
            if (self.isReviewSubmited) {
              $(".mobile-like-user").fadeOut();
              setTimeout(function () {
                self.userAllowedReview = false;
              }, 1500);
            }
          }, 3000);
        }
      });
    },
    activeChanel: function activeChanel() {
      // this.isChanleActive = true
    },
    lastMessageMins: function lastMessageMins(mins, time) {
      var currentTime = new Date();
      var diffInMins = (currentTime - Date.parse(time)) / (1000 * 60);
      return diffInMins < mins;
    },
    openDelasModal: function openDelasModal() {
      var _this2 = this;

      $("#delsa-promotion-modal").modal("show");
      $("#delsa-promotion-modal").on("shown.bs.modal", function (e) {
        _this2.handleBackKeys();
      });
    }
  },

  mounted: function mounted() {
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);
  },

  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/messages" });

    var self = this;

    if (__WEBPACK_IMPORTED_MODULE_1_push_js___default.a.Permission.has() === false) {
      __WEBPACK_IMPORTED_MODULE_1_push_js___default.a.Permission.request(function () {}, function () {});
    }

    if (messaging) {
      messaging.requestPermission().then(function () {
        return messaging.getToken();
      }).then(function (currentToken) {
        var storedToken = window.localStorage.getItem("storedToken");

        if (storedToken != currentToken) {
          self.sendTokenToServer(currentToken);
        }
      }).catch(function (err) {
        // Happen if user deney permission
        console.log("Unable to get permission to notify.", err);
      });

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("contanctMessageReceived", function ($event) {
        if (self.selectedContact) {
          self.appendMessageToChatHistory(self.selectedContact);
        } else if (self.isComponentActive) {
          self.loadContactList();
        }
      });
    }
  },
  watch: {
    contactNameSearchText: function contactNameSearchText(value) {
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
        self.contactList = [];
        self.loadContactList();
      }
    },
    selectedContact: function selectedContact(value) {
      this.delsaInfo = true;
      // reset like message datas
      this.isReviewSubmited = false;
      this.userAllowedReview = false;
      this.isLikeBoxActive = true;
      this.LoadChatCount = this.initialLoadChatCount;

      // check like message active box
      this.userHasLikeBox();

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("activeContactId", value.contact_id);
    },
    isChanleActive: function isChanleActive(isChanel) {
      if (isChanel) {
        this.activeChanel();
      }
    },
    userAllowedReview: function userAllowedReview() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.scrollToEnd(0);
      });
    }
  },

  activated: function activated() {
    this.isComponentActive = true;
  },
  deactivated: function deactivated() {
    this.isComponentActive = false;
  },
  beforeDestroy: function beforeDestroy() {
    this.isComponentActive = false;
    this.selectedContact = "";
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("activeContactId", "");
  }
});

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_main_main_components_review_component_success_submit_chat_review__ = __webpack_require__(319);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["selectedContact"],
  components: {
    ChatReviewComponent: __WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review__["a" /* default */],
    SuccessReviewComponent: __WEBPACK_IMPORTED_MODULE_1__layouts_main_main_components_review_component_success_submit_chat_review__["a" /* default */]
  },
  data: function data() {
    return {
      userStatistics: "",
      reviewCurrentStep: 0,
      successMessage: "نظر شما با موفقیت ثبت شد"
    };
  },
  methods: {
    init: function init() {
      // if (!this.checkMobileWidth()) {
      this.isUserAuthorizedToPostComment();
      // }
    },
    checkMobileWidth: function checkMobileWidth() {
      if ($(window).width() <= 1199) {
        return true;
      } else {
        return false;
      }
    },

    isUserAuthorizedToPostComment: function isUserAuthorizedToPostComment() {
      var self = this;
      var userObg = {
        user_id: this.selectedContact.contact_id
      };
      axios.post("/profile/is-user-authorized-to-post-comment", userObg).then(function (response) {
        self.$parent.userAllowedReview = response.data.is_allowed;
        if (!self.checkMobileWidth()) {
          self.getUserData();
        }
      });
    },
    getUserData: function getUserData() {
      this.$parent.userDataLoader = true;
      this.reviewCurrentStep = 0;

      var self = this;
      axios.post("/get_user_statistics_by_user_name", {
        user_name: self.selectedContact.user_name
      }).then(function (statisticsResponse) {
        self.userStatistics = statisticsResponse.data.statistics;
        self.activeComponentTooltip();
        self.$parent.userDataLoader = false;
      }).catch(function (err) {
        //
      });
    },
    activeComponentTooltip: function activeComponentTooltip() {
      $(".verified-user").popover({ trigger: "manual", html: true, animation: false }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
          $(_this).popover("hide");
        });
      }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
          if (!$(".popover:hover").length) {
            $(_this).popover("hide");
          }
        }, 300);
      });
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    "$parent.selectedContact": function $parentSelectedContact(isItemActive) {
      if (isItemActive) {
        this.init();
      } else {
        this.$parent.userDataLoader = true;
      }
    },
    "$parent.userDataLoader": function $parentUserDataLoader(userDataLoader) {
      var _this2 = this;

      if (!userDataLoader) {
        setTimeout(function () {
          _this2.activeComponentTooltip();
        }, 50);
      }
    }
  }
});

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sweetalert_min_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sweetalert_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sweetalert_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_router__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isVoiceRecord: false,
      isChat: false,
      openProductLoader: false,
      editPriceLoader: false,
      isAlertActive: false
    };
  },

  methods: {
    infinityScroll: function infinityScroll() {
      var listWrapper = $("#chat-list");
      var scrollPosition = listWrapper.scrollTop();
      var totalHeight = listWrapper[0].scrollHeight;
      var position = {
        scrollPosition: scrollPosition,
        wrapperHeight: listWrapper.height() + 20,
        totalHeight: totalHeight
      };
      if (scrollPosition <= 150 && !this.$parent.chatMessagesLoader) {
        this.$parent.getMoreChat(position);
      }
    },


    init: function init() {
      this.userGuide();
      this.checkWalletBalance();
      this.hideCollapses();
      this.$parent.userHasNotice();
      this.$parent.userHasLikeBox();
    },
    showWallet: function showWallet() {
      $("#wallet-modal").modal("show");

      this.registerComponentStatistics("messenger", "wallet", "click-on-charge-wallet-btn");
    },
    checkWalletBalance: function checkWalletBalance() {
      if (this.$parent.userType) {
        var isCookieSet = this.$parent.getCookie("walletAlert");
        var userInfo = this.$parent.currentUser.user_info;
        if (!isCookieSet) {
          if (userInfo.active_pakage_type == 0 && userInfo.wallet_balance == 0) {
            this.isAlertActive = true;
          }
        }
      }
    },
    closeWalletAlert: function closeWalletAlert() {
      this.$parent.createCookie("walletAlert", JSON.stringify(true), 60 * 1 // 1 hour
      );
      this.isAlertActive = false;
    },

    hideCollapses: function hideCollapses() {
      $(document).on("click", function (e) {
        /* bootstrap collapse js adds "in" class to your collapsible element*/

        var user_menu_opened = $("#chat-menu-items").hasClass("in");

        if (!$(e.target).closest("#chat-menu-items").length && !$(e.target).is("#button-collapse-chat-menu") && user_menu_opened === true) {
          $("#chat-menu-items").collapse("toggle");
        }

        /* bootstrap collapse js adds "in" class to your collapsible element*/
      });
    },
    checkMessageName: function checkMessageName(index, prevIndex) {
      var isMessageName = false;

      if (this.$parent.chatMessages[prevIndex] && prevIndex >= 0) {
        if (this.$parent.chatMessages[index].sender_id != this.$parent.chatMessages[prevIndex].sender_id) {
          isMessageName = true;
        }
      } else {
        isMessageName = true;
      }

      return isMessageName;
    },
    checkMessageListClass: function checkMessageListClass(senderId) {
      var myMessage = false;
      if (this.$parent.selectedContact.is_verified == true) {
        this.$parent.isNoticeActive = false;
      }
      if (senderId == this.$parent.currentUserId) {
        this.$parent.isNoticeActive = false;
        myMessage = true;
      } else {
        myMessage = false;
      }
      return myMessage;
    },
    checkMobileWidth: function checkMobileWidth() {
      if ($(window).width() <= 1199) {
        return true;
      } else {
        return false;
      }
    },
    recordVoice: function recordVoice() {
      console.log("voice");
    },
    userGuide: function userGuide() {
      var _this = this;

      $(".overlay-bg-guide").on("click", function () {
        _this.$parent.setUserGuideCookie();
        $(".overlay-bg-guide").fadeOut("fast");
      });
      if (this.$parent.isGuideActive) {
        setTimeout(function () {
          _this.$parent.setUserGuideCookie();
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    },
    openProduct: function openProduct(productId) {
      var _this2 = this;

      this.registerComponentStatistics("messenger", "click-on-delsa-btn", "click-on-product-detail-btn-in-messenger");

      this.openProductLoader = true;
      var win = window.open("about:blank", "_blank");
      axios.post("/get_product_by_id", { product_id: productId }).then(function (response) {
        win.location.href = _this2.getProductUrl(response.data.product);
        _this2.openProductLoader = false;
      }).catch(function (err) {
        win.location.href = "/404";
        _this2.openProductLoader = false;
      });
    },
    getProductUrl: function getProductUrl(product) {
      return "/product-view/خرید-عمده-" + product.main.sub_category_name.replace(" ", "-") + "/" + product.main.category_name.replace(" ", "-") + "/" + product.main.id;
    },
    checkDelsaInfoBoxIsActive: function checkDelsaInfoBoxIsActive() {
      if (this.$parent.delsaInfo &&
      // this.$parent.chatMessages.length == 1 &&
      // this.$parent.chatMessages[0].p_id &&
      !this.$parent.isLatestMessage && this.$parent.currentUser.user_info.is_seller && this.$parent.currentUser.user_info.active_pakage_type == 0 && !this.$parent.chatMessagesLoader) {
        return true;
      } else {
        return false;
      }
    },
    checkReviewIsActive: function checkReviewIsActive() {
      var _this3 = this;

      var chatMessagePid = "";
      var isDelsaMessageActive = false;
      if (this.$parent.chatMessages) {
        chatMessagePid = this.$parent.chatMessages[0].p_id;
        if (chatMessagePid && this.$parent.chatMessages.length == 1) {
          isDelsaMessageActive = true;
        }
      }

      if (!isDelsaMessageActive && this.$parent.userAllowedReview && this.$parent.isLikeBoxActive && !this.$parent.isLatestMessage && !this.$parent.chatMessagesLoader) {
        if (this.$parent.chatMessages && this.$parent.chatMessages.length && this.$parent.chatMessages.filter(function (item) {
          return !_this3.checkMessageListClass(item.sender_id);
        }).some(function (item) {
          return !item.p_id && !item.phone_locked;
        })) {
          return true;
        } else {
          return false;
        }
        // return true;
      } else {
        return false;
      }
    },
    openEditPriceModal: function openEditPriceModal(productId) {
      var _this4 = this;

      this.editPriceLoader = true;

      axios.post("/get_product_by_id", { product_id: productId }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_1__router_router__["b" /* eventBus */].$emit("editProductData", response.data.product);
        $("#edit-price-modal").modal("show");
        _this4.editPriceLoader = false;

        _this4.registerComponentStatistics("messenger", "click-on-delsa-btn", "click-on-edit-price-btn-in-messenger");
      });
    },
    registeCallBtnEvent: function registeCallBtnEvent() {
      this.registerComponentStatistics("messenger", "click-on-call-btn", "click-on-call-btn");
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
  },
  watch: {
    "$parent.msgToSend": function $parentMsgToSend(value) {
      if (value) {
        this.isChat = true;
      } else {
        this.isChat = false;
      }
    },
    "$parent.isGuideActive": function $parentIsGuideActive(value) {
      var _this5 = this;

      if (value) {
        setTimeout(function () {
          _this5.$parent.setUserGuideCookie();
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    }
  }
});

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messege_image__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jquery_magnific_popup_min__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jquery_magnific_popup_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__jquery_magnific_popup_min__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MessageImage: __WEBPACK_IMPORTED_MODULE_0__messege_image__["a" /* default */]
  },
  data: function data() {
    return {
      isImageLoad: false,
      loadMoreContacts: false,
      channelMessages: "",
      channelMessagesTotalCount: 0,
      loadPagesCount: 1,
      listHeight: 0,
      isChannelContentLoaded: false
    };
  },

  methods: {
    init: function init() {
      this.hideCollapses();
      this.getChannelPosts(1);
    },

    hideCollapses: function hideCollapses() {
      $(document).on("click", function (e) {
        /* bootstrap collapse js adds "in" class to your collapsible element*/

        var user_menu_opened = $("#chat-menu-items").hasClass("in");

        if (!$(e.target).closest("#chat-menu-items").length && !$(e.target).is("#button-collapse-chat-menu") && user_menu_opened === true) {
          $("#chat-menu-items").collapse("toggle");
        }

        /* bootstrap collapse js adds "in" class to your collapsible element*/
      });
    },
    getChannelPosts: function getChannelPosts() {
      var _this = this;

      this.isChannelContentLoaded = true;
      axios.post("/get_channel_contents", {
        page: this.loadPagesCount
      }).then(function (response) {
        _this.channelMessagesTotalCount = response.data.total;
        var data = response.data.contents.reverse();
        _this.channelMessages = data;
        _this.$parent.scrollToEnd(0);
        _this.$nextTick(function () {
          _this.activeLoadMore();
        });
        _this.isChannelContentLoaded = false;
      });
    },
    loadMoreChannelPosts: function loadMoreChannelPosts() {
      var _this2 = this;

      this.loadPagesCount += 1;
      axios.post("/get_channel_contents", {
        page: this.loadPagesCount
      }).then(function (response) {
        var data = response.data.contents.reverse();
        if (data.length > 0) {
          var _channelMessages;

          (_channelMessages = _this2.channelMessages).unshift.apply(_channelMessages, _toConsumableArray(data));
          _this2.$nextTick(function () {
            _this2.stopScrollPostition();
          });
        }
      });
    },
    activeLoadMore: function activeLoadMore() {
      var _this3 = this;

      var chatPageElementList = $(".chat-page ul");
      this.listHeight = chatPageElementList.prop("scrollHeight");
      chatPageElementList.scroll(function () {
        if (chatPageElementList.scrollTop() == 0 && !_this3.loadMoreContacts) {
          if (_this3.channelMessagesTotalCount > _this3.channelMessages.length) {
            _this3.loadMoreContacts = true;
            _this3.loadMoreChannelPosts();
          }
        }
      });

      // loadMoreContacts
    },
    stopScrollPostition: function stopScrollPostition() {
      var chatPageElementList = $(".chat-page ul");
      var chatElementHeight = chatPageElementList.prop("scrollHeight");
      chatPageElementList.scrollTop(chatElementHeight - this.listHeight);
      this.listHeight = chatElementHeight;
      this.loadMoreContacts = false;
    },
    shareContetn: function shareContetn(contentId) {
      if (this.isDeviceMobile()) {
        var baseUrl = getBase();
        var linkElement = document.createElement("a");
        var Message = baseUrl + "public-channel/" + contentId;
        var messageToWhatsApp = encodeURIComponent(Message);
        var url = "whatsapp://send?text=" + messageToWhatsApp;

        linkElement.setAttribute("href", url);
        linkElement.setAttribute("data-action", "share/whatsapp/share");

        document.body.appendChild(linkElement);

        linkElement.click();

        document.body.removeChild(linkElement);
      } else {
        this.activeShareModal(contentId);
      }
    },

    handleBackKeys: function handleBackKeys() {
      this.$parent.isImageOpened = true;
      var self = this;
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $.magnificPopup.close();
      });
      this.$parent.handleBackBtnClickOnDevices();
    },
    resetBackKeys: function resetBackKeys() {
      this.$parent.isImageOpened = false;
      this.$parent.handleBackBtnClickOnDevices();
    },

    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    activeShareModal: function activeShareModal(contentId) {
      var baseUrl = getBase();
      var url = baseUrl + "public-channel/" + contentId;
      var shareItem = {
        shareModalUrl: url,
        shareModalText: ""
      };
      __WEBPACK_IMPORTED_MODULE_1__router_router__["b" /* eventBus */].$emit("shareModalUrl", shareItem);
    },
    getProductInfo: function getProductInfo(text, isTitle) {
      var splitText = text.split("\n");
      if (isTitle) {
        return splitText[0];
      } else {
        return splitText[1].match(/\d+/)[0];
      }
    },
    productAmount: function productAmount(getAmount) {
      var amount = this.getProductInfo(getAmount, false);
      return this.getConvertedNumbers(amount);
    },

    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
    },
    getConvertedNumbers: function getConvertedNumbers(number) {
      if (number || typeof number === "number") {
        var data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    },
    getProductUrl: function getProductUrl(product) {
      var productName = product.text.split("\n")[0].split("|");
      return "/product-view/خرید-عمده-" + productName[1].trim().replace(" ", "-") + "/" + productName[0].trim().replace(" ", "-") + "/" + product.product_id;
    },
    shareMyProfile: function shareMyProfile() {
      var baseUrl = getBase();

      if (this.isDeviceMobile()) {
        var linkElement = document.createElement("a");
        var Message = baseUrl + "shared-profile/" + this.$parent.currentUser.user_info.user_name;
        var messageToWhatsApp = encodeURIComponent(Message);
        var url = "whatsapp://send?text=" + messageToWhatsApp;

        linkElement.setAttribute("href", url);
        linkElement.setAttribute("data-action", "share/whatsapp/share");

        document.body.appendChild(linkElement);

        linkElement.click();

        document.body.removeChild(linkElement);
      } else {
        var _url = baseUrl + "shared-profile/" + this.$parent.currentUser.user_info.user_name;
        var shareItem = {
          shareModalUrl: _url,
          shareModalText: ""
        };
        __WEBPACK_IMPORTED_MODULE_1__router_router__["b" /* eventBus */].$emit("shareModalUrl", shareItem);
      }
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jquery_magnific_popup_min__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jquery_magnific_popup_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__jquery_magnific_popup_min__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      imgSrcs: "",
      isImageLoad: false
    };
  },
  props: ["base", "img", "alt", "isProduct", "imgId"],
  methods: {
    loadImage: function loadImage() {
      this.isImageLoad = false;
    },
    ImageLoaded: function ImageLoaded() {
      this.isImageLoad = true;
      this.setImagewidthAndHeight();
    },
    setImagewidthAndHeight: function setImagewidthAndHeight() {
      var element = $("#" + this.imgId);
      var elementWidth = element.prop("naturalWidth");
      var elementHeight = element.prop("naturalHeight");
      if (elementHeight < elementWidth) {
        element.attr("class", "set-height");
      }
    },
    activeImagePopup: function activeImagePopup() {
      var self = this;
      setTimeout(function (_) {
        $(".image-popup-no-margins").magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          },
          callbacks: {
            open: function open() {
              self.$parent.handleBackKeys();
            },
            close: function close() {
              self.$parent.resetBackKeys();
            }
          }
        });
      }, 10);
    }
  },
  mounted: function mounted() {
    this.activeImagePopup();
  },
  created: function created() {
    this.loadImage();
  }
});

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_my_contact_list_vue__ = __webpack_require__(267);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42216dd2_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_contact_list_vue__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(312)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42216dd2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_my_contact_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42216dd2_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_contact_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42216dd2_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_contact_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/my-contact-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42216dd2", Component.options)
  } else {
    hotAPI.reload("data-v-42216dd2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_messenger_vue__ = __webpack_require__(387);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fac3fde_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_messenger_vue__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(599)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7fac3fde"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_messenger_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fac3fde_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_messenger_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fac3fde_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_messenger_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/messenger.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fac3fde", Component.options)
  } else {
    hotAPI.reload("data-v-7fac3fde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(600);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("168cf8bd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7fac3fde\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messenger.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7fac3fde\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messenger.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.message-wrapper[data-v-7fac3fde] {\n  border-right: 1px solid #e4e4e4;\n  position: relative;\n  height: 100%;\n}\n.main-content[data-v-7fac3fde] {\n  padding: 59px 250px 0 0;\n  direction: rtl;\n  height: 100%;\n  position: fixed;\n  background: #fff;\n  left: 0;\n  bottom: 0;\n  top: 0;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n  padding: 85px 250px 0 0;\n}\n.little-main .main-content[data-v-7fac3fde] {\n  padding: 59px 80px 0 0;\n}\n.lds-ring[data-v-7fac3fde] {\n  display: inline-block;\n\n  position: absolute;\n\n  width: 64px;\n\n  height: 64px;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n}\n.lds-ring div[data-v-7fac3fde] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 5px solid #00c569;\n  border-radius: 50%;\n  -webkit-animation: lds-ring-data-v-7fac3fde 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring-data-v-7fac3fde 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #00c569 transparent transparent transparent;\n}\n.lds-ring-alt[data-v-7fac3fde] {\n  display: block;\n  margin-top: 50px;\n  direction: rtl;\n  text-align: center;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n.loade-more-messages .lds-ring[data-v-7fac3fde] {\n  width: 50px;\n\n  height: 50px;\n}\n.loade-more-messages .lds-ring > div[data-v-7fac3fde] {\n  width: 36px;\n\n  height: 36px;\n}\n@-webkit-keyframes lds-ring-data-v-7fac3fde {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes lds-ring-data-v-7fac3fde {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n\n/*preloader image style*/\n.contact-title[data-v-7fac3fde] {\n  font-size: 16px;\n  padding: 18px 8px 23px;\n  border-bottom: 2px solid #f2f2f2;\n}\n.contact-title i[data-v-7fac3fde] {\n  font-size: 26px;\n  position: relative;\n  top: 5px;\n}\n.contact-title span[data-v-7fac3fde] {\n  font-size: 16px;\n  padding-right: 4px;\n}\n.contact-wrapper[data-v-7fac3fde],\n.contact-wrapper > div[data-v-7fac3fde] {\n  height: 100%;\n}\n.contact-wrapper .contact-body[data-v-7fac3fde] {\n  height: 100%;\n  overflow-y: scroll;\n  float: right;\n  width: 100%;\n  border-left: 1px solid #e0e0e0;\n}\n.default-message-wrapper[data-v-7fac3fde] {\n  position: relative;\n  height: 100%;\n  overflow: auto;\n}\n.default-message-wrapper .default-main-contents[data-v-7fac3fde] {\n  background: #fff;\n  border-radius: 250px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n  padding-top: 70px;\n  padding-bottom: 30px;\n}\n.default-message-wrapper .default-main-contents > img[data-v-7fac3fde] {\n  max-width: 260px;\n}\n.default-message-wrapper .default-main-contents.delsa-box[data-v-7fac3fde] {\n  width: 100%;\n  max-width: 585px;\n  min-height: 550px;\n}\n.default-message-wrapper .default-main-contents.delsa-box .delsa-image[data-v-7fac3fde] {\n  max-width: 455px;\n  margin: 0 auto 30px;\n  min-height: 254px;\n}\n.default-message-wrapper .default-main-contents .delsa-title[data-v-7fac3fde] {\n  font-size: 29px;\n  color: #222222;\n  font-weight: 400;\n  margin: 18px auto 20px;\n}\n.default-message-wrapper .default-main-contents .delsa-title-active[data-v-7fac3fde] {\n  font-size: 29px;\n  font-weight: 400;\n  margin: 33px auto 30px;\n}\nsmall[data-v-7fac3fde] {\n  font-size: 16px;\n}\n.default-message-wrapper .default-main-contents .check-icon-title[data-v-7fac3fde] {\n  width: 80px;\n  height: 80px;\n  font-size: 50px;\n  background: #edf8e6;\n  border-radius: 50px;\n  padding-top: 15px;\n  margin-top: 14px;\n}\n.default-message-wrapper .title-item[data-v-7fac3fde] {\n  font-size: 18px;\n  color: #222222;\n  font-weight: 400;\n  margin: 33px auto 30px;\n}\n.default-message-wrapper .default-main-contents .delsa-text[data-v-7fac3fde] {\n  color: #777;\n  line-height: 1.618;\n  font-size: 15px;\n}\n.default-message-wrapper .default-main-contents.delsa-box .green-button[data-v-7fac3fde] {\n  background-image: -webkit-gradient(linear, right top, left top, from(#21ad93), to(#4dc0bb));\n  background-image: linear-gradient(to left, #21ad93, #4dc0bb);\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 10px 40px;\n  margin-top: 26px;\n}\n.default-message-wrapper .default-main-contents i[data-v-7fac3fde] {\n  font-size: 26px;\n}\n.contact-not-found[data-v-7fac3fde] {\n  text-align: center;\n  margin: 15px auto;\n}\n.contact-not-found i[data-v-7fac3fde] {\n  font-size: 26px;\n}\n.contact-not-found p[data-v-7fac3fde] {\n  margin-bottom: 7px;\n}\n.contacts-switch-buttons-wrapper[data-v-7fac3fde] {\n  float: right;\n  width: 100%;\n  background: #eef3f3;\n  border-bottom: 3px solid #e3e3e3;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-7fac3fde] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-7fac3fde] {\n  border: none;\n  width: 100%;\n  font-size: 13px;\n  font-weight: bold;\n  padding: 15px 0;\n  position: relative;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-7fac3fde] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-7fac3fde],\n.contacts-switch-buttons-wrapper .contact-button[data-v-7fac3fde]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\n.total-unread-messages-badge[data-v-7fac3fde] {\n  position: absolute;\n  top: 1px;\n  background: red;\n  height: 23px;\n  width: 33px;\n  color: #fff;\n  border-radius: 10px;\n  left: 5px;\n  font-size: 12px;\n}\n@media screen and (max-width: 991px) {\n.main-content[data-v-7fac3fde] {\n    padding: 0;\n    top: 42px;\n    padding-bottom: 59px;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n    padding: 0;\n    top: 89px;\n    padding-bottom: 89px;\n}\n}\n@media screen and (max-width: 767px) {\n.send-message-form .button-wrapper button[data-v-7fac3fde] {\n    padding: 12px 13px;\n    font-size: inherit;\n}\n.send-message-form .message-input input[data-v-7fac3fde] {\n    padding: 13px 15px;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n    padding: 0;\n    top: 85px;\n}\n.hidden_element[data-v-7fac3fde] {\n    display: none;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-7fac3fde] {\n    width: 33.3333%;\n}\n.reply-info p[data-v-7fac3fde] {\n    width: 100%;\n}\n}\n@media screen and (max-width: 767px) {\n.is-guide-active[data-v-7fac3fde] {\n    z-index: 1011 !important;\n    background: transparent !important;\n    top: 0;\n    padding-bottom: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 601:
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_chat_user_info_vue__ = __webpack_require__(388);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dd3487f6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_user_info_vue__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(603)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dd3487f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_chat_user_info_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dd3487f6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_user_info_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dd3487f6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_user_info_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/chat-user-info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd3487f6", Component.options)
  } else {
    hotAPI.reload("data-v-dd3487f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(604);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("70eebc4e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-dd3487f6\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-user-info.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-dd3487f6\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-user-info.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.user-info-wrapper[data-v-dd3487f6] {\n  height: 100%;\n  overflow-y: scroll;\n  background: #f6fbff;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.contact-wrapper .contact-body[data-v-dd3487f6]::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.contact-wrapper .contact-body[data-v-dd3487f6] {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.title-section[data-v-dd3487f6] {\n  background: #f0f0f0;\n  padding: 17px 10px 16px;\n}\n.title-section p[data-v-dd3487f6] {\n  font-size: 16px;\n  color: #777;\n}\n.user-image[data-v-dd3487f6] {\n  width: 50px;\n  height: 50px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 10px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #dddddd;\n}\n.user-contents[data-v-dd3487f6] {\n  float: right;\n  width: calc(100% - 60px);\n  padding-top: 4px;\n}\n.user-contents p[data-v-dd3487f6] {\n  font-size: 16px;\n  color: #666666;\n  font-weight: bold;\n}\n.user-contents p.response-rate[data-v-dd3487f6] {\n  font-size: 14px;\n  margin-top: 11px;\n  color: #777;\n}\n.empty-response-rate[data-v-dd3487f6] {\n  padding-top: 13px;\n}\nli.user-info[data-v-dd3487f6],\nli.user-items[data-v-dd3487f6] {\n  float: right;\n  width: 100%;\n  padding: 25px 20px;\n  border-bottom: 5px solid #f0f0f0;\n  background: #fff;\n}\n.user-items ul[data-v-dd3487f6] {\n  padding: 0;\n}\n.user-items ul li[data-v-dd3487f6] {\n  color: #777;\n  font-size: 15px;\n  margin-bottom: 25px;\n  float: right;\n  width: 100%;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.user-items ul li[data-v-dd3487f6]:last-of-type {\n  margin-bottom: 0;\n}\n.user-items > ul > li > span[data-v-dd3487f6] {\n  display: inline-block;\n  padding-top: 9px;\n}\n.verified-user[data-v-dd3487f6] {\n  line-height: 1;\n  font-size: 25px;\n  top: 5px;\n  color: #cccccc;\n}\n.verified-user[data-v-dd3487f6]::before {\n  top: 5px;\n  left: 6px;\n  font-size: 14px;\n}\nli.verified-user-wrpapper > span[data-v-dd3487f6] {\n  padding-top: 11px;\n  display: inline-block;\n}\nli.user-activity-item > span[data-v-dd3487f6] {\n  padding-top: 12px;\n  display: inline-block;\n}\nul li.verified-user-wrpapper[data-v-dd3487f6] {\n  color: #cccccc;\n}\n.verified-user-wrpapper.verified-user-active[data-v-dd3487f6] {\n  color: #1da1f2;\n}\n.verified-user-wrpapper.verified-user-active p[data-v-dd3487f6],\n.verified-user-wrpapper.verified-user-active .verified-user[data-v-dd3487f6] {\n  color: #1da1f2;\n}\n.icon-wrapper[data-v-dd3487f6] {\n  margin-left: 10px;\n  width: 31px;\n  text-align: center;\n  float: right;\n}\n.icon-wrapper > svg[data-v-dd3487f6] {\n  height: 31px;\n}\n.cls-1[data-v-dd3487f6] {\n  fill: #666;\n}\n.cls-2[data-v-dd3487f6] {\n  fill: #666;\n}\nul li.report-item button[data-v-dd3487f6] {\n  width: 100%;\n  text-align: right;\n  padding: 0px 0 0;\n  background: none;\n  border: none;\n  color: #e41c38;\n}\n.report-item button i[data-v-dd3487f6] {\n  font-size: 21px;\n}\n.user-items ul li.report-item[data-v-dd3487f6]:hover {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.spinner-wrapper[data-v-dd3487f6] {\n  margin-top: 120px;\n}\n.spinner-border[data-v-dd3487f6] {\n  width: 5.5rem;\n  height: 5.5rem;\n  border-width: 0.5rem;\n  color: #00c569;\n}\n\n/* stars */\n.profile-rating-box[data-v-dd3487f6] {\n  border: 1px solid #f6f6f6;\n  border-radius: 4px;\n  width: 100%;\n  max-width: 230px;\n  margin: 30px auto;\n  overflow: hidden;\n}\n.stars-wrapper[data-v-dd3487f6] {\n  padding-right: 2px;\n}\n.rating-stars[data-v-dd3487f6] {\n  width: calc(100% - 50px);\n  padding: 7px 0 0;\n  text-align: center;\n}\n.rating-stars p > span[data-v-dd3487f6] {\n  position: relative;\n  display: inline-block;\n  margin-left: 5px;\n}\n.rating-stars p > span[data-v-dd3487f6]:last-of-type {\n  margin-left: 0;\n}\n.rating-stars p > span i[data-v-dd3487f6] {\n  position: absolute;\n  left: 2px;\n  font-size: 20px;\n  z-index: 0;\n  top: -4px;\n  color: #bdc4cc;\n}\n.rating-stars p > span > span[data-v-dd3487f6] {\n  display: block;\n  position: relative;\n  z-index: 1;\n  font-size: 13px;\n  width: 18px;\n  text-align: center;\n  margin-left: 5px;\n  color: #777;\n}\n.rating-stars .review-count-wrapper[data-v-dd3487f6] {\n  margin-top: 7px;\n  color: #556080;\n}\n.rating-score[data-v-dd3487f6] {\n  width: 50px;\n  background: #f6f6f6;\n  height: 100%;\n  text-align: center;\n  padding: 15px 0;\n  font-size: 22px;\n  font-weight: bold;\n  color: #556080;\n}\nli.rating-item[data-v-dd3487f6] {\n  border-bottom: 1px solid #f2f2f2;\n}\nli.score-item > span[data-v-dd3487f6] {\n  padding-top: 10px;\n  display: inline-block;\n}\nli.score-item i[data-v-dd3487f6] {\n  font-size: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-info-wrapper" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "main-section" }, [
      !_vm.$parent.userDataLoader
        ? _c("ul", [
            _c("li", { staticClass: "user-info" }, [
              _vm.selectedContact.profile_photo
                ? _c("div", {
                    staticClass: "user-image",
                    style: {
                      backgroundImage:
                        "url(" +
                        _vm.$parent.str +
                        "/" +
                        _vm.selectedContact.profile_photo +
                        ")"
                    }
                  })
                : _c("div", {
                    staticClass: "user-image",
                    style: {
                      backgroundImage:
                        "url(" +
                        _vm.$parent.assets +
                        "assets/img/user-defult.png" +
                        ")"
                    }
                  }),
              _vm._v(" "),
              _c("div", { staticClass: "user-contents" }, [
                _c("p", {
                  class: {
                    "empty-response-rate":
                      !_vm.userStatistics.response_rate &&
                      _vm.userStatistics.response_rate == "0"
                  },
                  domProps: {
                    textContent: _vm._s(
                      _vm.selectedContact.first_name +
                        " " +
                        _vm.selectedContact.last_name
                    )
                  }
                }),
                _vm._v(" "),
                _vm.userStatistics.response_rate &&
                _vm.userStatistics.response_rate != "0"
                  ? _c("p", { staticClass: "response-rate" }, [
                      _vm._v("\n            احتمال پاسخگویی\n            "),
                      _c("span", {
                        staticClass: "red-text",
                        domProps: {
                          textContent: _vm._s(
                            "%" + _vm.userStatistics.response_rate
                          )
                        }
                      })
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "user-items col-xs-12" }, [
              _c("div", [
                _c("ul", { staticClass: "col-xs-12" }, [
                  _vm.userStatistics.reputation_score
                    ? _c("li", { staticClass: "score-item" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("span", {}, [
                          _vm._v(
                            "\n                اعتبار کاربر\n                "
                          ),
                          _c("span", { staticClass: "light-green-text" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.userStatistics.reputation_score) +
                                "\n                "
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "verified-user-wrpapper",
                      class: {
                        "verified-user-active": _vm.selectedContact.is_verified
                      }
                    },
                    [
                      _c("p", { staticClass: "icon-wrapper" }, [
                        _c(
                          "button",
                          {
                            staticClass: "verified-user",
                            attrs: {
                              "data-container": "body",
                              "data-toggle": "popover",
                              "data-placement": "bottom",
                              "data-content": _vm.selectedContact.is_verified
                                ? _vm.$parent.verifiedUserContent
                                : "<div class='tooltip-wrapper text-rtl'>اطلاعات هویتی این کاربر احراز نشده است.<br/><a href='/verification'>اطلاعات بیشتر</a> </div>"
                            },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-certificate" })]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.selectedContact.is_verified
                        ? _c("span", {
                            domProps: { textContent: _vm._s("احراز هویت شده") }
                          })
                        : _c("span", {
                            domProps: { textContent: _vm._s("احراز هویت نشده") }
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _c("li", { staticClass: "report-item" }, [
                    _c(
                      "button",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$parent.activeReportModal(
                              _vm.$parent.selectedContact.contact_id
                            )
                          }
                        }
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("span", [_vm._v("گزارش تخلف")])
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "col-xs-12 bg-white" }, [
              _vm.userStatistics.rating_info.avg_score
                ? _c(
                    "div",
                    { staticClass: "profile-rating-box-wrapper hidden-xs" },
                    [
                      _c("div", { staticClass: "profile-rating-box" }, [
                        _c("div", { staticClass: "rating-stars pull-left" }, [
                          _c(
                            "p",
                            { staticClass: "stars-wrapper" },
                            _vm._l(5, function(star, index) {
                              return _c("span", { key: index }, [
                                _c("span", {
                                  domProps: { textContent: _vm._s(index + 1) }
                                }),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass: "fa fa-star",
                                  class: {
                                    "yellow-text":
                                      index <
                                      _vm.userStatistics.rating_info.avg_score
                                  }
                                })
                              ])
                            })
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "review-count-wrapper" }, [
                            _c("span", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.userStatistics.rating_info.total_count
                                )
                              }
                            }),
                            _vm._v(
                              "\n                نظر ثبت شده است\n              "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "rating-score pull-right" }, [
                          _c("span", {
                            domProps: {
                              textContent: _vm._s(
                                _vm.userStatistics.rating_info.avg_score
                              )
                            }
                          })
                        ])
                      ])
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.$parent.userAllowedReview
              ? _c(
                  "li",
                  { staticClass: "col-xs-12" },
                  [
                    _vm.reviewCurrentStep == 0
                      ? _c("ChatReviewComponent", {
                          attrs: {
                            "user-full-name":
                              _vm.selectedContact.first_name +
                              " " +
                              _vm.selectedContact.last_name,
                            "user-id": _vm.selectedContact.contact_id
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.reviewCurrentStep == 1
                      ? _c("SuccessReviewComponent")
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ])
        : _c("div", { staticClass: "text-center spinner-wrapper" }, [_vm._m(3)])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title-section" }, [
      _c("p", [_vm._v("اطلاعات کاربر")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-award" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-border" }, [
      _c("span", { staticClass: "sr-only" })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dd3487f6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_main_chat_wrapper_vue__ = __webpack_require__(389);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b8dd9550_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_chat_wrapper_vue__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(607)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b8dd9550"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_main_chat_wrapper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b8dd9550_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_chat_wrapper_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b8dd9550_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_chat_wrapper_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/main-chat-wrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b8dd9550", Component.options)
  } else {
    hotAPI.reload("data-v-b8dd9550", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(608);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("4713b444", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-b8dd9550\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-chat-wrapper.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-b8dd9550\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-chat-wrapper.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(7);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.loading-container[data-v-b8dd9550] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  position: relative;\n  align-items: center;\n  z-index: 1;\n  margin-top: 120px;\n}\n.loading-container .lds-ring[data-v-b8dd9550] {\n  background: #fff;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n  width: 50px;\n  height: 50px;\n  padding: 4px;\n}\n.loading-container .lds-ring > div[data-v-b8dd9550] {\n  width: 30px;\n  height: 30px;\n  border-width: 3px;\n}\n.whatsapp-loading-gif[data-v-b8dd9550] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 20%;\n  height: 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.chat-loaded[data-v-b8dd9550] {\n  opacity: 1;\n}\n.contact-is-search img[data-v-b8dd9550] {\n  display: block;\n  width: 60px;\n  margin: 18px auto;\n}\n.clock-icon[data-v-b8dd9550] {\n  font-size: 14px;\n}\n.check-items[data-v-b8dd9550] {\n  padding-left: 10px;\n  color: #b2b2b2;\n}\n.text-blue[data-v-b8dd9550] {\n  color: #60caf1;\n}\n.check-items.dual[data-v-b8dd9550] :last-of-type {\n  margin-left: -8px;\n}\n.message-wrapper .message-contact-title[data-v-b8dd9550] {\n  font-size: 16px;\n  padding: 7px 15px 8px;\n  float: right;\n  width: 100%;\n  color: #fff;\n  background: -webkit-gradient(linear, right top, left top, from(#21ad93), to(#4dc0bb));\n  background: linear-gradient(-90deg, #21ad93, #4dc0bb);\n}\n.message-contact-title a[data-v-b8dd9550] {\n  color: #fafafa;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-contact-title a[data-v-b8dd9550]:hover {\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.chat-page .bg-wrapper[data-v-b8dd9550] {\n  background: url(" + escape(__webpack_require__(41)) + ") repeat;\n  opacity: 0.06;\n  position: absolute;\n  z-index: 1;\n  left: 15px;\n  right: 0;\n  top: 50px;\n  bottom: 60px;\n  background-size: contain;\n}\n.chat-page ul[data-v-b8dd9550] {\n  background-color: #e5ddd6;\n}\n.chat-page ul li[data-v-b8dd9550] {\n  position: relative;\n  z-index: 1;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n  width: 35px;\n  height: 35px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 10px;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550]:hover {\n  cursor: pointer;\n}\n.message-wrapper .message-contact-title img[data-v-b8dd9550] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.message-wrapper .message-contact-title a[data-v-b8dd9550] {\n  float: right;\n  display: block;\n  max-width: 300px;\n  font-size: 15px;\n  color: #fff;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550]:first-of-type {\n  max-width: 190px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: 25px;\n  overflow: hidden;\n  margin-top: 10px;\n  float: right;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-b8dd9550] {\n  border-radius: 5px;\n  padding: 4px 7px;\n  margin-right: 12px;\n  margin-top: 6px;\n  background: #fff;\n  color: #23ae94;\n  font-size: 13px;\n  float: right;\n}\n.message-wrapper .message-contact-title span.commetns-link i[data-v-b8dd9550] {\n  position: relative;\n  top: 2px;\n  font-size: 12px;\n}\n.back-state[data-v-b8dd9550] {\n  background: none;\n  color: #fff;\n  border: none;\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n  padding: 0 6px;\n  float: right;\n}\n.report-button[data-v-b8dd9550] {\n  background: none;\n  border: none;\n  padding: 7px 0 0px;\n  font-size: 13px;\n  color: #fff;\n}\n.message-wrapper .chat-page ul[data-v-b8dd9550] {\n  padding: 20px;\n\n  overflow-x: hidden;\n\n  position: absolute;\n\n  left: 0;\n\n  right: 0;\n\n  bottom: 60px;\n\n  top: 50px;\n\n  -webkit-transition: 100ms;\n\n  transition: 100ms;\n}\n.message-wrapper .chat-page ul li[data-v-b8dd9550] {\n  width: 100%;\n  float: right;\n}\n.message-wrapper .chat-page ul li[data-v-b8dd9550]:last-of-type {\n  margin-bottom: 10px;\n}\n.message-date[data-v-b8dd9550] {\n  text-align: center;\n  margin: 10px auto;\n  color: #313a43;\n  font-size: 14px;\n}\n.message-date span[data-v-b8dd9550] {\n  background: #e1f5fe;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n  padding: 3px 10px 0;\n  line-height: 1;\n}\n.message-wrapper .chat-page li > div.message-item-wrapper[data-v-b8dd9550] {\n  font-size: 14px;\n  line-height: 1.612;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 8px;\n  margin: 0 auto 3px;\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n  min-width: 100px;\n}\n.message-content-wrapper[data-v-b8dd9550] {\n  max-width: 455px;\n  padding: 5px 10px;\n  display: block;\n}\n.message-text[data-v-b8dd9550] {\n  white-space: pre-line;\n}\n.message-wrapper .chat-page .message-item-wrapper.message-receive[data-v-b8dd9550] {\n  float: left;\n  background: #fff;\n  border-radius: 0 8px 8px 8px;\n  min-width: 150px;\n}\n.message-wrapper .chat-page .message-receive[data-v-b8dd9550]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 6px 9px 0;\n  border-color: transparent #fff transparent transparent;\n  line-height: 0px;\n  _border-color: #000000 #fff #000000 #000000;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n}\n.message-wrapper .chat-page .message-item-wrapper.message-send[data-v-b8dd9550] {\n  float: right;\n  background: #dcf8c6;\n  border-radius: 8px 0 8px 8px;\n}\n.message-wrapper .chat-page .message-send[data-v-b8dd9550]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  right: -6px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 6px 0 0;\n  border-color: #dcf8c6 transparent transparent transparent;\n  line-height: 0px;\n  _border-color: #dcf8c6 #000000 #000000 #000000;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n}\n.message-wrapper .chat-page span.message-chat-date[data-v-b8dd9550] {\n  text-align: right;\n  font-size: 13px;\n  padding-top: 3px;\n  width: 100%;\n  direction: ltr;\n  display: block;\n  color: #b2b2b2;\n}\n.send-message-form[data-v-b8dd9550] {\n  overflow: hidden;\n  padding: 10px 15px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #f0f0f0;\n}\n.message-input[data-v-b8dd9550] {\n  float: left;\n  width: calc(100% - 50px);\n}\n.send-message-form .message-input input[data-v-b8dd9550] {\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n  padding: 7px 50px 8px 15px;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.send-message-form .message-input input.padding-default[data-v-b8dd9550] {\n  -webkit-transition: 150ms;\n  transition: 150ms;\n  padding: 7px 15px 8px 15px;\n}\n.capture-image[data-v-b8dd9550] {\n  position: absolute;\n  font-size: 21px;\n  background: none;\n  border: none;\n  color: #919191;\n  padding: 7px 15px 7px 10px;\n}\n.button-wrapper[data-v-b8dd9550] {\n  float: right;\n  line-height: 1.1;\n  position: relative;\n}\n.send-message-form .button-wrapper .item-wrapper[data-v-b8dd9550] {\n  width: 40px;\n  height: 40px;\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n  border-radius: 35px;\n}\n.send-message-form .button-wrapper .item-wrapper .send-message-button[data-v-b8dd9550] {\n  background: none;\n  border: none;\n  width: 40px;\n  height: 40px;\n  height: 40px;\n  position: absolute;\n  right: calc(50% - 21px);\n  padding: 7px 0 0;\n}\n.send-message-form .button-wrapper .voice-message-button[data-v-b8dd9550] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0px;\n  background: none;\n  border: none;\n  font-size: 19px;\n  bottom: 0;\n  padding: 4px 13px 0;\n}\n.button-wrapper .send-message-button svg[data-v-b8dd9550] {\n  width: 19px;\n  height: 19px;\n}\n#chat-menu-items[data-v-b8dd9550] {\n  position: absolute;\n  left: 15px;\n  z-index: 10;\n  width: 170px;\n  background: #fff;\n  text-align: right;\n  direction: rtl;\n  border-radius: 4px;\n  line-height: 1.618;\n  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  top: 48px;\n  overflow: hidden;\n  padding: 0 !important;\n}\n#chat-menu-items li:last-of-type button[data-v-b8dd9550] {\n  border: none;\n}\n#chat-menu-items li button i[data-v-b8dd9550] {\n  margin-left: 6px;\n}\n#chat-menu-items li button[data-v-b8dd9550] {\n  background: none;\n  color: #777;\n  font-size: 14px;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  text-align: right;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-bottom: 1px solid #dbdbdb;\n}\n#chat-menu-items li button[data-v-b8dd9550]:hover {\n  color: #333;\n  background: #eee;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.new-badge[data-v-b8dd9550] {\n  position: absolute;\n  right: -16px;\n  background: #e51c38;\n  border-radius: 50px;\n  font-size: 12px;\n  color: #fff;\n  top: -8px;\n  line-height: 1;\n  padding: 4px 2px;\n}\n.mobile-like-user[data-v-b8dd9550] {\n  position: absolute;\n  z-index: 1;\n  background: #e8f4f8;\n  text-align: center;\n  border-radius: 12px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);\n  padding: 25px 0;\n  margin-top: 20px;\n}\n.mobile-like-user.delsa-info-box[data-v-b8dd9550] {\n  background: #edf8e6;\n  padding: 23px 0;\n  max-width: 460px;\n  margin-left: auto;\n  float: initial !important;\n  overflow: hidden;\n  margin-right: auto;\n  position: relative;\n  top: 17px;\n}\n.mobile-like-user.delsa-info-box .title-item[data-v-b8dd9550] {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0;\n}\n.mobile-like-user.delsa-info-box .green-button[data-v-b8dd9550] {\n  margin: 20px 0 0;\n  background: #4dc0bb;\n  border-radius: 8px;\n  padding: 7px 25px;\n}\n.mobile-like-user.success[data-v-b8dd9550] {\n  background: #f2f6e7;\n  padding: 20px 0 0;\n}\n.mobile-like-user .close-rating[data-v-b8dd9550] {\n  position: absolute;\n  right: 0;\n  background: none;\n  border: none;\n  color: #777;\n  padding: 5px 15px;\n  top: 0px;\n}\n.mobile-like-user .title-item[data-v-b8dd9550] {\n  color: #313a43;\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0 auto 15px;\n  line-height: 1.618;\n}\n.mobile-like-user.success .title-item[data-v-b8dd9550] {\n  margin: 17px auto 23px;\n}\n.mobile-like-user.success .likes-wrapper > div[data-v-b8dd9550] {\n  font-size: 45px;\n  background: #fff;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  border-radius: 55px;\n  padding-top: 19px;\n  color: #50a791;\n}\n.mobile-like-user .likes-wrapper[data-v-b8dd9550] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.mobile-like-user.success .likes-wrapper[data-v-b8dd9550] {\n  display: block;\n}\n.mobile-like-user .likes-wrapper > button[data-v-b8dd9550] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: 120px;\n  background: none;\n  border: none;\n  color: #21ad93;\n}\n.mobile-like-user .likes-wrapper > button.dislike[data-v-b8dd9550] {\n  color: #e41c38;\n}\n.mobile-like-user .likes-wrapper > button.dislike i[data-v-b8dd9550] {\n  background: #e41c38;\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.mobile-like-user .likes-wrapper > button i[data-v-b8dd9550] {\n  display: block;\n  font-size: 25px;\n  background: #21ad93;\n  color: #fff;\n  width: 48px;\n  height: 48px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 11px;\n}\n.messenger-notice[data-v-b8dd9550] {\n  text-align: center;\n  background: #fff8c1;\n  padding: 7px;\n  border-radius: 8px;\n  margin-top: 20px;\n  line-height: 1.618;\n  color: #777;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);\n}\n.messenger-notice .notice-title[data-v-b8dd9550] {\n  font-size: 13px;\n}\n.message-wrapper .chat-page li > div.notice-actions[data-v-b8dd9550] {\n  margin: 3px auto 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550] {\n  border: none;\n  color: #21ad92;\n  border-radius: 4px;\n  margin: 2px 7px 0;\n  background: #fff;\n  padding: 2px 15px;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550]:hover {\n  background: #21ad93;\n  border-color: #21ad93;\n  color: #fff;\n}\n.messenger-notice .notice-actions button i[data-v-b8dd9550] {\n  margin-left: 7px;\n}\n.verified-user[data-v-b8dd9550]::before {\n  top: 3px;\n  left: 3px;\n}\n.verified-user[data-v-b8dd9550] {\n  float: right;\n  top: 7px;\n  right: 5px;\n}\n.overlay-bg-guide[data-v-b8dd9550] {\n  position: absolute;\n  width: 100%;\n  z-index: 5;\n  background: rgba(0, 0, 0, 0.6);\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.guide-arrow-item[data-v-b8dd9550] {\n  margin-top: 80px;\n}\n.guide-arrow-item svg[data-v-b8dd9550] {\n  max-width: 130px;\n  right: 35%;\n  position: relative;\n}\n.guide-text[data-v-b8dd9550] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  line-height: 1.618;\n}\n.review-loader[data-v-b8dd9550] {\n  padding: 15px 0;\n}\n.spinner-border[data-v-b8dd9550] {\n  width: 4.1rem;\n  height: 4.1rem;\n  top: -5px;\n  position: relative;\n  left: 2px;\n  border-width: 3px;\n  color: #23ae95;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550] {\n  width: 100%;\n  text-align: right;\n  background: none;\n  padding: 5px 0;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550]:hover {\n  background: initial;\n  border-color: initial;\n  color: #21ad92;\n}\n.message-button-wrapper[data-v-b8dd9550] {\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n  margin: 10px -10px -5px;\n  padding: 10px;\n  overflow: hidden;\n}\n.message-button-wrapper button[data-v-b8dd9550] {\n  display: block;\n  width: 100%;\n  background: #21ad93;\n  text-align: center;\n  color: #fff;\n  border: none;\n  font-size: 16px;\n  padding: 10px 26px;\n  border-radius: 8px;\n}\n.message-button-wrapper button i[data-v-b8dd9550] {\n  width: 15px;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-button-wrapper.link-button button[data-v-b8dd9550] {\n  background: linear-gradient(-45deg, #fea858, #ed765e, #fea858);\n  -webkit-animation: gradient-data-v-b8dd9550 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\n          animation: gradient-data-v-b8dd9550 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\n  background-size: 400% 400%;\n}\n@-webkit-keyframes gradient-data-v-b8dd9550 {\n0% {\n    background-position: 0% 50%;\n}\n50% {\n    background-position: 100% 50%;\n}\n100% {\n    background-position: 0% 50%;\n}\n}\n@keyframes gradient-data-v-b8dd9550 {\n0% {\n    background-position: 0% 50%;\n}\n50% {\n    background-position: 100% 50%;\n}\n100% {\n    background-position: 0% 50%;\n}\n}\n.scale-up-center-full[data-v-b8dd9550] {\n  -webkit-animation: scale-up-center-full-data-v-b8dd9550 0.15s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center-full-data-v-b8dd9550 0.15s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\n@-webkit-keyframes scale-up-center-full-data-v-b8dd9550 {\n0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes scale-up-center-full-data-v-b8dd9550 {\n0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n.message-button-wrapper.link-button button.edit-button[data-v-b8dd9550] {\n  background: #556080;\n}\n.message-button-wrapper.link-button button i.angle-icon[data-v-b8dd9550] {\n  position: relative;\n  top: 2px;\n  margin-right: 6px;\n}\n.message-button-wrapper.link-button button:hover i.angle-icon[data-v-b8dd9550] {\n  -webkit-transform: translateX(-3px);\n          transform: translateX(-3px);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-button-wrapper.link-button button.delsa-button[data-v-b8dd9550] {\n  background: -webkit-gradient(linear, right top, left top, from(#21ad93), to(#4dc0bb));\n  background: linear-gradient(-90deg, #21ad93, #4dc0bb);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-button-wrapper.link-button button.delsa-button[data-v-b8dd9550] {\n  background: linear-gradient(-45deg, #00c569, #23d5ab, #21ad93, #23a6d5);\n  background-size: 400% 400%;\n  -webkit-animation: gradient-data-v-b8dd9550 10s ease infinite;\n          animation: gradient-data-v-b8dd9550 10s ease infinite;\n  color: #fff !important;\n  border: none;\n}\n@keyframes gradient-data-v-b8dd9550 {\n0% {\n    background-position: 0% 50%;\n}\n50% {\n    background-position: 100% 50%;\n}\n100% {\n    background-position: 0% 50%;\n}\n}\n.modal-dialog[data-v-b8dd9550] {\n  width: 400px;\n}\n.modal-content[data-v-b8dd9550] {\n  overflow: hidden;\n  border-radius: 12px;\n}\n.close-modal[data-v-b8dd9550] {\n  font-size: 20px;\n\n  color: #777;\n\n  position: absolute;\n\n  right: 0;\n\n  padding: 8px 15px 2px;\n\n  top: 0;\n}\n.modal-title[data-v-b8dd9550] {\n  font-size: 16px;\n\n  font-weight: 800;\n\n  color: #474747;\n\n  text-align: center;\n}\n.modal-header[data-v-b8dd9550] {\n  padding: 9px 15px 10px;\n}\n.modal-body[data-v-b8dd9550] {\n  padding: 0 15px;\n}\n.messenger-alert[data-v-b8dd9550] {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 48px;\n  border-radius: 50px;\n  padding: 0 3px;\n  top: 52px;\n  z-index: 2;\n  right: 10px;\n}\n.messenger-alert .text-wrapper[data-v-b8dd9550] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.messenger-alert .text-wrapper span[data-v-b8dd9550] {\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1.418;\n}\n.messenger-alert.danger[data-v-b8dd9550] {\n  background: red;\n  color: #fff;\n  border: none;\n  width: calc(100% - 30px);\n}\n.messenger-alert.danger .actions-wrapper button[data-v-b8dd9550] {\n  width: 100px;\n  border-radius: 50px;\n  border: none;\n  background: rgba(255, 255, 255, 1);\n  color: #264653;\n  font-size: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 5px;\n}\n.messenger-alert.danger .actions-wrapper button span[data-v-b8dd9550] {\n  width: 50px;\n  display: inline-block;\n  line-height: 16px;\n}\n.close-alert[data-v-b8dd9550] {\n  background: none;\n  border: none;\n  font-size: 15px;\n  padding: 14px 7px 10px 12px;\n  float: right;\n}\n.delsa-message-item[data-v-b8dd9550] {\n  font-size: 12px;\n  margin: 0 10px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.exclamation-alert[data-v-b8dd9550] {\n  width: 24px;\n  height: 24px;\n  border-radius: 20px;\n  border: none;\n  background: #f03738;\n  color: #fff;\n  text-align: center;\n  padding-top: 2px;\n  padding-right: 4px;\n  position: absolute;\n  right: calc(100% + 13px);\n  font-size: 12px;\n  top: calc(50% - 12px);\n}\n@media screen and (max-width: 1199px) {\n.message-wrapper .message-contact-title[data-v-b8dd9550] {\n    position: relative;\n    z-index: 5;\n}\n}\n@media screen and (max-width: 768px) {\n.messenger-alert[data-v-b8dd9550] {\n    left: 6px;\n    right: 6px;\n    width: calc(100% - 15px) !important;\n}\n#fitler-modal > div[data-v-b8dd9550] {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n}\n.modal-content[data-v-b8dd9550] {\n    min-height: 100%;\n\n    border-radius: 0;\n\n    border: none;\n\n    float: right;\n\n    width: 100%;\n}\n}\n@media screen and (max-width: 767px) {\n.chat-page .bg-wrapper[data-v-b8dd9550] {\n    left: 0;\n}\n.guide-arrow-item[data-v-b8dd9550] {\n    margin-top: 120px;\n}\n.overlay-bg-guide[data-v-b8dd9550] {\n    top: -60px;\n}\n#chat-menu-items[data-v-b8dd9550] {\n    left: 54px;\n}\n.message-wrapper .message-contact-title[data-v-b8dd9550] {\n    padding: 8px;\n}\n.notice-actions[data-v-b8dd9550] {\n    width: 100%;\n}\n.message-button-wrapper button i[data-v-b8dd9550] {\n    font-size: 12px;\n}\n.is-phone-active-wrapper[data-v-b8dd9550] {\n    min-width: 200px;\n}\n.is-phone-active-text[data-v-b8dd9550] {\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 500px) {\n.message-wrapper .message-contact-title a[data-v-b8dd9550] {\n    max-width: 190px;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550]:first-of-type {\n    max-width: 100px;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-b8dd9550] {\n    margin-right: 8px;\n    margin-top: 7px;\n    padding: 4px;\n}\n.verified-user[data-v-b8dd9550] {\n    right: 2px;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n    margin-left: 5px;\n}\n}\n@media screen and (max-width: 365px) {\n.message-wrapper .message-contact-title a[data-v-b8dd9550] {\n    max-width: 180px;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550]:first-of-type {\n    max-width: 90px;\n}\n}\n@media screen and (max-width: 355px) {\n.message-wrapper .message-contact-title a[data-v-b8dd9550] {\n    max-width: 154px;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550]:first-of-type {\n    max-width: 66px;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-b8dd9550] {\n    margin-right: 6px;\n    margin-top: 5px;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n    margin-left: 5px;\n}\n.back-state[data-v-b8dd9550] {\n    padding: 0 0px 0 5px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.isGuideActive,
            expression: "$parent.isGuideActive"
          }
        ],
        staticClass: "overlay-bg-guide hidden-lg"
      },
      [
        _c("div", { staticClass: "guide-arrow-item" }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                width: "122.37",
                height: "122.37",
                viewBox: "0 0 122.37 122.37"
              }
            },
            [
              _c("defs", [
                _c(
                  "pattern",
                  {
                    attrs: {
                      id: "pattern",
                      width: "1",
                      height: "1",
                      patternTransform: "matrix(1, 0, 0, -1, 0, 196)",
                      viewBox: "-0.674 -0.587 98 98"
                    }
                  },
                  [
                    _c("image", {
                      attrs: {
                        preserveAspectRatio: "none",
                        width: "98",
                        height: "98",
                        "xlink:href":
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDItMDZUMTA6Mzg6MTArMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAyLTA2VDEwOjM4OjQzKzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAyLTA2VDEwOjM4OjQzKzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjllZGU0Nzg2LTY2Y2YtNDhkMS1iOTk5LTdjMWViMzZjNTA5MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5ZWRlNDc4Ni02NmNmLTQ4ZDEtYjk5OS03YzFlYjM2YzUwOTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZWRlNDc4Ni02NmNmLTQ4ZDEtYjk5OS03YzFlYjM2YzUwOTAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjllZGU0Nzg2LTY2Y2YtNDhkMS1iOTk5LTdjMWViMzZjNTA5MCIgc3RFdnQ6d2hlbj0iMjAyMS0wMi0wNlQxMDozODoxMCswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+E73F6gAAD3FJREFUeJzt3XmQFOUdxvHvwgpyxIND1JIjEVTAxAWMYkVUVEQ8QEWDpfFIJIpo1HikjFTFqKmooDFqPMHEUmMMHhElgoLG8ohAQCNgVJQgKqJcq66AAsvkj99OGJbZ3pl53+6e7nk+VVsV2Z1fv5p9eN/ufo+qTCaDiOTXIu4GiJQzBUQkgAIiEkABEQmggIgEUEBEAiggIgEUEJEACohIAAVEJIACIhJAAREJoICIBFBARAJUx90AkQC9gX7ATkAtMA9YFGUDFBApN9sDZwAXA33zfP9N4GpgShSNqdKCKSkTHYELGr52KeDnJwFjgPowG6UeROLWC7gUOAtoU8TnRmPhGBNGo7LUg0hcDgYuA4bj9rBoGDDdS4vyUEAkSi2BE7FgDPRUcx6wv6da21BAJArtgJ8AlwDfCaH+EcALIdRVQCRUuwI/w+4TOoR4neeAoWEUVkAkDH2xYdTpQKuIrlmDPQL2Sm/SxacjgGnAQuDHRBcOgF+EUVQ9iLiqBk7FeoyaGNuxCegJLPVZVD2IlGoH4ApgCfAg8YYDLKiX+S6qHkSK1Q2bBjIaC0k5WYe1b7WvgupBpFD9gYeBxdib73ILB0BbbKqKN+pBJEgVcAw2dBkcc1sKtQrrRdb7KKYeRPJpDZyDPY2aSnLCAdAJeynphXoQydUBGAtcCHSJuS0u/gvshYeZvgqIAOyJ3VecjY3j0+BU4K+uRRSQynYQcDlwAukbbr8ODHAtooBUnhZYIC7HApJmQ4CZLgUUkMrRFpv+cQn2xrkSzACOcimggKRfF7bMqO0Yc1vi0B94o9QPp23cKVv0xtZtLwXGUZnhAMdJjOpB0mcwdn8xDHvRVy42Ec8eCPXYkPKDUj6sHiQ9aoDXsJV1x1A+4fg3to3PvTFdvyUOkxjVg6TD8cBkbE+pcjEduAl4vuGf3wL6xNSWdUB3bBpKUdSDJF8/yiccG4D7ge9iQ7xsOHYnvnCAPcG7sJQPKiDJdy/xh6MWuB7ogT1KXtjo+0dG3aA8LqCEWQIKSLIdRohb3hRgCXAR0BW4CljexM+5BmQWsMaxRkmTGBWQZDsupuvOAX6I7Yp4O7C2mZ93DciTwF2ONcBu1lsW8wEFJNl6R3itzdiG0YOAA4FHKWy27L7Abo7XngHcBnztWKcHFuyCKSDJ1jqCa6wH7sHCeALwSpGfd+09VmFvwldgDwBcFfXiUAFJtqbG/D6sBH6NPR4dQ+nnchzr2I7ngey7iJuwnsxFDUXMz1JAku3VEGouwgLRDbgGC0qpvgUc4tieGTn/ezHwhGM9KKIX0YvCZOsAfIjtfevqZeBm4Cm2/I3t6mTsXsVFd+zfMWt/4F+ONcHWirze3A+pB0m2Ndj7h1LVY7/AB2J/00/BXzjA3vC7WMTW4QCYC/zDsS4U2IsoIMl3A7axQjG+wp4K9cKe6szx3Sjsd2uYY41nm/jz8Y51wXq3ZneaV0CSrx4YCdxdwM8ux17oZTd/WxJiuwYCnR1rNBX86cB8x9oFTWJUQNJhA3A+9kv5F2zqR+73XsQ2ZOiBDclqCZ/r8KoOa3dTJjjWB5sWExhi3aSnVydsd/UV2FqMqLnO3n0cGwY1pRp4H7uJd3Ed8KumvqkeJL1WAZ8QTzj64D579+lmvr8JuMXxGmCTGJt8CqiASBhOcfz8ZuCZAn5uEu6TGDtgu0jmpYBIGFwDMovCXlCuBe50vBbYpnl5lwMrIOJbb+wINhfNDa9y3Yb7RtXdgVH5vqGAiG+uvQfYC8tCrcTPJMYr8v2hnmKJbwuwKe6lequEz+8JvEuRaz3yOJpGLyfVg4hPvXELB5Q2dyu0SYwKiPh0pocak0v83I0ern04jZYwKyDiSwvsXHQXbwFvl/jZedieYK626kUUEPFlMLZ5g4tSe48sH5MYT8LuaQAFRPzxMbxyXTvyLPCmY42W2NatgJ5iiR/tgE+B9g41FmIbzrk6DfizY42vsXcjK9SDiA8n4RYOsCOmfZhMiRtV59geOzJCQyzx4izHz28GHvLREPxNYhwLtNMQS1z1xJbGuuwm/zx+tydtiy3VdT0TZax6EHF1Lu5HLTzgoyE51gF3eKgzUj2IuGgFLMMWZ5VqLXZMXHPblxarE9aLtHGosVo9iLgYiVs4wFYO+g4H2IKxPznW2EEBERfneajhe3iV6yYK2z+4KepBpGT7AIc61liKnz2umrIEeMzh83MVEClVSSc2NTIR9712m+MyifER3aRLKXYGPsJty9ON2P5cn3ppUbDJFL+QayFQox5ESvFT3PcDnkI04QB76VfMJnl12JSVegVEilVNwzQMR4XsBOnLKmy2cSETGZcDQ7CVkZpqIkU7GdjDscYi/KzdKMZS4ABspu4Heb6/BnvqtS8wO/uHugeRYs3GftFcXI4dtRCnvbBpMtXYC8UF5HkkrIBIMQYBLznWWI8trFrt3pzwaYglxRjnocYDJCQcoB5ECufjZKcMtmfvO+7NiYZ6ECmUj95jGgkKB6gHkcLsix1Y4zqtfQgw07050VEPIoW4CvdwzCdh4QAFRJq3N3aOoSsfy2AjpyGWNKeUeUyNLcMOzNzg3pxoqQeRIP0JPgatUBNIYDhAPYgEm4bteO5iBXZ4qOsZHrFQDyJNGYR7OAB+R0LDAepBpGkvAwc71qjFdiisc29OPNSDSD4jcA8H2PFoiQ0HqAeRbbXCjiHo6VjnS+zeo9a1QXFSDyKNXYR7OMCmsyc6HKAeRLbWGXgP2NGxzkrsvcdXzi2KmXoQyXUd7uEAuJ4UhAPUg8gW+2HHmLmeFPsR0Av4xrlFZUA9iIBNRLwb93AAXEtKwgEKiJhzgYEe6iwC7vdQp2xoiCW7YIuYdvZQawTwlIc6ZUM9iNyMn3DMJGXhAPUgle5w7HQnV/VAPxo2W0sT9SCVqz0wyVOtiaQwHKAepJLdge1Z6+oL7M37Kg+1yo56kMo0GDjfU61rSWk4QD1IJWqPDYd6eKg1HxiAHb2cSupBKs8E/IQjA4whxeEABaTSDMd+qX2YBLzmqVbZ0hCrcuyODYk6eqi1AjujMPHT2ZujHqQyVGGbRvsIB9jxBakPByggleIK4AhPtWYAD3qqVfY0xEq/gdiZHtt5qFWH7dP7oYdaiaAeJN06A4/iJxxgQ6uKCQeoB0mzlsBz2HwrH2YAR3mqlRjqQdLrOvyF40tgtKdaiaKApNMJwJUe611GhQ2tsjTESp/vAa9iU0p8eAIY6alW4igg6dIFmAN081TvY2wzhzWe6iWOhljp0Rr4G/7CsRk4gwoOByggaTIROMhjvfHAix7rJZKGWOnwW+CXHuvNxjavTvVM3UIoIMl3IXC7x3qrsJOlPvJYM7E0xEq2k4FbPdbbDJyGwvF/CkhyHQY8hN//D6/G3phLAw2xkmkg9ovs610HwFRsQZV+IXIoIMnTH3gBP7uwZy0G9gc+91gzFTTESpa+2AREn+H4AjgOhSMvBSQ5+mK7IPpaFQi2I+IobG9eyUMBSYZ+2Eu7Lp7rXgo867lmqugepPwNBKYBO3muew/+djhJLQWkvB0GPI3fp1VggRuO3pQ3S0Os8jUceAb/4ZgDnILCURAFpDydj63DaOO57nvAscBaz3VTSwEpL1XYCbF34ue8wFyfAUNJ8UbTYaiOuwHyf9sB92FrMHz7HBgGLAmhdqopIOVhF+BxbIq5b3XA0cAbIdROPQUkfv2AJ/G3EjDXeuwt+ewQalcE3YPEaxTwCuGE4xvs1NmXQqhdMRSQeFQDNwKPAG1DqP8NtlZEU9cdaYgVvT2wYPwgpPrrsH2xFA4P1INEK3uzHFY4sjfkCocnCkg0WgE3YG/GO4V0jVrgSODlkOpXJA2xwtcXWxpbE+I1VgJDgDdDvEZFUg8SnhbYnrbzCDcci7Ehm8IRAvUg4eiJHXJ5aMjXmYO951gZ8nUqlnoQv6qxDdwWEH44ngYGo3CESj2IPwOwuVT7RXCte4ALsCWzEiL1IO46Andh0znCDkc9diDnGBSOSKgHKV1L4DzsJKcOEVyvFjgV29VEIqKAlOZw4GbCfTqV6z/YvKr3I7qeNNAQqzj7AdOx7XdqIrrmFGzjBoUjBgpIYb4NPIhNExka0TU3YU/ETsSmkEgMNMQK1hMYB/yIaP9bfYzdb7wa4TUlDwUkv72Bq4DT8b82vDl/B84CVkd8XclDQ6ytHQI8BbwNnEm04diAPcI9HoWjbKgHsc0SRgI/Bw6IqQ3zsc0a5sd0fWlCJQekK/YeYzT+97wtVD0wATu4ZkNMbZAAlRaQ7bDJfWdjG6hFfX+R631sGPdajG2QZlRKQGqwG9/Tgc7xNoVN2EvGa7BdR6SMpTkgfbBHpaOAvWJuS9Zs4Fx0r5EYaQpIFXaTPaLhq0+8zdlKHfbY+E7sJFlJiKQHZGdsHfZQbGvN3eNtzjYy2Bv4K4HlMbdFSpC0gLTDlpcehi0W+j7x3mgHmQVcjK36k4Qq94D0AA4CDsQm7PXHnkSVs2XYHKqH0JHKiVcuAWkD7IPdN9Rg+9X2I5p1Fr6swbb2uR34Oua2iCdRBaQK2w+qK9Ad24u2J9Cr4asHyZ32sha4FRiPHaksKZIvIFXAIGyc3xV7bl+LPYlZB2xky/FdLRu+WmO9QHvsDO8dsaWoHbG31F0o/6FRsdZha8PHA5/G3BYJSeOAHA3cgg13JL8vgTuw/07aUSTlcgMyDvhNXA1JgBXY/cUfsBObpAJkj4EeDUyMuS3lagHWWzyMHSsgFaQqk8l0wSbO+T5uOMk2Y2eJ/x6YGW9TJE7VwFgUjqxlwB+xbUM/jLktUgaqsRVslWwjtlPJfcBUtCGb5KjKZDLr8H9gfRLMBR7ATnvS0yjJqxp7h1EpFgCPAZOBd2JuiyRANfb4cte4GxKSDNZTPIkFY1GsrZHEqQb+CZwUd0M8qsPO6JuKHXn2WbzNkSSrymQyI7C/YZNqIza1fCa2Jeichj8TcVaVyWSqsMPmD467MQWqwwLxSsPXLGxelIh32Tfp3bBftN3ibc421mI31vOwe4m52KZuehQrkcgGBGBP4HGiOSGpsa+wG+h3G74WYBsbLEaLjiRGuQEBu2k/B5ubNQCb+u5qPfakbAXwCfa2ehmwJOdLN9JSlhoHJFd7bHFTB2AHbD349ti6jpbY3+wZ7IZ4IxaEtQ1fX2AzXmsb/lkkkYICIlLxkrrMVSQSCohIAAVEJIACIhJAAREJoICIBFBARAIoICIBFBCRAAqISAAFRCSAAiISQAERCaCAiAT4H18pHuOco75EAAAAAElFTkSuQmCC"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("rect", {
                attrs: {
                  id: "arrow-up-icon",
                  width: "98",
                  height: "98",
                  transform: "translate(28.652 122.37) rotate(-107)",
                  fill: "url(#pattern)"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "guide-text text-rtl" }, [
          _vm._v(
            "\n      در مورد این کاربر نظر دهید و نظرات دیگران را ببینید.\n    "
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "message-contact-title" }, [
      _c(
        "div",
        { staticClass: "contact-title-contents pull-right" },
        [
          _c(
            "button",
            {
              staticClass: "back-state hidden-sm hidden-md hidden-lg",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.$parent.selectedContact = !_vm.$parent.selectedContact
                }
              }
            },
            [_c("i", { staticClass: "fa fa-arrow-right" })]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "message-contact-title-img hidden-sm hidden-md hidden-lg",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.$parent.selectedContact = !_vm.$parent.selectedContact
                }
              }
            },
            [
              _vm.$parent.selectedContact.profile_photo
                ? _c("img", {
                    attrs: {
                      src:
                        _vm.$parent.str +
                        "/" +
                        _vm.$parent.selectedContact.profile_photo,
                      alt: _vm.$parent.selectedContact.first_name[0]
                    }
                  })
                : _c("img", {
                    attrs: { src: __webpack_require__(38) }
                  })
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "message-contact-title-img hidden-xs",
              attrs: {
                to: {
                  path: "/profile/" + _vm.$parent.selectedContact.user_name
                },
                tag: "div"
              }
            },
            [
              _vm.$parent.selectedContact.profile_photo
                ? _c("img", {
                    attrs: {
                      src:
                        _vm.$parent.str +
                        "/" +
                        _vm.$parent.selectedContact.profile_photo,
                      alt: _vm.$parent.selectedContact.first_name[0]
                    }
                  })
                : _c("img", {
                    attrs: { src: __webpack_require__(38) }
                  })
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  path: "/profile/" + _vm.$parent.selectedContact.user_name
                }
              }
            },
            [
              _c("span", [
                _vm._v(
                  "\n          " +
                    _vm._s(
                      _vm.$parent.selectedContact.first_name +
                        " " +
                        _vm.$parent.selectedContact.last_name
                    ) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _vm.$parent.selectedContact.is_verified
                ? _c(
                    "button",
                    {
                      staticClass: "verified-user",
                      attrs: {
                        "data-container": "body",
                        "data-toggle": "popover",
                        "data-placement": "bottom",
                        "data-content": _vm.$parent.verifiedUserContent,
                        title: ""
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-certificate" })]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "commetns-link" }, [
                _vm._v(" نظر کاربران ")
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "head-action-buttons pull-left" }, [
        _c("div", { staticClass: "head-action-buttons pull-left" }, [
          _c(
            "button",
            {
              staticClass: "report-button hidden-lg",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.$parent.activeReportModal(
                    _vm.$parent.selectedContact.contact_id
                  )
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-exclamation-circle" }),
              _vm._v("\n          گزارش تخلف\n        ")
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.$parent.selectedContact
      ? _c("div", { staticClass: "chat-page" }, [
          _c("div", { staticClass: "bg-wrapper" }),
          _vm._v(" "),
          _vm.isAlertActive
            ? _c("button", { staticClass: "messenger-alert danger" }, [
                _c(
                  "button",
                  {
                    staticClass: "close-alert",
                    on: {
                      click: function($event) {
                        _vm.closeWalletAlert()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-times" })]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "text-wrapper",
                    on: {
                      click: function($event) {
                        _vm.showWallet()
                      }
                    }
                  },
                  [
                    _c("span", [
                      _vm._v(
                        "\n          شماره تماس شما به علت عدم موجودی کیف پول شما، به خریدارن نمایش داده\n          نمی شود.\n        "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "actions-wrapper" }, [
                  _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.showWallet()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-plus" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("افزایش موجودی")])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "ul",
            {
              class: [
                _vm.$parent.chatMessagesLoader &&
                _vm.$parent.isFirstMessageLoading
                  ? "chat-not-loaded"
                  : "chat-loaded",
                _vm.isAlertActive ? "padding-top-60" : ""
              ],
              attrs: { id: "chat-list" },
              on: {
                scroll: function($event) {
                  _vm.infinityScroll()
                }
              }
            },
            [
              _vm._l(_vm.$parent.chatMessages, function(msg, index) {
                return _c(
                  "li",
                  {
                    key: msg.id,
                    class: {
                      "margin-top-10": _vm.checkMessageName(index, index - 1)
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "message-item-wrapper",
                        class: [
                          _vm.checkMessageListClass(msg.sender_id)
                            ? "message-send"
                            : "message-receive"
                        ]
                      },
                      [
                        _vm.checkMessageListClass(msg.sender_id) &&
                        msg.phone_locked
                          ? _c(
                              "button",
                              {
                                staticClass: "exclamation-alert",
                                attrs: {
                                  "data-toggle": "modal",
                                  "data-target": "#phone-locked-modal"
                                }
                              },
                              [_c("i", { staticClass: "fa fa-exclamation" })]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        msg.p_id || msg.phone_locked
                          ? _c("span", { staticClass: "delsa-message-item" }, [
                              _vm._v(
                                "\n            ارسال شده توسط ربات خودکار دلسا\n          "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        msg.is_phone &&
                        !_vm.checkMessageListClass(msg.sender_id)
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "message-content-wrapper is-phone-active-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "hidden-sm hidden-md hidden-lg",
                                    attrs: { href: "tel:" + msg.text }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "is-phone-active-text" },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(msg.text) +
                                            "\n              "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "message-chat-date" },
                                      [
                                        msg.created_at
                                          ? _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    msg.created_at,
                                                    "jYYYY/jMM/jDD, HH:mm"
                                                  )
                                                )
                                              )
                                            ])
                                          : _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    Date(),
                                                    "jYYYY/jMM/jDD, HH:mm"
                                                  )
                                                )
                                              )
                                            ]),
                                        _vm._v(" "),
                                        _vm._m(0, true)
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "hidden-xs" }, [
                                  _c("span", {
                                    staticClass: "message-text",
                                    domProps: { textContent: _vm._s(msg.text) }
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
                                                _vm._f("moment")(
                                                  msg.created_at,
                                                  "jYYYY/jMM/jDD, HH:mm"
                                                )
                                              )
                                            )
                                          ])
                                        : _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("moment")(
                                                  Date(),
                                                  "jYYYY/jMM/jDD, HH:mm"
                                                )
                                              )
                                            )
                                          ])
                                    ]
                                  )
                                ])
                              ]
                            )
                          : msg.p_id &&
                            !_vm.checkMessageListClass(msg.sender_id)
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "message-content-wrapper is-phone-active-wrapper"
                              },
                              [
                                _c("div", [
                                  _c("span", {
                                    staticClass: "message-text",
                                    domProps: { textContent: _vm._s(msg.text) }
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
                                                _vm._f("moment")(
                                                  msg.created_at,
                                                  "jYYYY/jMM/jDD, HH:mm"
                                                )
                                              )
                                            )
                                          ])
                                        : _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("moment")(
                                                  Date(),
                                                  "jYYYY/jMM/jDD, HH:mm"
                                                )
                                              )
                                            )
                                          ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "message-button-wrapper link-button"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  _vm.openProduct(msg.p_id)
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-angle-left angle-icon"
                                              }),
                                              _vm._v(
                                                "\n                    جزییات و تصاویر محصول\n                    "
                                              ),
                                              !_vm.openProductLoader
                                                ? _c("i", {
                                                    staticClass:
                                                      "fas fa-clipboard-check"
                                                  })
                                                : _c("i", {
                                                    staticClass:
                                                      "fas fa-circle-notch fa-spin"
                                                  })
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          : msg.p_id &&
                            _vm.checkMessageListClass(msg.sender_id) &&
                            _vm.$parent.currentUser.user_info.is_seller
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "message-content-wrapper is-phone-active-wrapper"
                              },
                              [
                                _c("div", [
                                  _c("span", {
                                    staticClass: "message-text",
                                    domProps: { textContent: _vm._s(msg.text) }
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
                                                _vm._f("moment")(
                                                  msg.created_at,
                                                  "jYYYY/jMM/jDD, HH:mm"
                                                )
                                              )
                                            )
                                          ])
                                        : _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("moment")(
                                                  Date(),
                                                  "jYYYY/jMM/jDD, HH:mm"
                                                )
                                              )
                                            )
                                          ]),
                                      _vm._v(" "),
                                      msg.sender_id ===
                                        _vm.$parent.currentUserId &&
                                      !msg.created_at
                                        ? _c(
                                            "span",
                                            { staticClass: "check-items" },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-clock"
                                              })
                                            ]
                                          )
                                        : msg.sender_id ===
                                            _vm.$parent.currentUserId &&
                                          msg.created_at
                                        ? _c(
                                            "span",
                                            { staticClass: "check-items dual" },
                                            [
                                              msg.is_read
                                                ? _c("i", {
                                                    staticClass: "fa fa-check",
                                                    class: {
                                                      "text-blue": msg.is_read
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-check text-blue"
                                              })
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "message-button-wrapper link-button"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "edit-button",
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  _vm.openEditPriceModal(
                                                    msg.p_id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-angle-left angle-icon"
                                              }),
                                              _vm._v(
                                                "\n                    ویرایش قیمت\n                    "
                                              ),
                                              !_vm.editPriceLoader
                                                ? _c("i", {
                                                    staticClass: "fa fa-edit"
                                                  })
                                                : _c("i", {
                                                    staticClass:
                                                      "fas fa-circle-notch fa-spin"
                                                  })
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          : _c(
                              "div",
                              { staticClass: "message-content-wrapper" },
                              [
                                _c("span", {
                                  staticClass: "message-text",
                                  domProps: { textContent: _vm._s(msg.text) }
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
                                              _vm._f("moment")(
                                                msg.created_at,
                                                "jYYYY/jMM/jDD, HH:mm"
                                              )
                                            )
                                          )
                                        ])
                                      : _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                Date(),
                                                "jYYYY/jMM/jDD, HH:mm"
                                              )
                                            )
                                          )
                                        ]),
                                    _vm._v(" "),
                                    msg.sender_id ===
                                      _vm.$parent.currentUserId &&
                                    !msg.created_at
                                      ? _c(
                                          "span",
                                          { staticClass: "check-items" },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-clock"
                                            })
                                          ]
                                        )
                                      : msg.sender_id ===
                                          _vm.$parent.currentUserId &&
                                        msg.created_at
                                      ? _c(
                                          "span",
                                          { staticClass: "check-items dual" },
                                          [
                                            msg.is_read
                                              ? _c("i", {
                                                  staticClass: "fa fa-check",
                                                  class: {
                                                    "text-blue": msg.is_read
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass:
                                                "fa fa-check text-blue"
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]
                            )
                      ]
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _vm.$parent.isNoticeActive && !_vm.$parent.chatMessagesLoader
                ? _c("li", { staticClass: "messenger-notice" }, [
                    _c("p", { staticClass: "notice-title" }, [
                      _vm._v("\n          اطلاعات هویتی این کاربر\n          "),
                      !_vm.$parent.isCurrentUserVerified
                        ? _c("span", { staticClass: "red-text" }, [
                            _vm._v("مانند اطلاعات هویتی شما")
                          ])
                        : _vm._e(),
                      _vm._v("\n          نزد باسکول احراز "),
                      _c("span", { staticClass: "red-text" }, [
                        _vm._v(" نشده ")
                      ]),
                      _vm._v(" است.\n        ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "notice-actions" },
                      [
                        _c(
                          "button",
                          {
                            on: {
                              click: function($event) {
                                _vm.$parent.setNoticeCookie()
                              }
                            }
                          },
                          [_vm._v("متوجه شدم")]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "button",
                              to: { name: "verificationInfo" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-info" }),
                            _vm._v("\n            اطلاعات بیشتر\n          ")
                          ]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.checkMobileWidth() && _vm.checkReviewIsActive()
                ? _c(
                    "li",
                    {
                      staticClass: "mobile-like-user",
                      class: { success: _vm.$parent.isReviewSubmited }
                    },
                    [
                      !_vm.$parent.isReviewSubmited
                        ? _c("div", [
                            _c(
                              "button",
                              {
                                staticClass: "close-rating",
                                on: {
                                  click: function($event) {
                                    _vm.$parent.setLikeBoxCookie()
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-times" })]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "title-item" }, [
                              _c("span", { staticClass: "gray-text" }, [
                                _vm._v(" از ارتباط با ")
                              ]),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.$parent.selectedContact.first_name +
                                        " " +
                                        _vm.$parent.selectedContact.last_name
                                    ) +
                                    "\n            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            !_vm.$parent.reviewSubmitLoader
                              ? _c("div", { staticClass: "likes-wrapper" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "like",
                                      on: {
                                        click: function($event) {
                                          _vm.$parent.registerReview(5)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-thumbs-up"
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v(" راضی هستم ")])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "dislike",
                                      on: {
                                        click: function($event) {
                                          _vm.$parent.registerReview(1)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-thumbs-up"
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v(" راضی نیستم ")])
                                    ]
                                  )
                                ])
                              : _c("div", { staticClass: "review-loader" }, [
                                  _vm._m(1)
                                ])
                          ])
                        : _c("div", [_vm._m(2)])
                    ]
                  )
                : _vm.checkDelsaInfoBoxIsActive()
                ? _c("li", { staticClass: "mobile-like-user delsa-info-box" }, [
                    _c(
                      "button",
                      {
                        staticClass: "close-rating",
                        on: {
                          click: function($event) {
                            _vm.$parent.delsaInfo = false
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-times" })]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "title-item" }, [
                      _vm._v("منشی آنلاین خود را استخدام کنید.")
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "green-button",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$parent.openDelasModal()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-info-circle" }),
                        _vm._v("\n          اطلاعات بیشتر\n        ")
                      ]
                    )
                  ])
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _vm.$parent.chatMessagesLoader && _vm.$parent.isFirstMessageLoading
            ? _c("div", { staticClass: "loading-container" }, [_vm._m(3)])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "send-message-form" }, [
            _c(
              "form",
              {
                on: {
                  "v-on:submit": function($event) {
                    $event.preventDefault()
                    _vm.$parent.sendMessage()
                  }
                }
              },
              [
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
                    staticClass: "padding-default",
                    attrs: { type: "text", placeholder: "پیغامی بگذارید " },
                    domProps: { value: _vm.$parent.msgToSend },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.$parent, "msgToSend", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "button-wrapper" }, [
                  _c("div", { staticClass: "item-wrapper" }, [
                    _c(
                      "button",
                      {
                        staticClass: "send-message-button scale-up-center-full",
                        attrs: { type: "submit" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$parent.sendMessage()
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
                                transform: "translate(-2510.658 3922.159)",
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
              ]
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "message-button-wrapper" }, [
      _c("button", [
        _vm._v("\n                    تماس\n                    "),
        _c("i", { staticClass: "fa fa-phone-alt" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-border" }, [
      _c("span", { staticClass: "sr-only" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "likes-wrapper" }, [
      _c("div", [_c("i", { staticClass: "fa fa-check" })]),
      _vm._v(" "),
      _c("p", { staticClass: "title-item" }, [
        _vm._v("از ثبت نظر شما سپاسگزاریم.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-wrapper" }, [
      _c("div", { staticClass: "lds-ring" }, [
        _c("div"),
        _vm._v(" "),
        _c("div"),
        _vm._v(" "),
        _c("div"),
        _vm._v(" "),
        _c("div")
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b8dd9550", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_main_channel_wrapper_vue__ = __webpack_require__(390);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5db09dff_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_channel_wrapper_vue__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(611)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5db09dff"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_main_channel_wrapper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5db09dff_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_channel_wrapper_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5db09dff_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_channel_wrapper_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/main-channel-wrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5db09dff", Component.options)
  } else {
    hotAPI.reload("data-v-5db09dff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(612);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("16e45f45", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5db09dff\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-channel-wrapper.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5db09dff\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-channel-wrapper.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(7);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.loading-container[data-v-5db09dff] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  position: relative;\n  align-items: center;\n  z-index: 1;\n  margin-top: 120px;\n}\n.loading-container .lds-ring[data-v-5db09dff] {\n  background: #fff;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n  width: 50px;\n  height: 50px;\n  padding: 4px;\n}\n.loading-container .lds-ring > div[data-v-5db09dff] {\n  width: 30px;\n  height: 30px;\n  border-width: 3px;\n}\n.whatsapp-loading-gif[data-v-5db09dff] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 20%;\n  height: 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.chat-loaded[data-v-5db09dff] {\n  opacity: 1;\n}\n.chat-loaded.load-more-active[data-v-5db09dff] {\n  padding-top: 80px !important;\n}\n.contact-is-search img[data-v-5db09dff] {\n  display: block;\n  width: 60px;\n  margin: 18px auto;\n}\n.clock-icon[data-v-5db09dff] {\n  font-size: 14px;\n}\n.check-items[data-v-5db09dff] {\n  padding-left: 10px;\n  color: #b2b2b2;\n}\n.text-blue[data-v-5db09dff] {\n  color: #60caf1;\n}\n.check-items.dual[data-v-5db09dff] :last-of-type {\n  margin-left: -8px;\n}\n.message-wrapper .message-contact-title[data-v-5db09dff] {\n  font-size: 16px;\n  padding: 7px 15px 8px;\n  float: right;\n  width: 100%;\n  color: #fff;\n  background: -webkit-gradient(linear, right top, left top, from(#21ad93), to(#4dc0bb));\n  background: linear-gradient(-90deg, #21ad93, #4dc0bb);\n}\n.message-contact-title a[data-v-5db09dff] {\n  color: #fafafa;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-contact-title a[data-v-5db09dff]:hover {\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.chat-page .bg-wrapper[data-v-5db09dff] {\n  background: url(" + escape(__webpack_require__(41)) + ") repeat;\n  opacity: 0.06;\n  position: absolute;\n  z-index: 1;\n  left: 15px;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  background-size: contain;\n}\n.chat-page ul[data-v-5db09dff] {\n  background-color: #e5ddd6;\n}\n.chat-page ul li[data-v-5db09dff] {\n  position: relative;\n  z-index: 1;\n}\n.message-wrapper .message-contact-title-img[data-v-5db09dff] {\n  width: 35px;\n  height: 35px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 10px;\n}\n.message-wrapper .message-contact-title-img[data-v-5db09dff]:hover {\n  cursor: pointer;\n}\n.message-wrapper .message-contact-title a[data-v-5db09dff] {\n  float: right;\n  display: block;\n  max-width: 300px;\n  font-size: 15px;\n  color: #fff;\n}\n.message-wrapper .message-contact-title span[data-v-5db09dff]:first-of-type {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: 25px;\n  overflow: hidden;\n  margin-top: 10px;\n  float: right;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-5db09dff] {\n  border-radius: 5px;\n  padding: 4px 7px;\n  margin-right: 12px;\n  margin-top: 6px;\n  background: #fff;\n  color: #23ae94;\n  font-size: 13px;\n  float: right;\n}\n.message-wrapper .message-contact-title span.commetns-link i[data-v-5db09dff] {\n  position: relative;\n  top: 2px;\n  font-size: 12px;\n}\n.back-state[data-v-5db09dff] {\n  background: none;\n  color: #fff;\n  border: none;\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n  padding: 0 6px;\n  float: right;\n}\n.report-button[data-v-5db09dff] {\n  background: none;\n  border: none;\n  padding: 7px 0 0px;\n  font-size: 13px;\n  color: #fff;\n}\n.message-wrapper .chat-page ul[data-v-5db09dff] {\n  padding: 20px 20px 0;\n\n  overflow-x: hidden;\n\n  position: absolute;\n\n  left: 0;\n\n  right: 0;\n\n  bottom: 50px;\n\n  top: 50px;\n\n  -webkit-transition: 100ms;\n\n  transition: 100ms;\n}\n.message-wrapper .chat-page ul li[data-v-5db09dff] {\n  width: 100%;\n  float: right;\n}\n.message-wrapper .chat-page ul li[data-v-5db09dff]:last-of-type {\n  margin-bottom: 10px;\n}\n.message-date[data-v-5db09dff] {\n  text-align: center;\n  margin: 20px auto;\n  color: #313a43;\n  font-size: 14px;\n}\n.message-date span[data-v-5db09dff] {\n  background: #e1f5fe;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n  padding: 3px 10px 0;\n  line-height: 1;\n}\n.message-wrapper .chat-page li > div.message-item-wrapper[data-v-5db09dff] {\n  font-size: 14px;\n  line-height: 1.612;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 8px;\n  margin: 0 auto 3px;\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n  min-width: 100px;\n}\n.message-contents[data-v-5db09dff] {\n  max-width: 455px;\n  float: left;\n  position: relative;\n  margin-top: 20px;\n  width: 100%;\n}\n.message-content-wrapper[data-v-5db09dff] {\n  padding: 5px;\n  display: block;\n  min-width: 200px;\n}\n.message-content-wrapper.product-wrapper[data-v-5db09dff] {\n  padding: 5px 10px;\n  display: block;\n  min-width: 200px;\n  border: 2px solid #00c569;\n  float: right;\n  width: 100%;\n  border-radius: 10px;\n}\n.message-content-wrapper .product-header > p[data-v-5db09dff] {\n  font-size: 17px;\n  color: #474747;\n  font-weight: 500;\n  margin: 13px 0 18px;\n}\n.message-wrapper .chat-page .message-item-wrapper.message-receive[data-v-5db09dff] {\n  float: left;\n  background: #fff;\n  border-radius: 0 8px 8px 8px;\n  width: 100%;\n  position: relative;\n  margin-bottom: 5px;\n}\n.message-wrapper .chat-page .message-receive[data-v-5db09dff]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 6px 9px 0;\n  border-color: transparent #fff transparent transparent;\n  line-height: 0px;\n  _border-color: #000000 #fff #000000 #000000;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n}\n.message-wrapper .chat-page .message-receive.product-item[data-v-5db09dff] {\n  border-radius: 10px;\n}\n.message-wrapper .chat-page .message-receive.product-item[data-v-5db09dff]::after {\n  display: none;\n}\n.message-wrapper .chat-page span.message-chat-date[data-v-5db09dff] {\n  text-align: right;\n  font-size: 13px;\n  padding-top: 3px;\n  width: 100%;\n  direction: ltr;\n  display: block;\n  color: #b2b2b2;\n}\n.product-content-wrapper[data-v-5db09dff] {\n  float: right;\n  width: 100%;\n  padding: 10px 0;\n}\n.message-wrapper .chat-page .product-wrapper span.message-chat-date[data-v-5db09dff] {\n  float: right;\n  width: 100%;\n  border-top: 1px solid #eee;\n  margin-top: 2px;\n  padding: 5px 0;\n}\n.product-title[data-v-5db09dff] {\n  font-weight: 500;\n  color: #474747;\n  padding-top: 3px;\n  font-size: 20px;\n}\n.product-amount i[data-v-5db09dff] {\n  position: relative;\n  top: 2px;\n}\n.product-amount[data-v-5db09dff] {\n  margin-top: 5px;\n  font-size: 17px;\n  font-weight: 500;\n}\n.send-message-form[data-v-5db09dff] {\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.send-message-form > button[data-v-5db09dff] {\n  padding: 12px 10px 17px;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n  border: none;\n  border-top-color: currentcolor;\n  border-top-style: none;\n  border-top-width: medium;\n  border-radius: 0;\n  background: #4eb9fb;\n  position: relative;\n  z-index: 4;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n}\n.send-message-form > button i[data-v-5db09dff] {\n  font-size: 19px;\n  position: relative;\n  height: 18px;\n  line-height: 1;\n  top: 2px;\n  left: 5px;\n}\n.send-message-form > button[data-v-5db09dff]:hover {\n  background: #1da1f2;\n}\n.capture-image[data-v-5db09dff] {\n  position: absolute;\n  font-size: 21px;\n  background: none;\n  border: none;\n  color: #919191;\n  padding: 7px 15px 7px 10px;\n}\n#chat-menu-items[data-v-5db09dff] {\n  position: absolute;\n  left: 15px;\n  z-index: 10;\n  width: 170px;\n  background: #fff;\n  text-align: right;\n  direction: rtl;\n  border-radius: 4px;\n  line-height: 1.618;\n  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  top: 48px;\n  overflow: hidden;\n  padding: 0 !important;\n}\n#chat-menu-items li:last-of-type button[data-v-5db09dff] {\n  border: none;\n}\n#chat-menu-items li button i[data-v-5db09dff] {\n  margin-left: 6px;\n}\n#chat-menu-items li button[data-v-5db09dff] {\n  background: none;\n  color: #777;\n  font-size: 14px;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  text-align: right;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-bottom: 1px solid #dbdbdb;\n}\n#chat-menu-items li button[data-v-5db09dff]:hover {\n  color: #333;\n  background: #eee;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.new-badge[data-v-5db09dff] {\n  position: absolute;\n  right: -16px;\n  background: #e51c38;\n  border-radius: 50px;\n  font-size: 12px;\n  color: #fff;\n  top: -8px;\n  line-height: 1;\n  padding: 4px 2px;\n}\n.messenger-notice[data-v-5db09dff] {\n  text-align: center;\n  background: #fff8c1;\n  padding: 7px;\n  border-radius: 8px;\n  margin-top: 20px;\n  line-height: 1.618;\n  color: #777;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.messenger-notice .notice-title[data-v-5db09dff] {\n  font-size: 13px;\n}\n.message-wrapper .chat-page li > div.notice-actions[data-v-5db09dff] {\n  margin: 3px auto 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.messenger-notice .notice-actions button[data-v-5db09dff] {\n  border: none;\n  color: #21ad92;\n  border-radius: 4px;\n  margin: 2px 7px 0;\n  background: #fff;\n  padding: 2px 15px;\n}\n.messenger-notice .notice-actions button[data-v-5db09dff]:hover {\n  background: #21ad93;\n  border-color: #21ad93;\n  color: #fff;\n}\n.messenger-notice .notice-actions button i[data-v-5db09dff] {\n  margin-left: 7px;\n}\n.verified-user[data-v-5db09dff]::before {\n  top: 3px;\n  left: 3px;\n}\n.verified-user[data-v-5db09dff] {\n  float: right;\n  top: 7px;\n  right: 5px;\n}\n.overlay-bg-guide[data-v-5db09dff] {\n  position: absolute;\n  width: 100%;\n  z-index: 5;\n  background: rgba(0, 0, 0, 0.6);\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.guide-arrow-item[data-v-5db09dff] {\n  margin-top: 80px;\n}\n.guide-arrow-item svg[data-v-5db09dff] {\n  max-width: 130px;\n  right: 35%;\n  position: relative;\n}\n.guide-text[data-v-5db09dff] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  line-height: 1.618;\n}\n.share-button[data-v-5db09dff] {\n  border-radius: 4px;\n  border: none;\n  width: 100%;\n  color: #fff;\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.4);\n\n  font-size: 15px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  display: block;\n  overflow: hidden;\n  text-align: center;\n}\n.share-button i[data-v-5db09dff] {\n  position: relative;\n  top: 2px;\n  left: 2px;\n}\n.share-button[data-v-5db09dff]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.share-button.custom-link[data-v-5db09dff] {\n  background: rgba(56, 72, 95, 0.67);\n\n  -webkit-transition: 0ms;\n\n  transition: 0ms;\n  padding: 9px;\n}\n.share-button.custom-link[data-v-5db09dff]:hover {\n  background: rgba(56, 72, 95, 0.9);\n  -webkit-transition: 0ms;\n  transition: 0ms;\n}\n.forward-item[data-v-5db09dff] {\n  position: absolute;\n  bottom: 0;\n  right: -40px;\n  background: rgba(0, 0, 0, 0.4);\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  border-radius: 50px;\n  text-align: center;\n  color: #fff;\n  font-size: 15px;\n  border: none;\n  padding: 0;\n  padding-top: 5px;\n}\n.forward-item[data-v-5db09dff]:hover {\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n.chat-spinner-wrapper[data-v-5db09dff] {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  width: 46px;\n  height: 46px;\n  background: #fff;\n  border-radius: 45px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin: 55px auto 0;\n}\n.message-text[data-v-5db09dff] {\n  line-height: 1.618;\n  white-space: pre-line;\n  padding: 0 5px;\n  font-size: 16px;\n  display: block;\n}\n.spinner-border[data-v-5db09dff] {\n  color: #00c569;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 3rem;\n  height: 3rem;\n  border-width: 0.29rem;\n}\n.valid-user-badge[data-v-5db09dff] {\n  width: 36px;\n  height: 38px;\n  background: #00c569;\n  position: absolute;\n  left: 14px;\n  top: 0;\n  padding: 2px;\n  border-top: 3px solid #00b761;\n  text-align: center;\n  color: #fff !important;\n}\n.valid-user-badge[data-v-5db09dff]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 18px 14px;\n  border-color: transparent #00c569 transparent #00c569;\n  line-height: 0;\n  _border-color: #000000 #000000 #000000 #6980fe;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -14px;\n}\n@media screen and (max-width: 1199px) {\n.message-contents[data-v-5db09dff] {\n    max-width: 423px;\n}\n.message-wrapper .message-contact-title[data-v-5db09dff] {\n    position: relative;\n    z-index: 5;\n}\n.message-wrapper .chat-page ul li[data-v-5db09dff] {\n    padding-right: 30px;\n}\n}\n@media screen and (max-width: 767px) {\n.chat-page .bg-wrapper[data-v-5db09dff] {\n    left: 0;\n}\n#chat-menu-items[data-v-5db09dff] {\n    left: 54px;\n}\n.message-wrapper .message-contact-title[data-v-5db09dff] {\n    padding: 8px;\n}\n.notice-actions[data-v-5db09dff] {\n    width: 100%;\n}\n.messenger-notice .notice-actions button[data-v-5db09dff] {\n    width: 100%;\n    text-align: right;\n    background: none;\n    padding: 5px 0;\n}\n.messenger-notice .notice-actions button[data-v-5db09dff]:hover {\n    background: initial;\n    border-color: initial;\n    color: #21ad92;\n}\n.message-button-wrapper[data-v-5db09dff] {\n    margin: 0 -10px -5px;\n    overflow: hidden;\n    border-radius: 0 0 4px 4px;\n}\n.message-button-wrapper button[data-v-5db09dff] {\n    display: block;\n    width: 100%;\n    background: #21ad93;\n    text-align: center;\n    color: #fff;\n    border: none;\n    font-size: 14px;\n    padding: 5px;\n    margin-top: 8px;\n}\n.message-button-wrapper button i[data-v-5db09dff] {\n    font-size: 11px;\n}\n.is-phone-active-wrapper[data-v-5db09dff] {\n    min-width: 200px;\n}\n.is-phone-active-text[data-v-5db09dff] {\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 500px) {\n.message-contents[data-v-5db09dff] {\n    max-width: 304px;\n}\n.message-wrapper .message-contact-title a[data-v-5db09dff] {\n    max-width: 190px;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-5db09dff] {\n    margin-right: 8px;\n    margin-top: 7px;\n    padding: 4px;\n}\n.verified-user[data-v-5db09dff] {\n    right: 2px;\n}\n.message-wrapper .message-contact-title-img[data-v-5db09dff] {\n    margin-left: 5px;\n}\n}\n@media screen and (max-width: 376px) {\n.message-contents[data-v-5db09dff] {\n    max-width: 289px;\n}\n}\n@media screen and (max-width: 365px) {\n.message-wrapper .message-contact-title a[data-v-5db09dff] {\n    max-width: 180px;\n}\n}\n@media screen and (max-width: 355px) {\n.message-wrapper .chat-page ul li[data-v-5db09dff] {\n    padding-right: 0;\n}\n.forward-item[data-v-5db09dff] {\n    display: none;\n}\n.message-wrapper .message-contact-title a[data-v-5db09dff] {\n    max-width: 154px;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-5db09dff] {\n    margin-right: 6px;\n    margin-top: 5px;\n}\n.message-wrapper .message-contact-title-img[data-v-5db09dff] {\n    margin-left: 5px;\n}\n.back-state[data-v-5db09dff] {\n    padding: 0 0px 0 5px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_messege_image_vue__ = __webpack_require__(391);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00d43b82_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_messege_image_vue__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(614)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00d43b82"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_messege_image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00d43b82_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_messege_image_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00d43b82_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_messege_image_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/messege-image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00d43b82", Component.options)
  } else {
    hotAPI.reload("data-v-00d43b82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(615);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("96a23e20", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-00d43b82\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messege-image.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-00d43b82\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messege-image.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(239), "");

// module
exports.push([module.i, "\n.message-image[data-v-00d43b82] {\n  text-align: center;\n  height: 445px;\n  position: relative;\n  overflow: hidden;\n  background: #eee;\n  margin-bottom: 15px;\n}\n.message-image a[data-v-00d43b82] {\n  display: block;\n}\n.message-image a img[data-v-00d43b82] {\n  width: 100%;\n  height: initial;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.message-product-image[data-v-00d43b82] {\n  width: 100%;\n  height: 431px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n  float: right;\n  background: #eee;\n}\n.message-product-image img[data-v-00d43b82] {\n  width: 100%;\n  height: initial;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.spinner-wrapper[data-v-00d43b82] {\n  position: relative;\n  top: calc(50% - 25px);\n  text-align: center;\n}\n.spinner-border[data-v-00d43b82] {\n  width: 5rem;\n  height: 5rem;\n  border-width: 0.35rem;\n  color: #21ad93;\n}\n.set-height[data-v-00d43b82] {\n  width: initial !important;\n  height: 100% !important;\n}\n@media screen and (max-width: 1199px) {\n.message-image[data-v-00d43b82] {\n    height: 413px;\n}\n.message-product-image[data-v-00d43b82] {\n    height: 399px;\n}\n}\n@media screen and (max-width: 500px) {\n.message-image[data-v-00d43b82] {\n    height: 288px;\n}\n.message-product-image[data-v-00d43b82] {\n    height: 280px;\n}\n}\n@media screen and (max-width: 375px) {\n.message-image[data-v-00d43b82] {\n    height: 279px;\n}\n.message-product-image[data-v-00d43b82] {\n    height: 265px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.img
    ? _c(
        "div",
        {
          class: {
            "message-image": !_vm.isProduct,
            "message-product-image": _vm.isProduct
          }
        },
        [
          _c("div", { staticClass: "spinner-wrapper" }, [
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
                staticClass: "spinner-border"
              },
              [_c("span", { staticClass: "sr-only" })]
            )
          ]),
          _vm._v(" "),
          !_vm.isProduct
            ? _c("div", { staticClass: "h-100" }, [
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
                    ],
                    staticClass: "image-popup-no-margins",
                    attrs: { href: _vm.base + "/" + _vm.img }
                  },
                  [
                    _c("img", {
                      attrs: {
                        id: _vm.imgId,
                        src: _vm.base + "/" + _vm.img,
                        alt: _vm.alt
                      },
                      on: { load: _vm.ImageLoaded }
                    })
                  ]
                )
              ])
            : _c("div", { staticClass: "h-100" }, [
                _c("img", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isImageLoad,
                      expression: "isImageLoad"
                    }
                  ],
                  attrs: {
                    id: _vm.imgId,
                    src: _vm.base + "/" + _vm.img,
                    alt: _vm.alt
                  },
                  on: { load: _vm.ImageLoaded }
                })
              ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00d43b82", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "message-contact-title" }, [
      _c("div", { staticClass: "contact-title-contents pull-right" }, [
        _c(
          "button",
          {
            staticClass: "back-state hidden-sm hidden-md hidden-lg",
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$parent.isChanleActive = !_vm.$parent.isChanleActive
              }
            }
          },
          [_c("i", { staticClass: "fa fa-arrow-right" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "message-contact-title-img hidden-sm hidden-md hidden-lg",
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$parent.isChanleActive = !_vm.$parent.isChanleActive
              }
            }
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(238)
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: { href: "" },
            on: {
              click: function($event) {
                $event.preventDefault()
              }
            }
          },
          [
            _c("span", [_vm._v(" کانال رسمی باسکول ")]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "verified-user",
                attrs: {
                  "data-container": "body",
                  "data-toggle": "popover",
                  "data-placement": "bottom",
                  "data-content": _vm.$parent.verifiedUserContent,
                  title: ""
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-certificate" })]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.$parent.activeChanel
      ? _c("div", { staticClass: "chat-page" }, [
          _c("div", { staticClass: "bg-wrapper" }),
          _vm._v(" "),
          _vm.loadMoreContacts
            ? _c("div", { staticClass: "chat-spinner-wrapper" }, [_vm._m(1)])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "ul",
            {
              class: [
                _vm.isChannelContentLoaded ? "chat-not-loaded" : "chat-loaded",
                _vm.loadMoreContacts ? "load-more-active" : ""
              ]
            },
            [
              _vm.channelMessages.length == 0 && !_vm.isChannelContentLoaded
                ? _c("li", { staticClass: "messenger-notice" }, [
                    _c("p", { staticClass: "notice-title" }, [
                      _vm._v(
                        "\n          جدید ترین اخبار و اطلاعیه ها در کانال رسمی باسکول به زودی ارسال\n          خواهد شد.\n        "
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.channelMessages, function(msg) {
                return _c("li", { key: msg.id }, [
                  _c("div", { staticClass: "message-contents" }, [
                    _c(
                      "div",
                      {
                        staticClass: "message-item-wrapper message-receive",
                        class: { "product-item": msg.is_product }
                      },
                      [
                        msg.is_product
                          ? _c(
                              "router-link",
                              {
                                staticClass:
                                  "message-content-wrapper product-wrapper",
                                attrs: {
                                  target: "_blank",
                                  to: { path: _vm.getProductUrl(msg) }
                                }
                              },
                              [
                                _c("div", { staticClass: "product-header" }, [
                                  _c("p", [_vm._v("محصول پیشنهادی")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "valid-user-badge" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "wrapper-icon" },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              attrs: {
                                                width: "24.965",
                                                height: "30.574",
                                                viewBox: "0 0 24.965 30.574"
                                              }
                                            },
                                            [
                                              _c(
                                                "g",
                                                {
                                                  attrs: {
                                                    id: "buskool-icon",
                                                    "data-name": "buskool",
                                                    transform:
                                                      "translate(-273.1 -715.025)"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      id: "Subtraction_1",
                                                      "data-name":
                                                        "Subtraction 1",
                                                      d:
                                                        "M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z",
                                                      transform:
                                                        "translate(2237.1 709.808)",
                                                      fill: "#fff"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "g",
                                                    {
                                                      attrs: {
                                                        id: "Group_24",
                                                        "data-name": "Group 24"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          id: "Rectangle_12",
                                                          "data-name":
                                                            "Rectangle 12",
                                                          d:
                                                            "M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z",
                                                          transform:
                                                            "translate(282.389 717.5) rotate(45)",
                                                          fill: "#fff"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          id: "Rectangle_13",
                                                          "data-name":
                                                            "Rectangle 13",
                                                          d:
                                                            "M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z",
                                                          transform:
                                                            "translate(294.935 718.561) rotate(135)",
                                                          fill: "#fff"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("message-image", {
                                  attrs: {
                                    img: msg.file_path,
                                    base: _vm.$parent.str,
                                    alt: msg.text,
                                    "img-id": msg.id,
                                    "is-product": true
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "product-content-wrapper" },
                                  [
                                    _c("p", {
                                      staticClass: "message-text product-title",
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.getProductInfo(msg.text, true)
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "message-text gray-text product-amount"
                                      },
                                      [
                                        _c("span", {
                                          domProps: {
                                            textContent: _vm._s(
                                              "موجودی : " +
                                                _vm.productAmount(msg.text)
                                            )
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "message-chat-date" },
                                  [
                                    msg.created_at
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                msg.created_at,
                                                "jYYYY/jMM/jDD, HH:mm"
                                              )
                                            )
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ],
                              1
                            )
                          : _c(
                              "div",
                              { staticClass: "message-content-wrapper" },
                              [
                                _c("message-image", {
                                  attrs: {
                                    img: msg.file_path,
                                    base: _vm.$parent.str,
                                    alt: msg.text,
                                    "img-id": msg.id
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass: "message-text",
                                  domProps: { textContent: _vm._s(msg.text) }
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
                                              _vm._f("moment")(
                                                msg.created_at,
                                                "jYYYY/jMM/jDD, HH:mm"
                                              )
                                            )
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ],
                              1
                            ),
                        _vm._v(" "),
                        msg.is_sharable
                          ? _c(
                              "button",
                              {
                                staticClass: "forward-item",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.shareContetn(msg.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-share-alt" })]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    msg.is_sharable
                      ? _c(
                          "button",
                          {
                            staticClass: "share-button",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.shareContetn(msg.id)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-share-alt" }),
                            _vm._v(
                              "\n            ارسال برای دوستان\n          "
                            )
                          ]
                        )
                      : msg.cta_link
                      ? _c(
                          "a",
                          {
                            staticClass: "share-button custom-link",
                            attrs: { href: msg.cta_link, target: "_blank" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-link" }),
                            _vm._v(
                              "\n            " +
                                _vm._s(msg.cta_text) +
                                "\n          "
                            )
                          ]
                        )
                      : _vm._e()
                  ])
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.isChannelContentLoaded
            ? _c("div", { staticClass: "loading-container" }, [_vm._m(2)])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "send-message-form" }, [
            _c(
              "button",
              {
                staticClass: "btn",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.shareMyProfile()
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-address-card" }),
                _vm._v("\n        ارسال پروفایل تجاری شما به دوستان\n      ")
              ]
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "message-contact-title-img hidden-xs",
        attrs: { tag: "div" }
      },
      [
        _c("img", {
          attrs: { src: __webpack_require__(238) }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-border" }, [
      _c("span", { staticClass: "sr-only" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-wrapper" }, [
      _c("div", { staticClass: "lds-ring" }, [
        _c("div"),
        _vm._v(" "),
        _c("div"),
        _vm._v(" "),
        _c("div"),
        _vm._v(" "),
        _c("div")
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5db09dff", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "main-content col-xs-12",
      class: {
        "is-fix-alert": _vm.isRequiredFixAlert,
        "is-guide-active": _vm.selectedContact || _vm.isChanleActive
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-xs-12 contact-wrapper pull-right col-sm-4 col-lg-3",
          class: [
            {
              hidden_element: _vm.selectedContact || _vm.isChanleActive
            }
          ]
        },
        [
          _c(
            "div",
            { staticClass: "row" },
            [_c("router-view", { attrs: { name: "messenger-list" } })],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.selectedContact || _vm.isChanleActive
        ? _c(
            "div",
            {
              staticClass: "col-xs-12 pull-right message-wrapper col-sm-8",
              class: [
                {
                  "col-lg-6": !_vm.isChanleActive,
                  "col-lg-9": _vm.isChanleActive
                }
              ]
            },
            [
              _vm.isChanleActive
                ? _c("main-channel-wrapper")
                : _c("main-chat-wrapper")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.selectedContact && _vm.isCurrentStep == 0 && !_vm.isChanleActive
        ? _c(
            "div",
            {
              staticClass:
                "col-xs-12 default-message-wrapper hidden-xs col-sm-8 col-lg-9"
            },
            [
              _vm.userType
                ? _c(
                    "div",
                    { staticClass: "default-main-contents delsa-box" },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm.currentUser.user_info.active_pakage_type > 0
                        ? _c("div", { staticClass: "col-xs-12" }, [
                            _c("i", {
                              staticClass:
                                "fa fa-check light-green-text check-icon-title"
                            }),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "delsa-title-active light-green-text"
                              },
                              [
                                _vm._v(
                                  "\n          منشی آنلاین شما (دلسا) فعال است.\n        "
                                )
                              ]
                            )
                          ])
                        : _c(
                            "div",
                            { staticClass: "col-xs-12" },
                            [
                              _c(
                                "p",
                                { staticClass: "delsa-text text-right" },
                                [_vm._v("سلام")]
                              ),
                              _vm._v(" "),
                              _vm._m(1),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "delsa-text text-right" },
                                [
                                  _vm._v(
                                    "\n          کار اصلی من بازاریابی برای محصولات شماست. اگر مایل هستید بازاریابی\n          بیشتری برای محصولات شما انجام بدهم کافی است نوع عضویت خود را ارتقا\n          دهید.\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass: "green-button hover-effect",
                                  attrs: {
                                    to: { name: "dashboardPricingTableSeller" }
                                  }
                                },
                                [_vm._v("\n          ارتقا عضویت\n        ")]
                              )
                            ],
                            1
                          )
                    ]
                  )
                : _c("div", { staticClass: "default-main-contents" }, [
                    _c("img", {
                      attrs: {
                        src: __webpack_require__(295),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "title-item" }, [
                      _vm._v("برای شروع چت لطفا یک مخاطب انتخاب کنید")
                    ])
                  ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.selectedContact && !_vm.isChanleActive
        ? _c(
            "div",
            {
              staticClass:
                "contact-wrapper pull-left hiiden-sm hidden-xs col-lg-3",
              class: { hidden_element: !_vm.selectedContact }
            },
            [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _vm.selectedContact
                    ? _c("chat-user-info", {
                        attrs: { "selected-contact": _vm.selectedContact }
                      })
                    : _vm._e()
                ],
                1
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "delsa-image" }, [
      _c("img", {
        attrs: { src: __webpack_require__(619), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "delsa-title text-right" }, [
      _c("i", { staticClass: "fas fa-chess-queen light-green-text" }),
      _vm._v("\n          من دلسا هستم\n          "),
      _c("small", [_vm._v(" (ربات خودکار باسکول) ")])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fac3fde", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "/images/delsa-messenger.svg?bafa2308df776bb411a8e85cbe89e49a";

/***/ })

});