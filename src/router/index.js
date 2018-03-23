import Vue from 'vue'
import Router from 'vue-router'
import SmData from '@/components/SmData'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    scrollBehavior: () => ({ y: 0 }), 
  routes: [

    {
      path: '/',
      name: 'SmData',
      component: SmData
    },
    {
      path: '/SmData',
      name: 'SmData',
      component: SmData
    }
  ]
})
