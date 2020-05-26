
<style scoped>
.review-item-wrapper {
  float: right;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #bdc4cc;
  padding: 10px 0;
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

.rate-stars {
  margin-top: 3px;
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
  .reviewer-information-wrapper .user-name {
    margin-left: 10px;
  }
  .reviewer-information-wrapper .comment-date {
    float: left;
    margin: 0;
  }
}
</style>

<template>
  <div class="col-xs-12">
    <div class="review-item-wrapper">
      <div class="reviewer-information-wrapper text-center col-xs-12 col-sm-2 pull-right">
        <div class="reviewer-information">
          <p class="user-name">ع*******ی</p>
          <p class="user-city">فارس - شیراز</p>
          <p class="comment-date hidden-sm hidden-md hidden-lg">۱۵ شهریور ۱۳۹۹</p>
        </div>
      </div>
      <div class="review-message col-xs-12 col-sm-8 pull-right">
        <div class="rate-stars">
          <p class="stars-wrapper text-right">
            <span v-for="(star,index) in 5" :key="index">
              <span v-text="index + 1"></span>
              <i class="fa fa-star" :class="{ 'yellow-text' : index < 4}"></i>
            </span>
          </p>
        </div>
        <p>بنا بر گفته های اتحادیه صادرکنندگان برنج در پاکستان(REAP) که از افزایش میزان عرضه و فروش برنج پاکستانی به کشورهای مختلف منطقه و همسایه از جمله کشور جمهوری اسلامی ایران که از بزرگترین مشتریان است</p>
      </div>
      <div class="review-rate text-center col-xs-12 col-sm-2 pull-right">
        <p class="comment-date hidden-xs">۱۵ شهریور ۱۳۹۹</p>

        <div class="review-likes-wrapper text-center">
          <button class="review-likes">
            <span class="like-icon">
              5
              <i class="fa fa-thumbs-up"></i>
            </span>
            <span>می پسندم</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
