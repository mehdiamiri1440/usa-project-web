import modals from '../modals'

// State object
const state = {
    elevatorText: 'با استفاده از نردبان، محصول شما تا زمان دریافت محصول تازه تر در همان دسته بندی، به عنوان اولین محصول نمایش داده می‌شود.',
    activeContactId: '',
    reportedUserId: '',
    shareModalUrl: '',
    reviewUserData: '',
    isLoading: false
}

// Mutations

const mutations = {
    elevatorModal(state, data) {
        if (data.text != 'default') {
            state.elevatorText = data.text;
        }
        state.productId = data.productId;
        modals.raiseElevatorModal(state);
    },
    deleteProductModal(state, data) {
        modals.raiseDeleteProductModal(data.productId);
    },
    deleteBuyAdModal(state, data) {
        modals.raiseDeleteBuyAdModal(data.buyAdId);
    },
    reoprtModal(state, data) {
        state.reportedUserId = data.reportedUserId;
        $("#report-modal").modal("show");
    },
    shareModalUrl(state, data) {
        state.shareModalUrl = data.shareModalUrl
        $("#share-modal").modal("show");
    },
    reviewUserModal(state, data) {
        state.reviewUserData = data;
        $("#review-modal").modal("show");
    },
    setModal(state, data) {
        modals.openRelatedSwalModal(data.name);
    },
}

export default {
    namespaced: true,
    state,
    mutations
}