<template>
  <div>
      <div class="header-menu">
          <ul class="list-unstyled">
              <li class="list-item" @click="activate(1)" :class="{ active : active_el == 1 }" >
                  <router-link  :to="{ name : 'profileBasic' }">
                      <span>ویرایش پروفایل</span>
                  </router-link>
              </li>

              <li class="list-item " @click="activate(2)" :class="{ active : active_el == 2 } ">
                  <router-link :to="{ name : 'buyAdRequests' }">
                      <span>درخواست ها</span>
                  </router-link>
              </li>

              <li class="list-item " @click="activate(3)" :class="{ active : active_el == 3 } ">
                  <router-link :to="{ name : 'registerProduct' }">
                      <span>ثبت محصول </span>
                  </router-link>
              </li>
              <li class="list-item " @click="activate(4)" :class="{ active : active_el == 4 } ">
                  <router-link :to="{ name : 'myTransactions' }">
                      <span>تراکنش های جاری</span>
                  </router-link>
              </li>

              <li class="list-item " @click="activate(5)" :class="{ active : active_el == 5 } ">
                  <router-link :to="{ name : 'myTerminatedTransactions' }">
                      <span>تراکنش های انجام شده</span>
                  </router-link>
              </li>
              <li class="list-item " @click="activate(6)" :class="{ active : active_el == 6 } ">
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
        }
    }
</script>