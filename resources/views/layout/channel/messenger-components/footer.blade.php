

<script>
  function getBase(){
      let base = {!! json_encode(url('/')) !!}
      return base + '/';
  }

  function isDeviceMobile () {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function activeShareModal(contentId) {
        $('#share-modal').modal('show');
  }
  
  function shareButtonClick(){
    $('.forward-link').on('click',()=>{
      generateForwardLink();
    });
  }
  function getAndroidVersion(ua) {
    ua = (ua || navigator.userAgent).toLowerCase();
    var match = ua.match(/android\s([0-9\.]*)/);
    return match ? match[1] : undefined;
  }
  function isOsIOS () {
    var userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari/.test(userAgent),
      ios = /iphone|ipod|ipad/.test(userAgent);
    return ios;
  }

  function generateLinkUrl(){
    let baseUrl = getBase();
    let contentId = getContentId();
    let shareModalUrl = baseUrl + "public-channel/" + contentId;
    return shareModalUrl;
  }
  
  function activeUserVerified(){
    $(".verified-user")
          .popover({ trigger: "manual", html: true, animation: false })
          .on("mouseenter", function () {
            var _this = this;
            $(this).popover("show");
            $(".popover").on("mouseleave", function () {
              $(_this).popover("hide");
            });
          })
          .on("mouseleave", function () {
            var _this = this;
            setTimeout(function () {
              if (!$(".popover:hover").length) {
                $(_this).popover("hide");
              }
            }, 300);
          });
  }

  function activeImagePopup(){
    $('.image-popup-no-margins').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });
  }

  function shareLink(social) {
    let url = "";
    let shareModalUrl = generateLinkUrl();
     shareModalUrl = encodeURIComponent(shareModalUrl);
    let linkElement = document.createElement("a");

    switch (social) {
      case 0:
        url = "https://wa.me/?text=" + shareModalUrl;
        linkElement.setAttribute("data-action", "share/whatsapp/share");
        break;
      case 1:
        url =
          "https://t.me/share/url?url=" +
          shareModalUrl;
        break;
      case 2:
        url =
          "https://www.linkedin.com/shareArticle?mini=true&url=" +
          shareModalUrl +
          "&title=باسکول&source=LinkedIn";
        break;
        case 3:
          url = "mailto:?body=" + shareModalUrl;
          break;
    }

    linkElement.setAttribute("href", url);
    linkElement.setAttribute("target", "_blank");

    document.body.appendChild(linkElement);

    linkElement.click();

    document.body.removeChild(linkElement);
  }

  function generateForwardLink(){
    let contentId = getContentId();
    if (isDeviceMobile()) {
    
      var linkElement = document.createElement("a");
      var Message = generateLinkUrl();
      var messageToWhatsApp = encodeURIComponent(Message);
      var url = "whatsapp://send?text=" + messageToWhatsApp;

      linkElement.setAttribute("href", url);
      linkElement.setAttribute("data-action", "share/whatsapp/share");

      document.body.appendChild(linkElement);

      linkElement.click();

      document.body.removeChild(linkElement);
    } else {
      activeShareModal(contentId);
    }
  }

  function copyLink() {
    let inputWrapper = $("#share-modal");
    let shareModalUrl = generateLinkUrl();
    inputWrapper.append(
      '<input id="copy-url-to-share" style=" opacity: 0 !important; width: 0 !important; height: 0 !important; position: fixed !important;" type="text" value="' +
        shareModalUrl +
        '" />'
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
  }
  function activateDownloadAppButton() {
    let self = this;
    if (isDeviceMobile() && !isOsIOS()) {
      let androidVersion = getAndroidVersion();
      if (parseInt(androidVersion) >= 5) {
        $('#download-app').css('display','block');
      }
    }
  }
  

  $(document).ready(function(){
    $('#copy-link-url').text(generateLinkUrl());
    activateDownloadAppButton();
    shareButtonClick();
    activeUserVerified();
    activeImagePopup();
        
  })

  function getContentId(){
    let contentId = <?php echo $content->id; ?>;
    return contentId;
  }

</script>
</body>

</html>