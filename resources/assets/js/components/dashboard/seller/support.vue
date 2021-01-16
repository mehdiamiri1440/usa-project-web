<style scoped>
.help {
  direction: rtl;
  line-height: 1.618;
}

ol {
  list-style: inherit;
  list-style-type: decimal !important;
}

ul {
  padding: 0 15px;
  list-style: inherit;
}

.help .title_list_help {
  font-size: 16px;
  font-weight: 800;
}

.help .title_list_help ol {
  margin: 25px 0;
  font-size: 14px;
  font-weight: 400;
  padding: 15px 30px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.075);
  background: #fff;
}

.help .title_list_help li {
  padding: 6px 0;
}

.title {
  text-align: right;
  padding: 13px 15px;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}

@media screen and (max-width: 767px) {
  .title {
    text-align: center;
  }

  .main-content {
    padding-bottom: 90px;
  }
}
</style>
<template>
  <section class="main-content col-xs-12">
    <div class="help">
      <div class="title col-xs-12">
        <div class="row">
          <div class="col-xs-12 col-sm-4 pull-right">
            <h1>پشتیبانی باسکول</h1>
          </div>
        </div>
      </div>
      <ul class="col-xs-12">
        <li class="title_list_help">
          از هریک از راه های زیر که برایتان راحت تر است با ما در ارتباط باشید.

          <ol class="list-group">
            <li>شماره تماس :‌09118413054 / 09178928266</li>
            <li>ایمیل پشتیبانی :‌support@buskool.com</li>
            <li>ایمیل شخصی مدیر فنی :‌ ali_delkhosh@ymail.com</li>
          </ol>
        </li>
        <li>
          <p class="text-right">
            سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل
            support@buskool.com با ما در میان بگذارید.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../../router/router";

export default {
  data: function () {
    return {};
  },
  mounted() {
    eventBus.$emit("subHeader", false);
  },
};
</script>
