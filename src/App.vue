<template>
  <div id="app">
  <NavHeader></NavHeader>
  <div id="mainContent">

    <router-view/>
    </div>
  </div>
</template>

<script>
import NavHeader from './components/Top.vue'
import NavLeft from './components/Left.vue'
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'App'
  ,components:{
      NavHeader,
      NavLeft
    }
/* ,computed:mapGetters([
      'subsnum',
      'loading',
      'footerShow'
    ])
  ,methods:mapActions([
      'sublibtn',"deincrement","clickOdd","clickAsync"
  ])*/
}
</script>

<style>
#mainContent{overflow:hidden; background-color:#ccc}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
