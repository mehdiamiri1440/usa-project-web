<style scoped>
i {
  position: relative;
  top: 1px;
  padding: 0 2px;
}

.user-information-wrapper,
.article-action-buttons button {
  font-size: 14px;
  padding: 4px 7px 5px;
  margin: 0;
  margin-top: 3px;
  line-height: 1.618;
}

.user-information-wrapper {
  height: 55px;
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

.edit-button {
  margin: 15px 0;
  display: inline-block;
  padding: 5px 0;
  width: 100%;
  border-radius: 3px;
  text-align: center;
  border: none;
  transition: 300ms;
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

.user-information-wrapper {
  padding: 5px 15px;
  border-bottom: 2px solid #eeeeee;
  margin: 0;
}

.user-information-wrapper > div,
.user-information-content,
.user-action-link,
.user-information-link {
  float: right;
  display: block;
  overflow: hidden;
}

.article-action-buttons {
  float: left !important;
}

.user-action-link {
  padding-top: 19px;

  padding-right: 8px;

  font-size: 11px;
}

.user-action-link.default {
  padding-top: 9px;
}

.user-information-contents p,
a.user-name-link {
  max-width: 120px;

  overflow: hidden;

  font-size: 14px;

  font-weight: bold;

  color: #777;

  height: 21px;

  padding-top: 0;

  white-space: nowrap;

  text-overflow: ellipsis;
}

.user-information-content.default {
  padding-top: 5px;
}

.user-image img,
.user-image > div {
  height: 100%;
}

p.response-rate {
  font-size: 10px;
  height: 21px;
  padding: 0;
}
.response-rate span {
  color: #e41c38;
}

@media screen and (max-width: 555px) {
  .article-action-buttons button {
    margin-top: 7px;
    width: 100%;
  }

  .article-action-buttons {
    display: none !important;
  }
}

@media screen and (max-width: 400px) {
  .user-information-contents p,
  a.user-name-link {
    max-width: 100px;
  }
  .user-information-contents p.response-rate {
    max-width: 115px;
  }
  .user-action-link {
    padding-right: 3px;
  }
}
</style>

<template>
  <div class="user-information-wrapper row">
    <div class="user-information-contents">
      <router-link :to="'/profile/' + user_name" class="user-information-link">
        <div class="user-information-content-image">
          <div class="user-image" v-if="profile_photo">
            <img v-bind:src="'/storage/' + profile_photo" />
          </div>

          <div class="user-image" v-else>
            <img
              src="../../../../../../img/user-defult.png"
              class="image_defult"
            />
          </div>
        </div>

        <div
          v-if="user_info.response_rate && user_info.response_rate != '0'"
          class="user-information-content"
        >
          <router-link
            class="user-name-link"
            :to="'/profile/' + user_name"
            v-if="user_info"
          >
            {{ user_full_name }}
            <button
              v-if="user_info.is_verified"
              @click.prevent
              class="verified-user"
              data-container="body"
              data-toggle="popover"
              data-placement="bottom"
              :data-content="$parent.verifiedUserContent"
              title
            >
              <i v-if="user_info.is_verified" class="fa fa-certificate"></i>
            </button>
          </router-link>

          <p v-if="user_info" class="response-rate">
            احتمال پاسخ گویی
            <span v-text="'%' + user_info.response_rate"></span>
          </p>
        </div>

        <div v-else class="user-information-content default">
          <router-link
            class="user-name-link"
            :to="'/profile/' + user_name"
            v-if="user_info"
          >
            {{ user_full_name }}
            <button
              v-if="user_info.is_verified"
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
      </router-link>

      <router-link
        v-if="!is_my_profile_status"
        :to="'/profile/' + user_name"
        :class="{
          default: !user_info.response_rate || user_info.response_rate == '0',
        }"
        @click="
          registerComponentStatistics(
            'product',
            'showUserProfile',
            'show profile'
          )
        "
        class="user-action-link green-text"
        >مشاهده پروفایل</router-link
      >
      <a
        v-else
        href="#"
        @click.prevent="deleteProduct()"
        :class="{
          default: !user_info.response_rate || user_info.response_rate == '0',
        }"
        class="user-action-link red-text"
        >حذف محصول</a
      >
    </div>
    <div class="article-action-buttons">
      <!-- <button
        v-if="!is_my_profile_status"
        @click.prevent="$parent.openChat($parent.product)"
        class="green-button"
      >
        <i class="fa fa-envelope"></i>
        استعلام قیمت
      </button> -->

      <button
        v-if="is_my_profile_status"
        class="edit-button bg-soft-blue navy-blue-text"
        data-toggle="modal"
        @click="$parent.openEditModal('#article-modal' + $parent.product.main.id)"
      >
        <i class="fa fa-pencil-alt"></i>
        ویرایش
      </button>
    </div>
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
