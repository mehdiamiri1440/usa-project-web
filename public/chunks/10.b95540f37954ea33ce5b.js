webpackJsonp([10],{

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_verification_vue__ = __webpack_require__(450);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e506d528_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_verification_vue__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(763)
  __webpack_require__(765)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e506d528"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_verification_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e506d528_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_verification_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e506d528_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_verification_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\buyer\\profile\\profile_verification.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e506d528", Component.options)
  } else {
    hotAPI.reload("data-v-e506d528", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, Promise */

;(function ($) {
  'use strict'

  var urlAPI = $.URL || $.webkitURL

  /**
   * Creates an object URL for a given File object.
   *
   * @param {Blob} blob Blob object
   * @returns {string|boolean} Returns object URL if API exists, else false.
   */
  function createObjectURL(blob) {
    return urlAPI ? urlAPI.createObjectURL(blob) : false
  }

  /**
   * Revokes a given object URL.
   *
   * @param {string} url Blob object URL
   * @returns {undefined|boolean} Returns undefined if API exists, else false.
   */
  function revokeObjectURL(url) {
    return urlAPI ? urlAPI.revokeObjectURL(url) : false
  }

  /**
   * Helper function to revoke an object URL
   *
   * @param {string} url Blob Object URL
   * @param {object} [options] Options object
   */
  function revokeHelper(url, options) {
    if (url && url.slice(0, 5) === 'blob:' && !(options && options.noRevoke)) {
      revokeObjectURL(url)
    }
  }

  /**
   * Loads a given File object via FileReader interface.
   *
   * @param {Blob} file Blob object
   * @param {Function} onload Load event callback
   * @param {Function} [onerror] Error/Abort event callback
   * @param {string} [method=readAsDataURL] FileReader method
   * @returns {FileReader|boolean} Returns FileReader if API exists, else false.
   */
  function readFile(file, onload, onerror, method) {
    if (!$.FileReader) return false
    var reader = new FileReader()
    reader.onload = function () {
      onload.call(reader, this.result)
    }
    if (onerror) {
      reader.onabort = reader.onerror = function () {
        onerror.call(reader, this.error)
      }
    }
    var readerMethod = reader[method || 'readAsDataURL']
    if (readerMethod) {
      readerMethod.call(reader, file)
      return reader
    }
  }

  /**
   * Cross-frame instanceof check.
   *
   * @param {string} type Instance type
   * @param {object} obj Object instance
   * @returns {boolean} Returns true if the object is of the given instance.
   */
  function isInstanceOf(type, obj) {
    // Cross-frame instanceof check
    return Object.prototype.toString.call(obj) === '[object ' + type + ']'
  }

  /**
   * @typedef { HTMLImageElement|HTMLCanvasElement } Result
   */

  /**
   * Loads an image for a given File object.
   *
   * @param {Blob|string} file Blob object or image URL
   * @param {Function|object} [callback] Image load event callback or options
   * @param {object} [options] Options object
   * @returns {HTMLImageElement|FileReader|Promise<Result>} Object
   */
  function loadImage(file, callback, options) {
    /**
     * Promise executor
     *
     * @param {Function} resolve Resolution function
     * @param {Function} reject Rejection function
     * @returns {HTMLImageElement|FileReader} Object
     */
    function executor(resolve, reject) {
      var img = document.createElement('img')
      var url
      /**
       * Callback for the fetchBlob call.
       *
       * @param {HTMLImageElement|HTMLCanvasElement} img Error object
       * @param {object} data Data object
       * @returns {undefined} Undefined
       */
      function resolveWrapper(img, data) {
        if (resolve === reject) {
          // Not using Promises
          if (resolve) resolve(img, data)
          return
        } else if (img instanceof Error) {
          reject(img)
          return
        }
        data = data || {} // eslint-disable-line no-param-reassign
        data.image = img
        resolve(data)
      }
      /**
       * Callback for the fetchBlob call.
       *
       * @param {Blob} blob Blob object
       * @param {Error} err Error object
       */
      function fetchBlobCallback(blob, err) {
        if (err && $.console) console.log(err) // eslint-disable-line no-console
        if (blob && isInstanceOf('Blob', blob)) {
          file = blob // eslint-disable-line no-param-reassign
          url = createObjectURL(file)
        } else {
          url = file
          if (options && options.crossOrigin) {
            img.crossOrigin = options.crossOrigin
          }
        }
        img.src = url
      }
      img.onerror = function (event) {
        revokeHelper(url, options)
        if (reject) reject.call(img, event)
      }
      img.onload = function () {
        revokeHelper(url, options)
        var data = {
          originalWidth: img.naturalWidth || img.width,
          originalHeight: img.naturalHeight || img.height
        }
        try {
          loadImage.transform(img, options, resolveWrapper, file, data)
        } catch (error) {
          if (reject) reject(error)
        }
      }
      if (typeof file === 'string') {
        if (loadImage.requiresMetaData(options)) {
          loadImage.fetchBlob(file, fetchBlobCallback, options)
        } else {
          fetchBlobCallback()
        }
        return img
      } else if (isInstanceOf('Blob', file) || isInstanceOf('File', file)) {
        url = createObjectURL(file)
        if (url) {
          img.src = url
          return img
        }
        return readFile(
          file,
          function (url) {
            img.src = url
          },
          reject
        )
      }
    }
    if ($.Promise && typeof callback !== 'function') {
      options = callback // eslint-disable-line no-param-reassign
      return new Promise(executor)
    }
    return executor(callback, callback)
  }

  // Determines if metadata should be loaded automatically.
  // Requires the load image meta extension to load metadata.
  loadImage.requiresMetaData = function (options) {
    return options && options.meta
  }

  // If the callback given to this function returns a blob, it is used as image
  // source instead of the original url and overrides the file argument used in
  // the onload and onerror event callbacks:
  loadImage.fetchBlob = function (url, callback) {
    callback()
  }

  loadImage.transform = function (img, options, callback, file, data) {
    callback(img, data)
  }

  loadImage.global = $
  loadImage.readFile = readFile
  loadImage.isInstanceOf = isInstanceOf
  loadImage.createObjectURL = createObjectURL
  loadImage.revokeObjectURL = revokeObjectURL

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return loadImage
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    module.exports = loadImage
  } else {
    $.loadImage = loadImage
  }
})((typeof window !== 'undefined' && window) || this)


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Meta
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Image metadata handling implementation
 * based on the help and contribution of
 * Achim Stöhr.
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, Promise, DataView, Uint8Array, ArrayBuffer */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(203)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var global = loadImage.global
  var originalTransform = loadImage.transform

  var blobSlice =
    global.Blob &&
    (Blob.prototype.slice ||
      Blob.prototype.webkitSlice ||
      Blob.prototype.mozSlice)

  var bufferSlice =
    (global.ArrayBuffer && ArrayBuffer.prototype.slice) ||
    function (begin, end) {
      // Polyfill for IE10, which does not support ArrayBuffer.slice
      // eslint-disable-next-line no-param-reassign
      end = end || this.byteLength - begin
      var arr1 = new Uint8Array(this, begin, end)
      var arr2 = new Uint8Array(end)
      arr2.set(arr1)
      return arr2.buffer
    }

  var metaDataParsers = {
    jpeg: {
      0xffe1: [], // APP1 marker
      0xffed: [] // APP13 marker
    }
  }

  /**
   * Parses image metadata and calls the callback with an object argument
   * with the following property:
   * - imageHead: The complete image head as ArrayBuffer
   * The options argument accepts an object and supports the following
   * properties:
   * - maxMetaDataSize: Defines the maximum number of bytes to parse.
   * - disableImageHead: Disables creating the imageHead property.
   *
   * @param {Blob} file Blob object
   * @param {Function} [callback] Callback function
   * @param {object} [options] Parsing options
   * @param {object} [data] Result data object
   * @returns {Promise<object>|undefined} Returns Promise if no callback given.
   */
  function parseMetaData(file, callback, options, data) {
    var that = this
    /**
     * Promise executor
     *
     * @param {Function} resolve Resolution function
     * @param {Function} reject Rejection function
     * @returns {undefined} Undefined
     */
    function executor(resolve, reject) {
      if (
        !(
          global.DataView &&
          blobSlice &&
          file &&
          file.size >= 12 &&
          file.type === 'image/jpeg'
        )
      ) {
        // Nothing to parse
        return resolve(data)
      }
      // 256 KiB should contain all EXIF/ICC/IPTC segments:
      var maxMetaDataSize = options.maxMetaDataSize || 262144
      if (
        !loadImage.readFile(
          blobSlice.call(file, 0, maxMetaDataSize),
          function (buffer) {
            // Note on endianness:
            // Since the marker and length bytes in JPEG files are always
            // stored in big endian order, we can leave the endian parameter
            // of the DataView methods undefined, defaulting to big endian.
            var dataView = new DataView(buffer)
            // Check for the JPEG marker (0xffd8):
            if (dataView.getUint16(0) !== 0xffd8) {
              return reject(
                new Error('Invalid JPEG file: Missing JPEG marker.')
              )
            }
            var offset = 2
            var maxOffset = dataView.byteLength - 4
            var headLength = offset
            var markerBytes
            var markerLength
            var parsers
            var i
            while (offset < maxOffset) {
              markerBytes = dataView.getUint16(offset)
              // Search for APPn (0xffeN) and COM (0xfffe) markers,
              // which contain application-specific metadata like
              // Exif, ICC and IPTC data and text comments:
              if (
                (markerBytes >= 0xffe0 && markerBytes <= 0xffef) ||
                markerBytes === 0xfffe
              ) {
                // The marker bytes (2) are always followed by
                // the length bytes (2), indicating the length of the
                // marker segment, which includes the length bytes,
                // but not the marker bytes, so we add 2:
                markerLength = dataView.getUint16(offset + 2) + 2
                if (offset + markerLength > dataView.byteLength) {
                  // eslint-disable-next-line no-console
                  console.log('Invalid JPEG metadata: Invalid segment size.')
                  break
                }
                parsers = metaDataParsers.jpeg[markerBytes]
                if (parsers && !options.disableMetaDataParsers) {
                  for (i = 0; i < parsers.length; i += 1) {
                    parsers[i].call(
                      that,
                      dataView,
                      offset,
                      markerLength,
                      data,
                      options
                    )
                  }
                }
                offset += markerLength
                headLength = offset
              } else {
                // Not an APPn or COM marker, probably safe to
                // assume that this is the end of the metadata
                break
              }
            }
            // Meta length must be longer than JPEG marker (2)
            // plus APPn marker (2), followed by length bytes (2):
            if (!options.disableImageHead && headLength > 6) {
              data.imageHead = bufferSlice.call(buffer, 0, headLength)
            }
            resolve(data)
          },
          reject,
          'readAsArrayBuffer'
        )
      ) {
        // No support for the FileReader interface, nothing to parse
        resolve(data)
      }
    }
    options = options || {} // eslint-disable-line no-param-reassign
    if (global.Promise && typeof callback !== 'function') {
      options = callback || {} // eslint-disable-line no-param-reassign
      data = options // eslint-disable-line no-param-reassign
      return new Promise(executor)
    }
    data = data || {} // eslint-disable-line no-param-reassign
    return executor(callback, callback)
  }

  /**
   * Replaces the head of a JPEG Blob
   *
   * @param {Blob} blob Blob object
   * @param {ArrayBuffer} oldHead Old JPEG head
   * @param {ArrayBuffer} newHead New JPEG head
   * @returns {Blob} Combined Blob
   */
  function replaceJPEGHead(blob, oldHead, newHead) {
    if (!blob || !oldHead || !newHead) return null
    return new Blob([newHead, blobSlice.call(blob, oldHead.byteLength)], {
      type: 'image/jpeg'
    })
  }

  /**
   * Replaces the image head of a JPEG blob with the given one.
   * Returns a Promise or calls the callback with the new Blob.
   *
   * @param {Blob} blob Blob object
   * @param {ArrayBuffer} head New JPEG head
   * @param {Function} [callback] Callback function
   * @returns {Promise<Blob|null>|undefined} Combined Blob
   */
  function replaceHead(blob, head, callback) {
    var options = { maxMetaDataSize: 256, disableMetaDataParsers: true }
    if (!callback && global.Promise) {
      return parseMetaData(blob, options).then(function (data) {
        return replaceJPEGHead(blob, data.imageHead, head)
      })
    }
    parseMetaData(
      blob,
      function (data) {
        callback(replaceJPEGHead(blob, data.imageHead, head))
      },
      options
    )
  }

  loadImage.transform = function (img, options, callback, file, data) {
    if (loadImage.requiresMetaData(options)) {
      data = data || {} // eslint-disable-line no-param-reassign
      parseMetaData(
        file,
        function (result) {
          if (result !== data) {
            // eslint-disable-next-line no-console
            if (global.console) console.log(result)
            result = data // eslint-disable-line no-param-reassign
          }
          originalTransform.call(
            loadImage,
            img,
            options,
            callback,
            file,
            result
          )
        },
        options,
        data
      )
    } else {
      originalTransform.apply(loadImage, arguments)
    }
  }

  loadImage.blobSlice = blobSlice
  loadImage.bufferSlice = bufferSlice
  loadImage.replaceHead = replaceHead
  loadImage.parseMetaData = parseMetaData
  loadImage.metaDataParsers = metaDataParsers
})


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blueimp_load_image__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blueimp_load_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blueimp_load_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xkeshi_image_compressor__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xkeshi_image_compressor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__xkeshi_image_compressor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_upload_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_upload_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_upload_component__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// import Cropper from 'cropperjs'


/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["uploadName", "uploadAccept", "uploadMinSize", "uploadSize", "uploadMultiple", "uploadDropDirectory", "uploadAddIndex", "uploadThread", "uploadUploadAuto", "imageWrapperSize", "isCompressor", "isImageReset", "imageAccessUploadCount", "maximum", "articleImages"],
  components: {
    FileUpload: __WEBPACK_IMPORTED_MODULE_2_vue_upload_component___default.a
  },
  data: function data() {
    return {
      files: [],
      accept: "image/png,image/gif,image/jpeg,image/webp",
      extensions: "gif,jpg,jpeg,png,webp",
      minSize: 1024,
      size: 1024 * 1024 * 10,
      multiple: true,
      directory: false,
      drop: true,
      dropDirectory: true,
      createDirectory: false,
      addIndex: false,
      thread: 3,
      isOption: false,
      addData: {
        show: false,
        name: "",
        type: "",
        content: ""
      },
      editFile: {
        show: false,
        name: ""
      },
      fileSizeBeforeCrop: null,
      autoCompress: 512 * 512
    };
  },

  methods: {
    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    inputFilter: function inputFilter(newFile, oldFile, prevent) {
      var _this = this;

      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }
        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
        // Automatic compression
        // 自动压缩
        if (newFile.file && newFile.type.substr(0, 6) === "image/" && this.autoCompress > 0 && this.autoCompress < newFile.size) {
          newFile.error = "compressing";
          this.$parent.isCompressor = true;

          var Options = {
            checkOrientation: true,
            quality: 0.6,
            convertSize: 1000000,
            minWidth: 512,
            minHeight: 512
          };

          var finalOrientation = 1;

          var imageCompressor = new __WEBPACK_IMPORTED_MODULE_1__xkeshi_image_compressor___default.a(null, Options);
          var self = this;

          imageCompressor.compress(newFile.file, Options).then(function (file) {
            self.getOrientation(newFile.file, function (orientation) {
              // console.log(orientation);
              if (orientation == 6) {
                finalOrientation = 8;
              } else if (orientation != 1) {
                finalOrientation = 1;
              }
              __WEBPACK_IMPORTED_MODULE_0_blueimp_load_image___default()(file, {
                orientation: finalOrientation,
                meta: true,
                canvas: true,
                maxWidth: 800
              }).then(function (data) {
                if (!data.imageHead) throw new Error("Could not parse image metadata");
                return new Promise(function (resolve) {
                  data.image.toBlob(function (blob) {
                    data.blob = blob;
                    resolve(data);
                  }, "image/jpeg");
                });
              }).then(function (data) {
                return __WEBPACK_IMPORTED_MODULE_0_blueimp_load_image___default.a.replaceHead(data.blob, data.imageHead);
              }).then(function (blob) {
                self.$refs.upload.update(newFile, {
                  error: "",
                  file: blob,
                  size: blob.size,
                  type: blob.type
                });
                if (self.$parent.isCompressor) {
                  self.$parent.isCompressor = false;
                }
              }).catch(function (err) {
                console.error(err);
              });
            });
          }).catch(function (err) {
            _this.$refs.upload.update(newFile, {
              error: err.message || "compress"
            });
            if (_this.$parent.isCompressor) {
              _this.$parent.isCompressor = false;
            }
            console.log(err);
          });
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = "";
        var URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file);
        }
        // Thumbnails
        // 缩略图
        newFile.thumb = "";
        if (newFile.blob && newFile.type.substr(0, 6) === "image/") {
          newFile.thumb = newFile.blob;
        }
      }
    },

    // add, update, remove File Event
    inputFile: function inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          // min size
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
            this.$refs.upload.update(newFile, { error: "size" });
          }
        }
        if (newFile.progress !== oldFile.progress) {
          // progress
        }
        if (newFile.error && !oldFile.error) {
          // error
        }
        if (newFile.success && !oldFile.success) {
          // success
        }
      }
      if (!newFile && oldFile) {
        // remove

        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }
      // Automatically activate upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true;
        }
      }
    },
    onEditFileShow: function onEditFileShow(file) {
      this.editFile = _extends({}, file, { show: true });
      this.$refs.upload.update(file, { error: "edit" });
    },
    onEditorFile: function onEditorFile() {
      if (!this.$refs.upload.features.html5) {
        this.alert("Your browser does not support");
        this.editFile.show = false;
        return;
      }
      var data = {
        name: this.editFile.name
      };

      if (this.editFile.cropper) {
        var binStr = atob(this.editFile.cropper.getCroppedCanvas().toDataURL(this.editFile.type).split(",")[1]);
        var arr = new Uint8Array(binStr.length);
        for (var i = 0; i < binStr.length; i++) {
          arr[i] = binStr.charCodeAt(i);
        }
        data.file = new File([arr], data.name, { type: this.editFile.type });
        data.size = data.file.size;
      }

      this.$refs.upload.update(this.editFile.id, data);
      this.editFile.error = "";
      this.editFile.show = false;
    },

    // add folader
    onAddFolader: function onAddFolader() {
      var _this2 = this;

      if (!this.$refs.upload.features.directory) {
        this.alert("Your browser does not support");
        return;
      }
      var input = this.$refs.upload.$el.querySelector("input");
      input.directory = true;
      input.webkitdirectory = true;
      this.directory = true;
      input.onclick = null;
      input.click();
      input.onclick = function (e) {
        _this2.directory = false;
        input.directory = false;
        input.webkitdirectory = false;
      };
    },
    onAddData: function onAddData() {
      this.addData.show = false;
      if (!this.$refs.upload.features.html5) {
        this.alert("Your browser does not support");
        return;
      }
      var file = new window.File([this.addData.content], this.addData.name, {
        type: this.addData.type
      });
    },
    getOrientation: function getOrientation(file, callback) {
      var reader = new FileReader();

      reader.onload = function (event) {
        var view = new DataView(event.target.result);

        if (view.getUint16(0, false) != 0xffd8) return callback(-2);

        var length = view.byteLength,
            offset = 2;

        while (offset < length) {
          var marker = view.getUint16(offset, false);
          offset += 2;

          if (marker == 0xffe1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
              return callback(-1);
            }
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;

            for (var i = 0; i < tags; i++) {
              if (view.getUint16(offset + i * 12, little) == 0x0112) return callback(view.getUint16(offset + i * 12 + 8, little));
            }
          } else if ((marker & 0xff00) != 0xff00) break;else offset += view.getUint16(offset, false);
        }
        return callback(-1);
      };

      reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    }
  },
  watch: {
    files: function files(value) {
      this.$parent[this.uploadName] = value;

      if (this.isDeviceMobile()) {
        $("html, body").animate({
          scrollTop: $(window).height()
        }, 300);
      }
    },
    isImageReset: function isImageReset(value) {
      if (value) {
        var variable = this.uploadName + "Reset";
        this.files = [];
        this.$parent[variable] = false;
      }
    },
    "editFile.show": function editFileShow(newValue, oldValue) {
      // 关闭了 自动删除 error
      if (!newValue && oldValue) {
        this.$refs.upload.update(this.editFile.id, {
          error: this.editFile.error || ""
        });
      }
      if (newValue) {
        this.$nextTick(function () {
          if (!this.$refs.editImage) {
            return;
          }
          // let cropper = new Cropper(this.$refs.editImage, {
          //     autoCrop: true,
          //     aspectRatio: 1 / 1,
          //     responsive: true,
          //     center:true,
          //     guides: false,
          //     movable: false,
          //     rotatable: false,
          //     scalabel: false,
          //     zoomable: false,
          //     zoomOnTouch: false,
          //     zoomOnWheel: false,
          //     wheelZoomRatio: false,
          //     toggleDragModeOnDblclick: false,
          //     minCropBoxWidth:400,
          //     minCropBoxHeight:400,

          // })
          // this.editFile = {
          //     ...this.editFile,
          //     cropper
          // }
        });
      }
    },
    "addData.show": function addDataShow(show) {
      if (show) {
        this.addData.name = "";
        this.addData.type = "";
        this.addData.content = "";
      }
    }
  }
});

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Scaling
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(203)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var originalTransform = loadImage.transform

  loadImage.createCanvas = function (width, height, offscreen) {
    if (offscreen && loadImage.global.OffscreenCanvas) {
      return new OffscreenCanvas(width, height)
    }
    var canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    return canvas
  }

  loadImage.transform = function (img, options, callback, file, data) {
    originalTransform.call(
      loadImage,
      loadImage.scale(img, options, data),
      options,
      callback,
      file,
      data
    )
  }

  // Transform image coordinates, allows to override e.g.
  // the canvas orientation based on the orientation option,
  // gets canvas, options and data passed as arguments:
  loadImage.transformCoordinates = function () {}

  // Returns transformed options, allows to override e.g.
  // maxWidth, maxHeight and crop options based on the aspectRatio.
  // gets img, options, data passed as arguments:
  loadImage.getTransformedOptions = function (img, options) {
    var aspectRatio = options.aspectRatio
    var newOptions
    var i
    var width
    var height
    if (!aspectRatio) {
      return options
    }
    newOptions = {}
    for (i in options) {
      if (Object.prototype.hasOwnProperty.call(options, i)) {
        newOptions[i] = options[i]
      }
    }
    newOptions.crop = true
    width = img.naturalWidth || img.width
    height = img.naturalHeight || img.height
    if (width / height > aspectRatio) {
      newOptions.maxWidth = height * aspectRatio
      newOptions.maxHeight = height
    } else {
      newOptions.maxWidth = width
      newOptions.maxHeight = width / aspectRatio
    }
    return newOptions
  }

  // Canvas render method, allows to implement a different rendering algorithm:
  loadImage.drawImage = function (
    img,
    canvas,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    destWidth,
    destHeight,
    options
  ) {
    var ctx = canvas.getContext('2d')
    if (options.imageSmoothingEnabled === false) {
      ctx.msImageSmoothingEnabled = false
      ctx.imageSmoothingEnabled = false
    } else if (options.imageSmoothingQuality) {
      ctx.imageSmoothingQuality = options.imageSmoothingQuality
    }
    ctx.drawImage(
      img,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      destWidth,
      destHeight
    )
    return ctx
  }

  // Determines if the target image should be a canvas element:
  loadImage.requiresCanvas = function (options) {
    return options.canvas || options.crop || !!options.aspectRatio
  }

  // Scales and/or crops the given image (img or canvas HTML element)
  // using the given options:
  loadImage.scale = function (img, options, data) {
    // eslint-disable-next-line no-param-reassign
    options = options || {}
    // eslint-disable-next-line no-param-reassign
    data = data || {}
    var useCanvas =
      img.getContext ||
      (loadImage.requiresCanvas(options) &&
        !!loadImage.global.HTMLCanvasElement)
    var width = img.naturalWidth || img.width
    var height = img.naturalHeight || img.height
    var destWidth = width
    var destHeight = height
    var maxWidth
    var maxHeight
    var minWidth
    var minHeight
    var sourceWidth
    var sourceHeight
    var sourceX
    var sourceY
    var pixelRatio
    var downsamplingRatio
    var tmp
    var canvas
    /**
     * Scales up image dimensions
     */
    function scaleUp() {
      var scale = Math.max(
        (minWidth || destWidth) / destWidth,
        (minHeight || destHeight) / destHeight
      )
      if (scale > 1) {
        destWidth *= scale
        destHeight *= scale
      }
    }
    /**
     * Scales down image dimensions
     */
    function scaleDown() {
      var scale = Math.min(
        (maxWidth || destWidth) / destWidth,
        (maxHeight || destHeight) / destHeight
      )
      if (scale < 1) {
        destWidth *= scale
        destHeight *= scale
      }
    }
    if (useCanvas) {
      // eslint-disable-next-line no-param-reassign
      options = loadImage.getTransformedOptions(img, options, data)
      sourceX = options.left || 0
      sourceY = options.top || 0
      if (options.sourceWidth) {
        sourceWidth = options.sourceWidth
        if (options.right !== undefined && options.left === undefined) {
          sourceX = width - sourceWidth - options.right
        }
      } else {
        sourceWidth = width - sourceX - (options.right || 0)
      }
      if (options.sourceHeight) {
        sourceHeight = options.sourceHeight
        if (options.bottom !== undefined && options.top === undefined) {
          sourceY = height - sourceHeight - options.bottom
        }
      } else {
        sourceHeight = height - sourceY - (options.bottom || 0)
      }
      destWidth = sourceWidth
      destHeight = sourceHeight
    }
    maxWidth = options.maxWidth
    maxHeight = options.maxHeight
    minWidth = options.minWidth
    minHeight = options.minHeight
    if (useCanvas && maxWidth && maxHeight && options.crop) {
      destWidth = maxWidth
      destHeight = maxHeight
      tmp = sourceWidth / sourceHeight - maxWidth / maxHeight
      if (tmp < 0) {
        sourceHeight = (maxHeight * sourceWidth) / maxWidth
        if (options.top === undefined && options.bottom === undefined) {
          sourceY = (height - sourceHeight) / 2
        }
      } else if (tmp > 0) {
        sourceWidth = (maxWidth * sourceHeight) / maxHeight
        if (options.left === undefined && options.right === undefined) {
          sourceX = (width - sourceWidth) / 2
        }
      }
    } else {
      if (options.contain || options.cover) {
        minWidth = maxWidth = maxWidth || minWidth
        minHeight = maxHeight = maxHeight || minHeight
      }
      if (options.cover) {
        scaleDown()
        scaleUp()
      } else {
        scaleUp()
        scaleDown()
      }
    }
    if (useCanvas) {
      pixelRatio = options.pixelRatio
      if (
        pixelRatio > 1 &&
        // Check if the image has not yet had the device pixel ratio applied:
        !(
          img.style.width &&
          Math.floor(parseFloat(img.style.width, 10)) ===
            Math.floor(width / pixelRatio)
        )
      ) {
        destWidth *= pixelRatio
        destHeight *= pixelRatio
      }
      // Check if workaround for Chromium orientation crop bug is required:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1074354
      if (
        loadImage.orientationCropBug &&
        !img.getContext &&
        (sourceX || sourceY || sourceWidth !== width || sourceHeight !== height)
      ) {
        // Write the complete source image to an intermediate canvas first:
        tmp = img
        // eslint-disable-next-line no-param-reassign
        img = loadImage.createCanvas(width, height, true)
        loadImage.drawImage(
          tmp,
          img,
          0,
          0,
          width,
          height,
          width,
          height,
          options
        )
      }
      downsamplingRatio = options.downsamplingRatio
      if (
        downsamplingRatio > 0 &&
        downsamplingRatio < 1 &&
        destWidth < sourceWidth &&
        destHeight < sourceHeight
      ) {
        while (sourceWidth * downsamplingRatio > destWidth) {
          canvas = loadImage.createCanvas(
            sourceWidth * downsamplingRatio,
            sourceHeight * downsamplingRatio,
            true
          )
          loadImage.drawImage(
            img,
            canvas,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            canvas.width,
            canvas.height,
            options
          )
          sourceX = 0
          sourceY = 0
          sourceWidth = canvas.width
          sourceHeight = canvas.height
          // eslint-disable-next-line no-param-reassign
          img = canvas
        }
      }
      canvas = loadImage.createCanvas(destWidth, destHeight)
      loadImage.transformCoordinates(canvas, options, data)
      if (pixelRatio > 1) {
        canvas.style.width = canvas.width / pixelRatio + 'px'
      }
      loadImage
        .drawImage(
          img,
          canvas,
          sourceX,
          sourceY,
          sourceWidth,
          sourceHeight,
          destWidth,
          destHeight,
          options
        )
        .setTransform(1, 0, 0, 1, 0, 0) // reset to the identity matrix
      return canvas
    }
    img.width = destWidth
    img.height = destHeight
    return img
  }
})


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Exif Parser
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, DataView */

