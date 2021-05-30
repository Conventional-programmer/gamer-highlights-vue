import {mount} from "@vue/test-utils";
import PersonalProfile from "@/views/PersonalProfile.vue";
import UserService from '@/service/user-service'
import PostService from '@/service/post-service'
import {createStore} from "vuex";
import {authentication} from "@/store/authmodule";
import User from "@/class/user";

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        authentication
    }
});
const user = new User();
user.id = 1;
store.dispatch('authentication/login', user).then(
    () => {
        console.log('dispatch succesfully logged in')
    },
    error => {
        console.log('failed succesfully logged in')
    }
);
const personalProfile = mount(PersonalProfile,{
    global: {
        plugins: [store]
    },
    props: {
        UserService:UserService,
        PostService: PostService
    }
})
describe('PersonalProfile.vue intergration',() => {
    it('shows username',() => {
        expect(personalProfile.text()).toContain('bert');
    })
})
