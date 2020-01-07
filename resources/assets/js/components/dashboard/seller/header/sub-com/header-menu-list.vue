<style scoped>
    .sub-header a.router-link-exact-active {
        color: #313942;
    }

    .sub-header a.router-link-exact-active::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #00c569;
        height: 3px;
        width: 100%;
    }

    .header-menu a.router-link-exact-active::before,
    .header-menu a.active::before {
        content: " ";
        height: 100%;
        width: 2px;
        background: #00c569;
        position: absolute;
        right: 1px;
        top: 0;
        display: block;
    }

    .header-menu a.router-link-exact-active,
    a.active {
        color: #fff;
        background: #637484;
    }

    .header-menu a {
        color: #b1b1b1;
        padding: 10px 20px;
        display: inline-block;
        position: relative;
        width: 100%;
    }

    .header-menu {
        padding: 0;
    }

    .header-menu a:hover {
        color: #fff;
        background: #637484;
    }

    .header-menu a:hover::before {
        content: " ";
        height: 100%;
        width: 2px;
        background: #00ac5c;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }

    .header-menu li.active a {
        color: #fff;
        background: #637484;
    }

    .header-menu li.active a:before {
        content: " ";
        height: 100%;
        width: 2px;
        background: #00c569;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }

    .custom-badge {
        position: absolute;
        left: 20px;
        top: 6px;
        background: #e41c38;
        height: 30px;
        width: 30px;
        border-radius: 50px;
        padding-top: 7px;
        color: #fff;
        text-align: center;
        direction: ltr;
    }

    .header-menu i {
        margin: 5px;
    }
</style>
<template>
    <div>
        <section v-if="isLoading">
            <div class="header-menu">
                <ul class="list-unstyled">
                    <li class="list-item">
                        <router-link
                                :class="{'active' : this.activeElement === 0}"
                                :to="{ name : 'statusSeller' }"
                        >
                            <i class="fa fa-chart-line"></i>
                            <span>داشبورد</span>
                        </router-link>
                    </li>

                    <li class="list-item">
                        <router-link :to="{ name : 'buyAdRequestsSeller' }">
                            <i class="fa fa-list-alt" aria-hidden="true"></i>
                            <span>درخواست های خرید</span>
                        </router-link>
                    </li>

                    <li class="list-item">
                        <router-link :to="{ name : 'registerProductSeller' }">
                            <i class="fa fa-plus-square" aria-hidden="true"></i>
                            <span>ثبت محصول</span>
                        </router-link>
                    </li>

                    <li class="list-item">
                        <router-link :to="{ name : 'messagesSeller' }">
                            <i class="fas fa-comment-alt" aria-hidden="true"></i>

                            <span>پیام ها</span>
                            <span class="custom-badge" v-if="messageCount" v-text="messageCount"></span>
                        </router-link>
                    </li>

                    <li class="list-item">
                        <router-link :to="{ name : 'profileBasicSeller' }">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span>ویرایش پروفایل</span>
                        </router-link>
                    </li>

                    <li class="list-item">
                        <router-link :to="{ name : 'myProductsSeller' }">
                            <i class="fas fa-list-ol" aria-hidden="true"></i>
                            <span>محصولات من</span>
                        </router-link>
                    </li>

                    <li class="list-item">
                        <router-link :to="{ name : 'guideSeller' }">
                            <i class="fa fa-question" aria-hidden="true"></i>
                            <span>راهنما</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    import {eventBus} from "../../../../../router/router";

    export default {
        props: [
            "profilebasic",
            "byadreq",
            "selregpro",
            "transactroute",
            "mytrans",
            "guide"
        ],
        data() {
            return {
                activeElement: null,
                isLoading: true,
                messageCount: "",
                linksPath: ["/dashboard/complementary"]
            };
        },
        methods: {
            init: function () {
                var self = this;

                axios
                    .post("/get_total_unread_messages_for_current_user")
                    .then(function (response) {
                        self.messageCount = response.data.msg_count;
                        if (self.messageCount >= 100) {
                            self.messageCount = "+99"
                        }
                    })
                    .catch(function (err) {
                        //
                    });
            },
            subIsActive(input) {
                const paths = Array.isArray(input) ? input : [input];
                return paths.some(path => {
                    return this.$route.path.indexOf(path) === 0; // current path starts with this path string
                });
            },
            checkLinkActive: function () {
                for (var i = 0; i < this.linksPath.length; i++) {
                    if (this.subIsActive(this.linksPath[i])) {
                        this.activeElement = i;
                    } else {
                        this.activeElement = null;
                    }
                }
            }
        },
        watch: {
            $route() {
                this.checkLinkActive();
            }
        },
        mounted: function () {
            this.checkLinkActive();
            this.init();
        },
        created() {
            var self = this;
            var userId = window.localStorage.getItem("userId");

            eventBus.$on("messageCount", event => {
                this.messageCount += event;
            });
            eventBus.$on("active", event => {
                this.activeElement = event;
            });

            Echo.private("testChannel." + userId).listen("newMessage", e => {
                var senderId = e.new_message.sender_id;

                self.messageCount += 1;
            });
        }
    };
</script>
