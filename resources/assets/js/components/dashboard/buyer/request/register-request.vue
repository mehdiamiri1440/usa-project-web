<style scoped>
    .col-sm-6 {
        height: 120px;
        float: right;
    }
    #main {
        margin-right: 250px;
        margin-top: 65px;
        background: #eff3f6;
    }

    #main.little-main {
        margin-right: 80px;
    }
    .image_company {
        margin: 15px auto;

    }

    .sub-des {
        font-size: 11px;
    }

    .company_des > div {
        margin-bottom: 10px;
    }

    .rules-check {
        font-weight: 800;
    }

    .rules-check {
        font-weight: 800;
    }

    .main-content {
        padding: 60px 15px;
        direction: rtl;
    }

    .header-lable {
        display: block;
        margin: 13px;
        padding: 0;
    }
    .content-lable{
        font-weight:400 ;
    }

    .roules-check-inside {
        color: #28a745;
    }

    /*end main content style */
    /*custom cods*/
    .green-bot {
        margin: 15px 0;
        display: inline-block;
        background: #28a745;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }

    .width-full {
        width: 100%;
    }

    .green-bot:hover {
        color: #fff;
        background: #29A045;
        transition: 300ms;

    }

    .botton-inco {
        margin: 15px 7px;
        display: inline-block;
        color: #313a43;
        padding: 8px 35px;
        border-radius: 3px;
        text-align: center;
    }

    .botton-inco:hover {
        color: #fff;
    }

    .font-big {
        font-size: 23px;
        position: relative;
        top: 3px;
    }

    .little_header {
        width: 80px;
    }

    .little-main-header {
        right: 80px;
    }

    .background_mob_sec {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: -1;
        display: none;
    }

    .radio-wrapper {
        margin: 10px;
    }

    .rules {
        margin: 7px 0;
        padding-bottom: 10px;
    }

    .rules > div, .kind_activity > div {
        float: right;
        overflow: hidden;
        padding: 10px;
        font-size: 15px;
    }

    .rules input {
        cursor: pointer;
        width: 23px;
        height: 23px;
        float: right;
        position: absolute;
        top: -5px;
        right: 217px;
        opacity: 0;
    }

    .rules input:checked + i {
        background: #28a745;
        color: #fff;
        padding: 4px;
        border: none;
    }

    .rules i {
        background: none;
        width: 23px;
        height: 23px;
        display: block;
        position: absolute;
        top: -5px;
        right: 217px;
        z-index: -1;
        color: #808c9c;
        border-radius: 50%;
        padding: 3px 2px;
        font-size: 14px;
        border: 2px solid;
    }

    @media screen and (max-width: 992px) {
        .right-header.desktop-header {
            display: none;
        }

        .right-header.mobile-header {
            display: block;
            right: -300px;
        }

        .main-header, .little-main-header {
            right: 0 !important;
        }

        #main, #main.little-main {
            margin-right: 0 !important;
        }

        .post-contents-table {
            width: 100%;
        }

        .copy-right {
            display: none;
        }

        .clouse_menu {
            display: none;
        }

        .clouse_menu_mob {
            display: block;
        }

        .show-header button {
            display: block;
        }

        .kind_user > div, .kind_activity > div {
            float: none;

        }

        .img-profile .submit {
            position: relative;
            width: 100%;
            margin: 25px auto;

        }

        .img-profile .submit label {
            width: 40%;
            padding: 12px 0;
        }

        .img-profile {
            float: none;
        }
    }

    @media screen and (max-width: 768px) {
        .image-content-post, .contents-post {
            width: 100%;
            float: none;
            margin: 10px 0;
            padding: 0;
        }

        .name-header-profile {
            display: none;
        }

        .profile-menu-header {
            padding: 7px;
            padding-left: 36px;
        }
    }

    @media screen and (max-width: 555px) {
        .content-header {
            display: none;
        }

    }

    @media screen and (max-width: 345px) {
        .sub-header a {
            font-size: 10px;

        }

        .sub-header {

            bottom: -44px;

        }
    }
