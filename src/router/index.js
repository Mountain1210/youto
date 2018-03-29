import Vue from 'vue'
import Router from 'vue-router'
import SmData from '@/components/SmData'
import Gjjs from '@/components/Gjjs'
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
      component: Main,
      children: [
        {
            path: '/Gjjs',
            component: Gjjs,
        }
      ]
    },
    {
      path: '/SmData',
      name: 'SmData',
      component: SmData
    }
  ]
})
