import { mount, RouterLinkStub } from '@vue/test-utils'
import moxios from 'moxios';
import { seeElement, seeIcon, checkRouterLink, checkBoxContents } from '../../utils.js'
import { linkItems, boxData, boxes } from '../../fakeResponse/dashboard/statusFakeResponse'
import Status from '../../../components/dashboard/seller/dashboard/status.vue'

describe('dashboard Status page suite', () => {
    let wrapper;

    beforeAll(() => {
        moxios.install();

        moxios.stubRequest('/get_seller_dashboard_required_data', {
            status: 200,
            response: boxData
        })
    })
    beforeEach(function () {

        // import and pass your custom axios instance to this method
        wrapper = mount(Status, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        });

        // expect(wrapper.html()).toMatchSnapshot()
    })


    it('check page texts', () => {
        seeElement('داشبورد', 'h1', wrapper)

        // button of payment
        seeElement('ارتقا عضویت', '.blue-brand-background', wrapper)
        seeIcon('fa-arrow-up', wrapper);
        checkRouterLink('.blue-brand-background', 'dashboardPricingTableSeller', RouterLinkStub, wrapper);

        // button of payment
        seeElement('خریدارانی که شماره تماس شما را دیده اند', '.header-links-wrapper', wrapper)
        seeIcon('fa-arrow-left', wrapper);
        checkRouterLink('.viewers-link', 'sellerViewer', RouterLinkStub, wrapper);

        expect(wrapper.findAll('.header-links-wrapper > .green-button').length).toBe(linkItems.length)
        expect(wrapper.find('.header-links-wrapper > .green-button .badge').text()).toBe('جدید')

        let i = 1;
        linkItems.forEach((element) => {
            seeElement(element.text, '.header-links-wrapper', wrapper)
            seeIcon(element.icon, wrapper);
            let wrap = wrapper.find('.header-links-wrapper > .green-button:nth-of-type(' + i + ')');

            expect(wrap.findComponent(RouterLinkStub).props().to.name).toBe(element.href)

            i++
        });
    })


    it('check boxes load', async (done) => {
        // before load axios
        expect(wrapper.findAll('.boxes > .row > div').length).toBe(6)

        // load axios
        moxios.wait(() => {
            expect(wrapper.findAll('.boxes > .row > div > .box').length).toBe(6)

            let i = 1;

            boxes.forEach((element) => {

                let wrap = wrapper.find('.boxes > .row > div:nth-of-type(' + i + ')');
                let link = wrap.find('.green-button');
                let boxBotton = wrap.find('.box-upgrade-link')

                seeElement(element.title, '.box-title', wrap);
                seeIcon(element.icon, wrapper);

                checkBoxContents(element, boxData, wrap);

                if (link.exists()) {
                    expect(link.findComponent(RouterLinkStub).props().to.name).toBe(element.routerName)
                    let boxButtonIcon = boxBotton.find('i');
                    if (boxButtonIcon.exists()) {
                        expect(boxButtonIcon.classes(element.linkIcon)).toBe(true)
                    }
                    expect(boxBotton.html()).toContain(element.linkName)
                }

                i++
            });



            // expect(wrapper.html()).toMatchSnapshot()

            done();
        })

    });

    afterAll(() => {
        moxios.uninstall();
    })
});






