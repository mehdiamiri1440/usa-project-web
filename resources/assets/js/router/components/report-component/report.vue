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
    <div id="report-modal" class="report-modal modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-modal" @click.prevent="reportResetData()">
              <i class="fa fa-times"></i>
            </a>

            <div class="modal-title" v-text="'گزارش تخلف'"></div>
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
  components: {
    ReportContent,
    ReportDescription,
    FinalStep
  },
  data: function() {
    return {
      errors: {
        reportText: ""
      },
      reportData: {
        reportTitle: "",
        reportText: ""
      },
      reportCurrentStep: 0
    };
  },
  methods: {
    init: function() {
      var self = this;

      $("#report-modal").on("hide.bs.modal", function(e) {
        self.resetData();
      });
    },
    checkReportSubmit: function(reportTitle, textRequired) {
      this.reportData.reportTitle = reportTitle;
      console.log(reportTitle, textRequired);
      if (textRequired) {
        this.reportCurrentStep = 1;
      } else {
        this.reportCurrentStep = 2;
      }
    },
    reportTextCheck: function() {
      if (this.reportData.reportText) {
        console.log("submit");
        this.reportCurrentStep = 2;
      } else {
        this.errors.reportText = "لطفا توضیحات مربوط به گزارش خود را بنویسید";
      }
    },
    resetData: function() {
      var self = this;

      setTimeout(function() {
        self.reportData = {
          reportTitle: "",
          reportText: ""
        };
        self.reportCurrentStep = 0;
      }, 200);
    },
    reportResetData: function() {
      $("#report-modal").modal("hide");
      this.resetData();
    }
  },
  mounted: function() {
    this.init();
  },
  watch: {
    "reportData.reportText": function(value) {
      this.errors.reportText = "";
    }
  }
};
</script>

