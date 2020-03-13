<style scoped>
#main {
  margin-right: 250px;
  margin-top: 65px;
  position: relative;
}

#main.little-main {
  margin-right: 80px;
}

@media screen and (max-width: 994px) {
  #main,
  #main.little-main {
    margin-right: 0 !important;
  }
}
</style>

<template>
  <div>
    <header-dash-buyer
      :logo="assets + 'assets/img/logo-buskool-white-red.png'"
      :storage="storagePath"
      :defultimg="assets + 'assets/img/user-defult.png'"
      :logout="'/logout'"
      :loading="assets + 'assets/img/gif/prload.gif'"
      :search-text="searchText"
    ></header-dash-buyer>

    <div id="main">
      <router-view
        :loading_img="assets + 'assets/img/gif/loading.gif'"
        :str="storagePath"
        :defimgitem="assets + 'assets/img/product.jpg'"
        :defultimg="assets + 'assets/img/user-defult.png'"
      ></router-view>
    </div>
  </div>
</template>


<script>
import HeaderDashBuyer from "../../components/dashboard/buyer/header/header";

export default {
  components: {
    "header-dash-buyer": HeaderDashBuyer
  },
  props: ["userId", "isSeller", "assets", "storagePath"],
  data: function() {
    return {
      searchText: ""
    };
  }
};
</script>
