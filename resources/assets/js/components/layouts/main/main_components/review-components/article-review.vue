<style scoped>
.review-item-wrapper {
  float: right;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  padding: 10px 0;
  margin-bottom: 30px;
  direction: rtl;
}
.reviewer-information {
  border-left: 1px solid #bdc4cc;
  overflow: hidden;
  padding-bottom: 7px;
  margin-bottom: 12px;
}

.reviewer-information-wrapper {
  padding: 0;
}

.reviewer-information-wrapper .user-name {
  font-size: 15px;
  font-weight: bold;
  color: #404a54;
  margin: 10px auto 15px;
  height: 21px;
  padding-top: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 120px;
  overflow: hidden;
}
.reviewer-information-wrapper .user-city {
  color: #777777;
  margin-bottom: 10px;
}
.comment-date {
  font-size: 14px;
  color: #bdc4cc;
  margin-top: 12px;
}
.review-message {
  color: #777;
  line-height: 1.618;
}
.review-message > p {
  white-space: pre-line;
}
.stars-wrapper > span {
  position: relative;
  display: inline-block;
}

.rate-stars {
  margin-top: 3px;
  margin-bottom: 8px;
}

.stars-wrapper > span > span {
  display: block;
  position: relative;
  z-index: 1;
  font-size: 13px;
  width: 18px;
  text-align: center;
  margin-left: 5px;
  color: #777;
}
.stars-wrapper > span > i {
  position: absolute;
  left: 3px;
  font-size: 20px;
  z-index: 0;
  top: -2px;
  color: #bdc4cc;
}
.review-likes {
  background: none;
  border: none;
  color: #777;
  margin-top: 15px;
}

.review-likes i {
  font-weight: 400;
}
.review-likes.active i {
  font-weight: 900;
}

.review-likes.active span.like-icon {
  color: #00c569;
}

.review-likes-wrapper.owner-profile .review-likes {
  margin-top: 7px;
}

.review-likes-wrapper.owner-profile .delete-comment {
  margin-top: 3px;
}
@media screen and (max-width: 767px) {
  .reviewer-information {
    border-left: none;
    border-bottom: 1px solid #bdc4cc;
  }

  .reviewer-information-wrapper .user-name,
  .reviewer-information-wrapper .user-city {
    float: right;
    margin: 0;
  }

  .reviewer-information-wrapper .user-city {
    font-size: 13px;
  }

  .reviewer-information-wrapper .user-name {
    margin-left: 5px;
    padding-right: 7px;
  }

  .reviewer-information-wrapper .comment-date {
    float: left;
    margin: 0;
    padding-left: 7px;
  }
}
</style>

<template>
  <div class="col-xs-12">
    <div class="row">
      <article class="review-item-wrapper">
        <div
          class="
            reviewer-information-wrapper
            text-center
            col-xs-12 col-sm-2
            pull-right
          "
        >
          <div class="reviewer-information">
            <p class="user-name" v-text="filterUserName"></p>
            <p
              class="user-city"
              v-text="review.province + ' - ' + review.city"
            ></p>
            <p class="comment-date hidden-sm hidden-md hidden-lg">
              {{ review.created_at | moment("jYYYY/jMM/jDD") }}
            </p>
          </div>
        </div>
        <div class="review-message col-xs-12 col-sm-8 pull-right">
          <div class="rate-stars" v-if="review.rating_score > 0">
            <p class="stars-wrapper text-right">
              <span v-for="(star, index) in 5" :key="index">
                <span v-text="index + 1"></span>
                <i
                  class="fa fa-star"
                  :class="{ 'yellow-text': index < review.rating_score }"
                ></i>
              </span>
            </p>
          </div>
          <p v-text="review.text"></p>
        </div>
        <div class="review-rate text-center col-xs-12 col-sm-2 pull-right">
          <p class="comment-date hidden-xs">
            {{ review.created_at | moment("jYYYY/jMM/jDD") }}
          </p>
          <div
            class="review-likes-wrapper text-center"
            v-if="!$parent.isMyProfile"
          >
            <button
              @click.prevent="doLike()"
              class="review-likes"
              :class="{ active: likeAction }"
            >
              <span class="like-icon">
                <span v-text="likesCount"></span>
                <i class="fa fa-thumbs-up"></i>
              </span>
              <span v-if="likeAction">پسندیدم</span>
              <span v-else>می پسندم</span>
            </button>
          </div>

          <div class="review-likes-wrapper owner-profile text-center" v-else>
            <div class="review-likes">
              <span class="like-icon">
                <span v-text="likesCount"></span>
                <i class="fa fa-thumbs-up"></i>
              </span>
            </div>
            <div class="delete-comment-wrapper">
              <button
                @click.prevent="deleteComment()"
                :disabled="$parent.doDeletereview"
                class="delete-comment red-text review-likes"
                :class="{ 'disable-text ': $parent.doDeletereview }"
              >
                حذف این نظر
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ["review"],
  data: function () {
    return {
      filterUserName: "",
      likesCount: this.review.likes,
      likeAction: this.review.already_liked ? this.review.already_liked : false,
    };
  },
  methods: {
    init: function () {
      this.filterName();
    },
    filterName: function () {
      let userName = this.review.first_name + " " + this.review.last_name;
      this.filterUserName = userName;
      // let splitUserName = userName.split("");
      // let nameLength = splitUserName.length;
      // let filter = [];
      // for (let i = 0; i < nameLength; i++) {
      //   if (i == 0) {
      //     filter.push(splitUserName[i]);
      //   } else if (i == nameLength - 1) {
      //     filter.push(splitUserName[i]);
      //   } else if (i < 8 && i != nameLength - 1) {
      //     filter.push("*");
      //   }
      // }
      // this.filterUserName = filter.join("");
    },
    doLike: function () {
      let likeObg = {
        comment_id: this.review.c_id,
      };
      if (!this.likeAction) {
        this.likeAction = true;
        likeObg.action = this.likeAction;
        this.likesCount++;
      } else {
        this.likeAction = false;
        likeObg.action = this.likeAction;
        this.likesCount--;
      }
      axios.post("/profile/do-like", likeObg).then((response) => {
        if (response.data.status == false) {
          console.log("خطایی رخ داده است");
        }
      });
    },
    deleteComment: function () {
      this.$parent.doDeletereview = true;
      let self = this;

      self.handleBackBtn();

      swal({
        title: "حذف نظر",
        text: "تعداد نظرات حذف شده توسط شما به کاربران نمایش داده خواهد شد. آیا می خواهید این نظر را حذف کنید؟",
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
          delete: {
            text: "حذف کن",
            value: "delete",
            className: "bg-red",
          },
          reject: {
            text: "انصراف",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "delete":
            axios
              .post("/profile/delete-user-comment", {
                c_id: self.review.c_id,
              })
              .then((response) => {
                self.$parent.getReviews();
                self.$parent.doDeletereview = false;
              });
            break;
          case "reject":
            self.$parent.doDeletereview = false;
            break;
          case "close":
            self.$parent.doDeletereview = false;
            break;
        }
      });
    },
    isModalOpen: function () {
      return swal.getState().isOpen;
    },
    handleBackBtn: function () {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        if (self.isModalOpen()) {
          swal.close();
          self.$parent.doDeletereview = false;
          window.localStorage.removeItem("contact"); // it's been set before modal openning
          window.localStorage.removeItem("msgToSend");
          window.localStorage.removeItem("pathname");
          // window.location.href = window.location.pathname;
        }
      });
    },
  },
  mounted: function () {
    this.init();
  },
};
</script>
