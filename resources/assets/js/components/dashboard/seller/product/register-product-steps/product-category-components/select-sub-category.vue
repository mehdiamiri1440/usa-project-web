
<style scoped>
.form-contents {
  background: #fff;
}
.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 8px 25px 7px;
  transition: 200ms;
  cursor: default;
  margin: 0;
}

.submit-button i {
  transition: 300ms;
  position: relative;
  top: 2px;
  left: -3px;
}
.submit-button.default-back-button i {
  left: 3px;
}

.submit-button.default-back-button {
  background: #fff;
  color: #777;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
}

.submit-button.default-back-button:hover i {
  transform: translateX(5px);
}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
  transform: translateX(0);
}
.submit-button.active:hover i {
  background: #00c569;
  cursor: pointer;
  transform: translateX(-5px);
}
.action-control-wrapper {
  margin: 40px auto 100px;
}

.title-contents {
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 30px;
  padding: 0 15px;
  margin-top: -23px;
}

.title-contents img {
  width: 45px;
  position: relative;
  top: 9px;
  margin-left: 5px;
}

ul {
  max-height: 340px;
  overflow: auto;
  border-radius: 4px;
  width: 100%;
}

ul li.item img {
  max-width: 35px;
  float: right;
  margin-left: 18px;
}

ul li.item button {
  background: #fff;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px;
  text-align: right;
  transition: 300ms;
}

ul li.item button:hover {
  transition: 300ms;
  color: #00c569;
  transform: translateX(-8px);
  border-bottom-color: #777;
}

ul li.item button span {
  font-size: 18px;
  font-weight: 500;
  padding-top: 5px;
  display: inline-block;
}

ul li.item button i {
  float: left;
  margin-top: 10px;
  font-size: 20px;
}

@media screen and (max-width: 767px) {
  .title-contents {
    margin-top: 0;
  }
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">
      <!-- <img
        v-if="$parent.categoryName == 'میوه'"
        src="../../../../../../../img/orange.svg"
      />
      <img
        v-else-if="$parent.categoryName == 'صیفی'"
        src="../../../../../../../img/watermelon.svg"
      />
      <img
        v-else-if="$parent.categoryName == 'غلات'"
        src="../../../../../../../img/barley.svg"
      />
      <img
        v-else-if="$parent.categoryName == 'خشکبار'"
        src="../../../../../../../img/pistachio.svg"
      />
      <img
        v-else-if="$parent.categoryName == 'ادویه'"
        src="../../../../../../../img/bowl.svg"
      />
      <img
        v-else-if="$parent.categoryName == 'دامپروری'"
        src="../../../../../../../img/bee.svg"
      /> -->
      انتخاب دسته بندی محصول
    </h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <ul class="list-wrapper" v-if="mainCategories">
          <li
            v-for="(item, index) in mainCategories"
            :key="index"
            class="item col-xs-12"
          >
            <button @click.prevent="$parent.selectedMainCategory(item)">
              <span v-text="item.category_name"> </span>
              <i class="fa fa-angle-left"></i>
            </button>
          </li>
        </ul>
        <ul class="list-wrapper" v-else-if="subCategories">
          <li
            v-for="(item, index) in subCategories"
            :key="index"
            class="item col-xs-12"
          >
            <button @click.prevent="$parent.selectedSubCategory(index)">
              <span v-text="item.category_name"> </span>
              <i class="fa fa-angle-left"></i>
            </button>
          </li>
        </ul>

        <div class="col-xs-12 action-control-wrapper">
          <button
            v-if="mainCategories"
            class="submit-button default-back-button pull-right"
            @click.prevent="$parent.mainCategories = ''"
          >
            <i class="fa fa-arrow-right"></i>

            مرحله قبل
          </button>
          <button
            v-else
            class="submit-button default-back-button pull-right"
            @click.prevent="$parent.step--"
          >
            <i class="fa fa-arrow-right"></i>

            مرحله قبل
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: ["index", "subCategories", "mainCategories"],
};
</script>