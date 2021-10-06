import { createApp } from 'vue'
import { VueReCaptcha ,useReCaptcha} from 'vue-recaptcha-v3'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(store);
app.use(VueReCaptcha,{siteKey: '6LfbnaccAAAAABsldubAwHEVfY8bErvZYI7bqfiX'})
app.use(router);
app.mount('#app');
