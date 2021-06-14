
<style scoped>
p,
span,
div,
h3 {
  line-height: 1.618;
}
.green-button {
  width: initial;
  padding: 13px 15px;
  font-size: 16px;
}

.about-us-icons {
  margin: 7px auto 15px;
  text-align: center;
}

.about-us-icon {
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.about-us-icons .row > div {
  min-height: 310px;
  float: right;
}

.about-us-icons p {
  text-align: center;
}

.about-us-icons img {
  max-width: 130px;
}
</style>

<template>
  <div class="main-content-index-pages">
    <section class="parallax-section policy">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <h3 class="text-right">درباره ما</h3>
            <div class="col-md-12 col-sm-12">
              <p class="text-right">
                با توجه به تحقیقات و مطالعات صورت گرفته در بازار و حضور در نمایشگاه
                های داخلی و بین المللی حوزه محصولات کشاورزی و سابقه ی حضور در بازار صادرات ایران شاهد
                مشکلات عدیده‌ای از قبیل : عدم دسترسی مناسب به محصولات با کیفیت، فقدان شبکه دسترسی برای
                قیمت‌گذاری، وجود واسطه های بسیار زیاد و افزایش قیمت در تبع آن و هدر رفت سرمایه بودیم.
                لذا برآن شدیم تا با ایجاد ساختاری تکنولوژی محور در راستای حل و تسهیل این مشکلات گام
                برداریم.
              </p>
              <br />
              <p>
                از آنجا که ما خود بخش کوچکی از خانواده ی کشاورزی ایران هستیم، عزم کامل خود را برای ریشه
                کن کردن مشکلات دسترسی تولید کنندگان و خریداران محصولات کشاورزی به یکدیگر جزم کرده
                ایم و تا زمانی که این هدف محقق نشود دست از تلاش شبانه روزی خود بر نخواهیم داشت.
              </p>
              <br />
              <h3 class="text-right">ارزش های باسکول برای فروشندگان</h3>
              <br />
              <ul class="text-right">
                <li>
                  به راحتی فضای کاری خود را به دنیای دیجیتال گسترش دهید تا همه با برند و نام شما آشنا
                  شوند.
                </li>
                <li>با خریداران نام آشنا و معتبر معامله کنید.</li>
                <li>محصولات خود را به خریداران در سراسر ایران معرفی کنید.</li>
                <li>
                  عضوی از جامعه باسکول باشید، با اطلاع از بازار با قیمت و شرایط بهتر محصول خود را به
                  فروش برسانید.
                </li>
              </ul>
              <br />
              <h3 class="text-right">ارزش های باسکول برای خریداران</h3>
              <br />
              <ul class="text-right">
                <li>
                  کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها به صورت مستقیم ارتباط
                  برقرار کنید.
                </li>

                <li>بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه کنید.</li>
                <li>سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید.</li>
                <li>
                  عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار، با قیمت و شرایط بهتر
                  محصول خود را تهیه کنید.
                </li>
              </ul>
              <br />

              <h3 class="text-center">
                <router-link
                  :to="{name : 'register'}"
                  class="green-button"
                >هم اکنون عضو جامعه باسکول شوید</router-link>
              </h3>
              <p></p>
              <br />
              <div class="container about-us-icons">
                <div class="row">
                  <div class="col-xs-6 col-sm-4 col-md-3">
                    <div class="about-us-icon">
                      <img src="../../../../img/about-us/1.jpg" alt />
                    </div>
                    <p>با خریداران نام آشنا و معتبر معامله کنید.</p>
                  </div>
                  <div class="col-xs-6 col-sm-4 col-md-3">
                    <div class="about-us-icon">
                      <img src="../../../../img/about-us/2.jpg" alt />
                    </div>
                    <p>محصولات خود را به خریداران در سراسر ایران معرفی کنید.</p>
                  </div>
                  <div class="col-xs-6 col-sm-4 col-md-3">
                    <div class="about-us-icon">
                      <img src="../../../../img/about-us/3.jpg" alt />
                    </div>
                    <p>
                      عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار، با قیمت و
                      شرایط بهتر محصول خود را تهیه کنید.
                    </p>
                  </div>
                  <div class="col-xs-6 col-sm-4 col-md-3">
                    <div class="about-us-icon">
                      <img src="../../../../img/about-us/4.jpg" alt />
                    </div>
                    <p>
                      کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها به صورت
                      مستقیم ارتباط برقرار کنید.
                    </p>
                  </div>
                  <div class="col-xs-6 col-sm-4 col-md-3">
                    <div class="about-us-icon">
                      <img src="../../../../img/about-us/5.jpg" alt />
                    </div>
                    <p>بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه کنید.</p>
                  </div>
                  <div class="col-xs-6 col-sm-4 col-md-3">
                    <div class="about-us-icon">
                      <img src="../../../../img/about-us/6.jpg" alt />
                    </div>
                    <p>سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید.</p>
                  </div>
                </div>
              </div>
              <h3 class="text-center">
                <router-link :to="{name : 'help'}" class="green-button">باسکول چگونه کار میکند؟</router-link>
              </h3>
              <p class="text-right">
                سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل support@buskool.com با ما در میان
                بگذارید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { eventBus } from "../../../router/router";
import Route from "../../../router/components/route";

export default {
  components: { Route },
  methods: {
    stopLoader: function() {
      eventBus.$emit("isLoading", false);
    }
  },
  mounted: function() {
    var self = this;
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated: function() {
    this.$nextTick(this.stopLoader);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/about-us" });
  },
  metaInfo() {
    return {
      title: " درباره ما ",
      titleTemplate: "باسکول | %s",
      meta: [
        {
          name: "description",
          content:
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
        },
        {
          name: "author",
          content: "باسکول"
        },
        {
          property: "og:description",
          content:
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
        },
        {
          property: "og:site_name",
          content: "باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران"
        },
        {
          property: "og:title",
          content: " باسکول | بازار خرید و فروش عمده محصولات کشاورزی "
        }
      ]
    };
  }
};
</script>
