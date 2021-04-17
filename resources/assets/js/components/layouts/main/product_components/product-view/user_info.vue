<style scoped>
i {
  position: relative;
  top: 1px;
  padding: 0 2px;
}

.green-button {
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
  border-radius: 8px;
}

.green-button-o {
  color: #00c569;
  background: none;
  border: 2px solid #00c569;
  padding: 8px 0;
}

.green-button-o:hover {
  background: #00c569;
  color: #fff;
}

.user-info-wrapper {
  padding: 15px 20px 25px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
  position: relative;
}

.user-info-wrapper.active {
  padding: 15px 20px;
  border: 2px solid #00c569;
}

.user-information-content-image {
  position: relative;
  min-width: 110px;
}

.user-information-content-image .user-image {
  width: 90px;
  height: 90px;
  position: relative;
  margin: 0 auto 10px;
  border-radius: 90px;
  overflow: hidden;
}

.user-information-content-image img {
  width: 100%;
  min-height: 100%;
  position: relative;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
}
.valid-icon {
  background: #00c569;

  width: 31px;

  height: 31px;

  border-radius: 50px;

  padding-top: 3px;

  position: absolute;

  bottom: -12px;

  right: auto;

  left: 50%;

  margin-left: -15px;
}

.user-information-content > p {
  font-size: 18px;

  font-weight: bold;

  color: #333;

  direction: rtl;
}

.user-information-content p.user-position {
  font-size: 12px;
  color: #777;
}

p.user-valid-text {
  font-size: 13px;

  font-weight: bold;

  color: #00c569;
}

p.user-valid-text,
p.user-position {
  padding-top: 5px;
}

p.response-rate {
  color: #777;
  font-size: 12px;
  padding-top: 5px;
  direction: rtl;
}

p.response-rate span {
  color: #e41c38;
}

/* stars styles */

.profile-rating-box-wrapper {
  padding-left: 10px;
}

.profile-rating-box {
  border: 1px solid #f6f6f6;
  border-radius: 4px;
  width: 100%;
  max-width: 180px;
  margin: 5px auto;
  overflow: hidden;
}

.stars-wrapper {
  padding-right: 2px;
}

.rating-stars {
  /* width: calc(100% - 40px); */
  text-align: center;
}

.rating-stars p > span {
  position: relative;
  display: inline-block;
}

.rating-stars p > span i {
  position: absolute;
  left: 2px;
  font-size: 17px;
  z-index: 0;
  top: 0px;
  color: #bdc4cc;
}

.rating-stars p > span > span {
  display: block;
  position: relative;
  z-index: 1;
  font-size: 9px;
  width: 18px;
  text-align: center;
  margin-left: 5px;
  color: #777;
}
.rating-stars .review-count-wrapper {
  color: #556080;
  line-height: 1;
  font-size: 11px;
  padding: 3px;
}

.rating-score {
  width: 40px;
  background: #f6f6f6;
  height: 100%;
  text-align: center;
  padding: 9px 0;
  font-size: 16px;
  font-weight: bold;
  color: #556080;
}

.more-info {
  position: absolute;
  top: calc(50% - 11px);
  left: 15px;
  color: #00c569;
}

.user-info-section-wrapper {
  padding: 0 15px;
}

.warning-wrapper {
  background: #fffbe5;
  border-radius: 12px;
  direction: rtl;
  padding: 10px 15px;
  margin-top: 15px;
}

