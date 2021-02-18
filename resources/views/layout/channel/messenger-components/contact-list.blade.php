<div class="contact-list">
    <h1 class="contact-list-header">
        {{$content->title}}
    </h1>
    <div class="contact-list-main">
        <ul class="contact-list">
            <li>
                <button class="active">
                    <div class="user-image-list">
                        <img src="{{asset('assets/img/logo/512-buskool-logo.jpg')}}" alt="buskool">
                    </div>
                    <div class="content-wrapper">
                        <span class="user-name">
                        کانال رسمی باسکول
                        <a
                        class="verified-user"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="bottom"
                        data-content="<div class='tooltip-wrapper text-rtl'>اطلاعات هویتی این کاربر احراز شده است.<br/><a href='/verification'>اطلاعات بیشتر</a> </div>"
                        title
                        >
                            <i class="fa fa-certificate"></i>
                        </a>
                        </span>
                        <p class="new-message-count">
                            <i class="fa fa-bullhorn"> </i>
                        </p>
                    </div>
                </button>
            </li>
        </ul>
    </div>
</div>