<style scoped>
.user-info-wrapper {
  height: 100%;
  overflow-y: scroll;
  background: #f6fbff;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.contact-wrapper .contact-body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.contact-wrapper .contact-body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.title-section {
  background: #f0f0f0;
  padding: 17px 10px 16px;
}

.title-section p {
  font-size: 16px;
  color: #777;
}

.user-image {
  width: 50px;
  height: 50px;
  float: right;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  margin-left: 10px;
  background-position: center;
  background-size: cover;
  background-color: #f2f2f2;
}

.user-contents {
  float: right;
  width: calc(100% - 60px);
  padding-top: 4px;
}

.user-contents p {
  font-size: 16px;
  color: #666666;
  font-weight: bold;
}

.user-contents p.response-rate {
  font-size: 14px;
  margin-top: 11px;
  color: #777;
}

.empty-response-rate {
  padding-top: 13px;
}

li.user-info,
li.user-items {
  float: right;
  width: 100%;
  padding: 25px 20px;
  border-bottom: 5px solid #f0f0f0;
  background: #fff;
}

.user-items ul {
  padding: 0;
}

.user-items ul li {
  color: #777;
  font-size: 15px;
  margin-bottom: 25px;
  float: right;
  width: 100%;
  transform: translateX(0);
  transition: 300ms;
}

.user-items ul li:last-of-type {
  margin-bottom: 0;
}

.user-items > ul > li > span {
  display: inline-block;
  padding-top: 9px;
}

.verified-user {
  line-height: 1;
  font-size: 25px;
  top: 5px;
  color: #cccccc;
}

.verified-user::before {
  top: 5px;
  left: 6px;
  font-size: 14px;
}

li.verified-user-wrpapper > span {
  padding-top: 11px;
  display: inline-block;
}

li.user-activity-item > span {
  padding-top: 12px;
  display: inline-block;
}

ul li.verified-user-wrpapper {
  color: #cccccc;
}
.verified-user-wrpapper.verified-user-active {
  color: #1da1f2;
}
.verified-user-wrpapper.verified-user-active p,
.verified-user-wrpapper.verified-user-active .verified-user {
  color: #1da1f2;
}

.icon-wrapper {
  margin-left: 10px;
  width: 31px;
  text-align: center;
  float: right;
}

.icon-wrapper > svg {
  height: 31px;
}

.cls-1 {
  fill: #666;
}
.cls-2 {
  fill: #666;
}

ul li.report-item button {
  width: 100%;
  text-align: right;
  padding: 0px 0 0;
  background: none;
  border: none;
  color: #e41c38;
}

.report-item button i {
  font-size: 21px;
}

.user-items ul li.report-item:hover {
  transform: translateX(-5px);
  transition: 300ms;
}

.spinner-wrapper {
  margin-top: 120px;
}

.spinner-border {
  width: 5.5rem;
  height: 5.5rem;
  border-width: 0.5rem;
  color: #00c569;
}

/* stars */

.profile-rating-box {
  border: 1px solid #f6f6f6;
  border-radius: 4px;
  width: 100%;
  max-width: 230px;
  margin: 30px auto;
  overflow: hidden;
}
.stars-wrapper {
  padding-right: 2px;
}
.rating-stars {
  width: calc(100% - 50px);
  padding: 7px 0 0;
  text-align: center;
}
.rating-stars p > span {
  position: relative;
  display: inline-block;
  margin-left: 5px;
}

.rating-stars p > span:last-of-type {
  margin-left: 0;
}

.rating-stars p > span i {
  position: absolute;
  left: 2px;
  font-size: 20px;
  z-index: 0;
  top: -4px;
  color: #bdc4cc;
}
.rating-stars p > span > span {
  display: block;
  position: relative;
  z-index: 1;
  font-size: 13px;
  width: 18px;
  text-align: center;
  margin-left: 5px;
  color: #777;
}
.rating-stars .review-count-wrapper {
  margin-top: 7px;
  color: #556080;
}
.rating-score {
  width: 50px;
  background: #f6f6f6;
  height: 100%;
  text-align: center;
  padding: 15px 0;
  font-size: 22px;
  font-weight: bold;
  color: #556080;
}

li.rating-item {
  border-bottom: 1px solid #f2f2f2;
}

li.score-item > span {
  padding-top: 10px;
  display: inline-block;
}

li.score-item i {
  font-size: 30px;
}
</style>

