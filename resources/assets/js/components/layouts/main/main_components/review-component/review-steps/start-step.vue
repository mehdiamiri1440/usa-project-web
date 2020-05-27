<style scoped>
.user-image {
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 45px;
  overflow: hidden;
}

.user-name {
  text-align: center;
  font-size: 18px;
  color: #474747;
  line-height: 1.618;
  font-weight: bold;
  margin-top: 10px;
}

.main-text p {
  font-weight: 800;
  font-size: 16px;
  color: #777;
  text-align: center;
  margin: 15px auto 0;
}

.main-text {
  text-align: center;
  margin: 0 0 40px;
}

.buttons-wrapper .green-button {
  background: #fff;

  color: #777;

  border: 1px solid #00c569;

  font-size: 16px;

  font-weight: bold;

  padding: 5px 40px;

  margin: 15px;
}

.buttons-wrapper .green-button:hover {
  background: #00c569;

  color: #fff;

  border: 1px solid #00c569;
}

/* rate styles */

.rate {
  padding: 0px;

  margin: 0 auto;

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
  color: #ffbb00;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #fbca1e;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #fbca1e;
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

.report-form-wrapper {
  direction: rtl;

  overflow: hidden;
}

.report-form-wrapper textarea {
  max-width: 600px;

  margin: 15px auto 0px;

  height: 110px;

  max-height: 170px;

  border-radius: 5px;

  background: #fafafa;
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

/* end rate styles  */

.error-input {
  border: 1px solid #e41c39;
}
.main-text p.error-text {
  font-size: 14px;
  font-weight: 400;
}
.btn-disable {
  background: #dbdbdb;
}
#report-form {
  padding: 0 15px;
}
@media screen and (max-width: 768px) {
  .user-image {
    margin-top: 40px;
  }
  .report-form-wrapper {
    padding: 0 10px;
  }
}
</style>

<template>
  <div class="row">
    <div class="user-data">
      <div class="user-image">
        <img :src="$parent.reviewUserData.img" alt />
      </div>
      <p class="user-name" v-text="$parent.reviewUserData.name"></p>
    </div>
    <div class="rate-score-wrapper">
      <div class="main-text">
        <p>میزان رضایت خود را از 1 تا 5 ثبت کنید</p>

        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" v-model="$parent.reviewData.rate" />
          <label @click="showReviewText()" id="lable-star5" for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" v-model="$parent.reviewData.rate" />
          <label @click="showReviewText()" id="lable-star4" for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" v-model="$parent.reviewData.rate" />
          <label @click="showReviewText()" id="lable-star3" for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" v-model="$parent.reviewData.rate" />
          <label @click="showReviewText()" id="lable-star2" for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" v-model="$parent.reviewData.rate" />
          <label @click="showReviewText()" id="lable-star1" for="star1" title="text">1 star</label>
        </div>

        <div class="report-form-wrapper">
          <div id="report-form" class="form-wrapper collapse">
            <p>نظر خود را اینجا بنویسید</p>
            <textarea
              placeholder="نظر خود را بنویسید"
              v-model="$parent.reviewData.reviewText"
              :class="{ 'error-input': $parent.errors.reviewText }"
            ></textarea>
            <p class="red-text error-text">
              <span
                v-if="$parent.errors.reviewText || $parent.errors.reviewData"
                v-text="$parent.errors.reviewText || $parent.errors.reviewData"
              ></span>
            </p>
          </div>
          <div class="report-button-wrapper">
            <button
              class="green-button register-report hover-effect"
              :class="{
                  'btn-disable':
                    $parent.errors.reviewText ||
                    $parent.errors.reviewData ||
                    (!$parent.reviewData.reviewText &&
                      !$parent.reviewData.rate) ||
                    $parent.submitLoader,
                }"
              :disabled="$parent.submitLoader"
              @click.prevent="$parent.submitReview()"
            >ثبت نظر</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showReviewText: function() {
      $("#report-form").collapse("show");
    }
  }
};
</script>
