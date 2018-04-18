<template>
<div class="main">

<div class="mainlist">
<div id="subleftContent">
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
<div class="subsmain" @click="clickOdd"> 现在的数字为：{{count}},它现在是{{getOdd}},===={{subsnump}}</div>

<v-table is-horizontal-resize
                 style="width:100%"
                 :columns="columns"
                 is-vertical-resize=true
                 :table-data="tableData"
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
   ,tableData: [
   {"name":"赵伟1","tel":"<a href='#'>156*****1987</a>","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟2","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟3","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟4","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟5","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟6","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟7","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟8","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟9","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                             {"name":"赵伟1","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟2","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟3","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟4","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟5","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟6","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟7","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟8","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟9","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥","editxt":"AAA","deletxt":"删除"},
                    ],
                    columns: [
                           {field: 'name', title:'序号', width: 50, titleAlign: 'center',columnAlign:'center', isFrozen: true},
                           {field: 'tel', title: '公司简称', width: 250, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'hobby', title: '注册资本(万)', width: 120, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'address', title: '实缴比例', width: 80, titleAlign: 'center',columnAlign:'left',isResize:true},
                           {field: 'glgm', title: '管理规模', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'ygrs', title: '员工人数', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'jzrq', title: '截至日期', width: 160, titleAlign: 'center',columnAlign:'left',isResize:true},
                            {field: 'clrq', title:'成立日期', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'djrq', title: '登记日期', width: 260, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'sfhy', title: '是否会员', width: 40, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'cpsl', title: '产品数量', width: 80, titleAlign: 'center',columnAlign:'left',isResize:true},
                           {field: 'gsjs', title: '公司介绍', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'jljl', title: '尽量记录', width: 380, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'bgdz', title: '办公地址', width: 430, titleAlign: 'center',columnAlign:'left',isResize:true},
                           {field: 'bgdz2', title: '操作', width: 120, titleAlign: 'center',columnAlign:'left',isResize:true,componentName:"tableoperation"}
                    ]
          }
  }
 ,components:{
      Slide,Search
    }
  ,computed:mapGetters(['count','getOdd','subsnump'])
  ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync","customCompFunc"])
  ,mounted: function () {this.getdocumentHeight();}
 /* ,watch:{
      $route(to){
        var path=to.path.substring(1);
        this.getcurrentMenu(path)
      }
    }*/
  ,created(){

  }
}




//下面组件必须写在这个js 里面

 Vue.component('tableoperation',{
        template:`<span>
        <a href="" @click.stop.prevent="update(rowData,index)">{{editxt}}111</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">{{deletxt}}222</a>
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