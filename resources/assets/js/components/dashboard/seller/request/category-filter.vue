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

.modal-body {
  padding: 0 15px;
}
@media screen and (max-width: 768px) {
  #fitler-modal > div {
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
      id="fitler-modal"
      class="fitler-modal modal fade"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a
              class="close-modal"
              v-if="fitlerCurrentStep == 0"
              @click.prevent="fitlerResetData()"
            >
              <i class="fa fa-times"></i>
            </a>
            <a class="close-modal" v-else @click.prevent="resetData()">
              <i class="fa fa-arrow-right"></i>
            </a>

            <div class="modal-title">
              <span v-text="modalTitle"></span>
            </div>
          </div>
          <div class="modal-body col-xs-12">
            <fitler-content />
            <!-- <fitler-content-deep-two v-if="fitlerCurrentStep == 1" /> -->
            <!-- <FinalStep v-if="fitlerCurrentStep == 2" /> -->
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import FitlerContent from "./filter-modal-steps/filter-content";
// import FitlerContentDeepTwo from "./fitler-modal-steps/fitler-content-deep-two";

export default {
  components: {
    FitlerContent,
    // FitlerContentDeepTwo
  },
  data: function () {
    return {
      modalTitle: "دسته بندی ها",
      fitlerCurrentStep: 0,
      categories: "",
      categoryIndex: 0,
      dataList: [],
    };
  },
  methods: {
    init: function () {
      var self = this;
      axios
        .post("/get_category_list", {
          cascade_list: true,
        })
        .then(function (response) {
          self.categories = response.data.categories;
          self.dataList = self.categories;
        });

      $("#fitler-modal").on("show.bs.modal", function (e) {
        self.handleBackBtnClickOnDevices();
      });
      $("#fitler-modal").on("hide.bs.modal", function (e) {
        self.resetData();
      });
    },

    setList: function (index, name) {
      this.dataList = [];
      if (this.fitlerCurrentStep == 0) {
        this.categoryIndex = index;
        this.modalTitle = name;
        this.dataList = Object.values(
          this.categories[this.categoryIndex].subcategories
        );
        this.fitlerCurrentStep = 1;
      }
    },
    submitsubCategory(subCategory) {
      this.$parent.filterCategory = subCategory;
      this.fitlerResetData();
    },
    resetData: function () {
      setTimeout(() => {
        this.dataList = this.categories;
        this.fitlerCurrentStep = 0;
        this.modalTitle = "دسته بندی ها";
      }, 200);
    },
    fitlerResetData: function () {
      $("#fitler-modal").modal("hide");
      this.$parent.scrollToTop();
      this.resetData();
    },
    handleBackBtnClickOnDevices: function () {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        self.fitlerResetData();
      });
    },
    isDeviceMobile: function () {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted: function () {
    this.init();
  },
};
</script>
