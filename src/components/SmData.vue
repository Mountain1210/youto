<template>
<div class="main">

<div class="mainlist">
<div id="subleftcontent">
<div class="func">
<el-button type="text" @click="isopen(1)">点击打开 dialog</el-button>
<el-dialog
  title="提示"
  :visible.sync="dialogvisible"
  width="75%"
  height="500"
  :before-close="handleclose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="isopen(0)">取 消</el-button>
    <el-button type="primary" @click="isopen(2)">确 定</el-button>
  </span>
</el-dialog>
<search></search>
<div class="showmap" ><span class="iconfont icon-earth"></span><div class="maptxt">查看公司布图</div></div>
<div style="display:inline;float:left; padding-top:2px; margin-left:16px"><marquee scrolldelay="100">滚动信息滚动信息滚动信息滚动信息滚动信息</marquee></div>
<div class="sf" style="float:right; padding-right:8px; font-size:18px">
<span class="iconfont icon-category"></span>
<span class="iconfont icon-emailfilling" style="color:rgba(79, 159, 222, 1)"></span>
<span></span>
</div>
</div>
<!--<div class="subsmain" @click="clickodd"> 现在的数字为：{{count}},它现在是{{getodd}},===={{subsnump}}</div>-->

<!-- <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="searchjson.columns"
                 is-vertical-resize=true
                 :table-data="searchjson.tabledata"
                 @on-custom-comp="customcompfunc"
                 ></v-table> -->

<div style="width:99.9%;  max-width:1200px">
  <el-table
    :data="searchjson.tabledata"
    stripe
    align="left"
    @cell-click="gsjcfn"
    :max-height="tabheight"
    :style='{width:"auto"}'>

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
<div id="subrightcontent">
<slide :sublistarray="rightnavarray"  @li="sublibtn($event)" :subsnum="subsnump"></slide>
</div>
</div>
</div>
</template>

<script>
import vue from 'vue'
import {mapgetters,mapactions} from "vuex"
import slide from "./slide.vue"
import search from "./search.vue"

export default {
  name: 'smdata',
  data () {
    return {
     rightnavarray:[{name:"高级检索",url:"/smdata/gjjs"},{name:"我的产品池",url:"/smdata/wdcpc"},{name:"对比库",url:"/smdata/dbk"},{name:"产品快速预览",url:"/smdata/cpksyl"}]
     ,tabheight:document.documentelement.clientheight-145
     }
  }
 ,components:{
      slide,search
    }
  ,computed:mapgetters(['searchjson','subsnump','dialogvisible','tabheight'])
  // ,methods:mapactions(['sublibtn',"getdocumentheight","getcurrentmenu","clickodd","clickasync","customcompfunc","handleclose","isopen"])
  ,methods:{
    sublibtn:function(){
      this.$store.dispatch("sublibtn")
    },
    getdocumentheight:function(){
      this.$store.dispatch("getdocumentheight")
    }
    ,handleclose:function(){
      this.$store.dispatch("handleclose")
    }
    ,isopen:function(num){
      this.$store.dispatch("isopen",num)
    }
    ,gsjcfn:function(row, column, cell, event){
      console.log(row.number)
      console.log(column.label)
      if(column.label=="公司简称"){
        // this.$router.push('/urltabview/'+row.number)
        this.$router.push('/compenydetial')
      }
       if(column.label=="注册资本(万)"){
        this.$router.push('/compenydetial/'+row.number)
        // this.$router.push('/urltabview')
      }
    }
  }
  ,mounted: function () {
    this.getdocumentheight();
  }
  ,created(){

  }
}
</script>

<style scoped>

.func{overflow:hidden; background-color:#fff; padding:10px; margin-top:5px}
.sf .iconfont{padding-right:8px}
.showmap{float:left; padding:3px 4px 2px 4px; margin-left:16px; background-color:rgba(79, 159, 222, 1); color:#fff;border-radius: 5px; }
.showmap .maptxt{font-size:12px; padding-left:8px; font-weight:normal;float:right;}
.main{margin-left:220px; margin-top:0px;}
#subleftcontent{ background-color:#fff}
.main .mainlist {overflow:hidden}
.main .mainlist #subleftcontent{
    width:800px;
    display: table-cell;
}
.main .mainlist #subrightcontent{
    display: table-cell;
    width:34.8%;
    min-width:350px;
    border-left:1px solid #ccc;
    background-color:#fff;
    vertical-align: top;
}
.main .mainlist{display: table; width:100%}
</style>