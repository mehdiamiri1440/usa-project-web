
<style scoped>
.title-contents {
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 30px;
  padding: 0 15px;
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

.error-message {
  height: 25px;
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
  margin: 40px auto;
}

label {
  margin: 0 auto 14px auto;
  font-size: 15px;
  font-weight: 400;
  color: #777;
}

.text-input-wrapper {
  margin: 6px auto;
  position: relative;
  background: #fbfbfb;
  box-shadow: none;
}

#product-type {
  background: none;
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
}

.text-input-wrapper i {
  position: absolute;
  left: 15px;
  top: 11px;
  font-size: 18px;
  color: #bdc4cc;
  transition: 300ms;
}

#product-type:focus,
#product-type:focus + i {
  color: #333;
  border-color: #333;
}

#product-type.active {
  border-color: #00c569;
  color: #333;
}

#product-type.active + i {
  color: #00c569;
}

#product-type.active:focus,
#product-type.active:focus + i,
#product-type.active + i {
  border-color: #00c569;
}

#product-type.error {
  color: #333;
  border-color: #e41c38;
}

#product-type.error + i {
  color: #e41c38;
}

#product-type.error:focus,
#product-type.error:focus + i {
  border-color: #e41c38;
}

@media screen and (max-width: 767px) {
  .title-contents {
    margin-top: 40px;
  }
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">
      نوع
      <span
        class="light-green-text"
        v-text="' ' + $parent.subCategoryName + ' '"
      >
      </span>
      خود را وارد کنید.
      <span class="red-text"> *</span>
    </h2>

    <form
      class="form-contents col-xs-12"
      v-on:submit.prevent="$parent.submitCategory()"
    >
      <div class="row">
        <div class="col-xs-12">
          <label for="product-type" class="description">
            <span v-if="$parent.categoryName == 'میوه'"> مثلا: مضافتی </span>
            <span v-else-if="$parent.categoryName == 'صیفی'">
              مثلا: بذر متین صادراتی
            </span>
            <span v-else-if="$parent.categoryName == 'غلات'">
              مثلا: هندی ۱۱۲۱
            </span>
            <span v-else-if="$parent.categoryName == 'خشکبار'">
              مثلا: فندقی
            </span>
            <span v-else-if="$parent.categoryName == 'ادویه'">
              مثلا: نگین
            </span>
            <span v-else-if="$parent.categoryName == 'دامپروری'">
              مثلا: چهل گیاه
            </span>
            <span v-else-if="$parent.categoryName == 'حبوبات'">
              مثلا: چیتی
            </span>
            <span v-else> مثلا: مضافتی</span>
          </label>

          <div class="text-input-wrapper">
            <input
              v-model="$parent.productName"
              id="product-type"
              type="text"
              :class="{
                active: $parent.productName,
                error: $parent.errors.productName,
              }"
              placeholder="نوع محصول را وارد کنید"
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

          <div class="row">
            <p class="error-message col-xs-12">
              <span
                class="red-text"
                v-if="$parent.errors.productName"
                v-text="$parent.errors.productName"
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
              active: $parent.productName && !$parent.errors.productName,
            }"
            @click.prevent="$parent.submitCategory()"
            type="submit"
          >
            مرحله بعد
            <i class="fa fa-arrow-left"></i>
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

