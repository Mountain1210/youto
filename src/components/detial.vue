<style scoped>
.detialContent{
	margin-left: 220px;
	background-color: #fff;
	padding:24px;
}
.paddinglr24{padding:12px 24px;}
.detialContent .tittext{text-align: left; overflow: hidden}
.detialContent .tittext .btit{font-size:18px;}
.detialContent .tittext li,.detialContent .tittext ul,.detialContent .tittext .btit{float: left}
.detialContent .tittext ul{padding-top:8px; margin-left:24px;}
.detialContent .tittext li{margin-right:8px;}
.detialContent .tittext  .btngroup{float: right; font-size: 14px;}
.detialContent .tittext  .btngroup .el-button--primary{font-family: "微软雅黑"}
.detialContent .jjxqtxt{display: table; width:100%;}
.detialContent .jjxqtxt li,.detialContent .jjxqtxt li p{display: inline-block;}
.detialContent .jjxqtxt li{display: table-cell; border-right:1px dashed #e1e1e1;padding:0px 16px; width:30%;}
.detialContent .jjxqtxt li:last-child{border:none;}
.detialContent .jjxqtxt li:first-child{padding-left:0px;}
.detialContent .jjxqtxt li .bdwjz-sh{font-size:21px; color: #FF0000}
.detialContent .jjxqtxt li .bdwjz-j{font-size:21px; color:#45CB33}
.detialContent .jjxqtxt li .firstp{padding-right:16px}
.detialContent .jjxqtxt li .txtleft{text-align: left;}
.detialContent .jjxqtxt li.kzr p.txtleft{margin-right:16px;}
.detialContent .jjxqtxt,.detialContent .tittext{border-bottom:1px solid #f6f6f6;}
.detialContent .jjxqtxt{border-bottom:2px solid #dedede;}
.detialContent .jjxqtxt .zjsr p{margin-right:18px;}
.detialContent .product-info{border:1px solid #f6f6f6; margin-top:24px; border-bottom:2px solid #e1e1e1; }
.detialContent .product-info h2{font-size:14px; text-align: left}
.detialContent .product-info .content{}
/*.detialContent .jjxqtxt li p:last-child{text-align: left; padding-right: 16px; border-right:1px dashed #d1d1d1;}*/
</style>

<template>
	<div class="detialContent mainContent" id="subrightContent">
		<div class="">
			<h2 class="tittext paddinglr24"><p class="btit">久铭收益1号</p> <ul><li class="s-info">备案编号:<span>SR5846</span></li><li class="s-info">策略分类:<span>股票多头</span></li><li><a href="#">协会公示信息</a></li></ul>
				<div class="btngroup">
			<el-button-group>
			  <el-button type="primary" size="small">加入产品池</el-button>
			  <el-button type="primary" size="small">加入对比库</el-button>
			</el-button-group>
			</div>
			</h2>
			<div class="jjxqtxt paddinglr24">
				<ul>
					<li>
						<p class="firstp"><span class="bdwjz-sh">2.0057</span><br><span>单位净值</span></p>
						<p class="txtleft">
							<span>累计净值</span>：<span>2.0057</span><br>
							<span>净值日期</span>：<span>2018-04-13</span>
						</p>
					</li>
					<li class="zjsr">
						<p class="firstp"><span class="bdwjz-j">2.0057</span><br><span>近3个月收益</span></p>
						<p class="firstp"><span class="bdwjz-sh">2.0057</span><br><span>今年以来收益</span></p>
						<p class="firstp"><span class="bdwjz-sh">2.0057</span><br><span>近1年收益</span></p>

					</li>
					<li class="kzr">
						
							<p class="txtleft">
							<span>实际管理人</span>：<span><a href="#">光大兴陇信托有限责任公司	</a></span><br>
							<span>基金编号</span>：<span>2018-04-13</span>
						</p>
						<p class="txtleft">
							<span>基金简称</span>：<span>光大兴陇信托-嘉盈1号</span><br>
							<span>成立日期</span>：<span>2018-04-13</span>
						</p>
					</li>
				</ul>
			</div>
			<div class="product-info paddinglr24">
				<h2><span>产品信息</span></h2>
				<div class="content">
					
				</div>
			</div>
			<div id="myChart" :style="{width: '100%', height: '300px'}" class="paddinglr24"></div>
		</div>
		
	</div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default{
    name:"Detial"
    ,mounted(){
    	this.drawLine();
    }
    ,methods:{
    	drawLine(){
    	       // 基于准备好的dom，初始化echarts实例
    	       let myChart = this.$echarts.init(document.getElementById('myChart'))
    	       // 绘制图表
    	       myChart.setOption({
    	           title: { text: '使用echarts展示图表' },
    	           tooltip: {},
    	           xAxis: {
    	               data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    	           },
    	           yAxis: {},
    	           series: [{
    	               name: '销量',
    	               type: 'bar',
    	               data: [5, 20, 36, 10, 10, 20]
    	           }]
    	       });
    	   }
    }
    

}
</script>

