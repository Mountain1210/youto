<template>
<div class="main">
<div class="mainlist">

<div id="subleftContent" :style="{width:subleftw,height:tabheight}">  
  <div class="func "><Search></Search><FuncbtnTime></FuncbtnTime></div>
  <div id="diffContent" class="scrollContent" :style="{width:subleftws,height:tabsubheight}">
    <div class="diffMain">
      <Echart  :ArrayData='["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]' :NumData='[5, 20, 36, 10, 10, 20]'></Echart>
      <Difftable></Difftable>
      <Difftable></Difftable>

    </div>
  </div>
</div>
<div id="subrightContent">
<Slide :sublistArray="rightNavArray"  @li="sublibtn($event)" :subsnum="subsnump"></Slide>
</div>
</div>
</div>
</template>
<style scoped>
.diffMain{width:100%;}
#subleftContent{overflow: hidden}
.echars{border: 1px solid #ccc; width:90%; margin:0 auto}
</style>
<script>
import {mapGetters,mapActions} from "vuex"
import Search from "./search.vue"
import FuncbtnTime from "./unit/FuncbtnTime.vue"
import Echart from "./unit/echart.vue"
import Difftable from "./unit/difftable.vue"
import Slide from "./slide.vue"
import Difftablist from "./unit/difftablist.vue"
export default{
      name: 'Diff',
      data () {
        return {
           subleftw:""
          ,subleftws:""
          ,tabsubheight:(parseInt(document.documentElement.clientHeight))-130+"px"
          ,tabheight:(parseInt(document.documentElement.clientHeight))-85+"px"
          ,rightNavArray:[{name:"我产品池",url:"/diff/difftablist"},{name:"对比库",url:"Dbk"}]
        }

     },
     components:{
       Search,FuncbtnTime,Echart,Difftable,Slide
    }
  ,mounted: function () {this.$store.dispatch("getdocumentHeight");}
  ,methods:{

  }
   ,beforeCreate() {
      let that=this;
      this.$store.dispatch("getSubLeftw").then(function (getWidth) {
      that.subleftw=getWidth;
      that.subleftws=(parseInt(getWidth)+20)+'px';
    });
  }
  ,watch:{
      $route(to){
        var path=to.path.substring(1);
      }
    }
  ,created(){
  
    
  }
}
</script>

