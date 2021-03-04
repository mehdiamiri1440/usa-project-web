<style scoped>
.report-button i {
  transition: 400ms;
  transform: rotate(0deg);
  line-height: 1;
  height: 13px;
  width: 13px;
  position: relative;
  top: 1px;
}

.report-button:hover i {
  transition: 400ms;
  transform: rotate(360deg);
}

.message-wrapper .message-contact-title {
  font-size: 16px;
  padding: 7px 15px 8px;
  float: right;
  width: 100%;
  color: #fff;
  background: linear-gradient(-90deg, #21ad93, #4dc0bb);
}

.message-contact-title a {
  color: #fafafa;
  transition: 300ms;
}

.message-contact-title a:hover {
  color: #fff;
  transition: 300ms;
}

.message-wrapper .message-contact-title-img {
  width: 35px;
  height: 35px;
  float: right;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  margin-left: 10px;
}

.message-wrapper .message-contact-title-img:hover {
  cursor: pointer;
}

.message-wrapper .message-contact-title img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: initial;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.message-wrapper .message-contact-title a {
  float: right;
  display: block;
  max-width: 300px;
  font-size: 15px;
  color: #fff;
}

.message-wrapper .message-contact-title span:first-of-type {
  max-width: 190px;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 25px;
  overflow: hidden;
  margin-top: 10px;
  float: right;
}

.message-wrapper .message-contact-title span.commetns-link {
  border-radius: 5px;
  padding: 4px 7px;
  margin-right: 12px;
  margin-top: 6px;
  background: #fff;
  color: #23ae94;
  font-size: 13px;
  float: right;
}

.message-wrapper .message-contact-title span.commetns-link i {
  position: relative;
  top: 2px;
  font-size: 12px;
}

.back-state {
  background: none;
  color: #fff;
  border: none;
  font-size: 22px;
  position: relative;
  top: 5px;
  padding: 0 6px;
  float: right;
}

.report-button {
  background: none;
  border: none;
  padding: 7px 0 0px;
  font-size: 13px;
  color: #fff;
}

.drop-image {
  transition: 150ms;
  display: none;
}
.drop-image .report-button {
  padding: 0;
}

.drop-active,
.drop-to-change-image {
  transition: 150ms;
  display: block;
  height: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 9999;
  text-align: center;
  background: #f0f0f0;
}

.drop-to-change-image {
  transition: 150ms;
  height: 0;
  z-index: 10000;
  opacity: 0.8;
  overflow: hidden;
}

.drop-to-change-active {
  transition: 150ms;
  height: 100%;
}

.main-wrapper {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 65px;
  bottom: 15px;
  border: 6px solid;
  border-style: dashed;
  color: #ababab;
  display: flex;
  align-items: center;
  transition: 100ms;
}

.main-wrapper.file-is-upload {
  border: none;
  bottom: 60px;
  overflow: hidden;
  border-radius: 5px;
}

.main-wrapper h3 {
  flex: 1;
}
/* 
.main-wrapper img {
  width: initial;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
} */

.render-image {
  display: block;
  margin: auto;
}
.render-container {
  width: 100%;
  position: relative;
}
.sizeScore {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: black;
  opacity: 0.5;
  color: aqua;
  padding: 0.5em;
  font-family: sans-serif;
  letter-spacing: 0.1em;
}

.send-message-form {
  overflow: hidden;
  padding: 10px 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f0f0f0;
}

.message-input {
  float: left;
  width: calc(100% - 50px);
}

.send-message-form .message-input input {
  border-radius: 50px;
  background: #fff;
  border: none;
  padding: 7px 50px 8px 15px;
  transition: 150ms;
}

.send-message-form .message-input input.padding-default {
  transition: 150ms;
  padding: 7px 15px 8px 15px;
}

.capture-image {
  position: absolute;
  font-size: 21px;
  background: none;
  border: none;
  color: #919191;
  padding: 7px 15px 7px 10px;
}

.capture-image label:hover {
  cursor: pointer !important;
  color: #333;
}

.button-wrapper {
  float: right;
  line-height: 1.1;
  position: relative;
}

.send-message-form .button-wrapper .item-wrapper {
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
  border-radius: 35px;
}

.send-message-form .button-wrapper .item-wrapper .send-message-button {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  height: 40px;
  position: absolute;
  right: calc(50% - 21px);
  padding: 7px 0 0;
}

.send-message-form .button-wrapper .voice-message-button {
  position: absolute;
  right: 0;
  left: 0;
  top: 0px;
  background: none;
  border: none;
  font-size: 19px;
  bottom: 0;
  padding: 4px 13px 0;
}
.button-wrapper .send-message-button svg {
  width: 19px;
  height: 19px;
}
</style>

<template>
  <div>
    <img
      id="thump-image"
      v-if="$parent.files[0]"
      v-show="false"
      @load="resizeImagePreview"
      class="empty"
      :src="$parent.files[0].thumb"
      alt=""
    />
    <div
      class="drop-to-change-image"
      :class="{
        'drop-to-change-active':
          $refs.upload && $refs.upload.dropActive && $parent.files.length,
      }"
    >
      <div class="main-wrapper">
        <h3>تصویر را اینجا بکشید و رها کنید</h3>
      </div>
    </div>
    <div
      class="drop-image"
      :class="{
        'drop-active':
          ($refs.upload && $refs.upload.dropActive) || $parent.files.length,
      }"
    >
      <div class="message-contact-title">
        <div class="contact-title-contents pull-right">
          <button @click.prevent="$parent.files.pop()" class="back-state">
            <i class="fa fa-arrow-right"></i>
          </button>
          <div
            @click.prevent="$parent.files.pop()"
            class="message-contact-title-img"
          >
            <img
              v-if="selectedContact.profile_photo"
              :src="str + '/' + selectedContact.profile_photo"
              :alt="selectedContact.first_name[0]"
            />

            <img v-else src="../../../../img/user-defult.png" />
          </div>

          <span>
            {{ selectedContact.first_name + " " + selectedContact.last_name }}
          </span>
        </div>
        <div class="head-action-buttons pull-left">
          <div class="head-action-buttons pull-left">
            <file-upload
              class="report-button"
              accept="mage/png,image/gif,image/jpeg,image/webp"
              :multiple="false"
              :directory="false"
              :size="1024 * 1024 * 10"
              :thread="3"
              :drop="true"
              :add-index="false"
              name="chat-upload"
              v-model="$parent.files"
              @input-filter="inputFilter"
              @input-file="inputFile"
              ref="upload"
            >
              <i class="fa fa-redo-alt"></i>
              تغییر تصوير
            </file-upload>
          </div>
        </div>
      </div>
      <div class="main-upload-image-wrapper">
        <div
          class="main-wrapper"
          :class="{ 'file-is-upload': $parent.files.length }"
        >
          <h3 v-show="!$parent.files.length">
            تصویر را اینجا بکشید و رها کنید
          </h3>
          <!-- <img v-else :src="$parent.files[0].thumb" width="40" height="auto" /> -->
          <div v-show="$parent.files.length" class="render-container">
            <div class="sizeScore">
              <span class="js-width">0px</span> X
              <span class="js-height">0px</span>
            </div>
            <img
              v-if="$parent.files[0]"
              class="render-image js-render-image"
              :src="$parent.files[0].thumb"
            />
          </div>
        </div>
      </div>
      <div class="send-message-form" v-show="$parent.files.length">
        <form @v-on:submit.prevent="$parent.sendMessage()">
          <div class="message-input">
            <input
              class="padding-default"
              type="text"
              placeholder="توضیحات تصویر"
              v-model="$parent.message"
            />
          </div>

          <div class="button-wrapper">
            <div class="item-wrapper">
              <button
                type="submit"
                class="send-message-button scale-up-center-full"
                @click.prevent="$parent.sendMessage()"
              >
                <!-- @click.prevent="$parent.sendMessage()" -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.347"
                  height="12.766"
                  viewBox="0 0 13.347 12.766"
                >
                  <path
                    id="send-message-icon"
                    data-name="send-message-icon"
                    d="M2511.158-3909.893l12.347-5.929-12.347-5.837.235,4.51,10.029,1.327-10.029,1.477Z"
                    transform="translate(-2510.658 3922.159)"
                    fill="#fff"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script >
