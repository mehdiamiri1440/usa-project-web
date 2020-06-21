<template>
  <div>
    <router-view
      :get-user-id="userId"
      :is-required-fix-alert="this.$parent.isRequiredFixAlert"
      name="contact-list"
    />
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
      assets: this.$parent.assets,
      verifiedUserContent: this.$parent.verifiedUserContent
    };
  }
};
</script>