<template>
  <div class="user-info-wrapper">
    <div class="title-section">
      <p>اطلاعات کاربر</p>
    </div>

    <div class="main-section">
      <ul v-if="!$parent.userDataLoader">
        <li class="user-info">
          <div
            class="user-image"
            v-if="selectedContact.profile_photo"
            :style="{
              backgroundImage:
                'url(' +
                $parent.str +
                '/' +
                selectedContact.profile_photo +
                ')',
            }"
          ></div>
          <div
            class="user-image"
            v-else
            :style="{
              backgroundImage:
                'url(' + getBaseUrl() + 'assets/img/user-defult.png)',
            }"
          ></div>
          <div class="user-contents">
            <p
              :class="{
                'empty-response-rate':
                  !userStatistics.response_rate &&
                  userStatistics.response_rate == '0',
              }"
              v-text="
                selectedContact.first_name + ' ' + selectedContact.last_name
              "
            ></p>
            <p
              v-if="
                userStatistics.response_rate &&
                userStatistics.response_rate != '0'
              "
              class="response-rate"
            >
              احتمال پاسخگویی
              <span
                class="red-text"
                v-text="'%' + userStatistics.response_rate"
              >
              </span>
            </p>
          </div>
        </li>
        <li class="user-items col-xs-12">
          <div>
            <ul class="col-xs-12">
              <li v-if="userStatistics.reputation_score" class="score-item">
                <p class="icon-wrapper">
                  <i class="fa fa-award"></i>
                </p>
                <span class="">
                  اعتبار کاربر
                  <span class="light-green-text">
                    {{ userStatistics.reputation_score }}
                  </span>
                </span>
              </li>
              <li
                class="verified-user-wrpapper"
                :class="{
                  'verified-user-active': selectedContact.is_verified,
                }"
              >
                <p class="icon-wrapper">
                  <button
                    @click.prevent
                    class="verified-user"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="bottom"
                    :data-content="$store.state.routeStore.verifiedUserContent"
                  >
                    <i class="fa fa-certificate"></i>
                  </button>
                </p>
                <span
                  v-if="selectedContact.is_verified"
                  v-text="'احراز هویت شده'"
                ></span>
                <span v-else v-text="'احراز هویت نشده'"></span>
              </li>
              <!-- <li class="user-activity-item">
                <p class="icon-wrapper">
                  <svg
                    v-if="userData.user_info && userData.user_info.is_seller"
                    data-v-422a709e=""
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.511"
                    height="24.462"
                    viewBox="0 0 17.511 24.462"
                  >
                    <g
                      data-v-422a709e=""
                      id="Layer_1"
                      data-name="Layer 1"
                      transform="translate(0 0)"
                    >
                      <path
                        data-v-422a709e=""
                        id="Path_11"
                        data-name="Path 11"
                        d="M14.915,13.164l-3.6-1.043a.98.98,0,0,1-.7-.936V10.3a.318.318,0,0,0-.018-.1,3.474,3.474,0,0,0,1.183-2.611V6.03H14.35V5.138H11.774V3.582a3.482,3.482,0,1,0-6.964,0V5.138H2.185V6.03H4.811V7.586a3.474,3.474,0,0,0,1.155,2.588.318.318,0,0,0-.026.127v.885a.98.98,0,0,1-.7.936L1.634,13.164A2.275,2.275,0,0,0,0,15.339v4.316a.318.318,0,0,0,.637,0V15.339a1.635,1.635,0,0,1,1.175-1.564l1.282-.369v6.627a.478.478,0,1,0,.955,0v-6.7a.475.475,0,0,0-.041-.191l1.223-.354v1.465a1.517,1.517,0,0,0,1.539,1.491H9.764A1.517,1.517,0,0,0,11.3,14.252V12.781l1.248.361a.477.477,0,0,0-.015.118v6.773a.478.478,0,1,0,.955,0V13.415l1.246.361a1.635,1.635,0,0,1,1.175,1.563v4.316a.318.318,0,1,0,.637,0V15.339A2.275,2.275,0,0,0,14.915,13.164ZM5.448,3.582a2.845,2.845,0,1,1,5.69,0V5.138H5.448Zm0,4V6.03h5.69V7.586a2.845,2.845,0,1,1-5.69,0ZM9.764,15.1H6.771a.88.88,0,0,1-.9-.854V12.517a1.62,1.62,0,0,0,.708-1.333v-.573a3.471,3.471,0,0,0,3.4.02v.55a1.62,1.62,0,0,0,.694,1.324v1.742a.88.88,0,0,1-.9.858Z"
                        transform="translate(0 -0.1)"
                        class="cls-1"
                      ></path>
                      <path
                        data-v-422a709e=""
                        id="Path_12"
                        data-name="Path 12"
                        d="M101.307,118.036a2.068,2.068,0,0,0,1.911-1.314.318.318,0,1,0-.594-.231,1.414,1.414,0,0,1-2.64,0,.318.318,0,1,0-.594.231A2.068,2.068,0,0,0,101.307,118.036Z"
                        transform="translate(-93.039 -108.888)"
                        class="cls-1"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    v-else
                    data-v-64b62b6b=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.55"
                    height="20.411"
                    viewBox="0 0 16.55 20.411"
                  >
                    <path
                      data-v-64b62b6b=""
                      id="Path_7"
                      data-name="Path 7"
                      d="M15.781,12.574l-3.81-1.1a1.017,1.017,0,0,1-.2-.082.333.333,0,0,0-.16-.105,1.036,1.036,0,0,1-.388-.8V9.419a3.676,3.676,0,0,0,1.233-2.747V3.784a3.684,3.684,0,1,0-7.368,0V6.672A3.675,3.675,0,0,0,6.286,9.385v1.094a1.037,1.037,0,0,1-.745.991l-3.812,1.1A2.407,2.407,0,0,0,0,14.875v4.567a.337.337,0,1,0,.674,0V14.875a1.73,1.73,0,0,1,1.243-1.654l1.415-.409a.331.331,0,0,0,.026.032L5.17,14.656a1.38,1.38,0,0,0,1.781.149l.636-.453a1.213,1.213,0,0,0,.45.722L6.613,21.943a.526.526,0,0,0,.127.451l1.425,1.894.031.036a.819.819,0,0,0,1.157,0l.017-.017,1.442-1.915a.528.528,0,0,0,.123-.455L9.515,15.073a1.213,1.213,0,0,0,.449-.721l.636.453a1.38,1.38,0,0,0,1.781-.149l1.834-1.834,1.38.4a1.73,1.73,0,0,1,1.243,1.654v4.567a.337.337,0,0,0,.674,0V14.875A2.407,2.407,0,0,0,15.781,12.574ZM10.012,1.05l-.03-.024.037.017ZM5.766,6.674V4.89q.186.018.373.018A3.936,3.936,0,0,0,8.918,3.761L9.929,2.751a1.531,1.531,0,0,1,.795.466,2.382,2.382,0,0,0,1.062.616v2.84a3.01,3.01,0,1,1-6.021,0Zm3.01,3.684A3.661,3.661,0,0,0,10.554,9.9v.582a1.706,1.706,0,0,0,.411,1.106l-1.9,1.351a1.17,1.17,0,0,0-.58,0L6.561,11.568a1.705,1.705,0,0,0,.4-1.089V9.873a3.66,3.66,0,0,0,1.816.484Zm-2.219,3.9a.708.708,0,0,1-.914-.077L4.064,12.6l1.664-.482A1.685,1.685,0,0,0,6.013,12L7.86,13.319c-.007.009-.015.016-.022.025Zm3.7,7.75-1.4,1.855a.144.144,0,0,1-.179,0l-1.4-1.855,1.383-6.681c.034,0,.067.005.1.005a.67.67,0,0,0,.1-.005ZM11.9,14.178a.708.708,0,0,1-.913.076l-1.28-.911c-.007-.009-.015-.016-.022-.025l1.83-1.3a1.685,1.685,0,0,0,.264.1l1.7.491Z"
                      transform="translate(0 -0.1)"
                      class="cls-2"
                    ></path>
                    <path
                      data-v-64b62b6b=""
                      id="Path_8"
                      data-name="Path 8"
                      d="M199.657,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,199.657,230.69Z"
                      transform="translate(-185.887 -215.15)"
                      class="cls-1"
                    ></path>
                    <path
                      data-v-64b62b6b=""
                      id="Path_9"
                      data-name="Path 9"
                      d="M51.407,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,51.407,230.69Z"
                      transform="translate(-47.628 -215.15)"
                      class="cls-1"
                    ></path>
                    <path
                      data-v-64b62b6b=""
                      id="Path_10"
                      data-name="Path 10"
                      d="M101.82,98.128a2.188,2.188,0,0,0,2.022-1.39.337.337,0,1,0-.628-.244,1.5,1.5,0,0,1-2.793,0,.337.337,0,1,0-.628.244,2.188,2.188,0,0,0,2.028,1.39Z"
                      transform="translate(-93.045 -89.797)"
                      class="cls-1"
                    ></path>
                  </svg>
                </p>
                <span v-if="userData.user_info && userData.user_info.is_seller">
                  فروشنده
                </span>
                <span v-else> خریدار </span>
              </li> -->
              <li class="report-item">
                <button
                  @click.prevent="
                    $parent.activeReportModal(
                      $parent.selectedContact.contact_id
                    )
                  "
                >
                  <p class="icon-wrapper">
                    <i class="fa fa-exclamation-circle"></i>
                  </p>
                  <span>گزارش تخلف</span>
                </button>
              </li>
            </ul>
          </div>
        </li>
        <li class="col-xs-12 bg-white">
          <div
            class="profile-rating-box-wrapper hidden-xs"
            v-if="userStatistics.rating_info.avg_score"
          >
            <!-- v-if="
                  profileOwnerStatistics.rating_info.total_count > 0 &&
                  !statisticsLoader
                " -->
            <div class="profile-rating-box">
              <div class="rating-stars pull-left">
                <p class="stars-wrapper">
                  <span v-for="(star, index) in 5" :key="index">
                    <span v-text="index + 1"></span>

                    <i
                      class="fa fa-star"
                      :class="{
                        'yellow-text':
                          index < userStatistics.rating_info.avg_score,
                      }"
                    ></i>
                  </span>
                </p>
                <p class="review-count-wrapper">
                  <span v-text="userStatistics.rating_info.total_count"></span>
                  نظر ثبت شده است
                </p>
              </div>
              <span class="rating-score pull-right">
                <span v-text="userStatistics.rating_info.avg_score"></span>
              </span>
            </div>
          </div>
          <!-- <div class="col-xs-12 hidden-xs" v-else>
            <div class="placeholder-content content-full-width h-40">
              <p class="placeholder-stars">
                <span v-for="(star, index) in 5" :key="index">
                  <i class="fa fa-star"></i>
                </span>
              </p>
            </div>
          </div> -->
        </li>
        <li
          v-if="$store.state.messagesStore.userAllowedReview"
          class="col-xs-12"
        >
          <ChatReviewComponent
            :user-full-name="
              selectedContact.first_name + ' ' + selectedContact.last_name
            "
            :user-id="selectedContact.contact_id"
            v-if="reviewCurrentStep == 0"
          />
          <SuccessReviewComponent v-if="reviewCurrentStep == 1" />
        </li>
      </ul>

      <div v-else class="text-center spinner-wrapper">
        <div class="spinner-border">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
  </div>
