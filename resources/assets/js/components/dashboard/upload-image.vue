<style scoped>
.btn-crop {
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  -webkit-transition: 300ms;
  transition: 300ms;
}
.btn-cancel {
  display: inline-block;
  background: #e8312d;
  color: #fff;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  -webkit-transition: 300ms;
  transition: 300ms;
}
#modal-edit-file {
  overflow: scroll;
}

.form-group {
  margin: 0;
  overflow: hidden;
}

.image-upload-wrapper,
.article-images {
  position: relative;
}

.actions-content {
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  display: block;
  right: 0;
  opacity: 0;
  background: rgba(49, 58, 67, 0.85);
  transition: 300ms;
}

.image {
  transition: 300ms;
  top: 0;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  height: 115px;
}

.image img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  min-height: 100%;
  min-width: 100%;
}

.image-upload-wrapper .btn-group .dropdown-menu {
  display: block;
  visibility: hidden;
  transition: all 0.2s;
}

.image-upload-wrapper .btn-group:hover > .dropdown-menu {
  visibility: visible;
}

.image-upload-wrapper label.dropdown-item {
  margin-bottom: 0;
}

.image-upload-wrapper .btn-group .dropdown-toggle {
  margin-right: 0.6rem;
}

.image-upload-wrapper .filename {
  margin-bottom: 0.3rem;
}

.image-upload-wrapper .btn-is-option {
  margin-top: 0.25rem;
}

.image-upload-wrapper .edit-image img {
  max-width: 100%;
}

.image-upload-wrapper .edit-image-tool {
  margin-top: 0.6rem;
}

.image-upload-wrapper .edit-image-tool .btn-group {
  margin-right: 0.6rem;
}

.image-upload-wrapper .footer-status {
  padding-top: 0.4rem;
}

.image-upload-wrapper .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 9999;
  opacity: 0;
  text-align: center;
  background: #000;
}

.image-upload-wrapper .drop-active h3 {
  margin: -0.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}

.fade {
  opacity: 0;
  transition: opacity 0.15s linear;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}

.modal-backdrop.fade {
  visibility: hidden;
}

.modal-backdrop.fade.show {
  visibility: visible;
}

.fade.show {
  display: block;
  z-index: 1072;
}

.fade.show {
  opacity: 1;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0;
}

.modal.fade .modal-dialog {
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  -webkit-transform: translate(0, -25%);
  transform: translate(0, -25%);
}

.modal-lg {
  max-width: 800px;
}

.modal.show .modal-dialog {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}

.modal-content {
  background: transparent;

  box-shadow: none;

  border: none;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  /*background-color: #fff;*/
  /*background-clip: padding-box;*/
  /*border: 1px solid rgba(0,0,0,.2);*/
  border-radius: 0.3rem;
  outline: 0;
}

.modal-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e9ecef;
}

button.close {
  position: absolute;
  top: -25px;
  right: -12px;
  background: #dc3545;
  opacity: 1;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
  padding-top: 4px;
  border: 0;
  z-index: 1;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0 15px;
}

.modal-footer {
  display: block;
  border-top: none;
  background: #fff;
  margin-top: -2px;
  text-align: center;
  padding: 15px;
}

.btn-primary {
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  -webkit-transition: 300ms;
  transition: 300ms;
}

.btn {
  display: inline-block;

  font-weight: 400;

  text-align: center;

  white-space: nowrap;

  vertical-align: middle;

  -webkit-user-select: none;

  -moz-user-select: none;

  -ms-user-select: none;

  user-select: none;

  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  padding: 1.2rem 3.75rem;
  font-size: 1.6rem;
  line-height: 1.25;
  border-radius: 0.25rem;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}