/* eslint-disable no-console */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(203), __webpack_require__(204)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-meta'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  /**
   * Exif tag map
   *
   * @name ExifMap
   * @class
   * @param {number|string} tagCode IFD tag code
   */
  function ExifMap(tagCode) {
    if (tagCode) {
      Object.defineProperty(this, 'map', {
        value: this.ifds[tagCode].map
      })
      Object.defineProperty(this, 'tags', {
        value: (this.tags && this.tags[tagCode]) || {}
      })
    }
  }

  ExifMap.prototype.map = {
    Orientation: 0x0112,
    Thumbnail: 'ifd1',
    Blob: 0x0201, // Alias for JPEGInterchangeFormat
    Exif: 0x8769,
    GPSInfo: 0x8825,
    Interoperability: 0xa005
  }

  ExifMap.prototype.ifds = {
    ifd1: { name: 'Thumbnail', map: ExifMap.prototype.map },
    0x8769: { name: 'Exif', map: {} },
    0x8825: { name: 'GPSInfo', map: {} },
    0xa005: { name: 'Interoperability', map: {} }
  }

  /**
   * Retrieves exif tag value
   *
   * @param {number|string} id Exif tag code or name
   * @returns {object} Exif tag value
   */
  ExifMap.prototype.get = function (id) {
    return this[id] || this[this.map[id]]
  }

  /**
   * Returns the Exif Thumbnail data as Blob.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Thumbnail data offset
   * @param {number} length Thumbnail data length
   * @returns {undefined|Blob} Returns the Thumbnail Blob or undefined
   */
  function getExifThumbnail(dataView, offset, length) {
    if (!length) return
    if (offset + length > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid thumbnail data.')
      return
    }
    return new Blob(
      [loadImage.bufferSlice.call(dataView.buffer, offset, offset + length)],
      {
        type: 'image/jpeg'
      }
    )
  }

  var ExifTagTypes = {
    // byte, 8-bit unsigned int:
    1: {
      getValue: function (dataView, dataOffset) {
        return dataView.getUint8(dataOffset)
      },
      size: 1
    },
    // ascii, 8-bit byte:
    2: {
      getValue: function (dataView, dataOffset) {
        return String.fromCharCode(dataView.getUint8(dataOffset))
      },
      size: 1,
      ascii: true
    },
    // short, 16 bit int:
    3: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint16(dataOffset, littleEndian)
      },
      size: 2
    },
    // long, 32 bit int:
    4: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getUint32(dataOffset, littleEndian)
      },
      size: 4
    },
    // rational = two long values, first is numerator, second is denominator:
    5: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return (
          dataView.getUint32(dataOffset, littleEndian) /
          dataView.getUint32(dataOffset + 4, littleEndian)
        )
      },
      size: 8
    },
    // slong, 32 bit signed int:
    9: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return dataView.getInt32(dataOffset, littleEndian)
      },
      size: 4
    },
    // srational, two slongs, first is numerator, second is denominator:
    10: {
      getValue: function (dataView, dataOffset, littleEndian) {
        return (
          dataView.getInt32(dataOffset, littleEndian) /
          dataView.getInt32(dataOffset + 4, littleEndian)
        )
      },
      size: 8
    }
  }
  // undefined, 8-bit byte, value depending on field:
  ExifTagTypes[7] = ExifTagTypes[1]

  /**
   * Returns Exif tag value.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {number} offset Tag offset
   * @param {number} type Tag type
   * @param {number} length Tag length
   * @param {boolean} littleEndian Little endian encoding
   * @returns {object} Tag value
   */
  function getExifValue(
    dataView,
    tiffOffset,
    offset,
    type,
    length,
    littleEndian
  ) {
    var tagType = ExifTagTypes[type]
    var tagSize
    var dataOffset
    var values
    var i
    var str
    var c
    if (!tagType) {
      console.log('Invalid Exif data: Invalid tag type.')
      return
    }
    tagSize = tagType.size * length
    // Determine if the value is contained in the dataOffset bytes,
    // or if the value at the dataOffset is a pointer to the actual data:
    dataOffset =
      tagSize > 4
        ? tiffOffset + dataView.getUint32(offset + 8, littleEndian)
        : offset + 8
    if (dataOffset + tagSize > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid data offset.')
      return
    }
    if (length === 1) {
      return tagType.getValue(dataView, dataOffset, littleEndian)
    }
    values = []
    for (i = 0; i < length; i += 1) {
      values[i] = tagType.getValue(
        dataView,
        dataOffset + i * tagType.size,
        littleEndian
      )
    }
    if (tagType.ascii) {
      str = ''
      // Concatenate the chars:
      for (i = 0; i < values.length; i += 1) {
        c = values[i]
        // Ignore the terminating NULL byte(s):
        if (c === '\u0000') {
          break
        }
        str += c
      }
      return str
    }
    return values
  }

  /**
   * Determines if the given tag should be included.
   *
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   * @param {number|string} tagCode Tag code to check
   * @returns {boolean} True if the tag should be included
   */
  function shouldIncludeTag(includeTags, excludeTags, tagCode) {
    return (
      (!includeTags || includeTags[tagCode]) &&
      (!excludeTags || excludeTags[tagCode] !== true)
    )
  }

  /**
   * Parses Exif tags.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {number} dirOffset Directory offset
   * @param {boolean} littleEndian Little endian encoding
   * @param {ExifMap} tags Map to store parsed exif tags
   * @param {ExifMap} tagOffsets Map to store parsed exif tag offsets
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   * @returns {number} Next directory offset
   */
  function parseExifTags(
    dataView,
    tiffOffset,
    dirOffset,
    littleEndian,
    tags,
    tagOffsets,
    includeTags,
    excludeTags
  ) {
    var tagsNumber, dirEndOffset, i, tagOffset, tagNumber, tagValue
    if (dirOffset + 6 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory offset.')
      return
    }
    tagsNumber = dataView.getUint16(dirOffset, littleEndian)
    dirEndOffset = dirOffset + 2 + 12 * tagsNumber
    if (dirEndOffset + 4 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid directory size.')
      return
    }
    for (i = 0; i < tagsNumber; i += 1) {
      tagOffset = dirOffset + 2 + 12 * i
      tagNumber = dataView.getUint16(tagOffset, littleEndian)
      if (!shouldIncludeTag(includeTags, excludeTags, tagNumber)) continue
      tagValue = getExifValue(
        dataView,
        tiffOffset,
        tagOffset,
        dataView.getUint16(tagOffset + 2, littleEndian), // tag type
        dataView.getUint32(tagOffset + 4, littleEndian), // tag length
        littleEndian
      )
      tags[tagNumber] = tagValue
      if (tagOffsets) {
        tagOffsets[tagNumber] = tagOffset
      }
    }
    // Return the offset to the next directory:
    return dataView.getUint32(dirEndOffset, littleEndian)
  }

  /**
   * Parses tags in a given IFD (Image File Directory).
   *
   * @param {object} data Data object to store exif tags and offsets
   * @param {number|string} tagCode IFD tag code
   * @param {DataView} dataView Data view interface
   * @param {number} tiffOffset TIFF offset
   * @param {boolean} littleEndian Little endian encoding
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   */
  function parseExifIFD(
    data,
    tagCode,
    dataView,
    tiffOffset,
    littleEndian,
    includeTags,
    excludeTags
  ) {
    var dirOffset = data.exif[tagCode]
    if (dirOffset) {
      data.exif[tagCode] = new ExifMap(tagCode)
      if (data.exifOffsets) {
        data.exifOffsets[tagCode] = new ExifMap(tagCode)
      }
      parseExifTags(
        dataView,
        tiffOffset,
        tiffOffset + dirOffset,
        littleEndian,
        data.exif[tagCode],
        data.exifOffsets && data.exifOffsets[tagCode],
        includeTags && includeTags[tagCode],
        excludeTags && excludeTags[tagCode]
      )
    }
  }

  loadImage.parseExifData = function (dataView, offset, length, data, options) {
    if (options.disableExif) {
      return
    }
    var includeTags = options.includeExifTags
    var excludeTags = options.excludeExifTags || {
      0x8769: {
        // ExifIFDPointer
        0x927c: true // MakerNote
      }
    }
    var tiffOffset = offset + 10
    var littleEndian
    var dirOffset
    var thumbnailIFD
    // Check for the ASCII code for "Exif" (0x45786966):
    if (dataView.getUint32(offset + 4) !== 0x45786966) {
      // No Exif data, might be XMP data instead
      return
    }
    if (tiffOffset + 8 > dataView.byteLength) {
      console.log('Invalid Exif data: Invalid segment size.')
      return
    }
    // Check for the two null bytes:
    if (dataView.getUint16(offset + 8) !== 0x0000) {
      console.log('Invalid Exif data: Missing byte alignment offset.')
      return
    }
    // Check the byte alignment:
    switch (dataView.getUint16(tiffOffset)) {
      case 0x4949:
        littleEndian = true
        break
      case 0x4d4d:
        littleEndian = false
        break
      default:
        console.log('Invalid Exif data: Invalid byte alignment marker.')
        return
    }
    // Check for the TIFF tag marker (0x002A):
    if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 0x002a) {
      console.log('Invalid Exif data: Missing TIFF marker.')
      return
    }
    // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
    dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian)
    // Create the exif object to store the tags:
    data.exif = new ExifMap()
    if (!options.disableExifOffsets) {
      data.exifOffsets = new ExifMap()
      data.exifTiffOffset = tiffOffset
      data.exifLittleEndian = littleEndian
    }
    // Parse the tags of the main image directory (IFD0) and retrieve the
    // offset to the next directory (IFD1), usually the thumbnail directory:
    dirOffset = parseExifTags(
      dataView,
      tiffOffset,
      tiffOffset + dirOffset,
      littleEndian,
      data.exif,
      data.exifOffsets,
      includeTags,
      excludeTags
    )
    if (dirOffset && shouldIncludeTag(includeTags, excludeTags, 'ifd1')) {
      data.exif.ifd1 = dirOffset
      if (data.exifOffsets) {
        data.exifOffsets.ifd1 = tiffOffset + dirOffset
      }
    }
    Object.keys(data.exif.ifds).forEach(function (tagCode) {
      parseExifIFD(
        data,
        tagCode,
        dataView,
        tiffOffset,
        littleEndian,
        includeTags,
        excludeTags
      )
    })
    thumbnailIFD = data.exif.ifd1
    // Check for JPEG Thumbnail offset and data length:
    if (thumbnailIFD && thumbnailIFD[0x0201]) {
      thumbnailIFD[0x0201] = getExifThumbnail(
        dataView,
        tiffOffset + thumbnailIFD[0x0201],
        thumbnailIFD[0x0202] // Thumbnail data length
      )
    }
  }

  // Registers the Exif parser for the APP1 JPEG metadata segment:
  loadImage.metaDataParsers.jpeg[0xffe1].push(loadImage.parseExifData)

  loadImage.exifWriters = {
    // Orientation writer:
    0x0112: function (buffer, data, value) {
      var orientationOffset = data.exifOffsets[0x0112]
      if (!orientationOffset) return buffer
      var view = new DataView(buffer, orientationOffset + 8, 2)
      view.setUint16(0, value, data.exifLittleEndian)
      return buffer
    }
  }

  loadImage.writeExifData = function (buffer, data, id, value) {
    return loadImage.exifWriters[data.exif.map[id]](buffer, data, value)
  }

  loadImage.ExifMap = ExifMap

  // Adds the following properties to the parseMetaData callback data:
  // - exif: The parsed Exif tags
  // - exifOffsets: The parsed Exif tag offsets
  // - exifTiffOffset: TIFF header offset (used for offset pointers)
  // - exifLittleEndian: little endian order if true, big endian if false

  // Adds the following options to the parseMetaData method:
  // - disableExif: Disables Exif parsing when true.
  // - disableExifOffsets: Disables storing Exif tag offsets when true.
  // - includeExifTags: A map of Exif tags to include for parsing.
  // - excludeExifTags: A map of Exif tags to exclude from parsing.
})


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image IPTC Parser
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * Copyright 2018, Dave Bevan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, DataView */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(203), __webpack_require__(204)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-meta'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  /**
   * IPTC tag map
   *
   * @name IptcMap
   * @class
   */
  function IptcMap() {}

  IptcMap.prototype.map = {
    ObjectName: 5
  }

  IptcMap.prototype.types = {
    0: 'Uint16', // ApplicationRecordVersion
    200: 'Uint16', // ObjectPreviewFileFormat
    201: 'Uint16', // ObjectPreviewFileVersion
    202: 'binary' // ObjectPreviewData
  }

  /**
   * Retrieves IPTC tag value
   *
   * @param {number|string} id IPTC tag code or name
   * @returns {object} IPTC tag value
   */
  IptcMap.prototype.get = function (id) {
    return this[id] || this[this.map[id]]
  }

  /**
   * Retrieves string for the given DataView and range
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Offset start
   * @param {number} length Offset length
   * @returns {string} String value
   */
  function getStringValue(dataView, offset, length) {
    var outstr = ''
    var end = offset + length
    for (var n = offset; n < end; n += 1) {
      outstr += String.fromCharCode(dataView.getUint8(n))
    }
    return outstr
  }

  /**
   * Retrieves tag value for the given DataView and range
   *
   * @param {number} tagCode tag code
   * @param {IptcMap} map IPTC tag map
   * @param {DataView} dataView Data view interface
   * @param {number} offset Range start
   * @param {number} length Range length
   * @returns {object} Tag value
   */
  function getTagValue(tagCode, map, dataView, offset, length) {
    if (map.types[tagCode] === 'binary') {
      return new Blob([dataView.buffer.slice(offset, offset + length)])
    }
    if (map.types[tagCode] === 'Uint16') {
      return dataView.getUint16(offset)
    }
    return getStringValue(dataView, offset, length)
  }

  /**
   * Combines IPTC value with existing ones.
   *
   * @param {object} value Existing IPTC field value
   * @param {object} newValue New IPTC field value
   * @returns {object} Resulting IPTC field value
   */
  function combineTagValues(value, newValue) {
    if (value === undefined) return newValue
    if (value instanceof Array) {
      value.push(newValue)
      return value
    }
    return [value, newValue]
  }

  /**
   * Parses IPTC tags.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} segmentOffset Segment offset
   * @param {number} segmentLength Segment length
   * @param {object} data Data export object
   * @param {object} includeTags Map of tags to include
   * @param {object} excludeTags Map of tags to exclude
   */
  function parseIptcTags(
    dataView,
    segmentOffset,
    segmentLength,
    data,
    includeTags,
    excludeTags
  ) {
    var value, tagSize, tagCode
    var segmentEnd = segmentOffset + segmentLength
    var offset = segmentOffset
    while (offset < segmentEnd) {
      if (
        dataView.getUint8(offset) === 0x1c && // tag marker
        dataView.getUint8(offset + 1) === 0x02 // record number, only handles v2
      ) {
        tagCode = dataView.getUint8(offset + 2)
        if (
          (!includeTags || includeTags[tagCode]) &&
          (!excludeTags || !excludeTags[tagCode])
        ) {
          tagSize = dataView.getInt16(offset + 3)
          value = getTagValue(tagCode, data.iptc, dataView, offset + 5, tagSize)
          data.iptc[tagCode] = combineTagValues(data.iptc[tagCode], value)
          if (data.iptcOffsets) {
            data.iptcOffsets[tagCode] = offset
          }
        }
      }
      offset += 1
    }
  }

  /**
   * Tests if field segment starts at offset.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Segment offset
   * @returns {boolean} True if '8BIM<EOT><EOT>' exists at offset
   */
  function isSegmentStart(dataView, offset) {
    return (
      dataView.getUint32(offset) === 0x3842494d && // Photoshop segment start
      dataView.getUint16(offset + 4) === 0x0404 // IPTC segment start
    )
  }

  /**
   * Returns header length.
   *
   * @param {DataView} dataView Data view interface
   * @param {number} offset Segment offset
   * @returns {number} Header length
   */
  function getHeaderLength(dataView, offset) {
    var length = dataView.getUint8(offset + 7)
    if (length % 2 !== 0) length += 1
    // Check for pre photoshop 6 format
    if (length === 0) {
      // Always 4
      length = 4
    }
    return length
  }

  loadImage.parseIptcData = function (dataView, offset, length, data, options) {
    if (options.disableIptc) {
      return
    }
    var markerLength = offset + length
    while (offset + 8 < markerLength) {
      if (isSegmentStart(dataView, offset)) {
        var headerLength = getHeaderLength(dataView, offset)
        var segmentOffset = offset + 8 + headerLength
        if (segmentOffset > markerLength) {
          // eslint-disable-next-line no-console
          console.log('Invalid IPTC data: Invalid segment offset.')
          break
        }
        var segmentLength = dataView.getUint16(offset + 6 + headerLength)
        if (offset + segmentLength > markerLength) {
          // eslint-disable-next-line no-console
          console.log('Invalid IPTC data: Invalid segment size.')
          break
        }
        // Create the iptc object to store the tags:
        data.iptc = new IptcMap()
        if (!options.disableIptcOffsets) {
          data.iptcOffsets = new IptcMap()
        }
        parseIptcTags(
          dataView,
          segmentOffset,
          segmentLength,
          data,
          options.includeIptcTags,
          options.excludeIptcTags || { 202: true } // ObjectPreviewData
        )
        return
      }
      // eslint-disable-next-line no-param-reassign
      offset += 1
    }
  }

  // Registers this IPTC parser for the APP13 JPEG metadata segment:
  loadImage.metaDataParsers.jpeg[0xffed].push(loadImage.parseIptcData)

  loadImage.IptcMap = IptcMap

  // Adds the following properties to the parseMetaData callback data:
  // - iptc: The iptc tags, parsed by the parseIptcData method

  // Adds the following options to the parseMetaData method:
  // - disableIptc: Disables IPTC parsing when true.
  // - disableIptcOffsets: Disables storing IPTC tag offsets when true.
  // - includeIptcTags: A map of IPTC tags to include for parsing.
  // - excludeIptcTags: A map of IPTC tags to exclude from parsing.
})


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_upload_image_vue__ = __webpack_require__(209);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0f5124_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_image_vue__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(228)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e0f5124"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_upload_image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0f5124_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_image_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0f5124_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_image_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\upload-image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e0f5124", Component.options)
  } else {
    hotAPI.reload("data-v-0e0f5124", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 217:
/***/ (function(module, exports) {

;(function ($, window, document, undefined) {
    window.addEventListener("dragover", function (e) {
        e = e || event;e.preventDefault();
    }, false);window.addEventListener("drop", function (e) {
        e = e || event;e.preventDefault();
    }, false);var compareMimeType = function compareMimeType(mimeTypes, fileType, formatFile) {
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
        var settings = $.extend({}, $.fn.imageuploadify.defaults, opts);this.each(function () {
            var self = this;if (!$(self).attr("multiple")) {
                return;
            }
            var accept = $(self).attr("accept") ? $(self).attr("accept").replace(/\s/g, "").split(",") : null;var result = [];accept.forEach(function (item) {
                var regexp = void 0;if (item.search(/\//) != -1) {
                    regexp = new RegExp("([A-Za-z-.]*)\/([A-Za-z-*.]*)", "g");
                } else {
                    regexp = new RegExp("\.([A-Za-z-]*)()", "g");
                }
                var r = regexp.exec(item);result = result.concat(r);
            });var totalFiles = [];var counter = 0;var dragbox = $("<div class=\"imageuploadify\"><div class=\"imageuploadify-overlay\"><i class=\"fa fa-picture-o\"></i></div><div class=\"imageuploadify-images-list text-center\"><div id='custom-upload-image-icons' ><i class=\"fa fa-plus-square\"></i><i class=\"fa fa-camera\"></i></div><span class='imageuploadify-message'>\u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u0635\u0648\u06CC\u0631</span></div></div>");var overlay = dragbox.find(".imageuploadify-overlay");var uploadIcon = dragbox.find(".imageuploadify-overlay i");var imagesList = dragbox.find(".imageuploadify-images-list");var addIcon = dragbox.find(".imageuploadify-images-list i");var addMsg = dragbox.find(".imageuploadify-images-list span");var button = dragbox.find(".imageuploadify-images-list button");var retrieveFiles = function retrieveFiles(files) {
                for (var index = 0; index < files.length; ++index) {
                    if (!accept || compareMimeType(result, files[index].type, /(?:\.([^.]+))?$/.exec(files[index].name)[1])) {
                        var id = Math.random().toString(36).substr(2, 9);readingFile(id, files[index]);totalFiles.push({ id: id, file: files[index] });
                    }
                }
            };
            var readingFile = function readingFile(id, file) {
                var fReader = new FileReader();var width = dragbox.width();var boxesNb = Math.floor(width / 100);var marginSize = Math.floor((width - boxesNb * 100) / (boxesNb + 1));var container = $("<div class='imageuploadify-container'></div>");
                // $(`<div class='imageuploadify-container'><button type='button' class='btn btn-danger fa  fa-times '></button></div>`);
                var details = container.find(".imageuploadify-details");
                var deleteBtn = container.find("button");
                container.css("margin-left", marginSize + "px");
                details.hover(function () {
                    $(this).css("opacity", "1");
                }).mouseleave(function () {
                    $(this).css("opacity", "0");
                });if (file.type && file.type.search(/image/) != -1) {
                    fReader.onloadend = function (e) {
                        var image = $("<img class='img_ditails'> <input class='img_ditails_file' value='" + e.target.result + "'>");image.attr("src", e.target.result);

                        container.append(image);imagesList.append(container);imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
                    };
                } else if (file.type) {
                    var type = "<i class='fa fa-file'></i>";if (file.type.search(/audio/) != -1) {
                        type = "<i class='fa fa-file-audio-o'></i>";
                    } else if (file.type.search(/video/) != -1) {
                        type = "<i class='fa fa-file-video-o'></i>";
                    }
                    fReader.onloadend = function (e) {
                        var span = $("<span>" + type + "</span>");span.css("font-size", "5em");container.append(span);imagesList.append(container);imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
                    };
                }
                deleteBtn.on("click", function () {
                    $(this.parentElement).remove();for (var index = 0; totalFiles.length > index; ++index) {
                        if (totalFiles[index].id === id) {
                            totalFiles.splice(index, 1);break;
                        }
                    }
                });fReader.readAsDataURL(file);
            };var disableMouseEvents = function disableMouseEvents() {
                overlay.css("display", "flex");dragbox.css("border-color", "#3AA0FF");button.css("pointer-events", "none");addMsg.css("pointer-events", "none");addIcon.css("pointer-events", "none");imagesList.css("pointer-events", "none");
            };
            var enableMouseEvents = function enableMouseEvents() {
                overlay.css("display", "none");dragbox.css("border-color", "rgb(210, 210, 210)");button.css("pointer-events", "initial");addMsg.css("pointer-events", "initial");addIcon.css("pointer-events", "initial");imagesList.css("pointer-events", "initial");
            };
            button.mouseenter(function onMouseEnter(event) {
                button.css("background", "#3AA0FF").css("color", "white");
            }).mouseleave(function onMouseLeave() {
                button.css("background", "white").css("color", "#3AA0FF");
            });button.on("click", function onClick(event) {
                event.stopPropagation();event.preventDefault();$(self).click();
            });dragbox.on("dragenter", function onDragenter(event) {
                event.stopPropagation();event.preventDefault();counter++;disableMouseEvents();
            });dragbox.on("dragleave", function onDragLeave(event) {
                event.stopPropagation();event.preventDefault();counter--;if (counter === 0) {
                    enableMouseEvents();
                }
            });dragbox.on("drop", function onDrop(event) {
                event.stopPropagation();event.preventDefault();enableMouseEvents();var files = event.originalEvent.dataTransfer.files;retrieveFiles(files);
            });$(window).bind("resize", function (e) {
                window.resizeEvt;$(window).resize(function () {
                    clearTimeout(window.resizeEvt);window.resizeEvt = setTimeout(function () {
                        var width = dragbox.width();var boxesNb = Math.floor(width / 100);var marginSize = Math.floor((width - boxesNb * 100) / (boxesNb + 1));var containers = imagesList.find(".imageuploadify-container");for (var index = 0; index < containers.length; ++index) {
                            $(containers[index]).css("margin-right", "0px");$(containers[index]).css("margin-left", marginSize + "px");
                        }
                        imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+4)").css("margin-left", marginSize + "px");imagesList.find(".imageuploadify-container:nth-child(" + boxesNb + "n+3)").css("margin-right", marginSize + "px");
                    }, 500);
                });
            });
            $(self).on("change", function onChange() {
                var files = this.files;retrieveFiles(files);
            });$(self).closest("form").on("submit", function (event) {
                event.stopPropagation();event.preventDefault(event);var inputs = this.querySelectorAll("input, textarea, select, button");var formData = new FormData();for (var index = 0; index < inputs.length; ++index) {
                    if (inputs[index].tagName === "SELECT" && inputs[index].hasAttribute("multiple")) {
                        var options = inputs[index].options;for (var _i = 0; options.length > _i; ++_i) {
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
                var xhr = new XMLHttpRequest();xhr.onreadystatechange = function (e) {
                    if (xhr.status == 200 && xhr.readyState === XMLHttpRequest.DONE) {
                        window.location.replace(xhr.responseURL);
                    }
                };
                xhr.open("POST", $(this).attr("action"), true);xhr.send(formData);return false;
            });$(self).hide();dragbox.insertAfter(this);
        });return this;
    };$.fn.imageuploadify.defaults = {};
})(jQuery, window, document);

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("4c52fefa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-0e0f5124\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload-image.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-0e0f5124\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload-image.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.btn-crop[data-v-0e0f5124] {\r\n  display: inline-block;\r\n  background: #00c569;\r\n  color: #fff;\r\n  padding: 10px 35px;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n  border: none;\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\n}\n.btn-cancel[data-v-0e0f5124] {\r\n  display: inline-block;\r\n  background: #e8312d;\r\n  color: #fff;\r\n  padding: 10px 35px;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n  border: none;\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\n}\n#modal-edit-file[data-v-0e0f5124] {\r\n  overflow: scroll;\n}\n.form-group[data-v-0e0f5124] {\r\n  margin: 0;\r\n  overflow: hidden;\n}\n.image-upload-wrapper[data-v-0e0f5124],\r\n.article-images[data-v-0e0f5124] {\r\n  position: relative;\n}\n.actions-content[data-v-0e0f5124] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  text-align: center;\r\n  display: block;\r\n  right: 0;\r\n  opacity: 0;\r\n  background: rgba(49, 58, 67, 0.85);\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\r\n  height: 100%;\n}\n.image[data-v-0e0f5124] {\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\r\n  top: 0;\r\n  overflow: hidden;\r\n  border-radius: 3px;\r\n  position: relative;\r\n  height: 115px;\n}\n.image img[data-v-0e0f5124] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  min-height: 100%;\r\n  min-width: 100%;\n}\n.image-upload-wrapper .btn-group .dropdown-menu[data-v-0e0f5124] {\r\n  display: block;\r\n  visibility: hidden;\r\n  -webkit-transition: all 0.2s;\r\n  transition: all 0.2s;\n}\n.image-upload-wrapper .btn-group:hover > .dropdown-menu[data-v-0e0f5124] {\r\n  visibility: visible;\n}\n.image-upload-wrapper label.dropdown-item[data-v-0e0f5124] {\r\n  margin-bottom: 0;\n}\n.image-upload-wrapper .btn-group .dropdown-toggle[data-v-0e0f5124] {\r\n  margin-right: 0.6rem;\n}\n.image-upload-wrapper .filename[data-v-0e0f5124] {\r\n  margin-bottom: 0.3rem;\n}\n.image-upload-wrapper .btn-is-option[data-v-0e0f5124] {\r\n  margin-top: 0.25rem;\n}\n.image-upload-wrapper .edit-image img[data-v-0e0f5124] {\r\n  max-width: 100%;\n}\n.image-upload-wrapper .edit-image-tool[data-v-0e0f5124] {\r\n  margin-top: 0.6rem;\n}\n.image-upload-wrapper .edit-image-tool .btn-group[data-v-0e0f5124] {\r\n  margin-right: 0.6rem;\n}\n.image-upload-wrapper .footer-status[data-v-0e0f5124] {\r\n  padding-top: 0.4rem;\n}\n.image-upload-wrapper .drop-active[data-v-0e0f5124] {\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  z-index: 9999;\r\n  opacity: 0;\r\n  text-align: center;\r\n  background: #000;\n}\n.image-upload-wrapper .drop-active h3[data-v-0e0f5124] {\r\n  margin: -0.5em 0 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  font-size: 40px;\r\n  color: #fff;\r\n  padding: 0;\n}\n.fade[data-v-0e0f5124] {\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.15s linear;\r\n  transition: opacity 0.15s linear;\n}\n.modal-backdrop[data-v-0e0f5124] {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  background-color: #000;\n}\n.modal-backdrop.fade[data-v-0e0f5124] {\r\n  visibility: hidden;\n}\n.modal-backdrop.fade.show[data-v-0e0f5124] {\r\n  visibility: visible;\n}\n.fade.show[data-v-0e0f5124] {\r\n  display: block;\r\n  z-index: 1072;\n}\n.fade.show[data-v-0e0f5124] {\r\n  opacity: 1;\n}\n.modal-backdrop.show[data-v-0e0f5124] {\r\n  opacity: 0.5;\n}\n.modal[data-v-0e0f5124] {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  overflow: hidden;\r\n  outline: 0;\n}\n.modal.fade .modal-dialog[data-v-0e0f5124] {\r\n  transition: -webkit-transform 0.3s ease-out;\r\n  -webkit-transition: -webkit-transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\r\n  -webkit-transform: translate(0, -25%);\r\n  transform: translate(0, -25%);\n}\n.modal-lg[data-v-0e0f5124] {\r\n  max-width: 800px;\n}\n.modal.show .modal-dialog[data-v-0e0f5124] {\r\n  -webkit-transform: translate(0, 0);\r\n  transform: translate(0, 0);\n}\n.modal-content[data-v-0e0f5124] {\r\n  background: transparent;\r\n\r\n  -webkit-box-shadow: none;\r\n\r\n          box-shadow: none;\r\n\r\n  border: none;\r\n  position: relative;\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  /*background-color: #fff;*/\r\n  /*background-clip: padding-box;*/\r\n  /*border: 1px solid rgba(0,0,0,.2);*/\r\n  border-radius: 0.3rem;\r\n  outline: 0;\n}\n.modal-header[data-v-0e0f5124] {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: justify;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #e9ecef;\n}\nbutton.close[data-v-0e0f5124] {\r\n  position: absolute;\r\n  top: -25px;\r\n  right: -12px;\r\n  background: #dc3545;\r\n  opacity: 1;\r\n  color: #fff;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50px;\r\n  font-size: 30px;\r\n  padding-top: 4px;\r\n  border: 0;\r\n  z-index: 1;\n}\n.modal-title[data-v-0e0f5124] {\r\n  margin-bottom: 0;\r\n  line-height: 1.5;\n}\n.modal-body[data-v-0e0f5124] {\r\n  position: relative;\r\n  -ms-flex: 1 1 auto;\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n  padding: 0 15px;\n}\n.modal-footer[data-v-0e0f5124] {\r\n  display: block;\r\n  border-top: none;\r\n  background: #fff;\r\n  margin-top: -2px;\r\n  text-align: center;\r\n  padding: 15px;\n}\n.btn-primary[data-v-0e0f5124] {\r\n  display: inline-block;\r\n  background: #00c569;\r\n  color: #fff;\r\n  padding: 10px 35px;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n  border: none;\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\n}\n.btn[data-v-0e0f5124] {\r\n  display: inline-block;\r\n\r\n  font-weight: 400;\r\n\r\n  text-align: center;\r\n\r\n  white-space: nowrap;\r\n\r\n  vertical-align: middle;\r\n\r\n  -webkit-user-select: none;\r\n\r\n  -moz-user-select: none;\r\n\r\n  -ms-user-select: none;\r\n\r\n  user-select: none;\r\n\r\n  border: 1px solid transparent;\r\n  border-top-color: transparent;\r\n  border-right-color: transparent;\r\n  border-bottom-color: transparent;\r\n  border-left-color: transparent;\r\n  border-top-color: transparent;\r\n  border-right-color: transparent;\r\n  border-bottom-color: transparent;\r\n  border-left-color: transparent;\r\n  padding: 1.2rem 3.75rem;\r\n  font-size: 1.6rem;\r\n  line-height: 1.25;\r\n  border-radius: 0.25rem;\r\n  -webkit-transition: all 0.15s ease-in-out;\r\n  transition: all 0.15s ease-in-out;\n}\n.progress[data-v-0e0f5124] {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  overflow: hidden;\r\n  font-size: 0.75rem;\r\n  line-height: 1rem;\r\n  text-align: center;\r\n  background-color: #e9ecef;\r\n  border-radius: 0.25rem;\n}\n.bg-danger[data-v-0e0f5124] {\r\n  background-color: #dc3545 !important;\n}\n@media only screen and (max-width: 991px) {\n.modal.show .modal-dialog[data-v-0e0f5124] {\r\n    margin: 40px 20px;\n}\n.btn-cancel[data-v-0e0f5124],\r\n  .btn-crop[data-v-0e0f5124] {\r\n    width: 100%;\r\n    margin: 8px 0 !important;\n}\n.image[data-v-0e0f5124] {\r\n    height: 150px;\n}\n}\n@media only screen and (max-width: 767px) {\n.imageuploadify .imageuploadify-images-list[data-v-0e0f5124] {\r\n    padding: 78px 0;\n}\n.image[data-v-0e0f5124] {\r\n    height: 200px;\n}\n}\n@media only screen and (max-width: 512px) {\n.imageuploadify .imageuploadify-images-list[data-v-0e0f5124] {\r\n    padding: 53px 0;\n}\n.image[data-v-0e0f5124] {\r\n    height: 150px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

/* global module, require */

module.exports = __webpack_require__(203)

__webpack_require__(210)
__webpack_require__(204)
__webpack_require__(231)
__webpack_require__(211)
__webpack_require__(232)
__webpack_require__(212)
__webpack_require__(233)
__webpack_require__(234)


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Fetch
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2017, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require, Promise */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(203)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var global = loadImage.global

  if (
    global.fetch &&
    global.Request &&
    global.Response &&
    global.Response.prototype.blob
  ) {
    loadImage.fetchBlob = function (url, callback, options) {
      /**
       * Fetch response handler.
       *
       * @param {Response} response Fetch response
       * @returns {Blob} Fetched Blob.
       */
      function responseHandler(response) {
        return response.blob()
      }
      if (global.Promise && typeof callback !== 'function') {
        return fetch(new Request(url, callback)).then(responseHandler)
      }
      fetch(new Request(url, options))
        .then(responseHandler)
        .then(callback)
        [
          // Avoid parsing error in IE<9, where catch is a reserved word.
          // eslint-disable-next-line dot-notation
          'catch'
        ](function (err) {
          callback(null, err)
        })
    }
  } else if (
    global.XMLHttpRequest &&
    // https://xhr.spec.whatwg.org/#the-responsetype-attribute
    new XMLHttpRequest().responseType === ''
  ) {
    loadImage.fetchBlob = function (url, callback, options) {
      /**
       * Promise executor
       *
       * @param {Function} resolve Resolution function
       * @param {Function} reject Rejection function
       */
      function executor(resolve, reject) {
        options = options || {} // eslint-disable-line no-param-reassign
        var req = new XMLHttpRequest()
        req.open(options.method || 'GET', url)
        if (options.headers) {
          Object.keys(options.headers).forEach(function (key) {
            req.setRequestHeader(key, options.headers[key])
          })
        }
        req.withCredentials = options.credentials === 'include'
        req.responseType = 'blob'
        req.onload = function () {
          resolve(req.response)
        }
        req.onerror = req.onabort = req.ontimeout = function (err) {
          if (resolve === reject) {
            // Not using Promises
            reject(null, err)
          } else {
            reject(err)
          }
        }
        req.send(options.body)
      }
      if (global.Promise && typeof callback !== 'function') {
        options = callback // eslint-disable-line no-param-reassign
        return new Promise(executor)
      }
      return executor(callback, callback)
    }
  }
})


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Exif Map
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Exif tags mapping based on
 * https://github.com/jseidelin/exif-js
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(203), __webpack_require__(211)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-exif'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var ExifMapProto = loadImage.ExifMap.prototype

  ExifMapProto.tags = {
    // =================
    // TIFF tags (IFD0):
    // =================
    0x0100: 'ImageWidth',
    0x0101: 'ImageHeight',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x011c: 'PlanarConfiguration',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x011a: 'XResolution',
    0x011b: 'YResolution',
    0x0128: 'ResolutionUnit',
    0x0111: 'StripOffsets',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x012d: 'TransferFunction',
    0x013e: 'WhitePoint',
    0x013f: 'PrimaryChromaticities',
    0x0211: 'YCbCrCoefficients',
    0x0214: 'ReferenceBlackWhite',
    0x0132: 'DateTime',
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0131: 'Software',
    0x013b: 'Artist',
    0x8298: 'Copyright',
    0x8769: {
      // ExifIFDPointer
      0x9000: 'ExifVersion', // EXIF version
      0xa000: 'FlashpixVersion', // Flashpix format version
      0xa001: 'ColorSpace', // Color space information tag
      0xa002: 'PixelXDimension', // Valid width of meaningful image
      0xa003: 'PixelYDimension', // Valid height of meaningful image
      0xa500: 'Gamma',
      0x9101: 'ComponentsConfiguration', // Information about channels
      0x9102: 'CompressedBitsPerPixel', // Compressed bits per pixel
      0x927c: 'MakerNote', // Any desired information written by the manufacturer
      0x9286: 'UserComment', // Comments by user
      0xa004: 'RelatedSoundFile', // Name of related sound file
      0x9003: 'DateTimeOriginal', // Date and time when the original image was generated
      0x9004: 'DateTimeDigitized', // Date and time when the image was stored digitally
      0x9010: 'OffsetTime', // Time zone when the image file was last changed
      0x9011: 'OffsetTimeOriginal', // Time zone when the image was stored digitally
      0x9012: 'OffsetTimeDigitized', // Time zone when the image was stored digitally
      0x9290: 'SubSecTime', // Fractions of seconds for DateTime
      0x9291: 'SubSecTimeOriginal', // Fractions of seconds for DateTimeOriginal
      0x9292: 'SubSecTimeDigitized', // Fractions of seconds for DateTimeDigitized
      0x829a: 'ExposureTime', // Exposure time (in seconds)
      0x829d: 'FNumber',
      0x8822: 'ExposureProgram', // Exposure program
      0x8824: 'SpectralSensitivity', // Spectral sensitivity
      0x8827: 'PhotographicSensitivity', // EXIF 2.3, ISOSpeedRatings in EXIF 2.2
      0x8828: 'OECF', // Optoelectric conversion factor
      0x8830: 'SensitivityType',
      0x8831: 'StandardOutputSensitivity',
      0x8832: 'RecommendedExposureIndex',
      0x8833: 'ISOSpeed',
      0x8834: 'ISOSpeedLatitudeyyy',
      0x8835: 'ISOSpeedLatitudezzz',
      0x9201: 'ShutterSpeedValue', // Shutter speed
      0x9202: 'ApertureValue', // Lens aperture
      0x9203: 'BrightnessValue', // Value of brightness
      0x9204: 'ExposureBias', // Exposure bias
      0x9205: 'MaxApertureValue', // Smallest F number of lens
      0x9206: 'SubjectDistance', // Distance to subject in meters
      0x9207: 'MeteringMode', // Metering mode
      0x9208: 'LightSource', // Kind of light source
      0x9209: 'Flash', // Flash status
      0x9214: 'SubjectArea', // Location and area of main subject
      0x920a: 'FocalLength', // Focal length of the lens in mm
      0xa20b: 'FlashEnergy', // Strobe energy in BCPS
      0xa20c: 'SpatialFrequencyResponse',
      0xa20e: 'FocalPlaneXResolution', // Number of pixels in width direction per FPRUnit
      0xa20f: 'FocalPlaneYResolution', // Number of pixels in height direction per FPRUnit
      0xa210: 'FocalPlaneResolutionUnit', // Unit for measuring the focal plane resolution
      0xa214: 'SubjectLocation', // Location of subject in image
      0xa215: 'ExposureIndex', // Exposure index selected on camera
      0xa217: 'SensingMethod', // Image sensor type
      0xa300: 'FileSource', // Image source (3 == DSC)
      0xa301: 'SceneType', // Scene type (1 == directly photographed)
      0xa302: 'CFAPattern', // Color filter array geometric pattern
      0xa401: 'CustomRendered', // Special processing
      0xa402: 'ExposureMode', // Exposure mode
      0xa403: 'WhiteBalance', // 1 = auto white balance, 2 = manual
      0xa404: 'DigitalZoomRatio', // Digital zoom ratio
      0xa405: 'FocalLengthIn35mmFilm',
      0xa406: 'SceneCaptureType', // Type of scene
      0xa407: 'GainControl', // Degree of overall image gain adjustment
      0xa408: 'Contrast', // Direction of contrast processing applied by camera
      0xa409: 'Saturation', // Direction of saturation processing applied by camera
      0xa40a: 'Sharpness', // Direction of sharpness processing applied by camera
      0xa40b: 'DeviceSettingDescription',
      0xa40c: 'SubjectDistanceRange', // Distance to subject
      0xa420: 'ImageUniqueID', // Identifier assigned uniquely to each image
      0xa430: 'CameraOwnerName',
      0xa431: 'BodySerialNumber',
      0xa432: 'LensSpecification',
      0xa433: 'LensMake',
      0xa434: 'LensModel',
      0xa435: 'LensSerialNumber'
    },
    0x8825: {
      // GPSInfoIFDPointer
      0x0000: 'GPSVersionID',
      0x0001: 'GPSLatitudeRef',
      0x0002: 'GPSLatitude',
      0x0003: 'GPSLongitudeRef',
      0x0004: 'GPSLongitude',
      0x0005: 'GPSAltitudeRef',
      0x0006: 'GPSAltitude',
      0x0007: 'GPSTimeStamp',
      0x0008: 'GPSSatellites',
      0x0009: 'GPSStatus',
      0x000a: 'GPSMeasureMode',
      0x000b: 'GPSDOP',
      0x000c: 'GPSSpeedRef',
      0x000d: 'GPSSpeed',
      0x000e: 'GPSTrackRef',
      0x000f: 'GPSTrack',
      0x0010: 'GPSImgDirectionRef',
      0x0011: 'GPSImgDirection',
      0x0012: 'GPSMapDatum',
      0x0013: 'GPSDestLatitudeRef',
      0x0014: 'GPSDestLatitude',
      0x0015: 'GPSDestLongitudeRef',
      0x0016: 'GPSDestLongitude',
      0x0017: 'GPSDestBearingRef',
      0x0018: 'GPSDestBearing',
      0x0019: 'GPSDestDistanceRef',
      0x001a: 'GPSDestDistance',
      0x001b: 'GPSProcessingMethod',
      0x001c: 'GPSAreaInformation',
      0x001d: 'GPSDateStamp',
      0x001e: 'GPSDifferential',
      0x001f: 'GPSHPositioningError'
    },
    0xa005: {
      // InteroperabilityIFDPointer
      0x0001: 'InteroperabilityIndex'
    }
  }

  // IFD1 directory can contain any IFD0 tags:
  ExifMapProto.tags.ifd1 = ExifMapProto.tags

  ExifMapProto.stringValues = {
    ExposureProgram: {
      0: 'Undefined',
      1: 'Manual',
      2: 'Normal program',
      3: 'Aperture priority',
      4: 'Shutter priority',
      5: 'Creative program',
      6: 'Action program',
      7: 'Portrait mode',
      8: 'Landscape mode'
    },
    MeteringMode: {
      0: 'Unknown',
      1: 'Average',
      2: 'CenterWeightedAverage',
      3: 'Spot',
      4: 'MultiSpot',
      5: 'Pattern',
      6: 'Partial',
      255: 'Other'
    },
    LightSource: {
      0: 'Unknown',
      1: 'Daylight',
      2: 'Fluorescent',
      3: 'Tungsten (incandescent light)',
      4: 'Flash',
      9: 'Fine weather',
      10: 'Cloudy weather',
      11: 'Shade',
      12: 'Daylight fluorescent (D 5700 - 7100K)',
      13: 'Day white fluorescent (N 4600 - 5400K)',
      14: 'Cool white fluorescent (W 3900 - 4500K)',
      15: 'White fluorescent (WW 3200 - 3700K)',
      17: 'Standard light A',
      18: 'Standard light B',
      19: 'Standard light C',
      20: 'D55',
      21: 'D65',
      22: 'D75',
      23: 'D50',
      24: 'ISO studio tungsten',
      255: 'Other'
    },
    Flash: {
      0x0000: 'Flash did not fire',
      0x0001: 'Flash fired',
      0x0005: 'Strobe return light not detected',
      0x0007: 'Strobe return light detected',
      0x0009: 'Flash fired, compulsory flash mode',
      0x000d: 'Flash fired, compulsory flash mode, return light not detected',
      0x000f: 'Flash fired, compulsory flash mode, return light detected',
      0x0010: 'Flash did not fire, compulsory flash mode',
      0x0018: 'Flash did not fire, auto mode',
      0x0019: 'Flash fired, auto mode',
      0x001d: 'Flash fired, auto mode, return light not detected',
      0x001f: 'Flash fired, auto mode, return light detected',
      0x0020: 'No flash function',
      0x0041: 'Flash fired, red-eye reduction mode',
      0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
      0x0047: 'Flash fired, red-eye reduction mode, return light detected',
      0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
      0x004d: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
      0x004f: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
      0x0059: 'Flash fired, auto mode, red-eye reduction mode',
      0x005d: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
      0x005f: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
    },
    SensingMethod: {
      1: 'Undefined',
      2: 'One-chip color area sensor',
      3: 'Two-chip color area sensor',
      4: 'Three-chip color area sensor',
      5: 'Color sequential area sensor',
      7: 'Trilinear sensor',
      8: 'Color sequential linear sensor'
    },
    SceneCaptureType: {
      0: 'Standard',
      1: 'Landscape',
      2: 'Portrait',
      3: 'Night scene'
    },
    SceneType: {
      1: 'Directly photographed'
    },
    CustomRendered: {
      0: 'Normal process',
      1: 'Custom process'
    },
    WhiteBalance: {
      0: 'Auto white balance',
      1: 'Manual white balance'
    },
    GainControl: {
      0: 'None',
      1: 'Low gain up',
      2: 'High gain up',
      3: 'Low gain down',
      4: 'High gain down'
    },
    Contrast: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    Saturation: {
      0: 'Normal',
      1: 'Low saturation',
      2: 'High saturation'
    },
    Sharpness: {
      0: 'Normal',
      1: 'Soft',
      2: 'Hard'
    },
    SubjectDistanceRange: {
      0: 'Unknown',
      1: 'Macro',
      2: 'Close view',
      3: 'Distant view'
    },
    FileSource: {
      3: 'DSC'
    },
    ComponentsConfiguration: {
      0: '',
      1: 'Y',
      2: 'Cb',
      3: 'Cr',
      4: 'R',
      5: 'G',
      6: 'B'
    },
    Orientation: {
      1: 'Original',
      2: 'Horizontal flip',
      3: 'Rotate 180° CCW',
      4: 'Vertical flip',
      5: 'Vertical flip + Rotate 90° CW',
      6: 'Rotate 90° CW',
      7: 'Horizontal flip + Rotate 90° CW',
      8: 'Rotate 90° CCW'
    }
  }

  ExifMapProto.getText = function (name) {
    var value = this.get(name)
    switch (name) {
      case 'LightSource':
      case 'Flash':
      case 'MeteringMode':
      case 'ExposureProgram':
      case 'SensingMethod':
      case 'SceneCaptureType':
      case 'SceneType':
      case 'CustomRendered':
      case 'WhiteBalance':
      case 'GainControl':
      case 'Contrast':
      case 'Saturation':
      case 'Sharpness':
      case 'SubjectDistanceRange':
      case 'FileSource':
      case 'Orientation':
        return this.stringValues[name][value]
      case 'ExifVersion':
      case 'FlashpixVersion':
        if (!value) return
        return String.fromCharCode(value[0], value[1], value[2], value[3])
      case 'ComponentsConfiguration':
        if (!value) return
        return (
          this.stringValues[name][value[0]] +
          this.stringValues[name][value[1]] +
          this.stringValues[name][value[2]] +
          this.stringValues[name][value[3]]
        )
      case 'GPSVersionID':
        if (!value) return
        return value[0] + '.' + value[1] + '.' + value[2] + '.' + value[3]
    }
    return String(value)
  }

  ExifMapProto.getAll = function () {
    var map = {}
    var prop
    var obj
    var name
    for (prop in this) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        obj = this[prop]
        if (obj && obj.getAll) {
          map[this.ifds[prop].name] = obj.getAll()
        } else {
          name = this.tags[prop]
          if (name) map[name] = this.getText(name)
        }
      }
    }
    return map
  }

  ExifMapProto.getName = function (tagCode) {
    var name = this.tags[tagCode]
    if (typeof name === 'object') return this.ifds[tagCode].name
    return name
  }

  // Extend the map of tag names to tag codes:
  ;(function () {
    var tags = ExifMapProto.tags
    var prop
    var ifd
    var subTags
    // Map the tag names to tags:
    for (prop in tags) {
      if (Object.prototype.hasOwnProperty.call(tags, prop)) {
        ifd = ExifMapProto.ifds[prop]
        if (ifd) {
          subTags = tags[prop]
          for (prop in subTags) {
            if (Object.prototype.hasOwnProperty.call(subTags, prop)) {
              ifd.map[subTags[prop]] = Number(prop)
            }
          }
        } else {
          ExifMapProto.map[tags[prop]] = Number(prop)
        }
      }
    }
  })()
})


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image IPTC Map
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * Copyright 2018, Dave Bevan
 *
 * IPTC tags mapping based on
 * https://iptc.org/standards/photo-metadata
 * https://exiftool.org/TagNames/IPTC.html
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, module, require */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(203), __webpack_require__(212)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./load-image'), require('./load-image-iptc'))
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var IptcMapProto = loadImage.IptcMap.prototype

  IptcMapProto.tags = {
    0: 'ApplicationRecordVersion',
    3: 'ObjectTypeReference',
    4: 'ObjectAttributeReference',
    5: 'ObjectName',
    7: 'EditStatus',
    8: 'EditorialUpdate',
    10: 'Urgency',
    12: 'SubjectReference',
    15: 'Category',
    20: 'SupplementalCategories',
    22: 'FixtureIdentifier',
    25: 'Keywords',
    26: 'ContentLocationCode',
    27: 'ContentLocationName',
    30: 'ReleaseDate',
    35: 'ReleaseTime',
    37: 'ExpirationDate',
    38: 'ExpirationTime',
    40: 'SpecialInstructions',
    42: 'ActionAdvised',
    45: 'ReferenceService',
    47: 'ReferenceDate',
    50: 'ReferenceNumber',
    55: 'DateCreated',
    60: 'TimeCreated',
    62: 'DigitalCreationDate',
    63: 'DigitalCreationTime',
    65: 'OriginatingProgram',
    70: 'ProgramVersion',
    75: 'ObjectCycle',
    80: 'Byline',
    85: 'BylineTitle',
    90: 'City',
    92: 'Sublocation',
    95: 'State',
    100: 'CountryCode',
    101: 'Country',
    103: 'OriginalTransmissionReference',
    105: 'Headline',
    110: 'Credit',
    115: 'Source',
    116: 'CopyrightNotice',
    118: 'Contact',
    120: 'Caption',
    121: 'LocalCaption',
    122: 'Writer',
    125: 'RasterizedCaption',
    130: 'ImageType',
    131: 'ImageOrientation',
    135: 'LanguageIdentifier',
    150: 'AudioType',
    151: 'AudioSamplingRate',
    152: 'AudioSamplingResolution',
    153: 'AudioDuration',
    154: 'AudioOutcue',
    184: 'JobID',
    185: 'MasterDocumentID',
    186: 'ShortDocumentID',
    187: 'UniqueDocumentID',
    188: 'OwnerID',
    200: 'ObjectPreviewFileFormat',
    201: 'ObjectPreviewFileVersion',
    202: 'ObjectPreviewData',
    221: 'Prefs',
    225: 'ClassifyState',
    228: 'SimilarityIndex',
    230: 'DocumentNotes',
    231: 'DocumentHistory',
    232: 'ExifCameraInfo',
    255: 'CatalogSets'
  }

  IptcMapProto.stringValues = {
    10: {
      0: '0 (reserved)',
      1: '1 (most urgent)',
      2: '2',
      3: '3',
      4: '4',
      5: '5 (normal urgency)',
      6: '6',
      7: '7',
      8: '8 (least urgent)',
      9: '9 (user-defined priority)'
    },
    75: {
      a: 'Morning',
      b: 'Both Morning and Evening',
      p: 'Evening'
    },
    131: {
      L: 'Landscape',
      P: 'Portrait',
      S: 'Square'
    }
  }

  IptcMapProto.getText = function (id) {
    var value = this.get(id)
    var tagCode = this.map[id]
    var stringValue = this.stringValues[tagCode]
    if (stringValue) return stringValue[value]
    return String(value)
  }

  IptcMapProto.getAll = function () {
    var map = {}
    var prop
    var name
    for (prop in this) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        name = this.tags[prop]
        if (name) map[name] = this.getText(name)
      }
    }
    return map
  }

  IptcMapProto.getName = function (tagCode) {
    return this.tags[tagCode]
  }

  // Extend the map of tag names to tag codes:
  ;(function () {
    var tags = IptcMapProto.tags
    var map = IptcMapProto.map || {}
    var prop
    // Map the tag names to tags:
    for (prop in tags) {
      if (Object.prototype.hasOwnProperty.call(tags, prop)) {
        map[tags[prop]] = Number(prop)
      }
    }
  })()
})


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Load Image Orientation
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/*
Exif orientation values to correctly display the letter F:

    1             2
  ██████        ██████
  ██                ██
  ████            ████
  ██                ██
  ██                ██

    3             4
      ██        ██
      ██        ██
    ████        ████
      ██        ██
  ██████        ██████

    5             6
██████████    ██
██  ██        ██  ██
██            ██████████

    7             8
        ██    ██████████
    ██  ██        ██  ██
██████████            ██

*/

