<template>
<div class="main">

<div class="mainlist">
<div id="subleftContent">
<div class="func">
<el-button type="text" @click="isopen(1)">点击打开 Dialog</el-button>
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
</el-dialog>
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

<v-table is-horizontal-resize
                 style="width:100%"
                 :columns="searchJSON.columns"
                 is-vertical-resize=true
                 :table-data="searchJSON.tableData"
                 @on-custom-comp="customCompFunc"
                 ></v-table>
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
     rightNavArray:[{name:"高级检索",url:"/SmData/Gjjs"},{name:"我的产品池",url:"/SmData/Wdcpc"},{name:"对比库",url:"/SmData/Dbk"},{name:"产品快速预览",url:"/SmData/Cpksyl"},]
     }
  }
 ,components:{
      Slide,Search
    }
  ,computed:mapGetters(['searchJSON','subsnump','dialogVisible'])
  ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync","customCompFunc","handleClose","isopen"])
  ,mounted: function () {
    this.getdocumentHeight();}
  ,created(){

  }
}

//下面组件必须写在这个js 里面

 Vue.component('tableoperation',{
        template:`<span>
        <a href="" @click.stop.prevent="update(rowData,index)">{{editxt}}</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">{{deletxt}}</a>
        </span>`,
        props:{                
                    rowData:{
                        type:Object
                    },
                    field:{
                        type:String
                    },
                    index:{
                        type:Number
                    },
                    editxt:{
                      type:String
                    },
                    deletxt:{
                      type:String
                    }
            },
        methods:{
            update(){

               // 参数根据业务场景随意构造
               let params = {type:'edit',index:this.index,rowData:this.rowData};
               this.$emit('on-custom-comp',params);
            },

            deleteRow(){

                // 参数根据业务场景随意构造
                let params = {type:'delete',index:this.index};
                this.$emit('on-custom-comp',params);

            }
        }
    })
</script>

<style scoped>

.func{overflow:hidden; background-color:#fff; padding:10px; margin-top:5px}
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
</style>