<style  scoped>
@import url("../../../../css/owl.carousel.min.css");
@import url("../../../../css/owl-product-items-style.css");
.main {
  margin-top: 67px;
  overflow: hidden;
  margin-bottom: -60px;
}

h2 {
  text-align: right;
  font-size: 25px;
}
.banner-item-wrapper h2 {
  margin-bottom: 20px;
}
.reviews h2 {
  margin-bottom: 30px;
}

.carousel-item.item-1 {
  background: url("../../../../img/invite-image-1.jpg");
}

.carousel-item.item-2 {
  background: url("../../../../img/invite-image-2.jpg");
}

.carousel-item.item-3 {
  background: url("../../../../img/invite-image-3.jpg");
}

.carousel-item {
  font-weight: 500;
  color: #fff;
  padding: 84px 120px;
  font-size: 18px;
  background-size: cover !important;
}

.item-title {
  font-size: 30px;
  margin-bottom: 30px;
}

.image-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  overflow: hidden;
  float: right;
}

.user-info {
  overflow: hidden;
}

.user-info > p {
  float: right;
  font-size: 30px;
  font-weight: bold;
  color: #404b55;
  padding: 22px 20px 0;
}

.invite-content {
  font-size: 22px;
  direction: rtl;
  color: #555;
  line-height: 1.618;
  margin-top: 23px;
}

.invite-button {
  width: 100%;
  max-width: 335px;
  font-size: 25px;
  color: #fff;
  padding: 14px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 0 #349a87;
  background: linear-gradient(45deg, #1cb08c, #05c26f);
  margin-top: 45px;
}

.user-info-wrapper {
  padding-right: 105px;
  padding-top: 50px;
  position: relative;
  z-index: 1;
}

.growth-section {
  margin-top: 23px;
}

.growth-section img {
  position: relative;
  z-index: 1;
  max-width: 580px;
}

.growth-section svg {
  position: absolute;
  left: -30%;
  top: -30%;
  z-index: 0;
  width: 880px;
}

.banner-item {
  height: 160px;
  background-size: cover;
  border-radius: 12px;
  background-color: #404b55;
  background-position: 50% 0;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  margin-top: 20px;
  border: none;
  width: 100%;
  z-index: 0;
}
.banner-contents {
  position: relative;
  z-index: 1;
  height: 100%;
  text-align: right;
  color: #fff;
  direction: rtl;
}

.banner-contents p {
  font-size: 35px;
  padding: 18px 20px;
  font-weight: 500;
}

.banner-contents > div {
  position: absolute;
  left: 20px;
  bottom: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-size: 18px;
  padding: 5px 17px;
}

.banner-item::after {
  content: " ";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.banner-item-wrapper {
  max-width: 1150px;
  margin: 100px auto 0;
}

.review-image-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 70px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.26);
  float: right;
}

.reviews {
  max-width: 1150px;
  margin: 100px auto 0;
  padding-top: 70px;
  border-top: 1px solid #e0e0e0;
}

.review-item {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 10px 20px;
  overflow: hidden;
}

.review-user {
  width: 100%;
  float: right;
}

.review-user-name {
  font-size: 17px;
  font-weight: 500;
  float: right;
  padding: 25px 15px 0;
}

.review-user {
  float: right;
  width: 100%;
}
.review-content {
  float: right;
  width: 100%;
  line-height: 1.618;
  color: #333;
  padding: 13px 5px;
  min-height: 70px;
}

.main-categories > svg {
  width: 730px;
  position: absolute;
  z-index: 0;
  left: -560px;
  top: -270px;
}
.reviews-section-wrapper svg {
  position: absolute;
  right: -430px;
  width: 920px;
  top: 280px;
  z-index: -1;
}

.reviews-section-wrapper .invite-button-wrapper {
  float: right;
  width: 100%;
  margin: 35px auto 140px;
}

.register-invited-user {
  background: #fafafa;
  margin-top: 134px;
  padding: 60px 15px;
}

