<style scoped>
/*start main content style */

.image-content-post img {
  border-radius: 3px;
  transition: 200ms;
  filter: grayscale(30%);
}

.image-content-post a:hover img {
  filter: grayscale(0);
  transition: 200ms;
}

.image-content-post i {
  display: none;
  position: absolute;
  top: 46%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 35px;
  color: #fff;
  z-index: 1;
}

.image-content-post a:hover i {
  display: block;
}

.main-content {
  direction: rtl;
  padding: 60px 100px;
}

.header-label {
  display: block;
  margin: 13px;
  padding: 0;
}
.content-label {
  font-weight: 400;
}

/*end main content style */
/*custom cods*/
.green-button {
  margin: 15px 0;
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  transition: 300ms;
}
.black-bot {
  margin: 15px 0;
  display: inline-block;
  background: #313a43;
  color: #fff;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  transition: 300ms;
}
.black-bot:hover {
  background: #283039;
  color: #fff;
  transition: 300ms;
}

.green-button:hover {
  color: #fff;
  background: #00ac5c;
  transition: 300ms;
}

.little_header {
  width: 80px;
}

.little-main-header {
  right: 80px;
}

.contents {
  border-radius: 3px;
  box-shadow: 0 0 10px #e1e1e1;
  padding: 15px;
  margin-top: 50px;
}
.user_image img {
  height: 100%;
}
.info-contents {
  padding: 0;
}
.image-article-content {
  padding-right: 0;
}
.main-article-content {
  padding-left: 0;
  margin-bottom: 25px;
}
.main-image {
  margin-bottom: 7px;
  padding: 0;
  height: 300px;
  overflow: hidden;
}
.image-article-content .owl-carousel {
  height: 120px;
  overflow: hidden;
}
.main-article-content a {
  font-size: 24px;
  margin-bottom: 20px;
  display: inline-block;
  color: #666;
}
.main-image img {
  border-radius: 3px;
}
.image_company {
  margin: 15px auto;
}
.top-contentas {
  padding: 0;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #ddd;
}
.bottom-contents {
  padding: 0;
  padding-top: 10px;
  margin-top: 10px;
}
.fields {
  margin: 7px auto;
  padding: 0;
}
.fields > div {
  float: right;
}
.fields div textarea {
  height: 110px;
  max-height: 110px;
  min-height: 110px;
  max-width: 100%;
  min-width: 100%;
}
.fields .green-button,
.fields .black-bot {
  width: 100%;
}

@media screen and (max-width: 991px) {
  .right-header.desktop-header {
    display: none;
  }
  .actions {
    direction: ltr;
    margin-top: 20px;
  }
  .right-header.mobile-header {
    display: block;
    right: -300px;
  }

  .main-header,
  .little-main-header {
    right: 0 !important;
  }

  #main,
  #main.little-main {
    margin-right: 0 !important;
  }

  .post-contents-table {
    width: 100%;
  }

  .copy-right {
    display: none;
  }

  .close_menu {
    display: none;
  }

  .close_menu_mob {
    display: block;
  }

  .show-header button {
    display: block;
  }

  .kind_user > div,
  .kind_activity > div {
    float: none;
  }

  .img-profile .submit {
    position: relative;
    width: 100%;
    margin: 25px auto;
  }

  .img-profile .submit label {
    width: 40%;
    padding: 12px 0;
  }

  .img-profile {
    float: none;
  }
}

.owl-carousel {
  direction: ltr !important;
}
@media screen and (max-width: 768px) {
  .image-content-post,
  .contents-post {
    width: 100%;
    float: none;
    margin: 10px 0;
    padding: 0;
  }

  .main-content {
    padding: 60px 15px;
  }

  .name-header-profile {
    display: none;
  }

  .profile-menu-header {
    padding: 7px;
    padding-left: 36px;
  }

  #bd-prev-end-date-id,
  #bd-prev-first-date-id {
    left: 0;
    bottom: inherit;
    top: -55px;
  }

  #bd-next-end-date-id,
  #bd-next-first-date-id {
    right: 0;
    bottom: inherit;
    top: -55px;
  }
  .imageuploadify-message {
    display: none !important;
  }
}

@media screen and (max-width: 555px) {
  .content-header {
    display: none;
  }
}

@media screen and (max-width: 345px) {
  .sub-header a {
    font-size: 10px;
  }

  .sub-header {
    bottom: -44px;
  }
}
</style>


