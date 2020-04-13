
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
</style>

<template>
  <div class="row">
    <div class="main-text">
      <ul class="form-check-wrapper">
        <li v-for="(item,index) in 6 " :key="index">
          <button
            class="default-button-list"
            @click.prevent="$parent.checkReportSubmit(index , index > 3 ? true : false)"
          >این یک جمله خفنه ها {{index }}</button>
          <i class="fa fa-angle-left"></i>
        </li>
      </ul>
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

