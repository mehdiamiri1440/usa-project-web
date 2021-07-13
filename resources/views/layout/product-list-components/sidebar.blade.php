<div v-if="categoryList" class="content-sidebar">
    <div class="title-widget">
      <div>دسته بندی محصولات</div>
      <hr />
    </div>

    <div class="category-products-widget">
      <ul>
        <li v-if="selectedCategory">
          <button
            class="category-title back-item"
          >
            <span>
              <i class="fa fa-arrow-right"></i>
              همه دسته ها
            </span>
          </button>
        </li>
        @foreach ($categories as $category)
        <li
        >
          <button

            class="default-category-title category-title"
          >
            <span > {{$category->category_name}}</span>
            <i class="fa fa-angle-left"></i>
          </button>
          <ul class="sub-category-list">
            @foreach ($category->subcategories as $sub_category)
            <li
          >
            <button
              class="category-title"
            >
            <span > {{$sub_category->category_name}}</span>
            </button>

            @php
                var_dump($sub_category);
            @endphp

            {{-- <ul class="categories-list">
              @foreach ($sub_category->subcategories as $item)
              <li
            >
              <a
              href="{{'/product-list/category/' . str_replace(' ','-',$item->category_name)}}"
              >
                {{$item->category_name}}
              </a>
            </li>
              @endforeach--}}
              
            </ul> 
          </li>
            @endforeach
                
            
          </ul>
        </li>
        @endforeach
      </ul>
    </div>
  </div>

  </div>