<style scoped>
i {
  position: relative;
  top: 1px;
  padding: 0 2px;
}
.verified-user {
  font-size: 16px;
}
.user-information-wrapper {
  font-size: 14px;

  font-weight: bold;

  padding: 4px 0 5px;

  margin: 0;

  margin: 3px 5px;

  line-height: 1.618;
  border-bottom: 1px solid #e9ecef;
}
.user-information-wrapper:hover {
  cursor: pointer;
}

.article-action-buttons button {
  margin-top: 7px;
  width: 100%;
}

.article-action-buttons {
  float: left !important;
  display: none !important;
}

.green-text {
  color: #00c569;
}

.green-text:hover {
  color: #279b41;
}

.red-text {
  color: #e41c38;
}

.red-text:hover {
  color: #d81b35;
}

.blue-background {
  color: #000546;
}

.blue-background:hover {
  color: #000430;
}

.blue-button {
  margin: 15px 0;
  display: inline-block;
  background: #150e47;
  color: #fff;
  padding: 5px 0;
  width: 100%;
  border-radius: 3px;
  text-align: center;
  border: none;
  transition: 300ms;
}

.blue-button:hover,
.blue-button:focus {
  color: #fff;
  background: #1d1060;
}
.user-image {
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0;
  margin-left: 10px;
}

.user-information-content-image {
  float: right;
}

.user-action-link {
  padding-right: 10px;
  font-size: 11px;
  float: left;
  text-align: left;
}

.response-rate-wrapper {
  width: 50px;
}

.response-rate-wrapper button {
  background: #f2f2f2;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  text-align: center;
  color: #e41c38;
  width: 100%;
  line-height: initial;
  padding: 0;
}

.user-information-content {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: calc(100% - 70px);
}

.user-action-link.default {
  padding-top: 9px;
}

div.user-information-link {
  display: block;
  overflow: hidden;
  font-size: 13px;
  font-weight: bold;
  color: #777;
  padding-top: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}
</style>

<template>
  <div class="user-information-wrapper" @click.prevent="$parent.setScroll()">
    <div class="user-information-link">
      <div class="user-information-content pull-right">
        <i class="fa fa-user-circle"></i>
        {{ user_full_name }}
      </div>
      <button
        v-if="!!user_info.is_verified"
        @click.prevent
        class="verified-user"
        data-container="body"
        data-toggle="popover"
        data-placement="bottom"
        :data-content="$parent.verifiedUserContent"
        title
      >
        <i class="fa fa-certificate"></i>
      </button>
      <div class="response-rate-wrapper pull-left">
        <button
          v-if="user_info.response_rate != 0"
          data-toggle="tooltip"
          data-placement="right"
          title="احتمال پاسخ گویی"
          class="response-rate"
        >
          <i class="fa fa-exchange-alt"></i>
          {{ "%" + user_info.response_rate }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { eventBus } from "../../../../../router/router";
import Route from "../../../../../router/components/route";

export default {
  components: { Route },
  props: [
    "profile_photo",
    "user_info",
    "user_full_name",
    "user_name",
    "current_user",
    "product_id",
    "is_my_profile_status",
  ],
  data() {
    return {
      popUpMsg: "",
      deleteButtonText: "",
      cancelButtonText: "",
    };
  },
  methods: {
    openChat: function (product) {
      this.registerComponentStatistics(
        "product",
        "openChat",
        "click on open chatBox"
      );

      let productName =
        product.main.sub_category_name + " " + product.main.product_name;
      var contact = {
        contact_id: this.user_info.id,
        first_name: this.user_info.first_name,
        last_name: this.user_info.last_name,
        profile_photo: this.profile_photo,
        user_name: this.user_info.user_name,
        product_name: productName,
      };

      if (this.current_user.user_info) {
        if (this.current_user.user_info.id !== this.user_info.id) {
          eventBus.$emit("ChatInfo", contact);
          // window.localStorage.setItem("contact", JSON.stringify(contact));

          // this.$router.push({name : 'registerInquiry'});
        } else {
          this.popUpMsg = "شما نمی توانید به خودتان پیام دهید.";
          eventBus.$emit("submitSuccess", this.popUpMsg);
          $("#custom-main-modal").modal("show");
        }
      } else {
        window.localStorage.setItem("contact", JSON.stringify(contact));
        // this.$router.push({ name: "registerInquiry" });
        this.$store.commit("routeStore/setModal", {
          name: "sendMsg",
        });
      }
    },
    scrollToTheRequestRegisterBox: function (element) {
      var newPosition = $(element).offset();
      $("html, body")
        .stop()
        .animate({ scrollTop: newPosition.top - 380 }, 1000);
    },
    deleteProduct: function () {
      this.$store.commit("routeStore/deleteProductModal", {
        productId: this.product_id,
      });
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
    registerComponentExceptions: function (description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal,
      });
    },
    activeComponentTooltip() {
      $(".verified-user")
        .popover({ trigger: "manual", html: true, animation: false })
        .on("mouseenter", function () {
          var _this = this;
          $(this).popover("show");
          $(".popover").on("mouseleave", function () {
            $(_this).popover("hide");
          });
        })
        .on("mouseleave", function () {
          var _this = this;
          setTimeout(function () {
            if (!$(".popover:hover").length) {
              $(_this).popover("hide");
            }
          }, 300);
        });
      $(".response-rate").tooltip();
    },
  },
  mounted: function () {
    this.activeComponentTooltip();
  },
};
</script>
