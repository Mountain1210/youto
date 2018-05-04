<template>
<div class="kuai">
<h2 class="bttitle"><span></span>{{title}}</h2>
<slot name="itemMain"></slot>
<!--联盟开始-->
<div class="lianmeng" v-show="lianmeng">

<ul class="limeng">
<li><span>744</span><br>已加盟机构</li>
<li>6,653<br>已收录的产品</li>
</ul>
<ul class="limeng lmbottom">

	<li>
		<a href="#">我要加盟</a>
	</li>
	<li>
		<a href="#">我要合作</a>
	</li>
</ul>
</div>
<!--联盟结束-->

<div class="usualweb" v-show="usualweb">
<ul class="two">
<li><a href="#">这是超链接</a></li>
<li><a href="#">这是超链接</a></li>
</ul>
<ul class="two">
<li><a href="#">这是超链接</a></li>
<li><a href="#">这是超链接</a></li>
<li><a href="#">这是超链接</a></li>
<li><a href="#">这是超链接</a></li>
</ul>
<ul class="two">
<li><a href="#">这是超链接</a></li>
<li><a href="#">这是超链接</a></li>
<li><a href="#">这是超链接</a></li>
<li><a href="#">这是超链接</a></li>
</ul>
</div>
</div>
</template>
<script>
export default{
	name:'indexOne',
	props:['title','type'],
	data(){
		return{
		  lianmeng:false,
		  usualweb:false
		}
	},
	created: function () {
	if(this.type==undefined){	
	          return
	}
	               if(this.type=="web"){
	               	this.usualweb=true;
	               }else if(this.type="lianmeng"){
	               	this.lianmeng=true;
	               }
	       },
}
</script>
<style scoped>
.usualweb{border-top:1px solid #d1d1d1;}
.usualweb ul{ display:table; width:100%; padding-top:10px; font-size:14px;}
.usualweb ul li a{border-right:1px solid #d1d1d1; display:block; color:#000;}
.usualweb ul li:last-child a{border-right:none}
.usualweb li{display:table-cell; text-align:center}
.limeng{border:1px dashed #d1d1d1;display:table; width:100%; padding:15px 0px; margin-top:10px}
.limeng li{display:table-cell; text-align:center; width:50%; font-size:16px; line-height:1.5}
.bttitle{line-height:1; text-align:left; font-size:14px; margin-bottom:10px; font-size: 16px}
.bttitle span{border:4px solid #409eff; border-radius:15px; display:block; float:left; width:15px; height:15px; margin-right:8px}
.kuai{padding:10px; border:1px solid #ccc; margin:8px; overflow: hidden}
.lmbottom{border:none;}
.lmbottom a{padding:4px 0px; text-decoration: none; color:#888}
.lmbottom li:first-child a{border-right:1px solid #d1d1d1; display:block}
</style>