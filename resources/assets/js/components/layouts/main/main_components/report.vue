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
  #report-modal > div {
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
      id="report-modal"
      class="report-modal modal fade"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-modal" @click.prevent="reportResetData()">
              <i class="fa fa-times"></i>
            </a>

            <div class="modal-title">
              <span v-if="reportCurrentStep == 0">
                دلیل گزارش تخلف چیست؟
              </span>
              <span v-if="reportCurrentStep == 1">
                دلیل گزارش تخلف چیست؟
              </span>
              <span v-if="reportCurrentStep == 2">
                گزارش تخلف شما ثبت شد
              </span>
            </div>
          </div>
          <div class="modal-body col-xs-12">
            <ReportContent v-if="reportCurrentStep == 0" />
            <ReportDescription v-if="reportCurrentStep == 1" />
            <FinalStep v-if="reportCurrentStep == 2" />
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import ReportContent from "./report-steps/report-content";
import ReportDescription from "./report-steps/report-description";
import FinalStep from "./report-steps/final-step";

export default {
  props: ["reportedUserId"],
  components: {
    ReportContent,
    ReportDescription,
    FinalStep,
  },
  data: function () {
    return {
      errors: {
        reportText: "",
      },
      reportData: {
        reportTitle: "",
        reportText: "",
      },
      reportCurrentStep: 0,
      sendLinkActive: true,
    };
  },
  methods: {
    init: function () {
      var self = this;

      // self.handleBackBtnClickOnDevices();

      $("#report-modal").on("hide.bs.modal", function (e) {
        self.resetData();
      });

      $("#review-modal").on("show.bs.modal", function(e) {
        self.handleBackBtnClickOnDevices();
      });
    },
    checkReportSubmit: function (reportTitle, textRequired) {
      this.reportData.reportTitle = reportTitle;
      if (textRequired) {
        this.reportCurrentStep = 1;
      } else {
        this.sendReport();
      }
    },
    reportTextCheck: function () {
      if (this.reportData.reportText) {
        this.sendReport();
      } else {
        this.errors.reportText = "لطفا توضیحات مربوط به گزارش خود را بنویسید";
      }
    },
    sendReport: function () {
      let self = this;
      self.sendLinkActive = false;
      axios
        .post("/send_user_report", {
          reported_id: self.reportedUserId,
          option_id: self.reportData.reportTitle,
          description: self.reportData.reportText,
        })
        .then(function (response) {
          self.sendLinkActive = true;
          self.reportCurrentStep = 2;
        });
    },
    resetData: function () {
      var self = this;

      setTimeout(function () {
        self.reportData = {
          reportTitle: "",
          reportText: "",
        };
        self.reportCurrentStep = 0;
      }, 200);
    },
    reportResetData: function () {
      $("#report-modal").modal("hide");
      this.resetData();
    },
    handleBackBtnClickOnDevices: function () {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        self.reportResetData();
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
  watch: {
    "reportData.reportText": function (value) {
      this.errors.reportText = "";
    },
  },
};
</script>
