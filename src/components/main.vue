<template>
<div class="main">

<div class="mainlist">
<div id="subleftContent">
<div class="func">搜索</div>
<div>1111</div>
</div>
<div id="subrightContent">2222</div>
</div>
</div>
</template>

<script>

export default {
  name: 'Top',
  data () {
    return {
     
    }
  },
    mounted: function () {
            this.getdocumentHeight();

         
        },
    watch:{
      /*$route(to){
        var path=to.path.substring(1);
        this.getcurrentMenu(path)
      }*/
    },
  methods:{
    getdocumentHeight(){
            document.getElementById("subrightContent").style.height=document.documentElement.clientHeight-130+40+"px";
    },
    getcurrentMenu(path){
    /*
    var _this=this;
     if(path=="SmData"){       
       this.$http.get('/src/data/menuData/MenuData.html').then(function(res){
         console.log(res);          
       }).catch(function(err){
         console.log('文章详细页面:',err);
       })
     }

     */
    }
  }
}



</script>

<style scoped>
.main{margin-left:230px; margin-top:10px}

.main .mainlist {overflow:hidden}
.main .mainlist #subleftContent{
    float:left;
    width:75%;
}
.main .mainlist #subrightContent{
    float:left;
    width:24%;
    border-left:1px solid #ff0000;
}
</style>