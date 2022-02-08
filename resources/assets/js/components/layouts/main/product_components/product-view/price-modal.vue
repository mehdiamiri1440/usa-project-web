<style scoped>
.price-modal {
  position: fixed;
  bottom: 0;
  z-index: 1013;
  display: block;
  height: 0;
  left: 0;
  width: 100%;
  padding-bottom: 8px;
}
.price-modal.show-custom-modal {
  height: 100%;
}

.modal-content {
  z-index: 1;
  position: absolute;
  border-radius: 20px 20px 0 0;
  min-height: 100px;
  bottom: -1000px;
  padding: 0;
  left: 0;
  right: 0;
  border: none;
  transition: 500ms;
}

.button-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  transition: 500ms;
}
button.main-button.disabled {
  background-color: rgb(151, 151, 151,0.6);
  color: #ffffff;
}
.price-modal.show-custom-modal .modal-content {
  bottom: 0;
}

.price-modal.show-custom-modal .button-background {
  background: rgba(0, 0, 0, 0.7);
}

.custom-modal-title {
  margin-top: 20px;
  padding: 0 15px;
}
.custom-modal-title.disabled {
  color: rgba(0, 0, 0, 0.6);
}
.custom-modal-title.disabled strong {
  color: rgba(0, 0, 0, 0.5);
}

.price-text {
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  color: #140092;
}
.price-text.disabled {

  color: rgb(20, 0, 146,0.6);
}
.main-action button {
  margin-top: 23px;
}

.main-action button i {
  right: 0;
}

.second-action button {
  font-size: 14px;
  margin-top: 12px;
  padding-bottom: 16px;
}
.unavailable {
  position: absolute;
  left: 0;
  top: 10px;
  font-weight: 500;
  padding: 0 16px;
  color: #264653;
}
.close-modal-button {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  padding: 8px 16px;
}