<template>
  <div>
    <section class="main-content col-xs-12">
      <div class="contents col-xs-12">
        <div class="info-contents col-xs-12">
          <div class="top-contentas col-xs-12">
            <div class="main-article-content col-md-7">
              <h3>
                {{
                  buyAd.category_name +
                  " | " +
                  buyAd.subcategory_name +
                  (buyAd.name != null ? " | " + buyAd.name : "")
                }}
              </h3>
              <br />
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      قیمت واحد
                      <span class>(هر کیلو به تومان)</span> :
                    </td>
                    <td>
                      {{ buyAd.price != null ? buyAd.price + " تومان " : "-" }}
                    </td>
                  </tr>
                  <tr>
                    <td>محل تحویل کالا:</td>
                    <td>{{ buyAd.address }}</td>
                  </tr>
                  <tr>
                    <td>میزان نیازمندی</td>
                    <td>{{ buyAd.requirement_amount }} کیلوگرم</td>
                  </tr>
                  <tr>
                    <td>زمان ثبت درخواست:</td>
                    <td>{{ buyAd.register_date }}</td>
                  </tr>
                </tbody>
              </table>
              <p>
                توضیحات:
                <span>{{ buyAd.description }}</span>
              </p>
            </div>
            <div class="image-article-content col-md-5">
              <div class="main-image col-xs-12">
                <a
                  v-if="buyAd.photos[0] != null"
                  :href="str + '/' + buyAd.photos[0]"
                >
                  <img :src="str + '/' + buyAd.photos[0]" alt="photo" />
                </a>
                <a v-else href>
                  <img src="../../../../../img/product.jpg" />
                </a>
              </div>
              <div class="owl-carousel col-xs-12">
                <!--@foreach($buyAd->photos as $photo)-->
                <!--<a href="{{url('storage/'.$photo)}}"><img src="{{url('storage/'.$photo)}}" alt=""></a>-->
                <!--@endforeach-->
              </div>
            </div>
          </div>
          <div class="bottom-contents col-xs-12">
            <form>
              <label class="header-label"
                >تمامی موارد خواسته شده را وارد کرده و برای خریدار ارسال
                نمایید.</label
              >
              <div class="fields col-xs-12">
                <input type="hidden" :value="buyAd.id" ref="buyAdId" />
                <div class="col-xs-12 col-sm-6">
                  <label class="content-label">محل تحویل</label>
                  <input type="text" v-model="sellOffer.deliver_at" />
                  <span v-if="errors.deliver_at" class="text-danger">{{
                    errors.deliver_at[0]
                  }}</span>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <label class="content-label"
                    >قیمت پیشنهادی به ازای هر کیلو به تومان</label
                  >
                  <input type="text" v-model="sellOffer.price" />
                  <span v-if="errors.price" class="text-danger">{{
                    errors.price[0]
                  }}</span>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <label class="content-label">تاریخ موجودی</label>
                  <input
                    readonly="true"
                    type="text"
                    id="first-date-id"
                    ref="validDateFrom"
                  />
                  <span v-if="errors.valid_date_to" class="text-danger">{{
                    errors.valid_date_to[0]
                  }}</span>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <label class="content-label">انتهای تاریخ موجودی</label>
                  <input
                    readonly="true"
                    type="text"
                    id="end-date-id"
                    ref="validDateTo"
                  />
                  <span v-if="errors.valid_date_from" class="text-danger">{{
                    errors.valid_date_from[0]
                  }}</span>
                </div>
                <div class="col-xs-12">
                  <label class="content-label">توضیحات:</label>
                  <textarea
                    placeholder
                    v-model="sellOffer.description"
                  ></textarea>
                  <span v-if="errors.description" class="text-danger">{{
                    errors.description[0]
                  }}</span>
                </div>
                <div class="image_company col-xs-12">
                  <label class="content-label">تصاویر:</label>
                  <UploadFile
                    uploadName="sell_offer_files"
                    uploadAccept="image/*"
                    :uploadMinSize="1024"
                    :uploadSize="1024 * 1024 * 10"
                    :uploadMultiple="true"
                    :uploadDrop="true"
                    :uploadDropDirectory="true"
                    :uploadAddIndex="false"
                    :uploadThread="3"
                    :uploadOCompress="1024 * 1024"
                    :uploadUploadAuto="false"
                    :uploadRef="sellOfferFiles"
                  ></UploadFile>
                  <span v-if="errors.photos_count" class="text-danger">{{
                    errors.photos_count[0]
                  }}</span>
                </div>
                <div class="col-sm-6">
                  <button
                    type="button"
                    class="col-xs-12 green-button"
                    @click="submitSellOffer"
                  >
                    تایید
                  </button>
                </div>
                <div class="col-sm-6">
                  <!--<a href="{{route('seller-buyAd-requests')}}" class="black-bot col-xs-12 col-xs-6">بازگشت به صفحه قبل</a>-->
                  <a
                    href="javascript:history.back()"
                    class="black-bot col-xs-12 col-xs-6"
                    >بازگشت به صفحه قبل</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import UploadFile from "../../upload-image";
