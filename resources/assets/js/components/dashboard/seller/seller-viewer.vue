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
  margin: 30px auto;
}

.user-items-wrapper li {
  direction: rtl;
  background: #fff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e9ecef;
  padding: 11px 15px 12px;
  margin-bottom: 21px;
}

.user-items-wrapper li p {
  font-size: 20px;
  color: #313a43;
  text-align: right;
}

.user-items-wrapper li p i {
  position: relative;
  top: 2px;
  color: #777;
}

.user-items-wrapper li:nth-of-type(2n + 1) {
  background: #f9faf5;
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
  .title {
    text-align: center;
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
        <ul class="user-items-wrapper" v-if="!loader && users.length">
          <li v-for="(user, index) in users" :key="index">
            <p>
              <i class="fa fa-user-circle"></i>
              <span v-text="user.first_name + ' ' + user.last_name"> </span>
            </p>
            <button class="green-button" @click.prevent="openChat(user)">
              <i class="fa fa-comment-alt"></i>
              ارسال پیام
            </button>
          </li>
        </ul>
        <div
          class="list-empty-wrapper"
          v-else-if="!loader && users.length == 0"
        >
          <i class="fa fa-users"></i>
          <p>هنوز کاربری شماره تماس شما را ندیده است</p>
        </div>
        <ul class="user-items-wrapper" v-else>
          <li v-for="(item, index) in 5" :key="index">
            <p class="placeholder-content h-30 content-default-width"></p>
            <span
              class="default-chat-button placeholder-content h-30 content-min-width"
            >
            </span>
          </li>
        </ul>
      </div>
    </div>
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
      axios.post("/get_phone_number_viewers_list").then((response) => {
        this.users = response.data.users;
        this.loader = false;
      });
    },
    openChat: function (user) {
      this.registerComponentStatistics(
        "ٰsellerViewer",
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
  },
  mounted() {
    this.init();
    eventBus.$emit("subHeader", false);
  },
};
</script>
