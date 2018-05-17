import Vue from 'vue'
import Router from 'vue-router'
import RouterArray from '@/router/router'
Vue.use(Router)
export default new Router({
    mode: 'history', 
    scrollBehavior: () => ({ y: 0 }), 
    routes: RouterArray
})
