<style scoped>

    .content-sidebar {
        background: #fff;

        direction: rtl;

        float: left;

        width: 100%;

        margin: 15px auto;

        border-radius: 5px;

        -webkit-box-shadow: 0 0 15px #dbdbdb;

        box-shadow: 0 0 15px #dbdbdb;

    }



    .content-sidebar hr{
        margin:15px auto;
    }

    .content-sidebar i {
        margin-left: 5px;
        font-size: 17px;
    }

    .sidebar-buttons div > a:first-of-type {
        color: #fff;
        background: #28a745;
    }

    .right-sidebar > div {
        background: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        display: block;
        margin: 15px auto;
        padding: 8px 15px;
        border-radius: 0 0 5px 5px;
    }


</style>

<template>
           <div class="sidebar-widget-wrapper">
               <CategoryFilter/>
               <GeoLocationFilter/>
           
           </div>
</template>

<script>

    import GeoLocationFilter from './geo_location_filter'
    import CategoryFilter from './category_filter'

    export default {
        components:{
            GeoLocationFilter,
            CategoryFilter
        },
        props:[
            'productsInfo',
            'categoryId',
            'subCategoryId',
            'provinceId',
            'cityId',
        ],
        data(){
            return{
                provinceIdChild :'',
                cityIdChild :'',
                categoryList: '',
                subCategoryList: '',
                provinceList: '',
                cityList: '',
                products: this.productsInfo,
            }
        },
        methods:{
            scrull_css_header: function () {
                var get_with = $(window).width();
                var mainElement = $("#main");

                if (get_with > 751) {

                    mainElement.removeClass("main-padding-fix");

                }
                $(window).resize(function () {
                    get_with = $(window).width();
                    if (get_with > 751) {

                        mainElement.removeClass("main-padding-fix");
                    }
                });
                $(window).scroll(function () {
                    var sc = $(this).scrollTop();
                    $(window).resize(function () {
                        get_with = $(window).width();
                        if (get_with > 751) {

                            mainElement.removeClass("main-padding-fix");
                        }
                    });
                    if (sc >= 106) {
                        if (get_with > 751) {

                            mainElement.addClass("main-padding-fix");
                        } else {

                            mainElement.removeClass("main-padding-fix");
                        }
                    } else {

                        mainElement.removeClass("main-padding-fix");
                    }
                })
            },
            setProvinceFilterChild:function(){
                this.$parent.provinceId = this.provinceIdChild;
                this.$parent.applyFilter();
            },
            setCityFilterChild:function(){
                this.$parent.cityId = this.cityIdChild;
                this.$parent.applyFilter();
            },
            resetFilterChild: function () {
                this.$parent.resetFilter();
            },
            scrollSet(){
                var self = this;
                setTimeout(function () {
                    self.$parent.sidebarScroll()
                },500)
            }

        },
        mounted() {
            this.scrull_css_header();
        },
    }
</script>
