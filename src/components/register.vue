<!-- <template>
<div class="main">
  <div class="mainlist" id="mainContent">
 <dl>
   <dt>提交联系人&联系方式</dt>
   <dd>联系人姓名:<input type="text" name="name" /></dd>
   <dd>公司名称:<input type="text" name="name" /></dd>
   <dd>职位:<input type="text" name="name" /></dd>
   <dd>手机:<input type="text" name="name" /></dd>
   <dd>工作邮箱:<input type="text" name="name" /></dd>
   <dd>描述:<textarea></textarea></dd>
 </dl>
</div>
</div>
</div>
</template>-->
<template> 
<div class="main">
  <div class="mainlist" id="mainContent">
    trewewww
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import {mapGetters,mapActions} from "vuex"
// import Slide from "./slide.vue"
// import Search from "./search.vue"
export default {
  name: 'Register',
  data () {
    return {
     rightNavArray:[{name:"高级检索",url:"/SmData/Gjjs"},{name:"我的产品池",url:"/SmData/Wdcpc"},{name:"对比库",url:"/SmData/Dbk"},{name:"产品快速预览",url:"/SmData/Cpksyl"}]
     // ,tabheight:document.documentElement.clientHeight-135
     // ,tabht:document.documentElement.clientHeight-135
     // ,subleftw:""
     }
  }
  // ,components:{
  //     Slide,Search
  //   }
  ,computed:mapGetters(['searchJSON','subsnump','dialogVisible','tabheight'])
  // ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync","customCompFunc","handleClose","isopen"])
  ,methods:{
    // sublibtn:function(){
    //   this.$store.dispatch("sublibtn")
    // },
    getdocumentHeight:function(){
      this.$store.dispatch("getdocumentHeight")
    }
    // ,handleClose:function(){
    //   this.$store.dispatch("handleClose")
    // }
    // ,isopen:function(num){
    //   this.$store.dispatch("isopen",num)
    // }
    // ,gsjcfn:function(row, column, cell, event){
    //   console.log(row.number)
    //   console.log(column.label)
    //   if(column.label=="公司简称"){
    //     this.$router.push('/CompenyDetial')
    //   }
    //   if(column.label=="注册资本(万)"){
    //     this.$router.push('/CompenyDetial/'+row.number);
    //   }
    // }
  }
  ,beforeCreate:function(){

  }
  ,mounted: function () {
    // this.getdocumentHeight();
  }
  ,created(){
    // let that=this;
    // this.$store.dispatch("getSubLeftw").then(function (getWidth) {
    //   that.subleftw=getWidth;
    // });

  }
}
</script>

<style scoped>
.func{overflow:hidden; background-color:#fff; padding:10px; margin-top:5px; border-bottom:2px solid #f0f0f0;}
.sf .iconfont{padding-right:8px}
.showmap{float:left; padding:3px 4px 2px 4px; margin-left:16px; background-color:rgba(79, 159, 222, 1); color:#fff;border-radius: 5px; }
.showmap .maptxt{font-size:12px; padding-left:8px; font-weight:normal;float:right;}


</style>