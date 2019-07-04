<template>

    <div class="image-upload-wrapper">
        <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
            <h3>Drop files to upload</h3>
        </div>
        <div class="upload" v-show="!isOption">

            <!--  <button  v-show="files.length" type="button" class="btn btn-success" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
                  <i class="fa fa-arrow-up" aria-hidden="true"></i>
                  Start Upload
              </button>-->
            <!--     :post-action="postAction"
                 :put-action="putAction"
                 :extensions="extensions"
                  :data="data"
                     :headers="headers"
                  -->
            <file-upload
                    class="col-xs-12"
                    :accept="accept"
                    :name="name"
                    :multiple="multiple"
                    :directory="directory"
                    :size="size || 0"
                    :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
                    :drop="drop"
                    :drop-directory="dropDirectory"
                    :add-index="addIndex"
                    v-model="files"
                    @input-filter="inputFilter"
                    @input-file="inputFile"
                    ref="upload">

            </file-upload>
            <div class="col-xs-12">
                <div class="row wrapper-articles">
                    <article v-for="(file, index) in files" :key="file.id"
                             class="col-lg-4 col-sm-6 col-xs-12 article-images">
                        <div class="image">
                            <img v-if="file.thumb" :src="file.thumb" width="40" height="auto"/>
                            <span v-else>No Image</span>
                            <div class="actions-content">
                                <a href="#"
                                   @click.prevent="file.active || file.success || file.error === 'compressing' ? false :  onEditFileShow(file)"><i
                                        aria-hidden="true" class="fa fa-pencil"></i></a>
                                <a class="delete" href="#" @click.prevent="$refs.upload.remove(file)"><i
                                        aria-hidden="true" class="fa fa-trash "></i></a>
                            </div>
                        </div>

                    </article>
                </div>
            </div>

        </div>
        <div :class="{'modal-backdrop': true, 'fade': true, show: editFile.show}"></div>
        <div :class="{modal: true, fade: true, show: editFile.show}" id="modal-edit-file" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <form @submit.prevent="onEditorFile">
                        <div class="modal-body">
                            <button type="button" class="close" @click.prevent="editFile.show = false">
                                <span>&times;</span>
                            </button>
                            <div class="form-group"
                                 v-if="editFile.show && editFile.blob && editFile.type && editFile.type.substr(0, 6) === 'image/'">
                                <div class="edit-image">
                                    <img :src="editFile.blob" ref="editImage"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="modal-footer ">
                              <div class="col-xs-12 col-sm-6 pull-right">
                                  <button type="submit" class="btn btn-crop">برش تصویر</button>
                              </div>
                                <div class="col-xs-12 col-sm-6 ">
                                <button type="button" class="btn btn-cancel" @click.prevent="editFile.show = false">
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
<style scoped>
    .btn-crop{
        display: inline-block;
        background: #28a745;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        -webkit-transition: 300ms;
        transition: 300ms;
    }
    .btn-cancel{
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

    .edit-image {
        margin-top: -2px;
    }

    .image-upload-wrapper, .article-images {
        position: relative;
    }

    .article-images {
        padding: 10px;
    }

    .article-images:hover .image {
        top: -5px;
    }

    .article-images:hover .actions-content {
        opacity: 1;
    }

    .actions-content {
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        display: block;
        right: 0;
        bottom: 0;
        opacity: 0;
        background: rgba(49, 58, 67, 0.7);
        transition: 300ms;
        padding-top: 28px;
    }

    .actions-content a {
        color: #fff;
        display: block;
        margin: 15px auto;
        border: 1px solid;
        padding: 15px;
        border-radius: 50px;
        height: 50px;
        width: 50px;
        font-size: 22px;
        transition: 300ms;

    }

    .actions-content a:hover {
        transition: 300ms;
        background: rgb(40, 167, 69);
    }

    .actions-content .delete:hover {
        background: #fff;
        color: rgb(49, 58, 67);
    }

    .image {
        transition: 300ms;
        top: 0;
        overflow: hidden;
        box-shadow: 0 0 15px #aeaeae;
        border-radius: 4px;
        position: relative;
        height: 200px;

    }

    .image img {
        min-height: 200px;
        min-width: 250px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    .wrapper-articles {
        padding: 30px 0 5px;
    }

    .image-upload-wrapper .btn-group .dropdown-menu {
        display: block;
        visibility: hidden;
        transition: all .2s
    }

    .image-upload-wrapper .btn-group:hover > .dropdown-menu {
        visibility: visible;
    }

    .image-upload-wrapper label.dropdown-item {
        margin-bottom: 0;
    }

    .image-upload-wrapper .btn-group .dropdown-toggle {
        margin-right: .6rem
    }

    .image-upload-wrapper .filename {
        margin-bottom: .3rem
    }

    .image-upload-wrapper .btn-is-option {
        margin-top: 0.25rem;
    }

    .image-upload-wrapper .edit-image img {
        max-width: 100%;
    }

    .image-upload-wrapper .edit-image-tool {
        margin-top: .6rem;
    }

    .image-upload-wrapper .edit-image-tool .btn-group {
        margin-right: .6rem;
    }

    .image-upload-wrapper .footer-status {
        padding-top: .4rem;
    }

    .image-upload-wrapper .drop-active {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
        z-index: 9999;
        opacity: .6;
        text-align: center;
        background: #000;
    }

    .image-upload-wrapper .drop-active h3 {
        margin: -.5em 0 0;
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
        transition: opacity .15s linear;
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
        opacity: .5;
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
        transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        transition: transform .3s ease-out, -webkit-transform .3s ease-out;
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
        border-radius: .3rem;
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
        background: #28a745;
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
        border-radius: .25rem;
        -webkit-transition: all .15s ease-in-out;
        transition: all .15s ease-in-out;
    }

    .progress {
        display: -ms-flexbox;
        display: flex;
        overflow: hidden;
        font-size: .75rem;
        line-height: 1rem;
        text-align: center;
        background-color: #e9ecef;
        border-radius: .25rem;
    }

    .bg-danger {
        background-color: #dc3545 !important;
    }
    .file-uploads{
        padding: 0;
    }
    @media only screen and (max-width: 992px) {
        .actions-content {
            opacity: 1;
            background: none;
        }
        .actions-content a {
            background: rgba(49, 58, 67, 0.7);
        }
        .modal.show .modal-dialog{
            margin: 40px 20px;
        }

        .btn-cancel,.btn-crop{
            width: 100%;
            margin: 8px 0 !important;
        }
    }
</style>

<script>
    import Cropper from 'cropperjs'
    import ImageCompressor from '@xkeshi/image-compressor'
    import FileUpload from 'vue-upload-component'
    export default {
        props: [
            'uploadName',
            'uploadAccept',
            'uploadMinSize',
            'uploadSize',
            'uploadMultiple',
            'uploadDropDirectory',
            'uploadAddIndex',
            'uploadThread',
            'uploadUploadAuto',
            'uploadRef',
            'size'
        ],
        components: {
            FileUpload,
        },
        data() {
            return {
                files: [],
                accept: this.uploadAccept,
                minSize: this.uploadMinSize,
                // size:this.uploadSize,
                multiple: this.uploadMultiple,
                directory: false,
                drop: true,
                dropDirectory: this.uploadDropDirectory,
                addIndex: this.uploadAddIndex,
                thread: this.uploadThread,
                name: this.uploadName,
                // postAction: '/upload/post',
                // putAction: '/upload/put',
                oCompress: this.uploadOCompress,
                uploadAuto: this.uploadUploadAuto,

                isOption: false,
                addData: {
                    show: false,
                    name: '',
                    type: '',
                    content: '',
                },
                editFile: {
                    show: false,
                    name: '',
                },
                autoCompress: 512 * 512,
            }
        },
        watch: {
            'editFile.show'(newValue, oldValue) {

                // 关闭了 自动删除 error
                if (!newValue && oldValue) {
                    this.$refs.upload.update(this.editFile.id, {error: this.editFile.error || ''})


                }
                if (newValue) {
                    this.$nextTick(function () {
                        if (!this.$refs.editImage) {
                            return
                        }
                        let cropper = new Cropper(this.$refs.editImage, {
                            autoCrop: true,
                            aspectRatio: 1 / 1,
                            responsive: true,
                            center:true,
                            guides: false,
                            movable: false,
                            rotatable: false,
                            scalable: false,
                            zoomable: false,
                            zoomOnTouch: false,
                            zoomOnWheel: false,
                            wheelZoomRatio: false,
                            toggleDragModeOnDblclick: false,
                            minCropBoxWidth:400,
                            minCropBoxHeight:400,

                        })
                        this.editFile = {
                            ...this.editFile,
                            cropper
                        }
                    })
                }
            },
            'addData.show'(show) {
                if (show) {
                    this.addData.name = ''
                    this.addData.type = ''
                    this.addData.content = ''
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
                        return prevent()
                    }
                    // Filter php html js file
                    // 过滤 php html js 文件
                    if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
                        return prevent()
                    }
                    // Automatic compression
                    // 自动压缩
                    if (newFile.file && newFile.type.substr(0, 6) === 'image/' && this.autoCompress > 0 && this.autoCompress < newFile.size) {
                        newFile.error = 'compressing'
                        const imageCompressor = new ImageCompressor(null, {
                            convertSize: 1000000,
                            maxWidth: 512,
                            maxHeight: 512,
                        })
                        imageCompressor.compress(newFile.file)
                            .then((file) => {
                                this.$refs.upload.update(newFile, {error: '', file, size: file.size, type: file.type})
                            })
                            .catch((err) => {
                                this.$refs.upload.update(newFile, {error: err.message || 'compress'})
                            })
                    }

                }
                if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
                    // Create a blob field
                    // 创建 blob 字段
                    newFile.blob = ''
                    let URL = window.URL || window.webkitURL
                    if (URL && URL.createObjectURL) {
                        newFile.blob = URL.createObjectURL(newFile.file)
                    }
                    // Thumbnails
                    // 缩略图
                    newFile.thumb = ''
                    if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
                        newFile.thumb = newFile.blob
                    }
                    this.uploadRef.push(newFile.file);
                }
            },
            // add, update, remove File Event
            inputFile(newFile, oldFile) {
                if (newFile && oldFile) {

                    // update
                    if (newFile.active && !oldFile.active) {
                        this.uploadRef.push(this.$refs.upload.files[this.uploadRef.length].file);

                        // beforeSend
                        // min size
                        if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
                            this.$refs.upload.update(newFile, {error: 'size'})
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

                    for (var i = 0; i < this.uploadRef.length; i++) {
                        if (this.uploadRef[i] === oldFile.file) {
                            this.uploadRef.splice(i, 1);
                        }
                    }


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
                        this.$refs.upload.active = true
                    }

                }
            },
            onEditFileShow(file) {
                this.editFile = {...file, show: true}
                this.$refs.upload.update(file, {error: 'edit'})

            },
            onEditorFile() {
                if (!this.$refs.upload.features.html5) {
                    this.alert('Your browser does not support')
                    this.editFile.show = false
                    return
                }
                let data = {
                    name: this.editFile.name,
                }
                if (this.editFile.cropper) {

                    let binStr = atob(this.editFile.cropper.getCroppedCanvas().toDataURL(this.editFile.type).split(',')[1])
                    let arr = new Uint8Array(binStr.length);
                    for (let i = 0; i < binStr.length; i++) {
                        arr[i] = binStr.charCodeAt(i)
                    }
                    data.file = new File([arr], data.name, {type: this.editFile.type})
                    data.size = data.file.size
                }
                this.uploadRef.pop();
                this.$refs.upload.update(this.editFile.id, data)
                this.editFile.error = ''
                this.editFile.show = false

            },
            // add folader
            onAddFolader() {
                if (!this.$refs.upload.features.directory) {
                    this.alert('Your browser does not support')
                    return
                }
                let input = this.$refs.upload.$el.querySelector('input')
                input.directory = true
                input.webkitdirectory = true
                this.directory = true
                input.onclick = null
                input.click()
                input.onclick = (e) => {
                    this.directory = false
                    input.directory = false
                    input.webkitdirectory = false
                }
            },
            onAddData() {
                this.addData.show = false;
                if (!this.$refs.upload.features.html5) {
                    this.alert('Your browser does not support')
                    return
                }
                let file = new window.File([this.addData.content], this.addData.name, {
                    type: this.addData.type,
                })
            }
        }
    }
</script>
