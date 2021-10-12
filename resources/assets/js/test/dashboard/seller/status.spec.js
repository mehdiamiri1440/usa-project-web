import { mount } from '@vue/test-utils'
import Status from '../../../components/dashboard/seller/dashboard/status.vue'
import moxios from 'moxios';




describe('my suite', () => {
    let wrapper;


    let see = (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper;

        expect(wrap.html()).toContain(text);
    }

    let type = (text, selector) => {
        const updateInput = wrapper.find(selector);
        updateInput.element.value = text
        updateInput.trigger('input');

    }

    beforeEach(function () {
        // import and pass your custom axios instance to this method
        wrapper = mount(Status, {
            stubs: ['router-link'],
            propsData: {
                question: {
                    title: 'The title',
                    body: 'The body'
                }
            }
        });
        // moxios.install()
    })


    it('presents the title and the body', () => {
        see('The title')
        see('The body')
    })

    it('it can be Edited', async () => {
        const button = wrapper.find('button');

        expect(wrapper.find('input[name=title]').exists()).toBe(false);

        //find the button and trigger click event
        await button.trigger('click');

        const input = wrapper.find('input');

        expect(input.element.value).toBe('The title');
    })


    it('hides the edit button during edit mode', async () => {
        const button = wrapper.find('button');

        await button.trigger('click');
        expect(wrapper.find('#edit').exists()).toBe(false);
    })

    it('update the question after being edited', async () => {
        const button = wrapper.find('button');
        await button.trigger('click');

        type('Changed title', 'input');
        type('Changed body', 'textarea');

        await wrapper.find('#update').trigger('click');

        see('Changed title')
        see('Changed body')

    });

    afterEach(function () {
        // import and pass your custom axios instance to this method
        moxios.uninstall()
    })

});






