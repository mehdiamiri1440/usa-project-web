<style >
.profile-carosel .owl-nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  margin-top: -10px;
  top: calc(50% - 10px);
  direction: ltr;
  padding: 0 15px;
  height: 0;
}
</style>
<style scoped>
#main {
  margin-right: 250px;
  margin-top: 42px;
  position: relative;
}
#main.has-verification-alert {
  margin-top: 99px;
}

#main.little-main {
  margin-right: 80px;
}

@media screen and (max-width: 991px) {
  #main,
  #main.little-main {
    margin-right: 0 !important;
  }
  #main.has-verification-alert {
    margin-top: 81px;
  }
}
</style>

<template>
  <div class="h-100">
    <header-dash-buyer
      :storage="storagePath"
      :assets="assets"
      :logout="'/logout'"
      :search-text="searchText"
    ></header-dash-buyer>

    <div
      id="main"
      class="h-100"
      :class="{ 'has-verification-alert': verificationAlert }"
    >
      <router-view
        :str="storagePath"
        :assets="assets"
        :user-type="currentUser.user_info.is_seller"
        :currentUser="currentUser"
        :verifiedUserContent="verifiedUserContent"
      ></router-view>
    </div>
  </div>
</template>


<script>
import HeaderDashBuyer from "../../components/dashboard/buyer/header/header";
import { eventBus } from "../../router.js";

export default {
  components: {
    "header-dash-buyer": HeaderDashBuyer,
  },
  props: ["userId", "isSeller", "assets", "storagePath", "verifiedUserContent"],
  data: function () {
    return {
      searchText: "",
      currentUser: {
        profile: {
          is_company: "",
          company_name: "",
          company_register_code: "",
          address: "",
          public_phone: "",
          profile_photo: this.storage + "",
          postal_code: "",
          shaba_code: "",
        },
        user_info: "",
      },
      verificationAlert: false,
    };
  },
  methods: {
    handleBackKeys: function () {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $("#description-modal").modal("hide");
      });
    },
  },
  mounted: function () {
    axios
      .post("/get_total_unread_messages_for_current_user")
      .then(function (response) {
        let messageCount = response.data.msg_count;
        eventBus.$emit("messageCount", messageCount);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  },
  watch: {
    currentUser(user) {
      this.$parent.currentUser = user;

      if (user.profile.created_at)
        this.$parent.currentUserCreatedAt = user.profile.created_at;
    },
  },
};
</script>
