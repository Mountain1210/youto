import SmData from '@/components/SmData'
import GmData from '@/components/GmData'
import Gjjs from '@/components/Gjjs'
import Wdcpc from '@/components/Wdcpc'
import Index from '@/components/index'
import Main from '@/components/main'
import Detial from '@/components/detial'
import Urltabview from '@/components/Urltabview'
import HelloWorld from '@/components/HelloWorld'
import CompenyDetial from '@/components/compenyDetial'
import Register from '@/components/register'
import Diff from '@/components/diff'
import SmProdata from '@/components/SmProdata'
import SM from '@/components/Sm'

import Difftablist from '@/components/unit/difftablist'
export default [
                  {
                    path: '/SM/SmData',
                    name: 'SmData',
                    component: SmData               
                  },
                  {
                    path: '/SM',
                    redirect: 'SmData'
                  },
                  {
                    path: '/SM/',
                    name: 'Sm',
                    component: SM,
                    children:[
                      {
                          path: '/SM/SmProdata',
                          name: 'SmProdata',
                          component: SmProdata,
                      }
                    ]
                  },
                  ,{
                    path: '/',
                    name: 'Index',
                    component: Index
                  }
                  ,{
                    path: '/Diff',
                    name: 'Diff',
                    component: Diff,
                    children: [
                      ,{
                          path: '/Diff/difftablist',
                          name: 'Difftablist',
                          component: Difftablist,
                      }
                    ]
                  }

                  ,{
                    path: '/Urltabview',
                    name: 'Urltabview',
                    component: Urltabview
                  }
                   ,{
                    path: '/Register',
                    name: 'Register',
                    component: Register
                  }
                  ,{
                    

                    path: '/CompenyDetial/:id',
                    name: 'CompenyDetial',
                    component: CompenyDetial
                  }
                   ,{
                    path: '/CompenyDetial',
                    name: 'CompenyDetial',
                    component: CompenyDetial
                  }

                  ,{
                    path: '/Urltabview/:id',
                    name: 'Urltabview',
                    component: Urltabview
                  }
                  ,{

                    path: '/detial',
                    name: 'Detial',
                    component: Detial
                  }
                  
                  ,{
                    path: '/SM/SmData',
                    name: 'SmData',
                    component: SmData,
                     children: [
                      ,{
                          path: '/SM/SmData/Gjjs',
                          name: 'Gjjs',
                          component: Gjjs,
                      }
                      ,{
                          path: '/SmData',
                          redirect: 'Gjjs'
                      }
                      
                    ]
                  }
                  ,{
                    path: '/SmData/detial/:id',
                    name: 'Detial',
                    component: Detial,
                  }

                  ,{
                    path: '/main',
                    name: 'Main',
                    component: Main,
                    children: [
                      ,{
                          path: '/main/Gjjs',
                          name: 'Gjjs',
                          component: Gjjs,
                      }
                      ,{
                          path: '/main',
                          redirect: 'Gjjs'
                      }
                      ,{
                          path: '/Wdcpc',
                          name: 'Wdcpc',
                          component: Wdcpc,
                      }
                    ]
                  }
                  ,{
                    path: '/GmData',
                    name: 'GmData',
                    component: GmData
                  }
                  ,{
                    path: '/GmData/detial/:id',
                    name: 'Detial',
                    component: Detial,
                  }
  ]