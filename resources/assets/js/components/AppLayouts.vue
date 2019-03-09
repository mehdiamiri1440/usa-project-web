
<script>
    import headerMasterLayouts from './layouts/header/hedaer'
    import router from '../router/dashboard_router'
    var appLayouts = new Vue({
        el: '#appLayouts',
        components:{
            headerMasterLayouts,

        },
        router,
        methods:{

            redirectToLogin: function () {
                window.location.href = '/login';
            },
        }
    });
</script>
