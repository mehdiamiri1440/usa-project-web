<style scoped>
.profile {
  padding: 10px 15px 15px;
  text-align: center;
}

.little_header .profile {
  display: none;
}

.profile-img {
  overflow: hidden;

  border-radius: 50%;

  height: 55px;

  width: 55px;

  margin: 0 auto;

  border: 2px solid #fff;

  float: right;
}

.dark-profile-img {
  overflow: hidden;
  border-radius: 50%;
  height: 85px;
  width: 85px;
  margin: 0 auto;
  margin-left: 10px;
  border: 2px solid #5b5c5d;
  float: right;
}
.profile-img img {
  height: 100%;
}

.profile-content {
  width: calc(100% - 55px);

  float: right;

  text-align: right;

  padding-right: 10px;
}

.profile-name {
  margin: 8px 0;
  font-size: 17px;
}

.profile-city {
  font-size: 14px;
  font-weight: 200;
}

.profile-city {
  font-size: 14px;
  font-weight: 200;
}

.loading-height {
  height: 10px !important;
  width: 100px;
}
.button-loading {
  height: 33px !important;
  width: 150px;
  background-color: #dfdfe0;
}
.button-loading:hover {
  height: 33px !important;
  width: 150px;
  background-color: #dfdfe0 !important;
}
</style>
<template>
  <div>
    <section v-if="!isLoading">
      <div class="profile">
        <div class="profile-img" v-if="photoLink">
          <img :src="storage + '/' + photoLink" />
        </div>

        <div class="profile-img" v-else>
          <img src="../../../../../../img/user-defult.png" />
        </div>

        <div class="profile-content">
          <div class="profile-name" v-text="username"></div>

          <div class="profile-city" v-text="usercity"></div>
        </div>

        <router-link :to="'/profile/'+ userprof" class="green-button">نمایش پروفایل من</router-link>
      </div>
    </section>

    <!-- loading section  -->
    <section v-else id="loadingSection">
      <div class="profile">
        <div class="profile-img placeholder-content"></div>

        <div class="profile-content">
          <div class="profile-name placeholder-content loading-height"></div>
          <div class="profile-city placeholder-content loading-height"></div>
        </div>

        <span class="button-loading green-button placeholder-content"></span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: [
    "photoLink",
    "storage",
    "username",
    "usercity",
    "isLoading",
    "userprof"
  ]
};
</script>
