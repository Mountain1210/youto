<template>
  <div id="leftContent">
      <ul id="leftmenu">
        <router-link :to="item.url" tag="li" active-class="active" v-for="item in submenu.subMenuu" >
                {{item.name}}
        </router-link>
      </ul>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'Top',
  data () {
    return {
     menuArray:[]
    }
  },
  beforeMount:function(){
   var allcurrenturl=localStorage.getItem("currentUrl");
   allcurrenturl=JSON.stringify(allcurrenturl);
   console.log(allcurrenturl)
   var obj=eval(allcurrenturl);
   this.lstfunc(obj);  
  },
  mounted: function () {
    this.getdocumentLeftHeight();
    // this.getdocumentHeight();     
     
  },
  watch:{

      $route(to){
        var path=to.path.substring(1);        
        path=path.split("/");
        console.log(path[0])
        if(path[0]==""){
          // alert(2)
           this.$store.dispatch("getcurrentMenu","/");
            return
        }else{
          // alert(1)
            this.$store.dispatch("getcurrentMenu",path[0])
        }
      }
    }
    ,computed:mapGetters(['count','getOdd','subsnump','submenu'])
    ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync","lstfunc","getdocumentLeftHeight"])
  ,created(){
  }
}

            // ,{
                  //   path: '/SM/SmData',
                  //   name: 'SmData',
                  //   component: SmData,
                  //    children: [
                  //     ,{
                  //         path: '/SM/SmData/Gjjs',
                  //         name: 'Gjjs',
                  //         component: Gjjs,
                  //     }
                  //     ,{
                  //         path: '/SmData',
                  //         redirect: 'Gjjs'
                  //     }
                      
                  //   ]
                  // }
</script>
<style scoped>
#leftContent{float:left;}
#leftContent li{cursor: pointer;}
#leftContent .active{background-color: #fff; color:#000;}
.topContent{background-color:rgba(79, 159, 222, 1); overflow:hidden; position: relative;}
.topContent .logo{color:#fff; font-size:24px; padding:24px; padding-right:auto; float:left}
.topContent .navul{color:#fff; position: absolute; bottom:-5px; left:280px}
.topContent .navul li{float:left; font-size:14px; margin-right:12px; line-height:2;background-color:#199ed8;padding: 0 8px; border-radius: 5px 5px 0 0; border:1px solid #009db6; cursor:pointer;}
.topContent .navul li.lastli{}
.topContent .navul li.active{background-color:#fff; color:#000}
.messageContent {float:right; color:#fff;  position: absolute;  top:33%; right:0px}
.messageContent li{float:left; margin-right:24px}
.messageContent li span:before{ font-size:21px; margin-top:8px}
.messageContent .question{border-radius:4px; background-color:#57b0e6; font-size:14px; padding:4px 8px}
.messageContent .message{padding-top: 3px;}
.messageContent .person{margin-right:12px;padding-top: 3px;}
</style>
