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
                      <!-- 这里需要一个正确的百度ak才能正常使用 -->
                      <div id="allmap">怎么不出现</div>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                      </span>
                    </el-dialog>
                    <Search></Search>
                    <div class="showmap"><span class="iconfont icon-earth"></span>
                        <div class="maptxt" @click="showDilog()">查看公司布图</div>
                    </div>
                    <div class="marqueecla">
                        <marquee scrolldelay="100">{{this.rightShow}}</marquee>
                    </div>
                    <Jsbtn @showorhide="preview()"></Jsbtn>
                </div>
                <!-- <div class="subsmain" @click="clickOdd"> 现在的数字为：{{count}},它现在是{{getOdd}},===={{subsnump}}</div>-->
                <!-- <v-table is-horizontal-resize
                 style="width:100%"
                 :columns="searchJSON.columns"
                 is-vertical-resize=true
                 :table-data="searchJSON.tableData"
                 @on-custom-comp="customCompFunc"
                 ></v-table> 
                -->
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
            <div id="subrightContent" v-show="rightShow">
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
import Jsbtn from "./unit/jsbtn.vue"
import BMap from 'BMap'  
export default {
    name: 'SmPro',
    data() {
        return {
            tabheight: document.documentElement.clientHeight - 125,
            tabht: document.documentElement.clientHeight - 125,
            subleftw: "",
            dialogVisible:false
        }
    },
    components: {
        Slide, Search,Jsbtn
    },
    computed: mapGetters(['searchJSON', 'subsnump','rightNavArray','rightShow']),
    methods: {
        ready: function () {
            var map = new BMap.Map('allmap')  
            map.enableScrollWheelZoom(true)  
            console.log(map)  
        
            var localSearch = new BMap.LocalSearch(map)  
            // localSearch.enableAutoViewport() // 允许自动调节窗体大小  
            map.clearOverlays() // 清空原来的标注  
            localSearch.setSearchCompleteCallback(function (searchResult) {  
              var poi = searchResult.getPoi(0)  
              map.centerAndZoom(poi.point, 20)  
              var point = new BMap.Point(poi.point.lng, poi.point.lat)  
              var marker = new BMap.Marker(point) // 创建标注，为要查询的地方对应的经纬度  
              map.addOverlay(marker)  
            })  
            localSearch.search(this.$route.params.addr)  
          },  
          preview:function(){
            this.$store.dispatch("preview")
          },
        sublibtn: function() {
            this.$store.dispatch("sublibtn")
        },
        getdocumentHeight: function() {
            this.$store.dispatch("getdocumentHeight")
        },
        handleClose: function() {
            // this.$store.dispatch("handleClose")
            this.dialogVisible=false
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
        },
        showDilog(){
            this.dialogVisible=true
        }
    },
    beforeCreate: function() {

    },
    mounted: function() {
        this.getdocumentHeight();
        this.ready();
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
