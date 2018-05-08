<template>
<div class="main">

<div class="mainlist" id="mainContent">
<div id="subleftContent" :style="{width:subleftw}">
<div class="func" id="fnc">
<!-- <el-button type="text" @click="isopen(1)">点击打开 Dialog</el-button>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="75%"
  height="500"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="isopen(0)">取 消</el-button>
    <el-button type="primary" @click="isopen(2)">确 定</el-button>
  </span>
</el-dialog> -->
<Search></Search>
<div class="showmap" ><span class="iconfont icon-earth"></span><div class="maptxt">查看公司布图</div></div>
<div style="display:inline;float:left; padding-top:2px; margin-left:16px"><marquee scrolldelay="100">滚动信息滚动信息滚动信息滚动信息滚动信息</marquee></div>
<div class="sf" style="float:right; padding-right:8px; font-size:18px">
<span class="iconfont icon-category"></span>
<span class="iconfont icon-emailfilling" style="color:rgba(79, 159, 222, 1)"></span>
<span></span>
</div>
</div>
<!--<div class="subsmain" @click="clickOdd"> 现在的数字为：{{count}},它现在是{{getOdd}},===={{subsnump}}</div>-->

<!-- <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="searchJSON.columns"
                 is-vertical-resize=true
                 :table-data="searchJSON.tableData"
                 @on-custom-comp="customCompFunc"
                 ></v-table> -->

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
import Vue from 'vue'
import {mapGetters,mapActions} from "vuex"
import Slide from "./slide.vue"
import Search from "./search.vue"
export default {
  name: 'SmData',
  data () {
    return {
     rightNavArray:[{name:"高级检索",url:"/SmData/Gjjs"},{name:"我的产品池",url:"/SmData/Wdcpc"},{name:"对比库",url:"/SmData/Dbk"},{name:"产品快速预览",url:"/SmData/Cpksyl"}]
     ,tabheight:document.documentElement.clientHeight-135
     ,tabht:document.documentElement.clientHeight-135
     ,subleftw:""
     }
  }
  ,components:{
      Slide,Search
    }
  ,computed:mapGetters(['searchJSON','subsnump','dialogVisible'])
  // ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync","customCompFunc","handleClose","isopen"])
  ,methods:{
    sublibtn:function(){
      this.$store.dispatch("sublibtn")
    },
    getdocumentHeight:function(){
      this.$store.dispatch("getdocumentHeight")
    }
    ,handleClose:function(){
      this.$store.dispatch("handleClose")
    }
    ,isopen:function(num){
      this.$store.dispatch("isopen",num)
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
  ,beforeCreate:function(){

  }
  ,mounted: function () {
    this.getdocumentHeight();
  }
  ,created(){
    let that=this;
    this.$store.dispatch("getSubLeftw").then(function (getWidth) {
      that.subleftw=getWidth;
    });

  }
}
</script>

<style scoped>
.func{overflow:hidden; background-color:#fff; padding:10px; margin-top:5px; border-bottom:2px solid #f0f0f0;}
.sf .iconfont{padding-right:8px}
.showmap{float:left; padding:3px 4px 2px 4px; margin-left:16px; background-color:rgba(79, 159, 222, 1); color:#fff;border-radius: 5px; }
.showmap .maptxt{font-size:12px; padding-left:8px; font-weight:normal;float:right;}


</style>