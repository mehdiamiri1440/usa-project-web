<style scoped>
.form-check-wrapper {
  direction: rtl;
}

.report-form textarea {
  max-width: 600px;

  margin: 0px auto;

  height: 110px;

  max-height: 170px;

  border-radius: 5px;

  direction: rtl;
}

.main-text {
  text-align: center;
  /* margin: 20px 0 40px; */
}
.form-check-wrapper button {
  width: 100%;

  border: none;

  background: none;

  border-bottom: 1px solid #eee;

  text-align: right;

  padding: 12px 15px 13px;
}
.form-check-wrapper button:hover {
  background: #fafafa;
  cursor: pointer;
}

.form-check-wrapper li {
  position: relative;
}

.form-check-wrapper li:last-of-type button {
  border: none;
}
.form-check-wrapper li i {
  position: absolute;

  top: 15px;

  left: 20px;

  font-size: 18px;

  color: #777;
}

.loading-list {
  padding: 90px 0 130px;
}
</style>

<template>
  <div class="row">
    <div class="main-text">
      <ul v-if="reportOptions" class="form-check-wrapper">
        <li v-for="(item, index) in reportOptions" :key="index">
          <button
            class="default-button-list"
            @click.prevent="
              $parent.checkReportSubmit(item.id, item.is_description_needed)
            "
          >
            {{ item.option_text }}
          </button>
          <i class="fa fa-angle-left"></i>
        </li>
      </ul>

      <div v-else class="loading-list">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { eventBus } from "../../../../../router/router.js";

export default {
  data: function () {
    return {
      reportOptions: "",
      textsData: {
        reviewItems: [],
        reviewText: "",
      },
    };
  },
  methods: {
    init: function () {
      let self = this;
      axios.post("/get_report_options").then(function (response) {
        self.reportOptions = response.data.options;
      });
    },
  },
  mounted: function () {
    $("#report-modal").on("show.bs.modal", (e) => {
      this.handleBackKeys();
      if (!this.reportOptions) {
        this.init();
      }
    });
  },
};
</script>