/* global define, module, require */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(203), __webpack_require__(210), __webpack_require__(204)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    factory(
      require('./load-image'),
      require('./load-image-scale'),
      require('./load-image-meta')
    )
  } else {
    // Browser globals:
    factory(window.loadImage)
  }
})(function (loadImage) {
  'use strict'

  var originalTransform = loadImage.transform
  var originalRequiresCanvas = loadImage.requiresCanvas
  var originalRequiresMetaData = loadImage.requiresMetaData
  var originalTransformCoordinates = loadImage.transformCoordinates
  var originalGetTransformedOptions = loadImage.getTransformedOptions

  ;(function ($) {
    // Guard for non-browser environments (e.g. server-side rendering):
    if (!$.global.document) return
    // black+white 3x2 JPEG, with the following meta information set:
    // - EXIF Orientation: 6 (Rotated 90° CCW)
    // Image data layout (B=black, F=white):
    // BFF
    // BBB
    var testImageURL =
      'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
      'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
      'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
      'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAIAAwMBEQACEQEDEQH/x' +
      'ABRAAEAAAAAAAAAAAAAAAAAAAAKEAEBAQADAQEAAAAAAAAAAAAGBQQDCAkCBwEBAAAAAAA' +
      'AAAAAAAAAAAAAABEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AG8T9NfSMEVMhQ' +
      'voP3fFiRZ+MTHDifa/95OFSZU5OzRzxkyejv8ciEfhSceSXGjS8eSdLnZc2HDm4M3BxcXw' +
      'H/9k='
    var img = document.createElement('img')
    img.onload = function () {
      // Check if the browser supports automatic image orientation:
      $.orientation = img.width === 2 && img.height === 3
      if ($.orientation) {
        var canvas = $.createCanvas(1, 1, true)
        var ctx = canvas.getContext('2d')
        ctx.drawImage(img, 1, 1, 1, 1, 0, 0, 1, 1)
        // Check if the source image coordinates (sX, sY, sWidth, sHeight) are
        // correctly applied to the auto-orientated image, which should result
        // in a white opaque pixel (e.g. in Safari).
        // Browsers that show a transparent pixel (e.g. Chromium) fail to crop
        // auto-oriented images correctly and require a workaround, e.g.
        // drawing the complete source image to an intermediate canvas first.
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=1074354
        $.orientationCropBug =
          ctx.getImageData(0, 0, 1, 1).data.toString() !== '255,255,255,255'
      }
    }
    img.src = testImageURL
  })(loadImage)

  /**
   * Determines if the orientation requires a canvas element.
   *
   * @param {object} [options] Options object
   * @param {boolean} [withMetaData] Is metadata required for orientation
   * @returns {boolean} Returns true if orientation requires canvas/meta
   */
  function requiresCanvasOrientation(options, withMetaData) {
    var orientation = options && options.orientation
    return (
      // Exif orientation for browsers without automatic image orientation:
      (orientation === true && !loadImage.orientation) ||
      // Orientation reset for browsers with automatic image orientation:
      (orientation === 1 && loadImage.orientation) ||
      // Orientation to defined value, requires meta for orientation reset only:
      ((!withMetaData || loadImage.orientation) &&
        orientation > 1 &&
        orientation < 9)
    )
  }

  /**
   * Determines if the image requires an orientation change.
   *
   * @param {number} [orientation] Defined orientation value
   * @param {number} [autoOrientation] Auto-orientation based on Exif data
   * @returns {boolean} Returns true if an orientation change is required
   */
  function requiresOrientationChange(orientation, autoOrientation) {
    return (
      orientation !== autoOrientation &&
      ((orientation === 1 && autoOrientation > 1 && autoOrientation < 9) ||
        (orientation > 1 && orientation < 9))
    )
  }

  /**
   * Determines orientation combinations that require a rotation by 180°.
   *
   * The following is a list of combinations that return true:
   *
   * 2 (flip) => 5 (rot90,flip), 7 (rot90,flip), 6 (rot90), 8 (rot90)
   * 4 (flip) => 5 (rot90,flip), 7 (rot90,flip), 6 (rot90), 8 (rot90)
   *
   * 5 (rot90,flip) => 2 (flip), 4 (flip), 6 (rot90), 8 (rot90)
   * 7 (rot90,flip) => 2 (flip), 4 (flip), 6 (rot90), 8 (rot90)
   *
   * 6 (rot90) => 2 (flip), 4 (flip), 5 (rot90,flip), 7 (rot90,flip)
   * 8 (rot90) => 2 (flip), 4 (flip), 5 (rot90,flip), 7 (rot90,flip)
   *
   * @param {number} [orientation] Defined orientation value
   * @param {number} [autoOrientation] Auto-orientation based on Exif data
   * @returns {boolean} Returns true if rotation by 180° is required
   */
  function requiresRot180(orientation, autoOrientation) {
    if (autoOrientation > 1 && autoOrientation < 9) {
      switch (orientation) {
        case 2:
        case 4:
          return autoOrientation > 4
        case 5:
        case 7:
          return autoOrientation % 2 === 0
        case 6:
        case 8:
          return (
            autoOrientation === 2 ||
            autoOrientation === 4 ||
            autoOrientation === 5 ||
            autoOrientation === 7
          )
      }
    }
    return false
  }

  // Determines if the target image should be a canvas element:
  loadImage.requiresCanvas = function (options) {
    return (
      requiresCanvasOrientation(options) ||
      originalRequiresCanvas.call(loadImage, options)
    )
  }

  // Determines if metadata should be loaded automatically:
  loadImage.requiresMetaData = function (options) {
    return (
      requiresCanvasOrientation(options, true) ||
      originalRequiresMetaData.call(loadImage, options)
    )
  }

  loadImage.transform = function (img, options, callback, file, data) {
    originalTransform.call(
      loadImage,
      img,
      options,
      function (img, data) {
        if (data) {
          var autoOrientation =
            loadImage.orientation && data.exif && data.exif.get('Orientation')
          if (autoOrientation > 4 && autoOrientation < 9) {
            // Automatic image orientation switched image dimensions
            var originalWidth = data.originalWidth
            var originalHeight = data.originalHeight
            data.originalWidth = originalHeight
            data.originalHeight = originalWidth
          }
        }
        callback(img, data)
      },
      file,
      data
    )
  }

  // Transforms coordinate and dimension options
  // based on the given orientation option:
  loadImage.getTransformedOptions = function (img, opts, data) {
    var options = originalGetTransformedOptions.call(loadImage, img, opts)
    var exifOrientation = data.exif && data.exif.get('Orientation')
    var orientation = options.orientation
    var autoOrientation = loadImage.orientation && exifOrientation
    if (orientation === true) orientation = exifOrientation
    if (!requiresOrientationChange(orientation, autoOrientation)) {
      return options
    }
    var top = options.top
    var right = options.right
    var bottom = options.bottom
    var left = options.left
    var newOptions = {}
    for (var i in options) {
      if (Object.prototype.hasOwnProperty.call(options, i)) {
        newOptions[i] = options[i]
      }
    }
    newOptions.orientation = orientation
    if (
      (orientation > 4 && !(autoOrientation > 4)) ||
      (orientation < 5 && autoOrientation > 4)
    ) {
      // Image dimensions and target dimensions are switched
      newOptions.maxWidth = options.maxHeight
      newOptions.maxHeight = options.maxWidth
      newOptions.minWidth = options.minHeight
      newOptions.minHeight = options.minWidth
      newOptions.sourceWidth = options.sourceHeight
      newOptions.sourceHeight = options.sourceWidth
    }
    if (autoOrientation > 1) {
      // Browsers which correctly apply source image coordinates to
      // auto-oriented images
      switch (autoOrientation) {
        case 2:
          // Horizontal flip
          right = options.left
          left = options.right
          break
        case 3:
          // 180° Rotate CCW
          top = options.bottom
          right = options.left
          bottom = options.top
          left = options.right
          break
        case 4:
          // Vertical flip
          top = options.bottom
          bottom = options.top
          break
        case 5:
          // Horizontal flip + 90° Rotate CCW
          top = options.left
          right = options.bottom
          bottom = options.right
          left = options.top
          break
        case 6:
          // 90° Rotate CCW
          top = options.left
          right = options.top
          bottom = options.right
          left = options.bottom
          break
        case 7:
          // Vertical flip + 90° Rotate CCW
          top = options.right
          right = options.top
          bottom = options.left
          left = options.bottom
          break
        case 8:
          // 90° Rotate CW
          top = options.right
          right = options.bottom
          bottom = options.left
          left = options.top
          break
      }
      // Some orientation combinations require additional rotation by 180°:
      if (requiresRot180(orientation, autoOrientation)) {
        var tmpTop = top
        var tmpRight = right
        top = bottom
        right = left
        bottom = tmpTop
        left = tmpRight
      }
    }
    newOptions.top = top
    newOptions.right = right
    newOptions.bottom = bottom
    newOptions.left = left
    // Account for defined browser orientation:
    switch (orientation) {
      case 2:
        // Horizontal flip
        newOptions.right = left
        newOptions.left = right
        break
      case 3:
        // 180° Rotate CCW
        newOptions.top = bottom
        newOptions.right = left
        newOptions.bottom = top
        newOptions.left = right
        break
      case 4:
        // Vertical flip
        newOptions.top = bottom
        newOptions.bottom = top
        break
      case 5:
        // Vertical flip + 90° Rotate CW
        newOptions.top = left
        newOptions.right = bottom
        newOptions.bottom = right
        newOptions.left = top
        break
      case 6:
        // 90° Rotate CW
        newOptions.top = right
        newOptions.right = bottom
        newOptions.bottom = left
        newOptions.left = top
        break
      case 7:
        // Horizontal flip + 90° Rotate CW
        newOptions.top = right
        newOptions.right = top
        newOptions.bottom = left
        newOptions.left = bottom
        break
      case 8:
        // 90° Rotate CCW
        newOptions.top = left
        newOptions.right = top
        newOptions.bottom = right
        newOptions.left = bottom
        break
    }
    return newOptions
  }

  // Transform image orientation based on the given EXIF orientation option:
  loadImage.transformCoordinates = function (canvas, options, data) {
    originalTransformCoordinates.call(loadImage, canvas, options, data)
    var orientation = options.orientation
    var autoOrientation =
      loadImage.orientation && data.exif && data.exif.get('Orientation')
    if (!requiresOrientationChange(orientation, autoOrientation)) {
      return
    }
    var ctx = canvas.getContext('2d')
    var width = canvas.width
    var height = canvas.height
    var sourceWidth = width
    var sourceHeight = height
    if (
      (orientation > 4 && !(autoOrientation > 4)) ||
      (orientation < 5 && autoOrientation > 4)
    ) {
      // Image dimensions and target dimensions are switched
      canvas.width = height
      canvas.height = width
    }
    if (orientation > 4) {
      // Destination and source dimensions are switched
      sourceWidth = height
      sourceHeight = width
    }
    // Reset automatic browser orientation:
    switch (autoOrientation) {
      case 2:
        // Horizontal flip
        ctx.translate(sourceWidth, 0)
        ctx.scale(-1, 1)
        break
      case 3:
        // 180° Rotate CCW
        ctx.translate(sourceWidth, sourceHeight)
        ctx.rotate(Math.PI)
        break
      case 4:
        // Vertical flip
        ctx.translate(0, sourceHeight)
        ctx.scale(1, -1)
        break
      case 5:
        // Horizontal flip + 90° Rotate CCW
        ctx.rotate(-0.5 * Math.PI)
        ctx.scale(-1, 1)
        break
      case 6:
        // 90° Rotate CCW
        ctx.rotate(-0.5 * Math.PI)
        ctx.translate(-sourceWidth, 0)
        break
      case 7:
        // Vertical flip + 90° Rotate CCW
        ctx.rotate(-0.5 * Math.PI)
        ctx.translate(-sourceWidth, sourceHeight)
        ctx.scale(1, -1)
        break
      case 8:
        // 90° Rotate CW
        ctx.rotate(0.5 * Math.PI)
        ctx.translate(0, -sourceHeight)
        break
    }
    // Some orientation combinations require additional rotation by 180°:
    if (requiresRot180(orientation, autoOrientation)) {
      ctx.translate(sourceWidth, sourceHeight)
      ctx.rotate(Math.PI)
    }
    switch (orientation) {
      case 2:
        // Horizontal flip
        ctx.translate(width, 0)
        ctx.scale(-1, 1)
        break
      case 3:
        // 180° Rotate CCW
        ctx.translate(width, height)
        ctx.rotate(Math.PI)
        break
      case 4:
        // Vertical flip
        ctx.translate(0, height)
        ctx.scale(1, -1)
        break
      case 5:
        // Vertical flip + 90° Rotate CW
        ctx.rotate(0.5 * Math.PI)
        ctx.scale(1, -1)
        break
      case 6:
        // 90° Rotate CW
        ctx.rotate(0.5 * Math.PI)
        ctx.translate(0, -height)
        break
      case 7:
        // Horizontal flip + 90° Rotate CW
        ctx.rotate(0.5 * Math.PI)
        ctx.translate(width, -height)
        ctx.scale(-1, 1)
        break
      case 8:
        // 90° Rotate CCW
        ctx.rotate(-0.5 * Math.PI)
        ctx.translate(-width, 0)
        break
    }
  }
})


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Image Compressor v0.5.3
 * https://github.com/xkeshi/image-compressor
 *
 * Copyright (c) 2017 Xkeshi
 * Released under the MIT license
 *
 * Date: 2017-12-29T06:11:20.022Z
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ImageCompressor = factory());
}(this, (function () { 'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var canvasToBlob = createCommonjsModule(function (module) {
/*
 * JavaScript Canvas to Blob
 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on stackoverflow user Stoive's code snippet:
 * http://stackoverflow.com/q/4998908
 */

/* global atob, Blob, define */

(function (window) {
  'use strict';

  var CanvasPrototype =
    window.HTMLCanvasElement && window.HTMLCanvasElement.prototype;
  var hasBlobConstructor =
    window.Blob &&
    (function () {
      try {
        return Boolean(new Blob())
      } catch (e) {
        return false
      }
    })();
  var hasArrayBufferViewSupport =
    hasBlobConstructor &&
    window.Uint8Array &&
    (function () {
      try {
        return new Blob([new Uint8Array(100)]).size === 100
      } catch (e) {
        return false
      }
    })();
  var BlobBuilder =
    window.BlobBuilder ||
    window.WebKitBlobBuilder ||
    window.MozBlobBuilder ||
    window.MSBlobBuilder;
  var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
  var dataURLtoBlob =
    (hasBlobConstructor || BlobBuilder) &&
    window.atob &&
    window.ArrayBuffer &&
    window.Uint8Array &&
    function (dataURI) {
      var matches,
        mediaType,
        isBase64,
        dataString,
        byteString,
        arrayBuffer,
        intArray,
        i,
        bb;
      // Parse the dataURI components as per RFC 2397
      matches = dataURI.match(dataURIPattern);
      if (!matches) {
        throw new Error('invalid data URI')
      }
      // Default to text/plain;charset=US-ASCII
      mediaType = matches[2]
        ? matches[1]
        : 'text/plain' + (matches[3] || ';charset=US-ASCII');
      isBase64 = !!matches[4];
      dataString = dataURI.slice(matches[0].length);
      if (isBase64) {
        // Convert base64 to raw binary data held in a string:
        byteString = atob(dataString);
      } else {
        // Convert base64/URLEncoded data component to raw binary:
        byteString = decodeURIComponent(dataString);
      }
      // Write the bytes of the string to an ArrayBuffer:
      arrayBuffer = new ArrayBuffer(byteString.length);
      intArray = new Uint8Array(arrayBuffer);
      for (i = 0; i < byteString.length; i += 1) {
        intArray[i] = byteString.charCodeAt(i);
      }
      // Write the ArrayBuffer (or ArrayBufferView) to a blob:
      if (hasBlobConstructor) {
        return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
          type: mediaType
        })
      }
      bb = new BlobBuilder();
      bb.append(arrayBuffer);
      return bb.getBlob(mediaType)
    };
  if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
    if (CanvasPrototype.mozGetAsFile) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this;
        setTimeout(function () {
          if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
            callback(dataURLtoBlob(self.toDataURL(type, quality)));
          } else {
            callback(self.mozGetAsFile('blob', type));
          }
        });
      };
    } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this;
        setTimeout(function () {
          callback(dataURLtoBlob(self.toDataURL(type, quality)));
        });
      };
    }
  }
  if (false) {
    undefined(function () {
      return dataURLtoBlob
    });
  } else if ('object' === 'object' && module.exports) {
    module.exports = dataURLtoBlob;
  } else {
    window.dataURLtoBlob = dataURLtoBlob;
  }
})(window);
});

