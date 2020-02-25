

<style scoped>
input {
  box-shadow: none !important;
}

label {
  margin: 0 auto 9px auto;
}

.section-wrapper{
margin: 30px auto;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 10px 30px 9px;
  transition: 200ms;
  cursor: default;
  margin: 8px 0;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}

.title-contents {
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 15px;
  text-align: right;
  font-weight: bold;
    font-size: 19px;
    margin-bottom: 15px;
    text-align: right;
    padding: 15px;
    border-bottom: 2px solid #fafafa;
}
  .title-section {
        direction: rtl;
        margin-bottom: 8px;
        padding: 0;
    }

    .title-section h3 {
        font-size: 16px;
        color: #00c569;
        float: right;
    }

    .title-section hr {
        margin: 15px 15px 10px auto;
        position: relative;
    }

    .title-section hr::after {

        content: ' ';
        height: 3px;
        width: 50px;
        background: #00c569;
        position: absolute;
        top: -4px;
        right: 0;

    }
.form-contents {
  margin: 5px auto;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper,
.text-input-wrapper {
  margin: 6px auto;

  position: relative;
}

.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 6px;

  font-family: "Font Awesome 5 Free",sans-serif;

  font-weight: 900;

  left: 15px;

  font-size: 20px;

  z-index: 0;
}

input {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  color: #bebebe;

  border-color: #bebebe;

  direction: rtl;

  transition: 300ms;

  background: #fff;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 300ms;
}

input:focus,
input:focus + i {
  color: #333;
  border-color: #333;
}

input.active {
  border-color: #00c569;
  color: #333;
}

input.active + i {
  color: #00c569;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #00c569;
}

input.error {
  color: #333;
  border-color: #e41c38;
}

input.error + i {
  color: #e41c38;
}

input.error:focus,
input.error:focus + i {
  border-color: #e41c38;
}

select {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  position: relative;

  z-index: 1;

  color: #777777;

  direction: rtl;

  transition: 200ms;

  background: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 200ms;
}

select option {
  color: #333;
}

select:focus {
  color: #333;
}

select.active {
  color: #333;
  color: #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  color: #e41c38;
}

select.error:focus {
  color: #e41c38;
}

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 15px;

  direction: rtl;

  font-size: 11px;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}

.submit-button-wrapper {
  text-align: center;
}

label .small-label {
  font-size: 12px;
}
@media screen and (max-width: 767px) {
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
  .form-contents{
      border-radius: 0;
  }
  .title-section{
      padding: 0 15px;
  }
  
}
</style>


<template>
     <section class="section-wrapper container">

                    
                    <div class="row">

                        <div  class="title-section col-xs-12">
                            
                                <h3 >

                                ثبت درخواست خرید

                                </h3> 
                                <hr />
                           
                        </div>

                    </div>

                    <div class="row">

                        <div class="wrapper-bg text-right col-xs-12 form-contents">

                            <div class="title-contents">
                                                            چی و چه مقدار؟

                            </div>

                            <div class="form-contents col-xs-12">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6  pull-right">
                                        <label for="stock">
                                            دسته بندی محصول
                                        </label>

                                        <div class="input-wrapper">

                                            <select
                                                :class="{'active' :  categorySelected , 'error' : errors.categorySelected}"
                                                id="category"
                                                v-on:change="loadSubCategoryList($event)"
                                            >
                                                <option selected disabled>انتخاب دسته بندی</option>
                                                <option
                                                    v-for="category in categoryList"
                                                    v-bind:value="category.id"
                                                    v-text="category.category_name"
                                                ></option>
                                            </select>

                                        </div>
                                        <p class="error-message col-xs-12">
                                            <span v-if="errors.categorySelected" v-text="errors.categorySelected"></span>
                                        </p>
                                    </div>

                                    <div class="col-xs-12 col-sm-6 ">
                                        <label for="min-sale-amount">
                                            نام محصول
                                        </label>

                                        <div class="input-wrapper">
                                            <select
                                                v-on:change="setCategoryId($event)"
                                                :class="{'active' :  buyAd.category_id , 'error' :errors.category_id}"
                                                id="sub-category"
                                            >
                                            <option disabled selected>انتخاب زیر دسته بندی</option>
                                            <option
                                                v-for="category in subCategoryList"
                                                v-bind:value="category.id"
                                                v-text="category.category_name"
                                            ></option>
                                            </select>
                                        </div>
                                        <p class="error-message">
                                            <span v-if="errors.category_id" v-text="errors.category_id"></span>
                                        </p>
                                    </div>

                                    <div class="col-xs-12 col-sm-6 pull-right">
                                        <label for="min-sale-price">
                                            نوع محصول


                                        </label>

                                        <div class="text-input-wrapper">
                                            <input
                                            v-model="buyAd.name"
                                            id="product-type"
                                            type="text"
                                            :class="{'active' :  buyAd.name , 'error':errors.name}"
                                            placeholder="مثلا : مضافتی "
                                            />
                                        </div>
                                        <p class="error-message">
                                            <span v-if="errors.name" v-text="errors.name"></span>
                                        </p>
                                    </div>

                                    <div class="col-xs-12 col-sm-6 ">
                                        <label for="max-sale-price">
                                            میزان نیاز مندی
                                            <span class="small-label">(به کیلوگرم)</span>
                                        </label>

                                        <div class="text-input-wrapper">
                                            <input
                                                v-model="buyAd.requirement_amount"
                                                id="max-sale-price"
                                                type="tel"
                                                :class="{'active' :  buyAd.requirement_amount , 'error': errors.requirement_amount}"
                                                placeholder="مثلا : 500000"
                                                pattern="[0-9]*"
                                            />
                                        </div>

                                        <p class="error-message">
                                            <span v-if="errors.requirement_amount" v-text="errors.requirement_amount"></span>
                                        </p>

                                    </div>
                                </div>


                                <div class="submit-button-wrapper col-xs-12">
                                    <div class="row">
                                    <button
                                        class="submit-button disabled"
                                        :class="{'active' : buyAd.category_id && buyAd.requirement_amount}"
                                        @click.prevent="formValidator"
                                    >
                                        ثبت درخواست
                                    </button>


                                    </div>
                                </div>
                        </div>

                    </div>

                </div>
    </section>
