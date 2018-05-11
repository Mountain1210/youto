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
import Register from '@/components/register'
import Diff from '@/components/diff'
import Difftablist from '@/components/unit/difftablist'



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
      path: '/Diff',
      name: 'Diff',
      component: Diff,
      children: [
        {
            path: '/Diff/difftablist',
            name: 'Difftablist',
            component: Difftablist,
        }
      ]
    },

     {
      path: '/Urltabview',
      name: 'Urltabview',
      component: Urltabview
    },
     {
      path: '/Register',
      name: 'Register',
      component: Register
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
