<style scoped>
i {
  position: relative;
  top: 1px;
  padding: 0 2px;
}

.user-information-wrapper,
.article-action-buttons button {
  font-size: 14px;

  font-weight: bold;

  padding: 4px 7px 5px;

  margin: 0;

  margin-top: 3px;

  line-height: 1.618;
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

.user-information-wrapper {
  padding: 5px 15px 0px;
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
  padding-bottom: 5px;
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
      <router-link :to="'/profile/'+ user_name" class="user-information-link">
        <div class="user-information-content-image">
          <div class="user-image" v-if="profile_photo">
            <img v-bind:src=" '/storage/' + profile_photo" />
          </div>

          <div class="user-image" v-else>
            <img :src="defultimg" class="image_defult" />
          </div>
        </div>

        <div v-if="user_info.response_rate" class="user-information-content">
          <router-link
            class="user-name-link"
            :to="'/profile/'+ user_name"
            v-if="user_info"
            v-text="user_full_name"
          ></router-link>

          <p v-if="user_info" class="response-rate">
            احتمال پاسخ گویی
            <span v-text="'%' + user_info.response_rate"></span>
          </p>
        </div>

        <div v-else class="user-information-content default">
          <router-link
            class="user-name-link"
            :to="'/profile/'+ user_name"
            v-if="user_info"
            v-text="user_full_name"
          ></router-link>
        </div>
      </router-link>

      <router-link
        v-if="!is_my_profile_status"
        :to="'/profile/'+ user_name"
        :class="{'default' : !user_info.response_rate}"
        @click="registerComponentStatistics('product','showUserProfile','show profile')"
        class="user-action-link green-text"
      >مشاهده پروفایل</router-link>
      <a
        v-else
        href="#"
        @click.prevent="deleteProduct()"
        :class="{'default' : !user_info.response_rate}"
        class="user-action-link red-text"
      >حذف محصول</a>
    </div>
    <div class="article-action-buttons">
      <button
        v-if="!is_my_profile_status"
        @click.prevent="$parent.openChat($parent.product)"
        class="green-button"
      >
        <i class="fa fa-envelope"></i>
        استعلام قیمت
      </button>

      <button
        v-else="!is_my_profile_status"
        class="blue-button"
        data-toggle="modal"
        :data-target="'#article-modal' + $parent.product.main.id"
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
    "defultimg",
    "current_user",
    "product_id",
    "is_my_profile_status"
  ],
  data() {
    return {
      popUpMsg: "",
      deleteButtonText: "",
      cancelButtonText: ""
    };
  },
  methods: {
    openChat: function() {
      this.registerComponentStatistics(
        "product",
        "openChat",
        "click on open chatBox"
      );

      var contact = {
        contact_id: this.user_info.id,
        first_name: this.user_info.first_name,
        last_name: this.user_info.last_name,
        profile_photo: this.profile_photo,
        user_name: this.user_info.user_name
      };
      var self = this;

      if (this.current_user.user_info) {
        if (this.current_user.user_info.id !== this.user_info.id) {
          eventBus.$emit("ChatInfo", contact);
        } else {
          this.popUpMsg = "شما نمی توانید به خودتان پیام دهید.";
          eventBus.$emit("submitSuccess", this.popUpMsg);
          $("#custom-main-modal").modal("show");
        }
      } else {
        window.localStorage.setItem("contact", JSON.stringify(contact));
        window.localStorage.setItem("pathname", window.location.pathname);
        let self = this;
        let closeIconBtn = document.createElement("button");
        closeIconBtn.classList.add("sweet-alert-close-button");
        closeIconBtn.innerHTML = "<i class='fa fa-times'></i>";
        closeIconBtn.addEventListener("click", function() {
          swal.close();
        });

        swal({
          title: "استعلام قیمت",
          text:
            "اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.",
          content: closeIconBtn,
          className: "custom-sweet-alert",
          buttons: {
            catch: {
              text: "یه کاری کن خوورود/ثبت نام",
              value: "success"
            },
            close: {
              text: "متوجه شدم",
              className: "close-sweet-alert-btn"
            }
          }
        }).then(value => {
          switch (value) {
            case "success":
              self.$router.push({ name: "login" });
              break;
          }
        });
        this.popUpMsg =
          "اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.";
        eventBus.$emit("submitSuccess", this.popUpMsg);
        $("#auth-popup").modal("show");
      }
    },
    scrollToTheRequestRegisterBox: function(element) {
      var newPosition = $(element).offset();
      $("html, body")
        .stop()
        .animate({ scrollTop: newPosition.top - 380 }, 1000);
    },
    deleteProduct: function() {
      //show modal
      this.popUpMsg = "آیا محصول حذف شود؟";
      this.deleteButtonText = "حذف";
      this.cancelButtonText = "انصراف";

      eventBus.$emit("submitSuccess", this.popUpMsg);
      eventBus.$emit("deleteButtonText", this.deleteButtonText);
      eventBus.$emit("cancelButtonText", this.cancelButtonText);
      eventBus.$emit("productId", this.product_id);

      $("#deleteModal").modal("show");

      this.registerComponentStatistics(
        "product",
        "delete-product",
        "click on delete product-btn"
      );
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    registerComponentExceptions: function(description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal
      });
    }
  }
};
</script>
