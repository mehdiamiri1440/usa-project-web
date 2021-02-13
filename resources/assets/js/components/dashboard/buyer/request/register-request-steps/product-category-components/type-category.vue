
<style scoped>
.title-contents {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 0;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 8px 25px 7px;
  transition: 200ms;
  cursor: default;
  margin: 0;
}

.submit-button i {
  transition: 300ms;
  position: relative;
  top: 2px;
  left: -3px;
}

.input-text-wrapper {
  height: 25px;
  padding-top: 5px;
}

.small-description-text {
  text-align: left;
}

.submit-button.default-back-button i {
  left: 3px;
}

.submit-button.default-back-button {
  background: #fff;
  color: #777;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
}

.submit-button.default-back-button:hover i {
  transform: translateX(5px);
}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
  transform: translateX(0);
}
.submit-button.active:hover i {
  background: #00c569;
  cursor: pointer;
  transform: translateX(-5px);
}
.action-control-wrapper {
  padding: 20px 15px 50px;
  background: #fff;
}

label {
  margin: 0 auto 10px auto;
  font-size: 15px;
  font-weight: 400;
  color: #777;
}
.small-label {
  font-size: 15px;
}

.text-input-wrapper {
  margin: 0 auto;
  position: relative;
  background: #fbfbfb;
}

input {
  background: none;
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  box-shadow: none;
}

.text-input-wrapper i {
  position: absolute;
  left: 15px;
  top: 11px;
  font-size: 18px;
  color: #bdc4cc;
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

@media screen and (max-width: 767px) {
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
  .title-contents.margin-top-30 {
    margin-top: 30px;
  }
}
</style>

<template>
  <div>
    <form
      class="form-contents col-xs-12"
      v-on:submit.prevent="$parent.submitCategory()"
    >
      <div class="row">
        <div class="col-xs-12">
          <h2 class="title-contents margin-top-30 col-xs-12">
            نوع
            <span
              class="light-green-text"
              v-text="' ' + $parent.subCategoryName + ' '"
            >
            </span>
            مورد نیاز خود را وارد کنید.
          </h2>

          <label for="stock" class="description">
            <span v-if="$parent.categoryName == 'میوه'"> مثلا: مضافتی </span>
            <span v-else-if="$parent.categoryName == 'صیفی'">
              مثلا: بذر متین صادراتی
            </span>
            <span v-else-if="$parent.categoryName == 'غلات'">
              مثلا: هندی ۱۱۲۱
            </span>
            <span v-else-if="$parent.categoryName == 'خشکبار'">
              مثلا: پسته فندقی
            </span>
            <span v-else-if="$parent.categoryName == 'ادویه'">
              مثلا: زعفرون نگین
            </span>
            <span v-else-if="$parent.categoryName == 'دامپروری'">
              مثلا: عسل چهل گیاه
            </span>
            <span v-else> مثلا: مضافتی</span>
          </label>

          <div class="text-input-wrapper">
            <input
              v-model="$parent.productName"
              id="min-sale-amount"
              type="text"
              :class="{
                active: $parent.productName,
                error: $parent.errors.productName,
              }"
              placeholder="نوع محصول مورد نیاز خود را وارد کنید"
            />

            <i
              v-if="$parent.productName && !$parent.errors.productName"
              class="fa fa-check-circle"
            ></i>
            <i
              v-else-if="$parent.errors.productName"
              class="fa fa-times-circle"
            ></i>
            <i v-else class="fa fa-edit"></i>
          </div>

          <div class="input-text-wrapper">
            <p class="error-message">
              <span
                class="red-text"
                v-if="$parent.errors.productName"
                v-text="$parent.errors.productName"
              ></span>
            </p>
          </div>
        </div>

        <div class="col-xs-12">
          <h2 class="title-contents col-xs-12">
            میزان نیازمندی

            <span class="small-label">(کیلوگرم)</span>

            <span class="red-text"> * </span>
          </h2>
          <label for="requirement_amount" class="description">
            مثلا: 50,000
          </label>

          <div class="text-input-wrapper">
            <input
              v-model="$parent.requirement_amount"
              id="requirement_amount"
              type="tel"
              :class="{
                active: $parent.requirement_amount,
                error: $parent.errors.requirement_amount,
              }"
              placeholder="میزان نیازمندی را وارد کنید"
              pattern="[0-9]*"
            />

            <i
              v-if="
                $parent.requirement_amount && !$parent.errors.requirement_amount
              "
              class="fa fa-check-circle"
            ></i>
            <i
              v-else-if="$parent.errors.requirement_amount"
              class="fa fa-times-circle"
            ></i>
            <i v-else class="fa fa-edit"></i>
          </div>

          <div class="input-text-wrapper">
            <p
              class="small-description-text"
              v-if="!$parent.errors.requirement_amount"
            >
              <span
                class="blue-text"
                v-if="$parent.requirement_amount_text"
                v-text="$parent.requirement_amount_text"
              ></span>
            </p>
            <p class="error-message">
              <span
                class="red-text"
                v-if="$parent.errors.requirement_amount"
                v-text="$parent.errors.requirement_amount"
              ></span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 action-control-wrapper">
        <div class="row">
          <button
            class="submit-button disabled pull-left"
            :class="{
              active:
                !$parent.errors.productName &&
                $parent.requirement_amount &&
                !$parent.errors.requirement_amount,
            }"
            @click.prevent="$parent.formValidator()"
            type="submit"
          >
            ثبت درخواست
            <i class="fa fa-check"></i>
          </button>

          <button
            class="submit-button default-back-button pull-right"
            @click.prevent="$parent.step--"
          >
            <i class="fa fa-arrow-right"></i>

            مرحله قبل
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

