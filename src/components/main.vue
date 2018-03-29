<template>
<div class="main">

<div class="mainlist">
<div id="subleftContent">
<div class="func">
<div id="searchContent">
<p class="ct titxt">关键字:</p>
<p class="ct searchinput"><input type="text" name="" value="" placeholder="搜索的内容"><button type="button">搜索</button></p>
</div>
<div class="showmap" ><span class="iconfont icon-earth"></span><div class="maptxt">查看公司布图</div></div>
<div style="display:inline;float:left; padding-top:2px; margin-left:16px"><marquee scrolldelay="100">滚动信息滚动信息滚动信息滚动信息滚动信息</marquee></div>
<div class="sf" style="float:right; padding-right:8px; font-size:18px">
<span class="iconfont icon-category"></span>
<span class="iconfont icon-emailfilling" style="color:rgba(79, 159, 222, 1)"></span>
<span></span>
</div>
</div>
<!--<div class="subsmain" @click="clickOdd"> 现在的数字为：{{count}},它现在是{{getOdd}},===={{subsnump}}</div>-->
</div>
<div id="subrightContent">
<Slide :sublistArray="rightNavArray"  @li="sublibtn($event)" :subsnum="subsnump"></Slide>
</div>
</div>
</div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import Slide from "./slide.vue"
export default {
  name: 'Main',
  data () {
    return {
    rightNavArray:[{name:"高级检索",url:"Gjjs"},{name:"我的产品池",url:"wdcpc"},{name:"对比库",url:"dbk"},{name:"产品快速预览",url:"cpksyl"},]
    }
  }
 ,components:{
      Slide
    }
  ,computed:mapGetters(['count','getOdd','subsnump'])
  ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync"])
  ,mounted: function () {this.getdocumentHeight();this.getcurrentMenu();}
  ,watch:{
      $route(to){
        var path=to.path.substring(1);
        this.getcurrentMenu(path)
      }
    }
}



</script>

<style scoped>
#searchContent {overflow:hidden; float:left; padding:2px 0}
#searchContent input,#searchContent button{border:none; padding:2px 4px}
.func{overflow:hidden; background-color:#fff; padding:10px; margin-top:5px}
.sf .iconfont{padding-right:8px}
.showmap{float:left; padding:3px 4px 2px 4px; margin-left:16px; background-color:rgba(79, 159, 222, 1); color:#fff;border-radius: 5px; }
.showmap .maptxt{font-size:12px; padding-left:8px; font-weight:normal;float:right;}
#searchContent  .searchinput{border:1px solid #ccc}
#searchContent button{background-color:rgba(79, 159, 222, 1); color:#fff}
#subleftContent .ct{float:left; color:#000}
#subleftContent .titxt{margin-right:8px; padding-top:2px}
.main{margin-left:220px; margin-top:0px;}
#subleftContent{ background-color:#fff}
.subsmain{}
.main .mainlist {overflow:hidden}
.main .mainlist #subleftContent{
    float:left;
    width:65%;
}
.main .mainlist #subrightContent{
    float:left;
    width:34.8%;
    min-width:350px;
    border-left:1px solid #ccc;
    background-color:#fff;
}
</style>