.register-invited-user h2 {
  font-size: 47px;
  background: -webkit-linear-gradient(45deg, #00c569, #21ad93);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-weight: bold;
  text-shadow: 0 2px 9px rgba(33, 173, 147, 0.43);
  padding: 5px;
}

.svg-content svg {
  position: absolute;
  right: -430px;
  max-width: 587px;
  top: 0;
}

@media screen and (max-width: 1199px) {
  .growth-section svg {
    left: -60%;
  }
}

@media screen and (max-width: 992px) {
  .user-info-wrapper {
    padding: 20px;
  }
  .svg-content svg {
    position: absolute;
    right: -520px;
    max-width: 587px;
    top: -330px;
  }
  .main-categories > svg {
    left: -630px;
  }
  .reviews-section-wrapper svg {
    right: -520px;
    top: 380px;
  }
  .carousel-item {
    height: 250px;
    padding: 15px;
    text-align: center;
    line-height: 1.618;
    padding-top: 50px;
    background-position: center !important;
  }
  .item-title {
    font-size: 25px;
  }
  .item-content {
    font-size: 15px;
  }
}

@media screen and (max-width: 768px) {
  .user-info-wrapper {
    padding: 0;
  }

  .register-invited-user {
    margin-top: 55px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0;
  }

  .main-categories,
  .reviews-section-wrapper {
    padding: 0;
  }
  .register-invited-user {
    background: none;
  }

  .register-invited-user h2 {
    font-size: 30px;
  }

  .svg-content svg {
    position: absolute;
    right: -520px;
    max-width: 587px;
    top: -330px;
  }
  .main-categories > svg {
    left: -630px;
  }
  .reviews-section-wrapper svg {
    right: -520px;
    top: 380px;
  }
  .carousel-item {
    height: 250px;
    padding: 15px;
    text-align: center;
    line-height: 1.618;
    padding-top: 50px;
    background-position: center !important;
  }
  .item-title {
    font-size: 25px;
  }
  .item-content {
    font-size: 15px;
  }
  .image-wrapper {
    width: 60px;
    height: 60px;
  }
  .user-info > p {
    font-size: 27px;
    padding: 14px 18px 0;
  }
  .invite-content {
    font-size: 19px;
  }

  .banner-contents p {
    font-size: 25px;
    padding: 18px 10px;
    line-height: 1.618;
  }
}
</style>

<style >
.owl-carousel button.owl-dot {
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  margin: 0 4px;
  transition: 600ms;
}
.owl-carousel button.owl-dot.active {
  background: #21ad93;
  transition: 600ms;
}

.banner-section .owl-dots {
  padding: 0;
  bottom: 50px;
}
</style>
<template>
  <div id="main" class="main container-fluid">
    <div class="row">
      <section class="banner-section owl-carousel">
        <article class="carousel-item item-1">
          <div class="item-title">خرید و فروش عمده</div>
          <div class="item-content">
            ارتباط مستقیم با خریداران و فروشندگان عمده محصولات غذایی و کشاورزی
          </div>
        </article>
        <article class="carousel-item item-2">
          <div class="item-title">آگاهی از قیمت های بازار</div>
          <div class="item-content">
            ارتباط مستقیم با خریداران و فروشندگان عمده محصولات غذایی و کشاورزی
          </div>
        </article>
        <article class="carousel-item item-3">
          <div class="item-title">ارتباط با هزاران خریدار و فروشنده</div>
          <div class="item-content">
            ارتباط مستقیم با خریداران و فروشندگان عمده محصولات غذایی و کشاورزی
          </div>
        </article>
      </section>
    </div>
    <section class="user-section-wrapper">
      <div
        class="col-xs-12 col-md-6 pull-right user-info-wrapper"
        v-if="inviterUser.user_info"
      >
        <div class="user-info">
          <div class="image-wrapper">
            <img
              v-if="inviterUser.profile.profile_photo"
              :src="str + '/' + inviterUser.profile.profile_photo"
              alt=""
            />
            <img v-else src="../../../../img/user-defult.png" alt="" />
          </div>
          <p
            v-text="
              inviterUser.user_info.first_name +
              ' ' +
              inviterUser.user_info.last_name
            "
          ></p>
        </div>
        <p class="invite-content">
          همکارتان
          <span
            v-text="
              inviterUser.user_info.first_name +
              ' ' +
              inviterUser.user_info.last_name
            "
          ></span>
          از شما دعوت کرده تا به بزرگترین سامانه خرید و فروش عمده محصولات غذایی،
          باسکول، بپیوندید.
        </p>
        <div class="invite-button-wrapper text-right">
          <button @click.prevent="setScrollToRegister()" class="invite-button">
            قبول دعوت می کنم
          </button>
        </div>
      </div>
      <div class="col-md-6 hidden-xs hidden-sm growth-section">
        <img src="../../../../img/growth.png" alt="buskool growth" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1200.784"
          height="589.583"
          viewBox="0 0 1200.784 589.583"
        >
          <path
            id="Path_38"
            data-name="Path 38"
            d="M4383.033,4796.385s-159.343-144.494-31.654-259.08,8.651-156.539,47.531-195.311,426.969,42.489,688.218,0,418.144-1.73,415.436,195.311-29.208,366.519-368.954,338.841-405.208,35.717-518.4,40.1S4383.033,4796.385,4383.033,4796.385Z"
            transform="translate(-4301.814 -4326.776)"
            fill="#cadcd9"
            opacity="0.195"
          />
        </svg>
      </div>
    </section>
    <div class="row">
      <section
        id="register-invited-user"
        class="register-invited-user col-xs-12"
      >
        <div class="svg-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="582.87"
            height="747.571"
            viewBox="0 0 582.87 747.571"
          >
            <g
              id="Group_462"
              data-name="Group 462"
              transform="translate(-1213.983 -684.908)"
            >
              <path
                id="Path_32"
                data-name="Path 32"
                d="M35.352,153.418S-34,338.192,21.574,484.719,25.34,684.9,42.263,734.477s48.222-61.548,161.935-7.212,358.847-62.859,357.668-314.828S302.707,62.7,251.319,57.728,185.679,5.75,136.409.145,35.352,153.418,35.352,153.418Z"
                transform="translate(1775.853 1432.479) rotate(180)"
                fill="#21ad93"
                opacity="0.105"
              />
              <path
                id="Path_33"
                data-name="Path 33"
                d="M35.352,153.418S-34,338.192,21.574,484.719,25.34,684.9,42.263,734.477s48.222-61.548,161.935-7.212,358.847-62.859,357.668-314.828S302.707,62.7,251.319,57.728,185.679,5.75,136.409.145,35.352,153.418,35.352,153.418Z"
                transform="translate(1796.853 1432.479) rotate(180)"
                fill="#21ad93"
                opacity="0.105"
              />
            </g>
          </svg>
        </div>
        <div class="text-center"><h2>ثبت نام رایگان</h2></div>
        <RegisterInvitedUser :categoryList="categoryList" />
      </section>
    </div>
    <section class="col-xs-12 main-categories">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="728.565"
        height="901.334"
        viewBox="0 0 728.565 901.334"
      >
        <g
          id="Group_467"
          data-name="Group 467"
          transform="matrix(-0.891, -0.454, 0.454, -0.891, -210.157, 1471.088)"
          opacity="0.342"
        >
          <path
            id="Path_34"
            data-name="Path 34"
            d="M35.352,153.418S-34,338.192,21.574,484.719,25.34,684.9,42.263,734.477s105.787,72.4,180.425,66.712S563.044,664.406,561.865,412.437,302.707,62.7,251.319,57.728,185.679,5.75,136.409.145,35.352,153.418,35.352,153.418Z"
            transform="matrix(0.966, -0.259, 0.259, 0.966, -429.166, 858.12)"
            fill="#1da1f2"
            opacity="0.195"
          />
          <path
            id="Path_35"
            data-name="Path 35"
            d="M35.352,153.418S-34,338.192,21.574,484.719s7.7,181.727,24.624,231.307,107.553,68.579,156.738,67.729,360.108-119.35,358.929-371.318S302.707,62.7,251.319,57.728,185.679,5.75,136.409.145,35.352,153.418,35.352,153.418Z"
            transform="translate(-415.21 858.591) rotate(-15)"
            fill="#1da1f2"
            opacity="0.195"
          />
        </g>
      </svg>

      <div class="banner-item-wrapper">
        <h2>دسته بندی های اصلی</h2>
        <div class="row">
          <div class="pull-right col-xs-12 col-sm-6">
            <router-link
              id="banner-item-1"
              tag="button"
              class="banner-item"
              :to="{
                name: 'productCategory',
                params: {
                  categoryName: 'فرآورده-های-غذایی',
                },
              }"
              :style="{ backgroundImage: 'url(' + getImageUrl(1) + ')' }"
            >
              <div class="banner-contents">
                <p>فراورده های غذایی</p>
                <div>
                  مشاهده همه
                  <i class="fa fa-arrow-left"></i>
                </div>
              </div>
            </router-link>
          </div>
          <div class="pull-right col-xs-12 col-sm-6">
            <router-link
              id="banner-item-2"
              tag="button"
              class="banner-item"
              :to="{
                name: 'productCategory',
                params: {
                  categoryName: 'کشاورزی',
                },
              }"
              :style="{ backgroundImage: 'url(' + getImageUrl(2) + ')' }"
            >
              <div class="banner-contents">
                <p>کشاورزی</p>
                <div>
                  مشاهده همه
                  <i class="fa fa-arrow-left"></i>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="reviews-section-wrapper col-xs-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="920.421"
        height="846.508"
        viewBox="0 0 920.421 846.508"
      >
        <g
          id="Group_476"
          data-name="Group 476"
          transform="translate(-675.734 588.964) rotate(-101)"
          opacity="0.342"
        >
          <path
            id="Path_35"
            data-name="Path 35"
            d="M35.352,153.418S-34,338.192,21.574,484.719,25.34,684.9,42.263,734.477s48.222-61.548,161.935-7.212,358.847-62.859,357.668-314.828S302.707,62.7,251.319,57.728,185.679,5.75,136.409.145,35.352,153.418,35.352,153.418Z"
            transform="matrix(0.966, -0.259, 0.259, 0.966, -415.21, 858.591)"
            fill="#556080"
            opacity="0.195"
          />
          <path
            id="Path_34"
            data-name="Path 34"
            d="M35.352,153.418S-34,338.192,21.574,484.719,25.34,684.9,42.263,734.477s48.222-61.548,161.935-7.212,358.847-62.859,357.668-314.828S302.707,62.7,251.319,57.728,185.679,5.75,136.409.145,35.352,153.418,35.352,153.418Z"
            transform="matrix(0.966, -0.259, 0.259, 0.966, -429.166, 858.12)"
            fill="#556080"
            opacity="0.195"
          />
        </g>
      </svg>

      <div class="reviews">
        <h2>نظرات کاربران</h2>
        <div class="owl-carousel">
          <article class="review-item" v-for="(item, i) in 7" :key="i">
            <div class="review-user">
              <div class="review-image-wrapper">
                <img src="../../../../img/user-defult.png" alt="" />
              </div>
              <p class="review-user-name">محمدامین دلداری</p>
            </div>
            <div class="review-content">
              لورم ایپسوم متن ساختگی در زمینه طراحی صفحات وب ومحتوای اینترنتی
            </div>
          </article>
        </div>
      </div>
      <div class="invite-button-wrapper text-center">
        <button @click.prevent="setScrollToRegister()" class="invite-button">
          ثبت نام رایگان
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import owlCarousel from "../../../owl.carousel.min";
import RegisterInvitedUser from "./invite-components/register-invited-user.vue";
export default {
  components: {
    RegisterInvitedUser,
  },
  props: ["str", "assets", "categoryList"],
  data() {
    return {
      inviterUser: {
        user_info: "",
      },
    };
  },
  methods: {
    init() {
      this.getInviterUser();
      this.setCarousel();
    },
    setCarousel() {
      $(".banner-section.owl-carousel").owlCarousel({
        autoplayTimeout: 5000,
        autoplay: true,
        loop: false,
        rewind: true,
        nav: true,
        navText: false,
        mouseDrag: true,
        margin: 30,
        dots: true,
        stagePadding: 0,
        rtl: true,
        items: 1,
      });
      $(".reviews .owl-carousel").owlCarousel({
        autoplayTimeout: 5000,
        autoplay: true,
        loop: false,
        rewind: true,
        nav: true,
        navText: false,
        mouseDrag: true,
        margin: 30,
        dots: true,
        stagePadding: 0,
        rtl: true,
        items: 2,
        responsive: {
          0: {
            items: 1,
            stagePadding: 0,
            navText: false,
            dots: true,
          },
          768: {
            items: 2,
            stagePadding: 0,
            navText: false,
            dots: true,
          },
        },
      });
    },
    setScrollToRegister() {
      let element = $("#register-invited-user");
      let elementTop = element.offset().top;
      let elementHeight = element.height();
      let windowHeight = $(window).height();
      $("html, body").animate(
        {
          scrollTop: elementTop - (windowHeight - elementHeight) / 2,
        },
        700
      );
    },
    getInviterUser() {
      let userName = this.$route.params.userName;
      axios
        .post("/load_profile_by_user_name", { user_name: userName })
        .then((response) => {
          this.inviterUser = response.data;
        })
        .catch(function (err) {
          window.location.href = "/404";
        });
    },
    getImageUrl(index) {
      return this.assets + "assets/img/banners/banner-" + index + ".jpg";
    },
  },
  mounted() {
    this.init();
  },
};
</script>
