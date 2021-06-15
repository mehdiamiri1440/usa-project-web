<style scoped>
.modal-dialog {
  width: 400px;
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

@media screen and (max-width: 768px) {
  #review-modal > div {
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
</style>

<template>
  <div class="container">
    <div
      id="review-modal"
      class="review-modal modal fade"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-modal" @click.prevent="reviewResetData()">
              <i class="fa fa-times"></i>
            </a>

            <div class="modal-title" v-text="'ارسال نظر '"></div>
          </div>
          <div class="modal-body col-xs-12">
            <StartStep v-if="$parent.reviewCurrentStep == 0" />
            <!-- <ReviewStep v-if="$parent.reviewCurrentStep == 1" />
            <ReviewDescription v-if="$parent.reviewCurrentStep == 2" />-->
            <FinalStep v-if="$parent.reviewCurrentStep == 1" />
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import StartStep from "./review-steps/start-step";
// import ReviewStep from "./review-steps/review-step";
// import ReviewDescription from "./review-steps/review-description";
import FinalStep from "./review-steps/final-step";
export default {
  components: {
    StartStep,
    FinalStep,
  },
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
      successMessage: "",
    };
  },
  methods: {
    init: function () {
      let self = this;

      $("#review-modal").on("hide.bs.modal", function (e) {
        setTimeout(() => {
          self.reviewSteps(0);
        }, 200);
        self.resetData();
      });

      $("#review-modal").on("show.bs.modal", function (e) {
        self.handleBackBtnClickOnDevices();
      });
    },
    reviewSteps: function (step) {
      this.$parent.reviewCurrentStep = step;
    },
    resetData: function () {
      let self = this;
      this.emptyErros();
      this.reviewData = {
        rate: "",
        reviewText: "",
      };
      $("#report-form").collapse("hide");
      setTimeout(() => {
        this.$store.state.routeStore.reviewUserData = "";
      }, 200);
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
            /^(?!.*[(@#!%$&*)])[s\u{0600}-\u{06FF}\u{060C}\u{061B}\u{061F}\u{0640}\u{066A}\u{066B}\u{066C}\u{0E}\u{0A}_.-،:()A-Za-z0-9 ]+$/u
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
        user_id: this.$store.state.routeStore.reviewUserData.id,
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
          self.$parent.isUserAuthorizedToPostComment();
          self.resetData();
          if (reviewObg.text) {
            self.successMessage =
              "نظر شما با موفقیت ثبت و پس از تایید نمایش داده خواهد شد";
          } else {
            self.successMessage = "نظر شما با موفقیت ثبت شد";
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
  mounted: function () {
    this.init();
  },
  watch: {
    "reviewData.rate": function () {
      this.emptyErros();
    },
    "reviewData.reviewText": function () {
      this.emptyErros();
    },
  },
};
</script>
