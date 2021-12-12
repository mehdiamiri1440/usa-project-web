<style scoped>
body {
  background: #f6f6f6;
}

#main-content {
  min-height: 600px;
  position: relative;
}

.buskool-logo .navbar-brand {
  overflow: hidden;
  width: 140px;
  height: 28px;
  margin: 12px 15px 6px 0;
  padding: 0;
}

.buskool-logo .navbar-brand img {
  width: 140px;
  height: 28px;
}

nav.navbar {
  background: #fff;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1012;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ebebeb;
}

nav.navbar.navbar-category {
  border-bottom: none !important;
}

nav.navbar.navbar-category .search-input {
  margin-bottom: 0;
}

.buskool-main-nav {
  border-bottom: 1px solid #fafafa;
  padding: 5px 15px;
}

.nav > li > a.green-button:hover {
  background: #f0f7e7;
  color: #5f6368 !important;
}

.nav > li > a.green-button.router-link-exact-active:hover {
  background: #eee;
}

nav .green-button {
  font-size: 14px;
  background: none;
  color: #5f6368;
  margin-top: 0;
  font-weight: 400;
  padding: 10px 10px 2px;
  min-width: 80px;
  border-radius: 12px;
}

nav .green-button .item-icon {
  font-size: 19px;
}

nav .green-button .item-icon.register::before {
  content: "\F067";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 10px;
  position: relative;
  top: -5px;
  color: #21ad93;
}

#buskool-nav {
  margin-right: 35px;
}

@media screen and (max-width: 991px) {
  nav .green-button.static-layout {
    padding: 6px 8px 5px;
    font-size: 13px;
    width: initial;
  }

  #buskool-nav {
    margin: 0;
  }

  .buskool-sub-menu .navbar-right {
    margin-right: 149px;
  }

  nav .green-button {
    padding: 6px 8px 5px;
    font-size: 13px;
  }
  .profile-image-wrapper {
    margin-left: 0;
  }

  .navbar-right {
    float: right;
  }

  .navbar-nav {
    float: left;
    max-width: 140px;
    margin: 0;
    margin-top: 3px;
  }

  .buskool-main-nav {
    padding: 5px 10px;
  }
  .buskool-logo .navbar-brand img {
    width: 120px;
  }

  .buskool-logo .navbar-brand {
    width: 120px;
    height: 28px;
    margin: 14px 15px 6px 0;
  }
}
</style>

<template>
  <div>
    <!--nav-->
    <nav class="navbar text-rtl">
      <div class="container-fluid buskool-main-nav">
        <div class="buskool-logo navbar-header navbar-right">
          <router-link class="navbar-brand" :to="{ name: 'indexPage' }">
            <img
              src="../../../../img/logo/web-logo.svg"
              alt="باسکول | بازارگاه آنلاین دنیای کشاورزی"
            />
          </router-link>
        </div>

        <div class="user-auth-info-wrapper navbar-nav">
          <ul class="nav navbar-nav">
            <li>
              <a @click.prevent="doDownload()" class="green-button" href>
                <img
                  src="../../../../img/google-play-img.png"
                  alt="دانلود از گوگل پلی"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["isUserLogin"],
  methods: {
    doDownload: function () {
      //ga
      this.registerComponentStatistics(
        "invite-page",
        "app-download",
        "click-on-app-download-btn-in-intive-page"
      );
      // code here
      this.createCookie("downloadAppModal", true, 60 * 24);
      // window.location.href =
      //   "https://play.google.com/store/apps/details?id=com.buskool";
      window.location.href =
        "https://play.google.com/store/search?q=%D8%A8%D8%A7%D8%B3%DA%A9%D9%88%D9%84&c=apps";
    },
    createCookie: function (name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    },
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
  },
};
</script>
