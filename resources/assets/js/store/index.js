import Vuex from 'vuex'
import Vue from 'vue'
import productsList from './modules/productsList'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        productsList
    }
})