<style scoped>
#main {
  margin-right: 250px;
  margin-top: 59px;
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
  mounted: function () {
    axios
      .post("/get_total_unread_messages_for_current_user")
      .then(function (response) {
        let messageCount = response.data.msg_count;
        this.$store.state.messagesStore.messageCount = messageCount;
      })
      .catch(function (error) {
        console.log("error", error);
      });
  },
  watch: {
    currentUser(user) {
      if (user.profile.created_at)
        this.$parent.currentUserCreatedAt = user.profile.created_at;
    },
  },
};
</script>
