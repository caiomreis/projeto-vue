import 'font-awesome/css/font-awesome.css'
import store from './config/store'
import Vue from 'vue'

import './config/bootstrap'
import App from './App'
import router from './config/router'
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')