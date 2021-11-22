<style scoped>
.change-password {
  direction: rtl;
  width: 40%;
  margin: auto;
  margin-top: 15rem;
  max-width: 450px;
}
.change-password-content {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  padding: 10% 18%;
}
.change-password h2 {
  text-align: right;
  font-size: 2.4rem;
  margin-bottom: 2rem;
}
.change-password h2::after {
  margin-top: 8px;
  content: "";
  width: 30%;
  max-width: 80px;
  height: 3px;
  background-color: #00c569;
  display: block;
}
.change-password-content form label {
  font-size: 1.2rem;
  font-weight: 700;
}
.change-password-content .input-icon {
  position: relative;
  float: left;
  z-index: 10;
  margin-top: -23px;
  margin-left: 10px;
  color: #9e9f9f;
}
.change-password-content form button {
  width: 35%;
  max-height: 40px;
  font-size: 1.2rem;
  margin: auto;
  max-width: 120px;
}
@media (max-width: 1300px) {
  .change-password {
    width: 50%;
    margin-top: 13rem;
  }
}
@media (max-width: 1024px) {
  .change-password {
    width: 60%;
    margin-top: 13rem;
  }
}
@media (max-width: 768px) {
  .change-password {
    width: 60%;
    margin-top: 7rem;
  }
}
@media (max-width: 600px) {
  .change-password {
    width: 90%;
    margin-top: 10rem;
  }
  .change-password-content form button {
    width: auto;
  }
  .change-password-content[data-v-0616ca3a] {
    padding: 10% 10%;
  }
}
</style>
<template>
  <div class="change-password">
    <h2>تغییر کلمه عبور</h2>
    <div class="change-password-content">
      <div class="btm-border-title"></div>
      <form>
        <div class="form-group">
          <label for="">کلمه عبور فعلی:</label>
          <input
            type="password"
            class="form-control"
            v-model="currentPassword"
            placeholder="کلمه عبور فعلی"
          />
          <span class="input-icon"><i class="fas fa-key"></i></span>
          <span
            class="text-danger"
            v-if="errors.currentPassword"
            v-text="errors.currentPassword"
          ></span>
        </div>
        <div class="form-group">
          <label for="">کلمه عبور جدید:</label>
          <input
            type="password"
            class="form-control"
            v-model="newPassword"
            placeholder="کلمه عبور جدید"
          />
          <span class="input-icon"><i class="fas fa-lock"></i></span>
          <span class="text-danger" v-text="errors.newPassword"></span>
        </div>
        <div class="form-group">
          <label for="">تکرار کلمه عبور جدید:</label>
          <input
            type="password"
            class="form-control"
            v-model="confirmPassword"
            placeholder="تکرار کلمه عبور جدید"
          />
          <span class="input-icon"><i class="fas fa-lock"></i></span>
          <span class="text-danger" v-text="errors.confirmPassword"></span>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <button
              type="submit"
              @click.prevent="changePassword()"
              class="btn green-button"
            >
              ثبت تغییر رمز
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      errors: {
        currentPassword: null,
        newPassword: null,
        confirmPassword: null,
      },
      currentPassword: null,
      newPassword: null,
      confirmPassword: null,
    };
  },
  methods: {
    changePassword() {
      this.validatePassword();
      axios
        .post("/change_password", {
          current_password: this.currentPassword,
          new_password: this.newPassword,
        })
        .then((e) => {
          if (e.data.status) {
            swal({
              title: "تغییر رمز عبور",
              text: "تغییر رمز عبور با موفقیت اعمال شد",
              icon: "success",
              className: "custom-swal-with-cancel",
              buttons: {
                close: {
                  text: "بستن",
                  value:"redirect",
                  className: "bg-cancel",
                },
              },
            }).then((value)=>{
                this.$router.push({name:'profileBasicSeller'})
            });
          } else if(e.data.msg ==="current password is not correct!") {
            swal({
              title: "تغییر رمز عبور",
              text: "رمز عبور فعلی را صحیح وارد کنید",
              icon: "error",
              className: "custom-swal-with-cancel",
              buttons: {
                close: {
                  text: "بستن",
                  value:"redirect",
                  className: "bg-cancel",
                },
              },
            })
          }

        })
        .catch(error => {
        swal({
              title: "تغییر رمز عبور",
              text: "خطا در برقراری ارتباط با سرور",
              icon: "error",
              className: "custom-swal-with-cancel",
              buttons: {
                close: {
                  text: "بستن",
                  className: "bg-cancel",
                },
              },
            });
        this.errored = true
      });
    },
    validatePassword() {
      let alert = true;
      if (this.currentPassword == null || this.currentPassword === "") {
        this.errors.currentPassword = "رمز عبور فعلی را وارد کنید!";
        alert = false;
      }

      if (this.newPassword == null) {
        this.errors.newPassword = "رمز عبور جدید را وارد کنید!";
        alert = false;
      }
      if (this.newPassword != null && this.newPassword.length < 8) {
        this.errors.newPassword = "رمز عبور جدید نباید کمتر از ۸ کاراکتر باشد!";
        alert = false;
      }
      if (this.newPassword !== this.confirmPassword) {
        this.errors.confirmPassword = "رمز عبور جدید یکسان نیست!";

        alert = false;
      }
      return alert;
    },
    resetNewPassword() {
      this.newPassword = null;
      this.confirmPassword = null;
    },
  },
  watch: {
    currentPassword(e) {
      if (e) {
        this.errors.currentPassword = null;
      }
    },
    newPassword(e) {
      if (e) {
        this.errors.newPassword = null;
      }
    },
    confirmPassword(e) {
      if (e) {
        this.errors.confirmPassword = null;
      }
    },
  },
};
</script>



