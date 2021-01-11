<style  scoped>
.static-item a {
  color: #1da1f2;
}
.static-item a:hover {
  color: #337ab7;
}

.user-information-content {
  display: block;
  float: right;
  width: 100%;
  background: none;
  border: none;
  padding-bottom: 3px;
}
.user-image {
  width: 25px;
  height: 25px;
  float: right;
  margin-left: 10px;
}
.user-content {
  display: block;
  max-width: 170px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
  color: #adadad;
  height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
}

.user-content i {
  margin-left: 1px;
  position: relative;
  top: 3px;
  font-size: 15px;
}

.list-title,
.needs,
.list-time,
.list-notice {
  float: right;
  text-align: center;
  line-height: 1.618;
  font-weight: bold;
  padding: 5px;
  color: #7e7e7e;
}

.list-title span.brand-text {
  color: #556080;
}

.right-side {
  text-align: right !important;
}

.list-group-item {
  padding: 10px 30px;
  border: none;
  margin: 0;
  border-bottom: 1px solid #ddd;
}

.list-group-item:nth-last-of-type(2n + 1) {
  background: #f9fcff !important;
}

.list-group-item:last-of-type {
  border: none;
}
.detail-success {
  padding: 8px 0;
  width: 100%;
  background: #00c569;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
}

.main-content > ul {
  border-radius: 3px;
  box-shadow: 0 0 10px #e1e1e1;
  overflow: hidden;
}

.main-content .list-group-item p {
  text-align: center;
  direction: rtl;
}

#main.little-main {
  margin-right: 80px;
}

.message-list {
  padding: 19px;
  text-align: center;
  background: #eff3f6;
  line-height: 1.618;
}

.text-red {
  color: #e41c38;
}

.request-detail .green-button {
  font-size: 16px;
  padding: 8px 30px;
}

.title {
  background: #f6f6f6;
  position: fixed;
  right: 250px;
  left: 0;
  z-index: 1;
  border-radius: 0;
  padding: 13px 15px;
}

.placeholder-title h1,
.title h1 {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.9;
}
.fix-request-header-box {
  background: #eff3f6;
  position: fixed;
  right: 250px;
  left: 0;
  z-index: 2;
  border-radius: 0;
  padding: 10px 0;
}

.fix-request-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background: #fff;
  border-radius: 0;
  padding: 10px 0;
}
.request-update button {
  margin: 0;
  padding: 3px 14px;
  margin-right: 6px;
}

#main.little-main .fix-request-header-box,
#main.little-main .title {
  right: 80px;
}

.detail-contents {
  margin: 15px auto;
}
.detail-contents > div {
  background: #fff;
  padding: 15px;
  margin-bottom: 15px;
  line-height: 25px;
  font-size: 30px;
}
.list-notice {
  text-align: right;
  height: 32px;
}
.list-notice button {
  background: none;

  border: none;

  color: #777;

  padding: 0;

  position: relative;

  top: -5px;
}
.list-notice button > span:first-of-type {
  position: relative;

  font-size: 26px;
}
.list-notice button > span.request-count {
  font-size: 18px;

  position: relative;

  top: -5px;
}
.list-notice button > span > i:last-of-type {
  position: absolute;

  left: 17px;

  color: #fff;

  font-size: 15px;

  top: 7px;
}

.hide-reply {
  display: none;
}

