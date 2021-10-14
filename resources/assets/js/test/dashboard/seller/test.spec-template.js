import { mount } from '@vue/test-utils'
import Status from '../../../components/dashboard/seller/dashboard/status.vue'
import moxios from 'moxios';
import axios from 'axios'
global.axios = axios


describe('my suite', () => {
    let wrapper;
    // let checkStyle = (selector, ptoperty, value) => {
    //     let wrap = wrapper.find(selector).attributes().style

    //     expect(wrap).toHaveProperty('background: red')
    // }

    // let type = (text, selector) => {
    //     const updateInput = wrapper.find(selector);
    //     updateInput.element.value = text
    //     updateInput.trigger('input');

    // }
    // beforeAll(() => {

    // })
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
        moxios.install()

        // import and pass your custom axios instance to this method
        wrapper = mount(Status, {
            stubs: ['router-link'],
            propsData: {
                dataQuestion: {
                    title: 'The title',
                    body: 'The body'
                }
            }
        });
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

    it.only('update the question after being edited', async (done) => {
        const button = wrapper.find('button');
        await button.trigger('click');

        type('Changed title', 'input');
        type('Changed body', 'textarea');

        // static request '/question/user/1'
        // for daynamic request ====>  moxios.stubRequest(/question\/.+/',{ ...
        moxios.stubRequest('/question', {
            status: 200,
            response: {
                title: 'Changed title',
                body: 'Changed body'
            }
        })


        await wrapper.find('#update').trigger('click');

        see('Changed title')
        see('Changed body')

        moxios.wait(() => {
            see('form is submited')
            done();
        })


    });


    it('can be cancel the change', async () => {
        const editButton = wrapper.find('#edit');
        await editButton.trigger('click');

        type('Changed title', 'input');

        const cancelButton = wrapper.find('#cancel');
        await cancelButton.trigger('click');

        see('The title')

    })

    afterEach(function () {
        // import and pass your custom axios instance to this method
        moxios.uninstall()
    })

});