</template>


<script >
import ChatReviewComponent from "../../layouts/main/main_components/review-component/chat-review";
import SuccessReviewComponent from "../../layouts/main/main_components/review-component/success-submit-chat-review";
export default {
  props: ["selectedContact"],
  components: {
    ChatReviewComponent,
    SuccessReviewComponent,
  },
  data: function () {
    return {
      userStatistics: "",
      reviewCurrentStep: 0,
      successMessage: "نظر شما با موفقیت ثبت شد",
    };
  },
  methods: {
    getBaseUrl() {
      return getBase();
    },
    init() {
      // if (!this.checkMobileWidth()) {
      this.isUserAuthorizedToPostComment();
      // }
    },
    checkMobileWidth() {
      if ($(window).width() <= 1199) {
        return true;
      } else {
        return false;
      }
    },
    isUserAuthorizedToPostComment: function () {
      let self = this;
      let userObg = {
        user_id: this.selectedContact.contact_id,
      };
      axios
        .post("/profile/is-user-authorized-to-post-comment", userObg)
        .then(function (response) {
          self.$parent.userAllowedReview = response.data.is_allowed;
          if (!self.checkMobileWidth()) {
            self.getUserData();
          }
        });
    },
    getUserData() {
      this.$parent.userDataLoader = true;
      this.reviewCurrentStep = 0;

      const self = this;
      axios
        .post("/get_user_statistics_by_user_name", {
          user_name: self.selectedContact.user_name,
        })
        .then((statisticsResponse) => {
          self.userStatistics = statisticsResponse.data.statistics;
          self.activeComponentTooltip();
          self.$parent.userDataLoader = false;
        })
        .catch((err) => {
          //
        });
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
    this.init();
  },
  watch: {
    "$parent.selectedContact"(isItemActive) {
      if (isItemActive) {
        this.init();
      } else {
        this.$parent.userDataLoader = true;
      }
    },
    "$parent.userDataLoader"(userDataLoader) {
      if (!userDataLoader) {
        setTimeout(() => {
          this.activeComponentTooltip();
        }, 50);
      }
    },
  },
};
</script>
