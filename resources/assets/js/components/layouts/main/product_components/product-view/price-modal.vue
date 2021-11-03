<style scoped>
.price-modal {
  position: fixed;
  bottom: 0;
  z-index: 1012;
  display: block;
  height: 0;
  left: 0;
  width: 100%;
}
.price-modal.show-custom-modal {
  height: 100%;
}

.modal-content {
  z-index: 1;
  position: absolute;
  border-radius: 20px 20px 0 0;
  min-height: 100px;
  bottom: -100px;
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
</style>
<template>
  <div class="price-modal">
    <div class="modal-content">
      <p>
        <strong> کف قیمت </strong>
        برای هر کیلو
        {{ productName }}
      </p>
      <p class="price-text" v-text="price"></p>
      <div>
        <button>
          <i class="fa fa-phone-alt"></i>
          <span> تماس با فروشنده </span>
        </button>
        <button class="orange-text">محصول برای فروش دارم</button>
      </div>
    </div>
    <div class="button-background"></div>
  </div>
</template>


<script>
export default {
  props: ["productName", "price"],
  mounted() {
    $(".button-background").on("click", function () {
      $(".price-modal").removeClass("show-custom-modal");
    });
  },
};
</script>
