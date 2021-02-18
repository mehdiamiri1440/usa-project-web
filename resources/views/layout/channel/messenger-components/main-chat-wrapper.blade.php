<div class="main-chat-header">
    <div class="chat-user-image">
        <img src="{{asset('assets/img/user-defult.png')}}" alt="" />
    </div>
    <p>کانال رسمی باسکول</p>
</div>

<div class="main-chat">
    <div class="main-chat-bg-wrapper"></div>
    <ul>
        <!-- <li>
            <div class="list-item">
            <div  class="message-item-wrapper ">
                <div  class="message-content-wrapper">
                    <span >{{$content->text}}</span> 
                   
                </div>
                <div  class="message-chat-date">
                    <span >23:29</span>
                    
                </div>
                <a href class="forward-item">
                    <i class="fa fa-share"> </i>
                </a>
            </div>
        </div>
        </li>
        <li>
            <div class="list-item">
            <div  class="message-item-wrapper ">
                <div  class="message-content-wrapper">
                    <span >سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟</span> 
                   
                </div>
                <div  class="message-chat-date">
                    <span >23:29</span>
                    <span>580k <i class="fa fa-eye"></i></span>
                </div>
                <a href class="forward-item">
                    <i class="fa fa-share"> </i>
                </a>
            </div>
        </div>
        </li>
        <li>
            <div class="list-date-item">
                <span >
                1399/07/26
              </span></div>
            <div class="list-item">
                <div  class="message-item-wrapper ">
                    <div  class="message-content-wrapper">
                        <span >سلام قیمت چند ؟</span> 
                    
                    </div>
                    <div  class="message-chat-date">
                        <span >23:29</span>
                        <span>580k <i class="fa fa-eye"></i></span>
                    </div>
                    <a href class="forward-item">
                        <i class="fa fa-share"> </i>
                    </a>
                </div>
            </div>
        </li> -->
        @if($content->is_sharable)
        <li>
            <div class="list-item">
            <div  class="message-item-wrapper ">
                @if($content->file_path)
                    <div class="message-image">
                        <img src="{{asset('storage/' . $content->file_path)}}" alt="{{$content->title}}">
                    </div>
                @endif
                @if($content->text)
                    <div  class="message-content-wrapper">
                        <span >{{$content->text}}</span> 
                    </div>
                    <div  class="message-chat-date">
                        <span >{{$content->created_at}}</span>
                        <!-- <span>580k <i class="fa fa-eye"></i></span> -->
                    </div>
                @endif
                <a href="{{'/public-channel/'. $content->id}}" class="forward-item">
                    <i class="fa fa-share"> </i>
                </a>
            </div>
            <button class="share-button">
                اشتراک لینک <i class="fa fa-share"></i>
            </button>
        </div>
        </li>
       @endif
        <!-- <li>
            <div class="list-item">
                <div  class="message-item-wrapper ">
                    <div  class="message-content-wrapper">
                        <span >سلام قیمت چند ؟</span> 
                    
                    </div>
                    <div  class="message-chat-date">
                        <span >23:29</span>
                        <span>580k <i class="fa fa-eye"></i></span>
                    </div>
                    <a href class="forward-item">
                        <i class="fa fa-share"> </i>
                    </a>
                </div>
               
            </div>
        </li>
        <li>
            <div class="list-item">
            <div  class="message-item-wrapper ">
                <div  class="message-content-wrapper">
                    <span >سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟</span> 
                   
                </div>
                <div  class="message-chat-date">
                    <span >23:29</span>
                    <span>580k <i class="fa fa-eye"></i></span>
                </div>
                <a href class="forward-item">
                    <i class="fa fa-share"> </i>
                </a>
            </div>
        </div>
        </li> 
        <li>
            <div class="list-date-item">
                <span >
                1399/07/26
              </span></div>
            <div class="list-item">
                <div  class="message-item-wrapper product-wrapper">
                    <div  class="product-content-wrapper">
                        <div class="product-picture">
                            <img src="{{asset('assets/img/buyer.jpg')}}" alt=""> 
                        </div>
                        <p class="product-title">
                            <span>
                                میوه | خرما
                            </span>
                            {{$content->text}}
                        </p>
                        <p class="product-amount">
                            <i class="fas fa-box-open"></i>
                            موجودی : 
                            <span>
                                500 تن </span>
                        </p>
                    </div>
                    <div  class="message-chat-date">
                        <span >23:29</span>
                        <span>580k <i class="fa fa-eye"></i></span>
                    </div>
                    <a href class="forward-item">
                        <i class="fa fa-share"> </i>
                    </a>
                </div>
                <button class="share-button">
                    اشتراک لینک <i class="fa fa-share"></i>
                </button>
            </div>
        </li>
        
        <li>
            <div class="list-item">
                <div  class="message-item-wrapper ">
                    <div  class="message-content-wrapper">
                        <span >سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟</span> 
                    
                    </div>
                    <div  class="message-chat-date">
                        <span >23:29</span>
                        <span>580k <i class="fa fa-eye"></i></span>
                    </div>
                    <a href class="forward-item">
                        <i class="fa fa-share"> </i>
                    </a>
                </div>
            </div>
        </li>
        <li>
            <div class="list-item">
                <div  class="message-item-wrapper ">
                    <div  class="message-content-wrapper">
                        <span >سلام قیمت چند ؟</span> 
                    
                    </div>
                    <div  class="message-chat-date">
                        <span >23:29</span>
                        <span>580k <i class="fa fa-eye"></i></span>
                    </div>
                    <a href class="forward-item">
                        <i class="fa fa-share"> </i>
                    </a>
                </div>
                <button class="share-button">
                    اشتراک لینک <i class="fa fa-share"></i>
                </button>
            </div>
            
        </li>
        <li>
            <div class="list-item">
                <div  class="message-item-wrapper ">
                    <div  class="message-content-wrapper">
                        <span >سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟سلام قیمت چند ؟</span> 
                    
                    </div>
                    <div  class="message-chat-date">
                        <span >23:29</span>
                        <span>580k <i class="fa fa-eye"></i></span>
                    </div>
                    <a href class="forward-item">
                        <i class="fa fa-share"> </i>
                    </a>
                </div>
            </div>
        </li> -->
   
    </ul>
</div>