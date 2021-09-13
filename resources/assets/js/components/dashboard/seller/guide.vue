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
  border: 1px solid #e9ecef;
  border-radius: 12px;
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

.guide-link {
  margin: 20px auto 5px;
  display: inline-block;
  font-size: 17px;
  font-weight: bold;
  color: #1da1f2;
  -webkit-transition: 300ms;
  transition: 300ms;
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
          <div class="col-xs-12 col-sm-4 pull-right hidden-xs hidden-sm">
            <h1>راهنما</h1>
          </div>
          <br />
        </div>
      </div>

      <ul class="col-xs-12">
        <li class="title_list_help">
          کشاورزان و تامین کنندگان محترم، می توانید نسبت به فروش مستقیم و ثبت
          محصولات خود و طبق راهنمای زیر اقدام کنید:
          <ol class="list-group">
            <li>
              در صورتی که از طریق گوشی موبایل خود از خدمات وبسایت استفاده می
              کنید بالای صفحه گوشه سمت راست روی آیکون مربوطه بزنید تا به منو
              دسترسی پیدا کنید.
            </li>
            <li>
              تکمیل کردن هر چه بیشتر پروفایل سبب رغبت بیشتر خریداران با شما می
              شود. شما میتواننید در قسمت
              <router-link :to="{ name: 'profileBasicSeller' }">
                ویرایش پروفایل </router-link
              >نسبت به تکمیل و به روز رسانی پروفایل خود اقدام کنید.

              <router-link
                :to="{ name: 'profileBasicSeller' }"
                class="guide-link"
              >
                ویرایش پروفایل
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              شما میتوانید نسبت به احراز هویت مشخصات حقیقی یا حقوقی خود برای جلب
              اعتماد خریداران اقدام کنید.
              <router-link
                :to="{ name: 'profileBasicSellerVeficiation' }"
                class="guide-link"
              >
                انجام احراز هویت
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              به قسمت
              <router-link :to="{ name: 'registerProductSeller' }"
                >ثبت محصول </router-link
              >رفته و اطلاعات محصولات خود را بصورت کامل پر کنید. این محصولات
              بهمراه جزییات در صفحه پروفایل شخصی شما به خریداران نمایش داده می
              شود.
              <router-link
                :to="{ name: 'registerProductSeller' }"
                class="guide-link"
              >
                ثبت محصول
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              پیشنهاد های خرید از سوی خریداران را میتوانید در قسمت
              <router-link :to="{ name: 'mainBuyAdRequests' }">
                درخواست ها </router-link
              >مشاهده کنیدو در صورت داشتن آمادگی جهت تامین محصول، قیمت پیشنهادی،
              تصویر محصولات و توضیحات مربوطه را به خریدار ارسال نمایید.
              <router-link
                :to="{ name: 'mainBuyAdRequests' }"
                class="guide-link"
              >
                درخواست های خرید
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              شما میتوانید در قسمت خریداران پیشنهادی با خریدارانی که به دنبال
              محصولات شما هستند ارتباط برقرار کنید.
              <router-link
                :to="{ name: 'messagesRequestSeller' }"
                class="guide-link"
              >
                خریداران
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              خریداران در صورت رغبت از طریق پیام یا تماس تلفنی با شما در ارتباط
              خواهند بود. لیست پیام های شما در قسمت
              <router-link :to="{ name: 'messagesSeller' }">
                پیام ها </router-link
              >قرار دارد.
              <router-link :to="{ name: 'messagesSeller' }" class="guide-link">
                پیام ها
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              در صورتیکه مایل به نمایش شماره تماس خود به خریدران هستید راهنمای
              نمایش اطلاعات تماس را که در لینک مقابل آمده مطالعه کنید.
              <router-link
                :to="{ name: 'showNumberGuideSeller' }"
                class="guide-link"
              >
                راهنمای نمایش اطلاعات تماس
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              در صورت بروز هرگونه مشکل با خدمتگزاران خود تماس بگیرید.
              <router-link :to="{ name: 'supportSeller' }" class="guide-link">
                پشتیبانی باسکول
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
          </ol>
          <!--                    <p class="text-center text-danger">  پشتیبانی :‌۰۹۱۱۸۴۱۳۰۵۴ </p>-->
        </li>
      </ul>
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
