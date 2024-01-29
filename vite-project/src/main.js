import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import VueRouter from 'vue-router'

import 'vuetify/dist/vuetify.min.css'

createApp(App)
.use(vuetify)
// .use(VueRouter)
.mount('#app')
