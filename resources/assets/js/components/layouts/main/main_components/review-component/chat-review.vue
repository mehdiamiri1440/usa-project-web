<style scoped>
/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

.user-image {
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 45px;
  overflow: hidden;
}

.user-name {
  text-align: center;
  font-size: 18px;
  color: #474747;
  line-height: 1.618;
  font-weight: bold;
  margin-top: 10px;
}

.main-text p {
  font-size: 15px;
  color: #777;
  text-align: right;
  margin: 15px auto 0;
}

.main-text > p {
  font-weight: 800;
  font-size: 15px;
  color: #777;
  text-align: center;
  margin: 15px auto 0;
  line-height: 1.618;
}

.main-text {
  text-align: center;
  margin: 0 0 20px;
}

/* rate styles */

.rate {
  padding: 0px;

  margin: 0 auto;

  overflow: hidden;

  width: 260px;
  height: 60px;
}

.rate:not(:checked) > input {
  position: absolute;
  opacity: 0;
  z-index: -1;
  /* top: -9999px; */
}
.rate:not(:checked) > label {
  float: left;

  width: 45px;

  overflow: hidden;

  white-space: nowrap;

  cursor: pointer;

  font-size: 41px;

  color: #ccc;

  text-align: center;

  height: 46px;

  margin-left: 8px;
}
.rate:not(:checked) > label:first-of-type {
  margin-left: 0;
}
.rate:not(:checked) > label:before {
  content: "\f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}

.rate > input:checked ~ label {
  color: #ffbb00;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #fbca1e;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #fbca1e;
}

.rate label::after {
  position: relative;

  color: #777;

  font-size: 20px;

  top: -35px;

  width: 100%;

  text-align: center;

  display: block;
}
#lable-star5::after {
  content: "5";
}

#lable-star4::after {
  content: "4";
}

#lable-star3::after {
  content: "3";
}

#lable-star2::after {
  content: "2";
}

#lable-star1::after {
  content: "1";
}

.form-wrapper {
  padding: 0 10px;
}
.chat-report-form-wrapper {
  direction: rtl;

  overflow: hidden;
}

.chat-report-form-wrapper textarea {
  max-width: 600px;

  margin: 15px auto 0px;

  height: 110px;

  max-height: 170px;

  border-radius: 5px;

  background: #fff;
}

.report-button-wrapper .green .review-button i {
  color: #ffbb00;
}

/* end rate styles  */

.error-input {
  border: 1px solid #e41c39;
}
.main-text p.error-text {
  font-size: 14px;
  font-weight: 400;
  height: 15px;
  margin-top: 10px;
}
.btn-disable {
  background: #dbdbdb;
}

.hint-reviews {
  display: flex;
  justify-content: space-between;
  max-width: 272px;
  margin: 0 auto;
  direction: rtl;
  flex-direction: row-reverse;
  font-size: 13px;
  color: #bebebe;
  padding-right: 7px;
  font-weight: 500;
}

@media screen and (max-width: 1366px) {
  .rate {
    width: 217px;
  }
  .rate:not(:checked) > label {
    width: 40px;
    font-size: 35px;
    height: 44px;
    margin-left: 4px;
  }
  .rate label::after {
    font-size: 17px;
    top: -30px;
  }

  .hint-reviews {
    max-width: 233px;
  }
}
</style>

