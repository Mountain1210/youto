//import 数据 from '' 这里面可以获取数据
import * as types from './type'
import Vue from 'Vue'
import Vuex from 'vuex' 
import axios from 'axios' 
// import ElementUI from 'element-ui';
Vue.use(Vuex)






//console.log(types)
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
export default {
    subleftw:({
        commit,
        state
    }, index)=>{
        commit(types.SUBLEFTW, index)
    },
    sublibtn: ({
        commit,
        state
    }, index) => {
        commit(types.SUBLIBTN, index)
    },
    isopen: ({
        commit,
        state
    }, num) => {
        if (num == 1) {
            commit(types.ISOPEN, true)
        } else if (num == 2) {
            commit(types.ISOPEN, false)
        } else {
            commit(types.ISOPEN, false)
        }
    },
    getdocumentLeftHeight() {
        document.getElementById("leftContent").style.height = document.documentElement.clientHeight - 80 + "px";
    },
    handleClose: ({
        commit,
        state
    },done) => {
        window.vue.$confirm('确认关闭？').then(_ => {
                done();
            }).catch(_ => {});
    },
    getGjjsbtn: ({
        commit,
        state
    }, index) => {
        axios({
            method: 'get',
            url: '/static/data/gjjsData/gjjsData.html'
        }).then(function(res) {
            let obj = res.data;
            commit(types.GETGJJS, obj)
        }).catch(function(err) {
            console.log('获取高级索的中的数据:', err);
        })
    },
    customCompFunc(params) {
        if (params.type === 'delete') { // do delete operation
            this.$delete(this.tableData, params.index);
        } else if (params.type === 'edit') { // do edit operation
            alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
        }
    },

    getdocumentHeight() {
        document.getElementById("subrightContent").style.height = document.documentElement.clientHeight - 80 + "px";
    },
     getSubLeftw() { 
        var maxwidth=document.body.offsetWidth-580+"px";
        return maxwidth;
    },
    lstfunc: ({
        commit,
        state
    }, obj) => {
        if (localStorage.currentUrl != null) {
            commit(types.LST, obj)
        }
    },
    getcurrentMenu: ({
        commit,
        state
    }, path) => {
        axios({
            method: 'get',
            url: '/static/data/menuData/MenuData.html'
        }).then(function(res) {
            let sightdata = null;
            res.data.forEach(function(item, index) {
                if (path.indexOf(item.name) != -1) {
                    console.log(item)
                    commit(types.GETSECONDMENU, item)
                }
            })
        }).catch(function(err) {
            console.log('文章详细页面:', err);
        })
    },
    deincrement: ({
        commit
    }) => {
        commit(types.DEINCREMENT)
    },
    clickOdd: ({
        commit,
        state
    }) => { //这里还可以有第二个参数state也是就是上面的那个state
        if (state.mutations.count % 2 == 0) {
            commit(types.INCREMENT);
        } else {
            console.log(state)
            alert("这是奇数")
        }
    },
    clickAsync: ({
        commit,
        state
    }) => {
        new Promise((resolve) => {
            setTimeout(function() {
                alert("异步成功");
                commit(types.INCREMENT)
                resolve()
            }, 1000)
        })
    }
}
