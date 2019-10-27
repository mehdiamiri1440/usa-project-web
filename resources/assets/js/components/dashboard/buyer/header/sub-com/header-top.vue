<style >
.display-loading {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.margin-loading {
  margin: 3%;
}
.loading-height {
  height: 10px !important;
  width: 60px;
}
#main {
  margin-right: 250px;
  margin-top: 65px;
  background: #f6f6f6;
  position: relative;
  min-height: 600px;
}

#main.little-main {
  margin-right: 80px !important;
}

.main-header {
  height: 65px;
  position: fixed;
  left: 0;
  right: 250px;
  top: 0;
  background: #fff;
  z-index: 5;
  border-bottom: 2px solid #f6f6f6;
}

.little-main-header {
  right: 80px;
}

.image-header-profile {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  float: left;
}

.image-header-profile img {
  height: 100%;
}

.profile-menu-header {
  float: left;
}

.right-menu-header,
.content-header {
  float: right;
}

.profile-menu-header {
  padding: 7px;
  padding-left: 37px;
}

.profile-menu-header i {
  position: absolute;

  left: -80px;

  top: 20px;

  font-size: 20px;
}

.profile-menu-header span.user_name {
  display: block;

  float: right;

  padding-top: 15px;
}

.right-menu-header .green-button {
  font-size: 17px;
}

.right-menu-header a,
.profile-menu-header a {
  color: #7f8c9b;
  margin: 5px;
}

.right-menu-header a {
  font-size: 30px;
}

.content-header {
  background: #00c569;
  color: #fff;
  height: 100%;
  padding: 20px 20px 0;
  display: none;
}

/*.content-header span{  
  display: block;
  text-align: right;
}*/

.right-menu-header .green-button {
  font-size: 17px;
}

.right-menu-header a,
.profile-menu-header a {
  color: #7f8c9b;
  margin: 5px;
}

.profile-menu-header > a {
  position: relative;
}

.profile-list {
  position: absolute;
  width: 165px;
  background: #fff;
  padding: 8px 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #313a43;
  text-align: right;
  left: 40px;
  top: 65px;
  display: none;
  z-index: 999;
}

.profile-list li {
  margin: 5px;
}

.profile-list a {
  width: 100%;
  display: inline-block;
}

.font-big {
  font-size: 23px;
  position: relative;
  top: 3px;
}

.green-button {
  color: #fafafa !important;
}

.green-button:hover {
  color: #fff !important;
  background: #00d614;
}

.green-button {
  color: #fafafa !important;
}

.green-button:hover {
  color: #fff !important;
  background: #00ac5c;
}

i.fa-home {
  position: relative;
  top: 5px;
}

.product-list-link {
  font-size: 17px !important;
  padding: 7px 20px !important;
  background: #00c569 !important;
  border-radius: 4px;
  border: 1px solid;
  display: inline-block;
  color: #fff !important;
}
@media only screen and (max-width: 767px) {
  .message-notification {
    top: 4px;
    cursor: pointer;
    border: 1px solid white;
    right: 35px;
    position: absolute;
    background-color: #e41c38;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: wheat;
  }
}
</style>

<template>
  <div>
    <header id="header" class="main-header">
      <div id="notification" class="show-header">
        <div v-if="messageCount>0" class="message-notification">{{messageCount}}</div>
        <button class="fa fa-bars"></button>
      </div>

      <div class="content-header">
        <span class="font-big">اینکوباک</span>
        <span>بازارگاه آنلاین کشاورزی</span>
      </div>

      <div class="profile-menu-header">
        <a v-if="!isLoading" href="#" @click.prevent="collapseDropDown()">
          <div class="image-header-profile" v-if="photoLink">
            <img :src="storage + '/' + photoLink" />
          </div>

          <div class="image-header-profile" v-else>
            <img :src="def" />
          </div>

          <i class="fa fa-angle-down" aria-hidden="true"></i>

          <span class="user_name" v-text="username"></span>
        </a>
        <div class="col display-loading" v-else>
          <div class="image-header-profile shadow-content placeholder-content"></div>
          <div class="user_name shadow-content placeholder-content loading-height margin-loading"></div>
        </div>

        <div class="profile-list">
          <ul class="list-unstyled">
            <li class="list-item">
              <a
                :href="'/dashboard/profile'"
                @click="registerComponentStatistics('seller-dashboard-header','profile-link','click-on-profile-link-in-dashboard')"
              >پروفایل</a>
            </li>

            <li class="list-item">
              <a
                :href=" '/dashboard/password' "
                @click="registerComponentStatistics('seller-dashboard-header','change-password','click-on-change-password-dashboard')"
              >تغییر کلمه عبور</a>
            </li>

            <li class="list-item">
              <a :href="out" @click="logUserOut()">خروج</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-menu-header">
        <ul class="list-inline">
          <li>
            <a
              class="product-list-link"
              href="/product-list"
              @click="registerComponentStatistics('dashboard-header','product-list-btn','click-on-product-list-in-dashboard')"
            >
              <span class="full">لیست محصولات</span>
              <span class="min">
                <i class="fa fa-th-list" aria-hidden="true"></i>
              </span>
            </a>
          </li>

          <li>
            <a
              :href="routeHome"
              @click="registerComponentStatistics('dashboard-header','home-page-btn','click-on-home-page-in-dashboard')"
            >
              <i class="fa fa-home" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <SubMenu />
    </header>
  </div>
</template>


<script>
var visible = false;
import SubMenu from "./sub-menu/sub-menu.vue";
import { eventBus } from "../../../../../router/dashboard_router";
export default {
  data: function() {
    return {
      messageCount: 0
    };
  },
  components: {
    SubMenu
  },
  props: [
    "photoLink",
    "storage",
    "def",
    "username",
    "out",
    "routeHome",
    "isLoading"
  ],
  methods: {
    logUserOut: function() {
      localStorage.removeItem("userRoute");
      registerComponentStatistics(
        "seller-dashboard-header",
        "logout",
        "click-on-logout-in-dashboard"
      );
    },
    collapseDropDown: function() {
      $(".profile-list").fadeIn("slow", function() {
        visible = true;
      });
    },
    collapseDropDownList: function() {
      $(".icon-header-list").fadeIn("slow", function() {
        visible = true;
      });
    },
    documentClick(e) {
      if (visible) {
        $(".profile-list").fadeOut("slow");
        $(".icon-header-list").fadeOut("slow");
        visible = false;
      }
    }
  },
  mounted() {
    var self = this;
    axios
      .post("/get_total_unread_messages_for_current_user")
      .then(function(response) {
        self.messageCount = response.data.msg_count;
      })
      .catch(function(error) {
        console.log("error", error);
      });
  },
  created() {
    var self = this;

    eventBus.$on("messageCount", event => {
      this.messageCount += event;
    });
    eventBus.$on("active", event => {
      this.activeElement = event;
    });
    Echo.private("testChannel." + userId).listen("newMessage", e => {
      var senderId = e.new_message.sender_id;

      self.messageCount += 1;
    });
    document.addEventListener("click", this.documentClick);
  },
  registerComponentStatistics: function(categoryName, actionName, labelName) {
    gtag("event", actionName, {
      event_category: categoryName,
      event_label: labelName
    });
  }
};
</script>
