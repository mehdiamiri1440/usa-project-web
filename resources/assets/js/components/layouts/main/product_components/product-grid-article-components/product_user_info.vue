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

.user-action-link.default {
  padding-top: 9px;
}

a.user-information-link {
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
  <div class="user-information-wrapper">
    <router-link :to="'/profile/' + user_name" class="user-information-link">
      <i class="fa fa-user-circle"></i>
      {{ user_full_name }}
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
    </router-link>
  </div>
</template>

<script>
import { eventBus } from "../../../../../router/router";
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
      var self = this;

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
        eventBus.$emit("modal", "sendMsg");
      }
    },
    scrollToTheRequestRegisterBox: function (element) {
      var newPosition = $(element).offset();
      $("html, body")
        .stop()
        .animate({ scrollTop: newPosition.top - 380 }, 1000);
    },
    deleteProduct: function () {
      //show modal
      // this.popUpMsg = "آیا محصول حذف شود؟";
      // this.deleteButtonText = "حذف";
      // this.cancelButtonText = "انصراف";

      // eventBus.$emit("submitSuccess", this.popUpMsg);
      // eventBus.$emit("deleteButtonText", this.deleteButtonText);
      // eventBus.$emit("cancelButtonText", this.cancelButtonText);
      eventBus.$emit("productId", this.product_id);
      eventBus.$emit("modal", "deleteProduct");

      // $("#deleteModal").modal("show");

      this.registerComponentStatistics(
        "product",
        "delete-product",
        "click on delete product-btn"
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
    },
  },
  mounted: function () {
    this.activeComponentTooltip();
  },
};
</script>
