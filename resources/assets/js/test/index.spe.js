// test('it works', () => {
//     expect(1 + 1).toBe(2)
// })



import { mount } from '@vue/test-utils'
import ExampleComponent from '../components/layouts/main/contact_us.vue'

// test('it works', () => {
//     expect(1 + 1).toBe(2)
// })

test('should mount without crashing', () => {
    const wrapper = mount(ExampleComponent)

    expect(wrapper).toMatchSnapshot()
})