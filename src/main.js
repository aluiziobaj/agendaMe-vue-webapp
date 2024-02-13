
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import '@/scss/style.scss'
import '@mdi/font/css/materialdesignicons.css'
import './plugins/yup'
import './plugins/axios'
import pinia from './plugins/pinia'
import {useMeStore} from '@/store/me'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
.use(pinia)

const vuetify = createVuetify({
    components, directives,
});

const meStore = useMeStore();

meStore.verifyLoginState()
    .finally(()=>{
        app
        .use(router)
        .use(vuetify)
        .mount('#app')
    })
