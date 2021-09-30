
<style scoped>
@import url("../../../../../css/owl.carousel.min.css");

p {
  line-height: 1.618;
}
.box-title {
  font-size: 18px;
  color: #313a43;
}

.progress-item-wrapper {
  margin: 10px 0;
}

.progress-item-wrapper > span {
  width: 85px;
  height: 5px;
  border-radius: 50px;
  background: #cccccc;
  margin-left: 5px;
  display: inline-block;
}

.item {
  border: 1px solid #999;
  border-radius: 12px;
  padding: 20px 10px;
}

.title-item {
  font-size: 17px;
  font-weight: 500;
  color: #313a43;
}

.content-item {
  color: #7e7e7e;
  margin: 13px 0 10px;
  line-height: 1.618;
  min-height: 45px;
}

.content-button {
  margin-top: 15px;
  border-radius: 12px;
  min-width: 180px;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  padding: 5px;
}
.item-wrapper {
  margin-top: 30px;
}
.item-wrapper .pull-right {
  width: 100%;
}
.wrapper-bg {
  border: none;
}

@media screen and (max-width: 768px) {
  .progress-item-wrapper > span {
    width: 65px;
  }
}
</style>
<template>
  <div class="complete-the-profile padding-buttom-fixed" v-if="itemCount < 4">
    <div class="box-title">
      میزان تکمیل پروفایل :
      <span v-if="itemCount == 0" class="red-text">خیلی ضعیف</span>
      <span v-else-if="itemCount == 1" class="yellow-text">ضعیف</span>
      <span v-else-if="itemCount == 2" class="blue-text">متوسط</span>
      <span v-else-if="itemCount == 3" class="green-text">خوب</span>
    </div>
    <div class="progress-item-wrapper">
      <span
        v-for="(item, index) in progressItems"
        :class="{ 'bg-green': item == 1 }"
        :key="index"
      ></span>
    </div>
    <p class="gray-text">
      اطلاعات خود را تکمیل کنید تا ارتباط بهتری پیدا کنید با خریداران و
      فروشندگان این یک متن تستی است که باید ویرایش شود.
    </p>
    <div id="clone-box" class="hidden">
      <div
        v-if="!verification"
        :class="{ 'ready-clone': !verification }"
        data-merge="2"
      >
        <article class="item">
          <p class="title-item">
            <i class="fa fa-phone-square brand-text"></i>
            <span> احراز هویت </span>
          </p>
          <p class="content-item">
            با احراز هویت، اعتماد خریداران و فروشندگان را به خود جلب کنید.
          </p>
          <div class="text-center">
            <button class="content-button verification-button green-button">
              احراز هویت کنید
            </button>
          </div>
        </article>
      </div>
      <div
        v-if="$parent.profileDescription.length < 200"
        :class="{ 'ready-clone': $parent.profileDescription.length < 200 }"
        data-merge="2"
      >
        <article class="item">
          <p class="title-item">
            <i class="fa fa-comment-alt"></i>
            <span> درباره شما </span>
          </p>
          <p class="content-item">
            نوشتن توضیحات کافی درمورد خودتان باعث شناخت بیشتر سایر کاربران از
            شما می‌شود .
          </p>
          <div class="text-center">
            <button
              type="button"
              data-toggle="modal"
              data-target="#description-modal"
              class="content-button green-button"
            >
              درباره شما
            </button>
          </div>
        </article>
      </div>
      <div
        v-if="!$parent.currentUser.profile.profile_photo"
        :class="{ 'ready-clone': !$parent.currentUser.profile.profile_photo }"
        data-merge="2"
      >
        <article class="item">
          <p class="title-item">
            <i class="fa fa-comment-alt"></i>
            <span> تصویر پروفایل </span>
          </p>
          <p class="content-item">
            داشتن تصویر پروفایل مناسب یکی از عوامل اعتماد کاربران به شماست .
          </p>
          <div class="text-center">
            <button class="content-button upload-image green-button">
              تصویر پروفایل
            </button>
          </div>
        </article>
      </div>

      <div
        v-if="$parent.invitedUsers.length <= 0"
        :class="{ 'ready-clone': $parent.invitedUsers.length <= 0 }"
        data-merge="2"
      >
        <article class="item">
          <p class="title-item">
            <i class="fa fa-share-alt brand-text"></i>
            <span>معرفی به همکاران </span>
          </p>
          <p class="content-item">
            با معرفی باسکول به همکارانتان، اعتبار پروفایل خود را افزایش دهید.
          </p>
          <div class="text-center">
            <button class="content-button referral-button green-button">
              معرفی به همکاران
            </button>
          </div>
        </article>
      </div>
    </div>
    <div class="row">
      <div class="owl-carousel owl-theme profile-carosel item-wrapper"></div>
    </div>
  </div>
