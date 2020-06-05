<template>
  <div>
    <router-view :get-user-id="userId" name="contact-list" />
    <router-view :get-user-id="userId" name="group-list" />
  </div>
</template>

<script>
export default {
  props: ["str"],
  data: function() {
    return {
      groupStep: 0,
      userId: this.$parent.userId,
      assets: this.$parent.assets
    };
  }
};
</script>

