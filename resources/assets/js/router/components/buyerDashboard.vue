<style scoped>
#main {
  margin-right: 250px;
  margin-top: 65px;
  position: relative;
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
  <div>
    <header-dash-buyer
      :storage="storagePath"
      :logout="'/logout'"
      :search-text="searchText"
    ></header-dash-buyer>

    <div id="main">
      <router-view
        :str="storagePath"
        :user-type="currentUser.user_info.is_seller"
      ></router-view>
    </div>
  </div>
</template>


<script>
import HeaderDashBuyer from "../../components/dashboard/buyer/header/header";
import { eventBus } from "../router.js";

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
    };
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
};
</script>