</template>


<script>

    export default {
       
        data: function () {
            return {
               
                errors: {
                    categorySelected: '',
                    category_id: '',
                    requirement_amount: '',
                    name: '',
                },
                currentUser: {
                    profile: '',
                    user_info: '',
                },
                buyAd: {
                    name: '',
                    requirement_amount: '',
                    price: '',
                    description: '',
                    address: '',
                    pack_type: '',
                    category_id: '',
                    rules: false,
                    categorySelected:'',
                },
                buyAdFields: [
                    'name',
                    'requirement_amount',
                    'category_id',
                ],
                categorySelected: '',
                categoryList: '',
                subCategoryList: '',
                cities: '',
                buyAdFiles: [],
                popUpMsg: '',
                profileConfirmed: false,
                disableSubmit: false,
                submiting: false,
                relatedProducts: null,
                items: [
                    {
                        message: ' ثبت درخواست جدید',
                        url: 'registerRequest'
                    }
                ]
            };
        },
        methods: {
            init: function () {
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));

                axios.post('/get_category_list')
                    .then(response => (this.categoryList = response.data.categories));
            },
            loadSubCategoryList: function (e) {
                e.preventDefault();
                var categoryId = $(e.target).val();
                this.categorySelected = categoryId;

                axios.post('/get_category_list', {
                    parent_id: categoryId,
                })
                    .then(response => (this.subCategoryList = response.data.categories));

            },
            formValidator: function () {
                if (!this.categorySelected) {
                    this.errors.categorySelected = "دسته بندی الزامی است"
                }
                if (!this.buyAd.category_id) {
                    this.errors.category_id = "نام محصول الزامی است"
                }

                this.nameValidator(this.buyAd.name);
            
                this.requirementAmountValidator(this.buyAd.requirement_amount);

                if (!this.errors.categorySelected && !this.errors.category_id && !this.errors.name && !this.errors.requirement_amount) {
                    this.submitBuyAd();
                }
            },
            submitBuyAd: function () {
                this.errors = '';
                var self = this;

                let formData = this.getBuyAdFormFields();

                this.buyAd.categorySelected = this.categorySelected;

                window.localStorage.setItem('buyAd',JSON.stringify(this.buyAd));

                window.location.href = '/buyer/register-request';

            },
            getBuyAdFormFields: function () {

                let formData = new FormData();
                let cnt = this.buyAdFields.length;

                for (var i = 0; i < cnt; i++) {
                    formData.append(this.buyAdFields[i], this.toLatinNumbers(this.buyAd[this.buyAdFields[i]]));
                }
                return formData;

            },
            setCategoryId: function (e) {
                e.preventDefault();

                this.buyAd.category_id = $(e.target).val();
            },
            setCityId: function (cityId) {
                this.buyAd.city_id = cityId;
            },
            toLatinNumbers: function (num) {
                if (num == null) {
                    return null;
                }

                num = num.toString().replace(/^0+/, '');
                num = num.toString().replace(/^\u0660+/, '');
                num = num.toString().replace(/^\u06f0+/, '');

                return num.toString()
                    .replace(/[\u0660-\u0669]/g, function (c) {
                        return c.charCodeAt(0) - 0x0660;
                    }).replace(/[\u06f0-\u06f9]/g, function (c) {
                        return c.charCodeAt(0) - 0x06f0;
                    });
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            registerComponentExceptions: function (description, fatal = false) {
                gtag('event', 'exception', {
                    'description': description,
                    'fatal': fatal
                });
            },
            isOsIOS: function () {
                var userAgent = window.navigator.userAgent.toLowerCase(),
                    safari = /safari/.test(userAgent),
                    ios = /iphone|ipod|ipad/.test(userAgent);

                return ios;
            },
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            nameValidator: function (name) {
                this.toLatinNumbers(name);
                if (!name) {

                    this.errors.name = '';

                } else if (!this.validateRegx(name, /^[\u0600-\u06FF\s\d]+$/)) {
                    this.errors.name = 'نوع محصول فرمت مناسبی نیست';
                }
            },
            requirementAmountValidator: function (number) {
                this.errors.requirement_amount = '';
                var standardNumber = this.toLatinNumbers(number);
                if (standardNumber == '') {
                    this.errors.requirement_amount = 'فیلد میزان نیاز الزامی است';
                } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
                    this.errors.requirement_amount = 'فقط عدد وارد کنید';
                }

            },
            validateRegx: function (input, regx) {
                return regx.test(input);
            },
        },
        mounted() {
            if (this.isOsIOS()) {
                $('input[type="tel"]').attr("type", "text");
            }

            this.init();

            // eventBus.$emit('subHeader', this.items);
        },
        watch: {
            "categorySelected": function() {
                this.errors.categorySelected = "";
            },
            "buyAd.category_id": function() {
                this.errors.category_id = "";
            },
            "buyAd.requirement_amount": function() {
                this.errors.requirement_amount = "";
            },
            "buyAd.name": function() {
                this.errors.name = "";
        },
  }
        
    }
</script>
