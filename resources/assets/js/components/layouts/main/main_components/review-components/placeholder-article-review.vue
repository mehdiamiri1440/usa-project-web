<style scoped>
.review-item-wrapper {
  float: right;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #bdc4cc;
  padding: 10px 0 0;
  margin-bottom: 30px;
}
.reviewer-information {
  border-left: 1px solid #bdc4cc;
  overflow: hidden;
  padding-bottom: 7px;
  margin-bottom: 12px;
}

.reviewer-information-wrapper .user-name {
  font-size: 15px;
  font-weight: bold;
  color: #404a54;
  margin-bottom: 15px;
  margin-top: 10px;
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
.stars-wrapper > span {
  position: relative;
  display: inline-block;
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
  font-size: 20px;
  z-index: 0;
  color: #ddd;
}
.review-likes {
  background: none;
  border: none;
  color: #777;
  margin-top: 15px;
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

  .reviewer-information > span {
    float: right;
  }

  .reviewer-information > span:first-of-type {
    margin-left: 15px;
    width: 110px;
  }

  .reviewer-information > span:nth-of-type(2) {
    width: 65px;
    margin: 0;
  }

  .reviewer-information > span:last-of-type {
    float: left;
    width: 55px;
  }

  .reviewer-information-wrapper .user-name,
  .reviewer-information-wrapper .user-city {
    float: right;
    margin: 0;
  }
  .reviewer-information-wrapper .user-name {
    margin-left: 10px;
  }
  .reviewer-information-wrapper .comment-date {
    float: left;
    margin: 0;
  }
  .rate-stars {
    margin-bottom: 10px;
  }
  .review-likes-wrapper > span {
    height: 20px;
    margin-top: 25px;
  }
}
</style>

<template>
  <article class="col-xs-12">
    <div class="row">
      <div class="review-item-wrapper">
        <div
          class="reviewer-information-wrapper text-center col-xs-12 col-sm-2 pull-right"
        >
          <div class="reviewer-information">
            <span
              class="placeholder-content content-default-width margin-auto"
            ></span>
            <span
              class="placeholder-content content-default-width margin-10-auto"
            ></span>
            <span
              class="placeholder-content content-half-width margin-auto"
            ></span>
          </div>
        </div>
        <div class="review-message col-xs-12 col-sm-8 pull-right">
          <div class="rate-stars">
            <p class="stars-wrapper text-right">
              <span v-for="(star, index) in 5" :key="index">
                <i class="fa fa-star"></i>
              </span>
            </p>
          </div>
          <p>
            <span class="placeholder-content content-full-width"></span>
            <span
              class="placeholder-content content-half-width margin-top-10"
            ></span>
          </p>
        </div>
        <div class="review-rate text-center col-xs-12 col-sm-2 pull-right">
          <p class="comment-date hidden-xs">
            <span
              class="placeholder-content content-half-width margin-auto margin-top-10"
            ></span>
          </p>
          <div class="review-likes-wrapper text-center">
            <span
              class="placeholder-content content-default-width margin-15-auto"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