@media screen and (min-width: 768px) {
  .price-modal .modal-content {
    max-width: 600px;
    left: calc(50% - 300px);
    padding: 30px 0;
  }
}
</style>
<template>
  <div>
    <div v-if="$parent.product.main.deleted_at != null" class="price-modal">
      <div class="modal-content text-rtl text-center">
        <div class="unavailable">ناموجود</div>

        <button @click="closeModal()" class="close-modal-button">
          <i class="fa fa-times"></i>
        </button>
        <p class="custom-modal-title disabled">
          <strong> کف قیمت </strong>
          برای هر کیلو
          {{ productName }}
        </p>
        <p
          class="price-text disabled"
          v-text="getNumberWithCommas(price) + ' تومان'"
        ></p>

        <p class="main-action">
          <button disabled class="main-button white-text disabled">
            <i class="fa fa-phone-alt"></i>
            <span> تماس با فروشنده </span>
          </button>
        </p>
        <p class="second-action">
          <button
            @click="routeToPage('registerProductSeller')"
            class="orange-text button-link"
            v-if="
              !!$parent.currentUser.user_info &&
              $parent.currentUser.user_info.is_seller
            "
          >
            محصول برای فروش دارم
          </button>
          <span
            v-else-if="
              !!$parent.currentUser.user_info &&
              $parent.currentUser.user_info.is_buyer
            "
            class="button-link"
          >
            <br />
          </span>
          <button
            @click="routeToPage('register')"
            class="orange-text button-link"
            v-else
          >
            محصول برای فروش دارم
          </button>
        </p>
      </div>
      <div @click="closeModal()" class="button-background"></div>
    </div>
    <div v-else class="price-modal">
      <div class="modal-content text-rtl text-center">
        <button @click="closeModal()" class="close-modal-button">
          <i class="fa fa-times"></i>
        </button>
        <p class="custom-modal-title">
          <strong> کف قیمت </strong>
          برای هر کیلو
          {{ productName }}
        </p>
        <p
          class="price-text"
          v-text="getNumberWithCommas(price) + ' تومان'"
        ></p>

        <p class="main-action">
          <span
            v-if="
              $parent.updatedCurrentUser.user_info &&
              $parent.product.user_info.has_phone &&
              $parent.updatedCurrentUser.user_info.is_buyer
            "
          >
            <button
              @click="openPhone(true)"
              class="main-button bg-orange white-text hidden-lg hidden-md"
            >
              <i class="fa fa-phone-alt"></i>
              <span> تماس با فروشنده </span>
            </button>
            <button
              @click="openPhone(false)"
              class="main-button bg-orange white-text hidden-xs hidden-sm"
            >
              <i class="fa fa-phone-alt"></i>
              <span> تماس با فروشنده </span>
            </button>
          </span>
          <button
            v-else-if="
              !$parent.updatedCurrentUser.user_info &&
              $parent.product.user_info.has_phone
            "
            @click="openLoginModal(false)"
            class="main-button bg-orange white-text"
          >
            <i class="fa fa-phone-alt"></i>
            <span> تماس با فروشنده </span>
          </button>
          <button
            v-else-if="
              (!!$parent.updatedCurrentUser.user_info &&
                !$parent.product.user_info.has_phone) ||
              (!!$parent.updatedCurrentUser.user_info &&
                $parent.product.user_info.has_phone)
            "
            @click="openChat()"
            class="main-button bg-orange white-text"
          >
            <i class="fa fa-comment-alt"></i>
            <span> چت با فروشنده </span>
          </button>
          <button
            v-else
            @click="openLoginModal(true)"
            class="main-button bg-orange white-text"
          >
            <i class="fa fa-comment-alt"></i>
            <span> چت با فروشنده </span>
          </button>
        </p>
        <p class="second-action">
          <button
            @click="routeToPage('registerProductSeller')"
            class="orange-text button-link"
            v-if="
              !!$parent.currentUser.user_info &&
              $parent.currentUser.user_info.is_seller
            "
          >
            محصول برای فروش دارم
          </button>
          <span
            v-else-if="
              !!$parent.currentUser.user_info &&
              $parent.currentUser.user_info.is_buyer
            "
            class="button-link"
          >
            <br />
          </span>
          <button
            @click="routeToPage('register')"
            class="orange-text button-link"
            v-else
          >
            محصول برای فروش دارم
          </button>
        </p>
      </div>
      <div @click="closeModal()" class="button-background"></div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["productName", "price"],
  methods: {
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    openPhone(isModal = false) {
      // analytics click call phone when  user login
      this.$parent.registerComponentStatistics(
        "product-view",
        "price-modal",
        "click-on-show-price-btn"
      );

      this.closeModal();
      this.$parent.activePhoneCall(isModal);
    },
    routeToPage(routeName) {
      // analytics
      // when click on mahsol baraye forosh daram
      this.$parent.registerComponentStatistics(
        "product-view",
        "price-modal",
        "click-on-register-product-btn"
      );

      this.$router.push({ name: routeName });
    },
    openLoginModal(isChat) {
      if (isChat) {
        // analytics
        // click on chat button when user not logged in
        this.$parent.registerComponentStatistics(
          "product-view",
          "price-modal",
          "click-on-chat-btn"
        );
        // this.$parent.registerComponentStatistics("", "", "");
      } else {
        // analytics
        // click on phone call button when user not logged in
        this.$parent.registerComponentStatistics(
          "product-view",
          "price-modal",
          "click-on-phone-btn"
        );
      }

      this.closeModal();
      setTimeout(() => {
        this.$parent.loginModal(false);
      }, 200);
    },
    openChat() {
      // analytics
      // click on chat button when user login
      this.$parent.registerComponentStatistics(
        "product-view",
        "price-modal",
        "click-on-chat-btn"
      );

      this.closeModal();
      this.$parent.openChat(this.$parent.product);
    },
    closeModal() {
      $(".price-modal").removeClass("show-custom-modal");
    },
  },
};
</script>
