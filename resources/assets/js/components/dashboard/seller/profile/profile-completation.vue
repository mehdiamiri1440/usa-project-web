
<style scoped>
.box-title {
  font-size: 18px;
  color: #313a43;
}

.progress-item-wrapper {
  margin: 10px 0;
}

.progress-item-wrapper > span {
  width: 85px;
  height: 5px;
  border-radius: 50px;
  background: #cccccc;
  margin-left: 5px;
  display: inline-block;
}

.item {
  border: 1px solid #999;
  border-radius: 12px;
  padding: 20px 10px;
}

.title-item {
  font-size: 17px;
  font-weight: 500;
  color: #313a43;
}

.content-item {
  color: #7e7e7e;
  margin: 13px 0 10px;
  line-height: 1.618;
}

.content-button {
  margin-top: 15px;
  border-radius: 12px;
  min-width: 180px;
  font-size: 17px;
  font-weight: 500;
  padding: 5px;
}
.item-wrapper {
  margin-top: 30px;
}
</style>
<template>
  <div class="complete-the-profile padding-buttom-fixed">
    <div class="box-title">
      میزان تکمیل پروفایل : <span class="red-text">ضعیف</span>
    </div>
    <div class="progress-item-wrapper">
      <span v-for="(item, index) in 3" :key="index"></span>
    </div>
    <p class="gray-text">
      اطلاعات خود را تکمیل کنید تا ارتباط بهتری پیدا کنید با خریداران و
      فروشندگان این یک متن تستی است که باید ویرایش شود.
    </p>
    <div class="col-xs-12 item-wrapper">
      <div class="row">
        <div
          v-if="$parent.currentUser.profile.description.length < 200"
          class="col-xs-12 col-sm-6 col-md-4 pull-right"
        >
          <article class="item">
            <p class="title-item">
              <i class="fa fa-comment-alt"></i>
              <span> درباره شما </span>
            </p>
            <p class="content-item">
              نوشتن توضیحات کافی درمورد خودتان باعث شناخت بیشتر سایر کاربران از
              شما می‌شود .
            </p>
            <div class="text-center">
              <button
                type="button"
                data-toggle="modal"
                data-target="#description-modal"
                class="content-button green-button"
              >
                درباره شما
              </button>
            </div>
          </article>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
          <article class="item">
            <p class="title-item">
              <i class="fa fa-phone-square brand-text"></i>
              <span> احراز هویت </span>
            </p>
            <p class="content-item">
              با احراز هویت، اعتماد خریداران و فروشندگان را به خود جلب کنید.
            </p>
            <div class="text-center">
              <router-link class="content-button green-button">
                احراز هویت کنید
              </router-link>
            </div>
          </article>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
          <article class="item">
            <p class="title-item">
              <i class="fa fa-share-alt brand-text"></i>
              <span>معرفی به دوستان </span>
            </p>
            <p class="content-item">
              با معرفی باسکول به همکارانتان، اعتبار پروفایل خود را افزایش دهید.
            </p>
            <div class="text-center">
              <button class="content-button green-button">
                معرفی به دوستان
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

