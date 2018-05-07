<template> 
<div class="main">
  <div class="mainlist">
    <div id="register" style="background-color:#fff">
      <dl>
       <dt>提交联系人&联系方式</dt>
       <dd><p>联系人姓名:</p><el-input v-model="input" size="small" placeholder="请输入姓名"></el-input></dd>
       <dd><p>公司名称:</p><el-input v-model="input" size="small" placeholder="请输入公司名称"></el-input></dd>
       <dd><p>职位:</p><el-input v-model="input" size="small" placeholder="请输入职位名称"></el-input></dd>
       <dd><p>手机:</p><el-input v-model="input" size="small" placeholder="请输入手机"></el-input></dd>
       <dd><p>工作邮箱:</p><el-input v-model="input" size="small" placeholder="请输入邮箱"></el-input></dd>
       <dd><p class="ms">描述:</p><el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input></dd>
      </dl>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'Register',
  data () {
    return {
     rightNavArray:[{name:"高级检索",url:"/SmData/Gjjs"},{name:"我的产品池",url:"/SmData/Wdcpc"},{name:"对比库",url:"/SmData/Dbk"},{name:"产品快速预览",url:"/SmData/Cpksyl"}]
     }
  }
  ,computed:mapGetters(['searchJSON','subsnump','dialogVisible','tabheight'])
  ,methods:{

  }
  ,beforeCreate:function(){

  }
  ,mounted: function () {
    document.getElementById("register").style.height=document.documentElement.clientHeight - 80 + "px";
  }
  ,created(){

  }
}
</script>

<style scoped>
#register dl{font-size:16px;padding:8px 16% 16px 8%;}
#register dt{font-size:16px; text-align: center}
#register dd{text-align: left; margin-top:16px;}
#register dd p{display: inline-block; width: 200px; text-align: right; padding-right:8px;}
#register dd .el-input,#register dd .el-textarea{width:240px;}
#register dd .el-textarea{}
#register dd .ms{height:180px;}

</style>