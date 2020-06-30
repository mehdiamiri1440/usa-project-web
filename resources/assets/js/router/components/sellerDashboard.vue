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

#pricing-modal {
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0 !important ;
}
#pricing-modal .modal-content {
  min-height: 100%;
  border-radius: 0;
  border: none;
  float: right;
  width: 100%;
  background: #f6f6f6;
}

.modal-header {
  padding: 9px 15px 10px;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
}

.modal-dialog {
  margin: 0;
  height: 100%;
  width: 100%;
}
.close-modal {
  font-size: 20px;
  color: #777;
  position: absolute;
  right: 0;
  padding: 8px 15px 2px;
  top: 0;
}

.modal-title {
  font-size: 16px;
  font-weight: 800;
  color: #474747;
  text-align: center;
}

.modal-body {
  position: relative;
  padding: 80px 15px 0;
}

@media screen and (max-width: 994px) {
  #main,
  #main.little-main,
  #main.is-required-fix-alert {
    margin-right: 0 !important;
  }
  .modal-body {
    padding-top: 40px;
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
    <!--  #regex pricing modal  -->

    <!--modal-->
    <div class="container" v-show="is_pricing_active">
      <div id="pricing-modal" class="pricing-modal modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <a href="#" class="close-modal" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>
              <div class="modal-title">
                <span>ارتقا عضویت</span>
              </div>
            </div>

            <div class="modal-body col-xs-12 col-lg-8 col-lg-offset-2">
              <pricing-contents justPro="false" />
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <!-- end regex pricing modal -->

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
import pricingContents from "../../components/dashboard/seller/pricing-seller-page/pricing-tables/pricing-package-contents";
import { eventBus } from "../router.js";

export default {
  components: {
    "header-dash-seller": HeaderDashSeller,
    "pricing-contents": pricingContents
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
      currentUser: {
        profile: {
          is_company: "",
          company_name: "",
          company_register_code: "",
          address: "",
          public_phone: "",
          profile_photo: this.storage + "",
          postal_code: "",
          shaba_code: ""
        },
        user_info: ""
      },
      buttonActiveInSteps: true,
      isRequiredFixAlert: false,
      active_pakage_type: 3,
      is_pricing_active: false
    };
  },
  methods: {
    init: function() {
      this.checkButtonIsHide();

      $("#pricing-modal").on("show.bs.modal", e => {
        this.handleBackKeys();
      });
      $("#pricing-modal").on("hidden.bs.modal", e => {
        this.createCookie("closePricingModal", "true", 30 * (24 * 60)); //for 30 days
      });

      axios
        .post("/get_total_unread_messages_for_current_user")
        .then(function(response) {
          let messageCount = response.data.msg_count;
          eventBus.$emit("messageCount", messageCount);
        })
        .catch(function(error) {
          console.log("error", error);
        });

      axios.post("/get_show_pricing_page_status").then(response => {
        if (
          !this.getCookie("closePricingModal") &&
          response.data.show &&
          window.location.pathname != "/seller/register-product"
        ) {
          this.is_pricing_active = true;
          this.checkPricingModal();
        }
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
    },
    handleBackKeys: function() {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function(e) {
        $("#pricing-modal").modal("hide");
      });
    },
    checkPricingModal: function() {
      if (
        this.$route.name == "dashboardPricingTableSeller" ||
        this.$route.name == "dashboardProductPricing" ||
        this.$route.name == "dashboardBuyAdPricing"
      ) {
        this.is_pricing_active = false;
      } else {
      }
    }
  },
  watch: {
    $route() {
      this.checkButtonIsHide();
      this.checkPricingModal();
      this.buttonActiveInSteps = true;
    },
    active_pakage_type: function() {
      this.checkCookie();
    },
    is_pricing_active: function() {
      if (this.is_pricing_active == true) {
        $("#pricing-modal").modal("show");
      }
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
