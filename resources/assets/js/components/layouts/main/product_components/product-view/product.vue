<style>
.product-description hr {
  margin: 12px auto;
}
</style>
<style scoped>
i {
  position: relative;
  top: 1px;
  padding: 0 2px;
}

label {
  display: block;
  margin: 9px auto;
}

.modal-content {
  overflow: hidden;
  direction: rtl;
}

.modal-content .green-button {
  border: medium none;
  margin: 15px auto;
  width: initial;
  font-size: 14px;
  font-weight: bold;
  display: block;
}
.text-danger {
  height: 24px;
  font-size: 12px;
}

.close-modal {
  font-size: 20px;

  color: red;

  float: right;

  display: block;

  margin-left: 15px;

  margin-top: 8px;
}

.modal-title {
  float: right;

  font-size: 23px;

  font-weight: bold;

  color: #474747;
}

.blue-button {
  background: #000546;
}

.gray-text {
  color: #777;
}

.wrapper-bg {
  overflow: hidden;
  padding: 15px 0;
}

.images-wrapper {
  padding: 0 15px;
  width: 380px;
  float: left;
}

.images {
  height: 380px;
  background: #eeeeee;
  border-radius: 4px;
}

.share {
  text-align: right;
  padding: 18px 0;
}

.share .share-button {
  color: #777;

  background: none;

  font-size: 12px;

  font-weight: bold;

  border: 2px solid;

  border-radius: 4px;

  padding: 3px 5px 2px;
}

.buskool-default-text {
  color: #777;
  direction: rtl;
  text-align: right;
}

/*main contets styles*/
.main-contents-wrapper {
  width: calc(100% - 380px);
  float: right;
  padding: 0 15px;
  text-align: right;
  position: relative;
}

.main-contents-wrapper h1 {
  font-size: 23px;
}

.actions .green-button,
.send-message-button {
  font-size: 14px;
  font-weight: bold;
  width: initial;
  padding: 8px 15px;
  border-radius: 8px;
}

.send-message-button {
  background: none;
  border-radius: 8px;
  border: 1px solid #404b55;
  color: #404b55;
  transition: 300ms;
}
.phone-call {
  margin-left: 15px;
}

.send-message-button:hover {
  background: none;
  border-radius: 8px;
  border: 1px solid #404b55;
  background: #404b55;
  color: #fff;
  transition: 300ms;
}

.actions button.elevator-event {
  background: #e41c38;
  color: #fff;
  border-radius: 4px;
  float: left;
}

.product-info-table {
  padding-top: 10px;
}

.product-info-table li {
  display: flex;

  justify-content: space-between;

  direction: rtl;

  font-weight: bold;

  border-bottom: 1px solid #f1f1f1;

  width: 100%;

  padding: 15px 0;
  font-size: 16px;
}

.product-info-table i {
  width: 20px;
  text-align: center;
  margin-left: 5px;
}

.product-description {
  padding: 15px 0;
  direction: rtl;
  white-space: pre-line;
}

.product-description > p {
  font-size: 14px;
  line-height: 30px;
}

.product-description > span {
  font-weight: bold;
  font-size: 16px;
  display: inline-block;
  margin-bottom: 9px;
}

.default-product-contents-wrapper {
  padding: 15px;
}

.phone-number-wrapper {
  margin-top: 15px;
}

.phone-number {
  display: flex;
  justify-content: space-between;
  color: #404b55;
}

.phone-number p {
  font-size: 18px;
  font-weight: bold;
}

.warning-wrapper {
  background: #fffbe5;
  border-radius: 12px;
  direction: rtl;
  padding: 10px 15px;
  margin-top: 15px;
}

.warning-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.warning-title i {
  font-size: 23px;
  position: relative;
  top: 4px;
}

.green-button.disable {
  background: #e0e0e0;
}

.spinner-border {
  width: 1.5rem;
  height: 1.5rem;
  top: -5px;
  position: relative;
  left: 2px;
}

@media screen and (max-width: 991px) {
  .actions {
    margin-top: 15px;
  }
  .share .share-button {
    font-size: 17px;
  }

  .phone-number-wrapper,
  .warning-wrapper {
    margin-top: 25px;
  }

  .share {
    position: absolute;
    top: -4px;
    padding: 0;
  }
  .images-wrapper,
  .main-contents-wrapper {
    width: initial;
    float: inherit;
  }
  .main-contents-wrapper {
    margin: 30px auto;
  }
  .default-action-buttons {
    overflow: hidden;
  }

  .default-product-contents-wrapper {
    padding: 0;
  }

  .default-product-contents {
    padding: 15px;
    overflow: hidden;
  }

  .default-product-list {
    padding: 9px 0;
  }
}

