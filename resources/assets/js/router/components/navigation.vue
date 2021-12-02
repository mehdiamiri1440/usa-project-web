<style  scoped>
.introjs-tooltip {
  background-color: unset;
  box-shadow: unset;
}
.custom-navigation {
  position: fixed;
  bottom: 0;
  z-index: 1010;
  background: #313a43;
  color: #fff;
  width: 100%;
}

.item-wrapper {
  display: flex;
  justify-content: space-around;
  padding-top: 4px;
}

.item-wrapper .icon-wrapper {
  background: transparent;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto -4px;
}
.item-wrapper .icon-wrapper i {
  flex: 1;
  font-size: 18px;
}

.item-wrapper .router-link-exact-active .icon-wrapper {
  background: linear-gradient(45deg, #47c1b4, #47c1b4);
  color: #fff;
}

.item-wrapper .router-link-exact-active .icon-wrapper.default-icon {
  background: none;
  color: #fff;
}

.item-wrapper button {
  background: none;
  border: none;
  font-weight: 300;
  font-size: 13px;
  padding: 0;
  border-radius: 5px;
  width: 80px;
  background-color: #313a43;
}

.icon-wrapper.main-icon {
  width: 35px;
  height: 35px;
  background: #fff;
  color: #00c569;
}

.icon-wrapper.main-icon::after {
  content: "";
  width: 13px;
  height: 13px;
  background: #1da1f2;
  position: absolute;
  right: -4px;
  top: -4px;
  border: 2px solid #313a43;
  border-radius: 15px;
}
.user-image-wrapper {
  width: 26px;
  height: 27px;
  background-size: cover;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
}
.counter-item {
  width: 12px;
  height: 12px;
  background: red;
  position: absolute;
  right: 0;
  top: 0;
  border: 2px solid #313a43;
  z-index: 1;
  border-radius: 12px;
}

.plus-icon {
  overflow: inherit !important;
  background: #fff !important;
  color: #00c569 !important;
}
@media (max-width: 370px) {
  .item-wrapper button {
    width: 70px;
  }
  .item-wrapper .icon-wrapper i {
    font-size: 1.5rem;
  }
}
</style>
<template>
  <nav class="custom-navigation">
    <div class="item-wrapper" v-if="!$parent.user.id">
      <router-link
        v-for="(item, index) in masterRoutes"
        :key="index"
        tag="button"
        :to="{ name: item.name }"
      >
        <div
          class="icon-wrapper"
          :class="{
            'main-icon': item.mainIcon,
            'default-icon': $route.name == 'register',
            'plus-icon': item.icon == 'fa-plus',
          }"
        >
          <i class="fa" :class="item.icon"></i>
        </div>
        <span v-text="item.title"> </span>
      </router-link>
    </div>

    <div
      class="item-wrapper"
      v-else-if="$parent.user.id && $parent.user.type == 1"
    >
      <router-link
        v-for="(item, index) in sellerRoutes"
        :id="'navTour' + index"
        :key="index"
        tag="button"
        :to="{ name: item.name }"
      >
        <div class="icon-wrapper" :class="{ 'main-icon': item.mainIcon }">
          <span
            class="counter-item"
            v-if="messageCount > 0 && item.icon == 'fa-comment-alt'"
          ></span>
          <i v-if="item.icon" class="fa" :class="item.icon"></i>
          <div
            v-else-if="$parent.currentUser.profile.profile_photo"
            class="user-image-wrapper"
            :style="{
              backgroundImage:
                'url(' +
                $parent.storagePath +
                '/' +
                $parent.currentUser.profile.profile_photo +
                ')',
            }"
          ></div>

          <div
            v-else
            class="user-image-wrapper"
            :style="{
              backgroundImage:
                'url(' + $parent.assets + 'assets/img/user-defult.png)',
            }"
          ></div>
        </div>
        <span v-text="item.title"> </span>
      </router-link>
    </div>

    <div class="item-wrapper" v-else>
      <router-link
        v-for="(item, index) in buyerRoutes"
        :key="index"
        tag="button"
        :to="{ name: item.name }"
      >
        <div class="icon-wrapper" :class="{ 'main-icon': item.mainIcon }">
          <span
            class="counter-item"
            v-if="messageCount > 0 && item.icon == 'fa-comment-alt'"
          ></span>
          <i v-if="item.icon" class="fa" :class="item.icon"></i>
          <div
            v-else-if="$parent.currentUser.profile.profile_photo"
            class="user-image-wrapper"
            :style="{
              backgroundImage:
                'url(' +
                $parent.storagePath +
                '/' +
                $parent.currentUser.profile.profile_photo +
                ')',
            }"
          ></div>
          <div
            v-else
            class="user-image-wrapper"
            :style="{
              backgroundImage:
                'url(' + $parent.assets + 'assets/img/user-defult.png)',
            }"
          ></div>
        </div>
        <span v-text="item.title"> </span>
      </router-link>
    </div>
  </nav>
