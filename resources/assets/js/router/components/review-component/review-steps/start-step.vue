
<style scoped>
.user-image {
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 45px;
  overflow: hidden;
}

.user-name {
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  color: #777777;
  line-height: 1.618;
}

.main-text p {
  font-weight: 800;
  font-size: 16px;
  color: #474747;
  text-align: center;
}

.main-text {
  text-align: center;
  margin: 20px 0 40px;
}

.buttons-wrapper .green-button {
  background: #fff;

  color: #777;

  border: 1px solid #00c569;

  font-size: 16px;

  font-weight: bold;

  padding: 5px 40px;

  margin: 15px;
}

.buttons-wrapper .green-button:hover {
  background: #00c569;

  color: #fff;

  border: 1px solid #00c569;
}
@media screen and (max-width: 768px) {
  .user-image {
    margin-top: 80px;
  }
}
</style>

<template>
  <div class="row">
    <div class="user-image">
      <img :src="$parent.reviewUserData.img" alt />
    </div>
    <p class="user-name" v-text="$parent.reviewUserData.name"></p>
    <div class="main-text">
      <p>آیا با این کاربر معامله ای انجام داده اید؟</p>

      <div class="buttons-wrapper">
        <button class="green-button" @click="$parent.reviewSteps(1,false)">خیر</button>
        <button class="green-button" @click="$parent.reviewSteps(1,true)">بله</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

