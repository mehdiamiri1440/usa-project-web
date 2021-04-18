<style scoped>
.main-content {
  direction: rtl;
  line-height: 1.618;
}

.guide-wrapper {
  max-width: 992px;
  margin: 50px auto;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 30px;
}

h1 {
  font-size: 18px;
  font-weight: bold;
}

p.default-text {
  font-size: 16px;
  color: #333;
  margin: 30px auto;
  font-weight: bold;
}

.info-wrapper {
  max-width: 500px;
  background: #f6fbff;
  margin: 0 auto;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  margin-bottom: 15px;
}

.info-wrapper p {
  color: #1da1f2;
  font-size: 16px;
  font-weight: 500;
}

.info-wrapper button {
  margin: 0;
  border-radius: 8px;
  font-size: 15px;
  padding: 6px;
  width: 123px;
}

.info-wrapper.upgrade {
  background: #eefef6;
}

.info-wrapper.upgrade p {
  color: #21ad93;
}

ul.list-info-wrapper {
  padding-right: 15px;
  margin: 30px auto;
}

ul.list-info-wrapper li {
  color: #556080;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 15px;
  position: relative;
}

ul.list-info-wrapper li::after {
  content: "*";
  color: #e41c38;
  position: absolute;
  top: 4px;
  right: -15px;
}

.notic-wrapper {
  background: #fafafa;
  border-radius: 12px;
  padding: 15px;
}

.notic-wrapper span {
  color: #556080;
  margin: 7px auto 20px;
  display: block;
}

@media screen and (max-width: 991px) {
  .guide-wrapper {
    border: none;
    padding: 0;
  }
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
    <div class="guide-wrapper">
      <h1>راهنمای نمایش اطلاعات تماس</h1>

      <p class="default-text">
        برای نمايش شماره تماس خود به خریداران، می توانید یکی از راه های زیر را
        انجام دهید.
      </p>
      <div class="info-wrapper upgrade">
        <p>ارتقا عضویت در باسکول</p>
        <router-link
          tag="button"
          class="green-button bg-light-green"
          :to="{ name: 'dashboardPricingTableSeller' }"
        >
          ارتقا عضویت
        </router-link>
      </div>
      <div class="info-wrapper">
        <p>شارژ کیف پول خود در باسکول</p>
        <button @click.prevent="showWallet()" class="green-button bg-blue">
          افزایش موجودی
        </button>
      </div>
      <ul class="list-info-wrapper">
        <li>
          هر خریدار جدید که شماره تماس شما را ببند مبلغ
          <span class="green-text">۵۰۰ تومان</span> از حساب کیف پول شما کم خواهد
          شد. (خریداران تکراری محاسبه نمی شوند)
        </li>
        <li>
          کاربرانی که نوع عضویت پایه یا ویژه دارند نیازی به شارژ کیف پول ندارند.
        </li>
      </ul>

      <div class="notic-wrapper">
        <p>
          نکته: بصورت پیش فرض اجازه نمايش شماره تماس شما به خریداران فعال است
        </p>
        <span>
          در صورتیکه تمايل به نمايش شماره ندارید از قسمت: باسکول من گزینه ویرایش
          پروفایل را انتخاب کرده و تیک دسترسی را بردارید.
        </span>
        <p>
          نکته: تنها کاربرانی که ارتقا عضویت داده اند به شماره تماس خریداران
          دسترسی دارند.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../../router/router";

export default {
  data: function () {
    return {
      items: "",
    };
  },
  methods: {
    showWallet() {
      $("#wallet-modal").modal("show");
    },
  },
  mounted() {
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/guide" });
  },
};
</script>
