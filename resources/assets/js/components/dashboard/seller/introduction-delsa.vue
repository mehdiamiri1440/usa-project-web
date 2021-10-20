<style scoped>
@media screen and (max-width: 767px) {
}
</style>
<template>
  <section class="main-content col-xs-12">
    <div class="intro-delsa">
      <div class="image-wrapper">
        <img src="../../../../img/intro-delsa.gif" alt="دلسا" />
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../../router/router";

export default {
  data: function () {
    return {
      items: [
        {
          message: "راهنما",
          url: "guide",
        },
      ],
    };
  },
  mounted() {
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/guide" });
  },
};
</script>