/* globals Blob */
'use strict';
var toString = Object.prototype.toString;

var isBlob = function (x) {
	return x instanceof Blob || toString.call(x) === '[object Blob]';
};

var DEFAULTS = {
  /**
   * Indicates if read the image's Exif Orientation information,
   * and then rotate or flip the image automatically.
   * @type {boolean}
   */
  checkOrientation: true,

  /**
   * The max width of the output image.
   * @type {number}
   */
  maxWidth: Infinity,

  /**
   * The max height of the output image.
   * @type {number}
   */
  maxHeight: Infinity,

  /**
   * The min width of the output image.
   * @type {number}
   */
  minWidth: 0,

  /**
   * The min height of the output image.
   * @type {number}
   */
  minHeight: 0,

  /**
   * The width of the output image.
   * If not specified, the natural width of the source image will be used.
   * @type {number}
   */
  width: undefined,

  /**
   * The height of the output image.
   * If not specified, the natural height of the source image will be used.
   * @type {number}
   */
  height: undefined,

  /**
   * The quality of the output image.
   * It must be a number between `0` and `1`,
   * and only available for `image/jpeg` and `image/webp` images.
   * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
   * @type {number}
   */
  quality: 0.8,

  /**
   * The mime type of the output image.
   * By default, the original mime type of the source image file will be used.
   * @type {string}
   */
  mimeType: 'auto',

  /**
   * PNG files over this value (5M by default) will be converted to JPEGs.
   * To disable this, just set the value to `Infinity`.
   * Check out {@link https://github.com/xkeshi/image-compressor/issues/2 #2}.
   * @type {number}
   */
  convertSize: 5000000,

  /**
   * The success callback for the image compressing process.
   * @type {Function}
   * @param {File} file - The compressed image File object.
   * @example
   * function (file) { console.log(file) }
   */
  success: null,

  /**
   * The error callback for the image compressing process.
   * @type {Function}
   * @param {Error} err - An Error object.
   * @example
   * function (err) { console.log(err.message) }
   */
  error: null
};

var REGEXP_IMAGE_TYPE = /^image\/.+$/;

/**
 * Check if the given value is a mime type of image.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given is a mime type of image, else `false`.
 */
function isImageType(value) {
  return REGEXP_IMAGE_TYPE.test(value);
}

/**
 * Convert image type to extension.
 * @param {string} value - The image type to convert.
 * @param {boolean} [includeDot=true] - Include a leading dot or not.
 * @returns {boolean} Returns the image extension.
 */
function imageTypeToExtension(value) {
  var includeDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var extension = isImageType(value) ? value.substr(6) : '';

  if (extension === 'jpeg') {
    extension = 'jpg';
  }

  if (extension && includeDot) {
    extension = '.' + extension;
  }

  return extension;
}

var fromCharCode = String.fromCharCode;

/**
 * Get string from char code in data view.
 * @param {DataView} dataView - The data view for read.
 * @param {number} start - The start index.
 * @param {number} length - The read length.
 * @returns {string} The read result.
 */

function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i = void 0;

  length += start;

  for (i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }

  return str;
}

var _window$1 = window;
var btoa = _window$1.btoa;

/**
 * Transform array buffer to Data URL.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
 * @param {string} mimeType - The mime type of the Data URL.
 * @returns {string} The result Data URL.
 */

function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var uint8 = new Uint8Array(arrayBuffer);
  var length = uint8.length;

  var data = '';
  var i = void 0;

  // TypedArray.prototype.forEach is not supported in some browsers.
  for (i = 0; i < length; i += 1) {
    data += fromCharCode(uint8[i]);
  }

  return 'data:' + mimeType + ';base64,' + btoa(data);
}

