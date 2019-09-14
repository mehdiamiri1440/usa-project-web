<style>
.custom-badge {
  position: absolute;
  left: 20px;
  top: 3px;
  background: #e41c38;
  height: 25px;
  width: 25px;
  border-radius: 50px;
  padding: 6px;
  color: #fff;
  text-align: center;
}
.placeholder-content {
  background: linear-gradient(
    72deg,
    #dddddd,
    #dddddd,
    #f0f3f6,
    #dddddd,
    #dddddd
  );
  background-size: 1000% 1000%;

  -webkit-animation: AnimationBackgroundGradient 3s ease infinite;
  -moz-animation: AnimationBackgroundGradient 3s ease infinite;
  -o-animation: AnimationBackgroundGradient 3s ease infinite;
  animation: AnimationBackgroundGradient 3s ease infinite;
}
.header-menu i.fa {
  margin: 5px;
}
</style>
<template>
  <div>
    <section v-if="isLoading">
      <div class="header-menu">
        <ul class="list-unstyled">
          <li class="list-item">
            <router-link
              :class="{'active' : this.activeElement === 0}"
              :to="{ name : 'status' }"
            >
              <span>داشبورد</span> 
              <i class="fa fa-chart-line"></i>
            </router-link>
          </li>

          <li class="list-item">
            <router-link
              :to="{ name : 'profileBasic' }"
            >
              <span>ویرایش پروفایل</span>
              <i class="fa fa-user" aria-hidden="true"></i>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name : 'buyAdRequests' }">
              <span>درخواست ها</span>
              <i class="fa fa-list-alt" aria-hidden="true"></i>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name : 'registerProduct' }">
              <span>ثبت محصول</span>
              <i class="fa fa-plus-square" aria-hidden="true"></i>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name : 'myProducts' }">
              <span>محصولات من</span>
              <i class="fa fa-list-alt" aria-hidden="true"></i>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name : 'messages' }">
              <span>پیام ها</span>
              <span class="custom-badge" v-if="messageCount" v-text="messageCount"></span>

              <i class="fa fa-comment" aria-hidden="true"></i>
            </router-link>
          </li>

          <li class="list-item">
            <router-link :to="{ name : 'guide' }">
              <span>راهنما</span>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="copy-right">
        <p>تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.</p>
      </div>
    </section>

    <!-- loading part for the menu items -->
    <section v-else id="loadingSection">hellop mehd amri</section>
  </div>
</template>

<script>
import { eventBus } from "../../../../../router/dashboard_router";

export default {
  props: [
    "profilebasic",
    "byadreq",
    "selregpro",
    "transactroute",
    "mytrans",
    "guide"
  ],
  data() {
    return {
      activeElement: null,
      isLoading: true,
      messageCount: "",
      linksPath: ["/dashboard/complementary"]
    };
  },
  methods: {
    init: function() {
      var self = this;

      axios
        .post("/get_total_unread_messages_for_current_user")
        .then(function(response) {
          self.messageCount = response.data.msg_count;
        })
        .catch(function(err) {
          //
        });
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    checkLinkActive: function() {
      for (var i = 0; i < this.linksPath.length; i++) {
        if (this.subIsActive(this.linksPath[i])) {
          this.activeElement = i;
        } else {
          this.activeElement = null;
        }
      }
    }
  },
  watch: {
    $route() {
      this.checkLinkActive();
    }
  },
  mounted: function() {
    this.checkLinkActive();
    this.init();
  },
  created() {
    var self = this;

    eventBus.$on("messageCount", event => {
      this.messageCount += event;
    });
    eventBus.$on("active", event => {
      this.activeElement = event;
    });
    Echo.private("testChannel." + userId).listen("newMessage", e => {
      var senderId = e.new_message.sender_id;

      self.messageCount += 1;
    });
  }
};
</script>
