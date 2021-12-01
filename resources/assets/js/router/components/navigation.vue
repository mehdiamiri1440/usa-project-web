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
}

/* .item-wrapper button span {
  display: block;
  background: red;
} */

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
        document
          .querySelector(".introjs-arrow")
          .classList.remove("bottom-middle");
        document.querySelector(".introjs-arrow").classList.add("bottom-right");
        document.querySelector(".introjs-arrow").style.marginRight="10px";
      }, 50);
    },
    init() {
      this.$nextTick(() => {
        setTimeout(() => {
          introJs()
            .setOptions({
              nextLabel: "بعدی ",
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
            .start()
            /*.onafterchange((element) => {
             
              switch (element.id) {
                
                case "navTour3":
                    document
                      .querySelector(".introjs-arrow").style.marginLeft ='20px';
                   
                  break;
                case "navTour2":
                  document
                      .querySelector(".introjs-arrow").style.marginLeft ='-5px';
                  break;
                case "navTour1":
                  document
                      .querySelector(".introjs-arrow").style.marginLeft ='-50px';
                  break;
                case "navTour0":
                  document
                      .querySelector(".introjs-arrow").style.marginLeft ='-5px';
                  break;
              }
            });*/
        }, 50);
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
