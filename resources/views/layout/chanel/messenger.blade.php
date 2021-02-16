@include('layout.chanel.messenger-components.header')
<div class="header-wrapper"></div>
<main class="container-fluid messenger-wrapper">
    <div class="container messenger">
       <div class="row h-100">
        <div class="hidden-xs hidden-sm  col-md-4 h-100">
            <div class="row h-100">
                @include('layout.chanel.messenger-components.contact-list')

            </div>
        </div>
        <div class="col-xs-12 h-100  col-md-8">
            <div class="row h-100">
                @include('layout.chanel.messenger-components.main-chat-wrapper')
            </div>
        </div>
       </div>
    </div>
</main>

@include('layout.chanel.messenger-components.footer')