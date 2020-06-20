<style scoped>
#main {
  margin-right: 250px;
  margin-top: 59px;
  position: relative;
}

#main.little-main {
  margin-right: 80px;
}

.fixed-action-button-wrapper {
  position: fixed;
  width: 60px;
  height: 60px;
  right: 25px;
  bottom: 25px;
  font-weight: bold;
  font-size: 10px;
  background: #e51c38;
  border-radius: 50px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.fixed-action-button-wrapper .fixed-action {
  background: none;
  border: none;
  text-align: center;
  color: #fff;
  padding: 0;
  width: 100%;
  height: 100%;
}

.fixed-action-button-wrapper .fixed-action i {
  display: block;
  font-size: 18px;
}
#main.is-required-fix-alert {
  margin-top: 84px !important;
}
@media screen and (max-width: 994px) {
  #main,
  #main.little-main,
  #main.is-required-fix-alert {
    margin-right: 0 !important;
  }
}
@media screen and (max-width: 992px) {
  #main.is-required-fix-alert {
    margin-top: 89px !important;
  }
}

@media screen and (max-width: 767px) {
  #main.is-required-fix-alert {
    margin-top: 84px !important;
  }
}
</style>

<template>
  <div>
    <header-dash-seller
      :storage="storagePath"
      :logout="'/logout'"
      :user-id="userId"
      :messageCount="messageCount"
      :is-required-fix-alert="this.isRequiredFixAlert"
    ></header-dash-seller>

    <div id="main" :class="{ 'is-required-fix-alert' : isRequiredFixAlert}">
      <router-view :str="storagePath" :user-type="isSeller"></router-view>
    </div>

    <div
      v-if="buttonIsActive && buttonActiveInSteps"
      class="fixed-action-button-wrapper hidden-sm hidden-md hidden-lg"
    >
      <router-link tag="button" :to="{name : 'buyAdRequestsSeller'}" class="fixed-action">
        <i class="fa fa-list-alt"></i>
        <span>درخواست ها</span>
      </router-link>
    </div>
  </div>
</template>


<script>
import HeaderDashSeller from "../../components/dashboard/seller/header/header";
import { eventBus } from "../router.js";

export default {
  components: {
    "header-dash-seller": HeaderDashSeller
  },
  props: [
    "userId",
    "isSeller",
    "assets",
    "storagePath",
    "messageCount",
    "verifiedUserContent"
  ],
  data: function() {
    return {
      linkHideStates: ["buyAd-requests", "messenger/contacts"],
      buttonIsActive: true,
      buttonActiveInSteps: true,
      isRequiredFixAlert: false,
      active_pakage_type: 3
    };
  },
  methods: {
    init: function() {
      this.checkButtonIsHide();

      axios
        .post("/get_total_unread_messages_for_current_user")
        .then(function(response) {
          let messageCount = response.data.msg_count;
          eventBus.$emit("messageCount", messageCount);
        })
        .catch(function(error) {
          console.log("error", error);
        });
    },
    subIsActive: function(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    checkButtonIsHide: function() {
      let buttonActive = true;
      if (this.checkPricingRoute()) {
        this.isRequiredFixAlert = false;
      } else {
        this.checkCookie();
      }
      for (var i = 0; i < this.linkHideStates.length; i++) {
        if (this.subIsActive("/seller/" + this.linkHideStates[i])) {
          buttonActive = false;
        }
      }
      this.buttonIsActive = buttonActive ? true : false;
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
      if (
        this.active_pakage_type == 3 ||
        this.getCookie("closeSellerFixModal") == "false" ||
        this.checkPricingRoute()
      ) {
        this.isRequiredFixAlert = false;
      } else {
        this.isRequiredFixAlert = true;
      }
    },
    checkPricingRoute: function() {
      let pageIsPricing = false;
      if (
        this.urlIsPricing("dashboardPricingTableSeller") ||
        this.urlIsPricing("dashboardBuyAdPricing") ||
        this.urlIsPricing("dashboardProductPricing")
      ) {
        pageIsPricing = true;
      }
      return pageIsPricing;
    },
    urlIsPricing(pricingName) {
      if (this.$route.name == pricingName) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    $route() {
      this.checkButtonIsHide();
      this.buttonActiveInSteps = true;
    },
    active_pakage_type: function() {
      this.checkCookie();
    }
  },
  mounted: function() {
    this.init();

    eventBus.$on("buyAdbuttonActive", event => {
      this.buttonActiveInSteps = event;
    });
  },
  created: function() {
    this.checkCookie();
  }
};
</script>
