<style scoped>
@media screen and (max-width: 767px) {
}
</style>
<template>
  <section class="main-content col-xs-12">
    <div class="help">
      <div class="title col-xs-12">
        <div class="row">
          <div class="col-xs-12 col-sm-4 pull-right hidden-xs hidden-sm">
            <h1>راهنما</h1>
          </div>
          <br />
        </div>
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
