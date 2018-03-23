<template>
  <div class=" mainContent">

  </div>
</template>

<script>
export default {
  name: 'SmData',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
            this.getdocumentHeight();
        },
  methods:{
    getdocumentHeight(){
            document.getElementById("leftContent").style.height=document.documentElement.clientHeight-130+"px";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.smdataContent{}
</style>
