<template> 
<div class="main">
  <div class="mainlist">
    <div id="register" style="background-color:#fff">
      <!-- <form @submit.prevent="submit">  -->
        <el-form :model="regster" :rules="rules" ref="ruleForm" label-width="80px">
      <dl>
       <dt>提交联系人&联系方式</dt>
       
       <dd><el-form-item label="用户名" prop="username" class="delu-box"><!-- <p>联系人姓名:</p> --><el-input v-model="regster.username" size="small" placeholder="请输入姓名"></el-input></el-form-item></dd>
       <dd><!-- <p>公司名称:</p> --><el-form-item label="公司名称" prop="company" class="delu-box"><el-input v-model="regster.company" size="small" placeholder="请输入公司名称"></el-input></el-form-item></dd>
       <dd><!-- <p>职位:</p> --><el-form-item label="职位" prop="work" class="delu-box"><el-input v-model="regster.work" size="small" placeholder="请输入职位名称"></el-input></el-form-item></dd>
       <dd><!-- <p>手机:</p> --><el-form-item label="手机号码" prop="phone" class="delu-box"><el-input v-model="regster.phone"  size="small" placeholder="请输入手机"></el-input></el-form-item></dd>
       <dd><!-- <p>工作邮箱:</p> --><el-form-item label="工作邮箱" prop="mail" class="delu-box"><el-input v-model="regster.mail" size="small" placeholder="请输入邮箱"></el-input></el-form-item></dd>
       <dd><!-- <p>上传文件:</p> --><el-form-item label="上传文件" prop="file" class="delu-box"><input type="file" @change="getFile($event)"></el-input></el-form-item></dd>
       <dd><!-- <p class="ms">描述:</p> --><el-form-item label="描述" prop="describe" class="delu-box">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="regster.describe">
        </el-input></el-form-item>
      </dd>
<dd class="btncla"><el-button type="primary" native-type="submit">提 交</el-button></dd>
      </dl>
    <!-- </form> -->
    </el-form>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import {mapGetters,mapActions} from "vuex"
import _ from 'lodash'
import Itd from './comjs/itemvalidater'
export default {
  name: 'Register',
  data () { 

    return {
     rightNavArray:[{name:"高级检索",url:"/SmData/Gjjs"},{name:"我的产品池",url:"/SmData/Wdcpc"},{name:"对比库",url:"/SmData/Dbk"},{name:"产品快速预览",url:"/SmData/Cpksyl"}]
     ,regster:{
        phone:''
     }
     ,rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          phone: [
            {required: true, validator:Itd.checkPhone}
          ]
          ,mail: [
            {required: true, validator:Itd.checkMail}
          ]
        }
     }
  }
  ,computed:mapGetters(['searchJSON','subsnump','dialogVisible','tabheight'])
  ,methods:{
    getFile(event) {
               this.file = event.target.files[0];
               console.log(this.file);
             }
    ,submit:function(){
      console.log(this.regster)
    }
    ,submitForm(event) {
            event.preventDefault();
            let formData = new FormData();
            formData.append('name', this.regster.username);
            formData.append('age', this.regster.company);
            formData.append('file', this.regster.work); 
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            } 
            this.$http.post('/upload', formData, config).then(function (res) {
              if (res.status === 2000) {
                /*这里做处理*/
              }
            })
          }
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
#register dt{font-size:16px; text-align: center; padding:10px 20px; padding-left: 230px; text-align: left}
#register dd{text-align: left; margin-top:16px;}
#register dd p{display: inline-block; width: 200px; text-align: right; padding-right:8px;}
#register dd .el-input,#register dd .el-textarea{width:240px;}
#register dd .el-textarea{}
#register dd .ms{height:180px; float: left}
#register .btncla{padding:0 15%;}
</style>