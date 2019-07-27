<style scoped>

    /*start style sub-header*/
    .sub-header {
        position: absolute;
        left: 0;
        background: #eff3f6;
        top: 63px;
        right: 0;
        text-align: center;
        border-bottom: 1px solid #e6e6e6;
        border-top: 1px solid #e6e6e6;
    }

    .sub-header ul {
        text-align: center;
    }

    .sub-header a {
        padding: 16px;

        display: inline-block;

        color: #808c9b;

        font-weight: bold;

        font-size: 14px;

        position: relative;
    }

    .sub-header a:hover {
        color: #313942;
    }

    .sub-header a:hover::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #28a745;
        height: 3px;
        width: 100%;
    }

    .sub-header a.active {
        color: #313942;
    }

    .sub-header a.active::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #28a745;
        height: 3px;
        width: 100%;
    }

    /*end style sub-header*/

</style>

<template>
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item" v-for="item in items" :class="item.active">
                <router-link :to="{ name : item.url }" v-text="item.message" />
            </li>
        </ul>

    </div>
</template>

<script>
    import {eventBus} from "../../../../../../router/dashboard_router";

    export default {
        data: function () {
            return {
                items: []
            }
        },
        created() {
            eventBus.$on('subHeader', (event) => {
                this.items = event;
            });
        }

    }
</script>