import imageuploadify from "../../../../scripts/imageuploadify.min";
import magnificPopup from "../../../../scripts/jquery.magnific-popup.min";

export default {
  components: {
    UploadFile,
  },
  props: ["str"],
  data: function () {
    return {
      currentUser: {
        profile: "",
        user_info: "",
      },
      sellOffer: {
        price: "",
        deliver_at: "",
        valid_date_from: "",
        valid_date_to: "",
        description: "",
        buy_ad_id: "",
      },
      sellOfferFields: ["price", "deliver_at", "description"],
      sellOfferFiles: [],
      errors: [],
      popUpMsg: "",
      submiting: false,
      buyAd: {
        photos: "",
      },
      buyAdId: this.$route.params.id,
      items: [
        {
          message: "درخواست من ",
          url: "buyAdRequestsDetail",
        },
      ],
    };
  },
  methods: {
    init: function () {
      var self = this;
      axios
        .post("/dashboard/buyAd-request-detail/" + this.buyAdId)
        .then(function (response) {
          self.buyAd = response.data.buyAd;
        });
    },
    submitSellOffer: function () {
      var self = this;

      eventBus.$emit("submitingEvent", true);

      var formData = this.getSellOfferFormFields();

      axios
        .post("/add_sell_offer", formData)
        .then(function (response) {
          if (response.status == 201) {
            self.popUpMsg = "پیشنهاد فروش شما ثبت شد.";
            eventBus.$emit("submitSuccess", self.popUpMsg);
            $("#custom-main-modal").modal("show");
            setTimeout(function () {
              window.location.href = "/dashboard/my-sell-offers";
              eventBus.$emit("submitingEvent", false);
            }, 3000);
          }
        })
        .catch(function (err) {
          self.errors = "";
          self.errors = err.response.data.errors;

          if (err.response.data.msg) {
            self.popUpMsg = err.response.data.msg;
            eventBus.$emit("submitSuccess", self.popUpMsg);
            $("#custom-main-modal").modal("show");
          }
          eventBus.$emit("submitingEvent", false);
        });
    },
    handleSellOfferFileUpload: function () {
      let uploadedFiles = this.$refs.sellOfferFiles.files;
      /*
                  Adds the uploaded file to the files array
                */
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.sellOfferFiles.push(uploadedFiles[i]);
      }
    },
    getSellOfferFormFields: function () {
      let formData = new FormData();
      let cnt = this.sellOfferFields.length;

      for (var i = 0; i < cnt; i++) {
        formData.append(
          this.sellOfferFields[i],
          this.toLatinNumbers(this.sellOffer[this.sellOfferFields[i]])
        );
      }

      formData.append(
        "valid_date_from",
        this.toLatinNumbers(this.$refs.validDateFrom.value)
      );
      formData.append(
        "valid_date_to",
        this.toLatinNumbers(this.$refs.validDateTo.value)
      );
      formData.append(
        "buy_ad_id",
        this.toLatinNumbers(this.$refs.buyAdId.value)
      );

      for (var i = 0; i < this.sellOfferFiles.length; i++) {
        let file = this.sellOfferFiles[i];
        formData.append("img_" + i, file);
      }
      formData.append("photos_count", this.sellOfferFiles.length);

      return formData;
    },
    toLatinNumbers: function (num) {
      var numDic = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
      };

      return num.toString().replace(/[۰-۹]/g, function (w) {
        return numDic[w];
      });
    },
  },
  mounted() {
    this.init();
    kamaDatepicker("first-date-id", {
      forceFarsiDigits: true,
      markHolidays: true,
      gotoToday: true,
      markToday: true,
    });
    kamaDatepicker("end-date-id", {
      forceFarsiDigits: true,
      markHolidays: true,
      gotoToday: true,
      markToday: true,
    });
    $(".main-image").magnificPopup({
      delegate: "a",
      type: "image",
    });
    $('input[type="file"]').imageuploadify();
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/buyAd-requests-detail" });
  },
};
</script>
