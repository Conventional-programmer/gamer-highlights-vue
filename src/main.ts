import { createApp } from 'vue'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { MdButton } from 'vue-material/dist/components'
import router from './router'
import store from './store'
createApp(App).use(store).use(MdButton).use(router).mount('#app')
