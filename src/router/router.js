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
import GmProdata from '@/components/GmProdata'
import SM from '@/components/Sm'
import GM from '@/components/Gm'
import Difftablist from '@/components/unit/difftablist'
export default [
                  {
                             path: '/SM',
                             redirect: '/SM/SmData/Gjjs'
                  }
                  ,{
                             path: '/GM',
                             redirect: '/GM/GmData'
                  }
                  ,{
                    path: '/',
                    redirect: '/GM/GmData'
                  }
                  ,{
                    path: '/GM/GmData',
                    redirect: '/GM/GmData/Gjjs'
                  }
                  ,{
                    path: '/SM',
                    name: 'Sm',
                    component: SM,
                    children:[
                      {
                          path: '/SM/SmProdata',
                          name: 'SmProdata',
                          component: SmProdata,
                          children: [
                            
                            
                          ]
                      }
                      ,{
                          path: '/SM/SmData',
                          name: 'SmData',
                          component: SmData,
                          children: [
                            {
                              path: '/SM/SmData/Gjjs',
                              name: 'Gjjs',
                              component: Gjjs
                            }
                            
                          ]
                      }
                      ,{
                          path: '/SM/Index',
                          name: 'Index',
                          component: Index
                        } 

                    ]
                  }
                 
                  ,{
                    path: '/GM',
                    name: 'GM',
                    component: GM,
                    children:[
                      {
                        path: '/GM/GmProdata',
                        name: 'GmProdata',
                        component: GmProdata,
                        children: []
                      },
                      {
                          path: '/GM/GmData',
                          name: 'GmData',
                          component: GmData,
                          children: [
                            {
                              path: '/GM/GmData/Gjjs',
                              name: 'Gjjs',
                              component: Gjjs
                            }
                            
                          ]
                      }
                      ,{
                        path: '/GM/GmData/detial/:id',
                        name: 'Detial',
                        component: Detial,
                      }
                   ]
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
                  
                  // ,{
                  //   path: '/SM/SmData',
                  //   name: 'SmData',
                  //   component: SmData,
                  //    children: [
                  //     ,{
                  //         path: '/SM/SmData/Gjjs',
                  //         name: 'Gjjs',
                  //         component: Gjjs,
                  //     }
                  //     ,{
                  //         path: '/SmData',
                  //         redirect: 'Gjjs'
                  //     }
                      
                  //   ]
                  // }




                  // ,{
                  //   path: '/SmData/detial/:id',
                  //   name: 'Detial',
                  //   component: Detial,
                  // }

                  // ,{
                  //   path: '/SmProdata',
                  //   name: 'SmProdata',
                  //   component: SmProdata
                  // }
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
                 
  ]