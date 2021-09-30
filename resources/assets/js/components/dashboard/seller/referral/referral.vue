
<style scoped>
/*main style*/

.main-content {
  max-width: 685px;
  position: absolute;
  left: calc(50% - 342px);
  top: 45px;
  margin-bottom: 50px;
  height: 100%;
  direction: rtl;
}

.main-content > div.wrapper-section {
  border: 1px solid #dadce0;
  border-radius: 12px;
  min-height: 400px;
}

.main-content .section-title {
  font-size: 25px;
  margin-bottom: 30px;
}

.main-content div.section-title h2 {
  font-size: 25px;
  margin-bottom: 10px;
}

.main-content div.section-title p {
  font-size: 15px;
}

.invitation-image-wrapper {
  max-width: 350px;
  margin: 30px auto;
}

.content-wrapper {
  max-width: 580px;
  padding: 0 15px;
  margin: 0 auto;
}

.content-wrapper h1 {
  font-size: 23px;
  color: #555;
}

.content-wrapper > p {
  font-size: 15px;
  font-weight: 300;
  color: #555;
  margin: 20px auto;
  line-height: 1.618;
}

.referral-url-wrapper {
  background: #f0f0f0;
  border-radius: 12px;
  display: flex;
  direction: ltr;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  overflow: hidden;
}

.referral-url {
  font-size: 16px;
  font-weight: lighter;
  color: #555;
}

.copy-url {
  color: #fff;
  border: none;
  background: #556080;
  padding: 12px 20px;
}

.send-invitation {
  display: block;
  max-width: 330px;
  width: 100%;
  border: none;
  background: linear-gradient(45deg, #1da1f2, #3d7db2);
  box-shadow: 0 4px 0 #0966ad;
  border-radius: 12px;
  color: #fff;
  font-size: 20px;
  padding: 12px 15px;
  margin: 30px auto 100px;
}

@media screen and (max-width: 767px) {
  .main-section-wrapper {
    max-width: initial;
    margin: 0px auto;
  }

  .main-content .section-title p {
    line-height: 1.618;
  }

  .main-content > div.wrapper-section {
    border: none;
    border-radius: 0;
  }

  .main-content {
    max-width: initial;
    background: #fff;
    border-radius: 0;
    box-shadow: none;
    direction: rtl;
    transform: translate(0, 0);
    top: 0;
    padding-top: 20px;
    width: 100%;
    left: 0;
  }
  .invitation-image-wrapper {
    max-width: 270px;
    margin: 10px auto 30px;
  }
  .content-wrapper h1 {
    font-size: 19px;
  }
  .content-wrapper > p {
    font-size: 15px;
    margin: 10px auto 20px;
  }
  .referral-url {
    font-size: 13px;
  }
  .referral-url-wrapper {
    padding-left: 10px;
  }
  .copy-url {
    padding: 12px 10px;
  }
}
</style>


<template>
  <div>
    <section class="main-content col-xs-12">
      <h2 class="section-title hidden-xs">دعوت از همکاران</h2>
      <div class="row wrapper-section invitation-wrapper">
        <div class="invitation-image-wrapper">
          <img src="../../../../../img/referral.jpg" alt="referral" />
        </div>
        <div class="content-wrapper">
          <h1>دعوت از همکاران</h1>
          <p>
            با دعوت از همکاران خود به باسکول میتوانید کسب درآمد کنید. در صورتی
            که همکار دعوت شده به جمع باسکول بپیوندد بعد از خرید هر کدام از سرویس
            های غیر رایگان باسکول،
            <strong class="green-text"
              >نصف مبلغ خرید به کیف پول باسکول شما اضافه می شود.</strong
            >
            همین حالا دعوت نامه را ارسال کنید.
          </p>
          <div class="referral-url-wrapper">
            <p
              class="referral-url"
              v-text="baseUrl + 'invite/' + currentUser.user_info.user_name"
            ></p>
            <button class="copy-url" @click.prevent="copyLink()">
              کپی آدرس
            </button>
          </div>
          <button class="send-invitation" @click="openShareModal()">
            <i class="fa fa-share-alt"></i>
            ارسال دعوت نامه
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
export default {
  props: ["currentUser"],
  data: function () {
    return {
      baseUrl: "",
      shareText:
        "از شما دعوت می کنم تا به جمع بازرگانان در باسکول (بزرگترین مرجع خرید و فروش عمده محصولات غذایی و کشاورزی ایران) بپیوندید. اگر این دعوت را قبول می کنید روی لینک معرف زیر بزنید",
    };
  },
  methods: {
    getBaseUrl() {
      this.baseUrl = getBase();
    },
    openShareModal() {
      let url =
        this.baseUrl + "invite/" + this.$parent.currentUser.user_info.user_name;
      let shareItem = {
        shareModalUrl: url,
        shareModalText: this.shareText,
        shareModalTitle: "ارسال برای همکاران",
      };
      eventBus.$emit("shareModalUrl", shareItem);
    },
    copyLink() {
      let inputWrapper = $("#main");
      let url =
        this.baseUrl + "invite/" + this.$parent.currentUser.user_info.user_name;
      let text = url;
      if (this.shareText) {
        text = `${this.shareText}\n${url}`;
      }
      inputWrapper.append(
        `<textarea id="copy-url-to-share" style=" opacity: 0 !important; width: 0 !important; height: 0 !important; position: fixed !important;" type="text" >${text}</textarea>`
      );
      let input = $("#copy-url-to-share");
      // /* Select the text field */
      input.select();

      var result = document.execCommand("copy");
      input.remove();

      if (result) {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      }
    },
  },
  mounted() {
    this.getBaseUrl();
  },
};
</script>
