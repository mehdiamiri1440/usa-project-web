<style  scoped>
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
  padding-top: 7px;
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
  margin: 0 auto;
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
</style>
<template>
  <nav class="custom-navigation">
    <div class="item-wrapper" v-if="!$parent.userId">
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
            'default-icon': !item.mainIcon,
          }"
        >
          <i class="fa" :class="item.icon"></i>
        </div>
        <span v-text="item.title"> </span>
      </router-link>
    </div>

    <div
      class="item-wrapper"
      v-else-if="$parent.userId && $parent.isSeller == 1"
    >
      <router-link
        v-for="(item, index) in sellerRoutes"
        :key="index"
        tag="button"
        :to="{ name: item.name }"
      >
        <div class="icon-wrapper" :class="{ 'main-icon': item.mainIcon }">
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
export default {
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
          title: "درخواست‌ ها",
          name: "buyAdRequestsSeller",
          icon: "fa-list-alt",
          mainIcon: false,
        },
        {
          title: "افزودن محصول",
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
          title: "افزودن درخواست",
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
          name: "buyAdRequestsSeller",
          icon: "fa-list-alt",
          mainIcon: false,
        },
        {
          title: "افزودن محصول",
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
};
</script>
