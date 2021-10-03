
<style scoped>
/*main style*/

.main-content {
  max-width: 800px;
  position: absolute;
  left: calc(50% - 400px);
  top: 45px;
  margin-bottom: 50px;
  height: 100%;
  direction: rtl;
}

.main-content > div.wrapper-section {
  border: 1px solid #dadce0;
  border-radius: 12px;
  min-height: 400px;
  overflow: hidden;
  margin-bottom: 80px;
}

.header-section {
  background: url("../../../../../img/invited-header-image.jpg");
  height: 125px;
  background-position: center;
  background-size: cover;
}

.wallet-balance {
  max-width: 280px;
  background: #fff;
  text-align: center;
  border-radius: 12px;
  margin: -70px auto 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.06);
  padding: 15px;
}

.wallet-title {
  color: #556080;
  font-size: 20px;
  font-weight: 500;
}

.wallet-balance .blue-text {
  font-size: 35px;
  font-weight: 500;
  margin-top: 20px;
}

.wallet-balance .blue-text span {
  font-size: 17px;
  font-weight: 400;
  margin-right: 5px;
}

.progress-wrapper {
  position: relative;
}

.special-package {
  max-width: 400px;
  margin: 20px auto;
}

.special-package > p {
  font-size: 17px;
  font-weight: 500;
  color: #404b55;
  margin-bottom: 45px;
}

.progress-item {
  background: #f2f2f2;
  height: 15px;
  border-radius: 15px;
  overflow: hidden;
  margin: 0 -8px;
}

.progress-bar {
  width: 0px;
  border-radius: 15px;
  background: #21ad93;
}

.progress-tooltip {
  width: 45px;
  height: 25px;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  color: #404b55;
  border-radius: 4px;
  position: absolute;
  top: -35px;
  left: calc(0% - 21px);
  transition: 0.6s ease;
}

.progress-tooltip::before {
  width: 15px;
  height: 15px;
  content: "";
  background: #1b816e;
  position: absolute;
  left: 13px;
  bottom: -25px;
  border-radius: 15px;
}

.progress-tooltip::after {
  content: "";
  width: 8px;
  height: 8px;
  background: #f2f2f2;
  border-radius: 2px;
  transform: rotate(45deg);
  position: absolute;
  left: 17px;
  bottom: -4px;
}

.progress-description {
  display: flex;
  justify-content: space-between;
  margin: 10px -8px;
}

.pricing-button {
  border-radius: 12px;
  color: #fff;
  padding: 10px;
  width: 100%;
  max-width: 290px;
  margin: 30px auto;
  display: block;
  font-size: 20px;
  font-weight: 500;
  transition: 300ms;
  border: none;
}

.send-invitation {
  display: block;
  max-width: 330px;
  width: 100%;
  border: none;
  background: linear-gradient(45deg, #1da1f2, #3d7db2);
  box-shadow: 0 4px 0 #0966ad;
  border-radius: 12px;
  color: #fff;
  font-size: 20px;
  padding: 12px 15px;
  margin: 30px auto 100px;
}

.charge-wallet-button {
  background: none;
  border: 1px solid #1da1f2;
  border-radius: 12px;
  color: #1da1f2;
  padding: 10px;
  width: 100%;
  max-width: 290px;
  margin: 30px auto;
  display: block;
  font-size: 20px;
  font-weight: 500;
  transition: 300ms;
}

.charge-wallet-button:hover {
  background: #1da1f2;
  color: #fff;
  transition: 300ms;
}

.invited-users {
  border-top: 5px solid #ebebeb;
}

.invited-title {
  font-size: 17px;
  font-weight: 500;
  color: #404b55;
}

.user-icon {
  width: 25px;
  font-size: 25px;
  color: #bbb;
  float: right;
}

.user-info {
  width: calc(100% - 55px);
  float: right;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  margin: 0 15px;
  padding-bottom: 20px;
}

.user-name,
.user-price,
.empty-list > p {
  font-size: 17px;
  line-height: 1.618;
  font-weight: 500;
}

.user-name {
  color: #404b55;
}

.user-price span {
  font-size: 14px;
}

.invited-users ul > li {
  overflow: hidden;
  padding-top: 20px;
}

.invited-users ul > li:last-of-type .user-info {
  border-bottom: none;
}

.users-wrapper {
  padding: 15px;
  max-width: 700px;
  margin: 20px auto;
  padding-bottom: 150px;
}

.spinner-wrapper {
  text-align: center;
  margin: 35px;
}

.empty-list {
  text-align: center;
}

@media screen and (max-width: 767px) {
  .send-invitation-wrapper {
    position: fixed;
    width: 100%;
    background: #fff;
    bottom: 59px;
    left: 0;
    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.06);
    padding: 0 10px;
  }

  .send-invitation-wrapper button {
    margin: 10px auto 13px;
  }

  .main-section-wrapper {
    max-width: initial;
    margin: 0px auto;
  }

  .main-content .section-title p {
    line-height: 1.618;
  }

  .main-content > div.wrapper-section {
    border: none;
    border-radius: 0;
  }

  .main-content {
    max-width: initial;
    background: #fff;
    border-radius: 0;
    box-shadow: none;
    direction: rtl;
    transform: initial;
    top: 0;
    padding-top: 0;
    width: 100%;
    left: 0;
  }

  .special-package {
    padding: 0 25px;
  }
}
</style>


