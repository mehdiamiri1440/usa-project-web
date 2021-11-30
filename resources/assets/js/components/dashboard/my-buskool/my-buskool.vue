
<style  scoped>
.main-buskool-wrapper {
  max-width: 600px;
  border: 1px solid #e0e0e0;
  margin: 150px auto;
  border-radius: 12px;
  padding: 20px 15px;
}

.promotion-wrapper {
  margin: 10px 15px 0;
}

.promotion-wrapper .default-button-full-with {
  margin: 0;
  display: block;
  height: 37px;
  border-radius: 12px 12px 0 0;
}

.promotion-image {
  background: linear-gradient(-45deg, #474d6f, #313442);
  height: 37px;
  border-radius: 12px 12px 0 0;
  text-align: right;
  padding: 0 10px;
  display: block;
  position: relative;
}

.promotion-image img {
  height: 37px;
  width: initial;
}

.promotion-image i {
  position: absolute;
  left: 15px;
  color: #fff;
  font-size: 17px;
  top: 10px;
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
  border: none;
  border-top: 10px solid #ebebeb;
  width: 100%;
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
  text-align: right;
}

.invite-content p {
  font-size: 18px;
  color: #444;
  font-weight: 500;
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
    margin: 50px auto;
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
    <div class="row" v-if="$parent.isSeller == 1">
      <div
        class="promotion-wrapper"
        v-if="
          $parent.currentUser.user_info &&
          $parent.currentUser.user_info.active_pakage_type == 0
        "
      >
        <router-link
          :to="{ name: 'dashboardPricingTableSeller' }"
          class="promotion-image"
        >
          <img
            src="../../../../img/vertical-promotion-text.gif"
            alt="promotion text"
          />
          <i class="fa fa-angle-left"></i>
        </router-link>
      </div>
      <div class="promotion-wrapper" v-else-if="!$parent.currentUser.user_info">
        <p class="placeholder-content default-button-full-with"></p>
      </div>

      <router-link
        :to="{ name: 'referralSeller' }"
        tag="button"
        class="invite-section"
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
      </router-link>
      <!-- <div class="invited-users">
        <router-link tag="button" :to="{ name: 'invitedUsers' }">
          <i class="fa fa-angle-left"></i>
          <span class="button-text"> درآمد ها </span>

          <i class="fa fa-dollar-sign button-icon"></i>
        </router-link>
      </div> -->
    </div>

    <div class="menu-list text-rtl">
      <SellerMenuList v-if="$parent.isSeller == 1" />
      <BuyerMenuList v-else />
    </div>
    <div class="switch-wrapper row hidden-md hidden-lg">
      <SwitchButtons :isSeller="$parent.isSeller" />
      <div class="my-biskool-image-wrapper">
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
    SellerMenuList,
    BuyerMenuList,
    SwitchButtons,
  },
  props: ["currentUser", "str", "assets"],
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    
  },
  mounted() {
    
  },
};
</script>
