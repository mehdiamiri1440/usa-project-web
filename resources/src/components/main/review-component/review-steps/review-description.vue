
<style scoped>
.form-check-wrapper {
  background: #fafafa;
  padding: 15px;
  direction: rtl;
}

.report-form {
  margin: 30px;
}

.report-form textarea {
  max-width: 600px;

  margin: 0px auto;

  height: 110px;

  max-height: 170px;

  border-radius: 5px;

  direction: rtl;
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

.form-check {
  position: relative;

  display: inline-block;

  margin: 7px auto;

  text-align: right;
}

.form-check label {
  color: #777;

  border-radius: 5px;

  padding: 15px 53px 15px 20px;

  margin: 0;

  background: #fff;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #fff;
}

.form-check input {
  position: absolute;

  z-index: 1;

  width: 100%;

  height: 100%;

  left: 0;

  top: 0;

  opacity: 0;

  margin: 0;
}

.form-check input:hover {
  cursor: pointer;
}

.input-check {
  display: inline-block;
  width: 25px;
  height: 25px;
  background: #777;
  border-radius: 3px;
  position: absolute;
  top: 11px;
  right: 30px;
}

.input-check i {
  color: #777;

  font-size: 17px;

  padding: 4px;
}

input[type="checkbox"]:checked + label {
  color: #00c569;
  border-color: #00c569;
}

input[type="checkbox"]:checked + label span.input-check {
  background: #00c569;
}

input[type="checkbox"]:checked + label span.input-check i {
  color: #fff;
}
</style>

<template>
  <div class="row">
    <div class="main-text">
      <p>لطفا مورد زیر را انتخاب کنید</p>
      <div class="form-check-wrapper row">
        <div class="form-check col-xs-12 col-md-6" v-for="(item,index) in 6 " :key="index">
          <input
            class="form-check-input"
            type="checkbox"
            :id="'inlineCheckbox' + index"
            :value="'option' + index"
            v-model="textsData.reviewItems"
          />
          <label class="form-check-label" :for="'inlineCheckbox' + index">
            <span v-text="'آپشن شماره ' + index"></span>
            <span class="input-check">
              <i class="fa fa-check"></i>
            </span>
          </label>
        </div>
      </div>
      <div class="report-form">
        <p>توضیحات بیشتر</p>
        <textarea placeholder="توضیحات بیشتر" v-model="textsData.reviewText"></textarea>
        <div class="report-button-wrapper">
          <button
            class="green-button register-report"
            @click.prevent="$parent.reviewSteps(3,textsData)"
          >ثبت نهایی</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      textsData: {
        reviewItems: [],
        reviewText: ""
      }
    };
  },
  methods: {
    nextStep: function() {}
  }
};
</script>

