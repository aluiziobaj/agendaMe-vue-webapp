
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss'
import './plugins/yup'
import './plugins/axios'
import pinia from './plugins/pinia'
import {useMeStore} from '@/store/me'

const app = createApp(App)
.use(pinia)

const meStore = useMeStore();

meStore.verifyLoginState()
    .finally(()=>{
        app
        .use(router)
        .use(vuetify)
        .mount('#app')
    })
