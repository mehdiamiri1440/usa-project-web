<style>
.loading-height {
  height: 10px !important;
  width: 100px;
}
.button-loading {
  height: 33px !important;
  width: 150px;
}
</style>
<template>
  <div>
    <section v-if="!isLoading">
      <div class="profile">
        <div class="profile-img" v-if="photoLink">
          <img alt="پروفایل" :src="storage + '/' + photoLink" />
        </div>

        <div class="profile-img" v-else>
          <img :src="def" />
        </div>
        <div></div>
        <div class="profile-content">
          <div class="profile-name" v-text="username"></div>
          <div class="profile-city" v-text="usercity"></div>
        </div>

        <a :href="'/profile/'+ userprof" class="green-button">پروفایل من</a>
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

        <a class="button-loading green-button placeholder-content"></a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: [
    "photoLink",
    "storage",
    "def",
    "username",
    "usercity",
    "userprof",
    "isLoading"
  ]
};
</script>