/**
 * Get orientation value from given array buffer.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
 * @returns {number} The read orientation value.
 */
function getOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation = void 0;
  var littleEndian = void 0;
  var app1Start = void 0;
  var ifdStart = void 0;

  // Only handle JPEG image (start by 0xFFD8)
  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
    var length = dataView.byteLength;
    var offset = 2;

    while (offset < length) {
      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
        app1Start = offset;
        break;
      }

      offset += 1;
    }
  }

  if (app1Start) {
    var exifIDCode = app1Start + 4;
    var tiffOffset = app1Start + 10;

    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
      var endianness = dataView.getUint16(tiffOffset);

      littleEndian = endianness === 0x4949;

      if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
    }
  }

  if (ifdStart) {
    var _length = dataView.getUint16(ifdStart, littleEndian);
    var _offset = void 0;
    var i = void 0;

    for (i = 0; i < _length; i += 1) {
      _offset = ifdStart + i * 12 + 2;

      if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
          // 8 is the offset of the current tag's value
          _offset += 8;

          // Get the original orientation value
          orientation = dataView.getUint16(_offset, littleEndian);

          // Override the orientation with its default value
          dataView.setUint16(_offset, 1, littleEndian);
          break;
        }
    }
  }

  return orientation;
}

/**
 * Parse Exif Orientation value.
 * @param {number} orientation - The orientation to parse.
 * @returns {Object} The parsed result.
 */
