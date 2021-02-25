<div class="contact-list">
    <h1 class="contact-list-header hidden-xs hidden-sm">
        {{$content->title}}
    </h1>
    <div class="contact-list-main">
        <ul class="contact-list">
            <li class="contact-item">
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
            <li class="item-action">
                <p>
                    به جمع چندین هزار نفری فعالان صنعت عمده غذایی کشور بپیوندید.
                </p>
                <a href="/register" class="active">
                    ثبت نام در باسکول
                </a>
            </li>
        </ul>
    </div>
</div>