<template>
  <div id="app">
  <NavHeader></NavHeader>
  <div id="mainContent">
   <NavLeft></NavLeft>
    <router-view/>
    </div>
  </div>
</template>

<script>
import NavHeader from './components/Top.vue'
import NavLeft from './components/Left.vue'
export default {
  name: 'App'
  ,components:{
      NavHeader,
      NavLeft
    }
}
</script>

<style>
#mainContent{overflow:hidden}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
