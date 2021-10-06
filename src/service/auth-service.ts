import axios from 'axios';

const API_URL = 'http://localhost/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                console.log(response);
                return response.data;
            });
    }

    logout() {
        console.log('logout aut-service')
        localStorage.removeItem('user');
    }

    register(user,token: string) {
        return axios.post(API_URL + 'register', {
            username: user.username,
            email: user.email,
            password: user.password,
            token: token
        });
    }
}

export default new AuthService();
