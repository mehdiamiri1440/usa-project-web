<style scoped>
.green-button {
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
  border-radius: 8px;
}

.green-button-alt {
  color: #00c569;
  background: none;
  border: 2px solid #00c569;
  padding: 8px 0;
}

.green-button-alt:hover {
  background: #00c569;
  color: #fff;
}

.user-info-wrapper {
  padding: 15px 20px 25px;
  text-align: center;
  font-weight: bold;
  position: relative;
  float: right;
  width: 100%;
}

.user-info-wrapper.active {
  padding: 15px 20px;
  border: 1px solid #00c569;
}

.user-information-content {
  text-align: right;
  float: right;
  margin-right: 15px;
}

.user-information-content-image {
  position: relative;
  width: 82px;
  height: 82px;
  border-radius: 100px;
  padding-top: 4px;
  float: right;
  /* background: linear-gradient(230deg, #2ed888, #85b9fb);
  background-size: 500% 300%;
  -webkit-animation: profile-bg 2s ease infinite;
  -moz-animation: profile-bg 2s ease infinite;
  -o-animation: profile-bg 2s ease infinite;
  animation: profile-bg 2s ease infinite; */
}

@-webkit-keyframes profile-bg {
  0% {
    background-position: 0% 11%;
  }
  50% {
    background-position: 100% 90%;
  }
  100% {
    background-position: 0% 11%;
  }
}
@-moz-keyframes profile-bg {
  0% {
    background-position: 0% 11%;
  }
  50% {
    background-position: 100% 90%;
  }
  100% {
    background-position: 0% 11%;
  }
}
@-o-keyframes profile-bg {
  0% {
    background-position: 0% 11%;
  }
  50% {
    background-position: 100% 90%;
  }
  100% {
    background-position: 0% 11%;
  }
}
@keyframes profile-bg {
  0% {
    background-position: 0% 11%;
  }
  50% {
    background-position: 100% 90%;
  }
  100% {
    background-position: 0% 11%;
  }
}

.user-information-content-image .user-image {
  width: 74px;
  height: 74px;
  position: relative;
  margin: 0 auto 10px;
  border-radius: 90px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-color: #bebebe;
}

.user-information-content-image .user-image img,
.user-info-wrapper .default-wrapper-main-image {
  width: 74px;
  height: 74px;
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
  top: -7px;
  right: 0px;
  margin-left: -15px;
}

.user-information-content > p {
  font-size: 22px;
  font-weight: 500;
  color: #313a43;
  direction: rtl;
  padding-top: 12px;
}

.user-information-content p.user-position {
  font-size: 16px;
  font-weight: 500;
  color: #777;
}

p.user-valid-text {
  font-size: 16px;
  font-weight: 500;
  color: #00c569;
}

p.info-text {
  color: #777;
  font-size: 15px;
  padding-top: 3px;
  direction: rtl;
}

/* stars styles */

.stars-wrapper {
  padding-right: 5px;
}

.rating-stars {
  margin: 0 10px 0 2px;
  text-align: center;
}

.rating-stars p > span {
  position: relative;
  display: inline-block;
  margin-left: 6px;
}

.rating-stars p > span i {
  position: absolute;
  left: 0px;
  font-size: 19px;
  z-index: 0;
  top: 2px;
  color: #bdc4cc;
}

