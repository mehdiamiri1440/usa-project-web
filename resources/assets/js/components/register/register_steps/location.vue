<style scoped>
.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  padding: 10px 0 9px;
  transition: 200ms;
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
  margin: 6px auto 13px;
  position: relative;
}
.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 5px;

  font-family: "Font Awesome 5 Free", sans-serif;

  font-weight: 900;

  left: 25px;

  font-size: 20px;

  z-index: 0;
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
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 25px;

  margin-bottom: 5px;

  direction: rtl;

  font-size: 12px;
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
    <h2 class="title-contents">انتخاب آدرس</h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <label for="phone-number">استان و شهر خود را انتخاب کنید</label>

        <div class="row">
          <div class="input-wrapper province-wrapper col-xs-6 pull-right">
            <select
              @change="setProvince($event)"
              :class="{'error' :  error}"
              id="province"
              class="dire"
            >
              <option selected disabled>استان را انتخاب کنید</option>

              <option
                v-for="province in $parent.step3.provinceList"
                :selected="$parent.step3.province == province.province_name"
                v-bind:value="province.province_name"
                v-text="province.province_name"
              ></option>
            </select>
          </div>

          <div class="input-wrapper province-wrapper col-xs-6">
            <select @change="setCity($event)" :class="{'error' :  error}" id="city" class="dire">
              <option selected disabled>شهر را انتخاب کنید</option>
              <option
                v-for="city in $parent.step3.cityList"
                :selected="$parent.step3.city == city.city_name"
                v-bind:value="city.city_name"
                v-text="city.city_name"
              ></option>
            </select>
          </div>
        </div>

        <span
          class="small-description"
        >انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه اینکوباک کمک می کند</span>

        <p class="error-message">
          <span v-if="error " v-text="error"></span>
        </p>
        <button class="submit-button disabled" @click.prevent="submitForm()">مرحله بعد</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      province: "",
      city: "",
      error: ""
    };
  },
  methods: {
    setProvince(event) {
      $("#province")
        .addClass("active")
        .removeClass("error");
      this.$parent.setProvinceName(event);
    },
    setCity(event) {
      $("#city")
        .addClass("active")
        .removeClass("error");
      this.$parent.setCityName(event);
      if ($(event.target).val().length >= 0) {
        $(".submit-button")
          .removeClass("disabled")
          .addClass("active");
      }
    },
    submitForm() {
      if (this.$parent.step3.city.length == 0) {
        this.error = "لطفا استان و شهر خود را مشخص کنید";
        $("#city")
          .addClass("error")
          .removeClass("active");
        $(".submit-button")
          .removeClass("active")
          .addClass("disabled");
      } else {
        this.$parent.setLocation();
        $("#city")
          .addClass("active")
          .removeClass("error");
        $(".submit-button")
          .removeClass("disabled")
          .addClass("active");
      }
    }
  },
  mounted() {
    if (this.$parent.step3.city) {
      $("#province")
        .addClass("active")
        .removeClass("error");
      $("#city")
        .addClass("active")
        .removeClass("error");
      $(".submit-button")
        .removeClass("disabled")
        .addClass("active");
    }
  }
};
</script>
