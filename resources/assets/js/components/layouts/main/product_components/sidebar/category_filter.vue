<style scoped>

    hr {
        margin-bottom: 0;
    }

    .content-sidebar h4 {
        padding: 0 15px;
    }

    .category-products-widget > ul > li {
        border-bottom: 1px solid #eee;

        padding-top: 12px;
    }

    .category-products-widget > ul > li:last-of-type {
        border-bottom: none;

    }

    .content-sidebar {
        text-align: right;
    }

    .content-sidebar .green-button {
        min-width: 130px;
        font-size: 13px;
        padding: 6px 0;
        margin: 0;
    }

    .content-sidebar .button-wrapper {
        text-align: center;
    }

    .content-sidebar h4 a {
        font-size: 17px;
        color: #333;
        font-weight: 700;
        margin: 5px;
    }

    .content-sidebar h4 i {
        font-weight: 700;
        position: relative;
        top: 2px;
    }

    .category-products-widget i {
        transition: 300ms;
    }

    .sub-category-product {
        padding: 0 15px;
    }

    .sub-category-product {
        padding-right: 37px;
        padding-top: 5px;
    }

    .sub-category-product a {
        color: #777777;
        transition: 300ms;
    }

    .content-sidebar h4 a:hover, .sub-category-product a:hover {
        color: #28a745;
        transition: 300ms;
    }
     .sub-category-product a.active {
        color: #28a745;

    }
    .list-open .button-toggle i {
        transform: rotate(180deg);
        transition: 300ms;
    }

    .list-open h4 i {
        transform: rotate(-90deg);
    }

    .green-button {
        background: #f0f3f6;
        transition: 300ms;
        border-radius: 0;
        color: #534d4d !important;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
    }

    .sub-category-product {
        transition: 300ms;
        overflow: hidden;
    }

    .little {
        display: block;
        height: 68px;
        transition: 300ms;

    }

    .header-item-default{
        margin:15px 0;
        padding: 15px;
    }
</style>
<template>
      <div v-if="categoryList" class="content-sidebar">
          <div class="title-widget">
              <h3>دسته بندی محصولات </h3>
              <hr>
          </div>
          <div  class="category-products-widget">
              <ul>
                  <li v-for="(category, index) in categoryList" :key="category.id"
                      :class="'collapse-category-' + category.id">
                      <h4>
                          <a
                                  :class="'collapse-button-' + category.id"
                                  href="#"
                                  @click.prevent="collapseMethod(category.id,index)"

                          >

                              <i class="fa fa-angle-left"></i>

                              <span v-text="category.category_name"></span>

                          </a>
                      </h4>

                      <ul class=" sub-category-product little">

                          <li class="sub-category-item " v-for="subCategory in category.subcategories">
                              <a       :class="{'active' : $route.params.categoryName === subCategory.category_name}"
                                      :href="'/product-list/category/' + subCategory.category_name"
                                      v-text="subCategory.category_name">
                              </a>
                          </li>

                      </ul>

                      <div class="button-wrapper">

                          <button class="green-button button-toggle"
                                  @click.prevent="collapseMethod(category.id,index)">

                              <span>مشاهده بیشتر </span>

                              <i class="fa fa-angle-down"></i>

                          </button>

                      </div>
                  </li>

              </ul>

          </div>
      </div>

    <div v-else class=" default-content content-sidebar">
        <div class="title-widget">
            <span class="placeholder-content  content-half-width"></span>
            <hr>
        </div>

        <div class="category-products-widget-default">
            <ul>
                <li>
                    <span class="placeholder-content default-boxing-size content-full-width ">
                    </span>
                    <span class="placeholder-content default-boxing-size content-full-width ">
                    </span>
                    <span class="placeholder-content default-boxing-size content-full-width ">
                    </span>

                </li>

            </ul>

        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                categoryList: '',
            }
        },
        methods: {
            init: function () {
                var self = this;
                var categoryParameterName = self.$route.params.categoryName;
                axios.post('/get_category_list', {
                    cascade_list: true
                })
                    .then(function (response) {
                        self.categoryList = response.data.categories;
                       setTimeout(function(){
                         for (var i = 0 ; i < self.categoryList.length ; i++) {
                                for (var j = 0 ; j < self.categoryList[i].subcategories.length; j++) {
                                     if (self.categoryList[i].subcategories[j].category_name === 
                                        categoryParameterName) {

                                        self.collapseMethod(self.categoryList[i].id , i);

                                     }
                                }
                            
                            }
                       })
                    },500);
            },
            collapseMethod: function (id, index) {
                var wrapperlistElemetn = $(' aside .collapse-category-' + id);
                var listElemetn = $('aside .collapse-category-' + id + ' .sub-category-product');
                var buttonElemetn = $('aside .collapse-category-' + id + ' button span');
                var initialHeight = this.categoryList[index].subcategories.length * 22;


                if (listElemetn.hasClass('little')) {

                    listElemetn.css('height', initialHeight + 'px');
                    listElemetn.removeClass('little', 2000);

                } else {
                    listElemetn.css('height', '68px');
                    listElemetn.addClass('little', 2000);

                }
                wrapperlistElemetn.toggleClass("list-open", 2000);
                buttonElemetn.text(function (i, v) {
                    return v === 'بستن' ? 'مشاهده بیشتر' : 'بستن'
                });

                var wrapperlistElemetnMobile = $(' #searchFilter .collapse-category-' + id);
                var listElemetnMobile = $('#searchFilter .collapse-category-' + id + ' .sub-category-product');
                var buttonElemetnMobile = $('#searchFilter .collapse-category-' + id + ' button span');


                if (listElemetnMobile.hasClass('little')) {

                    listElemetnMobile.css('height', initialHeight + 'px');
                    listElemetnMobile.removeClass('little', 2000);
                } else {
                    listElemetnMobile.css('height', '68px');
                    listElemetnMobile.addClass('little', 2000);
                    console.log(listElemetnMobile.hasClass('little'));
                }
                wrapperlistElemetnMobile.toggleClass("list-open", 1000);
                buttonElemetnMobile.text(function (i, v) {
                    return v === 'بستن' ? 'مشاهده بیشتر' : 'بستن'
                });

                this.$parent.scrollSet();
            }
        },
        mounted() {
            this.init();
        }

    }
</script>
