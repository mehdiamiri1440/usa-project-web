<!DOCTYPE html>
<html lang="fa">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="keywords" content="محصولات کشاورز ی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,باسکول">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <meta property="og:title" content="{{$content->title}}" />
    <meta property="og:description" content="{{$content->text}}" />
    @if($content->file_path)
    <meta property="og:image" content="{{asset('/storage/' . $content->file_path)}}" />
    @else
    <meta property="og:image" content="{{asset('assets/img/logo/mobile-logo.svg')}}" />
    @endif
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
    
    <meta name="csrf-token" content="{{csrf_token()}}">

    <link rel="icon" href="{{asset('assets/img/logo/mobile-logo.svg')}}">

    <title>{{$content->title}}</title>

    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{asset('index/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/channel/styles.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/channel/share-popup-styles.css')}}">

    <!-- Font Awesome css -->
    <link rel="stylesheet" href="{{asset('index/css/all.css')}}">

    <!-- Main css -->
    <script src="{{asset('index/js/jquery.js')}}"></script>
    <script src="{{asset('index/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('index/js/jquery.magnific-popup.min.js')}}"></script>


</head>
<body >
    <div class="container">
        <div id="snackbar" class="text-rtl">کپی شد.</div>
    
        <div
          id="share-modal"
          class="share-modal modal fade"
          tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <a href class="close-modal"  data-dismiss="modal" aria-label="Close">
                  <i class="fa fa-times"></i>
                </a>
    
                <div class="modal-title">
                  <span> ارسال برای دوستان </span>
                </div>
              </div>
              <div class="modal-body col-xs-12">
                <div class="share-dialog">
                  <div class="targets">
                    <a class="button" onclick="shareLink(1)">
                      <svg
                        width="24px"
                        height="24px"
                        version="1.1"
                        id="facebook"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xml:space="preserve"
                        xmlns:serif="http://www.serif.com/"
                        style="
                          fill-rule: evenodd;
                          clip-rule: evenodd;
                          stroke-linejoin: round;
                          stroke-miterlimit: 1.41421;
                        "
                      >
                        <path
                          id="telegram-4"
                          fill="#00A4E4"
                          d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"
                        />
                      </svg>
                      <span>تلگرام</span>
                    </a>
    
                    <a class="button" onclick="shareLink(0)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="iconmonstr-whatsapp-4"
                          d="M12.031,6.172a5.777,5.777,0,0,0-4.749,9.053L6.7,17.353l2.182-.573A5.773,5.773,0,0,0,17.8,11.943,5.764,5.764,0,0,0,12.031,6.172Zm3.392,8.244a1.784,1.784,0,0,1-1.17.824,2.371,2.371,0,0,1-1.092-.069,10.063,10.063,0,0,1-.988-.365,7.735,7.735,0,0,1-2.961-2.617A3.37,3.37,0,0,1,8.5,10.4,1.943,1.943,0,0,1,9.111,8.95a.638.638,0,0,1,.462-.217l.332.006c.106.005.249-.04.39.3s.491,1.2.534,1.287a.32.32,0,0,1,.014.3,1.2,1.2,0,0,1-.173.289l-.26.3c-.087.086-.177.18-.076.354a5.223,5.223,0,0,0,.964,1.2,4.7,4.7,0,0,0,1.394.86c.173.086.274.072.376-.043s.433-.506.549-.68.231-.145.39-.087,1.011.477,1.184.564.289.13.332.2a1.423,1.423,0,0,1-.1.824ZM12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm.029,18.88a6.944,6.944,0,0,1-3.318-.844L5.034,19l.984-3.6a6.937,6.937,0,1,1,6.011,3.475Z"
                          fill="#25d366"
                        />
                      </svg>
    
                      <span>واتس آپ</span>
                    </a>
    
                    {{-- <a class="button" onclick="shareLink(2)">
                      <svg>
                        <use href="#linkedin"></use>
                      </svg>
                      <span>لینک دین</span>
                    </a> --}}
    
                    <a class="button" onclick="shareLink(3)">
                      <svg>
                        <use href="#email"></use>
                      </svg>
                      <span>ایمیل</span>
                    </a>
                  </div>
                  <div class="link">
                    <div id="copy-link-url" class="pen-url" ></div>
                    <button class="copy-link" onclick="copyLink()">
                      کپی لینک
                    </button>
                  </div>
                </div>
    
                <svg class="hidden">
                  <defs>
                    <!-- <symbol
                      
                      viewBox="0 0 24 24"
                      fill="#3b5998"
                      stroke="#3b5998"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-facebook"
                    >
                      
                    </symbol> -->
    
                    <symbol
                      id="twitter"
                      viewBox="0 0 24 24"
                      fill="#1da1f2"
                      stroke="#1da1f2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-twitter"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                      ></path>
                    </symbol>
    
                    <symbol
                      id="email"
                      viewBox="0 0 24 24"
                      fill="#777"
                      stroke="#fafafa"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-mail"
                    >
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      ></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </symbol>
    
                    <symbol
                      id="linkedin"
                      viewBox="0 0 24 24"
                      fill="#0077B5"
                      stroke="#0077B5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-linkedin"
                    >
                      <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                      ></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </symbol>
    
                    <symbol
                      id="close"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-x-square"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                    </symbol>
                  </defs>
                </svg>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      </div>
 
    

