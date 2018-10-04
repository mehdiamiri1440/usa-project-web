<template>
    <div class="sub-header">
        <ul class="list-inline">
      <!--      <li class="list-item"><a href="#" onClick="checkProfile(event)">
                قرارداد </a>
            </li>-->
            <li class="list-item" v-for="item in items" :class="item.active">
                <router-link :to="{ name : item.url }">
                    {{ item.message }}
                </router-link>
            </li>
        </ul>

    </div>
</template>
<script>
    import {eventBus} from '../../../../app';
    export default {
        data: function () {
            return{
                items:[]
            }
        },
        created() {
            eventBus.$on('subHeader', (event) => {
                this.items = event;
            });
        }

    }
</script>