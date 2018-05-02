import Vue from 'vue'
import Router from 'vue-router'
import SmData from '@/components/SmData'
import GmData from '@/components/GmData'
import Gjjs from '@/components/Gjjs'
import Wdcpc from '@/components/Wdcpc'
import Index from '@/components/index'
import Main from '@/components/main'
import Detial from '@/components/detial'
import Urltabview from '@/components/Urltabview'

import CompenyDetial from '@/components/compenyDetial'



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
      path: '/Urltabview',
      name: 'Urltabview',
      component: Urltabview
    },
    {

      path: '/CompenyDetial/:id',
      name: 'CompenyDetial',
      component: CompenyDetial
    },
     {
      path: '/CompenyDetial',
      name: 'CompenyDetial',
      component: CompenyDetial
    },

    {
      path: '/Urltabview/:id',
      name: 'Urltabview',
      component: Urltabview
    },
    {

      path: '/detial',
      name: 'Detial',
      component: Detial
    },

    {
      path: '/SmData',
      name: 'SmData',
      component: SmData,
       children: [
        {
            path: '/SmData/Gjjs',
            name: 'Gjjs',
            component: Gjjs,
        },
           {
            path: '/SmData',
            redirect: 'Gjjs'
        },
        {
            path: '/SmData/Wdcpc',
            name: 'Wdcpc',
            component: Wdcpc,
        }
        // ,{
        //     path: '/SmData/Dbk',
        //     name: 'Dbk',
        //     component: Dbk,
        // },
        // {
        //     path: '/SmData/Cpksyl',
        //     name: 'Cpksyl',
        //     component: Cpksyl,
        // }
      ]
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
            path: '/main/Gjjs',
            name: 'Gjjs',
            component: Gjjs,
        },
           {
            path: '/main',
            redirect: 'Gjjs'
        },
        {
            path: '/Wdcpc',
            name: 'Wdcpc',
            component: Wdcpc,
        }
      ]
    }
    ,{
      path: '/SmData',
      name: 'SmData',
      component: SmData
    }
     ,{
      path: '/GmData',
      name: 'GmData',
      component: GmData
    }
  ]
})
