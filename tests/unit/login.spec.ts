import LoginPage from "@/views/authentication/LoginPage.vue";
import {createStore} from 'vuex'
import {mount} from "@vue/test-utils";
import {authentication} from "@/store/authmodule";

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        authentication
    }
});
//fake root
const div = document.createElement('div')
div.id = 'root'
document.body.appendChild(div);
// fake login function
const loginFn = jest.fn();
const loginComponent = mount(LoginPage, {
    attachTo :  '#root',
    global: {
        plugins: [store]
    }
});
describe('LoginPage.vue', () => {
    it('set username', async () => {
        await loginComponent.get('#email').setValue('bert@gmail.com');
        expect(loginComponent.vm.user.username).toBe('bert@gmail.com');
    }),
        it('set password', async () => {
            await loginComponent.get('#password').setValue('Gert123');
            expect(loginComponent.vm.user.password).toBe('Gert123');
        }),
        it('login request by submit', async () => {
            await loginComponent.get('#email').setValue('bert@gmail.com');
            await loginComponent.get('#password').setValue('Gert123');
            loginComponent.vm.handleLogin = loginFn;
            await loginComponent.get('form').trigger('submit');
            await loginComponent.vm.$forceUpdate;
            expect(loginComponent.vm.handleLogin).toHaveBeenCalled();
        })
    it('login request by button', async () => {
        await loginComponent.get('#email').setValue('bert@gmail.com');
        await loginComponent.get('#password').setValue('Gert123');
        loginComponent.vm.handleLogin = loginFn;
        await loginComponent.get('button').trigger('click');
        await loginComponent.vm.$forceUpdate;
        expect(loginComponent.vm.handleLogin).toHaveBeenCalled();
    })
})
