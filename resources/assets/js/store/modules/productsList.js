const state = {
    productsList: []
}
const getters = {
    allProducts: state => state.productsList
}
const actions = {
    fetchProductsList({ commit }, productsList) {
        commit('setProductsList', productsList)
    }
}
const mutations = {
    setProductsList: (state, productsList) => state.productsList = [...productsList]
}
export default {
    state,
    getters,
    actions,
    mutations
}