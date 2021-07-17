<style scoped>
.sub-header a.router-link-exact-active {
  color: #313942;
}

.sub-header a.router-link-exact-active::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

.header-menu a.router-link-exact-active,
a.active {
  color: #fff;
  background: #637484;
  border-right: 10px solid #4dc0bb;
}

.header-menu a,
.header-menu button {
  color: #fff;
  padding: 6px 12px 11px;
  display: inline-block;
  position: relative;
  width: 100%;
  border: none;
  text-align: right;
  border-radius: 12px;
  border-right: 10px solid transparent;
}

.header-menu {
  padding: 0 10px;
}

.header-menu a:hover {
  color: #fff;
  background: #637484;
  border-right: 10px solid #4dc0bb;
}

.header-menu li.active a {
  color: #fff;
  background: #637484;
}

.custom-badge {
  position: absolute;
  left: 20px;
  background: #e41c38;
  height: 20px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  direction: ltr;
  line-height: 1;
  padding: 5px 3px;
  min-width: 20px;
  font-size: 12px;
  top: 9px;
}

.custom-badge.upgrade {
  padding: 5px 10px;
  height: 24px;
  font-size: 14px;
}

.header-menu i {
  margin: 5px;
}

.star-badge {
  position: absolute;
  left: 20px;
  border-radius: 12px;
  color: rgb(249, 242, 159);
  text-align: center;
  direction: ltr;
  line-height: 1;
}

.star-badge i {
  font-size: 20px;
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2px 0;
}

#pricing-link {
  background: linear-gradient(-45deg, #00c569, #23d5ab, #21ad93, #23a6d5);
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;
  color: #fff !important;
  border: none;
}

#pricing-link:hover i {
  animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  border: none;
}

.list-item {
  padding-bottom: 2px;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes shake {
  0% {
    transform: translate3d(0, -1px, 0);
  }

  50% {
    transform: translate3d(0, -5px, 0);
  }
  100% {
    transform: translate3d(0, -1px, 0);
  }
}
.verified-user {
  display: inline-block !important ;
}
.verified-user::before {
  left: 8px;
  top: 8px;
}
</style>
<template>
  <div>
    <section v-if="isLoading">
      <div class="header-menu">
        <ul class="list-unstyled">
          <li class="list-item">
            <router-link :to="{ name: 'statusSeller' }">
              <i class="fa fa-chart-line"></i>
              <span>داشبورد</span>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name: 'buyAdRequestsSeller' }">
              <i class="fa fa-list-alt" aria-hidden="true"></i>
              <span>درخواست های خرید</span>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name: 'messagesRequestSeller' }">
              <i class="fa fa-list-ul" aria-hidden="true"></i>
              <span>خریداران پیشنهادی</span>
              <span class="star-badge">
                <i class="fa fa-star"></i>
              </span>
            </router-link>
          </li>

          <li class="list-item">
            <router-link
              :to="{ name: 'registerProductSeller' }"
              :class="{
                'router-link-exact-active ':
                  this.activeElement === 0 ||
                  $route.name == 'successRegisterProduct',
              }"
            >
              <i class="fa fa-plus-square" aria-hidden="true"></i>
              <span>ثبت محصول</span>
            </router-link>
          </li>

          <li class="list-item">
            <router-link
              :to="{ name: 'messagesSeller' }"
              :class="{
                'router-link-exact-active ': this.activeElement === 0,
              }"
            >
              <!-- ||
                  $route.name == 'messagesRequestSeller', -->
              <i class="fas fa-comment-alt" aria-hidden="true"></i>

              <span>پیام ها</span>
              <span
                class="custom-badge"
                v-if="messageCount > 0"
                v-text="messageCount"
              ></span>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name: 'profileBasicSeller' }">
              <i class="fa fa-user" aria-hidden="true"></i>
              <span>ویرایش پروفایل</span>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name: 'myProductsSeller' }">
              <i class="fas fa-list-ol" aria-hidden="true"></i>
              <span>محصولات من</span>
            </router-link>
          </li>
          <li
            v-show="$parent.currentUser.user_info.active_pakage_type < 3"
            class="list-item"
          >
            <router-link
              id="pricing-link"
              :to="{ name: 'dashboardPricingTableSeller' }"
            >
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              <span>ارتقا عضویت</span>
              <span class="custom-badge upgrade">ویژه</span>
            </router-link>
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'profileBasicSellerVeficiation' }">
              <span class="verified-user">
                <i class="fa fa-certificate"></i>
              </span>
              <span>احراز هویت</span>
            </router-link>
          </li>
          <li class="list-item">
            <router-link :to="{ name: 'guideSeller' }">
              <i class="fa fa-question" aria-hidden="true"></i>
              <span>راهنما</span>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name: 'supportSeller' }">
              <i class="fas fa-headset"></i>
              <span>پشتیبانی</span>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { eventBus } from "../../../../../router/router";

export default {
  props: [
    "profilebasic",
    "byadreq",
    "selregpro",
    "transactroute",
    "mytrans",
    "guide",
  ],
  data() {
    return {
      activeElement: null,
      isLoading: true,
      messageCount: 0,
      linksPath: ["/seller/messenger/group-messages"],
    };
  },
  methods: {
    init: function () {
      var self = this;
      // axios
      //     .post("/get_total_unread_messages_for_current_user")
      //     .then(function (response) {
      //         self.messageCount = response.data.msg_count;
      //         if (self.messageCount >= 100) {
      //             self.messageCount = "+99"
      //         }
      //     })
      //     .catch(function (err) {
      //         //
      //     });
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    checkLinkActive: function () {
      for (var i = 0; i < this.linksPath.length; i++) {
        if (this.subIsActive(this.linksPath[i])) {
          this.activeElement = i;
        } else {
          this.activeElement = null;
        }
      }
    },
  },
  watch: {
    $route() {
      this.checkLinkActive();
    },
  },
  mounted: function () {
    this.checkLinkActive();
    this.init();
  },
  created() {
    var self = this;
    var userId = window.localStorage.getItem("userId");

    eventBus.$on("messageCount", (event) => {
      this.messageCount += event;
    });
    eventBus.$on("active", (event) => {
      this.activeElement = event;
    });
  },
};
</script>
