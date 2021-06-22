<div class="container">


    <main id="main" class="row">
      <div class="col-xs-12 col-lg-9 pull-right">
        <section class="main-content">
          <div class="row">
            @include('layout.product-view-components.product-contents')
          </div>
        </section>
      </div>

      <div class="col-xs-12 col-lg-3 pull-left">
        <div class="row">
            @include('layout.product-view-components.profile-info')
        </div>
      </div>

      <section
        id="product-section"
        class="section-wrapper col-xs-12 latest-product"
      >
        <div class="row">
          <h3 class="box-title">محصولات مرتبط</h3>

          <div class="products-contents">
              @for ($i = 0; $i < 4; $i++)
              <div class="owl-carousel product-carousel col-xs-12 col-sm-3">
                @include('layout.product-view-components.product-carousel')
            </div>
              @endfor
            
          </div>
        </div>
      </section>



      <div class="buttons-wrapper col-xs-12">
        <router-link
          :to="{ path: this.categoryUrl }"
          class="green-button blue-button"
          >مشاهده همه محصولات</router-link
        >
      </div>

      <!-- <register-inquer-form
        v-if="showRegisterRequestBox"
        wrapper-bg="true"
        :str="str"
        :user-profile-info="product.user_info"
        :user-profile-photo="
          product.profile_info.profile_photo
            ? str + '/' + product.profile_info.profile_photo
            : assets + 'assets/img/user-defult.png'
        "
      /> -->

      <div
        v-if="product.main.product_name && !isMyProfile"
        class="fix-send-message-wrapper hidden-lg hidden-md"
      >
        <button
          v-if="!isMyProfile && currentUser.user_info"
          @click.prevent="openChat(product)"
          :class="{
            'send-message-button':
              product.user_info.has_phone && currentUser.user_info.is_buyer,
            'green-button':
              !product.user_info.has_phone ||
              (product.user_info.has_phone && currentUser.user_info.is_seller),
          }"
        >
          <span
            v-if="product.user_info.has_phone && currentUser.user_info.is_buyer"
          >
            چت
          </span>
          <span v-else> چت با فروشنده </span>

          <i class="fas fa-comment-alt"></i>
        </button>
        {{-- <button
          v-else-if="!currentUser.user_info"
          @click.prevent="loginModal(true)"
          :class="{
            'send-message-button': product.user_info.has_phone,
            'green-button': !product.user_info.has_phone,
          }"
        >
          <span v-if="product.user_info.has_phone"> چت </span>
          <span v-else> چت با فروشنده </span>
          <i class="fas fa-comment-alt"></i>
        </button> --}}
        <button
          v-if="
            !isMyProfile &&
            currentUser.user_info &&
            product.user_info.has_phone &&
            currentUser.user_info.is_buyer
          "
          @click.prevent="activePhoneCall(true)"
          class="green-button"
          :class="{ disable: isActivePhone }"
          :disabled="isActivePhone"
        >
          اطلاعات تماس
          <i class="fas fa-phone-square-alt" v-if="!getPhoneLoader"></i>
         
        </button>
        {{-- <button
          v-else-if="!currentUser.user_info && product.user_info.has_phone"
          @click.prevent="loginModal(false)"
          class="green-button"
          :class="{ disable: isActivePhone }"
          :disabled="isActivePhone"
        >
          اطلاعات تماس
          <i class="fas fa-phone-square-alt" v-if="!getPhoneLoader"></i>
        
        </button> --}}
      </div>
      
    </main>
  </div>