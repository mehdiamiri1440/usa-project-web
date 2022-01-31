
<style scoped>
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
  background: #FF9828;
  cursor: pointer;
  transform: translateX(0);
}
.submit-button.active:hover i {
  background: #FF9828;
  cursor: pointer;
  transform: translateX(-5px);
}
.action-control-wrapper {
  padding: 40px 15px;
  background: #fff;
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
  .action-control-wrapper {
    padding: 40px 15px 100px;
  }
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">استان مبدا را انتخاب کنید</h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <ul class="list-wrapper">
          <li
            v-for="(item, index) in $parent.provinces"
            :key="index"
            class="item col-xs-12"
          >
            <button @click.prevent="$parent.selectedProvince(index)">
              <span v-text="item.province_name"> </span>
              <i class="fa fa-angle-left"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 action-control-wrapper">
      <button
        class="submit-button default-back-button pull-right"
        @click.prevent="$parent.stepBack()"
      >
        <i class="fa fa-arrow-right"></i>

        مرحله قبل
      </button>
    </div>
  </div>
</template>

