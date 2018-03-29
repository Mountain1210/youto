<template>
<div class="slide">
<!--内容开始-->
<div class="nav clearfix">
<ul>
<li v-for="(item,index) in sublistArray"  @click.stop="$emit('li',index)" :class="{check:index==subsnum}" >{{item.name}}</li>
<!--<li>我的产品池</li>
<li>对比库</li>
<li>产品快速浏览</li>-->
</ul>
</div>
<div class="slidemain">

</div>
</div>
<!--内容结束-->
</div>
</template>

<script>
export default {
  name: 'slide',
   props:["name","sublistArray","subsnum"],
  data () {
    return {
      msg: 'slide'
    }
  }
}
</script>

<style scoped>
.nav {padding:8px 0px 0px 8px; border-bottom:1px solid #DFF8FF;}
.nav li{float:left; padding:4px 8px; margin-right:8px; text-align:center; border-radius: 6px 6px 0px 0px; border:1px solid #DFF8FF; border-bottom:none; font-size:14px; position: relative; color:#000;  background: -webkit-linear-gradient(#fff,#F0FBFF, #fff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#fff, #F0FBFF, #fff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#fff,#F0FBFF, #fff); /* Firefox 3.6 - 15 */
  background: linear-gradient(#fff,#F0FBFF, #fff); /* 标准的语法 */cursor: pointer;}
.nav li.check{top:1px; font-size:14px; color:#000; background-color:#fff; }
</style>
