
<style scoped>
.rate {
  padding: 0px;

  margin: 0 auto 15px;

  overflow: hidden;

  width: 320px;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: left;

  width: 56px;

  overflow: hidden;

  white-space: nowrap;

  cursor: pointer;

  font-size: 50px;

  color: #ccc;

  text-align: center;

  height: 54px;

  margin-left: 10px;
}
.rate:not(:checked) > label:first-of-type {
  margin-left: 0;
}
.rate:not(:checked) > label:before {
  /* content: '★ '; */
  content: "\f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}

.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

.rate label::after {
  position: relative;

  color: #777;

  font-size: 20px;

  top: -42px;

  width: 100%;

  text-align: center;

  display: block;
}
#lable-star5::after {
  content: "5";
}

#lable-star4::after {
  content: "4";
}

#lable-star3::after {
  content: "3";
}

#lable-star2::after {
  content: "2";
}

#lable-star1::after {
  content: "1";
}

.buttons-wrapper {
  display: inline-block;
  margin-bottom: 15px;
}

.report-form {
  background: #fafafa;

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

.buttons-wrapper .green-button:hover {
  background: #00c569;

  color: #fff;

  border: 1px solid #00c569;
}

.buttons-wrapper .review-button {
  background: #00c569;
  color: #fff;
}

.review-button i {
  color: #ffbb00;
}
</style>

<template>
  <div class="row">
    <div class="main-text">
      <p>میزان رضایت خود را از 1 تا 5 ثبت کنید</p>

      <div class="rate">
        <input type="radio" id="star5" name="rate" value="5" v-model="stars" />
        <label id="lable-star5" for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" v-model="stars" />
        <label id="lable-star4" for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" v-model="stars" />
        <label id="lable-star3" for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" v-model="stars" />
        <label id="lable-star2" for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" v-model="stars" />
        <label id="lable-star1" for="star1" title="text">1 star</label>
      </div>

      <div class="buttons-wrapper">
        <button
          class="green-button review-button"
          @click.prevent="$parent.reviewSteps(2,stars)"
        >ثبت نظر</button>
        <button
          class="green-button report-button pull-left"
          type="button"
          data-toggle="collapse"
          data-target="#report-form"
          aria-expanded="false"
          aria-controls="report-form"
        >ثبت شکایت</button>
      </div>

      <div id="report-form" class="report-form collapse">
        <div class="form-wrapper">
          <p>توضیحات شکایت خود را اینجا بنویسید</p>
          <textarea placeholder="شکایت خود را بنویسید" v-model="reportFormText"></textarea>
          <div class="report-button-wrapper">
            <button class="green-button register-report" @click.prevent="submitReport()">ثبت نهایی</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      reportFormText: "",
      reportFormActive: false,
      stars: ""
    };
  }
};
</script>

