<style scoped>
.title-contents {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 0;
}

.bg-white {
  background: #fff;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 8px 25px 7px;
  transition: 200ms;
  cursor: default;
  margin: 0;
  border-radius: 8px;
  font-size: 18px;
  padding: 10px 45px;
}

.submit-button i {
  transition: 300ms;
  position: relative;
  top: 2px;
  left: -3px;
  margin-left: 7px;
  font-size: 15px;
}

.input-text-wrapper {
  height: 25px;
  padding-top: 5px;
}

.small-description-text {
  text-align: left;
}

.submit-button.default-back-button i {
  left: 3px;
}

.submit-button.default-back-button {
  background: #fff;
  color: #777;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
}

.submit-button.default-back-button:hover i {
  transform: translateX(5px);
}
.submit-button.active {
  background: #FF9828;
  cursor: pointer;
}
.action-control-wrapper {
  padding: 20px 15px 20px;
  background: #fff;
  text-align: center;
}

label {
  margin: 0 auto 10px auto;
  font-size: 15px;
  font-weight: 400;
  color: #777;
}
.small-label {
  font-size: 15px;
}

.text-input-wrapper {
  margin: 0 auto;
  position: relative;
  background: #fbfbfb;
}

input {
  background: none;
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  box-shadow: none;
}

.text-input-wrapper i {
  position: absolute;
  left: 15px;
  top: 11px;
  font-size: 18px;
  color: #bdc4cc;
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

.modal-content {
  overflow: hidden;
  border-radius: 12px;
}
.close-modal {
  font-size: 20px;

  color: #777;

  position: absolute;

  right: 0;

  padding: 8px 15px 2px;

  top: 0;
}

.modal-title {
  font-size: 16px;

  font-weight: 800;

  color: #474747;

  text-align: center;
}

.modal-header {
  padding: 9px 15px 10px;
}

.modal-body {
  margin: 50px auto 30px;
  padding: 0 15px;
}

@media screen and (max-width: 768px) {
  #edit-price-modal > div {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .modal-content {
    min-height: 100%;

    border-radius: 0;

    border: none;

    float: right;

    width: 100%;
  }
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
  <div
    id="edit-price-modal"
    class="edit-price text-rtl modal fade"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <a class="close-modal" data-dismiss="modal">
            <i class="fa fa-times"></i>
          </a>

          <div class="modal-title">
            <span class="gray-text"> ویرایش قیمت </span>
            <span>
              {{ product.main.product_name }}
            </span>
          </div>
        </div>
        <div class="modal-body col-xs-12">
          <div class="col-xs-12 bg-white">
            <h2 class="title-contents col-xs-12">
              قیمت

              <span class="small-label">(هر کیلو به تومان)</span>

              <span class="red-text"> * </span>
            </h2>
            <label for="stock" class="description"> مثلا: 15,000 </label>

            <div class="text-input-wrapper">
              <input
                v-model="product.main.min_sale_price"
                id="min-sale-amount"
                type="tel"
                :class="{
                  active: product.main.min_sale_price,
                  error: errors.min_sale_price,
                }"
                placeholder=" قیمت را وارد کنید"
                pattern="[0-9]*"
              />

              <i
                v-if="product.main.min_sale_price && !errors.min_sale_price"
                class="fa fa-check-circle"
              ></i>
              <i
                v-else-if="errors.min_sale_price"
                class="fa fa-times-circle"
              ></i>
              <i v-else class="fa fa-edit"></i>
            </div>

            <div class="input-text-wrapper">
              <p class="error-message">
                <span
                  class="red-text"
                  v-if="errors.min_sale_price"
                  v-text="errors.min_sale_price"
                ></span>
              </p>
            </div>
          </div>

          <div class="action-control-wrapper col-xs-12">
            <button
              class="submit-button hover-effect disabled"
              :class="{
                active: product.main.min_sale_price && !errors.min_sale_price,
              }"
              @click.prevent="editProduct()"
              type="submit"
            >
              <i class="fa fa-edit"></i>

              ویرایش
            </button>
          </div>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";

export default {
  data() {
    return {
      product: {
        main: {
          min_sale_price: "",
          product_name: "",
        },
      },
      errors: {
        min_sale_price: "",
      },
    };
  },
  created() {
    eventBus.$on("editProductData", (event) => {
      this.product = event;
    });
  },
  methods: {
    editProduct() {
      if (this.product.main.min_sale_price == "") {
        this.errors.min_sale_price = "لطفا قیمت را وارد کنید";
      } else if (!this.errors.min_sale_price) {
        var request = {
          product_id: this.product.main.id,
          stock: this.toLatinNumbers(this.product.main.stock),
          min_sale_price: this.toLatinNumbers(this.product.main.min_sale_price),
          max_sale_price: this.toLatinNumbers(this.product.main.max_sale_price),
          min_sale_amount: this.toLatinNumbers(
            this.product.main.min_sale_amount
          ),
        };

        axios
          .post("/edit_product", request)
          .then((response) => {
            $(".modal").modal("hide");

            eventBus.$emit("modal", "productEditDone");

            this.registerComponentStatistics(
              "product",
              "edit-product-price",
              "product-edited-successfully"
            );
          })
          .catch(function (err) {
            $(".modal").modal("hide");
            swal({
              text: "ویرایش با خطا مواجه شد",
              className: "custom-swal-with-cancel",
              icon: "error",
              buttons: {
                close: {
                  text: "بستن",
                  className: "bg-cancel",
                },
              },
            });
            this.registerComponentExceptions(
              "Product-component: validation errors in edit product API"
            );
          });
      }
    },
    toLatinNumbers: function (num) {
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
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    validateRegx: function (input, regx) {
      return regx.test(input);
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
    registerComponentExceptions: function (description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal,
      });
    },
  },
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
  },
  watch: {
    "product.main.min_sale_price"(value) {
      this.errors.min_sale_price = "";
      if (value.length >= 13) {
        this.product.main.min_sale_price =
          this.product.main.min_sale_price.substring(0, 13);
      }
      if (value) {
        let number = this.toLatinNumbers(this.product.main.min_sale_price);
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.min_sale_price = "لطفا  فقط عدد وارد کنید";
        }
        if (!this.errors.min_sale_price) {
          this.product.main.min_sale_price = this.getNumberWithCommas(number);
        }
      }
    },
  },
};
</script>