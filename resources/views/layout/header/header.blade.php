


</head>
<body >

 <!-- #regex main loader -->
 <div id="main-loader-wrapper" class="main-loader-wrapper">
   
    <div class="logo-main-loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="92.818"
        height="113.671"
        viewBox="0 0 92.818 113.671"
      >
        <g id="Group_23" data-name="Group 23" transform="translate(-273.1 -703.931)">
          <path
            id="Subtraction_1"
            data-name="Subtraction 1"
            d="M46.473,84.764A46.472,46.472,0,0,1,0,38.291,45.955,45.955,0,0,1,5.124,17.06,46.892,46.892,0,0,1,18.8.952l11.8,11.8A29.746,29.746,0,1,0,75.91,42.2l8.124-7.99,8.7,8.557a46.481,46.481,0,0,1-46.262,42ZM92.818,34.8l-.007-.007-8.777-8.661-8.065,7.957A29.849,29.849,0,0,0,60.905,11.907L72.812,0a46.252,46.252,0,0,1,20,34.786Z"
            transform="translate(273.1 732.838)"
            fill="#e51b35"
          />
          <g id="Group_24" data-name="Group 24" transform="translate(293.176 703.931)">
            <path
              id="Rectangle_12"
              data-name="Rectangle 12"
              d="M3,0H35.32a0,0,0,0,1,0,0V20.448a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
              transform="translate(14.459 9.201) rotate(45)"
              fill="#00c569"
            />
            <path
              id="Rectangle_13"
              data-name="Rectangle 13"
              d="M0,0H50.191a0,0,0,0,1,0,0V18.589a0,0,0,0,1,0,0H4a4,4,0,0,1-4-4V0A0,0,0,0,1,0,0Z"
              transform="translate(61.103 13.145) rotate(135)"
              fill="#00c569"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="main-loader-shape-wrapper">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>



    <nav class="navbar text-rtl">
      <div class="container-fluid buskool-main-nav">
        <div class="hidden-md hidden-sm hidden-lg mobile-menu-button">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#buskool-nav"
          >
            <i class="fa fa-bars"></i>
          </button>
        </div>

        <div class="buskool-logo navbar-header navbar-right">
          <a class="navbar-brand" href="/">
            <img
              src="{{asset('assets/img/logo/web-logo.svg')}}"
              alt="باسکول | بازارگاه آنلاین دنیای کشاورزی"
            />
          </a>
        </div>

        <div class="user-auth-info-wrapper navbar-nav">
          <ul  class="nav navbar-nav">
            <li class="hidden-xs">
              <a class="green-button" href="/register">
                <div class="item-icon register">
                  <i class="fa fa-user static-layout light-green-text"></i>
                </div>
                ورود / ثبت نام
              </a>
            </li>

            <li class="mobile-login-link hidden-sm hidden-md hidden-lg">
              <a class="green-button" href="/register">
                <i class="fa fa-user"></i>
                <span>ورود / ثبت نام</span>
              </a>
            </li>

            <li class="hidden-xs">
              <a
                class="green-button green-button-alt"
                href="/login"
              >
                <div class="item-icon">
                  <i class="fa fa-users"></i>
                </div>
                خریداران
              </a>
            </li>
            <li class="hidden-xs">
              <a
                class="green-button green-button-alt"
                href="/login"
              >
                <div class="item-icon">
                  <i class="fas fa-grip-horizontal"></i>
                </div>
                فروشندگان
              </a>
            </li>
          </ul>
        </div>

        <div class="collapse navbar-collapse navbar-right" id="buskool-nav">
          <div class="wrapper-nav">
            <div class="search-input hidden-xs">
              <button class="open-categories">
                <span> همه محصولات </span>
                <i class="fa fa-angle-down"></i>
              </button>
              <input
                type="text"
                placeholder="محصول مورد نظر خود را جستجو کنید"
                v-model="mainSearchBoxText"
              />

              <button class="hidden-xs" >
                <i class="fa fa-search"></i>
              </button>
            </div>

            <ul class="mobile-navigation hidden-lg hidden-sm hidden-md">
              <li>
                <a
                  class="smoothScroll"
                >
                  کشاورزی
                </a>
              </li>
              <li>
                <a
                  class="smoothScroll"
                >
                فرآورده های غذایی
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="search-input hidden-sm hidden-md hidden-lg">
        <input
          type="text"
          placeholder="محصول مورد نظر خود را جستجو کنید"
          v-model="mainSearchBoxText"
        />
        <button class="fa fa-search" ></button>

        <button class="hidden-xs" >
          <i class="fa fa-search"></i>
          <span class="hidden-sm"> جستجو </span>
        </button>
        <div
          v-if="
            $route.name == 'productList' || $route.name == 'productCategory'
          "
          class="hidden-sm hidden-md hidden-lg location-filter-wrapper"
        >
          <button >
            <span > همه ایران </span>
            <i class="fa fa-map-marker-alt"></i>
          </button>
        </div>
      </div>
      <div class="container-fluid buskool-sub-menu absolute-position hidden-xs">
        <ul class="nav navbar-right navbar-nav">
          <li class="smoothScroll">
            <a
              href="/"
            >
            کشاورزی
            </a>
          </li>
          <li class="smoothScroll">
            <a
              href="/"
            >
            فرآورده های غذایی
            </a>
          </li>
        </ul>
      </div>
    </nav>
