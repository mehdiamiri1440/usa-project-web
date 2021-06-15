<style scoped>
/*start style sub-header*/
.sub-header {
  position: absolute;
  left: 0;
  background: #eff3f6;
  top: 57px;
  right: 0;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
}

.sub-header ul {
  text-align: center;
}

.sub-header a {
  padding: 16px;

  display: inline-block;

  color: #808c9b;

  font-weight: bold;

  font-size: 14px;

  position: relative;
}

.sub-header a:hover {
  color: #313942;
}

.sub-header a:hover::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

.sub-header a.router-link-exact-active {
  color: #313942;
}

.sub-header a.router-link-exact-active::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

.new-badge::before {
  content: "\62C\62F\6CC\62F";
  position: absolute;
  left: -10px;
  color: #fff;
  font-size: 11px;
  background: #e41c38;
  padding: 2px 3px 3px;
  border-radius: 50px;
  top: 4px;
}

/*end style sub-header*/
@media screen and (max-width: 345px) {
  /* .sub-header a {
    font-size: 10px;
  } */
  .sub-header {
    bottom: -44px;
  }
}
</style>

<template>
  <div class="sub-header text-rtl" v-if="$store.state.dashboardStore.subHeader">
    <ul class="list-inline">
      <li
        class="list-item"
        v-for="(item, index) in $store.state.dashboardStore.subHeader"
        :class="item.active"
        :key="index"
      >
        <router-link
          :to="{ name: item.url }"
          v-text="item.message"
          :class="{
            'new-badge':
              item.url == 'profileBasicSellerVeficiation' ||
              item.url == 'profileBasicBuyerVeficiation',
          }"
        />
      </li>
    </ul>
  </div>
</template>

