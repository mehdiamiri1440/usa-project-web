
<script>
    import headerMasterLayouts from './layouts/header/hedaer'
    import footerMasterLayouts from './layouts/footer/footer'
    import router from '../router/dashboard_router'
    var appLayouts = new Vue({
        el: '#appLayouts',
        components:{
            headerMasterLayouts,
            footerMasterLayouts
        },
        router,
        methods:{

            redirectToLogin: function () {
                window.location.href = '/login';
            },
        }
    });
</script>
