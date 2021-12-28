<style scoped>
.main-article-wrapper {
  border: 1px solid #e9ecef;
  border-radius: 12px;
  margin-bottom: 35px;
  background: #fff;
  overflow: hidden;
}
.main-article-wrapper:hover {
  cursor: pointer;
}

.user-image {
  width: 20px;
  height: 20px;
  float: right;
  margin-left: 10px;
}
.user-content {
  display: block;
  max-width: 170px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  height: 21px;
  padding-top: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  top: 3px;
  text-align: right;
}

.main-article {
  background: #fff;
  overflow: hidden;
  padding: 15px 30px;
  position: relative;
}

.article-image {
  height: 100px;
  overflow: hidden;
  position: relative;
  display: block;
  background: #f6f6f6;
  width: 130px;
  border-radius: 4px;
  float: right;
}

.article-image img {
  display: block;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-content {
  padding-right: 20px;
  float: right;
  text-align: right;
  width: calc(100% - 130px);
}

.main-content ul {
  padding-right: 10px;
}

h3.article-title {
  font-size: 16px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 215px;
  height: 17px;
  color: #000;
  margin-bottom: 10px;
}

.main-content .main-article p {
  font-size: 13px;
  font-weight: 700;
  max-width: 500px;
  overflow: hidden;
  height: 25px;
  line-height: 1.618;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}

.green-button {
  width: 100%;
  padding: 7px;
  font-size: 18px;
  max-width: 280px;
  margin: 0 auto 20px;
  border-radius: 8px;
  display: block;
}

.green-button.send-message-button {
  background: none;
  border: 1px solid #404b55;
  color: #404b55;
  transition: 300ms;
}

.green-button.send-message-button:hover {
  background: #404b55;
  color: #fff;
  transition: 300ms;
}
button i {
  position: relative;
  top: 1px;
  margin: 0 2px;
}

.is-user-valid {
  border: 1px solid #00c569;
}

.valid-user-badge {
  display: none;
  width: 36px;
  height: 38px;
  background: #00c569;
  position: absolute;
  left: 14px;
  top: 0;
  padding: 2px;
  border-top: 3px solid #00b761;
  text-align: center;
  color: #fff !important;
}

.valid-user-badge::after {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 18px 14px;
  border-color: transparent #00c569 transparent #00c569;
  line-height: 0;
  _border-color: #000000 #000000 #000000 #6980fe;
  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
  content: "";
  position: absolute;
  left: 0;
  bottom: -14px;
}
.is-user-valid .valid-user-badge {
  display: block;
}

.action-button-wrapper {
  display: flex;
  justify-content: center;
}

.spinner-border {
  width: 1.5rem;
  height: 1.5rem;
  top: -5px;
  position: relative;
  left: 2px;
}

.green-button.disable {
  background: #e0e0e0;
}

.main-content li.items {
  margin-bottom: 12px;
}
.main-content li.items > i {
  margin-left: 5px;
  font-size: 15px;
  width: 20px;
  display: inline-block;
  text-align: center;
}
.verified-user {
  top: -1px;
  position: absolute;
}

@media screen and (max-width: 767px) {
  .green-button {
    font-size: 14px;
    font-weight: 400;
    padding: 5px;
    margin: 0 5px 10px;
  }
  .main-article {
    padding: 15px;
  }
  .article-image {
    width: 100px;
    height: 80px;
  }
  /* .action-button-wrapper {
    flex-direction: column;
  } */
}
</style>

<template>
  <div>
    <article
      class="main-article-wrapper col-xs-12"
      :class="{ 'is-user-valid': product.active_pakage_type == 3 }"
    >
      <div @click="handelLinkTarget()" class="main-article row text-center">
        <div class="valid-user-badge">
          <div class="wrapper-icon">
            <svg width="24.965" height="30.574" viewBox="0 0 24.965 30.574">
              <g
                id="buskool-icon"
                data-name="buskool"
                transform="translate(-273.1 -715.025)"
              >
                <path
                  id="Subtraction_1"
                  data-name="Subtraction 1"
                  d="M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z"
                  transform="translate(2237.1 709.808)"
                  fill="#fff"
                />
                <g id="Group_24" data-name="Group 24">
                  <path
                    id="Rectangle_12"
                    data-name="Rectangle 12"
                    d="M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                    transform="translate(282.389 717.5) rotate(45)"
                    fill="#fff"
                  />
                  <path
                    id="Rectangle_13"
                    data-name="Rectangle 13"
                    d="M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z"
                    transform="translate(294.935 718.561) rotate(135)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="article-image">
          <div v-show="isImageLoad">
            <transition>
              <img
                :src="str + '/' + product.photo"
                @load="ImageLoaded"
                alt=""
              />
            </transition>
          </div>
          <div v-show="!isImageLoad" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="main-content text-rtl">
          <h3 class="article-title">
            {{ product.product_name }}
          </h3>
          <ul>
            <li class="items">
              <span class="user-image">
                <img src="../../../../../../../img/user-defult.png" />
              </span>
              <div class="user-content">
                <span
                  class="user-name-link"
                  v-text="product.first_name + ' ' + product.last_name"
                >
                </span>
                <button
                  v-if="product.is_verified"
                  @click.prevent
                  class="verified-user"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="bottom"
                  :data-content="$parent.verifiedUserContent"
                  title
                >
                  <i class="fa fa-certificate"></i>
                </button>
              </div>
            </li>
            <li class="items">
              <i class="fa fa-box-open"></i>
              <span v-text="$parent.getConvertedNumbers(product.stock)"></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="action-button-wrapper">
        <button
          v-if="product.has_phone"
          class="green-button phone-button"
          :class="{ disable: isActivePhone }"
          :disabled="isActivePhone"
          @click.prevent="activePhoneCall()"
        >
          <span>
            <i class="fas fa-phone-alt" v-if="!getPhoneLoader"></i>
            <div v-else class="spinner-border">
              <span class="sr-only"></span>
            </div>
            تماس با فروشنده
          </span>
        </button>
        <button
          class="green-button"
          :class="{ 'send-message-button': product.has_phone }"
          @click.prevent="$parent.openChat(product)"
        >
          <i class="fa fa-comment-alt"></i> چت با فروشنده
        </button>
      </div>
      <div
        :id="product.id + '-phone-number-wrapper'"
        v-if="isActivePhone"
        class="phone-number-wrapper collapse"
      >
        <a :href="'tel:' + userPhone" class="phone-number">
          <p>
            <i class="fa fa-phone-square-alt"></i>
            {{ userPhone }}
          </p>
          <p>شماره تماس</p>
        </a>
        <div class="warning-wrapper">
          <p class="warning-title">
            <i class="fa fa-exclamation-circle"></i>

            هشدار پلیس
          </p>
          <p class="warning-text">
            لطفاً پیش از انجام معامله و هر نوع پرداخت وجه، از صحت کالا یا خدمات
            ارائه شده، به صورت حضوری اطمینان حاصل نمایید.
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import swal from "../../../../../../sweetalert.min.js";

export default {
  props: ["product", "str"],
  data: function () {
    return {
      isImageLoad: false,
      getPhoneLoader: false,
      isActivePhone: false,
      userPhone: "",
    };
  },

  created: function () {
    this.loadImage();
  },
  methods: {
    handelLinkTarget() {
      if (this.$parent.isDeviceMobile()) {
        window.open(this.getProductUrl(), "_blank");
      } else {
        this.$router.push(this.getProductUrl());
      }
    },
    setScrollToProduct() {
      let element = $("#" + this.product.id + "-phone-number-wrapper");
      let elementTop = element.offset().top;
      let elementHeight = element.height();
      let windowHeight = $(window).height();
      $("html, body").animate(
        {
          scrollTop: elementTop - (windowHeight - elementHeight) / 2,
        },
        300
      );
    },
    activePhoneCall() {
      this.getPhoneLoader = true;
      this.isActivePhone = true;
      axios
        .post("/get_seller_phone_number", {
          p_id: this.product.id,
          s_id: this.product.myuser_id,
          item: "PRODUCT",
        })
        .then((response) => {
          this.$nextTick(() => {
            this.userPhone = response.data.phone;
            $("#" + this.product.id + "-phone-number-wrapper").collapse("show");
            this.getPhoneLoader = false;
            this.setScrollToProduct();
          });
        })
        .catch((error) => {
          this.getPhoneLoader = false;
          this.isActivePhone = false;

           eventBus.$emit(
              "noAccessToBuyerPhoneOtherError",
              error.response.data.msg
            );
        });
    },
    loadImage: function () {
      this.isImageLoad = false;
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
    },
    getProductUrl: function () {
      return (
        "/product-view/خرید-عمده-" +
        this.product.subcategory_name.replace(" ", "-") +
        "/" +
        this.product.category_name.replace(" ", "-") +
        "/" +
        this.product.id
      );
    },
    activeComponentTooltip() {
      $(".verified-user")
        .popover({ trigger: "manual", html: true, animation: false })
        .on("mouseenter", function () {
          var _this = this;
          $(this).popover("show");
          $(".popover").on("mouseleave", function () {
            $(_this).popover("hide");
          });
        })
        .on("mouseleave", function () {
          var _this = this;
          setTimeout(function () {
            if (!$(".popover:hover").length) {
              $(_this).popover("hide");
            }
          }, 300);
        });
    },
  },
  mounted() {
    this.activeComponentTooltip();
  },
};
</script>
