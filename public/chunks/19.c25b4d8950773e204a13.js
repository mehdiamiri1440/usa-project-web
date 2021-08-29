webpackJsonp([19],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_basic_vue__ = __webpack_require__(333);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14adfcd8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_basic_vue__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(488)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14adfcd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_basic_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14adfcd8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_basic_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14adfcd8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_basic_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 168:
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

/***/ 169:
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(168)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blueimp_load_image__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blueimp_load_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blueimp_load_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xkeshi_image_compressor__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xkeshi_image_compressor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__xkeshi_image_compressor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_upload_component__ = __webpack_require__(192);
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
//
//
//
//
//



// import Cropper from 'cropperjs'


/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["uploadName", "uploadAccept", "uploadMinSize", "uploadSize", "uploadMultiple", "uploadDropDirectory", "uploadAddIndex", "uploadThread", "uploadUploadAuto", "imageWrapperSize", "isCompressor", "isImageReset", "imageAccessUploadCount", "maximum"],
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

  watch: {
    files: function files(value) {
      this.$parent[this.uploadName] = value;
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
  },
  methods: {
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
  }
});

/***/ }),

/***/ 171:
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(168)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 172:
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(168), __webpack_require__(169)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 173:
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(168), __webpack_require__(169)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_upload_image_vue__ = __webpack_require__(170);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_88de57fe_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_image_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(184)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-88de57fe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_upload_image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_88de57fe_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_image_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_88de57fe_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_image_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/upload-image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88de57fe", Component.options)
  } else {
    hotAPI.reload("data-v-88de57fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 175:
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

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("d742346c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-88de57fe\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload-image.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-88de57fe\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload-image.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.btn-crop[data-v-88de57fe] {\n  display: inline-block;\n  background: #00c569;\n  color: #fff;\n  padding: 10px 35px;\n  border-radius: 3px;\n  text-align: center;\n  border: none;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.btn-cancel[data-v-88de57fe] {\n  display: inline-block;\n  background: #e8312d;\n  color: #fff;\n  padding: 10px 35px;\n  border-radius: 3px;\n  text-align: center;\n  border: none;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n#modal-edit-file[data-v-88de57fe] {\n  overflow: scroll;\n}\n.form-group[data-v-88de57fe] {\n  margin: 0;\n  overflow: hidden;\n}\n.image-upload-wrapper[data-v-88de57fe],\n.article-images[data-v-88de57fe] {\n  position: relative;\n}\n.actions-content[data-v-88de57fe] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  text-align: center;\n  display: block;\n  right: 0;\n  opacity: 0;\n  background: rgba(49, 58, 67, 0.85);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.image[data-v-88de57fe] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  top: 0;\n  overflow: hidden;\n  border-radius: 3px;\n  position: relative;\n  height: 115px;\n}\n.image img[data-v-88de57fe] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 100%;\n  min-height: 100%;\n  min-width: 100%;\n}\n.image-upload-wrapper .btn-group .dropdown-menu[data-v-88de57fe] {\n  display: block;\n  visibility: hidden;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.image-upload-wrapper .btn-group:hover > .dropdown-menu[data-v-88de57fe] {\n  visibility: visible;\n}\n.image-upload-wrapper label.dropdown-item[data-v-88de57fe] {\n  margin-bottom: 0;\n}\n.image-upload-wrapper .btn-group .dropdown-toggle[data-v-88de57fe] {\n  margin-right: 0.6rem;\n}\n.image-upload-wrapper .filename[data-v-88de57fe] {\n  margin-bottom: 0.3rem;\n}\n.image-upload-wrapper .btn-is-option[data-v-88de57fe] {\n  margin-top: 0.25rem;\n}\n.image-upload-wrapper .edit-image img[data-v-88de57fe] {\n  max-width: 100%;\n}\n.image-upload-wrapper .edit-image-tool[data-v-88de57fe] {\n  margin-top: 0.6rem;\n}\n.image-upload-wrapper .edit-image-tool .btn-group[data-v-88de57fe] {\n  margin-right: 0.6rem;\n}\n.image-upload-wrapper .footer-status[data-v-88de57fe] {\n  padding-top: 0.4rem;\n}\n.image-upload-wrapper .drop-active[data-v-88de57fe] {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  position: absolute;\n  z-index: 9999;\n  opacity: 0;\n  text-align: center;\n  background: #000;\n}\n.image-upload-wrapper .drop-active h3[data-v-88de57fe] {\n  margin: -0.5em 0 0;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  font-size: 40px;\n  color: #fff;\n  padding: 0;\n}\n.fade[data-v-88de57fe] {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.modal-backdrop[data-v-88de57fe] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade[data-v-88de57fe] {\n  visibility: hidden;\n}\n.modal-backdrop.fade.show[data-v-88de57fe] {\n  visibility: visible;\n}\n.fade.show[data-v-88de57fe] {\n  display: block;\n  z-index: 1072;\n}\n.fade.show[data-v-88de57fe] {\n  opacity: 1;\n}\n.modal-backdrop.show[data-v-88de57fe] {\n  opacity: 0.5;\n}\n.modal[data-v-88de57fe] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n}\n.modal.fade .modal-dialog[data-v-88de57fe] {\n  transition: -webkit-transform 0.3s ease-out;\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n}\n.modal-lg[data-v-88de57fe] {\n  max-width: 800px;\n}\n.modal.show .modal-dialog[data-v-88de57fe] {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.modal-content[data-v-88de57fe] {\n  background: transparent;\n\n  -webkit-box-shadow: none;\n\n          box-shadow: none;\n\n  border: none;\n  position: relative;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  /*background-color: #fff;*/\n  /*background-clip: padding-box;*/\n  /*border: 1px solid rgba(0,0,0,.2);*/\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-header[data-v-88de57fe] {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: justify;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #e9ecef;\n}\nbutton.close[data-v-88de57fe] {\n  position: absolute;\n  top: -25px;\n  right: -12px;\n  background: #dc3545;\n  opacity: 1;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 30px;\n  padding-top: 4px;\n  border: 0;\n  z-index: 1;\n}\n.modal-title[data-v-88de57fe] {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body[data-v-88de57fe] {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0 15px;\n}\n.modal-footer[data-v-88de57fe] {\n  display: block;\n  border-top: none;\n  background: #fff;\n  margin-top: -2px;\n  text-align: center;\n  padding: 15px;\n}\n.btn-primary[data-v-88de57fe] {\n  display: inline-block;\n  background: #00c569;\n  color: #fff;\n  padding: 10px 35px;\n  border-radius: 3px;\n  text-align: center;\n  border: none;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.btn[data-v-88de57fe] {\n  display: inline-block;\n\n  font-weight: 400;\n\n  text-align: center;\n\n  white-space: nowrap;\n\n  vertical-align: middle;\n\n  -webkit-user-select: none;\n\n  -moz-user-select: none;\n\n  -ms-user-select: none;\n\n  user-select: none;\n\n  border: 1px solid transparent;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  padding: 1.2rem 3.75rem;\n  font-size: 1.6rem;\n  line-height: 1.25;\n  border-radius: 0.25rem;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n}\n.progress[data-v-88de57fe] {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-align: center;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.bg-danger[data-v-88de57fe] {\n  background-color: #dc3545 !important;\n}\n@media only screen and (max-width: 991px) {\n.actions-content[data-v-88de57fe] {\n    opacity: 1;\n    background: none;\n}\n.modal.show .modal-dialog[data-v-88de57fe] {\n    margin: 40px 20px;\n}\n.btn-cancel[data-v-88de57fe],\n  .btn-crop[data-v-88de57fe] {\n    width: 100%;\n    margin: 8px 0 !important;\n}\n.image[data-v-88de57fe] {\n    height: 150px;\n}\n}\n@media only screen and (max-width: 767px) {\n.imageuploadify .imageuploadify-images-list[data-v-88de57fe] {\n    padding: 78px 0;\n}\n.image[data-v-88de57fe] {\n    height: 200px;\n}\n}\n@media only screen and (max-width: 512px) {\n.imageuploadify .imageuploadify-images-list[data-v-88de57fe] {\n    padding: 53px 0;\n}\n.image[data-v-88de57fe] {\n    height: 150px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

/* global module, require */

module.exports = __webpack_require__(168)

__webpack_require__(171)
__webpack_require__(169)
__webpack_require__(187)
__webpack_require__(172)
__webpack_require__(188)
__webpack_require__(173)
__webpack_require__(189)
__webpack_require__(190)


/***/ }),

/***/ 187:
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(168)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 188:
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(168), __webpack_require__(172)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 189:
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(168), __webpack_require__(173)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 190:
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(168), __webpack_require__(171), __webpack_require__(169)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 191:
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

/***/ 192:
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

/***/ 193:
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
                              staticClass: "fa fa-trash",
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
    require("vue-hot-reload-api")      .rerender("data-v-88de57fe", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_image__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sweetalert_min_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sweetalert_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__sweetalert_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imageuploadify_min__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imageuploadify_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__imageuploadify_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_completation_vue__ = __webpack_require__(490);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["str", "assets"],
  components: {
    UploadFile: __WEBPACK_IMPORTED_MODULE_1__upload_image__["a" /* default */],
    ProfileCompletion: __WEBPACK_IMPORTED_MODULE_4__profile_completation_vue__["a" /* default */]
  },
  data: function data() {
    return {
      currentUser: {
        profile: {
          is_company: "",
          company_name: "",
          company_register_code: "",
          address: "",
          public_phone: "",
          profile_photo: "",
          description: ""
        },
        user_info: "",
        relateds: "",
        certificates: ""
      },
      profileBasicFields: ["is_company", "company_name", "company_register_code", "public_phone", "address", "postal_code", "description"],

      profileErrors: ["public_phone", "description", "address", "company_name", "company_register_code"],
      profilePhoto: "",
      errors: {
        public_phone: "",
        description: "",
        address: "",
        company_name: "",
        company_register_code: ""
      },
      popUpMsg: "",
      items: "",
      relatedFiles: [],
      certificateFiles: [],
      relatedFilesReset: false,
      certificateFilesReset: false,
      formEnabled: false,
      rankState: {
        is_company: 12,
        company_name: 11,
        company_register_code: 11,
        public_phone: 11,
        address: 11,
        description: 11,
        profile_photo: 11,
        certificates: 11,
        relateds: 11
      },
      completeProfileProgress: 0,
      uploadPercentage: 0,
      isLoaded: false
    };
  },
  methods: {
    init: function init() {
      this.activeisCompanyCollapse();
      this.isLoaded = true;
      $('input[type="file"]').imageuploadify();
      this.getProfileInfo();
    },
    getProfileInfo: function getProfileInfo() {
      var _this = this;

      axios.post("/user/profile_info").then(function (response) {
        _this.currentUser = response.data;
        _this.isLoaded = false;
        if (_this.currentUser.profile.is_company) {
          $("#company-box").collapse("show");
        }
        _this.sumProgressNumber();
      });
    },

    RegisterBasicProfileInfo: function RegisterBasicProfileInfo() {
      if (this.currentUser.profile.is_company) {
        this.checkIsCompany();
      } else {
        this.errors.company_name = "";
        this.errors.company_register_code = "";
      }
      var formError = 0;

      for (var i = 0; i < this.profileErrors.length; i++) {
        if (this.errors[this.profileErrors[i]]) {
          formError += 1;
        }
      }
      if (!formError) {
        __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submiting", true);

        var self = this;
        var data = new FormData();

        for (var i = 0, cnt = this.profileBasicFields.length; i < cnt; i++) {
          if (this.currentUser.profile[this.profileBasicFields[i]] != null) {
            data.append(this.profileBasicFields[i], this.toLatinNumbers(this.currentUser.profile[this.profileBasicFields[i]]));
          }
        }

        for (var i = 0; i < this.relatedFiles.length; i++) {
          var file = this.relatedFiles[i];
          data.append("related_" + i, file.file);
        }

        for (var i = 0; i < this.certificateFiles.length; i++) {
          var _file = this.certificateFiles[i];
          data.append("certificate_" + i, _file.file);
        }

        data.append("related_image_count", this.relatedFiles.length);
        data.append("certificate_image_count", this.certificateFiles.length);

        // end Complementary  form check

        var profilePhoto = this.$refs.profilePhoto.files[0];
        if (profilePhoto) {
          data.append("profile_photo", profilePhoto);
        }
        axios.post("/user/profile_modification", data, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          },
          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
          }.bind(this)
        }).then(function (response) {
          if (response.status === 200) {
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submiting", false);
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("uploadPercentage", 0);
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "profileEditSuccess");
            self.relatedFilesReset = true;
            self.certificateFilesReset = true;
            axios.post("/user/profile_info").then(function (response) {
              self.currentUser = response.data;
              if (self.currentUser.profile.is_company) {
                $("#company-box").collapse("show");
              }
              self.sumProgressNumber();
            });
          }
          self.submiting = false;
        }).catch(function (err) {
          self.scrollToTop();
          if (err.response.status === 413) {
            self.popUpMsg = "اندازه تصاویر بزرگ تر 5  از مگابایت است یا فرمت مناسبی ندارد";
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submitSuccess", self.popUpMsg);
            $("#custom-main-modal").modal("show");
          }

          self.errors = "";
          self.errors = err.response.data.errors;

          var tmpArray = Object.keys(self.errors);
          //console.log((tmpArray.join() + "").includes('related') || (tmpArray.join() + "").includes('certificate') );
          if ((tmpArray.join() + "").includes("related") || (tmpArray.join() + "").includes("certificate")) {
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submiting", false);
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("uploadPercentage", 0);
            self.popUpMsg = "اندازه تصاویر بزرگ تر 5  از مگابایت است یا فرمت مناسبی ندارد";
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submitSuccess", self.popUpMsg);
            $("#custom-main-modal").modal("show");
          }
          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submiting", false);
          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("uploadPercentage", 0);
        });
      }
    },
    switchPhoneActivation: function switchPhoneActivation(active) {
      var _this2 = this;

      axios.post("/set_phone_number_view_permission", { permission: active }).then(function (response) {
        _this2.getProfileInfo();
        __WEBPACK_IMPORTED_MODULE_2__sweetalert_min_js___default()({
          title: "تغییرات شماره تماس",
          text: "تغییرات شماره تماس با موفقیت اعمال شد",
          icon: "success",
          className: "custom-swal-with-cancel",
          buttons: {
            close: {
              text: "بستن",
              className: "bg-cancel"
            }
          }
        });
      });
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

    sumProgressNumber: function sumProgressNumber() {
      this.completeProfileProgress = 0;

      if (this.currentUser.profile.is_company) {
        this.completeProfileProgress += this.rankState.is_company;
      }
      if (this.currentUser.profile.company_name) {
        this.completeProfileProgress += this.rankState.company_name;
      }
      if (this.currentUser.profile.company_register_code) {
        this.completeProfileProgress += this.rankState.company_register_code;
      }
      if (this.currentUser.profile.address) {
        this.completeProfileProgress += this.rankState.address;
      }
      if (this.currentUser.profile.public_phone) {
        this.completeProfileProgress += this.rankState.public_phone;
      }
      if (this.currentUser.profile.description) {
        this.completeProfileProgress += this.rankState.description;
      }
      if (this.currentUser.profile.profile_photo) {
        this.completeProfileProgress += this.rankState.profile_photo;
      }

      if (this.currentUser.certificates.length) {
        this.completeProfileProgress += this.rankState.certificates;
      }
      if (this.currentUser.relateds.length) {
        this.completeProfileProgress += this.rankState.relateds;
      }
      this.circleProgress();
    },
    circleProgress: function circleProgress() {
      var circle = 315;
      var percentage = circle - this.completeProfileProgress * circle / 100;
      $("circle").attr("stroke-dashoffset", percentage);
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
    activeisCompanyCollapse: function activeisCompanyCollapse() {
      var _this3 = this;

      $("#company-box").on("hidden.bs.collapse", function () {
        _this3.currentUser.profile.is_company = 0;
      });
      $("#company-box").on("show.bs.collapse", function () {
        _this3.currentUser.profile.is_company = 1;
      });
    },
    checkIsCompany: function checkIsCompany() {
      if (this.currentUser.profile.company_name && !this.currentUser.profile.company_register_code) {
        this.errors.company_register_code = "لطفا شماره ثبت شرکت را وارد کنید";
      } else if (!this.currentUser.profile.company_name && this.currentUser.profile.company_register_code) {
        this.errors.company_name = "لطفا  نام شرکت را وارد کنید";
      } else if (!this.currentUser.profile.company_name && !this.currentUser.profile.company_register_code) {
        this.errors.company_register_code = "";
        this.errors.company_name = "";
        $("#company-box").collapse("hide");
        this.currentUser.profile.is_company = 0;
      }
    },

    phoneValidator: function phoneValidator(number) {
      this.errors.public_phone = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.public_phone = "لطفا  شماره را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.public_phone = "لطفا فقط عدد وارد کنید ";
      }
    },
    companyRegisterCodeValidator: function companyRegisterCodeValidator(number) {
      this.errors.company_register_code = "";
      var standardNumber = this.toLatinNumbers(number);
      if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.company_register_code = "لطفا فقط عدد وارد کنید ";
      }
    },
    textValidator: function textValidator(text) {
      if (text != "") {
        if (!this.validateRegx(text, /^[\u0600-\u06FF\s_,.:/;()+-\d]+$/)) {
          return true;
        }
      }
    },
    validateRegx: function validateRegx(input, regx) {
      return regx.test(input);
    },
    show_image_preview: function show_image_preview(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        var image = $(".user-img-wrapper");
        reader.onload = function (e) {
          image.css("background-image", "url('" + e.target.result + "')");
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
  },
  mounted: function mounted() {
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", this.items);
    var self = this;

    $("#imgInp").change(function () {
      self.show_image_preview(this);
    });
    if (this.isOsIOS()) {
      $("#phone-number").attr("type", "text");
      $("#company-number").attr("type", "text");
    }
  },
  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/profile-basic" });
  },

  watch: _defineProperty({
    uploadPercentage: function uploadPercentage() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("uploadPercentage", this.uploadPercentage);
    },
    "currentUser.profile.company_register_code": function currentUserProfileCompany_register_code(value) {
      this.currentUser.profile.company_register_code = this.toLatinNumbers(value);
    },
    "currentUser.profile.public_phone": function currentUserProfilePublic_phone(value) {
      if (value.length >= 11) {
        this.currentUser.profile.public_phone = value.substring(0, 11);
      }
      this.phoneValidator(value);
    },
    "currentUser.profile.address": function currentUserProfileAddress(value) {
      this.errors.address = "";

      if (value && this.textValidator(value)) {
        this.errors.address = "آدرس شامل حروف غیرمجاز است";
      }
    },
    "currentUser.profile.description": function currentUserProfileDescription(value) {
      this.errors.description = "";

      if (value && this.textValidator(value)) {
        this.errors.description = "توضیحات شامل حروف غیرمجاز است";
      }
    },
    "currentUser.profile.company_name": function currentUserProfileCompany_name(value) {
      this.errors.company_name = "";

      if (value && this.textValidator(value)) {
        this.errors.company_name = "نام شرکت شامل حروف غیرمجاز است";
      }
    }
  }, "currentUser.profile.company_register_code", function currentUserProfileCompany_register_code(value) {
    this.companyRegisterCodeValidator(value);
  })
});

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(489);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("7c9020c2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-14adfcd8\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile_basic.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-14adfcd8\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile_basic.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\na[data-v-14adfcd8] {\n  color: #1da1f2;\n}\n.main-wrapper[data-v-14adfcd8] {\n  background: #fff;\n  padding-top: 15px;\n  padding-bottom: 50px;\n}\n.info-box-wrapper[data-v-14adfcd8] {\n  background: #e8f4f8;\n  border-radius: 12px;\n  text-align: right;\n  color: #404b55;\n  padding: 5px 20px;\n  margin-bottom: 15px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  min-height: 41px;\n}\n.info-text-fix[data-v-14adfcd8] {\n  position: relative;\n  top: -2px;\n  line-height: 1.618;\n}\n.info-description[data-v-14adfcd8] {\n  margin: 5px auto 10px;\n}\n.info-box-wrapper i[data-v-14adfcd8] {\n  font-size: 23px;\n  position: relative;\n  top: 5px;\n  margin-left: 6px;\n}\n.description .text-input-wrapper[data-v-14adfcd8] {\n  margin: 9px auto;\n}\n.button[data-v-14adfcd8] {\n  background: #1da1f2;\n  color: #fff;\n  border-radius: 12px;\n  padding: 4px 25px;\n}\n.verification-button[data-v-14adfcd8] {\n  padding: 1px 25px 8px;\n}\n.verification-button i[data-v-14adfcd8] {\n  font-size: 20px;\n  top: 3px;\n  margin-left: 1px;\n}\n.certificate-cehck[data-v-14adfcd8]::after {\n  content: \"\\F00C\";\n  position: absolute;\n  left: 3px;\n  color: #1da1f2;\n  font-size: 13px;\n  top: 3px;\n}\n.valid-user[data-v-14adfcd8] {\n  position: absolute;\n  font-size: 30px;\n  color: #1da1f2;\n  left: calc(50% - 15px);\n  top: 104px;\n  z-index: 1;\n}\n.valid-user .certificate-cehck[data-v-14adfcd8]::after {\n  color: #fff;\n  left: 6px;\n  font-size: 19px;\n  top: 6px;\n}\n.bg-main[data-v-14adfcd8] {\n  background: #f7f7f7;\n}\n.action-link[data-v-14adfcd8] {\n  font-size: 18px;\n  border: none;\n  background: none;\n}\n.action-link i[data-v-14adfcd8] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.action-link i.rotate-down-icon[data-v-14adfcd8] {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.box-wrapper[data-v-14adfcd8] {\n  border-radius: 12px;\n  border: 1px solid #f7f7f7;\n  padding: 20px;\n  margin-bottom: 15px;\n  background: #fff;\n  overflow: hidden;\n  position: relative;\n}\n.padding-buttom-fixed[data-v-14adfcd8] {\n  padding-bottom: 1px;\n}\n.box-wrapper.user-info-box[data-v-14adfcd8] {\n  padding: 0;\n}\n.box-title[data-v-14adfcd8] {\n  font-size: 18px;\n  color: #313a43;\n}\n.box-title[data-v-14adfcd8]::after {\n  content: \" \";\n  width: 100px;\n  height: 4px;\n  background: #00c569;\n  display: block;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.header-wrapper[data-v-14adfcd8] {\n  position: relative;\n  margin: 33px auto 22px;\n}\n.header-wrapper > svg[data-v-14adfcd8] {\n  position: absolute;\n  left: 13px;\n  top: -3px;\n  z-index: 1;\n}\n.user-img-wrapper[data-v-14adfcd8] {\n  width: 120px;\n  height: 120px;\n  margin: 0 auto;\n  text-align: center;\n  position: relative;\n  border-radius: 120px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n}\n.upload-image[data-v-14adfcd8] {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  overflow: hidden;\n  border-radius: 120px;\n  top: 0px;\n  left: calc(50% - 60px);\n}\n.upload-image > input[data-v-14adfcd8] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: relative;\n  z-index: 3;\n}\n.upload-image > input[data-v-14adfcd8]:hover {\n  cursor: pointer;\n}\n.upload-image > span[data-v-14adfcd8] {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: 0;\n  font-size: 30px;\n  color: #fff;\n  -webkit-transition: 100ms;\n  transition: 100ms;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  background: rgba(0, 0, 0, 0.5);\n}\n.upload-image > span i[data-v-14adfcd8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.upload-image > input:hover + span[data-v-14adfcd8] {\n  font-size: 35px;\n  -webkit-transition: 100ms;\n  transition: 100ms;\n}\n.user-name[data-v-14adfcd8] {\n  text-align: center;\n  font-size: 23px;\n  font-weight: bold;\n  color: #313a43;\n  margin: 16px auto 31px;\n}\n.user-phone-number-wrapper[data-v-14adfcd8] {\n  margin-top: 15px;\n}\n.info-description-wrapper[data-v-14adfcd8] {\n  display: block;\n}\n.info-description .row > div[data-v-14adfcd8] {\n  margin: 6px auto;\n  color: #777;\n}\n.submit-form-button[data-v-14adfcd8] {\n  border: none;\n  color: #fff;\n  font-size: 21px;\n  padding: 12px;\n  max-width: 280px;\n  width: 100%;\n  border-radius: 12px;\n}\n.submit-form-button i[data-v-14adfcd8] {\n  position: relative;\n  top: 1px;\n}\n.images-content > article[data-v-14adfcd8] {\n  padding: 5px;\n}\n.images-content .image-item[data-v-14adfcd8] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  top: 0;\n  overflow: hidden;\n  border-radius: 3px;\n  position: relative;\n  height: 115px;\n  background-size: cover;\n  background-position: center;\n}\n.small-description[data-v-14adfcd8] {\n  font-size: 14px;\n  color: #bdc4cc;\n}\n.images-content i.fa-times[data-v-14adfcd8] {\n  position: absolute;\n  color: red;\n  background: none;\n  border: none;\n  z-index: 1;\n  right: 10px;\n  top: 10px;\n}\n.profile-badge[data-v-14adfcd8] {\n  background: #f7f7f7;\n  width: 27px;\n  height: 27px;\n  border-radius: 30px;\n  top: 15px;\n  left: 15px;\n  position: absolute;\n  color: #bdc4cc;\n  font-size: 11px;\n  text-align: center;\n  padding-top: 7px;\n}\n/********\n input design  \n*********/\n.error-input-wrapper[data-v-14adfcd8] {\n  height: 25px;\n  padding-top: 5px;\n}\n.text-input-wrapper[data-v-14adfcd8] {\n  margin: 0 auto;\n  position: relative;\n  background: #fbfbfb;\n}\n.title-contents[data-v-14adfcd8] {\n  font-size: 18px;\n  margin-bottom: 10px;\n  padding: 0;\n}\n.title-contents.active-number-title[data-v-14adfcd8] {\n  font-size: 15px;\n  margin-top: 3px;\n}\n.active-number-button[data-v-14adfcd8] {\n  font-size: 18px;\n  background: #00c569;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 30px 9px;\n}\n.deactive-number-button[data-v-14adfcd8] {\n  font-size: 18px;\n  background: #f7f7f7;\n  color: #556080;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 30px 9px;\n}\ninput[data-v-14adfcd8] {\n  background: none;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  padding: 8px 15px;\n  border: 1px solid #bdc4cc;\n  border-radius: 4px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.text-input-wrapper i[data-v-14adfcd8] {\n  position: absolute;\n  left: 15px;\n  top: 11px;\n  font-size: 18px;\n  color: #bdc4cc;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\ninput[data-v-14adfcd8]:focus,\ninput:focus + i[data-v-14adfcd8] {\n  color: #333;\n  border-color: #333;\n}\ninput.active[data-v-14adfcd8] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-14adfcd8] {\n  color: #00c569;\n}\ninput.active[data-v-14adfcd8]:focus,\ninput.active:focus + i[data-v-14adfcd8],\ninput.active + i[data-v-14adfcd8] {\n  border-color: #00c569;\n}\ninput.error[data-v-14adfcd8] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-14adfcd8] {\n  color: #e41c38;\n}\ninput.error[data-v-14adfcd8]:focus,\ninput.error:focus + i[data-v-14adfcd8] {\n  border-color: #e41c38;\n}\ntextarea[data-v-14adfcd8] {\n  background: none;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  padding: 8px 15px;\n  border: 1px solid #bdc4cc;\n  border-radius: 4px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  max-width: 100%;\n  min-height: 113px;\n  max-height: 300px;\n  min-width: 100%;\n}\ntextarea[data-v-14adfcd8]:focus,\ntextarea:focus + i[data-v-14adfcd8] {\n  color: #333;\n  border-color: #333;\n}\ntextarea.active[data-v-14adfcd8] {\n  border-color: #00c569;\n  color: #333;\n}\ntextarea.active + i[data-v-14adfcd8] {\n  color: #00c569;\n}\ntextarea.active[data-v-14adfcd8]:focus,\ntextarea.active:focus + i[data-v-14adfcd8],\ntextarea.active + i[data-v-14adfcd8] {\n  border-color: #00c569;\n}\ntextarea.error[data-v-14adfcd8] {\n  color: #333;\n  border-color: #e41c38;\n}\ntextarea.error + i[data-v-14adfcd8] {\n  color: #e41c38;\n}\ntextarea.error[data-v-14adfcd8]:focus,\ntextarea.error:focus + i[data-v-14adfcd8] {\n  border-color: #e41c38;\n}\n.modal-content[data-v-14adfcd8] {\n  overflow: hidden;\n  border-radius: 12px;\n}\n.close-modal[data-v-14adfcd8] {\n  font-size: 20px;\n\n  color: #777;\n\n  position: absolute;\n\n  right: 0;\n\n  padding: 8px 15px 2px;\n\n  top: 0;\n}\n.modal-title[data-v-14adfcd8] {\n  font-size: 16px;\n\n  font-weight: 800;\n\n  color: #474747;\n\n  text-align: center;\n}\n.modal-header[data-v-14adfcd8] {\n  padding: 9px 15px 10px;\n}\n.modal-body[data-v-14adfcd8] {\n  padding: 0;\n}\n.feature-wrapper[data-v-14adfcd8] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: left;\n  border-top: 1px solid #e0e0e0;\n  padding: 7px 15px;\n}\n@media screen and (max-width: 992px) {\n.address-wrapper[data-v-14adfcd8] {\n    margin-top: 15px;\n}\n.box-title[data-v-14adfcd8] {\n    font-size: 16px;\n    line-height: 1.618;\n}\n.submited-images[data-v-14adfcd8] {\n    margin-top: 30px;\n    padding: 0;\n}\n.info-box-wrapper[data-v-14adfcd8] {\n    line-height: 1.618;\n    padding: 5px;\n}\n}\n@media screen and (max-width: 767px) {\n.info-box-wrapper[data-v-14adfcd8] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.verification-button[data-v-14adfcd8] {\n    max-width: 180px;\n    margin: 6px auto;\n    padding: 5px 25px 7px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e20633be_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_completation_vue__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(491)
}
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e20633be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e20633be_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_completation_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e20633be_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_completation_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/seller/profile/profile-completation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e20633be", Component.options)
  } else {
    hotAPI.reload("data-v-e20633be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(492);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("789dd66e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e20633be\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile-completation.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e20633be\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile-completation.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.box-title[data-v-e20633be] {\n  font-size: 18px;\n  color: #313a43;\n}\n.progress-item-wrapper[data-v-e20633be] {\n  margin: 10px 0;\n}\n.progress-item-wrapper > span[data-v-e20633be] {\n  width: 85px;\n  height: 5px;\n  border-radius: 50px;\n  background: #cccccc;\n  margin-left: 5px;\n  display: inline-block;\n}\n.item[data-v-e20633be] {\n  border: 1px solid #999;\n  border-radius: 12px;\n  padding: 20px 10px;\n}\n.title-item[data-v-e20633be] {\n  font-size: 17px;\n  font-weight: 500;\n  color: #313a43;\n}\n.content-item[data-v-e20633be] {\n  color: #7e7e7e;\n  margin: 13px 0 10px;\n  line-height: 1.618;\n}\n.content-button[data-v-e20633be] {\n  margin-top: 15px;\n  border-radius: 12px;\n  min-width: 180px;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 5px;\n}\n.item-wrapper[data-v-e20633be] {\n  margin-top: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "complete-the-profile padding-buttom-fixed" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "progress-item-wrapper" },
        _vm._l(3, function(item, index) {
          return _c("span", { key: index })
        })
      ),
      _vm._v(" "),
      _c("p", { staticClass: "gray-text" }, [
        _vm._v(
          "\n    اطلاعات خود را تکمیل کنید تا ارتباط بهتری پیدا کنید با خریداران و\n    فروشندگان این یک متن تستی است که باید ویرایش شود.\n  "
        )
      ]),
      _vm._v(" "),
      _vm._m(1)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-title" }, [
      _vm._v("\n    میزان تکمیل پروفایل : "),
      _c("span", { staticClass: "red-text" }, [_vm._v("ضعیف")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 item-wrapper" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4 pull-right" }, [
          _c("article", { staticClass: "item" }, [
            _c("p", { staticClass: "title-item" }, [
              _c("i", { staticClass: "fa fa-comment-alt" }),
              _vm._v(" "),
              _c("span", [_vm._v(" درباره شما ")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "content-item" }, [
              _vm._v(
                "\n            نوشتن توضیحات کافی درمورد خودتان باعث شناخت بیشتر سایر کاربران از\n            شما می‌شود .\n          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center" }, [
              _c(
                "button",
                {
                  staticClass: "content-button green-button",
                  attrs: {
                    type: "button",
                    "data-toggle": "modal",
                    "data-target": "#description-modal"
                  }
                },
                [_vm._v("\n              درباره شما\n            ")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4 pull-right" }, [
          _c("article", { staticClass: "item" }, [
            _c("p", { staticClass: "title-item" }, [
              _c("i", { staticClass: "fa fa-phone-square brand-text" }),
              _vm._v(" "),
              _c("span", [_vm._v(" احراز هویت ")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "content-item" }, [
              _vm._v(
                "\n            با احراز هویت، اعتماد خریداران و فروشندگان را به خود جلب کنید.\n          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center" }, [
              _c("button", { staticClass: "content-button green-button" }, [
                _vm._v("\n              احراز هویت کنید\n            ")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4 pull-right" }, [
          _c("article", { staticClass: "item" }, [
            _c("p", { staticClass: "title-item" }, [
              _c("i", { staticClass: "fa fa-share-alt brand-text" }),
              _vm._v(" "),
              _c("span", [_vm._v("معرفی به دوستان ")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "content-item" }, [
              _vm._v(
                "\n            با معرفی باسکول به همکارانتان، اعتبار پروفایل خود را افزایش دهید.\n          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center" }, [
              _c("button", { staticClass: "content-button green-button" }, [
                _vm._v("\n              معرفی به دوستان\n            ")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e20633be", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-wrapper col-xs-12 text-rtl" }, [
    _c(
      "div",
      {
        staticClass: "description-modal modal fade",
        attrs: { id: "description-modal", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body col-xs-12" }, [
                _c("div", { staticClass: "box-title" }, [
                  _vm._v("درباره ی خودتان حد اقل ۳ خط بنویسید.")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "description" }, [
                  _c("div", { staticClass: "col-xs-12" }, [
                    _c("div", { staticClass: "text-input-wrapper" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currentUser.profile.description,
                            expression: "currentUser.profile.description"
                          }
                        ],
                        class: {
                          active: _vm.currentUser.profile.description,
                          error: _vm.errors.description
                        },
                        attrs: {
                          rows: "5",
                          placeholder:
                            "در مورد کیفیت و نوع بسته بندی محصول خود اینجا توضیح دهید"
                        },
                        domProps: {
                          value: _vm.currentUser.profile.description
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.currentUser.profile,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "feature-wrapper" }, [
                        _c(
                          "p",
                          {
                            staticClass: "description-length",
                            class: {
                              "red-text":
                                _vm.currentUser.profile.description.length <
                                200,
                              "green-text":
                                _vm.currentUser.profile.description.length >=
                                200
                            }
                          },
                          [
                            _c("span", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.currentUser.profile.description.length
                                )
                              }
                            }),
                            _vm._v(
                              "\n                    / 200\n                  "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.currentUser.profile.description &&
                      !_vm.errors.description
                        ? _c("i", { staticClass: "fa fa-check-circle" })
                        : _vm.errors.description
                        ? _c("i", { staticClass: "fa fa-times-circle" })
                        : _c("i", { staticClass: "fa fa-edit" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "error-input-wrapper" }, [
                      _c("p", { staticClass: "error-message" }, [
                        _vm.errors.description
                          ? _c("span", {
                              staticClass: "red-text",
                              domProps: {
                                textContent: _vm._s(_vm.errors.description)
                              }
                            })
                          : _vm._e()
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 col-md-8" }, [
        _c(
          "div",
          { staticClass: "info-box-wrapper bg-main" },
          [
            _vm.currentUser.user_info.is_verified
              ? _c(
                  "p",
                  { staticClass: "pull-right info-text-fix light-green-text" },
                  [
                    _c("i", { staticClass: "fas fa-check" }),
                    _vm._v(
                      "\n          اطلاعات هویتی شما احراز شده است.\n        "
                    )
                  ]
                )
              : _c("p", { staticClass: "pull-right info-text-fix red-text" }, [
                  _c("i", { staticClass: "fas fa-exclamation-circle" }),
                  _vm._v(
                    "\n          اطلاعات هویتی شما احراز نشده است.\n        "
                  )
                ]),
            _vm._v(" "),
            !_vm.currentUser.user_info.is_verified
              ? _c(
                  "router-link",
                  {
                    staticClass: "button verification-button",
                    attrs: { to: { name: "profileBasicSellerVeficiation" } }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-certificate certificate-cehck"
                    }),
                    _vm._v("\n          احراز هویت کنید\n        ")
                  ]
                )
              : _vm._e()
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12 col-md-4 pull-right" }, [
        _c("div", { staticClass: "box-wrapper user-info-box" }, [
          _c("span", { staticClass: "profile-badge" }, [_vm._v(" %11 ")]),
          _vm._v(" "),
          _c("div", { staticClass: "header-wrapper" }, [
            _c(
              "svg",
              {
                attrs: { width: "150", height: "150", viewBox: "0 0 120 120" }
              },
              [
                _c(
                  "linearGradient",
                  {
                    attrs: {
                      id: "linear",
                      x1: "0%",
                      y1: "0%",
                      x2: "100%",
                      y2: "0%"
                    }
                  },
                  [
                    _c("stop", {
                      attrs: { offset: "0%", "stop-color": "#a6ceff" }
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      attrs: { offset: "100%", "stop-color": "#2ed8a7" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("circle", {
                  attrs: {
                    "stroke-linecap": "round",
                    cx: "50",
                    cy: "50",
                    r: "48",
                    stroke: "url(#linear)",
                    "stroke-width": "5",
                    fill: "none",
                    "stroke-dasharray": "315",
                    "stroke-dashoffset": "315",
                    "stroke-mitterlimit": "0",
                    transform: "rotate(-90 ) translate(-100 0)"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.currentUser.profile.profile_photo
              ? _c("div", {
                  staticClass: "user-img-wrapper",
                  style: {
                    backgroundImage:
                      "url(" +
                      _vm.str +
                      "/" +
                      _vm.currentUser.profile.profile_photo +
                      ")"
                  }
                })
              : _c("div", {
                  staticClass: "user-img-wrapper",
                  style: {
                    backgroundImage:
                      "url(" + _vm.assets + "assets/img/user-defult.png)"
                  }
                }),
            _vm._v(" "),
            _c("div", { staticClass: "upload-image" }, [
              _c("input", {
                ref: "profilePhoto",
                attrs: { id: "imgInp", type: "file", accept: "image/*" }
              }),
              _vm._v(" "),
              _vm._m(2)
            ]),
            _vm._v(" "),
            _vm.currentUser.user_info.is_verified
              ? _c("div", { staticClass: "valid-user" }, [
                  _c("i", {
                    staticClass: "fa fa-certificate certificate-cehck"
                  })
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "user-name" }, [
            _c("p", { staticClass: "blue-aqua-text text-center" }, [
              _vm._v("\n            میزان تکمیل پروفایل\n            "),
              _vm.completeProfileProgress
                ? _c("span", [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.completeProfileProgress) +
                        "%\n            "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.currentUser.user_info.first_name
              ? _c("p", {
                  staticClass: "user-name",
                  domProps: {
                    textContent: _vm._s(
                      _vm.currentUser.user_info.first_name +
                        " " +
                        _vm.currentUser.user_info.last_name
                    )
                  }
                })
              : _c("p", { staticClass: "user-name" }, [
                  _c("span", {
                    staticClass:
                      "\n                placeholder-content\n                content-default-width\n                h-25\n                margin-auto\n              "
                  })
                ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 col-md-8" }, [
        _c("div", { staticClass: "box-wrapper padding-buttom-fixed" }, [
          _c("span", { staticClass: "profile-badge" }, [_vm._v(" %22 ")]),
          _vm._v(" "),
          _c("div", { staticClass: "box-title" }, [_vm._v("اطلاعات شما")]),
          _vm._v(" "),
          _c("div", { staticClass: "user-phone-number-wrapper row" }, [
            _c("div", { staticClass: "col-xs-12 pull-right col-md-7" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "text-input-wrapper" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.currentUser.profile.public_phone,
                      expression: "currentUser.profile.public_phone"
                    }
                  ],
                  class: {
                    active: _vm.currentUser.profile.public_phone,
                    error: _vm.errors.public_phone
                  },
                  attrs: {
                    type: "tel",
                    placeholder: "شماره موبایل را وارد کنید",
                    pattern: "[0-9]*"
                  },
                  domProps: { value: _vm.currentUser.profile.public_phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.currentUser.profile,
                        "public_phone",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.currentUser.profile.public_phone && !_vm.errors.public_phone
                  ? _c("i", { staticClass: "fa fa-check-circle" })
                  : _vm.errors.public_phone
                  ? _c("i", { staticClass: "fa fa-times-circle" })
                  : _c("i", { staticClass: "fa fa-edit" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "error-input-wrapper" }, [
                _c("p", { staticClass: "error-message" }, [
                  _vm.errors.public_phone
                    ? _c("span", {
                        staticClass: "red-text",
                        domProps: {
                          textContent: _vm._s(_vm.errors.public_phone)
                        }
                      })
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 active-number-wrapper col-md-5" },
              [
                _c("p", { staticClass: "title-contents active-number-title" }, [
                  _vm._v(
                    "\n              نمايش شماره به خریداران\n              "
                  ),
                  !_vm.currentUser.user_info.phone_allowed
                    ? _c("span", { staticClass: "red-text" }, [
                        _vm._v("\n                غیر فعال است\n              ")
                      ])
                    : _c("span", { staticClass: "green-text" }, [
                        _vm._v(" فعال است ")
                      ])
                ]),
                _vm._v(" "),
                !_vm.currentUser.user_info.phone_allowed
                  ? _c(
                      "button",
                      {
                        staticClass: "active-number-button hover-effect",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.switchPhoneActivation(true)
                          }
                        }
                      },
                      [_vm._v("\n              فعال کردن\n            ")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "deactive-number-button hover-effect",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.switchPhoneActivation(false)
                          }
                        }
                      },
                      [_vm._v("\n              غیرفعال\n            ")]
                    )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "address-wrapper row" }, [
            _c("div", { staticClass: "col-xs-12 pull-right col-md-7" }, [
              _c("p", { staticClass: "title-contents" }, [_vm._v("آدرس")]),
              _vm._v(" "),
              _c("div", { staticClass: "text-input-wrapper" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.currentUser.profile.address,
                      expression: "currentUser.profile.address"
                    }
                  ],
                  class: {
                    active: _vm.currentUser.profile.address,
                    error: _vm.errors.address
                  },
                  attrs: { type: "text", placeholder: "آدرس را وارد کنید" },
                  domProps: { value: _vm.currentUser.profile.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.currentUser.profile,
                        "address",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.currentUser.profile.address && !_vm.errors.address
                  ? _c("i", { staticClass: "fa fa-check-circle" })
                  : _vm.errors.address
                  ? _c("i", { staticClass: "fa fa-times-circle" })
                  : _c("i", { staticClass: "fa fa-edit" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "error-input-wrapper" }, [
                _c("p", { staticClass: "error-message" }, [
                  _vm.errors.address
                    ? _c("span", {
                        staticClass: "red-text",
                        domProps: { textContent: _vm._s(_vm.errors.address) }
                      })
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12 col-md-5" })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12 col-md-4 pull-right" }, [
        _c("div", { staticClass: "box-wrapper" }, [
          _c("span", { staticClass: "profile-badge" }, [_vm._v(" %34 ")]),
          _vm._v(" "),
          _c("div", { staticClass: "box-title" }, [
            _vm._v("افزودن اطلاعات حقوقی")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "margin-15-0" }, [
            _vm._v(
              "\n          با تکمیل اطلاعات حقوقی، اعتبار حساب خود را بیشتر کنید.\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "action-link blue-text",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#company-box",
                "aria-expanded": "false",
                "aria-controls": "company-box"
              }
            },
            [
              !_vm.currentUser.profile.is_company
                ? _c("span", [_vm._v("افزودن اطلاعات حقوقی")])
                : _c("span", [_vm._v("بستن")]),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-angle-down",
                class: {
                  "rotate-down-icon": _vm.currentUser.profile.is_company
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "form-wrapper collapse",
              attrs: { id: "company-box" }
            },
            [
              _c("div", { staticClass: "margin-top-15" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "text-input-wrapper" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.currentUser.profile.company_name,
                        expression: "currentUser.profile.company_name"
                      }
                    ],
                    class: {
                      active: _vm.currentUser.profile.company_name,
                      error: _vm.errors.company_name
                    },
                    attrs: {
                      type: "text",
                      placeholder: "نام شرکت را وارد کنید"
                    },
                    domProps: { value: _vm.currentUser.profile.company_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.currentUser.profile,
                          "company_name",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.currentUser.profile.company_name &&
                  !_vm.errors.company_name
                    ? _c("i", { staticClass: "fa fa-check-circle" })
                    : _vm.errors.company_name
                    ? _c("i", { staticClass: "fa fa-times-circle" })
                    : _c("i", { staticClass: "fa fa-edit" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "error-input-wrapper" }, [
                  _c("p", { staticClass: "error-message" }, [
                    _vm.errors.company_name
                      ? _c("span", {
                          staticClass: "red-text",
                          domProps: {
                            textContent: _vm._s(_vm.errors.company_name)
                          }
                        })
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", {}, [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "text-input-wrapper" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.currentUser.profile.company_register_code,
                        expression: "currentUser.profile.company_register_code"
                      }
                    ],
                    class: {
                      active: _vm.currentUser.profile.company_register_code,
                      error: _vm.errors.company_register_code
                    },
                    attrs: {
                      type: "tel",
                      placeholder: "شماره ثبت شرکت را وارد کنید",
                      pattern: "[0-9]*"
                    },
                    domProps: {
                      value: _vm.currentUser.profile.company_register_code
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.currentUser.profile,
                          "company_register_code",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.currentUser.profile.company_register_code &&
                  !_vm.errors.company_register_code
                    ? _c("i", { staticClass: "fa fa-check-circle" })
                    : _vm.errors.company_register_code
                    ? _c("i", { staticClass: "fa fa-times-circle" })
                    : _c("i", { staticClass: "fa fa-edit" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "error-input-wrapper" }, [
                  _c("p", { staticClass: "error-message" }, [
                    _vm.errors.company_register_code
                      ? _c("span", {
                          staticClass: "red-text",
                          domProps: {
                            textContent: _vm._s(
                              _vm.errors.company_register_code
                            )
                          }
                        })
                      : _vm._e()
                  ])
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12 col-md-8" }, [
        _c("div", { staticClass: "box-wrapper padding-buttom-fixed" }, [
          _c("span", { staticClass: "profile-badge" }, [_vm._v(" %11 ")]),
          _vm._v(" "),
          _c("div", { staticClass: "box-title" }, [
            _vm._v("درباره کسب و کارتان بنویسید")
          ]),
          _vm._v(" "),
          _vm._m(6),
          _vm._v(" "),
          _c("div", { staticClass: "description row" }, [
            _c("div", { staticClass: "col-xs-12" }, [
              _c("div", { staticClass: "text-input-wrapper" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.currentUser.profile.description,
                      expression: "currentUser.profile.description"
                    }
                  ],
                  class: {
                    active: _vm.currentUser.profile.description,
                    error: _vm.errors.description
                  },
                  attrs: {
                    rows: "5",
                    placeholder:
                      "در مورد کیفیت و نوع بسته بندی محصول خود اینجا توضیح دهید"
                  },
                  domProps: { value: _vm.currentUser.profile.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.currentUser.profile,
                        "description",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.currentUser.profile.description && !_vm.errors.description
                  ? _c("i", { staticClass: "fa fa-check-circle" })
                  : _vm.errors.description
                  ? _c("i", { staticClass: "fa fa-times-circle" })
                  : _c("i", { staticClass: "fa fa-edit" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "error-input-wrapper" }, [
                _c("p", { staticClass: "error-message" }, [
                  _vm.errors.description
                    ? _c("span", {
                        staticClass: "red-text",
                        domProps: {
                          textContent: _vm._s(_vm.errors.description)
                        }
                      })
                    : _vm._e()
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-12" }, [_c("ProfileCompletion")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12 text-center margin-15-auto" }, [
        _c(
          "button",
          {
            staticClass: "submit-form-button bg-blue hover-effect",
            attrs: { disabled: _vm.isLoaded },
            on: {
              click: function($event) {
                _vm.RegisterBasicProfileInfo()
              }
            }
          },
          [
            _c("i", { staticClass: "fa fa-check" }),
            _vm._v("\n        ثبت تغییرات\n      ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12" }, [
        _c("div", { staticClass: "box-wrapper margin-15-auto" }, [
          _c("span", { staticClass: "profile-badge" }, [_vm._v(" %11 ")]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-sm-6 pull-right" }, [
            _c(
              "div",
              { staticClass: "row" },
              [
                _vm._m(7),
                _vm._v(" "),
                _c("UploadFile", {
                  staticClass: "margin-15-auto",
                  attrs: {
                    uploadName: "relatedFiles",
                    uploadAccept: "image/*",
                    uploadMultiple: true,
                    isImageReset: _vm.relatedFilesReset,
                    uploadDrop: true,
                    uploadDropDirectory: true,
                    uploadAddIndex: false,
                    uploadThread: 3,
                    uploadOCompress: 1024 * 1024,
                    uploadUploadAuto: false,
                    imageWrapperSize: "col-xs-12 col-sm-6"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xs-12 submited-images col-sm-6 pull-left" },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "box-title" }, [
                  _vm._v("تصاویر ثبت شده")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row margin-15-auto" }, [
                  _vm.currentUser.relateds.length
                    ? _c(
                        "div",
                        { staticClass: "images-content col-xs-12" },
                        _vm._l(_vm.currentUser.relateds, function(
                          photo,
                          index
                        ) {
                          return _c(
                            "article",
                            {
                              key: index,
                              staticClass:
                                "col-md-4 col-xs-6 col-lg-3 pull-right"
                            },
                            [
                              _c("div", {
                                staticClass: "image-item",
                                style: {
                                  backgroundImage:
                                    "url(" + _vm.str + "/" + photo + ")"
                                }
                              })
                            ]
                          )
                        })
                      )
                    : _c("div", { staticClass: "default-images" }, [
                        _c("i", { staticClass: "fa fa-picture-o" }),
                        _vm._v(
                          "\n                هنوز تصویری ثبت نشده است\n              "
                        )
                      ])
                ])
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12" }, [
        _c("div", { staticClass: "box-wrapper margin-15-auto" }, [
          _c("span", { staticClass: "profile-badge" }, [_vm._v(" %11 ")]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-sm-6 pull-right" }, [
            _c(
              "div",
              { staticClass: "row" },
              [
                _vm._m(8),
                _vm._v(" "),
                _c("UploadFile", {
                  staticClass: "margin-15-auto",
                  attrs: {
                    uploadName: "certificateFiles",
                    isImageReset: _vm.certificateFilesReset,
                    uploadAccept: "image/*",
                    uploadMultiple: true,
                    uploadDrop: true,
                    uploadDropDirectory: true,
                    uploadAddIndex: false,
                    uploadThread: 3,
                    uploadOCompress: 1024 * 1024,
                    uploadUploadAuto: false,
                    imageWrapperSize: "col-xs-12 col-sm-6"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xs-12 submited-images col-sm-6 pull-left" },
            [
              _c("div", { staticClass: "box-title" }, [
                _vm._v("تصاویر ثبت شده")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row margin-15-auto" }, [
                _vm.currentUser.certificates.length
                  ? _c(
                      "div",
                      { staticClass: "images-content col-xs-12" },
                      _vm._l(_vm.currentUser.certificates, function(
                        photo,
                        index
                      ) {
                        return _c(
                          "article",
                          {
                            key: index,
                            staticClass: "col-md-4 col-xs-6 col-lg-3 pull-right"
                          },
                          [
                            _c("div", {
                              staticClass: "image-item",
                              style: {
                                backgroundImage:
                                  "url(" + _vm.str + "/" + photo + ")"
                              }
                            })
                          ]
                        )
                      })
                    )
                  : _c("div", { staticClass: "default-images" }, [
                      _c("i", { staticClass: "fa fa-picture-o" }),
                      _vm._v(
                        "\n              هنوز تصویری ثبت نشده است\n            "
                      )
                    ])
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12 text-center margin-15-auto" }, [
        _c(
          "button",
          {
            staticClass: "submit-form-button bg-blue hover-effect",
            attrs: { disabled: _vm.isLoaded },
            on: {
              click: function($event) {
                _vm.RegisterBasicProfileInfo()
              }
            }
          },
          [
            _c("i", { staticClass: "fa fa-check" }),
            _vm._v("\n        ثبت تصاویر\n      ")
          ]
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "modal-title" }, [
        _c("span", [_vm._v(" درباره شما ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 col-md-4 pull-right" }, [
      _c("div", { staticClass: "info-box-wrapper" }, [
        _c(
          "a",
          {
            staticClass: "info-text-fix",
            attrs: {
              target: "_blank",
              href: "https://www.buskool.com/profile/buskools"
            }
          },
          [
            _c("i", { staticClass: "fa fa-question-circle" }),
            _vm._v("\n          نمونه پروفایل تکمیل شده\n        ")
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fa fa-camera" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "title-contents" }, [
      _vm._v("\n              شماره موبایل\n              "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" * ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "title-contents" }, [
      _vm._v("\n              نام شرکت\n              "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" * ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "title-contents" }, [
      _vm._v("\n              شماره ثبت شرکت\n              "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" * ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "info-box-wrapper info-description-wrapper margin-15-0" },
      [
        _c("p", { staticClass: "pull-right info-text-fix col-xs-12" }, [
          _c("i", { staticClass: "fas fa-question-circle" }),
          _vm._v(
            "\n            در بخش (درباره کسب و کارتان بنویسید) به این سوالات پاسخ دهید.\n          "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info-description col-xs-12" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12 pull-right col-md-6" }, [
              _vm._v(
                "\n                1- در چه زمینه ای فعالیت می کنید؟\n              "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12 pull-right col-md-6" }, [
              _vm._v(
                "\n                2- بازار فعالیت شما داخلی است یا خارجی؟\n              "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12 pull-right col-md-6" }, [
              _vm._v(
                "\n                3- چند سال سابقه فعالیت دارید؟\n              "
              )
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
    return _c("div", { staticClass: "box-title" }, [
      _vm._v("\n              افزودن تصاویر مربوطه\n              "),
      _c("span", { staticClass: "small-description" }, [
        _vm._v("(محصولات | شرکت | کارکنان)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-title" }, [
      _vm._v("\n              افزودن گواهی های مربوطه\n              "),
      _c("span", { staticClass: "small-description" }, [
        _vm._v("(گواهی های ثبت شرکت | استاندارد محصول)")
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14adfcd8", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});