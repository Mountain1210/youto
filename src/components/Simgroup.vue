<template>
    <div class="main">
        <div class="mainlist" id="mainContent">
            <div id="subleftContent" style="width:100%">
                <div class="func" id="fnc">
                    <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
                    <el-dialog
                      title="提示"
                      :visible.sync="centerDialogVisible"
                      width="30%"
                      center>
                      <div>
                          <dl>
                              <dt>姓名:{{this.dialogShowData.name}}</dt>
                              <dd>职称:{{this.dialogShowData.que}}</dd>
                              <dd>Number:{{this.dialogShowData.number}}</dd>
                          </dl>
                      </div>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                      </span>
                    </el-dialog>
                    <!-- <Search></Search> --><el-button type="primary" size="small"  @click="centerDialogVisible = true">新建投资组合</el-button>
                    <el-button type="warning" size="small">删除按钮</el-button>
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
                    <el-table :data="this.tableData" stripe align="center" header-align="left" width="100%" :height="tabheight" @cell-click="gsjcfn" :max-height="tabheight">
                        <el-table-column prop="number" align="center" fixed label="序号">
                        </el-table-column>
                        <el-table-column prop="name" fixed label="组合名称">
                        </el-table-column>
                        <el-table-column prop="jjcompany" width="280" align="center" label="操作">
                            <template slot-scope="scope">
                                   <el-button @click="handleClick(scope.row)" type="text" size="small">评价</el-button>
                                   <el-button type="text" size="small">产品配置</el-button>
                                   <el-button @click="handleClick(scope.row)" type="text" size="small">更新业绩</el-button>
                                   <el-button type="text" size="small">调仓</el-button>
                                   <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                                 </template>
                        </el-table-column>
                        <el-table-column prop="work" align="center" label="分析起始时间">
                        </el-table-column>
                        <el-table-column prop="que" align="center" label="投资规模">
                        </el-table-column>
                        <el-table-column prop="background" label="本组合构建日期">
                        </el-table-column>
                        <el-table-column prop="strategy" width="90" label="最后修订日期">
                        </el-table-column>
                        <el-table-column prop="jjnumber" width="120" align="center" label="单位净值">
                        </el-table-column>
                        <el-table-column prop="updatetime" width="140" align="left" label="累计净值">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="年化收益率">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="区间收益率">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="年化波动率">
                        </el-table-column>
                        <el-table-column prop="updatetime" width="140" align="left" label="年化波动率(最近一年)">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="最大回撤率">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="最大回撤率(最近一年)">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="夏普比率">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="Alpha">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="Beta">
                        </el-table-column>

                        <el-table-column prop="updatetime" width="140" align="left" label="VAR5">
                        </el-table-column>

                         <el-table-column prop="updatetime" width="140" align="left" label="CVAR5">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import _ from "lodash"
import {
    mapGetters, mapActions
}
from "vuex"
import Slide from "./slide.vue"
import Search from "./search.vue"
import Marque from "./unit/marquee.vue"
export default {
    name: 'SimGroup',
    data() {
        return {
            tabheight: document.documentElement.clientHeight - 125,
            tabht: document.documentElement.clientHeight - 125,
            subleftw: "",
            tableData:[],
            centerDialogVisible:false,
            dialogShowData:{}

        }
    },
    components: {
        Slide, Search
    },
    computed: mapGetters(['searchJSON', 'subsnump', 'dialogVisible','rightNavArray'])
        // ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync","customCompFunc","handleClose","isopen"])
        ,
    methods: {
        sublibtn: function() {
            this.$store.dispatch("sublibtn")
        },
        handleClick(row) {
         this.dialogShowData.background=row.background;
          this.dialogShowData.jjcompany=row.jjcompany;
           this.dialogShowData.jjnumber=row.jjnumber;
            this.dialogShowData.name=row.name;
             this.dialogShowData.number=row.number;
              this.dialogShowData.que=row.que;

              this.centerDialogVisible = true

      },

        // getdocumentHeight: function() {
        //     this.$store.dispatch("getdocumentHeight")
        // },

        handleClose: function() {
            this.$store.dispatch("handleClose")
        },
        isopen: function(num) {
            this.$store.dispatch("isopen", num)
        },
        gsjcfn: function(row, column, cell, event) {
            console.log(row.number)
            console.log(column.label)
            if (column.label == "公司简称") {
                this.$router.push('/SmData/detial/'+ row.number)
            }
            if (column.label == "注册资本(万)") {
                this.$router.push('/CompenyDetial/' + row.number);
            }
        }
    },
    beforeCreate: function() {
    		let that=this;
    	    this.$http.get('/static/data/smjjData/jjjlData.html').then(function(res) {

    	        if (res.status === 200) {
    	            /*这里做处理*/
    	            // var data=JSON.parse(res.data)
    	            console.log(res.data)
    	            console.log(_.isPlainObject(res.data))
    	            that.tableData=res.data;
    	        }
    	    })
    	
    },
    mounted: function() {
        // this.getdocumentHeight();

    },
    // created() {
    //     let that = this;
    //     this.$store.dispatch("getSubLeftw").then(function(getWidth) {
    //         that.subleftw = getWidth;
    //     });
    // }
}
</script>
<style scoped>
.sf .iconfont {
    padding-right: 8px
}
.func{text-align: left}
</style>