<template>
  <div>
    <section class="main-content col-xs-12">
      <div class="row wrapper-section invitation-wrapper">
        <div class="header-section"></div>
        <div class="wallet-balance">
          <p class="wallet-title">میزان در آمد زایی</p>
          <p class="blue-text">
            {{ getNumberWithCommas(referralUsers.credit) }}<span>تومان</span>
          </p>
        </div>
        <div
          class="special-package"
          v-if="currentUser.user_info.active_pakage_type < 3"
        >
          <p>موجودی کیف پول برای خرید عضویت ویژه</p>
          <div class="progress-wrapper">
            <div class="progress-item">
              <div class="progress-bar"></div>
            </div>
            <div class="progress-tooltip">
              <span>{{ activePackagePercentage }}%</span>
              <span class="circle-item"></span>
            </div>
            <div class="progress-description">
              <span class="green-text">عضویت ویژه</span>
              <span class="gray-text"></span>
            </div>
          </div>
          <button
            v-if="activePackagePercentage != 100"
            class="charge-wallet-button"
            @click="showWallet()"
          >
            <i class="fas fa-wallet"></i>
            شارژ دستی کیف پول
          </button>
          <router-link
            v-else
            :to="{ name: 'dashboardPricingTableSeller' }"
            tag="button"
            class="bg-gradient-green pricing-button"
          >
            <i class="fas fa-arrow-up"></i>
            ارتقا به عضویت ویژه
          </router-link>
        </div>
        <div class="invited-users">
          <div
            class="users-wrapper"
            v-if="referralUsers.invited_users.length && !referralLoader"
          >
            <p class="invited-title">مدعوین شما</p>
            <ul>
              <li
                v-for="(item, index) in referralUsers.invited_users"
                :key="index"
              >
                <div class="user-icon">
                  <i class="fa fa-user-circle"></i>
                </div>
                <div class="user-info">
                  <p
                    class="user-name"
                    v-text="item.first_name + ' ' + item.last_name"
                  ></p>
                  <p class="user-price light-green-text">
                    {{ getNumberWithCommas(item.credit) }}
                    <span class="brand-text">تومان</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="users-wrapper" v-else-if="referralLoader">
            <div class="spinner-wrapper">
              <div class="spinner-border">
                <span class="sr-only"></span>
              </div>
            </div>
          </div>
          <div class="users-wrapper" v-else>
            <div class="empty-list">
              <p class="gray-text">
                شما تاکنون از کسی دعوت نکرده اید یا مدعوین شما قبول دعوت نکرده
                اند.
              </p>
            </div>
          </div>
          <div class="send-invitation-wrapper">
            <router-link
              :to="{ name: 'referralSeller' }"
              tag="button"
              class="send-invitation"
            >
              <i class="fa fa-share-alt"></i>
              ارسال دعوت نامه جدید
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["currentUser"],
  data() {
    return {
      referralUsers: {
        invited_users: [],
      },
      referralLoader: false,
      prices: "",
      activePackagePercentage: 0,
    };
  },
  methods: {
    getPrices() {
      this.referralLoader = true;
      axios.post("/get-user-referral-info").then((response) => {
        axios.post("/payment/get-packages-price").then((response) => {
          this.prices = response.data.prices;
        });
        this.referralUsers = response.data;
        this.referralLoader = false;
      });
    },
    setProgress(percentage) {
      let progressBarFixSpace = 0;
      if (percentage <= 40) {
        progressBarFixSpace = 10;
      }

      $(".progress-tooltip").css("left", `calc(${percentage}% - 21px)`);
      $(".progress-bar").css(
        "width",
        `calc(${percentage}% + ${progressBarFixSpace}px)`
      );
    },
    showWallet() {
      $("#wallet-modal").modal("show");
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
  },
  mounted() {
    this.getPrices();
  },
  watch: {
    prices() {
      let packagePrice =
        (this.prices["type-3-discount"]
          ? this.prices["type-3-discount"]
          : this.prices["type-3"]) / 10;
      this.activePackagePercentage = Math.round(
        (this.currentUser.user_info.wallet_balance / packagePrice) * 100
      );
      if (this.activePackagePercentage > 100) {
        this.activePackagePercentage = 100;
      }
      this.setProgress(this.activePackagePercentage);
    },
  },
};
</script>
