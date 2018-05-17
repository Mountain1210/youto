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