</style>

<template>
    <section class="main-content col-xs-12">
        <div class="company_des">
            <div clss="col-xs-12 min_cols">
                <div class="col-sm-6">
                    <label>
                        <span class="text-danger">*</span> دسته ی محصول
                    </label>
                    <select class="profile_select" v-on:change="loadSubCategoryList($event)">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="category in categoryList"
                                v-bind:value="category.id"
                        >{{category.category_name}}</option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <label>
                        <span class="text-danger">*</span> نام محصول
                    </label>
                    <select class="profile_select" v-on:change="setCategoryId($event)">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="category in SubCategoryList"
                                v-bind:value="category.id"
                        >{{category.category_name}}</option>
                    </select>
                    <span v-if="errors.category_id" class="text-danger">فیلد دسته ی محصول الزامی است</span>
                </div>
                <div class="col-sm-6">
                    <label>
                        نوع محصول <span class="sub-des">(مثال:کله قوچی)</span> </label>
                    <input type="text" placeholder="نوع محصول" v-model="buyAd.name">
                    <span v-if="errors.name" class="text-danger" >{{ errors.name[0] }}</span>
                </div>
                <div class="col-sm-6">
                    <label>
                        <span class="text-danger">*</span> نوع بسته بندی
                    </label>
                    <input type="text" placeholder="نوع بسته بندی" v-model="buyAd.pack_type">
                    <span v-if="errors.pack_type" class="text-danger" >{{ errors.pack_type[0] }}</span>
                </div>
                <div class="col-sm-6">
                    <label>
                        <span class="text-danger">*</span> میزان نیازمندی <span class="sub-des">(کیلوگرم)</span> </label>
                    <input type="text" placeholder="میزان نیازمندی" v-model="buyAd.requirement_amount">
                    <span v-if="errors.requirement_amount" class="text-danger" >{{ errors.requirement_amount[0] }}</span>
                </div>
                <div class="col-sm-6">
                    <label>
                        قیمت <span class="sub-des">(هر کیلو به تومان)</span> </label>
                    <input type="text" placeholder="قیمت" v-model="buyAd.price">
                    <span v-if="errors.price" class="text-danger" >{{ errors.price[0] }}</span>
                </div>
                <div class="col-sm-6">
                    <label>
                        محل تحویل </label>
                    <input type="text" placeholder="محل تحویل" v-model="buyAd.address">
                    <span v-if="errors.address" class="text-danger" >{{ errors.address[0] }}</span>
                </div>

            </div>
            <div class="col-xs-12">
                <label>
                    <span class="text-danger">*</span> توضیحات
                </label>
                <textarea placeholder="تمام جزییات مورد نظر خود را مطرح کنید..." v-model="buyAd.description"></textarea>
                <span v-if="errors.description" class="text-danger" >{{ errors.description[0] }}</span>
            </div>

        </div>
        <div class="image_company col-xs-12">
            <label>
                تصاویر نمونه محصول، بسته بندی و ...
            </label>
            <input type="file" multiple  ref="buyAdFiles" v-on:change="handleBuyAdFilesUpload()" accept="image/*">
        </div>
        <div class="rules col-xs-12">
            با    <span class="roules-check-inside">قوانین و شرایط</span>
            ثبت آگهی موافقم<input type="checkbox" v-model="buyAd.rules">
            <i class="fa fa-check"></i>
        </div>
        <div class="col-xs-12">
            <input class="green-bot width-full" value="ثبت درخواست" type="button"   @click="submitBuyAd" :disabled="disableSubmit == true">
        </div>
    </section>
