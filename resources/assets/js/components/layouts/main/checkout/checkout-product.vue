
<style scoped>
.main-contents {
  padding: 15px 30px;
}
.logo-wrapper {
  max-width: 210px;
  padding: 15px 10px;
  margin: 0 auto;
}

.steps-progress-wrapper {
  max-width: 655px;
  margin: 10px auto 60px;
}

.progress-wrapper,
.steps {
  position: relative;
}
.progress-wrapper > span {
  height: 3px;
  background: #bebebe;
  display: block;
  margin: 0;
  position: absolute;
  left: 50px;
  top: 0;
  right: 50px;
}
.progress-wrapper > span.active {
  background: #00c569;
  left: calc(100% - 50px);
}
.steps > p.step-item {
  position: absolute;
  top: -8px;
  width: 100%;
  z-index: 1;
  display: inline-block;
  max-width: 100px;
  text-align: center;
}
.steps > p.step-item:first-of-type {
  right: 0;
}
.steps > p.step-item:nth-of-type(2) {
  right: calc(50% - 50px);
}
.steps > p.step-item:last-of-type {
  left: 0;
}
p.step-item .step-index {
  width: 20px;
  height: 20px;
  background: #bebebe;
  line-height: 1;
  display: block;
  margin: 0 auto;
  margin-bottom: 0px;
  color: #fff;
  padding-top: 4px;
  margin-bottom: 10px;
  border-radius: 50px;
}
p.step-item .step-index.active {
  background: #00c569;
}

/* main content style  */
@media screen and (max-width: 600px) {
  .main-contents-wrapper {
    padding: 0;
    border-radius: 0;
  }
  .main-contents {
    padding: 15px;
    margin: 15px auto;
    border-radius: 0;
  }
}
</style>

<template>
  <div class="checkout-main-pages">
    <div class="container">
      <div class="row">
        <section class="header col-xs-12">
          <div class="logo-page">
            <div class="logo-wrapper">
              <router-link :to="{name:'productList'}">
                <img src="../../../../../img/logo/web-logo.svg" alt />
              </router-link>
            </div>
          </div>
          <div class="steps-progress-wrapper">
            <div class="step-progress">
              <div class="progress-wrapper">
                <span class="progress-item"></span>
                <span class="progress-item active"></span>
              </div>
              <div class="steps">
                <p class="step-item">
                  <span class="step-index active">1</span>
                  <span class="step-text">اطلاعات محصول</span>
                </p>
                <p class="step-item">
                  <span class="step-index" :class="{'active' : paymentStep > 0}">2</span>
                  <span class="step-text">ثبت اطلاعات</span>
                </p>
                <p class="step-item">
                  <span class="step-index" :class="{'active' : paymentStep > 1}">3</span>
                  <span class="step-text">ثبت نهایی</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="main-contents-wrapper col-xs-12">
          <div class="main-contents shadow-content bg-white col-xs-12">
            <router-view name="checkout-product"></router-view>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

 <script>
import confirtmProduct from "./steps/confirm-product";
export default {
  props: ["str"],
  components: {
    confirtmProduct
  },
  data: function() {
    return {
      currentStep: 0,
      paymentStep: 0,
      productData: "",
      isProfileLoaded: false,
      currentUser: {
        profile: "",
        user_info: ""
      }
    };
  },
  methods: {
    init: function() {
      this.checkRouteActive();
      this.getCurrentUser();
    },
    getCurrentUser() {
      axios.post("/user/profile_info").then(response => {
        this.currentUser = response.data;
        this.isProfileLoaded = true;
      });
    },
    createCookie: function(name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    },
    getCookie: function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    checkCookie: function() {
      let isActivePage = false;
      if (this.getCookie("confirmProduct")) {
        isActivePage = true;
      }
      return isActivePage;
    },
    setProductData() {
      if (this.checkCookie()) {
        this.productData = JSON.parse(this.getCookie("confirmProduct"));
      } else {
        this.$router.push({ name: "paymentExpire" });
      }
    },
    getNumberWithCommas: function(number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    checkRouteActive: function() {
      let progress = $(".progress-item.active");
      let level = 0;
      switch (this.$route.name) {
        case "checkoutPhoneNumber":
          level = 1;
          break;
        case "registerInformation":
          level = 1;
          break;
        case "paymentSuccess":
          level = 2;
          break;
        case "paymentFailed":
          level = 2;
          break;
        case "paymentExpire":
          level = 2;
          break;
        default:
          level = 0;
          break;
      }

      if (level > 1) {
        progress.css("left", "50px");
      } else if (level > 0) {
        progress.css("left", "50%");
      } else {
        progress.css("left", "calc(100% - 50px)");
      }
      this.paymentStep = level;
    },
    isOsIOS: function() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    }
  },
  mounted: function() {
    this.init();
  },
  watch: {
    $route() {
      this.checkRouteActive();
    }
  }
};
</script>
