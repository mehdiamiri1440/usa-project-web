<style>
    .custom-badge{
        position: absolute;
        left: 20px;
        top: 3px;
        background: #e41c38;
        height: 25px;
        width: 25px;
        border-radius: 50px;
        padding: 6px;
        color: #fff;
    }
    .sub-header a.router-link-exact-active {
        color: #313942;
    }

    .sub-header a.router-link-exact-active::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #28a745;
        height: 3px;
        width: 100%;
    }

    .header-menu a.router-link-exact-active::before, a.active::before {
        content: " ";
        height: 100%;
        width: 2px;
        background: #00d614;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }

    .header-menu a.router-link-exact-active, a.active {
        color: #fff;
        background: #637484;
    }

    .header-menu i.fa {
        margin: 5px;
    }

</style>
<template>
    <div>
        <div class="header-menu">
            <ul class="list-unstyled">
                <li class="list-item">
                    <router-link :class="{'active' : this.active_el === 1}" :to="{ name : 'profileBasic' }">
                        <span>ویرایش پروفایل</span>
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </router-link>
                </li>

                <li class="list-item  ">
                    <router-link :class="{'active' : this.active_el === 2}" :to="{ name : 'buyAdRequests' }">
                        <span>درخواست ها</span>
                        <i class="fa fa-list-alt " aria-hidden="true"></i>
                    </router-link>
                </li>

                <li class="list-item  ">
                    <router-link :class="{'active' : this.active_el === 3}" :to="{ name : 'registerProduct' }">
                        <span>ثبت محصول </span>
                        <i class="fa fa-plus-square " aria-hidden="true"></i>
                    </router-link>
                </li>
           <!--     <li class="list-item  ">
                    <router-link :class="{'active' : this.active_el === 4}" :to="{ name : 'myTransactions' }">
                        <span>تراکنش های جاری</span>
                        <i class="fa fa-list-ol " aria-hidden="true"></i>
                    </router-link>
                </li>

                <li class="list-item  ">
                    <router-link :class="{'active' : this.active_el === 5}" :to="{ name : 'myTerminatedTransactions' }">
                        <span>تراکنش های انجام شده</span>
                        <i class="fa fa-th-list  " aria-hidden="true"></i>
                    </router-link>
                </li>-->
                <li class="list-item  ">
                    <router-link :class="{'active' : this.active_el === 8}" :to="{ name : 'messages' }">
                        <span>پیام ها</span>
<!--                        <span class="custom-badge">12</span>-->
                        <i class="fa fa-comment " aria-hidden="true"></i>
                    </router-link>
                </li>
                <li class="list-item  ">
                    <router-link :class="{'active' : this.active_el === 7}" :to="{ name : 'guide' }">
                        <span>راهنما</span>
                        <i class="fa fa-question-circle  " aria-hidden="true"></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="copy-right">
            <p>
                تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.
            </p>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../../../../../router/dashboard_router";

    export default {
        props: [
            'profilebasic',
            'byadreq',
            'selregpro',
            'transactroute',
            'mytrans',
            'guide'
        ],
        data() {
            return {
                active_el: 0
            }
        },
        methods: {
            subIsActive(input) {
                const paths = Array.isArray(input) ? input : [input];
                return paths.some(path => {
                    return this.$route.path.indexOf(path) === 0 // current path starts with this path string
                });

            }
        }, watch: {
            $route() {
                if (this.subIsActive('/complementry') || this.subIsActive('/profile_contract')) {
                    this.active_el = 1;
                } else if (this.subIsActive('/my-sell-offers') || this.subIsActive('/buyAd-requests') || this.subIsActive('/buyAd-request-detail/' + this.$route.params.id)) {
                    this.active_el = 2
                } else if (this.subIsActive('/register-product')) {
                    this.active_el = 3
                } else if (this.subIsActive('/transaction-list') || this.subIsActive('/transaction-detail/')|| this.subIsActive('/instant-transaction-detail/'  + this.$route.params.id)) {
                    this.active_el = 4
                } else if (this.subIsActive('/terminated-transaction-list') || this.subIsActive('/transaction-report/')|| this.subIsActive('/instant-transaction-report/' + this.$route.params.id)) {
                    this.active_el = 5
                } else if (this.subIsActive('/privacy_and_policy.vue')) {
                    this.active_el = 6
                }else if(this.subIsActive('/guide')){
                    this.active_el = 7
                }else if(this.subIsActive('/messages')){
                    this.active_el = 8
                } else{
                    this.active_el = 1
                }
            }
        }, mounted: function () {
            if (this.subIsActive('/complementry') || this.subIsActive('/profile_contract')){
                this.active_el = 1;
            } else if (this.subIsActive('/my-sell-offers') || this.subIsActive('/buyAd-requests') || this.subIsActive('/buyAd-request-detail/' + this.$route.params.id)) {
                this.active_el = 2
            } else if (this.subIsActive('/register-product')) {
                this.active_el = 3
            } else if (this.subIsActive('/transaction-list') || this.subIsActive('/transaction-detail/')|| this.subIsActive('/transaction-detail/'  + this.$route.params.id)) {
                this.active_el = 4
            } else if (this.subIsActive('/terminated-transaction-list') || this.subIsActive('/transaction-report/')|| this.subIsActive('/transaction-report/' + this.$route.params.id)) {
                this.active_el = 5
            } else if (this.subIsActive('/privacy_and_policy')) {
                this.active_el = 6
            } else if(this.subIsActive('/messages')){
                this.active_el = 8
            } else if(this.subIsActive('/guide')){
                this.active_el = 7
            }else{
                this.active_el = 1
            }
            console.log(this.active_el);
        },
        created() {
            eventBus.$on('active', (event) => {
                this.active_el = event;
            });
        },


    }
</script>