</template>
<script>
    import {eventBus} from "../../../../router/dashboard_router";
  export default {
      data:function(){
          return {
              errors:'',
              currentUser:{
                  profile:'',
                  user_info: '',
              },
              buyAd : {
                  name:'',
                  requirement_amount:'',
                  price:'',
                  pack_type:'',
                  description:'',
                  address:'',
                  pack_type:'',
                  category_id:'',
                  rules:false,
              },
              buyAdFields:[
                  'name',
                  'stock',
                  'requirement_amount',
                  'price',
                  'pack_type',
                  'description',
                  'address',
                  'pack_type',
                  'category_id',
              ],
              categoryList:'',
              SubCategoryList:'',
              categorySelected:'',
              cities:'',
              buyAdFiles:[],
              popUpMsg:'',
              profileConfirmed:false,
              disableSubmit:false,
              submiting:false,
              items: [
                  {
                      message: ' ثبت درخواست جدید',
                      url: 'registerRequest'
                  }
              ]
          };
      },
      methods:{
          init:function(){
              axios.post('/user/profile_info')
                  .then(response => (this.currentUser = response.data));
              axios.post('/get_category_list')
                  .then(response => (this.categoryList = response.data.categories));
          },
          loadSubCategoryList:function(e){
              e.preventDefault();
              var categoryId = $(e.target).val();

              axios.post('/get_category_list',{
                  parent_id : categoryId,
              }).then(response => (this.SubCategoryList = response.data.categories));
          },
          submitBuyAd:function(){
              this.errors = '';
              var self = this;

              if(this.buyAd.rules != true){
                  this.popUpMsg = 'ابتدا تیک با قوانین موافق هستم را بزنید.';
                  eventBus.$emit('submitSuccess',self.popUpMsg);
                  $('#myModal').modal('show');
              }
              else{
                  this.submiting = true;
                  
                  var self = this;
                  
                  let formData = this.getBuyAdFormFields();
                  
                  axios.post('/user/add_buyAd',formData)
                      .then(function(response){
                          if(response.status == 201){
                              self.disableSubmit = true;
                              
                              self.popUpMsg = 'درخواست شما با موفقیت ثبت شد';
                              $('#myModal').modal('show');
                              eventBus.$emit('submitSuccess', self.popUpMsg);
                              eventBus.$emit('submitingEvent', false);
                              
                              setTimeout(function () {
                                    location.reload(true);
                                }, 3000);
                          }
                          self.submiting = false;
                      })
                      .catch(function(err){
                          self.errors = err.response.data.errors;
                          self.submiting  = false;
                      });
              }

          },
          getBuyAdFormFields:function(){
              let formData = new FormData();
              let cnt = this.buyAdFields.length;

              for(var i = 0 ; i < cnt ; i++){
                  formData.append(this.buyAdFields[i],this.toLatinNumbers(this.buyAd[this.buyAdFields[i]]));
              }

              for(var i = 0; i < this.buyAdFiles.length; i++ ){
                  let file = this.buyAdFiles[i];
                  formData.append('image_' + i , file);
              }
              formData.append('images_count',this.buyAdFiles.length);

              return formData;
          },
          setCategoryId:function(e){
              e.preventDefault();

              this.buyAd.category_id = $(e.target).val();
          },
          setCityId:function(cityId){
              console.log(cityId);
              this.buyAd.city_id = cityId;
          },
          handleBuyAdFilesUpload:function(){
              let uploadedFiles = this.$refs.buyAdFiles.files ;
              /*
                Adds the uploaded file to the files array
              */
              for( var i = 0; i < uploadedFiles.length; i++ ){
                  this.buyAdFiles.push( uploadedFiles[i] );
              }
          },
          toLatinNumbers:function(num){
              if(num == null){
                  return '';
              }
              var numDic = {
                  '۰': '0',
                  '۱': '1',
                  '۲': '2',
                  '۳': '3',
                  '۴': '4',
                  '۵': '5',
                  '۶': '6',
                  '۷': '7',
                  '۸': '8',
                  '۹': '9',
              };

              return num
                  .toString()
                  .replace(/[۰-۹]/g,function(w){
                      return numDic[w];
                  });
          }
      },
      mounted(){
          $('input[type="file"]').imageuploadify();
          this.init();
          eventBus.$emit('subHeader', this.items);
      },
  }
</script>
