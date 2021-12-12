<template>
  <router-view
    :key="$route.fullPath"
    :str="str"
    :assets="assets"
    :userType="userType"
    :is-user-login="isUserLogin"
    :categoryList="categoryList"
    :currentUser="currentUser"
  />
</template>

<script>
export default {
  data: function () {
    return {
      verifiedUserContent: this.$parent.verifiedUserContent,
    };
  },
  props: [
    "str",
    "isUserLogin",
    "assets",
    "userType",
    "categoryList",
    "currentUser",
  ],
};
</script>
