
<style scoped>
.form-contents {
  padding-bottom: 50px;
}

.title-contents {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 0;
  margin-top: 30px;
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
  margin-bottom: 10px;
}

textarea {
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

textarea:focus,
textarea:focus + i {
  color: #333;
  border-color: #333;
}

textarea.active {
  border-color: #00c569;
  color: #333;
}

textarea.active + i {
  color: #00c569;
}

textarea.active:focus,
textarea.active:focus + i,
textarea.active + i {
  border-color: #00c569;
}

textarea.error {
  color: #333;
  border-color: #e41c38;
}

textarea.error + i {
  color: #e41c38;
}

textarea.error:focus,
textarea.error:focus + i {
  border-color: #e41c38;
}
</style>


<template>
  <div>
    <div class="col-xs-12">
      <h2 class="title-contents">توضیحات محصول</h2>
    </div>

    <form
      class="form-contents col-xs-12"
      v-on:submit.prevent="descriptionSubmited()"
    >
      <div class="text-input-wrapper">
        <!-- input type tel because we have some limmitation for processes -->

        <textarea
          rows="4"
          :class="{
            active: $parent.product.description,
            error: errors.description,
          }"
          v-model="$parent.product.description"
          placeholder="در مورد کیفیت و نوع بسته بندی محصول خود اینجا توضیح دهید"
        ></textarea>

        <i
          v-if="$parent.product.description && !errors.description"
          class="fa fa-check-circle"
        ></i>
        <i v-else-if="errors.description" class="fa fa-times-circle"></i>
        <i v-else class="fa fa-edit"></i>
      </div>

      <div class="row">
        <p class="error-message col-xs-12">
          <span
            class="red-text"
            v-if="errors.description"
            v-text="errors.description"
          ></span>
        </p>
      </div>
    </form>
    <div class="col-xs-12">
      <button
        class="submit-button active pull-left"
        @click.prevent="descriptionSubmited()"
      >
        مرحله بعد

        <i class="fa fa-arrow-left"></i>
      </button>

      <button
        class="submit-button default-back-button pull-right"
        @click.prevent="$parent.currentStep--"
      >
        <i class="fa fa-arrow-right"></i>
        مرحله قبل
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errors: {
        description: "",
      },
    };
  },
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
  },
  methods: {
    descriptionSubmited() {
      if (!this.errors.description) {
        this.$parent.goToStep(6);
      } else {
        if (this.errors.description) {
          this.registerComponentStatistics(
            "product-register-error",
            "description",
            "input:" + description + " error:" + this.errors.description
          );
        }
      }
    },
    descriptionValidator: function (description) {
      this.errors.description = "";

      if (description != "") {
        if (
          !this.$parent.validateRegx(
            description,
            /^(?!.*[(@#!%$&*)])[s\u{0600}-\u{06FF}\u{060C}\u{061B}\u{061F}\u{0640}\u{066A}\u{066B}\u{066C}\u{0E}\u{0A}\u{05BE}_.-،:()A-Za-z0-9 ]+$/u
          )
        ) {
          this.errors.description = "توضیحات شامل کاراکتر های غیرمجاز است";
        }
      }
    },
  },
  watch: {
    "$parent.product.description"(value) {
      this.descriptionValidator(value);
    },
  },
};
</script>
