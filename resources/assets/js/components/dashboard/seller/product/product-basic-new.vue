<style scoped>

.register-product {
  direction: rtl;
  width: 40%;
  margin: auto;
  margin-top: 12.5rem;
  max-width: 700px;
  display: grid;
}
.register-product-content {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  padding: 10% 18%;
}
.register-product h2.register-product-title {
  text-align: right;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
.register-product h2.register-product-title::after {
  margin-top: 6px;
  content: "";
  width: 30%;
  max-width: 80px;
  height: 3px;
  background-color: #00c569;
  display: block;
}
.progressbar {
  display: flex;
  counter-reset: step;
  margin: 0 -90px 28px -90px;
}
.progressbar li {
  list-style-type: none;
  float: right;
  width: 33.33%;
  position: relative;
  text-align: center;
}
.progressbar li.completed:before {
  background-color: #00c569;
  color: #ffffff;
}
.progressbar li.completed:after {
  border-color: #00c569;
}

.progressbar li:before {
  background-color: white;
  content: counter(step);
  counter-increment: step;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #979797;
  display: block;
  text-align: center;
  margin: 4px auto 0 auto;
  border-radius: 50%;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2.5px;
  background-color: #979797;
  top: 15px;
  right: -50%;
  z-index: -5000;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.is-active {
  color: #00c569;
}
.progressbar li:first-child:before {
  border-color: #00c569;
}
.progressbar li.active {
  color: #00c569;
}

.progressbar li.active:before {
  border-color: #00c569;
}

.progressbar li.active:after {
  background-color: #00c569;
}
.success-register {
  background: linear-gradient(
    270deg,
    rgba(1, 173, 101, 0.5) 0%,
    rgba(122, 245, 188, 0.5) 100%
  );
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px 15px 15px;
  color: rgb(38, 70, 83);
  text-align: center;
  overflow: hidden;
  position: relative;
}

.success-register::after,
.success-register::before {
  content: " ";
  position: absolute;
  width: 85px;
  height: 85px;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 50px;
}

.success-register::after {
  left: -36px;
  top: -13px;
}
.success-register::before {
  left: 10px;
  top: -49px;
}

.success-register h2 {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.title-success {
  float: left;
  width: calc(100% - 36px);
}
.icon-wrapper {
  float: right;
  padding-top: 3px;
}

.success-register p {
  font-size: 12px;
  font-weight: 300;
  color: rgba(38, 70, 83, 0.8);
  line-height: 1.6;
}
@media (max-width: 768px) {
  .register-product {
    width: 85%;
    margin-top: 8rem;
  }
  .register-product-content {
    padding: 0 10%;
    border: 0;
  }
  .register-product .step-progress__step span {
    font-size: 13px;
  }
  .register-product .step-progress__step:after {
    width: 18px;
    height: 18px;
    padding: 10px;
  }
  .register-product h2.register-product-title {
    display: none;
  }
}
@media (max-width: 600px) {
  .register-product {
    width: 90%;
    margin-top: 4rem;
  }
  .register-product-content {
    padding: 0;
  }
  .register-product .step-progress__step span {
    font-size: 10px;
  }
  .register-product .step-progress__step:after {
    width: 16px;
    height: 16px;
    padding: 8px;
  }
  .register-product .step-progress__step--valid span {
    color: #ffffff;
    opacity: 1;
    font-size: 6px !important;
    margin-top: 0.3rem;
  }
  

}
</style>
<template>
  <div>
    <SuccessRegisterProduct :buyAds="buyAds" :getConvertedNumbers="getConvertedNumbers" v-if="$route.name == 'successRegisterProduct'" />
    <div
      class="register-product"
      v-if="$route.name != 'successRegisterProduct'"
    >
      <h2 class="register-product-title">ثبت محصول</h2>
      <div class="register-product-content">
        <div>
          <ul class="progressbar">
            <li
              :class="[
                { 'is-active': currentStep >= 0 },
                { completed: currentStep > 0 },
              ]"
            ></li>
            <li
              :class="[
                { active: currentStep >= 1 },
                { completed: currentStep > 1 },
              ]"
            ></li>
            <li :class="[{ active: currentStep == 2 }]"></li>
          </ul>
        </div>
        <div></div>
        <div id="step_content" class="step-content">
          <Category
            v-show="currentStep == 0"
            :super-categories="superCategories"
          />
          <ProductForm v-show="currentStep == 1" />
          <UploadImage v-show="currentStep == 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductForm from "./registerProductSteps/productForm.vue";
import Category from "./registerProductSteps/category.vue";
import UploadImage from "./registerProductSteps/uploadImage.vue";
import imageuploadify from "../../../../imageuploadify.min";
import SuccessRegisterProduct from "./registerProductSteps/successRegisterProduct.vue";
import { eventBus } from "../../../../router/router";

export default {
  components: {
    ProductForm,
    Category,
    UploadImage,
    SuccessRegisterProduct,
  },
  data() {
    return {
      currentStep: 0,
      superCategories: [],
      superCategoryIndex: "",
      categories: [],
      categoryIndex: "",
      subCategories: [],
      subCategoryIndex: "",

      product: {
        product_name: "",
        stock: "",
        min_sale_price: "",
        max_sale_price: "",
        min_sale_amount: "",
        description: "",
        category_id: "",
        city_id: "1",
      },
      productFields: [
        "product_name",
        "stock",
        "min_sale_price",
        "max_sale_price",
        "min_sale_amount",
        "description",
        "category_id",
        "city_id",
      ],
      buyAds: [],
      uploadPercentage: 0,
      load: true,
      successRegisterProduct: false,
      productFiles: [],
      resetAllImages: false,
      successBox: true,
      popUpMsg: "",
      disableSubmit: false,
      items: [
        {
          message: " ثبت محصول",
          url: "registerProduct",
        },
      ],
      currentUser: {
        profile: "",
        user_info: "",
      },
    };
  },
  methods: {
     init() {
      if (
        this.$route.name == "successRegisterProduct" &&
        this.successRegisterProduct == false
      ) {
        axios.post("/get_related_buyAds_to_my_product").then((response) => {
          if (response.data.status) {
            this.buyAds = response.data.buyAds;
            this.load = false;
          } else {
            this.load = false;
          }
        });
      }
     },
    toLatinNumbers(num) {
      if (num == null) {
        return null;
      }
      num = num.toString().replace(/,/g, "");
      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function (c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    getConvertedNumbers: function (number) {
      if (number || typeof number === "number") {
        let data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    },
    setCategory(category) {
      this.product.category_id = category.id;
      this.currentStep++;
    },
    previousStep() {
      this.currentStep--;
      if (this.currentStep == 0) {
        this.subCategories = this.categories[this.categoryIndex].subcategories;
      }
    },
    getUserInfo() {
      axios
        .post("/user/profile_info")
        .then((response) => (this.currentUser = response.data));
    },
    getcategories() {
      axios
        .post("/get_category_list", { cascade_list: true })
        .then((response) => (this.superCategories = response.data.categories));
    },
    getProductRegisterSuccessMessage() {
      let msg = "";

      if (this.currentUser.user_info.active_pakage_type == 0) {
        msg =
          "محصول شما با موفقیت ثبت شد و پس از تایید کارشناسان در لیست محصولات نمایش داده میشود.";
      } else {
        msg = "محصول شما با موفقیت ثبت شد.";
      }

      return msg;
    },
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },

    getProductFormFields() {
      let formData = new FormData();
      let cnt = this.productFields.length;

      for (let i = 0; i < cnt; i++) {
        formData.append(
          this.productFields[i],
          this.toLatinNumbers(this.product[this.productFields[i]])
        );
      }
      for (let i = 0; i < this.productFiles.length; i++) {
        let file = this.productFiles[i];
        formData.append("image_" + i, file.file);
      }
      formData.append("images_count", this.productFiles.length);

      return formData;
    },
    resetComponent() {
      this.product = {
        product_name: "",
        stock: "",
        min_sale_price: "",
        max_sale_price: "",
        min_sale_amount: "",
        description: "",
        category_id: "",
        city_id: "",
      };
      this.currentStep= 0;
      
    },
    submitProduct() {
      let formData = this.getProductFormFields();
      eventBus.$emit("submiting", true);
      axios
        .post("/user/add_product", formData, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
          },
          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          }.bind(this),
        })
        .then((response) => {
          if (response.status === 201) {
            this.resetAllImages = true;

            this.disableSubmit = true;
            this.popUpMsg = this.getProductRegisterSuccessMessage();
            eventBus.$emit("submitSuccess", this.popUpMsg);
            eventBus.$emit("submiting", false);

            this.registerComponentStatistics(
              "product-register",
              "product-registered-successfully",
              "product-registered-successfully"
            );

            this.load = false;
            this.successRegisterProduct = true;
            this.resetComponent();
            this.$router.push({ name: "successRegisterProduct" });

            if (response.data.product) {
              if (
                response.data.product.active_package_type == 0 &&
                !response.data.buyAds
              ) {
                setTimeout(() => {
                  this.$parent.is_pricing_active = true;
                }, 1000);
              }
            } else if (response.data.buyAds) {
              this.buyAds = response.data.buyAds;
            }
          } else if (response.status === 200) {
            this.resetAllImages = true;

            this.popUpMsg = response.data.msg;
            eventBus.$emit("submitSuccess", this.popUpMsg);
            eventBus.$emit("submiting", false);
            this.load = false;
            this.successRegisterProduct = true;
            this.resetComponent();
            this.$router.push({ name: "successRegisterProduct" });

            if (response.data.product) {
              if (response.data.product.active_package_type == 0) {
                setTimeout(() => {
                  this.$parent.is_pricing_active = true;
                }, 1000);
              }
            }
          }
        })
        .catch((err) => {
          console.log("error");
          this.errors = [];
          this.errors = err.response.data.errors;
          eventBus.$emit("submiting", false);
        });
    },
  },
  mounted() {
    this.init();
    this.getUserInfo();
    this.getcategories();
    $('input[type="file"]').imageuploadify();
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/register-product" });
  },
  watch: {
    superCategoryIndex(index) {
      this.categories = this.superCategories[index].subcategories;
    },
    categoryIndex(index) {
      if (index != "") {
        this.subCategories = this.categories[index].subcategories;
      }
    },
    filledAllInput() {
      if (index != "") {
        this.subCategories = this.categories[index].subcategories;
      }
    },
    uploadPercentage() {
      eventBus.$emit("uploadPercentage", this.uploadPercentage);
    },
  },
};
</script>

