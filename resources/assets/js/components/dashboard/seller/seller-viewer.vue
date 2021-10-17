<style scoped>
.title {
  text-align: right;
  padding: 13px 15px;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.618;
}

.user-items-wrapper {
  direction: rtl;
  background: #fff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e9ecef;
  padding: 11px 15px 12px;
  margin-bottom: 25px;
}

.user-items-wrapper a {
  font-size: 20px;
  color: #313a43;
  text-align: right;
}

.user-items-wrapper a i {
  position: relative;
  top: 2px;
  color: #777;
}

li:nth-of-type(2n + 1) .user-items-wrapper {
  background: #f9faf5;
}

.doller-sign {
  background: none;
  border: none;
  font-size: 22px;
  position: relative;
  top: 5px;
  margin-left: 20px;
  color: #556080;
}

.date-wrapper p {
  font-weight: bold;
  margin: 0 auto;
  max-width: 110px;
  background: #e9ecef;
  text-align: center;
  color: #555;
  padding: 5px;
  border-radius: 25px;
  margin-bottom: 15px;
}

.green-button {
  margin: 0;
  margin: 0;
  padding: 6px 20px 5px;
  border-radius: 8px;
  font-size: 15px;
}

.default-chat-button {
  max-width: 120px;
  margin-right: 10px;
}

.list-empty-wrapper {
  text-align: center;
  font-size: 70px;
  margin-top: 15px;
  color: #777;
}

@media screen and (max-width: 767px) {
  .content-wrapper,
  .user-items-wrapper {
    padding-left: 5px;
    padding-right: 5px;
  }

  .user-items-wrapper a {
    overflow: hidden;
    height: 30px;
    line-height: 1.618;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 142px;
  }

  .toast {
    margin-left: 0;
    left: 10px;
    right: 10px;
  }

  .title {
    text-align: center;
  }

  .doller-sign {
    margin-left: 5px;
  }
  .main-content {
    padding-bottom: 90px;
  }
}
</style>
<template>
  <section class="main-content col-xs-12">
    <div class="row">
      <div class="title col-xs-12">
        <div class="col-xs-12 pull-right">
          <h1>خریدارانی که شماره تماس شما را دیده اند</h1>
        </div>
      </div>

      <div class="content-wrapper col-xs-12">
        <ul v-if="!loader && users.length">
          <li v-for="(user, index) in users" :key="index">
            <div v-if="user.isDateShow" class="date-wrapper">
              <p>
                {{ user.created_at | moment("jYYYY/jMM/jDD") }}
              </p>
            </div>
            <div class="user-items-wrapper">
              <router-link
                :to="{ name: 'profile', params: { user_name: user.user_name } }"
              >
                <i class="fa fa-user-circle"></i>
                <span v-text="user.first_name + ' ' + user.last_name"> </span>
              </router-link>
              <div>
                <button
                  class="doller-sign"
                  @click.prevent="fireToast()"
                  v-if="user.is_free"
                >
                  <i class="fa fa-dollar-sign"></i>
                </button>
                <button class="green-button" @click.prevent="openChat(user)">
                  <i class="fa fa-comment-alt"></i>
                  چت
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div
          class="list-empty-wrapper"
          v-else-if="!loader && users.length == 0"
        >
          <i class="fa fa-users"></i>
          <p>هنوز کاربری شماره تماس شما را ندیده است</p>
          <router-link
            tag="button"
            :to="{ name: 'showNumberGuideSeller' }"
            class="green-button"
          >
            راهنمای نمایش اطلاعات تماس
          </router-link>
        </div>
        <ul v-else>
          <li v-for="(item, index) in 5" :key="index">
            <div class="user-items-wrapper">
              <p class="placeholder-content h-30 content-default-width"></p>
              <span
                class="
                  default-chat-button
                  placeholder-content
                  h-30
                  content-min-width
                "
              >
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="toast">از کیف پول شما برای این دسترسی مبلغی کم شده است</div>
  </section>
</template>

<script>
import { eventBus } from "../../../router/router";

export default {
  data: function () {
    return {
      items: "",
      users: "",
      loader: false,
    };
  },
  methods: {
    init() {
      this.loader = true;
      let itemDate = "";

      axios.post("/get_phone_number_viewers_list").then((response) => {
        this.users = response.data.users;
        this.users = this.users.map((item) => {
          let date = item.created_at.substr(0, 10);
          item.isDateShow = true;
          if (itemDate == date) {
            item.isDateShow = false;
          }
          itemDate = date;
          return item;
        });
        this.loader = false;
      });
    },
    openChat: function (user) {
      this.registerComponentStatistics(
        "ٰphone-number-viewers-list",
        "openChat",
        "click on open chatBox"
      );

      var contact = {
        contact_id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        user_name: user.user_name,
      };
      eventBus.$emit("ChatInfo", contact);
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
    fireToast() {
      var toast = $(".toast");
      toast.addClass("show");
      setTimeout(() => {
        toast.removeClass("show");
      }, 3000);
    },
  },
  mounted() {
    this.init();
    eventBus.$emit("subHeader", false);
  },
};
</script>
