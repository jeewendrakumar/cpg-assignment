import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/UI/layout/TheHeader'

describe('TheHeader.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Sir Vote-a-lot'
    const wrapper = shallowMount(TheHeader, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
