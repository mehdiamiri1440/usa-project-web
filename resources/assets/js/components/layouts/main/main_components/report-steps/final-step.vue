<style scoped>
.main-text p {
  font-weight: 800;
  font-size: 16px;
  color: #474747;
  text-align: center;
  margin: 15px auto;
}

.main-text {
  text-align: center;
  margin: 20px 0 40px;
}

.success-icon i {
  display: inline-block;

  font-size: 55px;

  color: #00c569;

  border: 1px solid;

  border-radius: 50px;

  width: 90px;

  height: 90px;

  padding-top: 18px;
}

p.small-text {
  padding: 15px;

  color: #777;

  font-size: 14px;

  font-weight: 400;

  direction: rtl;
}

@media screen and (max-width: 768px) {
  .success-icon {
    margin-top: 80px;
  }
}
</style>

<template>
  <div class="row">
    <div class="main-text">
      <div class="success-icon">
        <i class="fa fa-check"></i>
      </div>
      <p>از ثبت گزارش شما متشکریم</p>
      <p class="small-text">
        ثبت گزارش تخلفات به باسکول کمک می کند تا فضای امن تری برای انجام معاملات
        شما ایجاد کند.
      </p>
      <div class="report-button-wrapper">
        <button
          class="green-button register-report"
          @click.prevent="$parent.reportResetData()"
        >
          بستن
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      reportFormData: "",
      reportFormActive: false,
      stars: "",
    };
  },
};
</script>
