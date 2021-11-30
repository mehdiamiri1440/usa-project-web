<style scpoed>
.category-list h2 {
  margin-bottom: 38px;
  font-size: 1.8rem;
}
.category-list h4.parent-category-title {
  cursor: pointer;
  font-size: 1.6rem;
  color:#140092;
}
  .category-list h4.parent-category-title span i {
  margin-top: 10px;
}
.category-list h3.select-category-title
{
  font-size: 1.6rem;
}
.category-list {
  display: block;
}
.category-list ul {
  list-style: none;
  margin-top: 0.7rem;
}
.category-list ul li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1.4rem;
}
.category-list ul li button {
  background: unset;
  border: 0;
  color: #000000;
  width: 100%;
  text-align: right;
  padding: 2.1rem 0;
  padding-right: 10px;
}
.category-list ul li:last-child {
  border-bottom: 0;
}
.buttons-div {
  margin-bottom: 1rem;
  display: table;
}
.category-list ul li span {
  float: left;
  font-size: 2rem;
  color: #15313c;
  margin-left: 10px;
}
.buttons-div button {
  width: 100px;
  height: 36px;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.38);
}
.form-group button span {
  font-size: 1.7rem;
}
.buttons-div button.prev {
  float: right;
  border: 1px solid #767676;
  background: unset;
}
.form-group button.prev span {
  margin-top: 0.4rem;
  float: right;
}
</style>
<template>
  <div class="category-list">
    <h2 class="text-center" v-if="step == 0">ثبت مشخصات محصول</h2>
    <h3 class="select-category-title" v-if="step == 0">انتخاب دسته بندی محصول</h3>
    <h4 class="parent-category-title" v-else @click.prevent="previousCategoryStep()"><span><i class="fas fa-long-arrow-alt-right"></i></span> <span>{{ categoryTitle }}</span></h4>
    <ul v-if="step == 0">
      <li v-for="(item, index) in superCategories" :key="index">
        <button @click="setSuperCategoryData(index)">
          {{ item.category_name }}
          <span><i class="fas fa-angle-left"></i></span>
        </button>
      </li>
    </ul>
    <ul v-else-if="step == 1">
      <li v-for="(item, index) in $parent.categories" :key="index">
        <button @click="setCategoryData(index)">
          {{ item.category_name }}
          <span><i class="fas fa-angle-left"></i></span>
        </button>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item, index) in $parent.subCategories" :key="index">
        <button @click="$parent.setCategory(item)">
          {{ item.category_name }}
          <span><i class="fas fa-angle-left"></i></span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["superCategories"],
  data() {
    return {
      step: 0,
      categoryTitle: "",
      categoryStep:0,
    };
  },
  methods: {
    setSuperCategoryData(index) {
      this.$parent.superCategoryIndex = index;
       this.setCategoryTitle();
      this.step++;
    },
    setCategoryData(index) {
      this.$parent.categoryIndex = index;
      this.setCategoryTitle();
      this.step++;
    },
    setCategoryTitle() {

      this.categoryTitle =  this.$parent.categoryIndex != ""  ? this.$parent.categories[this.$parent.categoryIndex].category_name : this.$parent.superCategories[this.$parent.superCategoryIndex].category_name ;
    },
    previousCategoryStep() {
          this.$parent.categoryIndex = ""
      this.setCategoryTitle();
  
      this.step--;
    },
  },
};
</script>
