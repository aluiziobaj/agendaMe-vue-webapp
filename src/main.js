
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import '@/scss/style.scss'
import './plugins/yup'
import './plugins/axios'
import pinia from './plugins/pinia'

const app = createApp(App)
app
.use(router)
.use(vuetify)
.use(pinia)
.mount('#app')
