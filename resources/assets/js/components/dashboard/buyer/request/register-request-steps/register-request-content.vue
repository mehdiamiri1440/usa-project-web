
<style scoped>
input {
  box-shadow: none !important;
}

label {
  margin: 0 auto 9px auto;
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
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">چی و چه مقدار؟</h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <div class="col-xs-6 pull-right">
          <label for="stock">
            دسته بندی محصول
          </label>

          <div class="input-wrapper">

              <select
                @click="$parent.buyAd.categorySelected = ''"
                :class="{'active' :  $parent.categorySelected , 'error' : $parent.errors.categorySelected}"
                id="category"
                v-on:change="loadSubCategoryList($event)"
              >
                <option  v-if="!$parent.buyAd.categorySelected" selected disabled>انتخاب دسته بندی</option>
                <option
                  v-for="(category,index) in $parent.categoryList"
                  :key="index"
                  :selected="$parent.buyAd.categorySelected == category.id ? 'selected' : ''"
                  :value="category.id"
                  v-text="category.category_name"
                ></option>
              </select>

          </div>
          <p class="error-message col-xs-12">
            <span v-if="$parent.errors.categorySelected" v-text="$parent.errors.categorySelected"></span>
          </p>
        </div>

        <div class="col-xs-6">
          <label for="min-sale-amount">
            نام محصول
          </label>

          <div class="input-wrapper">
            <select
              v-on:change="$parent.setCategoryId($event)"
              :class="{'active' :  $parent.buyAd.category_id , 'error' : $parent.errors.category_id}"
              id="sub-category"
            >
              <option v-if="!$parent.buyAd.category_id" disabled selected>لطفا انتخاب کنید</option>
              <option
                :selected="$parent.buyAd.category_id == category.id"
                v-for="category in $parent.subCategoryList"
                v-bind:value="category.id"
                v-text="category.category_name"
              ></option>
            </select>
          </div>
          <p class="error-message">
            <span v-if="$parent.errors.category_id" v-text="$parent.errors.category_id"></span>
          </p>
        </div>

        <div class="col-xs-6 pull-right">
          <label for="min-sale-price">
            نوع محصول


          </label>

          <div class="text-input-wrapper">
            <input
              v-model="$parent.buyAd.name"
              id="product-type"
              type="text"
              :class="{'active' :  $parent.buyAd.name , 'error':$parent.errors.name}"
              placeholder="مثلا : مضافتی "
            />
          </div>
          <p class="error-message">
            <span v-if="$parent.errors.name" v-text="$parent.errors.name"></span>
          </p>
        </div>

        <div class="col-xs-6">
          <label for="max-sale-price">
            میزان نیاز مندی
            <span class="small-label">(به کیلوگرم)</span>
          </label>

          <div class="text-input-wrapper">
            <input
              v-model="$parent.buyAd.requirement_amount"
              id="max-sale-price"
              type="tel"
              :class="{'active' :  $parent.buyAd.requirement_amount , 'error': $parent.errors.requirement_amount}"
              placeholder="مثلا : 500000"
              pattern="[0-9]*"
            />
          </div>

          <p class="error-message">
            <span v-if="$parent.errors.requirement_amount" v-text="$parent.errors.requirement_amount"></span>
          </p>

        </div>
      </div>

      <!-- <span class="small-description">

 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه باسکول کمک می کند
 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه باسکول کمک می کند

      </span>-->

      <div class="submit-button-wrapper col-xs-12">
        <div class="row">
          <button
            class="submit-button disabled"
            :class="{'active' : $parent.buyAd.category_id && $parent.buyAd.requirement_amount}"
            @click.prevent="$parent.formValidator"
          >
            ثبت درخواست
          </button>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
    let buyAd = JSON.parse(window.localStorage.getItem('buyAd'));

    if(buyAd){
        console.log(buyAd);
        this.$parent.buyAd = buyAd;
        
        let categoryId = buyAd.categorySelected;

        axios.post('/get_category_list', {
            parent_id: categoryId,
        })
        .then(response => (this.$parent.subCategoryList = response.data.categories));
    }
  },
  methods:{
      loadSubCategoryList:function(e){
          this.$parent.buyAd.categorySelected = '';
          this.$parent.buyAd.category_id = '';
          this.$parent.loadSubCategoryList(e);
      },
      showCategory:function(categoryId){
          return this.$parent.buyAd.categorySelected == categoryId;
      }
  },
  watch: {
    "$parent.categorySelected": function() {
      this.$parent.errors.categorySelected = "";
    },
    "$parent.buyAd.category_id": function() {
      this.$parent.errors.category_id = "";
    },
    "$parent.buyAd.requirement_amount": function() {
      this.$parent.errors.requirement_amount = "";
    },
    "$parent.buyAd.name": function() {
      this.$parent.errors.name = "";
    },
  }
};
</script>
