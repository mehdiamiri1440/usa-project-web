
<style scoped>
p {
  line-height: 1.618;
  text-align: center;
}

.blue-text {
  color: #000546;
}

.event-text {
  font-size: 18px;
  margin-bottom: 20px;
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
  font-size: 18px;
  padding: 13px 40px 12px;
  transition: 200ms;
  cursor: default;
  margin: 8px 0;
}

.submit-button.active {
  background: #00c569;
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

.text-input-wrapper {
  margin: 40px auto 20px;
  position: relative;
}

.text-input-wrapper p {
  font-size: 18px;
  color: #374761;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
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
       

      <div class="col-xs-12">
        <div class="text-center">
           <div class="text-input-wrapper">
          <p>
            <strong>
              به دنبال
              <span class="blue-text">خریدار</span>
              برای محصول خود هستید؟
            </strong>
          </p>
        </div>
          <div class="event-text blue-text">
            <strong>همین حالا محصول خود را ثبت کنید</strong>
          </div>

          <button
            v-if="!$parent.isStartLoading"
            class="submit-button active"
            @click.prevent="$parent.startRegisterProductSubmited()"
          >
            ثبت محصول جدید
          </button>
          <div v-else class="loading-submit">
            <img src="../../../../../../img/gif/loading.gif" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
