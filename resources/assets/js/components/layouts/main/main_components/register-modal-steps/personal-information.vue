<style scoped>
p,
span {
  line-height: 1.5;
}

.from-wrapper {
  max-width: 510px;
  margin: 49px auto 70px;
  overflow: hidden;
}

.title-contents {
  font-weight: 500;
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
}

.form-contents {
  line-height: 1.618;
}

.form-contents label {
  font-weight: 500;
  color: #777;
  margin: 0 auto 7px;
}

.input-wrapper {
  margin: 0 auto;
  position: relative;
}

input {
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  color: #bdc4cc;
  padding: 8px 15px 8px 45px;
  direction: rtl;
  transition: 150ms;
  text-align: right;
  background: #fbfbfb;
}

.input-wrapper i {
  display: inline-block;
  position: absolute;
  left: 15px;
  font-size: 21px;
  color: #bebebe;
  top: 11px;
  transition: 150ms;
}

input:focus,
input:focus + i {
  color: #333;
}

input.active {
  border-color: #4dc0bb;
  color: #333;
}

input.active + i {
  color: #4dc0bb;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #4dc0bb;
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

.error-message {
  color: #e41c38;
  height: 22px;
  direction: rtl;
  font-size: 13px;
  padding-top: 2px;
}

.step-action {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.submit-button {
  background: #e0e0e0;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  padding: 8px;
  transition: 150ms;
  cursor: default;
  max-width: 147px;
  display: inline-block;
}

.submit-button.back-button {
  background: #fff;
  color: #909090;
  border: 1px solid #bebebe;
  cursor: pointer;
  max-width: 127px;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}
.submit-button.active:hover i {
  right: 3px;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}
</style>

<template>
  <div class="text-rtl from-wrapper">
    <h2 class="title-contents">
      نام و نام خانوادگی
      <span class="red-text">*</span>
    </h2>

    <form
      v-on:submit.prevent="submitUserInformation()"
      class="form-contents col-xs-12"
    >
      <div class="row">
        <div class="row">
          <div class="col-xs-12 col-sm-6 pull-right">
            <label for="user-name"> نام خود را وارد کنید</label>
            <div class="input-wrapper user-information-wrapper">
              <input
                v-model="name"
                :class="{
                  error: $parent.errors.name,
                  active: this.name,
                }"
                id="user-name"
                type="text"
                placeholder="نام شما"
              />

              <i
                class="fa fa-check-circle"
                v-if="this.name && !$parent.errors.name"
              ></i>
              <i class="fa fa-times-circle" v-else-if="$parent.errors.name"></i>
              <i class="fa fa-edit" v-else></i>
            </div>

            <p class="error-message">
              <span
                v-if="$parent.errors.name"
                v-text="$parent.errors.name"
              ></span>
            </p>
          </div>

          <div class="col-xs-12 col-sm-6 pull-right">
            <label for="user-family"> نام خانوادگی خود را وارد کنید</label>
            <div class="input-wrapper user-information-wrapper">
              <input
                v-model="family"
                :class="{
                  error: $parent.errors.family,
                  active: this.family,
                }"
                id="user-family"
                type="text"
                placeholder="نام خانوادگی شما"
              />

              <i
                class="fa fa-check-circle"
                v-if="this.family && !$parent.errors.family"
              ></i>
              <i
                class="fa fa-times-circle"
                v-else-if="$parent.errors.family"
              ></i>
              <i class="fa fa-edit" v-else></i>
            </div>

            <p class="error-message">
              <span
                v-if="$parent.errors.family"
                v-text="$parent.errors.family"
              ></span>
            </p>
          </div>
        </div>
        <div class="step-action text-left">
          <button
            class="submit-button disabled"
            :class="{
              active:
                !$parent.errors.name &&
                !$parent.errors.family &&
                family &&
                name,
            }"
            @click.prevent="submitUserInformation()"
          >
            مرحله بعد

            <i class="fa fa-arrow-left"></i>
          </button>

          <button
            class="submit-button back-button"
            @click.prevent="$parent.currentStep--"
          >
            <i class="fa fa-arrow-right"></i>
            مرحله قبل
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "",
      family: "",
    };
  },
  methods: {
    submitUserInformation() {
      if (!this.name) {
        this.$parent.errors.name = "لطفا نام خود را وارد کنید";
      }
      if (!this.family) {
        this.$parent.errors.family = "لطفا نام خانوادگی خود را وارد کنید";
      }
      if (this.activeSubmit()) {
        this.$parent.goToStep(4);
      }
    },
    activeSubmit() {
      return (
        !this.$parent.errors.name &&
        !this.$parent.errors.family &&
        this.family.length &&
        this.name.length
      );
    },
  },
  watch: {
    name(text) {
      text = $.trim(text);
      this.$parent.errors.name = "";
      if (text) {
        let error = this.$parent.textValidator(text, "نام");
        if (error) {
          this.$parent.errors.name = error;
        } else {
          this.$parent.step4.name = text;
        }
      }
    },
    family(text) {
      text = $.trim(text);
      this.$parent.errors.family = "";

      if (text) {
        let error = this.$parent.textValidator(text, "نام خانوادگی");
        if (error) {
          this.$parent.errors.family = error;
        } else {
          this.$parent.step4.family = text;
        }
      }
    },
  },
};
</script>
