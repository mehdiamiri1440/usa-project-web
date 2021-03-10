<div v-if="categoryList" class="content-sidebar">
    <div class="title-widget">
      <div>دسته بندی محصولات</div>
      <hr />
    </div>

    <div class="category-products-widget">
      <ul>
        @foreach ($categories as $category)

          <li
          class="collapse-category-1"
        >
          <h2>
            <a
              class="'collapse-button-1"
              href="#"
              onclick="collapseMethod()"

            >
              <i class="fa fa-angle-left"></i>

              <span >
                {{$category->category_name}}
              </span>
            </a>
          </h2>

          <ul class="sub-category-product ">
            @foreach ($category->subcategories as $sub_category)
              <li class="sub-category-item">
                <h4>
                  <a
                    class="active"
                    data-dismiss="modal"
                  >
                  {{$sub_category->category_name}}
                </a>
                </h4>
              </li>
            @endforeach 

          </ul>

          <div class="button-wrapper">
            <button
              class="green-button button-toggle"
              
            >
              <span>مشاهده بیشتر</span>

              <i class="fa fa-angle-down"></i>
            </button>
          </div>
        </li>
        @endforeach
      </ul>
    </div>
  </div>

  </div>