.rating-stars p > span > span {
  display: block;
  position: relative;
  z-index: 1;
  font-size: 11px;
  width: 18px;
  text-align: center;
  margin-left: 2px;
  padding-top: 3px;
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

.user-data-wrapper {
  border-radius: 12px;
  background: #fafafa;
  margin: 15px 0;
}

.user-data-wrapper {
  padding: 20px 0;
}

.user-data-wrapper ul {
  padding: 0 15px;
}

.user-data-wrapper li {
  overflow: hidden;
  padding-bottom: 20px;
}

.user-data-wrapper .icon-wrapper {
  float: right;
  text-align: center;
  width: 25px;
  font-size: 21px;
  color: #777;
}

.user-data-wrapper .icon-wrapper i.fa-award {
  font-size: 24px;
}

.rating-section {
  margin-right: 10px;
  float: right;
}

.rating-section > span {
  font-size: 16px;
  color: #777;
  font-weight: 400;
  position: relative;
  top: 4px;
}

.rating-section > span.brand-text {
  font-size: 15px;
  letter-spacing: 1px;
}

.verified-user {
  font-size: 21px;
  color: initial;
}

.verified-user::before {
  top: 5px;
}

.gray-text {
  color: #777 !important;
}

.user-info-actions > .green-button {
  direction: rtl;
  font-size: 18px;
  font-weight: 500;
  border-width: 1px;
}

.user-info-actions > .green-button i {
  position: relative;
  top: 2px;
}

.description-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 9px;
}

.user-description-wrapper {
  margin: 30px auto;
  float: right;
  width: 100%;
}

#user-description {
  font-size: 15px;
  color: #777;
  font-weight: 300;
  line-height: 1.618;
  direction: rtl;
}

#user-description.collapse[aria-expanded="false"] {
  display: block;
  height: 75px !important;
  overflow: hidden;
  font-size: 15px;
  color: #777;
}

#user-description.collapsing[aria-expanded="false"] {
  height: 75px !important;
}

a#note-close {
  color: #1da1f2;
  font-weight: 300;
  margin-top: 3px;
  display: inline-block;
}

a.collapsed:after {
  content: "مشاهده بیشتر +";
}

a#note-close:not(.collapsed):after {
  content: "بستن -";
}

.default-image-info {
  width: calc(100% - 105px);
}

