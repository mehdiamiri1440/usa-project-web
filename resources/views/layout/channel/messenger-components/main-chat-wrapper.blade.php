<div a class="main-chat-header">
    <div class="chat-user-image">
        <a href="/">
            <img src="{{asset('assets/img/logo/512-buskool-logo.jpg')}}" alt="بازار باسکول">
        </a>
       
    </div>
    <p><a href="/">
        کانال رسمی باسکول </a>
        <a
        class="verified-user"
        data-container="body"
        data-toggle="popover"
        data-placement="bottom"
        data-content="<div class='tooltip-wrapper text-rtl'>اطلاعات هویتی این کاربر احراز شده است.<br/><a href='/verification'>اطلاعات بیشتر</a> </div>"
        title
        >
            <i class="fa fa-certificate"></i>
        </a></p>
        <h1 class="second-title hiiden-md hidden-lg">
            {{$content->title}}
        </h1>
</div>

<div class="main-chat">
    <div class="main-chat-bg-wrapper"></div>
    <ul>
      
        @if($content->is_sharable)
        <div class="list-date-item">
            <span >{{$content->created_at}}</span></div>
        <li>
            <div class="list-item">
            <div  class="message-item-wrapper ">
                @if($content->file_path)
                    <div class="message-image">
                        <a class="image-popup-no-margins" href="{{asset('storage/' . $content->file_path)}}">
                            <img src="{{asset('storage/' . $content->file_path)}}" alt="{{$content->title}}">
                        </a>
                    </div>
                @endif
                @if($content->text)
                    <div  class="message-content-wrapper"><span>{{$content->text}}</span></div>
                    <div  class="message-chat-date">
                        <span >{{$content->created_at}}</span>
                        <!-- <span>580k <i class="fa fa-eye"></i></span> -->
                    </div>
                @endif
                <button class="forward-item forward-link">
                    <i class="fa fa-share"> </i>
                </button>
            </div>
            <button class="share-button forward-link" >
                ارسال برای دوستان
                <i class="fa fa-share"></i>
            </button>
        </div>
        </li>
       @endif
       
   
    </ul>
    <a class="footer-button" href="https://play.google.com/store/apps/details?id=com.buskool" id="download-app" >
        دانلود اپلیکیشن باسکول
        <i class="fa fa-download"></i>
    </a>
    <a class="footer-button hidden-md hidden-lg" href="/" id="to-register" >
        مشاهده وب سایت باسکول
    </a>
</div>