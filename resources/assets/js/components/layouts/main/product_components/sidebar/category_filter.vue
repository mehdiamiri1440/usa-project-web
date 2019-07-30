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

    .default-content .title-widget span,.header-item-default {
        height: 20px;
        display: block;
        overflow: hidden;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;

    }
    .header-item-default{
        margin:15px 0;
        padding: 15px;
    }
    .category-products-widget-default{
        padding: 15px;
    }
    .default {
        background: linear-gradient(72deg, #dddddd, #dddddd, #f0f3f6, #dddddd, #dddddd);
        background-size: 1000% 1000%;

        -webkit-animation: AnimationBackgroundGradient 3s ease infinite;
        -moz-animation: AnimationBackgroundGradient 3s ease infinite;
        -o-animation: AnimationBackgroundGradient 3s ease infinite;
        animation: AnimationBackgroundGradient 3s ease infinite;
    }

    @-webkit-keyframes AnimationBackgroundGradient {
        0% {
            background-position: 0 69%
        }
        50% {
            background-position: 100% 32%
        }
        100% {
            background-position: 0 69%
        }
    }

    @-moz-keyframes AnimationBackgroundGradient {
        0% {
            background-position: 0 69%
        }
        50% {
            background-position: 100% 32%
        }
        100% {
            background-position: 0 69%
        }
    }

    @-o-keyframes AnimationBackgroundGradient {
        0% {
            background-position: 0 69%
        }
        50% {
            background-position: 100% 32%
        }
        100% {
            background-position: 0 69%
        }
    }

    @keyframes AnimationBackgroundGradient {
        0% {
            background-position: 0 69%
        }
        50% {
            background-position: 100% 32%
        }
        100% {
            background-position: 0 69%
        }
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
                              <a
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
            <span class="default"></span>
            <hr>
        </div>
        <div class="category-products-widget-default">
            <ul>
                <li>
                    <span class="default header-item-default ">
                    </span>
                    <span class="default header-item-default ">
                    </span>
                    <span class="default header-item-default ">
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

                axios.post('/get_category_list', {
                    cascade_list: true
                })
                    .then(function (response) {
                        self.categoryList = response.data.categories;

                    });
            },
            collapseMethod: function (id, index) {
                var wrapperlistElemetn = $(' aside .collapse-category-' + id);
                var listElemetn = $('aside .collapse-category-' + id + ' .sub-category-product');
                var buttonElemetn = $('aside .collapse-category-' + id + ' button span');
                var initialHeight = this.categoryList[index].subcategories.length * 22;


                console.log(listElemetn.hasClass('little'));
                if (listElemetn.hasClass('little')) {

                    listElemetn.css('height', initialHeight + 'px');
                    listElemetn.removeClass('little', 2000);
                    console.log(listElemetn.hasClass('little'));
                } else {
                    listElemetn.css('height', '68px');
                    listElemetn.addClass('little', 2000);
                    console.log(listElemetn.hasClass('little'));
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
                    console.log(listElemetnMobile.hasClass('little'));
                } else {
                    listElemetnMobile.css('height', '68px');
                    listElemetnMobile.addClass('little', 2000);
                    console.log(listElemetnMobile.hasClass('little'));
                }
                wrapperlistElemetnMobile.toggleClass("list-open", 1000)
                buttonElemetnMobile.text(function (i, v) {
                    return v === 'بستن' ? 'مشاهده بیشتر' : 'بستن'
                });
            }
        },
        mounted() {
            this.init();
        }

    }
</script>
