<template>
<div>
   <NavLeft></NavLeft>
   <router-view/>
</div>
</template>
<script>
import NavLeft from './Left.vue'
export default{
    name:"Zh"
	,components:{
      NavLeft
    }
}
</script>

<style scoped>

</style>