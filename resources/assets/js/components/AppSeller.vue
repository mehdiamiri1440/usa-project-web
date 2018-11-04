
<script>
    import Vue from 'vue'
    import headerDashSeller from '../components/dashboard/seller/header/header.vue';
    import router from '../router/dashboard_router'
    var AppSeller = new Vue({
        el: '#appSeller',
        components:{
            headerDashSeller
        },
        router,
    });
</script>
