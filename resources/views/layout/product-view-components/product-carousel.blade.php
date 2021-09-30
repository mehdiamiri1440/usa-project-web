<article class="carousel-item box-content">
  <a href="link" class="carousel-img text-center">
    <img
      loading="lazy"
      src="img"
      class="main-image main-image-load"
    />
  </a>

    <h4 v-text="title.substring(0, 15) + ' ...'"></h4>

    <h4 v-text="title"></h4>


    <span>موجودی</span>
    <span v-text="stock"></span>

  <div class="inquiry-button-wrapper">
    <button class="inquiry-button green-button" v-if="inquiryButtonActive">
      استعلام شرایط فروش
    </button>
  </div>
</article>