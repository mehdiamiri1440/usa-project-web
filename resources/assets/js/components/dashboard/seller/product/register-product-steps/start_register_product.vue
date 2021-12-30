
<style scoped>
.arrow-icon i {
  -webkit-animation: shake-vertical 4s cubic-bezier(0.215, 0.61, 0.355, 1)
    infinite both;
  animation: shake-vertical 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite both;
}

@-webkit-keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
  }
  80% {
    -webkit-transform: translateY(4.4px);
    transform: translateY(4.4px);
  }
  90% {
    -webkit-transform: translateY(-4.4px);
    transform: translateY(-4.4px);
  }
}
@keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
  }
  80% {
    -webkit-transform: translateY(4.4px);
    transform: translateY(4.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
    transform: translateY(-4.4px);
  }
}

.arrow-icon {
  font-size: 23px;
  color: #20ae91;
  margin-bottom: 3px;
}
p {
  line-height: 1.618;
  text-align: center;
}

.blue-text {
  color: #000546;
}

.event-text {
  font-size: 18px;
  margin-bottom: 25px;
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

.submit-button i {
  position: relative;
  top: 2px;
  margin-left: 6px;
}

.submit-button.active {
  cursor: pointer;
  transition: 150ms;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0);
  background-image: linear-gradient(to left, #ff9828, #ff6600);
  border-radius: 4px;
}

.submit-button:hover {
  cursor: pointer;
  transition: 150ms;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.3);
  transform: translateY(-3px);
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
  margin: 40px auto 30px;
  position: relative;
}

.text-input-wrapper p {
  font-size: 18px;
  color: #777;
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
              <span class="brand-text">خریدار</span>
              برای محصول خود هستید؟
            </strong>
          </p>
        </div>
        <div class="event-text brand-text">
          <strong>همین حالا محصول خود را ثبت کنید</strong>
        </div>
        <div class="arrow-icon">
          <i class="fa fa-arrow-down"></i>
        </div>
        <button
          v-if="!$parent.isStartLoading"
          class="submit-button active"
          @click.prevent="$parent.startRegisterProductSubmited()"
        >
          <i class="fa fa-plus-square"></i>
          <span> ثبت محصول جدید </span>
        </button>
        <div v-else class="loading-submit">
          <img src="../../../../../../img/gif/loading.gif" />
        </div>
      </div>
    </div>
  </div>
</template>
