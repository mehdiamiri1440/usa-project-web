<style>
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
    .header-menu a.router-link-exact-active::before {
        content: " ";
        height: 100%;
        width: 2px;
        background: #00d614;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }
    .header-menu  a.router-link-exact-active {
        color: #fff;
        background: #637484;
    }
</style>
<template>
  <div>
      <div class="header-menu">
          <ul class="list-unstyled">
              <li class="list-item" >
                  <router-link  :to="{ name : 'profileBasic' }" >
                      <span>ویرایش پروفایل</span>
                  </router-link>
              </li>

              <li class="list-item  ">
                  <router-link :to="{ name : 'buyAdRequests' }">
                      <span>درخواست ها</span>
                  </router-link>
              </li>

              <li class="list-item  ">
                  <router-link :to="{ name : 'registerProduct' }">
                      <span>ثبت محصول </span>
                  </router-link>
              </li>
              <li class="list-item  ">
                  <router-link :to="{ name : 'myTransactions' }">
                      <span>تراکنش های جاری</span>
                  </router-link>
              </li>

              <li class="list-item  ">
                  <router-link :to="{ name : 'myTerminatedTransactions' }">
                      <span>تراکنش های انجام شده</span>
                  </router-link>
              </li>
              <li class="list-item  ">
                  <router-link :to="{ name : 'guide' }">
                      <span>راهنما</span>
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
    import {eventBus} from "../../../app";
    export default{
        props: [
            'profilebasic',
            'byadreq',
            'selregpro',
            'transactroute',
            'mytrans',
            'guide'
        ],
        data(){
            return{
                active_el:1
            }
        },
        methods:{
            activate:function(el){
                this.active_el = el;
            }
        },
        created() {
            eventBus.$on('active', (event) => {
                this.active_el = event;
            });
        }
    }
</script>