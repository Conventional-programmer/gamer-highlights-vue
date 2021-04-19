import {mount} from '@vue/test-utils'
import MessageComponent from "@/components/MessageComponent.vue";
import PostComment from "@/class/postComment";
import User from "@/class/user";

const user = { username: 'gertje', description:'gertje is een mooie meid',imageUrl:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'} as User
const comments = [{id:1,message:'bert carryd',user:user} as PostComment]
describe('messagecomponnent.vue',()=> {
    it('displays messages',()=> {
        const wrapper = mount(MessageComponent, {
            props: {messages:comments}
        })
        expect(wrapper.html()).toMatch('bert')
    })
})