</template>


<script>
import introJs from "intro.js";
export default {
  props: ["messageCount"],
  data() {
    return {
      sellerRoutes: [
        {
          title: "خانه",
          name: "productList",
          icon: "fa-home",
          mainIcon: false,
        },
        {
          title: "خریداران",
          name: "buyAdRequestsSeller",
          icon: "fa-list-alt",
          mainIcon: false,
        },
        {
          title: "ثبت محصول",
          name: "registerProductSeller",
          icon: "fa-plus",
          mainIcon: true,
        },
        {
          title: "پیام ها",
          name: "messagesSeller",
          icon: "fa-comment-alt",
          mainIcon: false,
        },
        {
          title: "باسکول من",
          name: "myBuskoolSeller",
          icon: false,
          mainIcon: false,
        },
      ],
      buyerRoutes: [
        {
          title: "خانه",
          name: "productList",
          icon: "fa-home",
          mainIcon: false,
        },
        {
          title: "پیشنهادی",
          name: "specialProducts",
          icon: "fa-list-alt",
          mainIcon: false,
        },
        {
          title: "ثبت درخواست",
          name: "registerRequestBuyer",
          icon: "fa-plus",
          mainIcon: true,
        },
        {
          title: "پیام ها",
          name: "messagesBuyer",
          icon: "fa-comment-alt",
          mainIcon: false,
        },
        {
          title: "باسکول من",
          name: "myBuskoolBuyer",
          icon: false,
          mainIcon: false,
        },
      ],
      masterRoutes: [
        {
          title: "خانه",
          name: "productList",
          icon: "fa-home",
          mainIcon: false,
        },
        {
          title: "درخواست‌ ها",
          name: "mainBuyAdRequests",
          icon: "fa-list-alt",
          mainIcon: false,
        },
        {
          title: "ثبت محصول",
          name: "register",
          icon: "fa-plus",
          mainIcon: true,
        },
        {
          title: "پیام ها",
          name: "register",
          icon: "fa-comment-alt",
          mainIcon: false,
        },
        {
          title: "باسکول من",
          name: "register",
          icon: "fa-user-circle",
          mainIcon: false,
        },
      ],
    };
  },
  methods: {
    test() {
      setTimeout(() => {
        document.getElementById("navTour4").style.transform = "scale(1.5)";
        document.getElementById("navTour3").style.transform = "scale(1)";
        document.getElementById("navTour2").style.transform = "scale(1)";
        document.getElementById("navTour4").style.marginTop = "-7px";
        document.getElementById("navTour4").style.fontSize = "1rem";
      }, 50);
    },
    init() {
      this.$nextTick(() => {
        setTimeout(() => {
          introJs()
            .setOptions({
              nextLabel: "بعدی ",
              prevLabel: "قبلی",
              doneLabel: "متوجه شدم!",
              showBullets: false,
              tooltipPosition: "top",
              steps: [
                {
                  element: document.querySelector("#navTour4"),
                  intro:
                    "امکان تغییر نوع فعالیت از فروشنده به خریدار و بالعکس و انجام سایر تغییرات حساب کاربری",
                },
                {
                  element: document.querySelector("#navTour3"),
                  intro: "راه ارتباطی با فروشندگان و خریدارن",
                },
                {
                  element: document.querySelector("#navTour2"),
                  intro: "برای یافتن خریدار برای محصول خود، آن را ثبت کنید.",
                },
                {
                  element: document.querySelector("#navTour1"),
                  intro: "محل یافتن خریدار برای محصول مورد نظر شما",
                },
                {
                  element: document.querySelector("#navTour0"),
                  intro: "محل جستجوی فروشندگان و محصولات آنها",
                },
              ],
            })
            .start(this.test())
            .onafterchange((element) => {
              switch (element.id) {
                case "navTour4":
                  console.log(element.id);
                  document.getElementById(element.id).style.transform =
                    "scale(1.5)";
                  document.getElementById(element.id).style.marginTop = "-7px";
                  document.getElementById(element.id).style.fontSize = "1rem";
                  document.getElementById("navTour3").style.fontSize = "1.3rem";
                  document.getElementById("navTour3").style.marginTop = "0";
                  document.getElementById("navTour3").style.transform =
                    "scale(1)";
                  document.getElementById("navTour2").style.transform =
                    "scale(1)";

                  break;
                case "navTour3":
                  document.getElementById(element.id).style.transform =
                    "scale(1.5)";
                  document.getElementById(element.id).style.marginTop = "-7px";
                  document.getElementById("navTour4").style.marginTop = "0";
                  document.getElementById("navTour2").style.marginTop = "0";
                  document.getElementById(element.id).style.fontSize = "1rem";
                  document.getElementById("navTour4").style.fontSize = "1.3rem";
                  document.getElementById("navTour2").style.fontSize = "1.3rem";
                  document.getElementById("navTour3").style.marginTop = "0";
                  document.getElementById("navTour2").style.transform =
                    "scale(1)";
                  document.getElementById("navTour4").style.transform =
                    "scale(1)";
                  break;
                case "navTour2":
                  document.getElementById("navTour3").style.transform =
                    "scale(1)";
                  document.getElementById(element.id).style.marginTop = "-7px";
                  document.getElementById("navTour3").style.marginTop = "0";
                  document.getElementById("navTour1").style.marginTop = "0";
                  document.getElementById(element.id).style.fontSize = "1rem";
                  document.getElementById("navTour3").style.fontSize = "1.3rem";
                  document.getElementById("navTour1").style.fontSize = "1.3rem";
                  document.getElementById(element.id).style.transform =
                    "scale(1.5)";
                  document.getElementById("navTour1").style.transform =
                    "scale(1)";
                  break;
                case "navTour1":
                  document.getElementById("navTour2").style.transform =
                    "scale(1)";
                  document.getElementById(element.id).style.marginTop = "-7px";
                  document.getElementById("navTour2").style.marginTop = "0";
                  document.getElementById("navTour0").style.marginTop = "0";
                  document.getElementById(element.id).style.fontSize = "1rem";
                  document.getElementById("navTour2").style.fontSize = "1.3rem";
                  document.getElementById("navTour0").style.fontSize = "1.3rem";
                  document.getElementById("navTour0").style.transform =
                    "scale(1)";
                  document.getElementById(element.id).style.transform =
                    "scale(1.5)";
                  break;
                case "navTour0":
                  document.getElementById("navTour1").style.transform =
                    "scale(1)";
                  document.getElementById(element.id).style.marginTop = "-7px";
                  document.getElementById("navTour1").style.marginTop = "0";
                  document.getElementById(element.id).style.fontSize = "1rem";
                  document.getElementById("navTour1").style.fontSize = "1.3rem";
                  document.getElementById(element.id).style.transform =
                    "scale(1.5)";
                  break;
              }
            })
            .onexit(() => {
              document.getElementById("navTour0").style.transform = "scale(1)";
              document.getElementById("navTour1").style.transform = "scale(1)";
              document.getElementById("navTour2").style.transform = "scale(1)";
              document.getElementById("navTour3").style.transform = "scale(1)";
              document.getElementById("navTour4").style.transform = "scale(1)";
              document.getElementById("navTour4").style.marginTop = "0";
              document.getElementById("navTour3").style.marginTop = "0";
              document.getElementById("navTour2").style.marginTop = "0";
              document.getElementById("navTour1").style.marginTop = "0";
              document.getElementById("navTour0").style.marginTop = "0";
            });
        }, 50);
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
