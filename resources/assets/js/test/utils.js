import axios from 'axios'
global.axios = axios


export const seeElement = (text, selector, wrapper) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;
    expect(wrap.html()).toContain(text);
}

export const seeIcon = (selector, wrapper) => {
    let wrap = wrapper.find('.' + selector);
    expect(wrap.classes(selector)).toBe(true)
}

export const checkRouterLink = (selector, routeName, RouterLink, wrapper) => {
    let wrap = wrapper.find(selector);
    expect(wrap.findComponent(RouterLink).props().to.name).toBe(routeName)
}
export const checkStyle = (selector, ptoperty, value) => {
    let wrap = wrapper.find(selector).attributes().style

    expect(wrap).toHaveProperty('background: red')
}


const checkPackage = (packageType) => {

    switch (packageType) {
        case 0:
            return "عضویت رایگان";
            break;
        case 1:
            return "عضویت پایه";
            break;
        case 2:
            return "اشتراک 6 ماهه";
            break;
        case 3:
            return "عضویت ویژه";
            break;
    }
}

export const checkBoxContents = (box, data, wrapper) => {

    switch (box.title) {
        case "نوع عضویت فعال شما":
            expect(wrapper.find('.content-wrapper > span:first-of-type').text()).toBe(checkPackage(data.active_pakage_type))
            break;
        case "تعداد محصولات قابل ثبت":
            if (data.max_allowed_product_register_count == 0) {


            } else {
                let boxContent = wrapper.find('.content-wrapper > span:first-of-type').text();

                let boxContentNumber = parseInt(boxContent.substr(0, boxContent.length - 5));
                let boxContentText = boxContent.substr(boxContent.length - 6, boxContent.length);
                expect(boxContentNumber).toBeGreaterThanOrEqual(0);
                expect(boxContentNumber).toBeLessThanOrEqual(100);
            }
            break;
        // case "سقف روزانه تعداد پاسخ ها به درخواست های خرید":

        //     break;
        // case "احراز هویت شده":

        //     break;
        // case "دسترسی به درخواست های خرید طلایی":

        //     break;
        // case "تعداد محصولات ثبت شده":

        //     break;

        default:
            break;
    }
}

