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
  #categories-modal > div {
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
      id="categories-modal"
      class="categories-modal modal fade"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a
              class="close-modal"
              v-if="currentStep == 0"
              @click.prevent="resetModalData()"
            >
              <i class="fa fa-times"></i>
            </a>
            <a class="close-modal" v-else @click.prevent="currentStep--">
              <i class="fa fa-arrow-right"></i>
            </a>

            <div class="modal-title">
              <span v-if="currentStep == 0"> همه دسته ها </span>
              <span
                v-if="currentStep == 1"
                v-text="selectedCategory.category_name"
              >
              </span>
              <span
                v-if="currentStep == 2"
                v-text="selectedSubCategory.category_name"
              >
              </span>
            </div>
          </div>
          <div class="modal-body col-xs-12">
            <Categoreis v-if="currentStep == 0" />
            <SubCategories v-if="currentStep == 1" />
            <LastStep v-if="currentStep == 2" />
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import Categoreis from "./categories-steps/categories.vue";
import SubCategories from "./categories-steps/sub-categories.vue";
import LastStep from "./categories-steps/last-step.vue";

export default {
  props: ["reportedUserId", "categoryList", "modalSubCategory"],
  components: {
    Categoreis,
    SubCategories,
    LastStep,
  },
  data: function () {
    return {
      selectedCategory: {
        category_name: "",
      },
      subCategoriesData: "",
      selectedSubCategory: {
        category_name: "",
      },
      lastStepCategories: "",
      currentStep: 0,
    };
  },
  methods: {
    init: function () {
      var self = this;

      // self.handleBackBtnClickOnDevices();

      $("#categories-modal").on("hide.bs.modal", (e) => {
        self.resetData();
      });

      $("#categories-modal").on("show.bs.modal", (e) => {
        self.handleBackBtnClickOnDevices();
      });
    },
    resetData: function () {
      var self = this;
      setTimeout(() => {
        this.currentStep = 0;
      }, 200);
    },
    resetModalData: function () {
      $("#categories-modal").modal("hide");
      this.resetData();
    },
    handleBackBtnClickOnDevices: function () {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        self.resetModalData();
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
    selectedCategoryItem(category) {
      this.selectedCategory = category;
      this.subCategoriesData = Object.values(category.subcategories);
      this.currentStep++;
    },
    selectedSubCategoryItem(category) {
      this.selectedSubCategory = category;
      this.lastStepCategories = Object.values(category.subcategories);
      this.currentStep++;
    },
    submitCategory(category) {
      this.resetModalData();
      let url = this.getSubCategoryUrl(category);
      this.$parent.selectCategoryItem(category, url);
    },
    getSubCategoryUrl: function (t) {
      let url =
        "/product-list/category/" + t.category_name.split(" ").join("-");
      return url;
    },
  },
  mounted: function () {
    this.init();
  },
  watch: {
    modalSubCategory(item) {
      if (item) {
        this.selectedCategory = item;
        this.subCategoriesData = item.subcategories;
        this.currentStep = 1;
      }
    },
  },
};
</script>
