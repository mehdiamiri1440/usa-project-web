
<script>
    
    

    import Vue from 'vue'
    import headerDashBuyer from '../components/dashboard/buyer/header/header.vue';
    import router from '../router/dashboard_router'
    var app2 = new Vue({
        el: '#appBuyer',
        components:{
            headerDashBuyer,
           
        },
        router,
    });
</script>
