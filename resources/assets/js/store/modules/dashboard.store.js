
// State object
const state = {
    submitSuccess: "",
    subHeader: "",
    submiting: false,
    uploadPercentage: 0,
}



const actions = {
    // getCurrentUser() {
    //     axios.post("/user/profile_info").then((response) => {
    //         store.currentUser = response.data;
    // if (
    //   !response.data.user_info.is_verified &&
    //   this.checkVerificationAlert(this.$route.name)
    // ) {
    //   if (!this.disableVerificationAlert) {
    //     this.verificationAlert = true;
    //   }
    // } else {
    //   this.verificationAlert = false;
    // }
    // return (this.currentUser = response.data);
    // });
    // }
}


export default {
    namespaced: true,
    state,
    actions
}