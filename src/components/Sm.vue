<template>
<div>
   <NavLeft></NavLeft>
   <router-view/>
</div>
</template>
<script>
import NavLeft from './Left.vue'
export default{
    name:"Sm"
	,components:{
      NavLeft
    }
}
</script>

<style scoped>

</style>
<!-- 
 ,{
                          path: '/main/Gjjs',
                          name: 'Gjjs',
                          component: Gjjs,
                      }
                      ,{
                          path: '/main',
                          redirect: 'Gjjs'
                      } -->