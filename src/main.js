import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueRouter from "vue-router"
import Routes from './routes'
import store from './store/store'



Vue.use(Vuetify);
Vue.use(VueRouter);

//filters



const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')