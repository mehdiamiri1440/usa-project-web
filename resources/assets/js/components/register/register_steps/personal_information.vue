<style scoped>
.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  padding: 10px 0 9px;
  transition: 300ms;
  cursor: default;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}

.title-contents {
  font-weight: bold;
  font-size: 19px;
}

.form-contents {
  margin: 5px auto;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper {
  margin: 6px auto 4px;
  position: relative;
}

input {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px 9px;

  color: #bebebe;

  direction: ltr;

  -webkit-transition: 300ms;

  transition: 300ms;

  margin-top: 7px;

  direction: rtl;
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

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 25px;

  margin-bottom: 5px;

  direction: rtl;

  font-size: 12px;
}

.radio-wrapper {
  margin: 10px auto;
}
.label-radio label svg {
  width: 20px;
  height: 30px;
  float: right;
}
.label-radio {
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  direction: rtl;
  padding: 8px 30px 8px 13px;
  font-size: 14px;
}
.label-radio:nth-of-type(2) {
  margin-left: 16px;
}
/* Hide the browser's default radio button */
.label-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  margin: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;

  top: 11px;

  right: 13px;

  height: 12px;

  width: 12px;

  background-color: #eee;

  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.label-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.label-radio input:checked ~ .checkmark {
  background-color: #00c569;
}

.label-radio input:checked ~ label::after {
  border-color: #00c569;
}

.label-radio label::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: -2px;
  bottom: 0;
  z-index: 0;
  margin: 0;
  padding: 0;
  border-radius: 3px;
  border: 1px solid #bdc4cc;
}

.label-radio label i {
  margin: 0 4px;
}
</style>

<template>
  <div>
    <h2 class="title-contents">مشخصات فردی</h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <label for="gender">جنسیت خود را انتخاب کنید</label>

        <div class="radio-wrapper">
          <div class="label-radio">
            <input v-model="sex" type="radio" value="خانم" name="radio" :checked="'خانم'  == sex" />

            <span class="checkmark"></span>

            <label>
              <i class="fa fa-female"></i>
              خانم
            </label>
          </div>

          <div class="label-radio">
            <input type="radio" v-model="sex" value="آقا" :checked="'آقا'  == sex" name="radio" />
            <span class="checkmark"></span>
            <label>
              <i class="fa fa-male"></i>
              آقا
            </label>
          </div>
        </div>

        <div class="input-wrapper phone-number-wrapper">
          <div class="row">
            <div class="col-xs-6 pull-right">
              <label for="first-name">نام خود را وارد کنید</label>

              <input
                v-model="firstName"
                :class="{'error' : $parent.errors.first_name[0] , 'active' : firstName.length}"
                id="first-name"
                type="text"
                class="dire"
                placeholder="نام"
              />

              <p class="error-message">
                <span v-if="$parent.errors.first_name[0]" v-text="$parent.errors.first_name[0]"></span>
              </p>
            </div>

            <div class="col-xs-6">
              <label for="last-name">نام خانوادگی را وارد کنید</label>

              <input
                v-model="lastName"
                :class="{'error' : $parent.errors.last_name[0] , 'active' : lastName.length}"
                id="last-name"
                type="text"
                class="dire"
                placeholder="نام خانوادگی "
              />
            </div>

            <p class="error-message">
              <span v-if="$parent.errors.last_name[0]" v-text="$parent.errors.last_name[0]"></span>
            </p>
          </div>
        </div>

        <button
          class="submit-button disabled"
          :class="{'active' : firstName.length && lastName.length}"
          @click.prevent="nexStep()"
        >مرحله بعد</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      sex: "",
      error: ""
    };
  },
  methods: {
    nexStep() {
      this.$parent.errors.first_name = [];
      this.$parent.errors.last_name = [];
      this.$parent.step3.first_name = this.firstName;
      this.$parent.step3.last_name = this.lastName;
      this.$parent.step3.sex = this.sex;
      this.$parent.setPersonalInformation();
    }
  },
  watch: {
    firstName: function(value) {
      this.$parent.errors.first_name = [];
    },
    lastName: function(value) {
      this.$parent.errors.last_name = [];
    }
  },
  mounted() {
    this.sex = this.$parent.step3.sex;
    this.firstName = this.$parent.step3.first_name;
    this.lastName = this.$parent.step3.last_name;
    this.$parent.getProvinceList();
  }
};
</script>