import FileUpload from "vue-upload-component";

export default {
  props: ["selectedContact", "str"],
  components: {
    FileUpload,
  },
  methods: {
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
    calIamgeSize(imageSelector, imageOriginWidth, imageOriginHeight) {
      // make image as big as it can to start
      $(imageSelector).width($(imageSelector).parent().width());

      // Get the one percent of the image width and height
      var widthOnePercent = imageOriginWidth / 100;
      var heightOnePercent = imageOriginHeight / 100;

      // Calculate the width percentage
      var imageCurrentWidth = $(imageSelector).width();
      var imageCurrentPercent = imageCurrentWidth / widthOnePercent;

      // Calculate the height relative to the percentage of the images width
      var imageNewHeight = heightOnePercent * imageCurrentPercent;

      // If the images height is off the page, then rescale
      if ($(window).height() < $(imageSelector).offset().top + imageNewHeight) {
        // Set the new height so it fit on the screen
        imageNewHeight = $(window).height() - $(imageSelector).offset().top;

        // Calculate out what percentage is the height at
        imageCurrentPercent = imageNewHeight / heightOnePercent;

        // Calculate the width relative to the percentage of the images height
        var imageNewWidth = widthOnePercent * imageCurrentPercent;

        // Set new width of image
        $(imageSelector).width(imageNewWidth);
      }

      // set new height of image
      $(imageSelector).height(imageNewHeight);
    },
    sizes() {
      $(".js-width").text(Math.ceil($(".js-render-image").width()) + "px");
      $(".js-height").text(Math.ceil($(".js-render-image").height()) + "px");
    },
    resizeImagePreview() {
      let imageSize = this.getImagenaturalSize();

      var imageW = imageSize.width;
      var imageH = imageSize.height;
      var imageClass = ".js-render-image";
      console.log(imageW, imageH, $(imageClass));

      $(window).on("resize", () => {
        this.calIamgeSize(imageClass, imageW, imageH);
        this.sizes();
      });
      this.calIamgeSize(imageClass, imageW, imageH);
      this.sizes();
    },
    getImagenaturalSize() {
      let element = document.getElementById("thump-image");
      let elementWidth = 0;
      let elementHeight = 0;
      elementWidth = element.naturalWidth;
      elementHeight = element.naturalHeight;
      return {
        width: elementWidth,
        height: elementHeight,
      };
    },
  },
  watch: {
    "$parent.files"() {
      //   setTimeout(() => {
      // this.resizeImagePreview();
      //   }, 20);
    },
  },
};
</script>