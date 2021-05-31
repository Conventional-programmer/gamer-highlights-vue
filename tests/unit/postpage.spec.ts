import {mount} from '@vue/test-utils'
import PostPage from "@/views/PostPage.vue";
import Post from "@/class/post";
import User from "@/class/user";
import PostComment from "@/class/postComment";

const post = new Post(1,{ username: 'gertje', description:'gertje is een mooie meid',imageUrl:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'} as User,'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg','such a good explanation',[new PostComment(1,'aba',{ username: 'gertje', description:'gertje is een mooie meid',imageUrl:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'} as User),new PostComment(2,'kaka',{ username: 'gertje', description:'gertje is een mooie meid',imageUrl:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'} as User)],50) as Post
const mockroute = {
    params:{
        id:1
    },
    path: '/post/1'
}
const wrapper = mount(PostPage,{
    data() {
        return{post: post}
    },
    global: {
        mocks: {
            $route: mockroute
        }
    }
})
describe('postpage.vue',() => {
    it('image loads',() => {
        const img = wrapper.findAll('img');
        expect(img.length).toBe(1);
    });
    it('description',() =>{
           expect(wrapper.text()).toContain('such a good explanation')
    });
    it('likes ', function () {
        expect(wrapper.text()).toContain('likes: 50');
    });
    it('comment loads ', function () {
        expect(wrapper.text()).toContain('kaka');
        expect(wrapper.text()).toContain('aba');
    });
})
