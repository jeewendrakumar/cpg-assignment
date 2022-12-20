import { shallowMount } from '@vue/test-utils'
import HeaderComponent from '@/components/UI/layout/HeaderComponent'

describe('HeaderComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Sir Vote-a-lot'
    const wrapper = shallowMount(HeaderComponent, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
