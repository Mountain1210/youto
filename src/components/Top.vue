<template>
<div class="topContent">
  <div class="logo">  <router-link to="/"  active-class="active">{{logo}}  </router-link></div>
  <ul class="navul">
  <router-link :to="item.url" tag="li" active-class="active" v-for="item in navArray" >
          {{item.name}}
  </router-link>
  <li class="lastli "><span class="iconfont icon-moreunfold"></span></li>
  </ul>
  <ul class="messageContent">
  <li class="question"><router-link tag="span" to="IN/question">问题及意见反馈</router-link>></li>
  <li class="message"><span class="iconfont icon-remind"></span></li>
  <li class="person"><span class="iconfont icon-account"></span></li>

  </ul>
</div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'Top',
  data () {
    return {
      logo: '山海经后台管理分析',
      // navArray:[{name:'私幕数据',url:"/SmData"},{name:'公幕数据',url:"/GmData"},{name:'评分排名',url:'/main'},{name:'研究分析',url:'/detial'},{name:'组合管理',url:'/zhgl'},{name:'我的工作区',url:'/myww'}]
      // navArray:[{name:'私幕数据',url:"/SM"},{name:'公幕数据',url:"/GM"},{name:'评分排名',url:'/main'},{name:'研究分析',url:'/detial'},{name:'组合管理',url:'/register'},{name:'我的工作区',url:'/diff'}]
      navArray:[{name:'私幕数据',url:"/SM"},{name:'公幕数据',url:"/GM"},{name:'评分排名',url:'/PM'},{name:'研究分析',url:'/YJ'},{name:'组合管理',url:'/ZH'},{name:'我的工作区',url:'/WORK'}]
    }
  }
  ,beforeCreate(){
    // alert(window.location.href)
  },
  watch:{
    $route(to){
        var path=to.path.substring(1);        
        path=path.split("/");
        console.log(path[0])
        if(path[0]==""){
           this.$store.dispatch("getcurrentMenu","/");
            return
        }else{
            this.$store.dispatch("getcurrentMenu",path[0])
        }
      }
  }
}
</script>
<style scoped>
.topContent{background-color:rgba(79, 159, 222, 1); overflow:hidden; position: relative;}
.topContent .logo{color:#fff; font-size:24px; padding:24px; padding-right:auto; float:left}
.topContent .navul{color:#fff; position: absolute; bottom:-5px; left:280px}
.topContent .navul li{float:left; font-size:14px; margin-right:12px; line-height:2;background-color:#199ed8;padding: 0 8px; border-radius: 5px 5px 0 0; border:1px solid #009db6; cursor:pointer;}
.topContent .navul li.lastli{}
.topContent .navul li.active{background-color:#fff; color:#000}
.messageContent {float:right; color:#fff;  position: absolute;  top:33%; right:0px}
.messageContent li{float:left; margin-right:24px}
.messageContent li span:before{ font-size:21px; margin-top:8px}
.messageContent .question{border-radius:4px; background-color:#57b0e6; font-size:14px; padding:4px 8px; cursor: pointer;}
.messageContent .message{padding-top: 3px;}
.messageContent .person{margin-right:12px;padding-top: 3px;}
.logo a{color:#fff; text-decoration:none}
</style>
