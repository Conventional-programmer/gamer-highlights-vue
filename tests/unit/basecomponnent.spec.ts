import { shallowMount } from '@vue/test-utils'
import BaseProfile from '@/components/BaseProfile.vue'
import User from "@/class/user";

const user = { username: 'gertje', description:'gertje is een mooie meid',imageUrl:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'} as User
const wrapper = shallowMount(BaseProfile, {
  props: { user: user}
})
describe('baseprofile.vue', () => {
  it('view username', () => {
    wrapper.text()
    expect(wrapper.text()).toContain('gertje')
  })
  it('view description', ()=> {
    expect(wrapper.text()).toContain('is een mooie meid')
  })
})