function parseOrientation(orientation) {
  var rotate = 0;
  var scaleX = 1;
  var scaleY = 1;

  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX = -1;
      break;

    // Rotate left 180°
    case 3:
      rotate = -180;
      break;

    // Flip vertical
    case 4:
      scaleY = -1;
      break;

    // Flip vertical and rotate right 90°
    case 5:
      rotate = 90;
      scaleY = -1;
      break;

    // Rotate right 90°
    case 6:
      rotate = 90;
      break;

    // Flip horizontal and rotate right 90°
    case 7:
      rotate = 90;
      scaleX = -1;
      break;

    // Rotate left 90°
    case 8:
      rotate = -90;
      break;

    default:
  }

  return {
    rotate: rotate,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _window = window;
var ArrayBuffer$1 = _window.ArrayBuffer;
var FileReader = _window.FileReader;

var URL = window.URL || window.webkitURL;
var REGEXP_EXTENSION = /\.\w+$/;

/**
 * Creates a new image compressor.
 * @class
 */

var ImageCompressor = function () {
  /**
   * The constructor of ImageCompressor.
   * @param {File|Blob} file - The target image file for compressing.
   * @param {Object} [options] - The options for compressing.
   */
  function ImageCompressor(file, options) {
    classCallCheck(this, ImageCompressor);

    this.result = null;

    if (file) {
      this.compress(file, options);
    }
  }

  /**
   * The main compress method.
   * @param {File|Blob} file - The target image file for compressing.
   * @param {Object} [options] - The options for compressing.
   * @returns {Promise} - A Promise instance.
   */


  createClass(ImageCompressor, [{
    key: 'compress',
    value: function compress(file, options) {
      var _this = this;

      var image = new Image();

      options = _extends({}, DEFAULTS, options);

      if (!ArrayBuffer$1) {
        options.checkOrientation = false;
      }

      return new Promise(function (resolve, reject) {
        if (!isBlob(file)) {
          reject(new Error('The first argument must be a File or Blob object.'));
          return;
        }

        var mimeType = file.type;

        if (!isImageType(mimeType)) {
          reject(new Error('The first argument must be an image File or Blob object.'));
          return;
        }

        if (!URL && !FileReader) {
          reject(new Error('The current browser does not support image compression.'));
          return;
        }

        if (URL && !options.checkOrientation) {
          resolve(URL.createObjectURL(file));
        } else if (FileReader) {
          var reader = new FileReader();
          var checkOrientation = options.checkOrientation && mimeType === 'image/jpeg';

          reader.onload = function (_ref) {
            var target = _ref.target;
            var result = target.result;


            resolve(checkOrientation ? _extends({
              url: arrayBufferToDataURL(result, mimeType)
            }, parseOrientation(getOrientation(result))) : {
              url: result
            });
          };
          reader.onabort = reject;
          reader.onerror = reject;

          if (checkOrientation) {
            reader.readAsArrayBuffer(file);
          } else {
            reader.readAsDataURL(file);
          }
        }
      }).then(function (data) {
        return new Promise(function (resolve, reject) {
          image.onload = function () {
            return resolve(_extends({}, data, {
              naturalWidth: image.naturalWidth,
              naturalHeight: image.naturalHeight
            }));
          };
          image.onabort = reject;
          image.onerror = reject;
          image.alt = file.name;
          image.src = data.url;
        });
      }).then(function (_ref2) {
        var naturalWidth = _ref2.naturalWidth,
            naturalHeight = _ref2.naturalHeight,
            _ref2$rotate = _ref2.rotate,
            rotate = _ref2$rotate === undefined ? 0 : _ref2$rotate,
            _ref2$scaleX = _ref2.scaleX,
            scaleX = _ref2$scaleX === undefined ? 1 : _ref2$scaleX,
            _ref2$scaleY = _ref2.scaleY,
            scaleY = _ref2$scaleY === undefined ? 1 : _ref2$scaleY;
        return new Promise(function (resolve) {
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          var aspectRatio = naturalWidth / naturalHeight;
          var maxWidth = Math.max(options.maxWidth, 0) || Infinity;
          var maxHeight = Math.max(options.maxHeight, 0) || Infinity;
          var minWidth = Math.max(options.minWidth, 0) || 0;
          var minHeight = Math.max(options.minHeight, 0) || 0;
          var width = naturalWidth;
          var height = naturalHeight;

          if (maxWidth < Infinity && maxHeight < Infinity) {
            if (maxHeight * aspectRatio > maxWidth) {
              maxHeight = maxWidth / aspectRatio;
            } else {
              maxWidth = maxHeight * aspectRatio;
            }
          } else if (maxWidth < Infinity) {
            maxHeight = maxWidth / aspectRatio;
          } else if (maxHeight < Infinity) {
            maxWidth = maxHeight * aspectRatio;
          }

          if (minWidth > 0 && minHeight > 0) {
            if (minHeight * aspectRatio > minWidth) {
              minHeight = minWidth / aspectRatio;
            } else {
              minWidth = minHeight * aspectRatio;
            }
          } else if (minWidth > 0) {
            minHeight = minWidth / aspectRatio;
          } else if (minHeight > 0) {
            minWidth = minHeight * aspectRatio;
          }

          if (options.width > 0) {
            var _options = options;
            width = _options.width;

            height = width / aspectRatio;
          } else if (options.height > 0) {
            var _options2 = options;
            height = _options2.height;

            width = height * aspectRatio;
          }

          width = Math.min(Math.max(width, minWidth), maxWidth);
          height = Math.min(Math.max(height, minHeight), maxHeight);

          var destX = -width / 2;
          var destY = -height / 2;
          var destWidth = width;
          var destHeight = height;

          if (Math.abs(rotate) % 180 === 90) {
            var _width$height = {
              width: height,
              height: width
            };
            width = _width$height.width;
            height = _width$height.height;
          }

          canvas.width = width;
          canvas.height = height;

          // Override the default fill color (#000, black)
          context.fillStyle = 'transparent';
          context.fillRect(0, 0, width, height);
          context.save();
          context.translate(width / 2, height / 2);
          context.rotate(rotate * Math.PI / 180);
          context.scale(scaleX, scaleY);
          context.drawImage(image, Math.floor(destX), Math.floor(destY), Math.floor(destWidth), Math.floor(destHeight));
          context.restore();

          if (!isImageType(options.mimeType)) {
            options.mimeType = file.type;
          }

          // Converts PNG files over the `convertSize` to JPEGs.
          if (file.size > options.convertSize && options.mimeType === 'image/png') {
            options.mimeType = 'image/jpeg';
          }

          var done = function done(result) {
            resolve({
              naturalWidth: naturalWidth,
              naturalHeight: naturalHeight,
              result: result
            });
          };

          if (canvas.toBlob) {
            canvas.toBlob(done, options.mimeType, options.quality);
          } else {
            done(canvasToBlob(canvas.toDataURL(options.mimeType, options.quality)));
          }
        });
      }).then(function (_ref3) {
        var naturalWidth = _ref3.naturalWidth,
            naturalHeight = _ref3.naturalHeight,
            result = _ref3.result;

        if (URL) {
          URL.revokeObjectURL(image.src);
        }

        if (result) {
          // Returns original file if the result is greater than it and without size related options
          if (result.size > file.size && !(options.width > naturalWidth || options.height > naturalHeight || options.minWidth > naturalWidth || options.minHeight > naturalHeight)) {
            result = file;
          } else {
            var date = new Date();

            result.lastModified = date.getTime();
            result.lastModifiedDate = date;
            result.name = file.name;

            // Convert the extension to match its type
            if (result.name && result.type !== file.type) {
              result.name = result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
            }
          }
        } else {
          // Returns original file if the result is null in some cases.
          result = file;
        }

        _this.result = result;

        if (options.success) {
          options.success(result);
        }

        return Promise.resolve(result);
      }).catch(function (err) {
        if (!options.error) {
          throw err;
        }

        options.error(err);
      });
    }
  }]);
  return ImageCompressor;
}();

return ImageCompressor;

})));


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Name: vue-upload-component
 * Version: 2.8.19
 * Author: LianYue
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueUploadComponent = factory());
}(this, (function () { 'use strict';

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
  function request (options) {
    var xhr = createRequest(options);

    return sendRequest(xhr, options.body);
  }

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var ChunkUploadHandler = function () {
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
    }

    /**
     * Gets the max retries from options
     */


    _createClass(ChunkUploadHandler, [{
      key: 'createChunks',


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
      key: 'updateFileProgress',
      value: function updateFileProgress() {
        this.file.progress = this.progress;
      }

      /**
       * Paues the upload process
       * - Stops all active requests
       * - Sets the file not active
       */

    }, {
      key: 'pause',
      value: function pause() {
        this.file.active = false;
        this.stopChunks();
      }

      /**
       * Stops all the current chunks
       */

    }, {
      key: 'stopChunks',
      value: function stopChunks() {
        this.chunksUploading.forEach(function (chunk) {
          chunk.xhr.abort();
          chunk.active = false;
        });
      }

      /**
       * Resumes the file upload
       * - Sets the file active
       * - Starts the following chunks
       */

    }, {
      key: 'resume',
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
      key: 'upload',
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
      key: 'start',
      value: function start() {
        var _this2 = this;

        request({
          method: 'POST',
          headers: Object.assign({}, this.headers, {
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
      key: 'startChunking',
      value: function startChunking() {
        for (var i = 0; i < this.maxActiveChunks; i++) {
          this.uploadNextChunk();
        }
      }

      /**
       * Uploads the next chunk
       * - Won't do anything if the process is paused
       * - Will start finish phase if there are no more chunks to upload
       */

    }, {
      key: 'uploadNextChunk',
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
      key: 'uploadChunk',
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
      key: 'finish',
      value: function finish() {
        var _this4 = this;

        this.updateFileProgress();

        request({
          method: 'POST',
          headers: Object.assign({}, this.headers, {
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
    }, {
      key: 'maxRetries',
      get: function get() {
        return parseInt(this.options.maxRetries);
      }

      /**
       * Gets the max number of active chunks being uploaded at once from options
       */

    }, {
      key: 'maxActiveChunks',
      get: function get() {
        return parseInt(this.options.maxActive);
      }

      /**
       * Gets the file type
       */

    }, {
      key: 'fileType',
      get: function get() {
        return this.file.type;
      }

      /**
       * Gets the file size
       */

    }, {
      key: 'fileSize',
      get: function get() {
        return this.file.size;
      }

      /**
       * Gets the file name
       */

    }, {
      key: 'fileName',
      get: function get() {
        return this.file.name;
      }

      /**
       * Gets action (url) to upload the file
       */

    }, {
      key: 'action',
      get: function get() {
        return this.options.action || null;
      }

      /**
       * Gets the body to be merged when sending the request in start phase
       */

    }, {
      key: 'startBody',
      get: function get() {
        return this.options.startBody || {};
      }

      /**
       * Gets the body to be merged when sending the request in upload phase
       */

    }, {
      key: 'uploadBody',
      get: function get() {
        return this.options.uploadBody || {};
      }

      /**
       * Gets the body to be merged when sending the request in finish phase
       */

    }, {
      key: 'finishBody',
      get: function get() {
        return this.options.finishBody || {};
      }

      /**
       * Gets the headers of the requests from options
       */

    }, {
      key: 'headers',
      get: function get() {
        return this.options.headers || {};
      }

      /**
       * Whether it's ready to upload files or not
       */

    }, {
      key: 'readyToUpload',
      get: function get() {
        return !!this.chunks;
      }

      /**
       * Gets the progress of the chunk upload
       * - Gets all the completed chunks
       * - Gets the progress of all the chunks that are being uploaded
       */

    }, {
      key: 'progress',
      get: function get() {
        var _this5 = this;

        var completedProgress = this.chunksUploaded.length / this.chunks.length * 100;
        var uploadingProgress = this.chunksUploading.reduce(function (progress, chunk) {
          return progress + (chunk.progress | 0) / _this5.chunks.length;
        }, 0);

        return Math.min(completedProgress + uploadingProgress, 100);
      }

      /**
       * Gets all the chunks that are pending to be uploaded
       */

    }, {
      key: 'chunksToUpload',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !chunk.active && !chunk.uploaded;
        });
      }

      /**
       * Whether there are chunks to upload or not
       */

    }, {
      key: 'hasChunksToUpload',
      get: function get() {
        return this.chunksToUpload.length > 0;
      }

      /**
       * Gets all the chunks that are uploading
       */

    }, {
      key: 'chunksUploading',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.xhr && !!chunk.active;
        });
      }

      /**
       * Gets all the chunks that have finished uploading
       */

    }, {
      key: 'chunksUploaded',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.uploaded;
        });
      }
    }]);

    return ChunkUploadHandler;
  }();

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    methods: {
      change: function change(e) {
        this.$parent.addInputFile(e.target);
        if (e.target.files) {
          e.target.value = '';
          if (!/safari/i.test(navigator.userAgent)) {
            e.target.type = '';
            e.target.type = 'file';
          }
        } else {
          // ie9 fix #219
          this.$destroy();
          // eslint-disable-next-line
          new this.constructor({
            parent: this.$parent,
            el: this.$el
          });
        }
      }
    }
  };

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('input', { attrs: { "type": "file", "name": _vm.$parent.name, "id": _vm.$parent.inputId || _vm.$parent.name, "accept": _vm.$parent.accept, "capture": _vm.$parent.capture, "disabled": _vm.$parent.disabled, "webkitdirectory": _vm.$parent.directory && _vm.$parent.features.directory, "directory": _vm.$parent.directory && _vm.$parent.features.directory, "multiple": _vm.$parent.multiple && _vm.$parent.features.html5 }, on: { "change": _vm.change } });
  };
  var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component;
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */

  var InputFile = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var CHUNK_DEFAULT_OPTIONS = {
    headers: {},
    action: '',
    minSize: 1048576,
    maxActive: 3,
    maxRetries: 5,

    handler: ChunkUploadHandler
  };

  var script$1 = {
    components: {
      InputFile: InputFile
    },
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

      disabled: {},

      multiple: {
        type: Boolean
      },

      maximum: {
        type: Number,
        default: function _default() {
          return this.multiple ? 0 : 1;
        }
      },

      addIndex: {
        type: [Boolean, Number]
      },

      directory: {
        type: Boolean
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
        default: Object
      },

      data: {
        type: Object,
        default: Object
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
        default: Array
      },

      value: {
        type: Array,
        default: Array
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

    data: function data() {
      return {
        files: this.value,
        features: {
          html5: true,
          directory: false,
          drag: false
        },

        active: false,
        dropActive: false,

        uploading: 0,

        destroy: false
      };
    },


    /**
     * mounted
     * @return {[type]} [description]
     */
    mounted: function mounted() {
      var input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;

      // html5 特征
      if (window.FormData && input.files) {
        // 上传目录特征
        if (typeof input.webkitdirectory === 'boolean' || typeof input.directory === 'boolean') {
          this.features.directory = true;
        }

        // 拖拽特征
        if (this.features.html5 && typeof input.ondrop !== 'undefined') {
          this.features.drop = true;
        }
      } else {
        this.features.html5 = false;
      }

      // files 定位缓存
      this.maps = {};
      if (this.files) {
        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        }
      }

      this.$nextTick(function () {

        // 更新下父级
        if (this.$parent) {
          this.$parent.$forceUpdate();
        }

        // 拖拽渲染
        this.watchDrop(this.drop);
      });
    },


    /**
     * beforeDestroy
     * @return {[type]} [description]
     */
    beforeDestroy: function beforeDestroy() {
      // 已销毁
      this.destroy = true;

      // 设置成不激活
      this.active = false;
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
        var file = void 0;
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
      value: function value(files) {
        if (this.files === files) {
          return;
        }
        this.files = files;

        var oldMaps = this.maps;

        // 重写 maps 缓存
        this.maps = {};
        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        }

        // add, update
        for (var key in this.maps) {
          var newFile = this.maps[key];
          var oldFile = oldMaps[key];
          if (newFile !== oldFile) {
            this.emitFile(newFile, oldFile);
          }
        }

        // delete
        for (var _key in oldMaps) {
          if (!this.maps[_key]) {
            this.emitFile(undefined, oldMaps[_key]);
          }
        }
      }
    },

    methods: {

      // 清空
      clear: function clear() {
        if (this.files.length) {
          var files = this.files;
          this.files = [];

          // 定位
          this.maps = {};

          // 事件
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

        if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
          return this.maps[id.id] || false;
        }

        return this.maps[id] || false;
      },


      // 添加
      add: function add(_files) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.addIndex;

        var files = _files;
        var isArray = files instanceof Array;

        // 不是数组整理成数组
        if (!isArray) {
          files = [files];
        }

        // 遍历规范对象
        var addFiles = [];
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (this.features.html5 && file instanceof Blob) {
            file = {
              file: file,
              size: file.size,
              name: file.webkitRelativePath || file.relativePath || file.name || 'unknown',
              type: file.type
            };
          }
          var fileObject = false;
          if (file.fileObject === false) ; else if (file.fileObject) {
            fileObject = true;
          } else if (typeof Element !== 'undefined' && file.el instanceof Element) {
            fileObject = true;
          } else if (typeof Blob !== 'undefined' && file.file instanceof Blob) {
            fileObject = true;
          }
          if (fileObject) {
            file = _extends({
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
            }, file, {
              response: {},

              progress: '0.00', // 只读
              speed: 0 // 只读
              // xhr: false,                // 只读
              // iframe: false,             // 只读
            });

            file.data = _extends({}, this.data, file.data ? file.data : {});

            file.headers = _extends({}, this.headers, file.headers ? file.headers : {});
          }

          // 必须包含 id
          if (!file.id) {
            file.id = Math.random().toString(36).substr(2);
          }

          if (this.emitFilter(file, undefined)) {
            continue;
          }

          // 最大数量限制
          if (this.maximum > 1 && addFiles.length + this.files.length >= this.maximum) {
            break;
          }

          addFiles.push(file);

          // 最大数量限制
          if (this.maximum === 1) {
            break;
          }
        }

        // 没有文件
        if (!addFiles.length) {
          return false;
        }

        // 如果是 1 清空
        if (this.maximum === 1) {
          this.clear();
        }

        // 添加进去 files
        var newFiles = void 0;
        if (index === true || index === 0) {
          newFiles = addFiles.concat(this.files);
        } else if (index) {
          var _newFiles;

          newFiles = this.files.concat([]);
          (_newFiles = newFiles).splice.apply(_newFiles, [index, 0].concat(addFiles));
        } else {
          newFiles = this.files.concat(addFiles);
        }

        this.files = newFiles;

        // 定位
        for (var _i = 0; _i < addFiles.length; _i++) {
          var _file2 = addFiles[_i];
          this.maps[_file2.id] = _file2;
        }

        // 事件
        this.emitInput();
        for (var _i2 = 0; _i2 < addFiles.length; _i2++) {
          this.emitFile(addFiles[_i2], undefined);
        }

        return isArray ? addFiles : addFiles[0];
      },


      // 添加表单文件
      addInputFile: function addInputFile(el) {
        var files = [];
        if (el.files) {
          for (var i = 0; i < el.files.length; i++) {
            var file = el.files[i];
            files.push({
              size: file.size,
              name: file.webkitRelativePath || file.relativePath || file.name,
              type: file.type,
              file: file
            });
          }
        } else {
          var names = el.value.replace(/\\/g, '/').split('/');
          delete el.__vuex__;
          files.push({
            name: names[names.length - 1],
            el: el
          });
        }
        return this.add(files);
      },


      // 添加 DataTransfer
      addDataTransfer: function addDataTransfer(dataTransfer) {
        var _this = this;

        var files = [];
        if (dataTransfer.items && dataTransfer.items.length) {
          var items = [];
          for (var i = 0; i < dataTransfer.items.length; i++) {
            var item = dataTransfer.items[i];
            if (item.getAsEntry) {
              item = item.getAsEntry() || item.getAsFile();
            } else if (item.webkitGetAsEntry) {
              item = item.webkitGetAsEntry() || item.getAsFile();
            } else {
              item = item.getAsFile();
            }
            if (item) {
              items.push(item);
            }
          }

          return new Promise(function (resolve, reject) {
            var forEach = function forEach(i) {
              var item = items[i];
              // 结束 文件数量大于 最大数量
              if (!item || _this.maximum > 0 && files.length >= _this.maximum) {
                return resolve(_this.add(files));
              }
              _this.getEntry(item).then(function (results) {
                files.push.apply(files, _toConsumableArray(results));
                forEach(i + 1);
              });
            };
            forEach(0);
          });
        }

        if (dataTransfer.files.length) {
          for (var _i3 = 0; _i3 < dataTransfer.files.length; _i3++) {
            files.push(dataTransfer.files[_i3]);
            if (this.maximum > 0 && files.length >= this.maximum) {
              break;
            }
          }
          return Promise.resolve(this.add(files));
        }

        return Promise.resolve([]);
      },


      // 获得 entry
      getEntry: function getEntry(entry) {
        var _this2 = this;

        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        return new Promise(function (resolve, reject) {
          if (entry.isFile) {
            entry.file(function (file) {
              resolve([{
                size: file.size,
                name: path + file.name,
                type: file.type,
                file: file
              }]);
            });
          } else if (entry.isDirectory && _this2.dropDirectory) {
            var files = [];
            var dirReader = entry.createReader();
            var readEntries = function readEntries() {
              dirReader.readEntries(function (entries) {
                var forEach = function forEach(i) {
                  if (!entries[i] && i === 0 || _this2.maximum > 0 && files.length >= _this2.maximum) {
                    return resolve(files);
                  }
                  if (!entries[i]) {
                    return readEntries();
                  }
                  _this2.getEntry(entries[i], path + entry.name + '/').then(function (results) {
                    files.push.apply(files, _toConsumableArray(results));
                    forEach(i + 1);
                  });
                };
                forEach(0);
              });
            };
            readEntries();
          } else {
            resolve([]);
          }
        });
      },
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
          this.files = files;

          // 定位
          delete this.maps[file.id];

          // 事件
          this.emitInput();
          this.emitFile(undefined, file);
        }
        return file;
      },


      // 更新
      update: function update(id, data) {
        var file = this.get(id);
        if (file) {
          var newFile = _extends({}, file, data);
          // 停用必须加上错误
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
          this.files = files;

          // 删除  旧定位 写入 新定位 （已便支持修改id)
          delete this.maps[file.id];
          this.maps[newFile.id] = newFile;

          // 事件
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
          isPrevent = true;
          return isPrevent;
        });
        return isPrevent;
      },


      // 处理后 事件 分发
      emitFile: function emitFile(newFile, oldFile) {
        this.$emit('input-file', newFile, oldFile);
        if (newFile && newFile.fileObject && newFile.active && (!oldFile || !oldFile.active)) {
          this.uploading++;
          // 激活
          this.$nextTick(function () {
            var _this3 = this;

            setTimeout(function () {
              _this3.upload(newFile).then(function () {
                // eslint-disable-next-line
                newFile = _this3.get(newFile);
                if (newFile && newFile.fileObject) {
                  _this3.update(newFile, {
                    active: false,
                    success: !newFile.error
                  });
                }
              }).catch(function (e) {
                _this3.update(newFile, {
                  active: false,
                  success: false,
                  error: e.code || e.error || e.message || e
                });
              });
            }, parseInt(Math.random() * 50 + 50, 10));
          });
        } else if ((!newFile || !newFile.fileObject || !newFile.active) && oldFile && oldFile.fileObject && oldFile.active) {
          // 停止
          this.uploading--;
        }

        // 自动延续激活
        if (this.active && (Boolean(newFile) !== Boolean(oldFile) || newFile.active !== oldFile.active)) {
          this.watchActive(true);
        }
      },
      emitInput: function emitInput() {
        this.$emit('input', this.files);
      },


      // 上传
      upload: function upload(id) {
        var file = this.get(id);

        // 被删除
        if (!file) {
          return Promise.reject('not_exists');
        }

        // 不是文件对象
        if (!file.fileObject) {
          return Promise.reject('file_object');
        }

        // 有错误直接响应
        if (file.error) {
          return Promise.reject(file.error);
        }

        // 已完成直接响应
        if (file.success) {
          return Promise.resolve(file);
        }

        // 后缀
        var extensions = this.extensions;
        if (extensions && (extensions.length || typeof extensions.length === 'undefined')) {
          if ((typeof extensions === 'undefined' ? 'undefined' : _typeof(extensions)) !== 'object' || !(extensions instanceof RegExp)) {
            if (typeof extensions === 'string') {
              extensions = extensions.split(',').map(function (value) {
                return value.trim();
              }).filter(function (value) {
                return value;
              });
            }
            extensions = new RegExp('\\.(' + extensions.join('|').replace(/\./g, '\\.') + ')$', 'i');
          }
          if (file.name.search(extensions) === -1) {
            return Promise.reject('extension');
          }
        }

        // 大小
        if (this.size > 0 && file.size >= 0 && file.size > this.size) {
          return Promise.reject('size');
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
        return Promise.reject('No action configured');
      },


      /**
       * Whether this file should be uploaded using chunk upload or not
       *
       * @param Object file
       */
      shouldUseChunkUpload: function shouldUseChunkUpload(file) {
        return this.chunkEnabled && !!this.chunkOptions.handler && file.size > this.chunkOptions.minSize;
      },


      /**
       * Upload a file using Chunk method
       *
       * @param File file
       */
      uploadChunk: function uploadChunk(file) {
        var HandlerClass = this.chunkOptions.handler;
        file.chunk = new HandlerClass(file, this.chunkOptions);

        return file.chunk.upload();
      },
      uploadPut: function uploadPut(file) {
        var querys = [];
        var value = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value !== null && value !== undefined) {
            querys.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        }
        var queryString = querys.length ? (file.putAction.indexOf('?') === -1 ? '?' : '&') + querys.join('&') : '';
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', file.putAction + queryString);
        return this.uploadXhr(xhr, file, file.file);
      },
      uploadHtml5: function uploadHtml5(file) {
        var form = new window.FormData();
        var value = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString !== 'function') {
            if (value instanceof File) {
              form.append(key, value, value.name);
            } else {
              form.append(key, JSON.stringify(value));
            }
          } else if (value !== null && value !== undefined) {
            form.append(key, value);
          }
        }
        form.append(this.name, file.file, file.file.filename || file.name);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', file.postAction);
        return this.uploadXhr(xhr, file, form);
      },
      uploadXhr: function uploadXhr(xhr, _file, body) {
        var _this4 = this;

        var file = _file;
        var speedTime = 0;
        var speedLoaded = 0;

        // 进度条
        xhr.upload.onprogress = function (e) {
          // 还未开始上传 已删除 未激活
          file = _this4.get(file);
          if (!e.lengthComputable || !file || !file.fileObject || !file.active) {
            return;
          }

          // 进度 速度 每秒更新一次
          var speedTime2 = Math.round(Date.now() / 1000);
          if (speedTime2 === speedTime) {
            return;
          }
          speedTime = speedTime2;

          file = _this4.update(file, {
            progress: (e.loaded / e.total * 100).toFixed(2),
            speed: e.loaded - speedLoaded
          });
          speedLoaded = e.loaded;
        };

        // 检查激活状态
        var interval = setInterval(function () {
          file = _this4.get(file);
          if (file && file.fileObject && !file.success && !file.error && file.active) {
            return;
          }

          if (interval) {
            clearInterval(interval);
            interval = false;
          }

          try {
            xhr.abort();
            xhr.timeout = 1;
          } catch (e) {}
        }, 100);

        return new Promise(function (resolve, reject) {
          var complete = void 0;
          var fn = function fn(e) {
            // 已经处理过了
            if (complete) {
              return;
            }
            complete = true;
            if (interval) {
              clearInterval(interval);
              interval = false;
            }

            file = _this4.get(file);

            // 不存在直接响应
            if (!file) {
              return reject('not_exists');
            }

            // 不是文件对象
            if (!file.fileObject) {
              return reject('file_object');
            }

            // 有错误自动响应
            if (file.error) {
              return reject(file.error);
            }

            // 未激活
            if (!file.active) {
              return reject('abort');
            }

            // 已完成 直接相应
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
            }

            // 更新
            file = _this4.update(file, data);

            // 相应错误
            if (file.error) {
              return reject(file.error);
            }

            // 响应
            return resolve(file);
          };

          // 事件
          xhr.onload = fn;
          xhr.onerror = fn;
          xhr.onabort = fn;
          xhr.ontimeout = fn;

          // 超时
          if (file.timeout) {
            xhr.timeout = file.timeout;
          }

          // headers
          for (var key in file.headers) {
            xhr.setRequestHeader(key, file.headers[key]);
          }

          // 更新 xhr
          file = _this4.update(file, { xhr: xhr });

          // 开始上传
          xhr.send(body);
        });
      },
      uploadHtml4: function uploadHtml4(_file) {
        var _this5 = this;

        var file = _file;
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

        form.action = file.postAction;

        form.name = 'upload-form-' + file.id;

        form.setAttribute('method', 'POST');
        form.setAttribute('target', 'upload-iframe-' + file.id);
        form.setAttribute('enctype', 'multipart/form-data');

        var value = void 0;
        var input = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString !== 'function') {
            value = JSON.stringify(value);
          }
          if (value !== null && value !== undefined) {
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
          }
        }
        form.appendChild(file.el);

        document.body.appendChild(iframe).appendChild(form);

        var getResponseData = function getResponseData() {
          var doc = void 0;
          try {
            if (iframe.contentWindow) {
              doc = iframe.contentWindow.document;
            }
          } catch (err) {}
          if (!doc) {
            try {
              doc = iframe.contentDocument ? iframe.contentDocument : iframe.document;
            } catch (err) {
              doc = iframe.document;
            }
          }
          if (doc && doc.body) {
            return doc.body.innerHTML;
          }
          return null;
        };

        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            file = _this5.update(file, { iframe: iframe });

            // 不存在
            if (!file) {
              return reject('not_exists');
            }

            // 定时检查
            var interval = setInterval(function () {
              file = _this5.get(file);
              if (file && file.fileObject && !file.success && !file.error && file.active) {
                return;
              }

              if (interval) {
                clearInterval(interval);
                interval = false;
              }

              iframe.onabort({ type: file ? 'abort' : 'not_exists' });
            }, 100);

            var complete = void 0;
            var fn = function fn(e) {
              // 已经处理过了
              if (complete) {
                return;
              }
              complete = true;

              if (interval) {
                clearInterval(interval);
                interval = false;
              }

              // 关闭 esc 事件
              document.body.removeEventListener('keydown', onKeydown);

              file = _this5.get(file);

              // 不存在直接响应
              if (!file) {
                return reject('not_exists');
              }

              // 不是文件对象
              if (!file.fileObject) {
                return reject('file_object');
              }

              // 有错误自动响应
              if (file.error) {
                return reject(file.error);
              }

              // 未激活
              if (!file.active) {
                return reject('abort');
              }

              // 已完成 直接相应
              if (file.success) {
                return resolve(file);
              }

              var response = getResponseData();
              var data = {};
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
                  } else if (data === null) {
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
              }

              // 更新
              file = _this5.update(file, data);

              if (file.error) {
                return reject(file.error);
              }

              // 响应
              return resolve(file);
            };

            // 添加事件
            iframe.onload = fn;
            iframe.onerror = fn;
            iframe.onabort = fn;

            // 禁止 esc 键
            document.body.addEventListener('keydown', onKeydown);

            // 提交
            form.submit();
          }, 50);
        }).then(function (res) {
          iframe.parentNode && iframe.parentNode.removeChild(iframe);
          return res;
        }).catch(function (res) {
          iframe.parentNode && iframe.parentNode.removeChild(iframe);
          return res;
        });
      },
      watchActive: function watchActive(active) {
        var file = void 0;
        var index = 0;
        while (file = this.files[index]) {
          index++;
          if (!file.fileObject) ; else if (active && !this.destroy) {
            if (this.uploading >= this.thread || this.uploading && !this.features.html5) {
              break;
            }
            if (!file.active && !file.error && !file.success) {
              this.update(file, { active: true });
            }
          } else {
            if (file.active) {
              this.update(file, { active: false });
            }
          }
        }
        if (this.uploading === 0) {
          this.active = false;
        }
      },
      watchDrop: function watchDrop(_el) {
        var el = _el;
        if (!this.features.drop) {
          return;
        }

        // 移除挂载
        if (this.dropElement) {
          try {
            document.removeEventListener('dragenter', this.onDragenter, false);
            document.removeEventListener('dragleave', this.onDragleave, false);
            document.removeEventListener('drop', this.onDocumentDrop, false);
            this.dropElement.removeEventListener('dragover', this.onDragover, false);
            this.dropElement.removeEventListener('drop', this.onDrop, false);
          } catch (e) {}
        }

        if (!el) {
          el = false;
        } else if (typeof el === 'string') {
          el = document.querySelector(el) || this.$root.$el.querySelector(el);
        } else if (el === true) {
          el = this.$parent.$el;
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
        e.preventDefault();
        if (this.dropActive) {
          return;
        }
        if (!e.dataTransfer) {
          return;
        }
        var dt = e.dataTransfer;
        if (dt.files && dt.files.length) {
          this.dropActive = true;
        } else if (!dt.types) {
          this.dropActive = true;
        } else if (dt.types.indexOf && dt.types.indexOf('Files') !== -1) {
          this.dropActive = true;
        } else if (dt.types.contains && dt.types.contains('Files')) {
          this.dropActive = true;
        }
      },
      onDragleave: function onDragleave(e) {
        e.preventDefault();
        if (!this.dropActive) {
          return;
        }
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
        this.addDataTransfer(e.dataTransfer);
      }
    }
  };

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { class: _vm.className }, [_vm._t("default"), _vm._v(" "), _c('label', { attrs: { "for": _vm.inputId || _vm.name } }), _vm._v(" "), _c('input-file')], 2);
  };
  var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) return;
    inject("data-v-595958af_0", { source: "\n.file-uploads{overflow:hidden;position:relative;text-align:center;display:inline-block\n}\n.file-uploads.file-uploads-html4 input,.file-uploads.file-uploads-html5 label{background:#fff;opacity:0;font-size:20em;z-index:1;top:0;left:0;right:0;bottom:0;position:absolute;width:100%;height:100%\n}\n.file-uploads.file-uploads-html4 label,.file-uploads.file-uploads-html5 input{background:rgba(255,255,255,0);overflow:hidden;position:fixed;width:1px;height:1px;z-index:-1;opacity:0\n}", map: undefined, media: undefined });
  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      var hook = void 0;
      if (style) {
        hook = function hook(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component;
  }
  /* style inject */
  function __vue_create_injector__$1() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
        }

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */

  var FileUpload = __vue_normalize__$1({ render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, __vue_create_injector__$1, undefined);

  var FileUpload$1 = /*#__PURE__*/Object.freeze({
    default: FileUpload
  });

  var require$$0 = ( FileUpload$1 && FileUpload ) || FileUpload$1;

  var src = require$$0;

  return src;

})));
//# sourceMappingURL=vue-upload-component.js.map


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "image-upload-wrapper" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$refs.upload && _vm.$refs.upload.dropActive,
            expression: "$refs.upload && $refs.upload.dropActive"
          }
        ],
        staticClass: "drop-active"
      },
      [_c("h2", [_vm._v("تصویر را اینجا رها کنید")])]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-xs-12" }, [
      _c(
        "div",
        { staticClass: "row wrapper-articles" },
        [
          _vm._l(_vm.files, function(file, index) {
            return _vm.files.length > 0
              ? _c(
                  "article",
                  {
                    key: file.id,
                    staticClass: "pull-right article-images",
                    class: [
                      _vm.imageWrapperSize
                        ? _vm.imageWrapperSize
                        : "col-md-4 col-xs-6 col-lg-3"
                    ]
                  },
                  [
                    _c("div", { staticClass: "image" }, [
                      file.thumb
                        ? _c("img", {
                            attrs: {
                              src: file.thumb,
                              width: "40",
                              height: "auto"
                            }
                          })
                        : _c("span", [_vm._v("No Image")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "actions-content" }, [
                        _c(
                          "a",
                          {
                            staticClass: "delete",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.$refs.upload.remove(file)
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-trash-alt",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        )
                      ])
                    ])
                  ]
                )
              : _vm._e()
          }),
          _vm._v(" "),
          _c("file-upload", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isOption,
                expression: "!isOption"
              }
            ],
            ref: "upload",
            staticClass: "upload pull-right",
            class: [
              _vm.imageWrapperSize
                ? _vm.imageWrapperSize
                : "col-md-4 col-xs-6 col-lg-3",
              _vm.imageAccessUploadCount &&
              _vm.files.length >= _vm.imageAccessUploadCount
                ? "hidden"
                : ""
            ],
            attrs: {
              accept: _vm.accept,
              multiple: _vm.uploadMultiple,
              maximum: _vm.maximum,
              directory: _vm.directory,
              size: _vm.size || 0,
              thread: _vm.thread < 1 ? 1 : _vm.thread > 5 ? 5 : _vm.thread,
              drop: _vm.drop,
              "drop-directory": _vm.dropDirectory,
              "add-index": _vm.addIndex,
              name: _vm.uploadName
            },
            on: {
              "input-filter": _vm.inputFilter,
              "input-file": _vm.inputFile
            },
            model: {
              value: _vm.files,
              callback: function($$v) {
                _vm.files = $$v
              },
              expression: "files"
            }
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", {
      class: { "modal-backdrop": true, fade: true, show: _vm.editFile.show }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        class: { modal: true, fade: true, show: _vm.editFile.show },
        attrs: { id: "modal-edit-file", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.onEditorFile($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.editFile.show = false
                          }
                        }
                      },
                      [_c("span", [_vm._v("×")])]
                    ),
                    _vm._v(" "),
                    _vm.editFile.show &&
                    _vm.editFile.blob &&
                    _vm.editFile.type &&
                    _vm.editFile.type.substr(0, 6) === "image/"
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("div", { staticClass: "edit-image" }, [
                            _c("img", {
                              ref: "editImage",
                              attrs: { src: _vm.editFile.blob }
                            })
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-12" }, [
                    _c("div", { staticClass: "modal-footer" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-xs-12 col-sm-6" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-cancel",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.editFile.show = false
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                  انصراف\n                "
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          ]
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
    return _c("div", { staticClass: "col-xs-12 col-sm-6 pull-right" }, [
      _c("button", { staticClass: "btn btn-crop", attrs: { type: "submit" } }, [
        _vm._v("برش تصویر")
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e0f5124", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['src', 'srcs', 'images', 'image', 'img', 'imgs', 'id'],
  data: function data() {
    return {
      loadedCount: 0,
      loadedImgs: []
    };
  },

  computed: {
    data: function data() {
      return (this.src ? new Array(this.src) : []).concat(this.srcs).concat(this.images).concat(this.image).concat(this.img).concat(this.imgs).filter(function (e) {
        return e;
      });
    },
    content: function content() {
      return this.loadedImgs.length ? this.loadedImgs.length > 1 ? 'url(' + this.loadedImgs.join(') url(') + ')' : 'url(' + this.loadedImgs[0] + ')' : '';
    }
  },
  methods: {
    loaded: function loaded(src, index) {
      this.loadedCount++;
      this.loadedImgs.push(src);
      this.$emit('loaded', {
        id: this.id,
        src: src,
        index: index,
        count: this.loadedCount,
        length: this.data.length,
        progress: this.loadedCount / this.data.length * 100
      });
      if (this.loadedCount === this.data.length) this.$emit('loaded-all', this.id || true);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var _loop = function _loop(i) {
      var img = new Image();
      var index = _this.data.length - i;
      img.src = _this.data[index];
      img.onload = function () {
        _this.loaded(img.src, index);
      };
    };

    for (var i = this.data.length; i > 0; i--) {
      _loop(i);
    }
  }
});

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "/images/user-id-card.jpg?3e9afe69b6fac46c4062601bf47889f9";

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "/images/user-verification.svg?f4f22f96e21dc4057599520e83b3e6be";

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "/images/madarek.jpg?7842b5f4d6154aa44f56845b3240df72";

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_imagePreloader_vue__ = __webpack_require__(357);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_imagePreloader_vue__["a"]; });


/* unused harmony default export */ var _unused_webpack_default_export = ({
  install: function (Vue, options) {
    document.body.innerHTML = '<img id="imagePreloader_global_component">' + document.body.innerHTML
    const globalComponentsStyle = document.getElementById('imagePreloader_global_component').style
    globalComponentsStyle.width = 0
    globalComponentsStyle.height = 0
    globalComponentsStyle.position = 'fixed'
    globalComponentsStyle.zIndex = -1
    
    Vue.component('imagePreloader', __WEBPACK_IMPORTED_MODULE_0__components_imagePreloader_vue__["a" /* default */])
    Vue.prototype.$imagePreload = (srcs, element = null, cb = () => null) => {
      if(typeof element === "function") {
        cb = element
        element = null
      }
      return new Promise((resolve, reject) => {
        const data = typeof srcs === "array" ? new Array(srcs) : srcs
        const el = element ? element : (document || {}).getElementById('imagePreloader_global_component')
        try {
          let count = 0
          for(let i = 0; i < data.length; i++) {
            const src = data[i]
            const img = new Image()
            img.src = src
            img.onload = async () => {
              el.style.content = el.style.content + ' url(' + src + ')'
              count++
              await cb({
                element,
                src,
                index: i,
                count,
                length: data.length,
                progress: count / data.length * 100
              })
              if(count == data.length) resolve(element ? element : true)
            }
            img.onerror = reject
          }
        } catch(e) {
          reject(e)
        }
      })
    }
    Vue.prototype.$imagePreload.reset = (element = null) => {
      return new Promise((resolve, reject) => {
        try {
          const el = element ? element : (document || {}).getElementById('imagePreloader_global_component')
          if(el) {
            el.style.content = ''
          } else reject(null)
          resolve(element ? element : true)
        } catch(e) {
          reject(e)
        }
      })
    }
  }
});



/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_vue_loader_lib_selector_type_script_index_0_imagePreloader_vue__ = __webpack_require__(306);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_cb392738_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_imagePreloader_vue__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(358)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_vue_loader_lib_selector_type_script_index_0_imagePreloader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_cb392738_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_imagePreloader_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_cb392738_hasScoped_false_optionsId_0_buble_transforms_vue_loader_lib_selector_type_template_index_0_imagePreloader_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-image-preloader\\components\\imagePreloader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cb392738", Component.options)
  } else {
    hotAPI.reload("data-v-cb392738", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(359);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("157a0bbe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../vue-loader/lib/selector.js?type=styles&index=0!./imagePreloader.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../vue-loader/lib/selector.js?type=styles&index=0!./imagePreloader.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.imagePreloader_components {\r\n  z-index: -1;\r\n  width: 0;\r\n  height: 0;\r\n  position: fixed;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("img", {
      staticClass: "imagePreloader_components",
      style: { content: _vm.content },
      attrs: { id: _vm.id }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cb392738", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verification_components_id_card__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_components_user_image__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verification_components_document_image__ = __webpack_require__(779);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    IdCard: __WEBPACK_IMPORTED_MODULE_1__verification_components_id_card__["a" /* default */],
    UserImage: __WEBPACK_IMPORTED_MODULE_2__verification_components_user_image__["a" /* default */],
    DocumentImage: __WEBPACK_IMPORTED_MODULE_3__verification_components_document_image__["a" /* default */]
  },
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

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submiting", true);

      var data = new FormData();

      data.append("images_count", 2);

      data.append("image_0", this.idCardImage.file);
      data.append("image_1", this.userImage.file);

      axios.post("/verify/upload-photos", data, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submiting", false);
        __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("uploadPercentage", 0);

        _this.currentStep = 2;

        // setTimeout(function () {
        //   window.location.href = "/buyer/profile";
        // }, 3000);
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submiting", false);
        __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("uploadPercentage", 0);
      });
    },
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);
    },
    routeToPage: function routeToPage(routeName) {
      //  analytics
      this.registerComponentStatistics("verification", "buyer-last-step", "click-on-special-products");

      this.$router.push({ name: routeName });
    },

    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    }
  },
  watch: {
    uploadPercentage: function uploadPercentage() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("uploadPercentage", this.uploadPercentage);
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

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_image__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageuploadify_min__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageuploadify_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__imageuploadify_min__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    UploadFile: __WEBPACK_IMPORTED_MODULE_0__upload_image__["a" /* default */]
  },
  data: function data() {
    return {
      idCardFile: [],
      isCompressor: false,
      errors: {
        idCardFile: ""
      }
    };
  },
  methods: {
    nextStep: function nextStep() {
      this.checkImageErrors();
      if (!this.isCompressor && !this.errors.idCardFile) {
        this.$parent.currentStep = 1;
      }
    },
    imageValidator: function imageValidator(files) {
      var errorsStatus = false;

      if (files.length) {
        for (var i = 0; i <= files.length; i++) {
          if (files[i]) {
            if (!files[i].type || files[i].type == "" || files[i].type == "image/gif" || files[i].type == "image/svg+xml" || files[i].type == "application/postscript" || files[i].type == "text/xml" || files[i].type == "application/x-gzip") {
              errorsStatus = true;
              this.errors.idCardFile = "تصویر باید فرمت معتبری باشند.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.idCardFile = "حجم تصویر باید کمتر از 5 مگابایت باشد.";
            } else if (files[i].file.size < 20480) {
              errorsStatus = true;
              this.errors.idCardFile = "حجم تصویر باید بیشتر از 20 کیلوبایت باشد.";
            }
          }
        }
        if (!errorsStatus) {
          this.errors.idCardFile = "";
          this.$parent.idCardImage = this.idCardFile[0];
        }
      }
    },
    checkImageErrors: function checkImageErrors() {
      var imagesCount = this.idCardFile.length;
      if (imagesCount == 0) {
        this.errors.idCardFile = "لطفا تصویر کارت ملی خود را بارگذاری کنید";
      } else {
        this.imageValidator(this.idCardFile);
      }
    }
  },
  mounted: function mounted() {
    $('#verification-id-card input[type="file"]').imageuploadify();
    this.$nextTick(function () {
      var iconWrapper = $("#verification-id-card #custom-upload-image-icons");
      var textWrapper = $("#verification-id-card .imageuploadify-message");

      var cameraIcon = "<i class='fas fa-camera'></i>";
      var plusIcon = "<i class='fas fa-plus-circle'></i>";

      iconWrapper.empty();
      iconWrapper.append(cameraIcon);
      iconWrapper.append(plusIcon);

      textWrapper.html("عکس کارت ملی شما");
    });
  },

  watch: {
    idCardFile: function idCardFile(files) {
      if (!this.isCompressor) {
        this.imageValidator(files);
      }
      // this.errors.idCardFile = "";
    }
  }
});

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_image__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageuploadify_min__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageuploadify_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__imageuploadify_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_image_preloader__ = __webpack_require__(356);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    UploadFile: __WEBPACK_IMPORTED_MODULE_0__upload_image__["a" /* default */],
    imagePreloader: __WEBPACK_IMPORTED_MODULE_2_vue_image_preloader__["a" /* imagePreloader */]
  },
  data: function data() {
    return {
      userImageFile: [],
      isCompressor: false,
      errors: {
        userImageFile: ""
      }
    };
  },
  methods: {
    nextStep: function nextStep() {
      this.checkImageErrors();
      if (!this.isCompressor && !this.errors.userImageFile) {
        this.$parent.uploadFiles();
      }
    },
    backStep: function backStep() {
      this.$parent.currentStep--;
    },
    imageValidator: function imageValidator(files) {
      var errorsStatus = false;

      if (files.length) {
        for (var i = 0; i <= files.length; i++) {
          if (files[i]) {
            if (!files[i].type || files[i].type == "" || files[i].type == "image/gif" || files[i].type == "image/svg+xml" || files[i].type == "application/postscript" || files[i].type == "text/xml" || files[i].type == "application/x-gzip") {
              errorsStatus = true;
              this.errors.userImageFile = "تصویر باید فرمت معتبری باشند.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.userImageFile = "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
            } else if (files[i].file.size < 20480) {
              errorsStatus = true;
              this.errors.userImageFile = "حجم تصویر پایین است، باید بیشتر از 20 کیلوبایت باشد.";
            }
          }
        }
        if (!errorsStatus) {
          this.errors.userImageFile = "";
          this.$parent.userImage = this.userImageFile[0];
        }
      }
    },
    checkImageErrors: function checkImageErrors() {
      var imagesCount = this.userImageFile.length;
      if (imagesCount == 0) {
        this.errors.userImageFile = "لطفا تصویر خود همراه با کارت ملی را بارگذاری کنید";
      } else {
        this.imageValidator(this.userImageFile);
      }
    }
  },
  mounted: function mounted() {
    $('#verification-user-image input[type="file"]').imageuploadify();
    this.$nextTick(function () {
      var iconWrapper = $("#verification-user-image #custom-upload-image-icons");
      var textWrapper = $("#verification-user-image .imageuploadify-message");

      var cameraIcon = "<i class='fas fa-camera'></i>";
      var plusIcon = "<i class='fas fa-plus-circle'></i>";

      iconWrapper.empty();
      iconWrapper.append(cameraIcon);
      iconWrapper.append(plusIcon);
      textWrapper.html("تصویر گواهی احراز هویت");
    });
  },

  watch: {
    userImageFile: function userImageFile(files) {
      if (!this.isCompressor) {
        this.imageValidator(files);
      }
      // this.errors.userImageFile = "";
    }
  }
});

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_image__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageuploadify_min__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageuploadify_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__imageuploadify_min__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    UploadFile: __WEBPACK_IMPORTED_MODULE_0__upload_image__["a" /* default */]
  },
  data: function data() {
    return {
      documentImageFile: [],
      isCompressor: false,
      errors: {
        documentImageFile: ""
      }
    };
  },
  methods: {
    nextStep: function nextStep() {
      this.checkImageErrors();
      if (!this.isCompressor && !this.errors.documentImageFile) {
        this.$parent.uploadFiles();
      }
    },
    backStep: function backStep() {
      this.$parent.currentStep--;
    },
    imageValidator: function imageValidator(files) {
      var errorsStatus = false;

      if (files.length) {
        for (var i = 0; i <= files.length; i++) {
          if (files[i]) {
            if (!files[i].type || files[i].type == "" || files[i].type == "image/gif" || files[i].type == "image/svg+xml" || files[i].type == "application/postscript" || files[i].type == "text/xml" || files[i].type == "application/x-gzip") {
              errorsStatus = true;
              this.errors.documentImageFile = "تصویر باید فرمت معتبری باشند.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.documentImageFile = "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
            } else if (files[i].file.size < 20480) {
              errorsStatus = true;
              this.errors.documentImageFile = "حجم تصویر پایین است، باید بیشتر از 20 کیلوبایت باشد.";
            }
          }
        }
        if (!errorsStatus) {
          this.errors.documentImageFile = "";
          this.$parent.documetImage = this.documentImageFile[0];
        }
      }
    },
    checkImageErrors: function checkImageErrors() {
      var imagesCount = this.documentImageFile.length;
      if (imagesCount == 0) {
        this.errors.documentImageFile = "لطفا تصویر یکی از اسناد که به نام فرد دارنده کارت ملی است را بارگذاری کنید";
      } else {
        this.imageValidator(this.documentImageFile);
      }
    }
  },
  mounted: function mounted() {
    $('#verification-document input[type="file"]').imageuploadify();
  },

  watch: {
    documentImageFile: function documentImageFile(files) {
      if (!this.isCompressor) {
        this.imageValidator(files);
      }
      // this.errors.documentImageFile = "";
    }
  }
});

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(764);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("17d17a74", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile_verification.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile_verification.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.imageuploadify {\r\n  border-radius: 8px;\n}\n.imageuploadify #custom-upload-image-icons i.fa-plus-circle {\r\n  color: #140092;\r\n  background: #ffffff;\r\n  border-radius: 50%;\r\n  line-height: 1;\r\n  padding: 0;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: -5px;\r\n  font-size: 1.6rem;\r\n  border: 1px solid #ffffff;\n}\n.imageuploadify #custom-upload-image-icons i.fa-camera {\r\n  color: #140092;\n}\n.imageuploadify .imageuploadify-images-list span.imageuploadify-message {\r\n  font-size: 1.2rem;\r\n  font-weight: 400;\r\n  padding-top: 11px;\n}\n.actions-content {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  text-align: center;\r\n  display: none;\r\n  right: 0;\r\n  opacity: 1;\r\n  background: rgba(49, 58, 67, 0.3) !important;\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\r\n  height: 100%;\n}\n.article-images:hover .actions-content {\r\n  display: block;\n}\n.actions-content a {\r\n  background-color: rgb(38, 70, 83, 0.5);\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid #ffffff;\r\n  float: left;\r\n  margin: 8px;\r\n  padding-top: 5px;\n}\n.action-button-wrapper {\r\n  width: 80%;\r\n  margin: auto;\n}\n.orange-button {\r\n  border-radius: 8px;\r\n  margin: 10px 5px 50px;\r\n  font-size: 1.4rem;\r\n  font-weight: 500;\r\n  padding: 6px 27px;\r\n  position: relative;\n}\n.actions-content .delete {\r\n  float: left;\n}\n@media screen and (max-width: 768px) {\n.actions-content {\r\n    float: left;\r\n    opacity: 1 !important;\r\n    display: block;\n}\n.upload-error {\r\n    font-size: 1.2rem;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(766);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("80180cf8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e506d528\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./profile_verification.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e506d528\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./profile_verification.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*main style*/\n.main-content[data-v-e506d528] {\r\n  max-width: 850px;\r\n  position: absolute;\r\n  left: calc(50% - 425px);\r\n  top: 65px;\r\n  margin-bottom: 50px;\r\n  height: 100%;\r\n  direction: rtl;\n}\n.main-content > div.wrapper-section[data-v-e506d528] {\r\n  -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\r\n          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\r\n  border-radius: 4px;\r\n  min-height: 400px;\n}\n.main-content .wrapper-section.success[data-v-e506d528] {\r\n  border: none;\n}\n.main-content > div.wrapper-section.finish-stage[data-v-e506d528] {\r\n  border: none;\n}\n.main-content > div.wrapper-section.empty-section[data-v-e506d528] {\r\n  border: none;\r\n  border-radius: 4px;\r\n  min-height: initial;\n}\n.title-wrapper[data-v-e506d528] {\r\n  height: 50px;\n}\n.main-content .section-title[data-v-e506d528] {\r\n  font-size: 1.4rem;\r\n  font-weight: 400;\r\n  margin-bottom: 20px;\r\n  color: #ff6600;\n}\n.main-content .section-title img[data-v-e506d528] {\r\n  width: 32px;\r\n  height: 42px;\r\n  position: absolute;\n}\n.main-content .section-title span[data-v-e506d528] {\r\n  margin: 0 36px;\r\n  top: 14px;\r\n  position: relative;\n}\n.main-content .section-title[data-v-e506d528]::after {\r\n  content: unset;\n}\n.main-content div.section-title p[data-v-e506d528] {\r\n  font-size: 15px;\n}\n.section-background[data-v-e506d528] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: white;\r\n  content: \"\";\r\n  z-index: -1;\n}\n.wrapper-progressbar.title h2[data-v-e506d528] {\r\n  font-size: 23px;\r\n  font-weight: bold;\r\n  text-align: right;\n}\n.header-section[data-v-e506d528] {\r\n  margin-top: 50px;\n}\n.header-section > h2[data-v-e506d528] {\r\n  font-weight: 600;\n}\r\n/*progressbar styles*/\n.wrapper-progressbar[data-v-e506d528] {\r\n  position: relative;\r\n  padding: 0;\r\n  overflow: hidden;\n}\n.progressbar-items[data-v-e506d528] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  direction: rtl;\r\n  position: relative;\r\n  max-width: 500px;\r\n  margin: 0 auto;\n}\n.progrees-item[data-v-e506d528] {\r\n  text-align: center;\r\n  color: #bebebe;\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\n}\n.progrees-item span.wrapper-counter[data-v-e506d528] {\r\n  width: 20px;\r\n  height: 20px;\r\n  font-size: 13px;\r\n  background: #979797;\r\n  border-radius: 50px;\r\n  color: #ffffff;\r\n  display: inline-block;\r\n  margin-bottom: 6px;\r\n  padding-top: 4px;\r\n  position: relative;\r\n  z-index: 1;\n}\n.progrees-item span.line-item[data-v-e506d528] {\r\n  height: 5px;\r\n  font-size: 13px;\r\n  background: #979797;\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 8px;\r\n  left: 50%;\r\n  z-index: 0;\n}\n.progrees-item.active-item span.wrapper-counter[data-v-e506d528] {\r\n  background-color: #ffffff;\r\n  color: #00c569;\r\n  padding-top: 3px;\n}\n.progrees-item.done-item span.wrapper-counter[data-v-e506d528] {\r\n  background-color: #00c569;\r\n  color: #ffffff;\r\n  padding-top: 3px;\n}\n.progrees-item.active-item[data-v-e506d528] {\r\n  color: #333;\n}\n.progrees-item.active-item span[data-v-e506d528],\r\n.progrees-item.active-item span.line-item[data-v-e506d528] {\r\n  border: 1px solid #00c569;\r\n  background-color: #00c569;\n}\n.custom-progressbar.active-item[data-v-e506d528] {\r\n  width: 97%;\r\n  height: 1px;\r\n  position: absolute;\r\n  top: 11px;\n}\n.custom-progressbar .progress-bar[data-v-e506d528] {\r\n  background: #00c569;\r\n  float: right;\r\n  width: 0;\n}\n.active-progress-wrapper[data-v-e506d528] {\r\n  max-width: 320px;\r\n  margin: 0 auto;\r\n  position: relative;\n}\n.main-section-wrapper[data-v-e506d528] {\r\n  display: grid;\r\n  margin-top: 26px;\r\n  padding: 0 60px;\n}\n.success-title[data-v-e506d528],\r\n.success-text[data-v-e506d528] {\r\n  color: #21ad93;\r\n  font-size: 18px;\r\n  line-height: 1.618;\r\n  margin-bottom: 16px;\r\n  font-weight: 500;\n}\n.success-text[data-v-e506d528] {\r\n  font-size: 15px;\n}\n.main-button-wrapper[data-v-e506d528] {\r\n  text-align: center;\r\n  margin-top: 25px;\n}\n.default-btn-with-icon[data-v-e506d528] {\r\n  max-width: 541px;\n}\n.button-content-wrapper .button-title[data-v-e506d528] {\r\n  font-size: 1.6rem;\n}\n.button-content-wrapper .button-text[data-v-e506d528] {\r\n  font-size: 1.4rem;\r\n  font-weight: 300;\n}\n.main-button-wrapper button[data-v-e506d528] {\r\n  font-size: 18px;\r\n  border-radius: 12px;\r\n  padding: 13px 30px;\r\n  margin-bottom: 50px;\n}\n.main-button-wrapper button i[data-v-e506d528] {\r\n  position: relative;\r\n  top: 3px;\r\n  margin-right: 8px;\n}\n.user-verified-icon-wrapper[data-v-e506d528] {\r\n  margin-top: 50px;\n}\n.user-verified-icon[data-v-e506d528] {\r\n  position: relative;\r\n  font-size: 95px;\r\n  color: #1da1f2;\n}\n.user-verified-icon[data-v-e506d528]::before {\r\n  content: \"\\F00C\";\r\n  position: absolute;\r\n  left: 22px;\r\n  font-family: \"Font Awesome 5 Free\";\r\n  color: #fff;\r\n  top: 37px;\r\n  font-size: 52px;\r\n  z-index: 1;\r\n  line-height: 1;\r\n  font-weight: 900;\n}\n.success-register[data-v-e506d528] {\r\n  background: -webkit-gradient(\r\n    linear,\r\n    right top, left top,\r\n    from(rgba(1, 173, 93, 0.7)),\r\n    to(rgba(122, 245, 188, 0.7))\r\n  );\r\n  background: linear-gradient(\r\n    270deg,\r\n    rgba(1, 173, 93, 0.7) 0%,\r\n    rgba(122, 245, 188, 0.7) 100%\r\n  );\r\n  border-radius: 8px;\r\n  margin-top: 20px;\r\n  padding: 20px 15px 10px;\r\n  color: rgb(38, 70, 83);\r\n  text-align: center;\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 622px;\r\n  margin: auto;\n}\n.success-register[data-v-e506d528]::after,\r\n.success-register[data-v-e506d528]::before {\r\n  content: \" \";\r\n  position: absolute;\r\n  width: 85px;\r\n  height: 85px;\r\n  background: rgba(255, 255, 255, 0.21);\r\n  border-radius: 50px;\n}\n.success-register[data-v-e506d528]::after {\r\n  left: -36px;\r\n  top: -13px;\n}\n.success-register[data-v-e506d528]::before {\r\n  left: 10px;\r\n  top: -49px;\n}\n.title-success[data-v-e506d528] {\r\n  float: right;\r\n  width: calc(100% - 36px);\n}\n.icon-wrapper[data-v-e506d528] {\r\n  width: 45px;\r\n  height: 40px;\r\n  float: right;\r\n  margin-top: -5px;\r\n  margin-right: 5px;\r\n  margin-left: -38px;\n}\n.icon-wrapper svg[data-v-e506d528] {\r\n  width: 45px;\r\n  height: 40px;\n}\n.success-register h2[data-v-e506d528] {\r\n  font-size: 1.6rem;\r\n  margin-bottom: 25px;\r\n  font-weight: 500;\r\n  position: relative;\r\n  z-index: 1;\r\n  line-height: 1.6;\r\n  color: #264653;\n}\n.success-register p[data-v-e506d528] {\r\n  font-size: 1.4rem;\r\n  font-weight: 300;\r\n  color: #264653;\n}\n.actions-wrapper[data-v-e506d528] {\r\n  overflow: hidden;\r\n  padding: 30px 0px;\n}\n.actions-wrapper > div[data-v-e506d528] {\r\n  padding: 0px;\n}\n@media screen and (max-width: 1105px) {\n.main-section-wrapper[data-v-e506d528] {\r\n    padding: 0;\n}\n.main-content > div.wrapper-section[data-v-e506d528] {\r\n    -webkit-box-shadow: unset;\r\n            box-shadow: unset;\n}\n.main-content[data-v-e506d528] {\r\n    left: 0;\n}\n}\n@media screen and (max-width: 991px) {\n.main-section-content[data-v-e506d528] {\r\n    margin: auto;\n}\n.header-section[data-v-e506d528] {\r\n    margin-top: 0;\n}\n.main-section-wrapper[data-v-e506d528] {\r\n    overflow: hidden;\r\n    padding: 0;\n}\n.title-wrapper[data-v-e506d528] {\r\n    display: none;\n}\n.main-content .section-title[data-v-e506d528] {\r\n    width: 90%;\r\n    margin: auto;\n}\n.main-content[data-v-e506d528] {\r\n    left: calc(50% - 425px);\n}\n}\n@media screen and (max-width: 768px) {\n.main-content[data-v-e506d528] {\r\n    left: 0;\n}\n}\n@media screen and (max-width: 767px) {\n.wrapper-section.success[data-v-e506d528] {\r\n    margin-top: -20px;\n}\n.success-register[data-v-e506d528] {\r\n    width: 326px;\n}\n.icon-wrapper[data-v-e506d528] {\r\n    width: 36px;\r\n    height: 32px;\r\n    float: right;\r\n    margin-top: -5px;\r\n    margin-right: 0;\r\n    margin-left: 10px;\n}\n.success-register h2[data-v-e506d528] {\r\n    margin-bottom: 5px;\n}\n.header-section[data-v-e506d528] {\r\n    margin-top: 10px;\n}\n.main-section-wrapper[data-v-e506d528] {\r\n    max-width: initial;\r\n    margin: 0px auto;\r\n    padding: 0;\n}\n.main-content .section-title p[data-v-e506d528] {\r\n    line-height: 1.618;\n}\n.icon-wrapper svg[data-v-e506d528] {\r\n    width: 36px;\r\n    height: 32px;\n}\n.main-content > div.wrapper-section[data-v-e506d528] {\r\n    border: none;\r\n    border-radius: 0;\r\n    -webkit-box-shadow: unset;\r\n            box-shadow: unset;\n}\n.main-content[data-v-e506d528] {\r\n    max-width: initial;\r\n    background: #fff;\r\n    border-radius: 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    direction: rtl;\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0);\r\n    top: 0;\r\n    padding-top: 20px;\r\n    width: 100%;\n}\n.active-progress-wrapper[data-v-e506d528] {\r\n    right: -15px;\r\n    max-width: initial;\n}\n.success-register p[data-v-e506d528] {\r\n    line-height: 1.618;\n}\n.title-success[data-v-e506d528] {\r\n    width: 100%;\n}\n.success-register h2 i[data-v-e506d528] {\r\n    display: block;\r\n    margin: 0 auto 20px;\r\n    width: 80px;\r\n    height: 80px;\r\n    font-size: 45px;\r\n    padding-top: 17px;\n}\n.wrapper-progressbar[data-v-e506d528] {\r\n    top: 0;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_id_card_vue__ = __webpack_require__(451);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_80c60ffa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_id_card_vue__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(768)
  __webpack_require__(770)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-80c60ffa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_id_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_80c60ffa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_id_card_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_80c60ffa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_id_card_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\buyer\\profile\\verification-components\\id-card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-80c60ffa", Component.options)
  } else {
    hotAPI.reload("data-v-80c60ffa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(769);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("42ceb978", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./id-card.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./id-card.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n#verification-id-card .imageuploadify {\r\n  height: 130px;\r\n  border: 2px dashed #699cff;\r\n  color: #140092;\r\n  background-color: #f0f3f5;\n}\n#verification-id-card .imageuploadify .imageuploadify-images-list {\r\n  padding: 35px 0;\n}\n#verification-id-card.image-upload-wrapper {\r\n  padding: 0;\r\n  width: 100%;\r\n  margin: auto;\n}\n#verification-id-card .article-images .image {\r\n  border-radius: 12px;\r\n  width: 214px;\r\n  height: 130px;\n}\n@media screen and (max-width: 991px) {\n#verification-id-card .upload {\r\n    padding: 0;\n}\n.uploader-content {\r\n    margin: auto;\n}\n.main-section-wrapper {\r\n    /* display: block; */\n}\n}\n@media (max-width: 768px) {\n.wrapper-articles {\r\n    display: grid;\n}\n#verification-id-card .wrapper-articles {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\n}\n#verification-id-card .upload {\r\n    height: 93px;\r\n    width: 150px;\n}\n#verification-id-card .imageuploadify {\r\n    height: 93px;\n}\n#verification-id-card .imageuploadify .imageuploadify-images-list {\r\n    padding: 16px 0;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(771);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("615e023e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-80c60ffa\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./id-card.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-80c60ffa\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./id-card.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.title[data-v-80c60ffa] {\r\n  padding: 13px 0;\n}\n.title h1[data-v-80c60ffa] {\r\n  font-size: 18px;\r\n  font-weight: bold;\n}\n.wrapper-section[data-v-80c60ffa] {\r\n  padding: 0;\r\n  float: right;\n}\n.wrapper-section .sample-card .sample-card-img[data-v-80c60ffa] {\r\n  padding: 0px 30px 0 35px;\n}\n.small-description[data-v-80c60ffa] {\r\n  font-size: 12px;\r\n  color: #bdc4cc;\n}\n.image-file-wrapper[data-v-80c60ffa] {\r\n  display: grid;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  justify-items: center;\r\n  height: 156px;\r\n  width: 245px;\r\n  border: 1px solid #00c569;\n}\n.image-file-wrapper[data-v-80c60ffa]::before {\r\n  content: \"\";\r\n  width: 270px;\r\n  height: 78px;\r\n  position: absolute;\r\n  z-index: 0;\r\n  background-color: #ffffff;\n}\n.image-file-wrapper[data-v-80c60ffa]::after {\r\n  content: \"\";\r\n  width: 135px;\r\n  height: 164px;\r\n  position: absolute;\r\n  z-index: 0;\r\n  background-color: #ffffff;\n}\n.image-file-wrapper img[data-v-80c60ffa] {\r\n  border-radius: 12px;\r\n  border: 1px solid #bdc4cc;\r\n  max-width: 214px;\r\n  height: 136px;\r\n  position: relative;\r\n  z-index: 2;\n}\n.main-title-wrapper[data-v-80c60ffa] {\r\n  width: 300px;\r\n  text-align: center;\r\n  padding-top: 15px;\r\n  padding-bottom: 10px;\r\n  font-weight: 400;\r\n  font-size: 1.6rem;\r\n  line-height: 16px;\r\n  color: rgb(0, 0, 0, 0.6);\n}\n.id-card-content[data-v-80c60ffa] {\r\n  padding-right: 30px;\n}\n.uploader-content[data-v-80c60ffa] {\r\n  display: grid;\r\n  height: 162px;\r\n  width: 214px;\r\n  margin-right: 40px;\n}\n.upload-error[data-v-80c60ffa] {\r\n  line-height: 1.618;\r\n  font-size: 1.2rem;\n}\n.-button.next i[data-v-80c60ffa] {\r\n  position: relative;\r\n  top: 3px;\r\n  margin-right: 14px;\n}\n.disabled[data-v-80c60ffa] {\r\n  color: #fff;\r\n  background: #ccc;\n}\n.user-verified-icon-wrapper[data-v-80c60ffa] {\r\n  margin-top: 50px;\n}\n.user-verified-icon[data-v-80c60ffa] {\r\n  position: relative;\r\n  font-size: 95px;\r\n  color: #1da1f2;\n}\n.user-verified-icon[data-v-80c60ffa]::before {\r\n  content: \"\\F00C\";\r\n  position: absolute;\r\n  left: 22px;\r\n  font-family: \"Font Awesome 5 Free\";\r\n  color: #fff;\r\n  top: 37px;\r\n  font-size: 52px;\r\n  z-index: 1;\r\n  line-height: 1;\r\n  font-weight: 900;\n}\n.title-section[data-v-80c60ffa] {\r\n  margin-top: 25px;\r\n  margin-bottom: 15px;\r\n  font-size: 1.8rem;\r\n  color: #000000;\r\n  line-height: 1.618;\r\n  padding: 0 15px;\r\n  text-align: center;\n}\n.button-icon-wrapper[data-v-80c60ffa] {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 2px;\n}\n.spinner-border[data-v-80c60ffa] {\r\n  position: absolute;\r\n  left: -3px;\r\n  top: 3px;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n  color: #fff;\r\n  border-width: 0.25rem;\n}\n.upload-error[data-v-80c60ffa] {\r\n  height: 25px;\r\n  margin: 5px 0;\r\n  padding: 0;\n}\n@media screen and (max-width: 991px) {\n.image-file-wrapper[data-v-80c60ffa],\r\n  #verification-id-card[data-v-80c60ffa] {\r\n    max-width: 300px;\r\n    margin: 0 auto;\n}\n.id-card-content[data-v-80c60ffa] {\r\n    padding-right: 0;\n}\n.upload-error[data-v-80c60ffa] {\r\n    text-align: center;\n}\n.action-button-wrapper[data-v-80c60ffa] {\r\n    margin-bottom: 80px;\n}\n.main-title-wrapper[data-v-80c60ffa] {\r\n    width: auto;\n}\n}\n@media screen and (max-width: 768px) {\n.image-file-wrapper[data-v-80c60ffa] {\r\n    text-align: center;\r\n    width: 245px;\n}\n.image-file-wrapper img[data-v-80c60ffa] {\r\n    width: 214px;\n}\n.main-title-wrapper[data-v-80c60ffa] {\r\n    padding-top: 15px;\r\n    font-size: 1.4rem;\n}\n.uploader-div .main-title-wrapper[data-v-80c60ffa] {\r\n    padding-top: 30px;\n}\n.orange-button[data-v-80c60ffa] {\r\n    font-size: 1.4rem;\r\n    padding: 6px 10px;\n}\n.orange-button.back[data-v-80c60ffa] {\r\n    padding: 13px 20px;\n}\n.orange-button.next i[data-v-80c60ffa] {\r\n    position: relative;\r\n    top: 1px;\r\n    margin-right: 2px;\n}\n.wrapper-section > div[data-v-80c60ffa] {\r\n    padding: 0;\n}\n.title-section[data-v-80c60ffa] {\r\n    font-size: 1.8rem;\n}\n.title-section[data-v-80c60ffa],\r\n  .action-button-wrapper[data-v-80c60ffa] {\r\n    padding: 0 5px;\n}\n.uploader-content[data-v-80c60ffa] {\r\n    height: auto;\r\n    width: 224px;\r\n    margin: auto;\n}\n.wrapper-section .sample-card[data-v-80c60ffa] {\r\n    width: 80%;\r\n    margin: auto;\r\n    padding: 0;\n}\n.wrapper-section .uploader-div[data-v-80c60ffa] {\r\n    padding: 0;\r\n    width: 80%;\r\n    margin: auto;\n}\n}\n@media screen and (max-width: 500px) {\n.image-file-wrapper[data-v-80c60ffa] {\r\n    text-align: center;\n}\n.image-file-wrapper img[data-v-80c60ffa] {\r\n    width: 245px;\r\n    min-height: 120px;\n}\n.title-section[data-v-80c60ffa] {\r\n    margin-bottom: 10px;\n}\n.main-title-wrapper[data-v-80c60ffa] {\r\n    text-align: right;\n}\n}\n@media screen and (max-width: 360px) {\n.title-section[data-v-80c60ffa] {\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\n}\n.wrapper-section .sample-card .sample-card-img[data-v-80c60ffa][data-v-80c60ffa] {\r\n    padding: 0px 30px 0 35px;\r\n    margin: auto;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "title-section" }, [
      _vm._v("\n    تصویر کارت ملی خود را طبق نمونه بارگذاری کنید.\n  ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row id-card-content" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "wrapper-section col-xs-12 col-md-6" }, [
        _c("div", { staticClass: "col-md-12 uploader-div" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "uploader-content" },
            [
              _c("UploadFile", {
                attrs: {
                  id: "verification-id-card",
                  uploadName: "idCardFile",
                  uploadAccept: "image/*",
                  uploadMinSize: 1024,
                  uploadSize: 1024 * 1024 * 10,
                  uploadMultiple: true,
                  uploadDrop: true,
                  uploadDropDirectory: true,
                  uploadAddIndex: false,
                  uploadThread: 2,
                  uploadOCompress: 1024 * 1024,
                  uploadUploadAuto: false,
                  imageWrapperSize: "col-xs-12 padding-0-5",
                  imageAccessUploadCount: "1",
                  maximum: 1
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("p", {
            staticClass: "upload-error red-text col-xs-12",
            domProps: { textContent: _vm._s(_vm.errors.idCardFile) }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 text-left" }, [
        _c("div", { staticClass: "action-button-wrapper" }, [
          _c(
            "button",
            {
              staticClass: "orange-button next",
              class: {
                disabled:
                  _vm.idCardFile.length == 0 ||
                  _vm.errors.idCardFile ||
                  _vm.isCompressor
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.nextStep($event)
                }
              }
            },
            [
              _c("span", [_vm._v(" مرحله بعد ")]),
              _vm._v(" "),
              _c("div", { staticClass: "button-icon-wrapper" }, [
                _c("i", {
                  staticClass: "fas fa-long-arrow-alt-left",
                  class: { empty: _vm.isCompressor }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "spinner-border",
                    class: { empty: !_vm.isCompressor }
                  },
                  [_c("span", { staticClass: "sr-only" })]
                )
              ])
            ]
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
    return _c(
      "section",
      {
        staticClass: "wrapper-section col-xs-12 col-md-6 verification-id-card"
      },
      [
        _c("div", { staticClass: "col-md-12 sample-card" }, [
          _c("div", { staticClass: "main-title-wrapper" }, [
            _vm._v("نمونه تصویر کارت ملی")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "sample-card-img" }, [
            _c("div", { staticClass: "image-file-wrapper" }, [
              _c("img", {
                staticClass: "placeholder-content",
                attrs: {
                  src: __webpack_require__(329)
                }
              })
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title-wrapper" }, [
      _vm._v("\n          بارگذاری تصویر کارت ملی\n          "),
      _c("span", { staticClass: "red-text" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-80c60ffa", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_user_image_vue__ = __webpack_require__(452);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74db0068_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_user_image_vue__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(774)
  __webpack_require__(776)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74db0068"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_user_image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74db0068_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_user_image_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74db0068_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_user_image_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\buyer\\profile\\verification-components\\user-image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74db0068", Component.options)
  } else {
    hotAPI.reload("data-v-74db0068", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(775);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("57318ab4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user-image.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user-image.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n#verification-user-image .imageuploadify {\r\n  width: 167px;\r\n  height: 223px;\r\n  border: 2px dashed #699cff;\r\n  color: #140092;\r\n  background-color: #f0f3f5;\n}\n#verification-user-image .imageuploadify .imageuploadify-images-list {\r\n  padding: 84px 0;\n}\n#verification-user-image .image-upload-wrapper {\r\n  padding: 0;\n}\n#verification-user-image .article-images .image {\r\n  border-radius: 12px;\r\n  width: 167px;\r\n  height: 223px;\r\n  background: #f7f7f7;\n}\n#verification-user-image .article-images .image img {\r\n  width: 167px;\r\n  height: 223px;\n}\n#verification-user-image .upload,\r\n#verification-user-image .article-images {\r\n  padding: 0;\n}\n#verification-user-image .article-images {\r\n  width: 167px;\n}\n#verification-user-image .wrapper-articles {\r\n  margin-top: 6px;\n}\n@media (max-width: 768px) {\n.wrapper-articles {\r\n    display: grid;\n}\n#verification-user-image .wrapper-articles {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\n}\n#verification-user-image .upload {\r\n    height: 93px;\r\n    width: 150px;\n}\n#verification-user-image .imageuploadify {\r\n    width: 150px;\r\n    height: 93px;\n}\n#verification-user-image .imageuploadify .imageuploadify-images-list {\r\n    padding: 16px 0;\n}\n}\n@media (max-width: 500px) {\n}\r\n", ""]);

// exports


/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(777);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("6fc050d2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-74db0068\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./user-image.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-74db0068\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./user-image.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n#verification-user-image[data-v-74db0068] {\r\n  overflow: hidden;\n}\n.ul-description-section[data-v-74db0068] {\r\n  width: 75%;\r\n  margin: auto;\n}\n.ul-description-section li[data-v-74db0068] {\r\n  font-size: 1.6rem;\r\n  line-height: 20px;\r\n  margin: 10px 0;\r\n  color: #000000;\n}\n.title[data-v-74db0068] {\r\n  padding: 13px 0;\n}\n.title h1[data-v-74db0068] {\r\n  font-size: 18px;\r\n  font-weight: bold;\n}\n.small-description[data-v-74db0068] {\r\n  font-size: 12px;\r\n  color: #bdc4cc;\n}\n.image-file-wrapper[data-v-74db0068] {\r\n  display: grid;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  justify-items: center;\r\n  height: 237px;\r\n  border: 1px solid #00c569;\n}\n.wrapper-section .sample-card .sample-card-img[data-v-74db0068] {\r\n  width: 190px;\r\n  margin: auto;\n}\n.wrapper-section .uploader-div[data-v-74db0068] {\r\n  padding-right: 50px;\r\n  float: right;\n}\n.image-file-wrapper[data-v-74db0068]::before {\r\n  content: \"\";\r\n  width: 200px;\r\n  height: 78px;\r\n  position: absolute;\r\n  z-index: 0;\r\n  background-color: #ffffff;\n}\n.image-file-wrapper[data-v-74db0068]::after {\r\n  content: \"\";\r\n  width: 135px;\r\n  height: 245px;\r\n  position: absolute;\r\n  z-index: 0;\r\n  background-color: #ffffff;\n}\n.image-file-wrapper img[data-v-74db0068] {\r\n  border: 1px solid rgba(176, 190, 197, 0.1);\r\n  border-radius: 4px;\r\n  max-width: 167px;\r\n  max-height: 223px;\r\n  position: relative;\r\n  z-index: 2;\n}\n.id-card-content[data-v-74db0068] {\r\n  padding-right: 30;\n}\n.main-title-wrapper[data-v-74db0068] {\r\n  padding-top: 15px;\r\n  padding-bottom: 10px;\r\n  font-size: 15px;\r\n  line-height: 1.618;\r\n  color: rgb(0, 0, 0, 0.6);\n}\n.upload-error[data-v-74db0068] {\r\n  line-height: 1.618;\n}\n.orange-button[data-v-74db0068] {\r\n  padding: 6px 27px;\n}\n.orange-button.next i[data-v-74db0068] {\r\n  position: relative;\r\n  top: 3px;\r\n  margin-right: 14px;\n}\n.orange-button.back[data-v-74db0068] {\r\n  padding: 6px 27px;\n}\n.orange-button.back[data-v-74db0068]:hover {\r\n  background: #f7f7f7;\n}\n.action-button-wrapper[data-v-74db0068] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: row-reverse;\r\n          flex-direction: row-reverse;\n}\n.disabled[data-v-74db0068] {\r\n  color: #fff;\r\n  background: #ccc;\n}\n.user-verified-icon-wrapper[data-v-74db0068] {\r\n  margin-top: 50px;\n}\n.user-verified-icon[data-v-74db0068] {\r\n  position: relative;\r\n  font-size: 95px;\r\n  color: #1da1f2;\n}\n.user-verified-icon[data-v-74db0068]::before {\r\n  content: \"\\F00C\";\r\n  position: absolute;\r\n  left: 22px;\r\n  font-family: \"Font Awesome 5 Free\";\r\n  color: #fff;\r\n  top: 37px;\r\n  font-size: 52px;\r\n  z-index: 1;\r\n  line-height: 1;\r\n  font-weight: 900;\n}\n.title-section[data-v-74db0068] {\r\n  width: 66%;\r\n  margin: 25px auto 15px;\r\n  font-size: 1.6rem;\r\n  color: #140092;\r\n  line-height: 1.618;\r\n  padding: 0 15px;\r\n  text-align: center;\n}\n.button-icon-wrapper[data-v-74db0068] {\r\n  display: inline-block;\r\n  position: relative;\n}\n.spinner-border[data-v-74db0068] {\r\n  position: absolute;\r\n  left: 2px;\r\n  top: 5px;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  color: #fff;\r\n  border-width: 0.25rem;\n}\n.upload-error[data-v-74db0068] {\r\n  height: 25px;\r\n  margin: 15px 0;\r\n  padding: 0;\n}\n@media screen and (max-width: 991px) {\n.image-file-wrapper[data-v-74db0068],\r\n  #verification-user-image[data-v-74db0068] {\r\n    max-width: 167px;\r\n    margin: 0 auto;\n}\n.image-file-wrapper[data-v-74db0068] {\r\n    max-width: 190px;\r\n    height: 237px;\n}\n.wrapper-section .sample-card[data-v-74db0068] {\r\n    padding-right: 50px;\n}\n.upload-error[data-v-74db0068] {\r\n    text-align: center;\n}\n.action-button-wrapper[data-v-74db0068] {\r\n    margin-bottom: 80px;\n}\n.orange-button[data-v-74db0068] {\r\n    padding: 5px 0;\n}\n.orange-button.next[data-v-74db0068] {\r\n    width: 93px;\n}\n.orange-button.next i[data-v-74db0068] {\r\n    position: relative;\r\n    top: 3px;\r\n    margin-right: 0;\n}\n.orange-button.back[data-v-74db0068] {\r\n    padding: 5px 0;\r\n    width: 93px;\n}\n.orange-button.back i[data-v-74db0068] {\r\n    position: relative;\r\n    top: 3px;\n}\n}\n@media screen and (max-width: 768px) {\n.main-title-wrapper[data-v-74db0068] {\r\n    padding-top: 25px;\n}\n.ul-description-section[data-v-74db0068] {\r\n    width: 90%;\n}\n.ul-description-section li[data-v-74db0068] {\r\n    font-size: 1.6rem;\n}\n.title-section[data-v-74db0068] {\r\n    width: 90%;\r\n    font-size: 1.4rem;\n}\n.verification-user-image[data-v-74db0068] {\r\n    width: 90%;\r\n    margin: auto;\r\n    display: grid;\n}\n.wrapper-section .uploader-div[data-v-74db0068] {\r\n    padding-right: 0;\r\n    width: 90%;\r\n    margin: auto;\r\n    float: none;\n}\n.wrapper-section > div[data-v-74db0068] {\r\n    padding: 0;\n}\n.wrapper-section .sample-card[data-v-74db0068] {\r\n    padding-left: 0;\r\n    padding-right: 0;\n}\n.title-section[data-v-74db0068],\r\n  .action-button-wrapper[data-v-74db0068] {\r\n    padding: 0 5px;\n}\n}\n@media (max-width: 500px) {\n.image-file-wrapper[data-v-74db0068] {\r\n    text-align: center;\n}\n.main-title-wrapper[data-v-74db0068] {\r\n    padding-top: 10px;\n}\n.title-section[data-v-74db0068] {\r\n    margin-bottom: 10px;\n}\n}\n@media screen and (max-width: 360px) {\n.title-section[data-v-74db0068] {\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "title-section" }, [
      _vm._v(
        '\n    "اینجانب.........کارت ملی خود را جهت احراز هویت در بازار باسکول ارسال می\n    نمایم."\n  '
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row id-card-content" }, [
      _c(
        "section",
        { staticClass: "wrapper-section verification-user-image" },
        [
          _c(
            "div",
            { staticClass: "col-xs-12 col-md-6 sample-card pull-right" },
            [
              _c("div", { staticClass: "main-title-wrapper" }, [
                _vm._v("نمونه تصویر گواهی احراز هویت")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "sample-card-img" }, [
                _c(
                  "div",
                  { staticClass: "image-file-wrapper" },
                  [
                    _c("imagePreloader", {
                      attrs: {
                        src: "../../../../../../img/user-verification.svg"
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(1)
                  ],
                  1
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "wrapper-section" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-md-6 uploader-div" },
          [
            _vm._m(2),
            _vm._v(" "),
            _c("UploadFile", {
              attrs: {
                id: "verification-user-image",
                uploadName: "userImageFile",
                uploadAccept: "image/*",
                uploadMinSize: 1024,
                uploadSize: 1024 * 1024 * 10,
                uploadMultiple: true,
                uploadDrop: true,
                uploadDropDirectory: true,
                uploadAddIndex: false,
                uploadThread: 2,
                uploadOCompress: 1024 * 1024,
                uploadUploadAuto: false,
                imageWrapperSize: "col-xs-12",
                imageAccessUploadCount: "1",
                maximum: 1
              }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "upload-error red-text col-xs-12",
              domProps: { textContent: _vm._s(_vm.errors.userImageFile) }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 text-left" }, [
        _c("div", { staticClass: "action-button-wrapper" }, [
          _c(
            "button",
            {
              staticClass: "orange-button next",
              class: {
                disabled:
                  _vm.userImageFile.length == 0 ||
                  _vm.errors.userImageFile ||
                  _vm.isCompressor
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.nextStep($event)
                }
              }
            },
            [
              _c("span", [_vm._v(" ثبت نهایی ")]),
              _vm._v(" "),
              _c("div", { staticClass: "button-icon-wrapper" }, [
                _c("i", {
                  staticClass: "fa fa-check",
                  class: { empty: _vm.isCompressor }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "spinner-border",
                    class: { empty: !_vm.isCompressor }
                  },
                  [_c("span", { staticClass: "sr-only" })]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "orange-button back",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.backStep()
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-arrow-right" }),
              _vm._v(" "),
              _c("span", [_vm._v(" مرحله قبل ")])
            ]
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
    return _c("div", [
      _c("ul", { staticClass: "ul-description-section" }, [
        _c("li", [_vm._v("۱-کارت ملی خود را روی کاغذ سفید(A۴) بچسبانید.")]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "\n        ۲-روی کاغذ متن زیر را بنوسید و امضا کنید و سپس با آن طبق نمونه زیر،\n        عکس بگیرید.\n      "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { attrs: { href: "../../../../../../img/user-verification.svg" } },
      [
        _c("img", {
          staticClass: "placeholder-content",
          attrs: { src: __webpack_require__(330) }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title-wrapper" }, [
      _vm._v("\n          بارگذاری تصویر گواهی احراز هویت\n          "),
      _c("span", { staticClass: "red-text" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74db0068", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_document_image_vue__ = __webpack_require__(453);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b64ee38_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_document_image_vue__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(780)
  __webpack_require__(782)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b64ee38"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_document_image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b64ee38_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_document_image_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b64ee38_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_document_image_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\buyer\\profile\\verification-components\\document-image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b64ee38", Component.options)
  } else {
    hotAPI.reload("data-v-7b64ee38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(781);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("51a0be54", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./document-image.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./document-image.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n#verification-document .imageuploadify .imageuploadify-images-list {\r\n  padding: 100px 0;\n}\n#verification-document .image-upload-wrapper {\r\n  padding: 0;\n}\n#verification-document .article-images .image {\r\n  border-radius: 12px;\r\n  height: 275px;\r\n  background: #f7f7f7;\n}\n#verification-document .article-images .image img {\r\n  min-height: initial;\n}\n#verification-document .upload,\r\n#verification-document .article-images {\r\n  padding: 0;\n}\n#verification-document .imageuploadify #custom-upload-image-icons {\r\n  margin: 0 48%;\n}\n@media screen and (max-width: 768px) {\n#verification-document .imageuploadify .imageuploadify-images-list {\r\n    padding: 50px 0;\n}\n#verification-document .article-images .image {\r\n    border-radius: 12px;\r\n    height: 151px;\r\n    background: #f7f7f7;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(783);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("142c85a3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7b64ee38\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./document-image.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7b64ee38\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./document-image.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n#verification-document[data-v-7b64ee38] {\r\n  overflow: hidden;\n}\n.title[data-v-7b64ee38] {\r\n  padding: 13px 0;\n}\n.title h1[data-v-7b64ee38] {\r\n  font-size: 18px;\r\n  font-weight: bold;\n}\n.small-description[data-v-7b64ee38] {\r\n  font-size: 12px;\r\n  color: #bdc4cc;\n}\n.image-file-wrapper img[data-v-7b64ee38] {\r\n  border-radius: 12px;\r\n  border: 1px solid #bdc4cc;\r\n  min-height: 272px;\n}\n.main-title-wrapper[data-v-7b64ee38] {\r\n  padding-top: 15px;\r\n  padding-bottom: 10px;\r\n  font-size: 15px;\r\n  line-height: 1.618;\n}\n.upload-error[data-v-7b64ee38] {\r\n  line-height: 1.618;\n}\n.green-button[data-v-7b64ee38] {\r\n  border-radius: 12px;\r\n  margin: 44px 5px 50px;\r\n  font-size: 21px;\r\n  font-weight: 500;\r\n  padding: 13px 50px;\r\n  position: relative;\n}\n.green-button.next i[data-v-7b64ee38] {\r\n  position: relative;\r\n  top: 3px;\r\n  margin-right: 14px;\n}\n.green-button.back[data-v-7b64ee38] {\r\n  background: #fff;\r\n  border: 1px solid #bdc4cc;\r\n  color: #777777;\r\n  padding: 13px 30px;\n}\n.green-button.back[data-v-7b64ee38]:hover {\r\n  background: #f7f7f7;\n}\n.action-button-wrapper[data-v-7b64ee38] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: row-reverse;\r\n          flex-direction: row-reverse;\n}\n.disabled[data-v-7b64ee38] {\r\n  color: #fff;\r\n  background: #ccc;\n}\n.user-verified-icon-wrapper[data-v-7b64ee38] {\r\n  margin-top: 50px;\n}\n.user-verified-icon[data-v-7b64ee38] {\r\n  position: relative;\r\n  font-size: 95px;\r\n  color: #1da1f2;\n}\n.user-verified-icon[data-v-7b64ee38]::before {\r\n  content: \"\\F00C\";\r\n  position: absolute;\r\n  left: 22px;\r\n  font-family: \"Font Awesome 5 Free\";\r\n  color: #fff;\r\n  top: 37px;\r\n  font-size: 52px;\r\n  z-index: 1;\r\n  line-height: 1;\r\n  font-weight: 900;\n}\n.title-section[data-v-7b64ee38] {\r\n  margin-top: 25px;\r\n  margin-bottom: 15px;\r\n  font-size: 18px;\r\n  color: #313a43;\r\n  line-height: 1.618;\r\n  padding: 0 15px;\n}\n.button-icon-wrapper[data-v-7b64ee38] {\r\n  display: inline-block;\r\n  position: relative;\n}\n.spinner-border[data-v-7b64ee38] {\r\n  position: absolute;\r\n  left: 2px;\r\n  top: 5px;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  color: #fff;\r\n  border-width: 0.25rem;\n}\n.upload-error[data-v-7b64ee38] {\r\n  height: 25px;\r\n  margin: 15px 0;\r\n  padding: 0;\n}\n@media screen and (max-width: 992px) {\n.upload-error[data-v-7b64ee38] {\r\n    text-align: center;\n}\n.action-button-wrapper[data-v-7b64ee38] {\r\n    margin-bottom: 80px;\n}\n}\n@media screen and (max-width: 768px) {\n.main-title-wrapper[data-v-7b64ee38] {\r\n    padding-top: 25px;\n}\n.green-button[data-v-7b64ee38] {\r\n    border-radius: 12px;\r\n    margin: 44px 0 50px;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    padding: 13px 27px;\n}\n.green-button.next i[data-v-7b64ee38] {\r\n    position: relative;\r\n    top: 3px;\r\n    margin-right: 10px;\n}\n.wrapper-section > div[data-v-7b64ee38] {\r\n    padding: 0;\n}\n.green-button.next[data-v-7b64ee38] {\r\n    min-width: 163px;\n}\n.green-button.back[data-v-7b64ee38] {\r\n    padding: 13px 20px;\n}\n.title-section[data-v-7b64ee38],\r\n  .action-button-wrapper[data-v-7b64ee38] {\r\n    padding: 0 5px;\n}\n.image-file-wrapper img[data-v-7b64ee38] {\r\n    min-height: 151px;\n}\n.image-file-wrapper[data-v-7b64ee38],\r\n  #verification-document[data-v-7b64ee38] {\r\n    max-width: 360px;\r\n    margin: 0 auto;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("section", { staticClass: "wrapper-section" }, [
      _c(
        "div",
        { staticClass: "col-xs-12 pull-right" },
        [
          _vm._m(2),
          _vm._v(" "),
          _c("UploadFile", {
            attrs: {
              id: "verification-document",
              uploadName: "documentImageFile",
              uploadAccept: "image/*",
              uploadMinSize: 1024,
              uploadSize: 1024 * 1024 * 10,
              uploadMultiple: true,
              uploadDrop: true,
              uploadDropDirectory: true,
              uploadAddIndex: false,
              uploadThread: 2,
              uploadOCompress: 1024 * 1024,
              uploadUploadAuto: false,
              imageWrapperSize: "col-xs-12",
              imageAccessUploadCount: "1",
              maximum: 1
            }
          }),
          _vm._v(" "),
          _c("p", {
            staticClass: "upload-error red-text col-xs-12",
            domProps: { textContent: _vm._s(_vm.errors.documentImageFile) }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-xs-12 text-left action-button-wrapper" }, [
      _c(
        "button",
        {
          staticClass: "green-button next",
          class: {
            disabled:
              _vm.documentImageFile.length == 0 ||
              _vm.errors.documentImageFile ||
              _vm.isCompressor
          },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.nextStep($event)
            }
          }
        },
        [
          _c("span", [_vm._v(" ثبت نهایی ")]),
          _vm._v(" "),
          _c("div", { staticClass: "button-icon-wrapper" }, [
            _c("i", {
              staticClass: "fa fa-check",
              class: { empty: _vm.isCompressor }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "spinner-border",
                class: { empty: !_vm.isCompressor }
              },
              [_c("span", { staticClass: "sr-only" })]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "green-button back",
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.backStep()
            }
          }
        },
        [
          _c("i", { staticClass: "fa fa-arrow-right" }),
          _vm._v(" "),
          _c("span", [_vm._v(" مرحله قبل ")])
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
    return _c("div", { staticClass: "title-section" }, [
      _vm._v("\n    تصویر\n    "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" یکی ")]),
      _vm._v(
        "\n    از این اسناد (اجاره نامه یا جواز کسب یا سند مالکیت) که به نام فرد دارنده\n    کارت ملی است.\n  "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "wrapper-section verification-document" },
      [
        _c("div", { staticClass: "col-xs-12 pull-right" }, [
          _c("div", { staticClass: "main-title-wrapper" }, [
            _vm._v("نمونه تصویر یکی از این اسناد")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "image-file-wrapper" }, [
            _c("img", {
              staticClass: "placeholder-content",
              attrs: {
                src: __webpack_require__(331)
              }
            })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title-wrapper" }, [
      _vm._v(
        "\n        بارگذاری تصویر یکی از اسناد که به نام فرد دارنده کارت ملی است\n        "
      ),
      _c("span", { staticClass: "red-text" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b64ee38", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.$parent.currentUser.user_info.is_verified
    ? _c("section", { staticClass: "main-content col-xs-12" }, [
        _c("div", { staticClass: "row title-wrapper hidden-xs hidden-sm" }, [
          _vm.currentStep >= 0 && _vm.currentStep <= 1
            ? _c("div", { staticClass: "section-title" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(786),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    "\n        با احراز هویت، اعتماد خریداران و فروشندگان را به خود جلب کنید."
                  )
                ])
              ])
            : _c("div", [_c("br")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "row wrapper-section",
            class: {
              success: _vm.currentStep == 2
            }
          },
          [
            _c("div", { staticClass: "main-section" }, [
              _c("header", { staticClass: "header-section" }, [
                _vm.currentStep >= 0 && _vm.currentStep <= 1
                  ? _c("div", { staticClass: "wrapper-progressbar" }, [
                      _c("div", { staticClass: "progressbar-items" }, [
                        _c(
                          "a",
                          {
                            staticClass: "progrees-item",
                            class: {
                              "active-item": _vm.currentStep == 0,
                              "done-item": _vm.currentStep == 1
                            }
                          },
                          [
                            _c("span", { staticClass: "wrapper-counter" }, [
                              _vm._v("1")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "progrees-item",
                            class: { "active-item": _vm.currentStep >= 1 }
                          },
                          [
                            _c("span", { staticClass: "line-item" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "wrapper-counter" }, [
                              _vm._v("2")
                            ])
                          ]
                        )
                      ])
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("main", { staticClass: "main-section-wrapper" }, [
                _c(
                  "div",
                  { staticClass: "main-section-content" },
                  [
                    _c("IdCard", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentStep == 0,
                          expression: "currentStep == 0"
                        }
                      ]
                    }),
                    _vm._v(" "),
                    _c("UserImage", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentStep == 1,
                          expression: "currentStep == 1"
                        }
                      ]
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.currentStep == 2,
                            expression: "currentStep == 2"
                          }
                        ],
                        staticClass: "success-step"
                      },
                      [
                        _c("div", { staticClass: "success-register" }, [
                          _c("div", { staticClass: "title-success" }, [
                            _c("div", { staticClass: "icon-wrapper" }, [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    width: "36",
                                    height: "32",
                                    viewBox: "0 0 36 32",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }
                                },
                                [
                                  _c("circle", {
                                    attrs: {
                                      cx: "20",
                                      cy: "16",
                                      r: "16",
                                      fill: "white"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: {
                                      cx: "20",
                                      cy: "16",
                                      r: "16",
                                      fill: "white"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: {
                                      cx: "20",
                                      cy: "16",
                                      r: "16",
                                      fill: "white"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: {
                                      cx: "20",
                                      cy: "16",
                                      r: "16",
                                      fill: "white"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: {
                                      cx: "16",
                                      cy: "16",
                                      r: "15.5",
                                      stroke: "black"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M9.77771 16.0001L15.111 20.4446L22.2222 11.5557",
                                      stroke: "black"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("h2", [
                              _vm._v(
                                "اطلاعات شما با موفقیت برای کارشناسان باسکول ارسال شد!"
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "پس از تایید کارشناسان حساب شما احراز هویت خواهد شد."
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "actions-wrapper" }, [
                          _c("div", { staticClass: "col-xs-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "default-btn-with-icon",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.routeToPage("specialProducts")
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "button-main-icon-wrapper" },
                                  [
                                    _c(
                                      "svg",
                                      {
                                        attrs: {
                                          width: "20",
                                          height: "24",
                                          viewBox: "0 0 20 24",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M10 23.27L0.25 16.27L2.005 15.01L9.98917 20.74L17.9842 15.001L19.75 16.27L10 23.27ZM10 19L0.25 12L2.005 10.74L9.98917 16.47L17.9842 10.73L19.75 12L10 19ZM10 14.73L2.01583 8.99998L0.25 7.72998L10 0.72998L19.75 7.72998L17.9733 8.99998L10 14.73Z",
                                            fill: "white"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(0),
                                _vm._v(" "),
                                _c("i", { staticClass: "fa fa-angle-left" })
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "section-background" })
          ]
        )
      ])
    : _c("section", { staticClass: "main-content col-xs-12" }, [_vm._m(1)])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "button-content-wrapper" }, [
      _c("p", { staticClass: "button-title" }, [_vm._v("محصولات پیشنهادی")]),
      _vm._v(" "),
      _c("p", { staticClass: "button-text" }, [
        _vm._v("مشاهده لیست محصولات فروشندگان")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "section",
        { staticClass: "wrapper-section user-verified-wrapper text-center" },
        [
          _c("div", { staticClass: "user-verified-icon-wrapper" }, [
            _c("span", { staticClass: "user-verified-icon" }, [
              _c("i", { staticClass: "fa fa-certificate" })
            ])
          ]),
          _vm._v(" "),
          _c("h3", [_vm._v("اطلاعات هویتی شما احراز شده است.")])
        ]
      )
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e506d528", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "/images/ic_twotone-tips-and-updates.svg?2e579bf93cfecddf52d649d256f801ed";

/***/ })

});