.info-wrapper.warning-wrapper {
  background: #f5fbff;
  display: block;
  margin-bottom: 30px;
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

@media screen and (max-width: 1199px) {
  .default-button-user-item {
    height: 20px;
    margin-top: 27px;
  }

  .rating-stars .review-count-wrapper {
    padding: 12px;
  }
  .user-info-section-wrapper {
    padding: 0;
    margin-top: 30px;
  }

  .user-info-wrapper {
    padding: 10px 15px;
    float: right;
    width: 100%;
  }

  .user-information-content-image .user-image {
    width: 70px;
    height: 70px;
  }
  .rating-stars p > span > span {
    margin: 0 1px;
    font-size: 14px;
    left: 4px;
  }
  .rating-stars p > span i {
    left: -1px;
    font-size: 23px;
  }

  .rating-score {
    padding: 9px 0;
  }
  .user-information-content-image,
  .default-wrapper-main-image,
  .default-image-info {
    float: right;
  }

  .user-information-content {
    float: right;

    text-align: right;

    margin-right: 15px;

    padding-top: 6px;

    width: calc(100% - 125px);
  }

  .profile-rating-box {
    max-width: initial;
    float: right;
    width: initial;
  }

  .profile-rating-box-wrapper {
    padding-left: 0;
    width: 100%;
    float: right;
  }

  .user-info-actions,
  .default-user-action-buttons {
    float: left;
  }

  .valid-icon {
    padding-top: 3px;

    bottom: -5px;
  }

  .green-button {
    padding: 7px 0;
  }

  .user-info-actions a:first-of-type {
    margin-top: 0;
  }

  .default-image-info {
    width: 40%;

    text-align: right;

    margin-top: 15px;

    margin-right: 15px;
  }

  .default-user-action-buttons {
    width: 160px;
  }

  .user-information-content p.stars-wrapper {
    padding: 7px;
    background: #f6f6f6;
    float: right;
  }

  .user-information-content p.stars-wrapper > span {
    padding-top: 4px;
    margin: 0 5px;
  }

  .user-information-content p:last-of-type {
    margin-bottom: 0;
    float: right;
    font-size: 15px;
  }

  .user-info-actions {
    margin-top: 5px;
  }

  .profile-rating-box-wrapper {
    padding-left: 0;
  }
}

@media screen and (max-width: 767px) {
  .user-info-section-wrapper {
    padding: 0 15px;
    margin-top: 0;
  }
  .user-information-content-image .user-image {
    width: 50px;
    height: 50px;
  }

  .user-information-content-image {
    min-width: 50px;
  }

  .user-information-content p.stars-wrapper > span {
    padding-top: 0;
    margin: 0 1px;
  }
  .rating-stars p > span i {
    left: -1px;
    font-size: 17px;
  }

  .user-information-content {
    width: calc(100% - 65px);
  }

  .user-information-content p.stars-wrapper {
    padding: 9px 7px;
  }

  .green-button {
    padding: 10px 0;
  }

  .user-info-actions a:first-of-type {
    margin-top: 15px;
  }

  .rating-stars p > span > span {
    left: 1px;
  }

  .default-image-info {
    text-align: center;

    margin: 15px auto;

    padding: 0;
  }
}

@media screen and (max-width: 350px) {
  .more-info {
    top: 21px;
  }
  .user-information-content {
    width: 100%;
    margin: 0;
  }
}
</style>
<template>
  <div class="user-info-section-wrapper">
    <div
      v-if="$parent.product.user_info"
      class="user-info-wrapper wrapper-bg"
      :class="{ active: $parent.product.user_info.active_pakage_type == 3 }"
    >
      <router-link
        :to="'/profile/' + $parent.product.user_info.user_name"
        class="user-information-link text-rtl"
      >
        <div class="user-information-content-image">
          <div
            class="user-image"
            v-if="$parent.product.profile_info.profile_photo"
          >
            <img
              v-bind:src="
                '/storage/' + $parent.product.profile_info.profile_photo
              "
            />
          </div>

          <div class="user-image" v-else>
            <img
              src="../../../../../../img/user-defult.png"
              class="image_defult"
            />
          </div>
          <div
            class="valid-icon"
            v-if="$parent.product.user_info.active_pakage_type == 3"
          >
            <svg width="21.75" height="21.68" viewBox="0 0 24.965 30.574">
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

        <div class="user-information-content">
          <p v-show="$parent.product.user_info">
            {{
              $parent.product.user_info.first_name +
              " " +
              $parent.product.user_info.last_name
            }}
            <button
              v-if="$parent.product.user_info.is_verified"
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
          </p>

          <p
            v-if="$parent.product.user_info.response_rate"
            class="response-rate"
          >
            احتمال پاسخ گویی
            <span v-text="$parent.product.user_info.response_rate + '%'"></span>
          </p>
          <p
            v-if="$parent.product.user_info.active_pakage_type == 3"
            class="user-valid-text"
          >
            فروشنده ویژه
          </p>
          <p v-else class="user-position">فروشنده</p>

          <div
            class="profile-rating-box-wrapper"
            v-if="$parent.product.user_info.review_info.avg_score > 0"
          >
            <div class="profile-rating-box">
              <div class="rating-stars pull-left">
                <p class="stars-wrapper">
                  <span v-for="(star, index) in 5" :key="index">
                    <span v-text="index + 1"></span>

                    <i
                      class="fa fa-star"
                      :class="{ 'yellow-text': index < $parent.starScore }"
                    ></i>
                  </span>
                </p>
                <p class="review-count-wrapper">
                  <span
                    v-text="$parent.product.user_info.review_info.total_count"
                  ></span>
                  نظر
                </p>
              </div>
              <span class="rating-score pull-right">
                <span
                  v-text="$parent.product.user_info.review_info.avg_score"
                ></span>
              </span>
            </div>
          </div>
        </div>
        <div class="user-info-actions hidden-xs hidden-sm hidden-md">
          <router-link
            :to="'/profile/' + $parent.product.user_info.user_name"
            class="green-button green-button-o"
            >مشاهده پروفایل</router-link
          >

          <button
            v-if="!$parent.isMyProfile && $parent.currentUser.user_info"
            @click.prevent="$parent.openChatModal($parent.product)"
            class="green-button"
          >
            <i class="fa fa-comment-alt"></i>

            ارسال پیام
          </button>
          <button
            v-else-if="!$parent.isMyProfile && !$parent.currentUser.user_info"
            @click.prevent="$parent.loginModal()"
            class="green-button"
          >
            <i class="fa fa-comment-alt"></i>

            ارسال پیام
          </button>

          <router-link
            v-else-if="$parent.userType == 0"
            :to="{ name: 'profileBasicBuyer' }"
            class="green-button"
          >
            ویرایش پروفایل
            <i class="fa fa-pencil-alt"></i>
          </router-link>

          <router-link
            v-else-if="$parent.userType == 1"
            :to="{ name: 'profileBasicSeller' }"
            class="green-button"
          >
            ویرایش پروفایل
            <i class="fa fa-pencil-alt"></i>
          </router-link>
        </div>
        <span class="more-info hidden-lg">
          مشاهده پروفایل
          <i class="fa fa-angle-left"></i>
        </span>
      </router-link>
    </div>

    <div class="user-info-wrapper default-user-info-wrapper wrapper-bg" v-else>
      <div
        class="default-wrapper-main-image placeholder-content text-center"
      ></div>

      <div class="default-image-info text-rtl text-center margin-15-0">
        <span
          class="placeholder-content content-half-width inline-block"
        ></span>
        <span
          class="placeholder-content content-default-width inline-block"
        ></span>
      </div>
      <div class="default-user-action-buttons">
        <div
          class="placeholder-content default-button-full-with margin-0 hidden-xs hidden-md hidden-sm"
        ></div>
        <div
          class="placeholder-content default-button-user-item default-button-full-with margin-10-0"
        ></div>
      </div>
    </div>
    <a
      href="https://blog.buskool.com/%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ae%d8%b1%db%8c%d8%af-%d8%a7%d9%85%d9%86/"
      target="_blank"
      class="warning-wrapper col-xs-12 info-wrapper hidden-md hidden-lg"
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
</template>

<script >
export default {
  methods: {
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
  watch: {
    "$parent.product.user_info": function () {
      if (this.$parent.product.user_info) {
        setTimeout(() => {
          this.activeComponentTooltip();
        }, 10);
      }
    },
  },
};
</script>
