<style scoped>
.price-modal {
  position: fixed;
  bottom: 0;
  z-index: 1012;
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
  bottom: -180px;
  padding: 0;
  left: 0;
  right: 0;
  border: none;
  transition: 300ms;
}

.button-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  transition: 300ms;
}

.price-modal.show-custom-modal .modal-content {
  bottom: 0;
}

.price-modal.show-custom-modal .button-background {
  background: rgba(0, 0, 0, 0.7);
}

.custom-modal-title {
  margin-top: 20px;
}

.price-text {
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  color: #140092;
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
}

.close-modal-button {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  padding: 8px 16px;
}
</style>
<template>
  <div class="price-modal">
    <div class="modal-content text-rtl text-center">
      <button @click="closeModal()" class="close-modal-button">
        <i class="fa fa-times"></i>
      </button>
      <p class="custom-modal-title">
        <strong> کف قیمت </strong>
        برای هر کیلو
        {{ productName }}
      </p>
      <p class="price-text" v-text="getNumberWithCommas(price) + ' تومان'"></p>

      <p class="main-action">
        <button
          v-if="
            $parent.currentUser.user_info &&
            $parent.product.user_info.has_phone &&
            $parent.currentUser.user_info.is_buyer
          "
          @click="openPhone(true)"
          class="main-button bg-orange white-text"
        >
          <i class="fa fa-phone-alt"></i>
          <span> تماس با فروشنده </span>
        </button>
        <button
          v-else-if="
            !$parent.currentUser.user_info &&
            $parent.product.user_info.has_phone
          "
          @click="routeToLogin(false)"
          class="main-button bg-orange white-text"
        >
          <i class="fa fa-phone-alt"></i>
          <span> تماس با فروشنده </span>
        </button>
        <button
          v-else-if="
            $parent.currentUser.user_info &&
            !$parent.product.user_info.has_phone
          "
          @click="openPhone(true)"
          class="main-button bg-orange white-text"
        >
          <i class="fa fa-comment"></i>
          <span> چت با فروشنده </span>
        </button>
        <button
          v-else
          @click="routeToLogin(true)"
          class="main-button bg-orange white-text"
        >
          <i class="fa fa-comment"></i>
          <span> چت با فروشنده </span>
        </button>
      </p>
      <p class="second-action">
        <button class="orange-text button-link">محصول برای فروش دارم</button>
      </p>
    </div>
    <div @click="closeModal()" class="button-background"></div>
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
      this.closeModal();
      this.$parent.activePhoneCall(isModal);
    },
    routeToLogin() {
      this.closeModal();
      setTimeout(() => {
        this.$parent.loginModal(false);
      }, 200);
    },
    closeModal() {
      $(".price-modal").removeClass("show-custom-modal");
    },
  },
};
</script>
