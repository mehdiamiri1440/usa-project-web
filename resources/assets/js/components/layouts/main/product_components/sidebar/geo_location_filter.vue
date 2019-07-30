<style>
    .box-sidebar {
        text-align: center;
        direction: rtl;
        margin: 15px auto;
        position: relative;

    }
    hr {
        margin-bottom: 0;
    }
    .title-widget{
        text-align: right;
        padding: 15px 15px 0 15px;
    }
    .title-widget h3{
        font-size:18px;
    }
    .sidebar-buttons {
        text-align: center;
    }

    .sidebar-buttons a {
        width: initial;

        border: none;

        padding: 9px 18px;

        margin: 0 auto;

        display: inline-block;
    }

    .box-sidebar select {
        border-radius: 3px;
        border: 1px solid #4c5058;
        width: 80%;
        padding: 5px 15px;
    }
    .sidebar-buttons{
        padding-bottom: 15px;
    }
    .red-button {
        background: #e41c38;
        color: #fff;
    }

    .red-button:hover {
        background: #ce1c38;
        color: #fff;
    }
    .red-button:hover,.red-button:active,.red-button:focus  {
        color: #fff;
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
        padding: 25px;
    }
    .category-products-widget-default{
        padding: 0 15px;
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
        100% {
            background-position: 100% 32%
        }
    }

    @-moz-keyframes AnimationBackgroundGradient {
        0% {
            background-position: 0 69%
        }
        100% {
            background-position: 100% 32%
        }
    }

    @-o-keyframes AnimationBackgroundGradient {
        0% {
            background-position: 0 69%
        }
        100% {
            background-position: 100% 32%
        }
    }

    @keyframes AnimationBackgroundGradient {
        0% {
            background-position: 0 69%
        }
        100% {
            background-position: 100% 32%
        }
    }

    @media screen and (max-width: 992px) {
        .sidebar-buttons a {
            width: 150px;
            border: none;
            padding: 9px 0;
        }
    }
</style>

<template>
    <div v-if="provinceList" class="content-sidebar">
        <div class="title-widget">
            <h3>موقعیت جغرافیایی</h3>
            <hr>
        </div>

        <div class="box-sidebar">
            <i class="fa-building  fa"></i>

            <select v-on:change="setProvinceFilter($event)">
                <option disabled selected>استان</option>

                <option v-for="province in provinceList"
                        v-bind:value="province.id" v-text="province.province_name">
                </option>

            </select>
        </div>
        <div class="box-sidebar">
            <i class="fa-home fa"></i>
            <select v-on:change="setCityFilter($event)">
                <option disabled selected>شهر</option>
                <option v-for="city in cityList"
                        v-bind:value="city.id">{{city.city_name}}
                </option>
            </select>
        </div>
        <div class="sidebar-buttons">
            <a href="#" class="btn green-button hidden-md hidden-lg" data-dismiss="modal">
                جستجو
            </a>

            <a href="#" @click.prevent="$parent.resetFilterChild()" data-dismiss="modal" class="btn  red-button">
                حذف فیلتر ها
            </a>
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
                </li>

            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                provinceList: '',
                cityList: '',
            }
        },
        methods: {
            init: function () {

                axios.post('/location/get_location_info')
                    .then(response => (this.provinceList = response.data.provinces));
            },
            setProvinceFilter: function (e) {
                e.preventDefault();
                var provinceId = $(e.target).val();

                this.registerComponentStatistics('product-list', 'sidebarSearch', 'province');
                this.$parent.provinceIdChild = provinceId;
                this.$parent.setProvinceFilterChild();

                axios.post('/location/get_location_info', {
                    province_id: provinceId
                }).then(response => (this.cityList = response.data.cities));


            },
            setCityFilter: function (e) {
                e.preventDefault();
                var cityId = $(e.target).val();

                this.loading = true;
                this.registerComponentStatistics('product-list', 'sidebarSearch', 'city');
                this.$parent.cityIdChild = cityId;
                this.$parent.setCityFilterChild();
                this.loading = false;

            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },

        },
        mounted() {
            this.init();
        }
    }
</script>