@media screen and (max-width: 767px) {
  .images-wrapper,
  .main-product-wrapper {
    padding: 0;
  }
  .main-product-wrapper {
    border: none;
  }
}
</style>

<template>
  <div v-if="$parent.product.main.id" class="wrapper-bg main-product-wrapper">
    <!--article modal-->

    <div
      v-if="$parent.isMyProfile"
      class="modal fade"
      :id="'article-modal' + $parent.product.main.id"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-modal" href="#" data-dismiss="modal">
              <i class="fa fa-times"></i>
            </a>

            <div
              class="modal-title"
              v-text="
                'ویرایش ' +
                $parent.product.main.category_name +
                ' | ' +
                $parent.product.main.sub_category_name
              "
            ></div>
          </div>
          <div class="modal-body col-xs-12">
            <div class="row">
              <input
                type="hidden"
                class="product-id"
                :value="$parent.product.main.id"
              />
              <div class="col-xs-12 col-sm-6 pull-right">
                <label class="content-label">مقدار موجودی (کیلوگرم)</label>

                <input
                  placeholder="مثلا : 5000 "
                  type="text"
                  class="form-control stock"
                  :value="$parent.product.main.stock"
                />

                <div class="text-danger">
                  <span
                    v-if="$parent.errors.stock"
                    v-text="$parent.errors.stock[0]"
                  ></span>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6">
                <label class="content-label">حداقل سفارش (کیلوگرم)</label>

                <input
                  placeholder="مثلا : 200 "
                  type="text"
                  class="form-control min-sale-amount"
                  :value="$parent.product.main.min_sale_amount"
                />

                <div class="text-danger">
                  <span
                    v-if="$parent.errors.min_sale_amount"
                    v-text="$parent.errors.min_sale_amount[0]"
                  ></span>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 pull-right">
                <label class="content-label">حداقل قیمت (تومان)</label>

                <input
                  placeholder="مثلا : 10000 "
                  type="text"
                  class="form-control min-sale-price"
                  :value="$parent.product.main.min_sale_price"
                />

                <div class="text-danger">
                  <span
                    v-if="$parent.errors.min_sale_price"
                    v-text="$parent.errors.min_sale_price[0]"
                  ></span>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6">
                <label class="content-label">حداکثر قیمت (تومان)</label>

                <input
                  placeholder="مثلا : 50000 "
                  type="text"
                  class="form-control max-sale-price"
                  :value="$parent.product.main.max_sale_price"
                />

                <div class="text-danger">
                  <span
                    v-if="$parent.errors.max_sale_price"
                    v-text="$parent.errors.max_sale_price[0]"
                  ></span>
                </div>
              </div>
            </div>
            <button
              @click="
                $parent.editProduct('article-modal' + $parent.product.main.id)
              "
              type="submit"
              style="border: none"
              class="green-button"
            >
              ثبت ویرایش
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--end article modal-->

    <div class="images-wrapper">
      <div class="images">
        <div class="owl-carousel">
          <Carousel
            v-for="photo in $parent.product.photos"
            :key="photo.id"
            :base="$parent.str + '/'"
            :img="photo.file_path"
            :alt="
              'فروش عمده ی ' +
              $parent.product.main.sub_category_name +
              ' ' +
              $parent.product.main.product_name +
              ' ' +
              $parent.product.main.city_name +
              ' - ' +
              $parent.product.main.province_name
            "
          />
        </div>
      </div>
      <div class="share hidden-xs hidden-sm">
        <button
          @click.prevent="$parent.copyProductLinkToClipBoard"
          class="share-button"
        >
          <span>اشتراک گذاری</span>
          <i class="fa fa-share"></i>
        </button>
      </div>
      <p class="buskool-default-text hidden-xs hidden-sm">
        باسکول هیچ‌گونه منفعت و مسئولیتی در قبال معامله شما ندارد. با مطالعه‌ی
        راهنمای
        <a
          href="https://blog.buskool.com/%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ae%d8%b1%db%8c%d8%af-%d8%a7%d9%85%d9%86/"
          target="_blank"
          >خرید امن</a
        >
        ، آسوده‌تر معامله کنید.
      </p>
    </div>

    <div class="main-contents-wrapper">
      <div class="main-contents">
        <h1 v-text="$parent.product.main.product_name"></h1>

        <div class="actions">
          <button
            v-if="!$parent.isMyProfile"
            @click.prevent="$parent.openChat($parent.product)"
            class="hidden-xs hidden-sm"
            :class="{
              'send-message-button': $parent.product.user_info.has_phone,
              'green-button': !$parent.product.user_info.has_phone,
            }"
          >
            ارسال پیام
            <i class="fas fa-comment-alt"></i>
          </button>

          <button
            v-else
            class="green-button blue-button"
            data-toggle="modal"
            :data-target="'#article-modal' + $parent.product.main.id"
          >
            ویرایش
            <i class="fa fa-pencil-alt"></i>
          </button>

          <button
            v-if="!$parent.isMyProfile && $parent.product.user_info.has_phone"
            @click.prevent="$parent.activePhoneCall(false)"
            class="green-button phone-call hidden-xs hidden-sm"
            :class="{ disable: $parent.isActivePhone }"
            :disabled="$parent.isActivePhone"
          >
            اطلاعات تماس
            <i
              class="fas fa-phone-square-alt"
              v-if="!$parent.getPhoneLoader"
            ></i>
            <div v-else class="spinner-border">
              <span class="sr-only"></span>
            </div>
          </button>

          <button
            v-if="$parent.isMyProfile"
            class="elevator-event green-button"
            @click.prevent="$parent.elevatorEvent()"
          >
            <i class="fas fa-chart-line"></i>

            اعمال نردبان
          </button>

          <div class="share hidden-md hidden-lg pull-left">
            <button
              @click.prevent="$parent.copyProductLinkToClipBoard"
              class="share-button"
            >
              <i class="fa fa-share-alt"></i>
            </button>
          </div>
        </div>
        <div
          id="phone-number-wrapper"
          v-if="$parent.isActivePhone"
          class="phone-number-wrapper collapse"
        >
          <a :href="'tel:' + $parent.userPhone" class="phone-number">
            <p>
              <i class="fa fa-phone-square-alt"></i>
              {{ $parent.userPhone }}
            </p>
            <p>شماره تماس</p>
          </a>
          <div class="warning-wrapper">
            <p class="warning-title">
              <i class="fa fa-exclamation-circle"></i>

              هشدار پلیس
            </p>
            <p class="warning-text">
              لطفاً پیش از انجام معامله و هر نوع پرداخت وجه، از صحت کالا یا
              خدمات ارائه شده، به صورت حضوری اطمینان حاصل نمایید.
            </p>
          </div>
        </div>
        <div class="product-info-table">
          <ul class="product-info-list">
            <li>
              <span class="gray-text">
                <i class="fa fa-folder"></i> دسته بندی
              </span>

              <span v-text="$parent.product.main.sub_category_name"></span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fa fa-map-marker-alt"></i> استان / شهر</span
              >

              <span
                v-text="
                  $parent.product.main.province_name +
                  ' - ' +
                  $parent.product.main.city_name
                "
              ></span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fa fa-box-open"></i> مقدار موجودی</span
              >

              <span
                v-text="getConvertedNumbers($parent.product.main.stock)"
              ></span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fas fa-clipboard-check"></i> حداقل سفارش</span
              >

              <span
                v-text="
                  getConvertedNumbers($parent.product.main.min_sale_amount)
                "
              ></span>
            </li>
            <li v-if="!$parent.isMyProfile">
              <span class="gray-text">
                <i class="fas fa-dollar-sign"></i> قیمت</span
              >

              <span>استعلام بگیرید</span>
            </li>
          </ul>
          <div
            v-if="$parent.product.main.description"
            class="product-description"
          >
            <span class="gray-text">توضیحات</span>
            <p v-html="$parent.product.main.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="wrapper-bg main-product-wrapper default-product-contents-wrapper"
  >
    <div class="default-image-wrapper text-right text-rtl pull-left">
      <div
        class="default-product-image placeholder-content content-full-width padding-0"
      ></div>

      <div
        class="default-button-min-with placeholder-content margin-15-0 hidden-xs hidden-sm"
      ></div>
      <p
        class="content-default-width placeholder-content hidden-xs hidden-sm"
      ></p>
      <p
        class="content-half-width placeholder-content margin-15-0 hidden-xs hidden-sm"
      ></p>
    </div>

    <div class="default-product-contents text-rtl pull-right">
      <div
        class="content-default-width placeholder-content padding-15-0 margin-15-0"
      ></div>
      <div class="default-action-buttons hidden-md hidden-lg">
        <div class="default-button placeholder-content pull-right"></div>
        <div class="default-button placeholder-content pull-left"></div>
      </div>

      <ul class="default-product-list">
        <li>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
        </li>
        <li>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
        </li>
        <li>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
        </li>
        <li>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
        </li>
        <li>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
          <span
            class="placeholder-content content-min-width placeholder-content"
          ></span>
        </li>
      </ul>
      <p class="content-default-width placeholder-content margin-15-0"></p>
      <p class="content-full-width placeholder-content"></p>
      <p class="content-default-width placeholder-content margin-15-0"></p>
      <p class="content-half-width placeholder-content"></p>
    </div>
  </div>
</template>

<script >
import Carousel from "./carousel";
export default {
  components: {
    Carousel,
  },
  methods: {
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
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
  },
};
</script>
