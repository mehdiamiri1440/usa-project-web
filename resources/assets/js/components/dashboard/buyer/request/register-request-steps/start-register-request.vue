
<style scoped>
p {
  line-height: 1.618;
  margin: 45px auto 55px;
  text-align: center;
}

.red-text {
  color: #e41c38;
}

.event-text {
  font-size: 18px;
  margin-bottom: 15px;
}

label {
  margin: 0 auto 9px auto;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 10px 30px 9px;
  transition: 200ms;
  cursor: default;
  margin: 8px 0;
}

.submit-button.active {
  background: #FF9828;
  cursor: pointer;
}

.title-contents {
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 15px;
}

.form-contents {
  margin: 5px auto;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper,
.text-input-wrapper {
  margin: 6px auto;

  position: relative;
}

.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 6px;

  font-family: "Font Awesome 5 Free", sans-serif;

  font-weight: 900;

  left: 15px;

  font-size: 20px;

  z-index: 0;
}

input {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  color: #bebebe;

  border-color: #bebebe;

  direction: rtl;

  transition: 300ms;

  background: #fff;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 300ms;
}

input:focus,
input:focus + i {
  color: #333;
  border-color: #333;
}

input.active {
  border-color: #00c569;
  color: #333;
}

input.active + i {
  color: #00c569;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #00c569;
}

input.error {
  color: #333;
  border-color: #e41c38;
}

input.error + i {
  color: #e41c38;
}

input.error:focus,
input.error:focus + i {
  border-color: #e41c38;
}

select {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  position: relative;

  z-index: 1;

  color: #777777;

  direction: rtl;

  transition: 200ms;

  background: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 200ms;
}

select option {
  color: #333;
}

select:focus {
  color: #333;
}

select.active {
  color: #333;
  color: #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  color: #e41c38;
}

select.error:focus {
  color: #e41c38;
}

.error-message {
  text-align: right;

  color: #e41c38;

  font-weight: bold;

  height: 25px;

  direction: rtl;

  font-size: 11px;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}

.small-description-text {
  text-align: right;

  font-weight: bold;
  color: #777777;

  height: 25px;

  direction: rtl;

  font-size: 12px;
}

.loading-submit {
  width: 50px;
  margin: 0 auto;
}
@media screen and (max-width: 767px) {
  .input-wrapper {
    padding: 0 5px;
  }
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
}
</style>

<template>
  <div>
    <div class="form-contents">
      <div class="col-xs-12">
        <div class="text-input-wrapper">
          <p>
            خریدار محترم برای اطلاع از آخرین قیمت محصولات و پیداکردن محصول
            مناسب، علاوه بر جستوجو در <br /><router-link
              :to="{ name: 'productList' }"
            >
              لیست محصولات </router-link
            ><br />میتوانید درخواست خرید خود را در اینجا ثبت کنید تا کشاورزان و
            تامین کنندگان باسکول به شما پاسخ دهند.
            <br />
            <br />

            <!--
				     			<strong>
				     				<span class="red-text">تنها </span>پس از ثبت محصول اطلاعات شما بر روی سامانه به خریداران نمایش داده می شود
				     			</strong>
-->
          </p>
        </div>
      </div>

      <div class="col-xs-12">
        <div class="text-center">
          <div class="event-text">
            <strong> همین حالا درخواست خرید خود را ثبت کنید </strong>
          </div>

          <button
            class="submit-button active"
            @click.prevent="$parent.goToStep(1)"
          >
            ثبت درخواست خرید
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
