<style scoped>
.form-check-wrapper {
  direction: rtl;
  max-height: 600px;
  overflow: auto;
}

.report-form textarea {
  max-width: 600px;

  margin: 0px auto;

  height: 110px;

  max-height: 170px;

  border-radius: 5px;

  direction: rtl;
}

.main-text {
  text-align: center;
  /* margin: 20px 0 40px; */
}
.form-check-wrapper button {
  width: 100%;

  border: none;

  background: none;

  border-bottom: 1px solid #eee;

  text-align: right;

  padding: 12px 15px 13px;
}
.form-check-wrapper button:hover {
  background: #fafafa;
  cursor: pointer;
}

.form-check-wrapper li {
  position: relative;
}

.form-check-wrapper li:last-of-type button {
  border: none;
}
.form-check-wrapper li i {
  position: absolute;

  top: 15px;

  left: 20px;

  font-size: 18px;

  color: #777;
}

.loading-list {
  padding: 90px 0 130px;
}

@media screen and (max-width: 767px) {
  .form-check-wrapper {
    max-height: 100%;
  }
}
</style>

<template>
  <div class="row">
    <div class="main-text">
      <ul v-if="$parent.dataList.length > 0" class="form-check-wrapper">
        <li v-for="(item, index) in $parent.dataList" :key="index">
          <button
            v-if="$parent.fitlerCurrentStep == 0"
            class="default-button-list"
            @click.prevent="
              $parent.setList(index,item.category_name)
            "
            v-text="item.category_name"
          ></button>
          <button
            v-else
            class="default-button-list"
            @click.prevent="
              $parent.submitsubCategory(item)
            "
            v-text="item.category_name"
          ></button>
          <i class="fa fa-angle-left"></i>
        </li>
      </ul>

      <div v-else class="loading-list">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

