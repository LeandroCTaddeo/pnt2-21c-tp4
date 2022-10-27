import Vue from 'vue'
import VueRouter from 'vue-router'
import FormularioAv from './components/FormularioAv.vue'
import HttpClient from './components/HttpClient.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/formulario', component: FormularioAv },
        { path: '/http-client', component: HttpClient },
    ]
})
