import AuthService from '../service/auth-service'
import {Module} from 'vuex'
const user = JSON.parse(localStorage.getItem('user')!);
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const authentication: Module<any,any> = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }) {
            localStorage.removeItem('user')
            commit('logout');
        },
        register({ commit }, user) {
            AuthService.register(user).then(
                user => {
                    commit("registerSuccess",user)
                    return Promise.resolve(user)
                },
                error => {
                    commit("registerFailure");
                    return Promise.reject(error);
                }
            )
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};