.remove-filter-button {
  background: #fff;
  border-radius: 50px;
  border: 1px solid #e41c39;
  color: #777;
  margin: 0;
  padding: 2px 15px;
  margin-right: 10px;
}
.remove-filter-icon {
  position: relative;
  top: 2px;
  right: -6px;
}
.golden {
  border: 2px solid transparent;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  -moz-border-image: -moz-linear-gradient(left, #3acfd5 0%, #3a4ed5 100%);
  -webkit-border-image: -webkit-linear-gradient(left, #3acfd5 0%, #3a4ed5 100%);
  border-image: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  border-image-slice: 100%;
  border-image-slice: 1;
  position: relative;
}
.golden::after {
  background: linear-gradient(
    44deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  width: 20px;
  height: 100%;
  content: "";
  position: absolute;
  right: 0;
  top: 0;
}
.golden .detail-success {
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  color: #333;
}

.lock > p {
  filter: blur(7px);
}

.lock > span.lock-text {
  position: absolute;
  left: 0;
  text-align: right;
  right: 90px;
  font-size: 20px;
  font-weight: bold;
  top: 14px;
}
.text-input-wrapper > p {
  font-size: 20px;
}

.green-button {
  margin-top: 30px;
}

.form-contents {
  float: right;
  width: 100%;
  padding: 40px 0;
  text-align: center;
  line-height: 1.618;
}

.spinner-wrapper {
  margin-top: 120px;
}

.spinner-border {
  width: 6.5rem;
  height: 6.5rem;
  border-width: 0.5rem;
  color: #00c569;
}

.static-item {
  text-align: center;
  padding: 25px 5px;
}

.send-message-button {
  position: relative;
  top: 9px;
  padding: 0;
}

.detail-success {
  padding: 11px 0;
}

.static-item {
  border: none;
  background: #fff;
}
@media screen and (max-width: 991px) {
  .fix-request-header-box,
  .title {
    right: 0;
  }
  .default-list-title {
    padding: 4px 15px;
  }
}
@media screen and (max-width: 767px) {
  .lock > span.lock-text {
    text-align: center;
    right: 0;
    top: 25px;
  }
  .golden {
    padding: 25px 0;
  }
  .golden::after {
    display: none;
  }
  .main-content,
  .wrapper-items {
    padding: 0;
  }
  .requests .main-content {
    padding: 0 0 100px !important;
  }
  .title {
    position: relative;
  }
  .title h1 {
    text-align: center;
  }

  .detail-success {
    max-width: 300px;
    margin: 0 auto;
  }

  .default-button-full-with {
    max-width: 300px;
  }

  .list-notice button > span.request-count {
    font-size: 15px;
    top: -5px;
  }
  .list-notice button > span > i:last-of-type {
    left: 16px;

    font-size: 12px;
    top: 7px;
  }
  .list-notice button > span:first-of-type {
    font-size: 23px;
  }
  .list-notice button > span.request-count {
    font-size: 15px;
  }
  .right-side {
    text-align: center !important;
    width: 100%;
  }
  .main-content .list-group-item p {
    margin-bottom: 15px;
    width: 100%;
    font-size: 16px;
  }
  .main-content .list-group-item p.detail-success {
    padding: 11px;
  }

  .list-group-item {
    padding: 20px 10px;
  }
}
</style>
<template>
  <ul
    class="list-unstyled wrapper-items"
    v-if="$parent.buyAds.length != 0 && !$parent.load"
  >
    <li
      v-for="(buyAd, index) in $parent.buyAds"
      :key="index"
      class="list-group-item col-xs-12"
      :class="{
        golden: buyAd.is_golden,
        lock:
          buyAd.is_golden &&
          $parent.currentUser.user_info.active_pakage_type == 0,
      }"
    >
      <span
        v-if="
          buyAd.is_golden &&
          $parent.currentUser.user_info.active_pakage_type == 0
        "
        class="lock-text"
        v-text="buyAd.subcategory_name"
      ></span>
      <div class="right-side pull-right">
        <div class="user-information-wrapper">
          <div class="user-information-content">
            <div class="user-content">
              <i class="fa fa-user-circle"></i>
              <span
                class="user-name-link"
                v-text="buyAd.first_name + ' ' + buyAd.last_name"
              >
              </span>
            </div>
          </div>
        </div>
        <p class="list-title">
          <span> خریدار </span>
          <span
            class="red-text"
            v-if="
              buyAd.is_golden &&
              $parent.currentUser.user_info.active_pakage_type == 0
            "
          ></span>
          <span
            class="red-text"
            v-else
            v-text="$parent.getConvertedNumbers(buyAd.requirement_amount)"
          ></span>

          <span
            class="red-text"
            v-if="
              buyAd.is_golden &&
              $parent.currentUser.user_info.active_pakage_type == 0
            "
            v-text="'.از پکیج ویژه استفاده کنید'"
          ></span>
          <span v-else class="red-text" v-text="buyAd.subcategory_name"></span>
          <span> از نوع </span>
          <span
            class="red-text"
            v-if="
              buyAd.is_golden &&
              $parent.currentUser.user_info.active_pakage_type == 0
            "
          ></span>
          <span v-else>
            <span
              class="brand-text"
              v-if="buyAd.name"
              v-text="buyAd.name"
            ></span>
          </span>

          <span> هستم </span>
        </p>
      </div>

      <a
        v-if="
          buyAd.is_golden &&
          $parent.currentUser.user_info.active_pakage_type == 0
        "
        class="col-sm-3 col-xs-12 pull-left"
        href
        @click.prevent="openGoldenChatRestrictionModal()"
      >
        <p class="detail-success hover-effect">
          <span class="fas fa-comment-alt"></span> پیام به خریدار
        </p>
        <p class="detail-success hide-reply" :id="'loader-' + buyAd.id">
          کمی صبر کنید...
        </p>
      </a>
      <a
        v-else
        class="send-message-button col-sm-3 col-xs-12 pull-left"
        href
        @click.prevent="openChat(buyAd, $event)"
      >
        <p class="detail-success hover-effect">
          <span class="fas fa-comment-alt"></span> پیام به خریدار
        </p>
        <p class="detail-success hide-reply" :id="'loader-' + buyAd.id">
          کمی صبر کنید...
        </p>
      </a>
    </li>
    <li class="col-xs-12 static-item">
      <router-link :to="{ name: 'buyAdRequestsSeller' }">
        سایر درخواست های خرید (مرتبط و غیر مرتبط)
      </router-link>
    </li>
  </ul>

  <div
    v-else-if="$parent.buyAds.length == 0 && !$parent.load"
    class="form-contents"
  >
    <div class="col-xs-12">
      <div class="text-input-wrapper">
        <p class="red-text large-text">چه خریدارنی به دنبال محصول شما هستند؟</p>
        <router-link class="green-button" :to="{ name: 'buyAdRequestsSeller' }">
          <span class="bold-text">مشاهده درخواست های خرید</span>
        </router-link>
      </div>
    </div>
  </div>

  <div v-else class="text-center spinner-wrapper">
    <div class="spinner-border">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <!-- <ul v-else class="list-unstyled">
				<li
				v-for="(item, index) in 6"
				:key="index"
				class="list-group-item col-xs-12"
				>
				<p
					class="default-list-title pull-right col-sm-9 hidden-xs margin-10-0"
				>
					<span
					class="placeholder-content content-full-width h-20"
					></span>
				</p>

				<p
					class="list-title col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm"
				>
					<span
					class="placeholder-content content-half-width h-20 margin-auto"
					></span>
				</p>

				<p class="needs col-sm-4 col-xs-12 hidden-md hidden-lg hidden-sm">
					<span
					class="placeholder-content content-default-width h-20 margin-auto"
					></span>
				</p>

				<p
					class="list-time col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm"
				>
					<span
					class="placeholder-content content-min-width h-20 margin-auto"
					></span>
				</p>

				<p class="col-sm-3 col-xs-12">
					<span
					class="placeholder-content default-button-full-with margin-10-auto"
					></span>
				</p>
				</li>
			</ul> -->
</template>

<script>
import { eventBus } from "../../../../../router/router";

export default {
  methods: {
    openGoldenChatRestrictionModal: function () {
      eventBus.$emit("modal", "goldenBuyAdReplyLimit");

      this.registerComponentStatistics(
        "buyAdReply",
        "openChat",
        "permission denied"
      );
    },
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    openChat: function (product) {
      this.registerComponentStatistics(
        "productReplyAfterBuyAdRegister",
        "openChat",
        "click on open chatBox"
      );
      var self = this;

      axios
        .post("/get_user_last_confirmed_profile_photo", {
          user_id: product.myuser_id,
        })
        .then(function (response) {
          var profile_photo = response.data.profile_photo;

          var contact = {
            contact_id: product.myuser_id,
            first_name: product.first_name,
            last_name: product.last_name,
            profile_photo: profile_photo,
            user_name: product.user_name,
          };

          eventBus.$emit("ChatInfo", contact);
        })
        .catch(function (err) {
          //
        });
    },
  },
};
</script>
