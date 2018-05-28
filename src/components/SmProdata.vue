<template>
    <div class="main">
        <div class="mainlist" id="mainContent">
            <div id="subleftContent" style="width:100%">
                <div class="func" id="fnc">
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
                        <el-table-column prop="name" fixed label="姓名">
                        </el-table-column>
                        <el-table-column prop="jjcompany" width="120" align="center" label="基金公司">
                        </el-table-column>
                        <el-table-column prop="work" align="center" label="现任职位">
                        </el-table-column>
                        <el-table-column prop="que" align="center" label="学历">
                        </el-table-column>
                        <el-table-column prop="background" label="背景">
                        </el-table-column>
                        <el-table-column prop="strategy" width="90" label="擅长策略">
                        </el-table-column>
                        <el-table-column prop="jjnumber" width="120" align="center" label="基金数量">
                        </el-table-column>
                        <el-table-column prop="updatetime" width="140" align="left" label="更新截至日期">
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
    name: 'SmProdata',
    data() {
        return {
            rightNavArray: [{
                name: "高级检索",
                url: "/SmData/Gjjs"
            }, {
                name: "我的产品池",
                url: "/SmData/Wdcpc"
            }, {
                name: "对比库",
                url: "/SmData/Dbk"
            }, {
                name: "产品快速预览",
                url: "/SmData/Cpksyl"
            }],
            tabheight: document.documentElement.clientHeight - 125,
            tabht: document.documentElement.clientHeight - 125,
            subleftw: "",
            tableData:[]
        }
    },
    components: {
        Slide, Search
    },
    computed: mapGetters(['searchJSON', 'subsnump', 'dialogVisible'])
        // ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync","customCompFunc","handleClose","isopen"])
        ,
    methods: {
        sublibtn: function() {
            this.$store.dispatch("sublibtn")
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
</style>
