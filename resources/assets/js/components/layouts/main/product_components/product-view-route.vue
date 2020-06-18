<template>
  <router-view :key="$route.fullPath" :str="str" :assets="assets" :userType="userType" />
</template>

<script>
export default {
  props: ["str", "assets", "userType"]
};
</script>