.progress {
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.bg-danger {
  background-color: #dc3545 !important;
}

@media only screen and (max-width: 991px) {
  .actions-content {
    opacity: 1;
    background: none;
  }

  .modal.show .modal-dialog {
    margin: 40px 20px;
  }

  .btn-cancel,
  .btn-crop {
    width: 100%;
    margin: 8px 0 !important;
  }
  .image {
    height: 150px;
  }
}

@media only screen and (max-width: 767px) {
  .imageuploadify .imageuploadify-images-list {
    padding: 78px 0;
  }

  .image {
    height: 200px;
  }
}

@media only screen and (max-width: 512px) {
  .imageuploadify .imageuploadify-images-list {
    padding: 53px 0;
  }

  .image {
    height: 150px;
  }
}
</style>





<template>
  <div class="image-upload-wrapper">
    <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
      <h2>تصویر را اینجا رها کنید</h2>
    </div>

    <div class="col-xs-12">
      <div class="row wrapper-articles">
        <article
          v-if="files.length > 0"
          v-for="(file, index) in files"
          :key="file.id"
          class="pull-right article-images"
          :class="[
            imageWrapperSize ? imageWrapperSize : 'col-md-4 col-xs-6 col-lg-3',
          ]"
        >
          <div class="image">
            <img v-if="file.thumb" :src="file.thumb" width="40" height="auto" />
            <span v-else>No Image</span>
            <div class="actions-content">
              <a
                class="delete"
                href="#"
                @click.prevent="$refs.upload.remove(file)"
                ><i aria-hidden="true" class="fa fa-trash"></i
              ></a>
            </div>
          </div>
        </article>
        <file-upload
          v-show="!isOption"
          class="upload pull-right"
          :class="[
            imageWrapperSize ? imageWrapperSize : 'col-md-4 col-xs-6 col-lg-3',
            imageAccessUploadCount && files.length >= imageAccessUploadCount
              ? 'hidden'
              : '',
          ]"
          :accept="accept"
          :multiple="uploadMultiple"
          :maximum="maximum"
          :directory="directory"
          :size="size || 0"
          :thread="thread < 1 ? 1 : thread > 5 ? 5 : thread"
          :drop="drop"
          :drop-directory="dropDirectory"
          :add-index="addIndex"
          :name="uploadName"
          v-model="files"
          @input-filter="inputFilter"
          @input-file="inputFile"
          ref="upload"
        >
        </file-upload>
      </div>
    </div>

    <div
      :class="{ 'modal-backdrop': true, fade: true, show: editFile.show }"
    ></div>
    <div
      :class="{ modal: true, fade: true, show: editFile.show }"
      id="modal-edit-file"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <form @submit.prevent="onEditorFile">
            <div class="modal-body">
              <button
                type="button"
                class="close"
                @click.prevent="editFile.show = false"
              >
                <span>&times;</span>
              </button>
              <div
                class="form-group"
                v-if="
                  editFile.show &&
                  editFile.blob &&
                  editFile.type &&
                  editFile.type.substr(0, 6) === 'image/'
                "
              >
                <div class="edit-image">
                  <img :src="editFile.blob" ref="editImage" />
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="modal-footer">
                <div class="col-xs-12 col-sm-6 pull-right">
                  <button type="submit" class="btn btn-crop">برش تصویر</button>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <button
                    type="button"
                    class="btn btn-cancel"
                    @click.prevent="editFile.show = false"
                  >
                    انصراف
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadImage from "blueimp-load-image";

