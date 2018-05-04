<template>
<div class="main">
<div class="mainlist">
<div class="func " style="background-color:#fff"><Search></Search></div>
<div id="subleftContent">
<div class="kuaiMain">
  <ul class="indexul">
    <li>
      <Inxone title="私募全市场数据">
        <div slot="itemMain">
          <img src="../assets/images/smqscsj.png">
          <dl>
            <dt>私募全市场数据</dt>
            <dd>中天嘉华有限公司</dd>
          </dl>
        </div>

      </Inxone>
    </li>
     <li>
      <Inxone title="思慕TOP10000">
        <div slot="itemMain">
          <img src="../assets/images/top.png">
          <dl>
            <dt>私募全市场数据</dt>
            <dd>中天嘉华有限公司</dd>
          </dl>
        </div>

      </Inxone>
    </li>
     <li>
      <Inxone title="公募基金">
        <div slot="itemMain">
          <img src="../assets/images/gmjs.png">
          <dl>
            <dt>私募全市场数据</dt>
            <dd>中天嘉华有限公司</dd>
          </dl>
        </div>

      </Inxone>
    </li>
     <li>
      <Inxone title="创建我的观察池">
        <div slot="itemMain">
          <img src="../assets/images/cjwdgcc.png">
          <dl>
            <dt>私募全市场数据</dt>
            <dd>中天嘉华有限公司</dd>
          </dl>
        </div>

      </Inxone>
    </li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

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
  ,mounted: function () {this.getdocumentHeight();}
  ,watch:{
      $route(to){
        var path=to.path.substring(1);
      }
    }
}
</script>

<style scoped>
.kuaiMain .indexul li{width:48.5%; float: left; margin-left:8px; overflow: hidden}

.kuaiMain .indexul li img{float:left; width:100px; height: 100px}
.kuaiMain .indexul li dt{font-size:14px; font-weight: bold}
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