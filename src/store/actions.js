//import 数据 from ''	这里面可以获取数据
import * as types from './type'

/*export default{


	SHOW_HEAD_SUCC:({commit})=>{
		commit(types.HEAD_SHOW_SUCCESS);
	},
	SHOW_HEAD_FAIL:({commit})=>{
		commit(types.HEAD_SHOW_FAIL);
	},

	hideLoading:({commit})=>{
		commit(types.HIDE_LOADING)
	},
	showLoading:({commit})=>{
		commit(types.SHOW_LOADING)
	},
	
	hideFooter:({commit})=>{
		commit(types.FOOTER_HIDE);
	},
	showFooter:({commit})=>{
		commit(types.FOOTER_SHOW)
	},

     sublibtn(num){
        this.subsnum=num
     }
}*/




export default{
    sublibtn:({commit,state},index)=>{
        commit(types.SUBLIBTN,index)
    },
    getdocumentHeight(){
            document.getElementById("subrightContent").style.height=document.documentElement.clientHeight-90+"px";
    },
     getcurrentMenu(path){
   
    var _this=this;
     if(path=="main"){       
       this.$http.get('/src/data/menuData/MenuData.html').then(function(res){
         console.log(res);          
       }).catch(function(err){
         console.log('文章详细页面:',err);
       })
     }

    },
     deincrement:({
        commit
    })=>{
        commit(types.DEINCREMENT)
    },
    clickOdd:({commit,state})=>{ //这里还可以有第二个参数state也是就是面的那个state
        if(state.mutations.count%2==0){
                   commit (types.INCREMENT);
        }else{
            console.log(state)
                    alert("这是奇数")
         }
    },
    clickAsync:({commit,state})=>{
        new Promise((resolve)=>{
                setTimeout(function(){
                    alert("异步成功");
                    commit(types.INCREMENT)
                    resolve()
                },1000)
        })
    }
}