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

.gray-text {
  color: #777;
}

.wrapper-bg {
  overflow: hidden;
  padding: 0;
  border: none;
}

.images-wrapper {
  width: 380px;
  float: left;
}

.images {
  height: 380px;
  background: #eeeeee;
  border-radius: 12px;
}

.share {
  text-align: left;
  padding: 25px 0 20px;
}

.share .share-button {
  color: #808c9b;
  background: none;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid;
  border-radius: 12px;
  padding: 4px 15px 3px;
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
  text-align: right;
  position: relative;
  padding-left: 30px;
}

.main-contents-wrapper h1 {
  font-size: 23px;
  line-height: 1.618;
}

.phone-call {
  margin-left: 15px;
  background: linear-gradient(90deg, #21ad93, #00c569);
}

.product-info-table {
  padding-top: 10px;
}

.product-info-table li {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  font-weight: bold;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 12px;
  margin-bottom: 11px;
  font-weight: 500;
  color: #313a43;
}

.product-info-table li:nth-of-type(odd) {
  background: #fafafa;
}

.product-info-table i {
  width: 20px;
  text-align: center;
  margin-left: 5px;
  color: #808c9b;
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
  font-weight: 500;
  font-size: 16px;
  display: inline-block;
  margin-bottom: 9px;
  color: #333333;
}

.default-product-contents-wrapper {
  padding: 15px;
  min-height: 740px;
}
.main-product-wrapper {
  min-height: 740px;
}
.phone-number-wrapper {
  margin-top: 15px;
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

.actions {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  margin: 15px auto;
}

.actions .phone-call {
  margin-left: 10px;
}

.actions .send-message-button {
  margin-right: 10px;
}

.actions .blue-button {
  background: rgba(20, 0, 146, 0.25);
  color: #140092;
}

.show-button-wrapper {
  margin: 50px auto 30px;
}

.show-button-wrapper svg {
  width: 20px;
  position: relative;
  top: 3px;
}

.show-button-wrapper button:hover {
  background: #ff6600 !important;
  border-color: #ff6600;
  color: #fff !important;
  transition: 150ms;
}

.svg-1 {
  fill: #ff6600;
  transition: 150ms;
}

.show-button-wrapper button:hover .svg-1 {
  fill: #fff;
  transition: 150ms;
}

@media screen and (max-width: 1199px) {
  .main-product-wrapper {
    min-height: initial;
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 991px) {
  .actions {
    margin-top: 15px;
    width: 100%;
  }

  .actions .elevator-event {
    margin-left: 10px;
  }

  .main-contents-wrapper h1 {
    max-width: calc(100% - 100px);
    float: right;
    margin-bottom: 26px;
  }

  .share .share-button {
    font-size: 12px;
    padding: 5px 6px 2px;
  }

  .phone-number-wrapper,
  .warning-wrapper {
    margin-top: 25px;
  }

  .share {
    position: absolute;
    top: 2px;
    padding: 0;
    left: 15px;
  }

  .images-wrapper,
  .main-contents-wrapper {
    width: initial;
    float: inherit;
  }

  .main-contents-wrapper {
    margin: 30px auto;
    padding: 0 10px;
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
  .images {
    border-radius: 0;
  }

  .images-wrapper,
  .main-product-wrapper {
    padding: 0;
    min-height: initial;
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
        <div
          v-if="$parent.product.photos"
          class="owl-carousel main-product-carousel"
        >
          <Carousel
            v-for="(photo, index) in $parent.product.photos"
            :index="index"
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
        <svg
          v-else
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
        >
          <path
            fill="#ccc"
            d="M41,42H13c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C45,40.2,43.2,42,41,42z"
          />
          <path
            fill="#ddd"
            d="M35,36H7c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C39,34.2,37.2,36,35,36z"
          />
          <circle fill="#ccc" cx="30" cy="16" r="3" />
          <polygon fill="#bbb" points="17,17.9 8,31 26,31" />
          <polygon fill="#eee" points="28,23.5 22,31 34,31" />
        </svg>
      </div>
      <div class="share hidden-xs hidden-sm">
        <button @click.prevent="$parent.shareProduct()" class="share-button">
          <span>اشتراک گذاری</span>
          <i class="fa fa-share-alt"></i>
        </button>
      </div>

      <a
        href="https://blog.buskool.com/%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ae%d8%b1%db%8c%d8%af-%d8%a7%d9%85%d9%86/"
        target="_blank"
        class="warning-wrapper info-wrapper hidden-xs hidden-sm"
      >
        <p class="warning-title">
          <i class="fa fa-question-circle"></i>

          راهنمای خرید امن
        </p>
        <p class="warning-text">
          باسکول هیچ‌گونه منفعت و مسئولیتی در قبال معامله شما ندارد. با مطالعه‌ی
          راهنمای خرید امن ، آسوده‌تر معامله کنید.
        </p>
      </a>
    </div>

    <div class="main-contents-wrapper">
      <div class="main-contents">
        <h1 v-text="$parent.product.main.product_name"></h1>

        <div class="actions">
          <button
            v-if="$parent.isMyProfile"
            class="elevator-event main-button bg-navy-blue white-text"
            @click.prevent="$parent.elevatorEvent()"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33301 14.6667H4.66634V11.3334H7.99967V8.00008H11.333V4.66675H14.6663"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.916504 7.16671L7.1665 1.33337M7.1665 1.33337V4.66671M7.1665 1.33337H3.83317"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            اعمال نردبان
          </button>

          <button
            v-else-if="
              !$parent.isMyProfile &&
              $parent.updatedCurrentUser.user_info &&
              $parent.product.user_info.has_phone &&
              $parent.updatedCurrentUser.user_info.is_buyer
            "
            @click.prevent="$parent.activePhoneCall(false)"
            class="main-button bg-orange white-text hidden-xs hidden-sm"
            :class="{ disable: $parent.isActivePhone }"
            :disabled="$parent.isActivePhone"
          >
            <i class="fas fa-phone-alt" v-if="!$parent.getPhoneLoader"></i>
            <div v-else class="spinner-border">
              <span class="sr-only"></span>
            </div>
            تماس با فروشنده
          </button>
          <button
            v-else-if="
              !$parent.updatedCurrentUser.user_info &&
              $parent.product.user_info.has_phone
            "
            @click.prevent="$parent.loginModal(false)"
            class="main-button bg-orange white-text hidden-xs hidden-sm"
            :class="{ disable: $parent.isActivePhone }"
            :disabled="$parent.isActivePhone"
          >
            <i class="fas fa-phone-alt" v-if="!$parent.getPhoneLoader"></i>
            <div v-else class="spinner-border">
              <span class="sr-only"></span>
            </div>
            تماس با فروشنده
          </button>
          <button
            v-if="$parent.isMyProfile"
            class="main-button bg-soft-blue navy-blue-text button-shadow"
            data-toggle="modal"
            @click="
              $parent.openEditModal('#article-modal' + $parent.product.main.id)
            "
          >
            <i class="fa fa-pencil-alt"></i>
            ویرایش
          </button>
          <button
            v-else-if="
              !$parent.isMyProfile && $parent.updatedCurrentUser.user_info
            "
            @click.prevent="$parent.openChat($parent.product)"
            class="hidden-xs hidden-sm main-button button-shadow"
            :class="{
              'bg-soft-orange orange-text send-message-button':
                $parent.product.user_info.has_phone &&
                $parent.updatedCurrentUser.user_info.is_buyer,
              'bg-orange white-text':
                !$parent.product.user_info.has_phone ||
                ($parent.product.user_info.has_phone &&
                  $parent.updatedCurrentUser.user_info.is_seller),
            }"
          >
            <i class="fas fa-comment-alt"></i>
            چت با فروشنده
          </button>
          <button
            v-else-if="!$parent.updatedCurrentUser.user_info"
            @click.prevent="$parent.loginModal(true)"
            class="hidden-xs hidden-sm main-button button-shadow"
            :class="{
              'bg-soft-orange orange-text send-message-button':
                $parent.product.user_info.has_phone,
              'bg-orange white-text': !$parent.product.user_info.has_phone,
            }"
          >
            <i class="fas fa-comment-alt"></i>
            چت با فروشنده
          </button>

          <div class="share hidden-md hidden-lg pull-left">
            <button
              @click.prevent="$parent.shareProduct()"
              class="share-button"
            >
              <i class="fa fa-share-alt"></i>
              <span>اشتراک گذاری</span>
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
                <i class="fa fa-user-circle"></i> فروشنده
              </span>

              <span>
                {{
                  $parent.product.user_info.first_name +
                  " " +
                  $parent.product.user_info.last_name
                }}
              </span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fa fa-map-marker-alt"></i> آدرس</span
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
                <i class="fas fa-clipboard-check"></i> حداقل میزان سفارش</span
              >

              <span
                v-text="
                  getConvertedNumbers($parent.product.main.min_sale_amount)
                "
              ></span>
            </li>
          </ul>
          <div
            class="show-button-wrapper text-rtl text-center"
            v-if="!$parent.isMyProfile"
          >
            <button
              @click="$parent.openPriceModal()"
              class="main-button-alt orange-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 20 20"
              >
                <path
                  class="svg-1"
                  d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.162 2.162 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133zm-4.371 9.358a1.608 1.608 0 0 1-2.24-.396a1.614 1.614 0 0 1 .395-2.246a1.607 1.607 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153c.086 0 .174-.02.257-.059c.194-.092.402-.201.619-.33a1.615 1.615 0 0 1-.664 1.586z"
                />
              </svg>
              استعلام قیمت
            </button>
          </div>

          <div
            v-if="$parent.product.main.description"
            class="product-description"
          >
            <span>توضیحات</span>
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
        class="
          default-product-image
          placeholder-content
          content-full-width
          padding-0
        "
      ></div>

      <div
        class="
          default-button-min-with
          placeholder-content
          margin-15-0
          hidden-xs hidden-sm
        "
      ></div>
      <a
        href="https://blog.buskool.com/%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ae%d8%b1%db%8c%d8%af-%d8%a7%d9%85%d9%86/"
        target="_blank"
        class="warning-wrapper info-wrapper hidden-xs hidden-sm"
      >
        <p class="warning-title">
          <i class="fa fa-question-circle"></i>

          راهنمای خرید امن
        </p>
        <p class="warning-text">
          باسکول هیچ‌گونه منفعت و مسئولیتی در قبال معامله شما ندارد. با مطالعه‌ی
          راهنمای خرید امن ، آسوده‌تر معامله کنید.
        </p>
      </a>
    </div>

    <div class="default-product-contents text-rtl pull-right">
      <div
        class="content-default-width placeholder-content padding-10-0 h-25"
      ></div>
      <div
        class="
          default-button-min-with
          placeholder-content
          default-mdedium-button-width
          h-40
          margin-top-25
          hidden-xs hidden-sm
        "
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
      <span
        class="
          placeholder-content
          content-min-width
          placeholder-content
          margin-15-0
        "
      ></span>
      <p class="content-default-width h-20 placeholder-content margin-30-0"></p>
      <p class="content-full-width h-20 placeholder-content"></p>
      <p class="content-default-width h-20 placeholder-content margin-30-0"></p>
      <p class="content-half-width h-20 placeholder-content"></p>
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
