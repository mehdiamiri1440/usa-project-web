export const isElementShownInView = (element, callBack = () => { }, staticOfsset = 0, watchScroll = false) => {
    let selectedElement = $(element);
    if (typeof selectedElement.offset() !== "undefined") {

        if ($(window).scrollTop() + $(window).height() >=
            selectedElement.offset().top - staticOfsset) {
            return callBack(true);
        }

        let flag = true;
        $(window).scroll(() => {
            const conditions = flag && ($(window).scrollTop() + $(window).height() >=
                selectedElement.offset().top - staticOfsset)

            if (conditions) {
                flag = watchScroll
                return callBack(true);
            }
        });
    }

}

