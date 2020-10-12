<template>
  <div>
    <router-view
      :get-user-id="userId"
      :is-required-fix-alert="this.$parent.isRequiredFixAlert"
      :contact-is-seller="userType"
      name="contact-list"
    />

    <!-- <router-view
      :get-user-id="userId"
      :contact-is-seller="userType"
      name="group-list"
    /> -->
  </div>
</template>

<script>
export default {
  props: ["str", "userType"],
  data: function () {
    return {
      groupStep: 0,
      userId: this.$parent.userId,
      assets: this.$parent.assets,
      verifiedUserContent: this.$parent.verifiedUserContent,
    };
  },
};
</script>

