import Vue from 'vue'
import Router from 'vue-router'
import SmData from '@/components/SmData'
import Index from '@/components/index'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    scrollBehavior: () => ({ y: 0 }), 
  routes: [

    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/SmData',
      name: 'SmData',
      component: SmData
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/SmData',
      name: 'SmData',
      component: SmData
    }
  ]
})
