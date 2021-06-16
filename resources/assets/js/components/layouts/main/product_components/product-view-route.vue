<template>
  <router-view
    :key="$route.fullPath"
    :str="str"
    :assets="assets"
    :userType="userType"
  />
</template>

<script>
export default {
  data: function () {
    return {
      verifiedUserContent: this.$parent.verifiedUserContent,
    };
  },
  props: ["str", "assets", "userType"],
};
</script>
