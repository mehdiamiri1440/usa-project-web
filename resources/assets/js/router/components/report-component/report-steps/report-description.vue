<style scoped>
.buttons-wrapper {
  display: inline-block;
  margin-bottom: 15px;
}

.report-form {
  direction: rtl;

  overflow: hidden;
}

.report-form .form-wrapper {
  padding: 15px;
}

.report-form textarea {
  max-width: 600px;

  margin: 0px auto;

  height: 110px;

  max-height: 170px;

  border-radius: 5px;
}

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

.buttons-wrapper .green-button {
  background: #fff;

  color: #777;

  border: 1px solid #00c569;

  font-size: 16px;

  font-weight: bold;

  padding: 5px;
  margin: 15px;
  width: 138px;
}

.green-button.disabled {
  background: #eee;
}

p.text-error {
  color: red;
  font-size: 14px;
  font-weight: 400;
}

textarea.active {
  border-color: #00c569;
}
</style>

<template>
  <div class="row">
    <div class="main-text">
      <div class="report-form">
        <div class="form-wrapper">
          <p>توضیحات گزارش تخلف خود را اینجا بنویسید</p>
          <textarea
            placeholder="گزارش خود را بنویسید"
            v-model="$parent.reportData.reportText"
            :class="{
              active:
                $parent.reportData.reportText && !$parent.errors.reportText,
            }"
          ></textarea>
          <p
            v-if="$parent.errors.reportText"
            v-text="$parent.errors.reportText"
            class="text-error"
          ></p>
          <div class="report-button-wrapper">
            <button
              class="green-button register-report"
              :class="{
                disabled:
                  !$parent.reportData.reportText || !$parent.sendLinkActive,
              }"
              :disabled="!$parent.sendLinkActive"
              @click.prevent="$parent.reportTextCheck()"
            >
              ثبت گزارش
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
