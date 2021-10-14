export const linkItems = [
    {
        href: "registerProductSeller",
        icon: "fa-plus",
        text: "افزودن محصول",
        badge: false,
    },
    {
        href: "buyAdRequestsSeller",
        icon: "fa-list-alt",
        text: "درخواست های خرید",
        badge: false,
    },
    {
        href: "messagesSeller",
        icon: "fa-comment-alt",
        text: "پیام ها",
        badge: false,
    },
    {
        href: "messagesRequestSeller",
        icon: "fa-list-ul",
        text: "خریداران پیشنهادی",
        badge: true,
    },
]

export const boxData = {
    active_pakage_type: 1,
    reputation_score: 1,
    max_buyAds_reply: 3,
    is_valid: false,
    max_allowed_product_register_count: 100,
    confirmed_products_count: 0,
    is_verified: 0,
    access_to_golden_buyAds: true
}

export const boxes = [
    {
        title: "نوع عضویت فعال شما",
        icon: "fa-address-card",
        iconColor: "#19668E",
        routerName: "dashboardPricingTableSeller",
        linkName: "ارتقا عضویت",
        linkIcon: "fa-arrow-up",
    },
    {
        title: "تعداد محصولات قابل ثبت",
        icon: "fa-list-ol",
        iconColor: "#aa49c8",
        routerName: "dashboardProductPricing",
        linkName: "افزایش ظرفیت ثبت محصول",
        linkIcon: "fa-plus",
    },
    {
        title: "سقف روزانه تعداد پاسخ ها به درخواست های خرید",
        icon: "fa-list-alt",
        iconColor: "#D8A679",
        routerName: "dashboardBuyAdPricing",
        linkName: "افزایش ظرفیت پاسخ گویی",
        linkIcon: "fa-arrow-up",
    },
    {
        title: "احراز هویت شده",
        icon: "fa-award	",
        iconColor: "#21AD93",
        staticName: "",
        routerName: "profileBasicSellerVeficiation",
        linkName: "احراز هویت کنید",
        linkIcon: "",
    },
    {
        title: "دسترسی به درخواست های خرید طلایی",
        icon: "fa-star",
        iconColor: "#FFAC58",
        staticName: "",
        routerName: "dashboardPricingTableSeller",
        linkName: "دسترسی به درخواست های طلایی",
    },
    {
        title: "تعداد محصولات ثبت شده",
        icon: "fa-list-ol",
        iconColor: "#00C5BE",
        staticName: "",
        routerName: "myProductsSeller",
        linkName: "محصولات من",
        linkIcon: "fa-list-ol",
    },

]