<template>
  <div class="rate-score-wrapper row">
    <div class="main-text">
      <p>به این کاربر از 1 تا 5 امتیاز دهید</p>

      <div class="rate">
        <input
          type="radio"
          id="chatStar5"
          name="rate"
          value="5"
          v-model="reviewData.rate"
        />
        <label
          @click="showReviewText()"
          id="lable-star5"
          for="chatStar5"
          title="5"
        ></label>
        <input
          type="radio"
          id="chatStar4"
          name="rate"
          value="4"
          v-model="reviewData.rate"
        />
        <label
          @click="showReviewText()"
          id="lable-star4"
          for="chatStar4"
          title="4"
        ></label>
        <input
          type="radio"
          id="chatStar3"
          name="rate"
          value="3"
          v-model="reviewData.rate"
        />
        <label
          @click="showReviewText()"
          id="lable-star3"
          for="chatStar3"
          title="3"
        ></label>
        <input
          type="radio"
          id="chatStar2"
          name="rate"
          value="2"
          v-model="reviewData.rate"
        />
        <label
          @click="showReviewText()"
          id="lable-star2"
          for="chatStar2"
          title="2"
        ></label>
        <input
          type="radio"
          id="chatStar1"
          name="rate"
          value="1"
          v-model="reviewData.rate"
        />
        <label
          @click="showReviewText()"
          id="lable-star1"
          for="chatStar1"
          title="1"
        ></label>
      </div>
      <div class="hint-reviews">
        <span>خیلی خوب</span>
        <span>خیلی بد</span>
      </div>
      <div class="chat-report-form-wrapper">
        <div id="chat-report-form" class="form-wrapper collapse">
          <p>
            نظر خود را درباره
            <span
              class="light-green-text"
              v-if="userFullName"
              v-text="userFullName"
            ></span>
            <span class="light-green-text" v-else>این کاربر</span>
            اینجا بنویسید
          </p>
          <textarea
            placeholder="نظرتان درباره این کاربر را با بقیه به اشتراک بگذارید..."
            v-model="reviewData.reviewText"
            :class="{ 'error-input': errors.reviewText }"
          ></textarea>
        </div>
        <p class="red-text error-text">
          <span
            v-if="errors.reviewText || errors.reviewData"
            v-text="errors.reviewText || errors.reviewData"
          ></span>
        </p>
        <div class="report-button-wrapper">
          <button
            class="green-button register-report hover-effect"
            @click.prevent="submitReview()"
            :class="{
              'btn-disable':
                errors.reviewText ||
                errors.reviewData ||
                (!reviewData.reviewText && !reviewData.rate) ||
                submitLoader,
            }"
          >
            ثبت نظر
          </button>
          <!-- :disabled="$parent.submitLoader" -->
        </div>
      </div>
    </div>
    <!-- <FinalStep v-if="$parent.reviewCurrentStep == 1" /> -->
  </div>
</template>

<script>
// import StartStep from "./review-steps/start-step";
// import ReviewStep from "./review-steps/review-step";
// import ReviewDescription from "./review-steps/review-description";
// import FinalStep from "./review-steps/final-step";
export default {
  props: ["userFullName", "userId"],
  data: function () {
    return {
      reviewData: {
        rate: "",
        reviewText: "",
      },
      errors: {
        reviewData: "",
        reviewText: "",
      },
      submitLoader: false,
    };
  },
  methods: {
    reviewSteps: function (step) {
      this.$parent.reviewCurrentStep = step;
    },
    showReviewText: function () {
      $("#chat-report-form").collapse("show");
    },
    resetData: function () {
      let self = this;
      this.emptyErros();
      this.reviewData = {
        rate: "",
        reviewText: "",
      };
      $("#chat-report-form").collapse("hide");
    },
    reviewResetData: function () {
      $("#review-modal").modal("hide");
      this.resetData();
    },
    emptyErros: function () {
      this.errors = {
        reviewData: "",
        reviewText: "",
      };
    },
    reviewTextValidator: function (reviewText) {
      this.errors.reviewText = "";

      if (reviewText != "") {
        if (
          !this.validateRegx(
            reviewText,
            /^[\u0600-\u06FF\a-zA-z\s_,.:/;()+-\d]+$/
          )
        ) {
          this.errors.reviewText = "توضیحات شامل کاراکتر های غیرمجاز است";
        }
      }
    },
    validateRegx: function (input, regx) {
      return regx.test(input);
    },
    submitReview: function () {
      let self = this;
      this.reviewTextValidator(self.reviewData.reviewText);
      if (self.reviewData.rate == "" && self.reviewData.reviewText == "") {
        this.errors.reviewData = "میزان رضایت یا نظر خود را وارد کنید";
      }
      if (!self.errors.reviewData && !self.errors.reviewText) {
        this.registerReview();
      }
    },
    registerReview: function () {
      let self = this;
      this.submitLoader = true;

      let reviewObg = {
        user_id: self.userId,
      };

      if (self.reviewData.rate) {
        reviewObg.rating_score = self.reviewData.rate;
      }
      if (self.reviewData.reviewText) {
        reviewObg.text = self.reviewData.reviewText;
      }

      axios.post("/profile/add-comment", reviewObg).then(function (response) {
        self.submitLoader = false;
        if (response.data.status == true) {
          // self.$parent.isUserAuthorizedToPostComment();
          self.resetData();
          if (reviewObg.text) {
            self.$parent.successMessage =
              "نظر شما با موفقیت ثبت و پس از تایید نمایش داده خواهد شد";
          } else {
            self.$parent.successMessage = "نظر شما با موفقیت ثبت شد";
          }
          self.reviewSteps(1);
          // show success modal
        } else {
          self.errors.reviewData = "خطایی رخ داده است لطفا دوباره تلاش کنید";
        }
      });
    },
    handleBackBtnClickOnDevices: function () {
      let self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        self.reviewResetData();
      });
    },
  },
  watch: {
    "reviewData.rate": function () {
      this.emptyErros();
    },
    "reviewData.reviewText": function (value) {
      this.emptyErros();
      this.reviewTextValidator(value);
    },
  },
};
</script>
