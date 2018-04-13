<template>
<div class="main">
<div class="mainlist">
<div class="func " style="background-color:#fff"><Search></Search></div>
<div id="subleftContent">
<div class="kuai">
<Inxone title="常用站点"></Inxone>
</div>
</div>
<div id="subrightContent">
<Inxone title="私募TOP1000联盟"  type="lianmeng"></Inxone>
<Inxone title="常用站点" type="web"></Inxone>
</div>
</div>
</div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import Search from "./search.vue"
import Inxone from "./unit/indexOne.vue"
export default{
      name: 'Index',
      data () {
        return {

        }

     },
     components:{
       Search,Inxone
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

.func{overflow:hidden; background-color:#fff; padding:10px;}
.sf .iconfont{padding-right:8px}
.showmap{float:left; padding:3px 4px 2px 4px; margin-left:16px; background-color:rgba(79, 159, 222, 1); color:#fff;border-radius: 5px; }
.showmap .maptxt{font-size:12px; padding-left:8px; font-weight:normal;float:right;}


.main{margin-left:220px; margin-top:0px;}
#subleftContent{ background-color:#fff}

.main .mainlist {overflow:hidden}
.main .mainlist #subleftContent{
    float:left;
    width:100%;
    display: table-cell;
}

.main .mainlist #subrightContent{
    display: table-cell;
    width:34.8%;
    min-width:350px;
    border-left:1px solid #ccc;
    background-color:#fff;
        vertical-align: top;
}
.main .mainlist{display: table; width:100%}

#subrightContent{background-color:#fff}
.mainlist{background-color:#fff}
</style>