// import Cropper from 'cropperjs'
import ImageCompressor from "@xkeshi/image-compressor";
import FileUpload from "vue-upload-component";
export default {
  props: [
    "uploadName",
    "uploadAccept",
    "uploadMinSize",
    "uploadSize",
    "uploadMultiple",
    "uploadDropDirectory",
    "uploadAddIndex",
    "uploadThread",
    "uploadUploadAuto",
    "imageWrapperSize",
    "isCompressor",
    "isImageReset",
    "imageAccessUploadCount",
    "maximum",
  ],
  components: {
    FileUpload,
  },
  data() {
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
        content: "",
      },
      editFile: {
        show: false,
        name: "",
      },
      fileSizeBeforeCrop: null,
      autoCompress: 512 * 512,
    };
  },
  watch: {
    files(value) {
      this.$parent[this.uploadName] = value;
    },
    isImageReset(value) {
      if (value) {
        let variable = this.uploadName + "Reset";
        this.files = [];
        this.$parent[variable] = false;
      }
    },
    "editFile.show"(newValue, oldValue) {
      // 关闭了 自动删除 error
      if (!newValue && oldValue) {
        this.$refs.upload.update(this.editFile.id, {
          error: this.editFile.error || "",
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
    "addData.show"(show) {
      if (show) {
        this.addData.name = "";
        this.addData.type = "";
        this.addData.content = "";
      }
    },
  },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
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
        if (
          newFile.file &&
          newFile.type.substr(0, 6) === "image/" &&
          this.autoCompress > 0 &&
          this.autoCompress < newFile.size
        ) {
          newFile.error = "compressing";
          this.$parent.isCompressor = true;

          let Options = {
            checkOrientation: true,
            quality: 0.6,
            convertSize: 1000000,
            minWidth: 512,
            minHeight: 512,
          };

          var finalOrientation = 1;

          const imageCompressor = new ImageCompressor(null, Options);
          const self = this;

          imageCompressor
            .compress(newFile.file, Options)
            .then((file) => {
              self.getOrientation(newFile.file, function (orientation) {
                // console.log(orientation);
                if (orientation == 6) {
                  finalOrientation = 8;
                } else if (orientation != 1) {
                  finalOrientation = 1;
                }
                loadImage(file, {
                  orientation: finalOrientation,
                  meta: true,
                  canvas: true,
                  maxWidth: 800,
                })
                  .then(function (data) {
                    if (!data.imageHead)
                      throw new Error("Could not parse image metadata");
                    return new Promise(function (resolve) {
                      data.image.toBlob(function (blob) {
                        data.blob = blob;
                        resolve(data);
                      }, "image/jpeg");
                    });
                  })
                  .then(function (data) {
                    return loadImage.replaceHead(data.blob, data.imageHead);
                  })
                  .then(function (blob) {
                    self.$refs.upload.update(newFile, {
                      error: "",
                      file: blob,
                      size: blob.size,
                      type: blob.type,
                    });
                    if (self.$parent.isCompressor) {
                      self.$parent.isCompressor = false;
                    }
                  })
                  .catch(function (err) {
                    console.error(err);
                  });
              });
            })
            .catch((err) => {
              this.$refs.upload.update(newFile, {
                error: err.message || "compress",
              });
              if (this.$parent.isCompressor) {
                this.$parent.isCompressor = false;
              }
              console.log(err);
            });
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = "";
        let URL = window.URL || window.webkitURL;
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
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          // min size
          if (
            newFile.size >= 0 &&
            this.minSize > 0 &&
            newFile.size < this.minSize
          ) {
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
      if (
        Boolean(newFile) !== Boolean(oldFile) ||
        oldFile.error !== newFile.error
      ) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true;
        }
      }
    },
    onEditFileShow(file) {
      this.editFile = { ...file, show: true };
      this.$refs.upload.update(file, { error: "edit" });
    },
    onEditorFile() {
      if (!this.$refs.upload.features.html5) {
        this.alert("Your browser does not support");
        this.editFile.show = false;
        return;
      }
      let data = {
        name: this.editFile.name,
      };

      if (this.editFile.cropper) {
        let binStr = atob(
          this.editFile.cropper
            .getCroppedCanvas()
            .toDataURL(this.editFile.type)
            .split(",")[1]
        );
        let arr = new Uint8Array(binStr.length);
        for (let i = 0; i < binStr.length; i++) {
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
    onAddFolader() {
      if (!this.$refs.upload.features.directory) {
        this.alert("Your browser does not support");
        return;
      }
      let input = this.$refs.upload.$el.querySelector("input");
      input.directory = true;
      input.webkitdirectory = true;
      this.directory = true;
      input.onclick = null;
      input.click();
      input.onclick = (e) => {
        this.directory = false;
        input.directory = false;
        input.webkitdirectory = false;
      };
    },
    onAddData() {
      this.addData.show = false;
      if (!this.$refs.upload.features.html5) {
        this.alert("Your browser does not support");
        return;
      }
      let file = new window.File([this.addData.content], this.addData.name, {
        type: this.addData.type,
      });
    },
    getOrientation(file, callback) {
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
            if (view.getUint32((offset += 2), false) != 0x45786966) {
              return callback(-1);
            }
            var little = view.getUint16((offset += 6), false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;

            for (var i = 0; i < tags; i++)
              if (view.getUint16(offset + i * 12, little) == 0x0112)
                return callback(view.getUint16(offset + i * 12 + 8, little));
          } else if ((marker & 0xff00) != 0xff00) break;
          else offset += view.getUint16(offset, false);
        }
        return callback(-1);
      };

      reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    },
  },
};
</script>

