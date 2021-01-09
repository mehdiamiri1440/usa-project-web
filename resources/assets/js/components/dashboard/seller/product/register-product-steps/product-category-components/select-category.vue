
<style scoped>
.title-contents {
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 30px;
  margin-top: 40px;
  padding: 0 15px;
}

ul {
  max-height: 400px;
  overflow: auto;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 50px;
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
  padding: 20px 15px;
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
    margin-top: 40px;
  }
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">انتخاب دسته بندی محصول</h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <ul class="list-wrapper">
          <li
            v-for="(item, index) in $parent.categoryList"
            :key="index"
            class="item col-xs-12"
          >
            <button @click.prevent="$parent.selectedCategory(index)">
              <!-- <img v-if="index == 0" src="../../../../../../../img/orange.svg" />
              <img v-else-if="index == 1" src="../../../../../../../img/watermelon.svg" />
              <img v-else-if="index == 2" src="../../../../../../../img/barley.svg" /> -->
              <span v-text="item.category_name"> </span>
              <i class="fa fa-angle-left"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
