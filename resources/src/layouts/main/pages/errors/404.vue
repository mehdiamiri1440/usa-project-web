<style scoped>
p.description-error {
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  color: #e41c38;
  margin-top: -15px;
  margin-bottom: 15px;
  line-height: 1.618;
}

img {
  width: 31%;
  margin: 90px auto 20px;
  display: block;
}

.green-button {
  margin: 15px 0;
  display: inline-block;
  background: #00c569;
  color: #f5f5f5;
  padding: 10px 35px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
  border: none;
  transition: 300ms;
}

.green-button:hover {
  color: #fff;
  background: #11a028;
  transition: 300ms;
}

.botton-inco {
  margin: 15px 0;
  display: inline-block;
  background: #000122;
  color: #f5f5f5;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  transition: 300ms;
}

.botton-inco:hover {
  color: #fff;
  background: #00c569;
}

.buttons {
  width: 55%;
  margin: 0 auto;
  text-align: center;
  float: none;
}

.buttons div a {
  width: 100%;
}

@media screen and (max-width: 991px) {
  .buttons {
    width: 40%;
    margin: 0 auto;
    text-align: center;
  }

  .buttons div {
    width: 100%;
    padding: 0 15px;
    float: right;
  }
}

@media screen and (max-width: 768px) {
  .buttons {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  img {
    width: 60%;
    margin: 90px auto 20px;
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .buttons {
    width: 100%;
  }

  img {
    width: 80%;
  }
}

@media screen and (max-width: 380px) {
  .buttons {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  img {
    margin: 30px auto 20px;
  }
}
</style>

<template>
  <div class="container-fluid">
    <div class="container">
      <div class="col-xs-12">
        <img src="../../../img/def404.png" />
        <p class="description-error">صفحه مورد نظر یافت نشد</p>
      </div>

      <div class="buttons col-xs-12">
        <div class="col-xs-12 col-sm-6">
          <router-link :to="{ name: 'indexPage' }" class="green-button"
            >صفحه نخست</router-link
          >
        </div>

        <div class="col-xs-12 col-sm-6">
          <a href="javascript:history.go(-2)" class="botton-inco"
            >بازگشت به صفحه قبل</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../router/router";

export default {
  props: ["assets"],
  methods: {
    stopLoader: function () {
      eventBus.$emit("isLoading", false);
    },
  },
  mounted: function () {
    var self = this;
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated() {
    this.$nextTick(this.stopLoader());
  },
};
</script>
