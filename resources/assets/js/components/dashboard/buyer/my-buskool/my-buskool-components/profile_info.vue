<style scoped>
.profile {
  padding: 20px 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: 150ms;
  border-radius: 12px;
}

.profile:hover {
  cursor: pointer;
  background: #f2f2f2;
  transition: 150ms;
}

.profile:hover .profile-icon-wrapper {
  left: 10px;
  transition: 150ms;
}

.little_header .profile {
  display: none;
}

.profile-icon-wrapper {
  position: absolute;
  top: calc(50% - 13px);
  font-size: 27px;
  left: 17px;
  transition: 150ms;
}

.profile-img {
  overflow: hidden;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  margin: 0 auto;
  float: right;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #dddddd;
}

.profile-content {
  width: calc(100% - 75px);
  float: right;
  text-align: right;
  padding-right: 10px;
  padding-top: 15px;
}

.profile-name {
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
}

.profile-activity {
  font-size: 14px;
  font-weight: 500;
  color: #777;
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
  <router-link
    :to="'/profile/' + userprof"
    tag="section"
    class="profile"
    v-if="$parent.currentUser.user_info"
  >
    <div
      class="profile-img"
      v-if="photoLink"
      :style="{
        backgroundImage: 'url(' + storage + '/' + photoLink + ')',
      }"
    ></div>

    <div
      class="profile-img"
      v-else
      :style="{
        backgroundImage:
          'url(' + $parent.assets + 'assets/img/user-defult.png' + ')',
      }"
    ></div>

    <div class="profile-content">
      <div class="profile-name" v-text="username"></div>

      <div
        class="profile-activity green-text"
        v-if="
          $parent.currentUser.user_info.is_seller == 1 &&
          $parent.currentUser.user_info.active_pakage_type == 3
        "
      >
        فروشنده ویژه
      </div>
      <div
        class="profile-activity"
        v-else-if="$parent.currentUser.user_info.is_seller == 1"
      >
        فروشنده
      </div>
      <div class="profile-activity" v-else>خریدار</div>
    </div>
    <div class="profile-icon-wrapper">
      <i class="fa fa-angle-left"></i>
    </div>

    <!-- 
        <router-link :to="'/profile/' + userprof" class="green-button"
          >نمایش پروفایل من</router-link
        > -->
  </router-link>

  <!-- loading section  -->
  <section v-else id="loadingSection">
    <div class="profile">
      <div class="profile-img placeholder-content"></div>

      <div class="profile-content">
        <div class="profile-name placeholder-content loading-height"></div>
        <div class="profile-activity placeholder-content loading-height"></div>
      </div>

      <!-- <span class="button-loading green-button placeholder-content"></span> -->
    </div>
  </section>
</template>

<script>
export default {
  props: ["photoLink", "storage", "username", "isLoading", "userprof"],
};
</script>
