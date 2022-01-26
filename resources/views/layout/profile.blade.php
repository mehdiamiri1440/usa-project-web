@include('layout.header.header-profile-meta')
<link rel="stylesheet" href="{{asset('assets/css/header-styles.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/profile/styles.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/footer-styles.css')}}">

@include('layout.header.header')

<header class="hidden-xs profile-header main-header">
      <div class="title-page col-xs-12">پروفایل</div>
    </header>

    <main id="main" class="container">
      <section
        class="main-content"
        itemscope
        itemprop="Person"
        itemtype="http://schema.org/Person"
      >
        <div class="profile-main-content-item">
        @include('layout.profile-components.user-info')


        </div>
      </section>
    </main>

@include('layout.footer.footer')