@media screen and (max-width: 1199px) {
  .user-link-wrapper {
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
  }

  .user-link-wrapper > a,
  .user-link-wrapper > div {
    flex: 1;
  }

  .user-link-wrapper .user-info-actions {
    width: 100%;
    padding: 0 6px 0 15px;
  }

  .user-link-wrapper .user-info-actions > button {
    max-width: 330px;
    float: right;
  }

  .default-button-user-item {
    height: 20px;
    margin-top: 27px;
  }

  .user-info-section-wrapper {
    margin-bottom: 50px;
    overflow: hidden;
    padding: 0;
  }

  .user-info-wrapper,
  .user-info-wrapper.active {
    float: right;
    width: 100%;
  }

  .user-information-content-image .user-image,
  .user-information-content-image .user-image img,
  .user-info-wrapper .default-wrapper-main-image {
    width: 70px;
    height: 70px;
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
}

@media screen and (max-width: 767px) {
  .user-link-wrapper {
    display: block;
  }

  .user-data-wrapper ul {
    padding: 0 5px;
  }

  .user-info-wrapper.active {
    padding: 15px 10px;
  }

  .user-info-section-wrapper {
    padding: 0 15px;
    margin-top: 0;
  }

  .user-info-actions {
    width: 100%;
  }

  .user-information-content-image {
    min-width: 50px;
  }

  .user-information-content p.stars-wrapper > span {
    padding-top: 0;
    margin: 0 1px;
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

  .default-image-info {
    text-align: center;

    margin: 15px auto;

    padding: 0;
  }
}

@media screen and (max-width: 374px) {
  .more-info {
    top: 21px;
  }
  .user-info-wrapper,
  .user-info-wrapper.active {
    padding: 10px 15px;
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
      <div class="user-link-wrapper">
        <router-link
          :to="'/profile/' + $parent.product.user_info.user_name"
          class="user-information-link text-rtl"
        >
          <div class="user-information-content-image">
            <div
              class="user-image"
              v-if="$parent.product.profile_info.profile_photo"
              :style="{
                backgroundImage:
                  'url(' +
                  base +
                  'storage/' +
                  $parent.product.profile_info.profile_photo +
                  ')',
              }"
            >
              <img
                class="hidden"
                loading="lazy"
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
            </p>
            <p
              v-if="$parent.product.user_info.active_pakage_type == 3"
              class="user-valid-text"
            >
              فروشنده ویژه
            </p>
            <p v-else class="user-position">فروشنده</p>
          </div>

          <div class="user-info-actions text-rtl hidden-xs hidden-lg">
            <button
              v-if="
                !$parent.isMyProfile && $parent.updatedCurrentUser.user_info
              "
              @click.prevent="$parent.openChatModal($parent.product)"
              class="green-button green-button-alt"
            >
              <i class="fa fa-comment-alt"></i>

              ارسال پیام
            </button>
            <button
              v-else-if="
                !$parent.isMyProfile && !$parent.updatedCurrentUser.user_info
              "
              @click.prevent="$parent.loginModal(true)"
              class="green-button green-button-alt"
            >
              <i class="fa fa-comment-alt"></i>

              ارسال پیام
            </button>

            <router-link
              v-else-if="$parent.userType == 0"
              :to="{ name: 'profileBasicBuyer' }"
              class="green-button"
            >
              <i class="fa fa-pencil-alt"></i>
              ویرایش پروفایل
            </router-link>

            <router-link
              v-else-if="$parent.userType == 1"
              :to="{ name: 'profileBasicSeller' }"
              class="green-button"
            >
              <i class="fa fa-pencil-alt"></i>
              ویرایش پروفایل
            </router-link>
          </div>
        </router-link>
        <div class="user-data-wrapper text-rtl col-xs-12">
          <ul>
            <li v-if="$parent.product.user_info.review_info.avg_score">
              <div class="icon-wrapper">
                <i class="fa fa-star"> </i>
              </div>
              <div class="content-wrapper rating-section">
                <span
                  class="pull-right"
                  v-text="$parent.product.user_info.review_info.avg_score"
                ></span>
                <div class="rating-stars pull-right">
                  <p class="stars-wrapper">
                    <span v-for="(star, index) in 5" :key="index">
                      <span v-text="index + 1"></span>

                      <i
                        class="fa fa-star"
                        :class="{ 'yellow-text': index < $parent.starScore }"
                      ></i>
                    </span>
                  </p>
                </div>
                <span
                  class="pull-right brand-text"
                  v-text="
                    '(' +
                    $parent.product.user_info.review_info.total_count +
                    'نظر)'
                  "
                >
                </span>
              </div>
            </li>
            <!-- <li>
              <div class="icon-wrapper">
                <i class="fa fa-award"> </i>
              </div>
              <div class="content-wrapper rating-section">
                <p
                  v-if="$parent.product.user_info.response_rate"
                  class="info-text"
                >
                  اعتبار کاربر
                  <span
                    class="light-green-text"
                    v-text="$parent.product.user_info.response_rate"
                  ></span>
                </p>
              </div>
            </li> -->
            <li v-if="$parent.product.user_info.response_rate">
              <div class="icon-wrapper">
                <i class="fa fa-exchange-alt"> </i>
              </div>
              <div class="content-wrapper rating-section">
                <p
                  v-if="$parent.product.user_info.response_rate"
                  class="info-text"
                >
                  احتمال پاسخ گویی
                  <span
                    class="red-text"
                    v-text="$parent.product.user_info.response_rate + '%'"
                  ></span>
                </p>
              </div>
            </li>
            <li>
              <div class="icon-wrapper">
                <button
                  :class="[
                    $parent.product.user_info.is_verified
                      ? 'blue-text'
                      : 'gray-text',
                  ]"
                  @click.prevent
                  class="verified-user"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="bottom"
                  :data-content="
                    $parent.product.user_info.is_verified
                      ? $parent.verifiedUserContent
                      : `<div class='tooltip-wrapper text-rtl'>اطلاعات هویتی این کاربر احراز نشده است.<br/><a href='/verification'>اطلاعات بیشتر</a> </div>`
                  "
                >
                  <i class="fa fa-certificate"></i>
                </button>
              </div>
              <div class="content-wrapper rating-section">
                <span
                  class="blue-text"
                  v-if="$parent.product.user_info.is_verified"
                  v-text="'احراز هویت شده'"
                ></span>
                <span v-else v-text="'احراز هویت نشده'"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-info-actions text-rtl hidden-sm hidden-md">
        <button
          v-if="!$parent.isMyProfile && $parent.updatedCurrentUser.user_info"
          @click.prevent="$parent.openChatModal($parent.product)"
          class="green-button green-button-alt"
        >
          <i class="fa fa-comment-alt"></i>

          ارسال پیام
        </button>
        <button
          v-else-if="
            !$parent.isMyProfile && !$parent.updatedCurrentUser.user_info
          "
          @click.prevent="$parent.loginModal(true)"
          class="green-button green-button-alt"
        >
          <i class="fa fa-comment-alt"></i>

          ارسال پیام
        </button>

        <router-link
          v-else-if="$parent.userType == 0"
          :to="{ name: 'profileBasicBuyer' }"
          class="green-button"
        >
          <i class="fa fa-pencil-alt"></i>
          ویرایش پروفایل
        </router-link>

        <router-link
          v-else-if="$parent.userType == 1"
          :to="{ name: 'profileBasicSeller' }"
          class="green-button"
        >
          <i class="fa fa-pencil-alt"></i>
          ویرایش پروفایل
        </router-link>
      </div>
      <div
        v-if="$parent.product.profile_info.profile_description"
        class="user-description-wrapper text-right"
      >
        <p class="description-title">توضیحات فروشنده</p>
        <p
          id="user-description"
          class="user-description collapse"
          aria-expanded="false"
        >
          <span
            v-text="$parent.product.profile_info.profile_description"
          ></span>
        </p>
        <a
          role="button"
          class="collapsed"
          id="note-close"
          data-toggle="collapse"
          href="#user-description"
          aria-expanded="false"
        ></a>
      </div>
    </div>

    <div class="user-info-wrapper default-user-info-wrapper wrapper-bg" v-else>
      <div
        class="
          default-wrapper-main-image
          pull-right
          placeholder-content
          text-center
        "
      ></div>

      <div class="default-image-info text-rtl text-right margin-15 pull-right">
        <span
          class="placeholder-content content-default-width inline-block"
        ></span>
        <span
          class="placeholder-content content-half-width inline-block"
        ></span>
      </div>
      <div class="user-data-wrapper text-rtl col-xs-12">
        <ul>
          <li>
            <div class="text-right">
              <span
                class="placeholder-content small-icon pull-right inline-block"
              ></span>
              <span
                class="
                  placeholder-content
                  content-default-width
                  margin-h-10 margin-v-5
                  inline-block
                "
              ></span>
            </div>
          </li>
          <li>
            <div class="text-right">
              <span
                class="placeholder-content small-icon pull-right inline-block"
              ></span>
              <span
                class="
                  placeholder-content
                  content-default-width
                  margin-h-10 margin-v-5
                  inline-block
                "
              ></span>
            </div>
          </li>
          <li>
            <div class="text-right">
              <span
                class="placeholder-content small-icon pull-right inline-block"
              ></span>
              <span
                class="
                  placeholder-content
                  content-default-width
                  margin-h-10 margin-v-5
                  inline-block
                "
              ></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="default-user-action-buttons">
        <div
          class="
            placeholder-content
            default-button-full-with
            h-45
            hidden-xs hidden-md hidden-sm
          "
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
  data() {
    return {
      base: "",
    };
  },
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
    userDescriptionStatus() {
      let wrapperDescriptionHeight = $("#user-description").height();
      let descriptionHeight = $("#user-description span").height();
      if (wrapperDescriptionHeight >= descriptionHeight) {
        $("#note-close").css("display", "none");
      } else {
        $("#note-close").css("display", "block");
      }
    },
  },
  mounted() {
    $(window).on("resize", (size) => {
      this.userDescriptionStatus();
    });
    this.base = getBase();
  },
  watch: {
    "$parent.product.user_info"() {
      if (this.$parent.product.user_info) {
        this.$nextTick(() => {
          this.activeComponentTooltip();
          this.userDescriptionStatus();
        });
      }
    },
  },
};
</script>
