<style scoped>
.modal-content {
  overflow: hidden;
}
.close-modal {
  font-size: 20px;

  color: red;

  float: right;

  display: block;

  padding-left: 15px;
}

.modal-title {
  float: right;
  font-size: 14px;
  font-weight: 400;
  color: #474747;
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
    <div id="review-modal" class="review-modal modal fade" tabindex="-1" role="dialog">
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
            <ReviewStep v-if="$parent.reviewCurrentStep == 1" />
            <ReviewDescription v-if="$parent.reviewCurrentStep == 2" />
            <FinalStep v-if="$parent.reviewCurrentStep == 3" />
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
import ReviewStep from "./review-steps/review-step";
import ReviewDescription from "./review-steps/review-description";
import FinalStep from "./review-steps/final-step";
export default {
  props: ["reviewUserData"],
  components: {
    StartStep,
    ReviewStep,
    ReviewDescription,
    FinalStep
  },
  data: function() {
    return {
      reviewData: {
        deal: "",
        stars: "",
        reviewItems: "",
        reviewText: ""
      }
    };
  },
  methods: {
    init: function() {
      var self = this;

      $("#review-modal").on("hide.bs.modal", function(e) {
        self.resetData();
      });
    },
    reviewSteps: function(step, data) {
      switch (step) {
        case 1:
          this.reviewData.deal = data;
          this.$parent.reviewCurrentStep = step;
          break;
        case 2:
          this.reviewData.stars = data;
          this.$parent.reviewCurrentStep = step;
          break;
        case 3:
          this.reviewData.reviewItems = data.reviewItems;
          this.reviewData.reviewText = data.reviewText;
          this.$parent.reviewCurrentStep = step;
          break;
        default:
          this.$parent.reviewCurrentStep = 0;
          break;
      }
    },
    resetData: function() {
      var self = this;

      setTimeout(function() {
        this.reviewData = {
          deal: "",
          stars: "",
          reviewItems: "",
          reviewText: ""
        };
        self.$parent.reviewUserData = "";
        self.reviewSteps(0, null);
      }, 200);
    },
    reviewResetData: function() {
      $("#review-modal").modal("hide");
      this.resetData();
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

