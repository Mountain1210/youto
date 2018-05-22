<template>
    <div class="main">
        <div class="mainlist" id="mainContent">
            <div id="subleftContent" :style="{width:subleftw}">
                <div class="func" id="fnc">
                   <!--  <el-button type="text" @click="isopen(1)">点击打开 Dialog</el-button> -->
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
                    <div class="showmap"><span class="iconfont icon-earth"></span>
                        <div class="maptxt">查看公司布图</div>
                    </div>
                    <div class="marqueecla">
                        <marquee scrolldelay="100">滚动信息滚动信息滚动信息滚动信息滚动信息</marquee>
                    </div>
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
                    <el-table :data="searchJSON.tableData" stripe align="center" header-align="left" :height="tabheight" @cell-click="gsjcfn" :max-height="tabheight">
                        <el-table-column prop="Number" align="center" fixed label="序号">
                        </el-table-column>
                        <el-table-column prop="Proname" fixed label="产品简称">
                        </el-table-column>
                        <el-table-column prop="Operation" width="120" align="center" label="操作">
                        </el-table-column>
                        <el-table-column prop="Practiceratio" align="center" label="实缴管理人">
                        </el-table-column>
                        <el-table-column prop="Managsize" align="center" label="投资策略">
                        </el-table-column>
                        <el-table-column prop="Empnum" label="成立日期">
                        </el-table-column>
                        <el-table-column prop="Updatedate" width="90" label="更新日期">
                        </el-table-column>
                        <el-table-column prop="Unitvalue" align="center" label="单位净值">
                        </el-table-column>
                        <el-table-column prop="Totalval" align="center" label="累计净值">
                        </el-table-column>
                        <el-table-column prop="Yearincome" align="center" label="年化收益率">
                        </el-table-column>
                        <el-table-column prop="Intervalincomeonyear" align="center" label="区间收益率（今年以来）">
                        </el-table-column>
                        <el-table-column prop="Intervaloneyear" label="区间收益率（最近一年）">
                        </el-table-column>
                        <el-table-column prop="Yearbd" align="center" label="年化波动率">
                        </el-table-column>
                        <el-table-column prop="Yearbdone" label="年化波动率（最近一年）" width="360">
                        </el-table-column>                       
                        <el-table-column prop="Saxhc" label="最大回撤" width="360">
                        </el-table-column>
                        <el-table-column prop="Saxhcone" label="最大回撤(最近一年)" width="360">
                        </el-table-column>
                        <el-table-column prop="Sharpbl" label="夏普比率" width="360">
                        </el-table-column>
                        <el-table-column prop="Sharpblone" label="夏普比率(最近一年)" width="360">
                        </el-table-column>
                        <el-table-column prop="Sturze" label="斯图泽指数" width="360">
                        </el-table-column>
                        <el-table-column prop="Sortinobl" label="索提诺比率" width="360">
                        </el-table-column>
                        <el-table-column prop="Kamabl" label="卡玛比率" width="360">
                        </el-table-column>
                        <el-table-column prop="Alpha" label="Alpha" width="360">
                        </el-table-column>
                        <el-table-column prop="infobl" label="信息比率" width="360">
                        </el-table-column>
                        <el-table-column prop="Treynorbl" label="特雷诺比率" width="360">
                        </el-table-column>
                        <el-table-column prop="Skewness" label="偏度">
                        </el-table-column>
                        <el-table-column prop="Kurto" label="峰度">
                        </el-table-column>
                        <el-table-column prop="VAR5" label="VAR5">
                        </el-table-column>
                        <el-table-column prop="CVAR5" label="CVAR5">
                        </el-table-column>
                        <el-table-column prop="worthnum" label="净值数目">
                        </el-table-column>
                        <el-table-column prop="wayStyle" label="通道类型">
                        </el-table-column>
                        <el-table-column prop="Lenth" label="长度">
                        </el-table-column>
                        <el-table-column prop="Cyc" label="更新周期">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div id="subrightContent">
                <Slide :sublistArray="rightNavArray" @li="sublibtn($event)" :subsnum="subsnump"></Slide>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {
    mapGetters, mapActions
}
from "vuex"
import Slide from "./slide.vue"
import Search from "./search.vue"
import Marque from "./unit/marquee.vue"
export default {
    name: 'SmData',
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
            subleftw: ""
        }
    },
    components: {
        Slide, Search
    },
    computed: mapGetters(['searchJSON', 'subsnump', 'dialogVisible']),
    methods: {
        sublibtn: function() {
            this.$store.dispatch("sublibtn")
        },
        getdocumentHeight: function() {
            this.$store.dispatch("getdocumentHeight")
        },
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

    },
    mounted: function() {
        this.getdocumentHeight();
    },
    created() {
        let that = this;
        this.$store.dispatch("getSubLeftw").then(function(getWidth) {
            that.subleftw = getWidth;
        });
    }
}
</script>
<style scoped>
.sf .iconfont {
    padding-right: 8px
}
</style>