</template>

<script>
import owlCarousel from "../../../../owl.carousel.min.js";
import { eventBus } from "../../../../router/router";

export default {
  data() {
    return {
      itemCount: 0,
      progressItems: [0, 0, 0, 0],
      description: 0,
      verification: 0,
      userImage: 0,
      referral: 0,
      baseUrl: "",
      shareText:
        "از شما دعوت می کنم تا به جمع بازرگانان در باسکول (بزرگترین مرجع خرید و فروش عمده محصولات غذایی و کشاورزی ایران) بپیوندید. اگر این دعوت را قبول می کنید روی لینک معرف زیر بزنید",
    };
  },
  methods: {
    resetData() {
      this.description = 0;
      this.verification = 0;
      this.userImage = 0;
      this.referral = 0;
    },
    sumCount() {
      this.itemCount = 0;

      this.itemCount =
        this.description + this.verification + this.userImage + this.referral;
    },
    updateProgress() {
      this.sumCount();
      this.progressItems = [0, 0, 0, 0];
      if (this.itemCount) {
        for (let i = 1; i <= this.progressItems.length; i++) {
          if (this.itemCount >= i) {
            this.progressItems[i - 1] = 1;
          }
        }
      }
      this.$nextTick(() => {
        this.resetCarousel();
      });
    },
    resetCarousel() {
      $(".owl-carousel").trigger("destroy.owl.carousel"); //these 3 lines kill the owl, and returns the markup to the initial state
      $(".owl-carousel").find(".owl-stage-outer").children().unwrap();
      $(".owl-carousel").removeClass(
        "owl-center owl-loaded owl-text-select-on"
      );
      if ($(".owl-carousel").children().length > 0) {
        $(".owl-carousel").empty();
        $("#clone-box")
          .children(".ready-clone")
          .clone()
          .appendTo(".owl-carousel");
      } else {
        $("#clone-box")
          .children(".ready-clone")
          .clone()
          .appendTo(".owl-carousel");
      }
      this.openImageInput();
      $(".owl-carousel .verification-button").on("click", () => {
        this.verificationButtonClick();
      });
      $(".owl-carousel .referral-button").on("click", () => {
        this.referralButtonClick();
      });
      this.loadCarosel(); //re-initialise the owl
    },
    loadCarosel() {
      let owl = $(".owl-carousel.item-wrapper");

      owl.owlCarousel({
        autoplay: false,
        autoplayTimeout: 3000,
        loop: false,
        rewind: true,
        nav: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        mouseDrag: true,
        margin: 15,
        dots: true,
        stagePadding: 5,
        rtl: true,
        responsive: {
          0: {
            items: 2,
            stagePadding: 15,
            loop: true,
            nav: true,
            dots: true,
            mergeFit: true,
          },
          520: {
            items: 3,
            loop: true,
            stagePadding: 15,
            nav: true,
            dots: true,
            mergeFit: true,
          },
          1199: {
            items: 6,
            loop: true,
            stagePadding: 15,
          },
          1450: {
            items: 8,
            stagePadding: 15,
          },
        },
      });
    },
    openImageInput() {
      $(".owl-carousel .upload-image").on("click", () => {
        document.getElementById("imgInp").click();
      });
    },
    verificationButtonClick() {
      this.$router.push({ name: "profileBasicBuyerVeficiation" });
    },
    referralButtonClick() {
      this.openShareModal();
    },
    openShareModal() {
      this.baseUrl = getBase();

      let url =
        this.baseUrl + "invite/" + this.$parent.currentUser.user_info.user_name;
      let shareItem = {
        shareModalUrl: url,
        shareModalText: this.shareText,
        shareModalTitle: "ارسال برای همکاران",
      };
      eventBus.$emit("shareModalUrl", shareItem);
    },
    isDeviceMobile: function () {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.loadCarosel();
  },
  watch: {
    "$parent.profileDescription"(text) {
      if (text && text.length >= 200) {
        this.description = 1;
      } else {
        this.description = 0;
      }
      this.updateProgress();
    },
    "$parent.currentUser.user_info.is_verified"(isVerified) {
      if (isVerified) {
        this.verification = 1;
      } else {
        this.verification = 0;
      }

      if (this.$parent.currentUser.profile.profile_photo) {
        this.userImage = 1;
      } else {
        this.userImage = 0;
      }

      this.updateProgress();
    },
    "$parent.currentUser.profile.profile_photo"(userProfileImage) {
      if (userProfileImage) {
        this.userImage = 1;
      } else {
        this.userImage = 0;
      }

      this.updateProgress();
    },
    "$parent.invitedUsers"(users) {
      if (users.length > 0) {
        this.referral = 1;
      } else {
        this.referral = 0;
      }
      this.updateProgress();
    },
  },
};
</script>
