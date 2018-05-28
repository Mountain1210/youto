<template>
<div>
   <NavLeft></NavLeft>
   <router-view/>
</div>
</template>
<script>
import NavLeft from './Left.vue'
export default{
    name:"YJ"
	,components:{
      NavLeft
    }
}
</script>

<style scoped>

</style>