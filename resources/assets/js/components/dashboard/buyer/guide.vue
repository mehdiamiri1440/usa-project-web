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

@media screen and (max-width: 992px) {
  .list-group {
    margin-bottom: 100px !important;
  }
}

@media screen and (max-width: 767px) {
  .title {
    text-align: center;
  }
}
</style>
<template>
  <section class="main-content col-xs-12">
    <div class="help">
      <div class="title col-xs-12">
        <div class="row hidden-xs hidden-sm">
          <div class="col-xs-12 col-sm-4 pull-right">
            <h1>راهنما</h1>
          </div>
        </div>
        <br />
      </div>

      <ul class="col-xs-12">
        <li class="title_list_help">
          بازرگانان و خریدارن محترم می توانید طبق راهنمای زیر، نسبت به ثبت سفارش
          و استعلام قیمت محصولات اقدام کنید:
          <ol class="list-group">
            <li>
              در صورتی که از طریق گوشی موبایل خود از خدمات وبسایت استفاده می
              کنید بالای صفحه گوشه سمت راست روی آیکون مربوطه بزنید تا به منو
              دسترسی پیدا کنید.
            </li>
            <li>
              به قسمت
              <router-link :to="{ name: 'registerRequestBuyer' }">
                ثبت درخواست خرید </router-link
              >رفته و اطلاعات لازم جهت خرید محصول مورد نظر خود را وارد کنید.
              <router-link
                :to="{ name: 'registerRequestBuyer' }"
                class="guide-link"
              >
                ثبت درخواست خرید
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              پس از تنظیم و ثبت درخواست خرید، این درخواست ابتدا باید به تایید
              کارشناسان ما برسد و سپس به تامین کنندگان مرتبط ارسال می شود تا
              پیشنهادهای خود را برای شما ارسال کنند.
            </li>
            <li>
              در قسمت
              <router-link :to="{ name: 'productList' }">
                لیست محصولات </router-link
              >می توانید متناسب با نیاز خود محصول و تامین کنندگان مورد نظر را
              پیدا کرده و نسبت به انجام معامله با وی و کسب اطلاعات بیشتر، با
              مراجعه به صفحه ی پروفایل فروشنده و کلیک روی دکمه ی ارسال پیام با
              او وارد چت شوید.
              <router-link :to="{ name: 'productList' }" class="guide-link">
                لیست محصولات
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
            <li>
              پس از ثبت درخواست خرید و تایید آن توسط کارشناسان باسکول شماره تماس
              شما برای فروشندگان واقعی قابل دسترسی است برای تغییر تنظیمات از
              قسمت ویرایش پروفایل، دسترسی به شماره تماس را غیر فعال کنید.
            </li>
            <li>
              هر گونه بروز رسانی پروفایل، پس از تایید کارشناسان ما برای دیگران
              قابل مشاهده خواهد بود.
            </li>
            <li>
              در صورت بروز هرگونه مشکل با خدمتگزاران خود تماس بگیرید.
              <router-link :to="{ name: 'supportBuyer' }" class="guide-link">
                پشتیبانی باسکول
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </li>
          </ol>
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
