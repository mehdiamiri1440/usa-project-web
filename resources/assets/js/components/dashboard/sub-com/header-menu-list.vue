<template>
  <div>
      <div class="header-menu">
          <ul class="list-unstyled">
              <li class="list-item ">
                  <router-link :to="{ name : 'profileBasic' }">
                      <span>ویرایش پروفایل</span>
                  </router-link>
              </li>

              <li class="list-item ">
                  <router-link :to="{ name : 'buyAdRequests' }">
                      <span>درخواست ها</span>
                  </router-link>
              </li>

              <li class="list-item ">
                  <router-link :to="{ name : 'registerProduct' }">
                      <span>ثبت محصول </span>
                  </router-link>
              </li>
              <li class="list-item ">
                  <router-link :to="{ name : 'myTransactions' }">
                      <span>تراکنش های جاری</span>
                  </router-link>
              </li>

              <li class="list-item ">
                  <router-link :to="{ name : 'myTerminatedTransactions' }">
                      <span>تراکنش های انجام شده</span>
                  </router-link>
              </li>
              <li class="list-item ">
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
    }
</script>