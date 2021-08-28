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
}

@media screen and (max-width: 767px) {
  .buskool-logo .navbar-brand {
    width: 100px;
    height: 20px;
    margin-top: 4px;
  }
  .buskool-logo .navbar-brand img {
    width: 100px;
    height: 20px;
  }

  .buskool-logo {
    margin: 0 auto;
    position: absolute;
    right: calc(50% - 50px);
  }
}

@media screen and (max-width: 550px) {
  .buskool-logo {
    margin: 0 auto;

    float: right;

    position: relative;

    right: calc(50% - 95px);
  }

  .buskool-logo .navbar-brand {
    width: 100px;

    margin-top: 5px;

    margin-right: 0;
  }

  .profile-image-wrapper,
  .user-auth-info-wrapper,
  .user-auth-info-wrapper .navbar-nav {
    margin: 0;
  }

  .user-auth-info-wrapper {
    float: left;
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
            <li class="hidden-xs">
              <a class="green-button" href="#">
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
  data() {
    return {};
  },
};
</script>
