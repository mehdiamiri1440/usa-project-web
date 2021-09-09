
<style  scoped>
.main-buskool-wrapper {
  max-width: 600px;
  border: 1px solid #e0e0e0;
  margin: 50px auto;
  border-radius: 12px;
  padding: 20px 15px;
}

.promotion-wrapper {
  margin-top: 10px;
}

.promotion-image {
  background: linear-gradient(-45deg, #474d6f, #313442);
  height: 37px;
  border-radius: 12px 12px 0 0;
  text-align: right;
  padding: 0 10px;
  display: block;
}

.promotion-image img {
  height: 37px;
  width: initial;
}

.invite-image-wrapper {
  max-width: 100px;
  padding-top: 15px;
}

.invite-image-wrapper img {
  width: 120px;
}

.invite-section {
  padding: 15px 10px;
  background: linear-gradient(#f6566c, #e62540);
  overflow: hidden;
  border-top: 10px solid #ebebeb;
  margin: 0 -15px;
}

.invite-box {
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.invite-box button {
  color: #fff;
  border: none;
  min-width: 150px;
  padding: 5px;
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  background: linear-gradient(45deg, #f4455e, #eb2c47);
  margin-top: 22px;
}

.invite-content {
  padding: 25px 15px 25px 0;
  width: calc(100% - 110px);
  line-height: 1.618;
}

.invite-content p {
  font-size: 18px;
  color: #444;
  font-weight: 500;
}

.invited-users {
  margin: 0 -15px;
}

.invited-users button {
  width: 100%;
  background: #1a95e0;
  border: none;
  color: #fff;
  font-size: 21px;
  font-weight: 500;
  padding: 12px 90px 12px 5px;
  position: relative;
  overflow: hidden;
  text-align: right;
}

.invited-users button .fa-angle-left {
  position: absolute;
  left: 15px;
  z-index: 2;
}

.invited-users button span {
  position: relative;
  z-index: 2;
}

.invited-users button .button-icon {
  position: absolute;
  right: -15px;
  background: rgba(0, 0, 0, 0.1);
  width: 80px;
  height: 80px;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 27px;
  border-radius: 50px;
  top: -16px;
  transition: 400ms;
}
.invited-users button:hover .button-icon {
  width: 680px;
  transition: 400ms;
}

.invited-users button .button-icon::before {
  position: absolute;
  right: 40px;
}

.switch-wrapper {
  border-top: 10px solid #ebebeb;
  padding: 30px 0;
}

@media screen and (max-width: 991px) {
  .main-buskool-wrapper {
    padding: 0px 15px;
    margin-bottom: 65px;
    border: none;
  }
}
</style>
<template>
  <div class="main-buskool-wrapper">
    <ProfileInfo
      :photoLink="currentUser.profile.profile_photo"
      :storage="str"
      :username="
        currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name
      "
      :userprof="currentUser.user_info.user_name"
    />

    <div
      class="promotion-wrapper"
      v-if="$parent.currentUser.user_info.is_seller == 1"
    >
      <router-link
        :to="{ name: 'dashboardPricingTableSeller' }"
        class="promotion-image"
      >
        <img
          src="../../../../img/vertical-promotion-text.gif"
          alt="promotion text"
        />
      </router-link>
    </div>

    <div
      class="invite-section"
      v-if="$parent.currentUser.user_info.is_seller == 1"
    >
      <div class="invite-box">
        <div class="invite-image-wrapper pull-left">
          <img src="../../../../img/alert-image.svg" alt="promotion text" />
        </div>
        <div class="invite-content text-rtl pull-right">
          <p>با معرفی باسکول به همکارانتان, کسب در آمد کنید!</p>
          <button class="bg-red">کسب در آمد</button>
        </div>
      </div>
    </div>
    <div
      class="invited-users"
      v-if="$parent.currentUser.user_info.is_seller == 1"
    >
      <button>
        <i class="fa fa-angle-left"></i>
        <span class="button-text"> درآمد ها </span>

        <i class="fa fa-dollar-sign button-icon"></i>
      </button>
    </div>

    <div class="menu-list text-rtl">
      <BuyerMenuList />
    </div>
    <div class="switch-wrapper row">
      <SwitchButtons />
      <div class="image-wrapper">
        <img src="../../../../img/my-buskool.jpg" alt="my buskool" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileInfo from "./my-buskool-components/profile_info.vue";
import SellerMenuList from "./my-buskool-components/seller-menu-list-item.vue";
import BuyerMenuList from "./my-buskool-components/buyer-menu-list-item.vue";
import SwitchButtons from "./my-buskool-components/swith-buttons.vue";

export default {
  components: {
    ProfileInfo,
    BuyerMenuList,
    SwitchButtons,
  },
  props: ["currentUser", "str", "assets"],
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
