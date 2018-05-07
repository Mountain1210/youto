<template>
<div class="main">

<div class="mainlist">
<div id="subleftContent" :style="{width:subleftw}">
<div class="func">
<Search></Search>
<div class="showmap" ><span class="iconfont icon-earth"></span><div class="maptxt">查看公司布图</div></div>
<div style="display:inline;float:left; padding-top:2px; margin-left:16px"><marquee scrolldelay="100">滚动信息滚动信息滚动信息滚动信息滚动信息</marquee></div>
<div class="sf" style="float:right; padding-right:8px; font-size:18px">
<span class="iconfont icon-category"></span>
<span class="iconfont icon-emailfilling" style="color:rgba(79, 159, 222, 1)"></span>
<span></span>
</div>
</div>
<!-- <div class="subsmain" @click="clickOdd"> 公募现在的数字为：{{count}},它现在是{{getOdd}},===={{subsnump}}</div> -->
<div>
  <el-table
    :data="searchJSON.tableData"
    stripe
    align="left"
    @cell-click="gsjcfn"
    :max-height="tabheight"
   >

    <el-table-column
      prop="number"
      fixed
      label="序号"
      width="60">
    </el-table-column>


    <el-table-column
      prop="gsjc"
      fixed
      label="公司简称"
    >
    </el-table-column>

    <el-table-column
      prop="zczb"
      width="120"
      label="注册资本(万)">
    </el-table-column>

    <el-table-column
      prop="sjbs"
      label="实缴比例">
    </el-table-column>
    <el-table-column
      prop="glgm"
      label="管理规模">
    </el-table-column>
    <el-table-column
      prop="ygrs"
      label="员工人数">
    </el-table-column>
    <el-table-column
      prop="jzrq"
      width="120"
      label="截至日期">
    </el-table-column>
    <el-table-column
      prop="clrq"
      label="成立日期">
    </el-table-column>
    <el-table-column
      prop="djrq"
      label="登记日期">
    </el-table-column>
    <el-table-column
      prop="ishy"
      label="是否会员">
    </el-table-column>
    <el-table-column
      prop="pronum"
      label="产品数量">
    </el-table-column>
    <el-table-column
      prop="cominfo"
      label="公司介绍">
    </el-table-column>
    <el-table-column
      prop="jljl"
      label="尽量记录">
    </el-table-column>
    <el-table-column
      prop="address"
      label="办公地址">
    </el-table-column>
    <el-table-column
      prop="operat"
      label="操作">
    </el-table-column>

  </el-table>
  </div>
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
import Search from "./search.vue"
export default {
  name: 'GmData',
  data () {
    return {
      tabheight:document.documentElement.clientHeight-135
     ,tabht:document.documentElement.clientHeight-135
     ,subleftw:""
     ,rightNavArray:[{name:"高级检索",url:"/GmData/Gjjs"},{name:"我的产品池",url:"/GmData/Wdcpc"},{name:"对比库",url:"/GmData/Dbk"},{name:"产品快速预览",url:"/GmData/Cpksyl"},]

          }
  }
 ,components:{
      Slide,Search
    }
  ,computed:mapGetters(['searchJSON','count','getOdd','subsnump'])
  // ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd:","clickAsync"])放在当前的
  ,methods:{
    clickOdd:function(){
      this.$store.dispatch("clickOdd");
    }
    ,gsjcfn:function(row, column, cell, event){
      console.log(row.number)
      console.log(column.label)
      if(column.label=="公司简称"){
        this.$router.push('/CompenyDetial')
      }
       if(column.label=="注册资本(万)"){
        this.$router.push('/CompenyDetial/'+row.number);
      }
    }
  }
  ,mounted: function () {
    this.$store.dispatch("getdocumentHeight");//这里可以用dispatch来触发action中的方法
  }
 /* ,watch:{
      $route(to){
        var path=to.path.substring(1);
        this.getcurrentMenu(path)
      }
    }*/
  ,created(){
    let that=this;
    this.$store.dispatch("getSubLeftw").then(function (getWidth) {
      that.subleftw=getWidth;
    });

  }
}
</script>

<style scoped>

.func{overflow:hidden; background-color:#fff; padding:10px; margin-top:5px}
.sf .iconfont{padding-right:8px}
.showmap{float:left; padding:3px 4px 2px 4px; margin-left:16px; background-color:rgba(79, 159, 222, 1); color:#fff;border-radius: 5px; }
.showmap .maptxt{font-size:12px; padding-left:8px; font-weight:normal;float:right;}


.main{margin-left:220px; margin-top:0px;}
/* #subleftContent{ background-color:#fff}

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
.main .mainlist{display: table; width:100%} */
</style>