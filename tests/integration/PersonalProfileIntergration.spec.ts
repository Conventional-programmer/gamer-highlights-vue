import {flushPromises, mount} from "@vue/test-utils";
import PersonalProfile from "@/views/PersonalProfile.vue";
import UserService from '@/service/user-service'
import PostService from '@/service/post-service'
import {createStore} from "vuex";
import User from "@/class/user";

//fake root
const div = document.createElement('div')
div.id = 'root'
document.body.appendChild(div);
//user
const user = new User();
user.userId = 1;
user.username = "bert";
user.description = "koekjes";
user.password = "Gert123";
user.imageUrl = "gertje"
localStorage.setItem('user', JSON.stringify(user));
const store = createStore({
    state: {
        authentication: {
            status: {
                loggedIn: true
            },
            user: user
        }
    },
    mutations: {},
    actions: {},
    modules: {
    }
});
const personalProfile = mount(PersonalProfile,{
    global: {
        plugins: [store]
    },
    props: {
        UserService: UserService,
        PostService: PostService
    },
    attachTo :  '#root'
})

describe('PersonalProfile.vue intergration',() => {
    it('shows username',async (done) => {
        setTimeout(async ()=>{
            await flushPromises();
            await personalProfile.vm.$forceUpdate;
            expect(personalProfile.text()).toContain('Bert');
            done();
        },3000);
    })
})
