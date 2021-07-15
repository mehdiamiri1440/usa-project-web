<div v-if="categoryList" class="content-sidebar">
    <div class="title-widget">
      <div>دسته بندی محصولات</div>
      
    </div>
    <hr />
    <div class="category-products-widget">
      <ul>
        <li v-if="selectedCategory">
          <a
            href="{{'/product-list'}}"
            class="category-title back-item"
          >
            <span>
              <i class="fa fa-arrow-right"></i>
              همه دسته ها
            </span>
          </a>
        </li>
        @foreach ($categories as $category)
        <li
        >
          <a
            href="{{'/product-list/category/' . str_replace(' ','-',$category->category_name)}}"
            class="default-category-title category-title"
          >
            <span > {{$category->category_name}}</span>
            <i class="fa fa-angle-left"></i>
          </a>
          <ul class="sub-category-list">
            @foreach ($category->subcategories as $sub_category)
            <li
          >
            <a
              href="{{'/product-list/category/' . str_replace(' ','-',$sub_category->category_name)}}"
              class="category-title"
            >
            <span > {{$sub_category->category_name}}</span>
            </a>


             <ul class="categories-list">
              @foreach ($sub_category->subcategories as $item)
              <li
            >
              <a
              href="{{'/product-list/category/' . str_replace(' ','-',$item->category_name)}}"
              >
                {{$item->category_name}}
              </a>
            </li>
              @endforeach
              
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