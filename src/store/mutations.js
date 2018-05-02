import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    HIDE_LOADING,
    SHOW_LOADING,
    FOOTER_HIDE,
    FOOTER_SHOW,
    SUBLIBTN,
    GETSECONDMENU,
    LST,
    GETTABLEDATA,
    GETGJJS,

    ISOPEN,
    CLOSEDIOAG


} from './type'
import Vue from 'vue'



const state = {
    dialogVisible:false,
    subsnump: 0,
    loading: false,
    footerShow: true,
    count: 3,
    submenu: null,
    searchJSON:{ tableData: [{
        number:"1"
        ,number2:"2323"
        ,gsjc:"中天嘉禾"
        ,zczb:"10000"
        ,sjbs:"100"
        ,glgm:"4"
        ,ygrs:"201812"
        ,jzrq:"2018-1-1"
        ,clrq:"是"
        ,djrq:"110"
        ,ishy:"是"
        ,pronum:"13"
        ,cominfo:"我要理财我要理财我要理财我要理财"
        ,jljl:"三元桥三元桥三元桥三元桥"
        ,address:"三元桥三元桥三元桥三元桥"
        ,operat1:"这是操作"
        ,operat2:"这是操作2"
        },{
        number:"2"
        ,number2:"2323"
        ,gsjc:"中天嘉禾"
        ,zczb:"10000"
        ,sjbs:"100"
        ,glgm:"4"
        ,ygrs:"201812"
        ,jzrq:"2018-1-1"
        ,clrq:"是"
        ,djrq:"110"
        ,ishy:"是"
        ,pronum:"13"
        ,cominfo:"我要理财我要理财我要理财我要理财"
        ,jljl:"三元桥三元桥三元桥三元桥"
        ,address:"三元桥三元桥三元桥三元桥"
        ,operat1:"这是操作"
        ,operat2:"这是操作2"
        },{
        number:"3"
        ,number2:"2323"
        ,gsjc:"中天嘉禾"
        ,zczb:"10000"
        ,sjbs:"100"
        ,glgm:"4"
        ,ygrs:"201812"
        ,jzrq:"2018-1-1"
        ,clrq:"是"
        ,djrq:"110"
        ,ishy:"是"
        ,pronum:"13"
        ,cominfo:"我要理财我要理财我要理财我要理财"
        ,jljl:"三元桥三元桥三元桥三元桥"
        ,address:"三元桥三元桥三元桥三元桥"
        ,operat1:"这是操作"
        ,operat2:"这是操作2"
        },{
        number:"4"
        ,number2:"2323"
        ,gsjc:"中天嘉禾"
        ,zczb:"10000"
        ,sjbs:"100"
        ,glgm:"4"
        ,ygrs:"201812"
        ,jzrq:"2018-1-1"
        ,clrq:"是"
        ,djrq:"110"
        ,ishy:"是"
        ,pronum:"13"
        ,cominfo:"我要理财我要理财我要理财我要理财"
        ,jljl:"三元桥三元桥三元桥三元桥"
        ,address:"三元桥三元桥三元桥三元桥"
        ,operat1:"这是操作"
        ,operat2:"这是操作2"
        },{
        number:"2"
        ,number2:"2323"
        ,gsjc:"中天嘉禾"
        ,zczb:"10000"
        ,sjbs:"100"
        ,glgm:"4"
        ,ygrs:"201812"
        ,jzrq:"2018-1-1"
        ,clrq:"是"
        ,djrq:"110"
        ,ishy:"是"
        ,pronum:"13"
        ,cominfo:"我要理财我要理财我要理财我要理财"
        ,jljl:"三元桥三元桥三元桥三元桥"
        ,address:"三元桥三元桥三元桥三元桥"
        ,operat1:"这是操作"
        ,operat2:"这是操作2"
        },{
        number:"3"
        ,number2:"2323"
        ,gsjc:"中天嘉禾"
        ,zczb:"10000"
        ,sjbs:"100"
        ,glgm:"4"
        ,ygrs:"201812"
        ,jzrq:"2018-1-1"
        ,clrq:"是"
        ,djrq:"110"
        ,ishy:"是"
        ,pronum:"13"
        ,cominfo:"我要理财我要理财我要理财我要理财"
        ,jljl:"三元桥三元桥三元桥三元桥"
        ,address:"三元桥三元桥三元桥三元桥"
        ,operat1:"这是操作"
        ,operat2:"这是操作2"
        },{
        number:"4"
        ,number2:"2323"
        ,gsjc:"中天嘉禾"
        ,zczb:"10000"
        ,sjbs:"100"
        ,glgm:"4"
        ,ygrs:"201812"
        ,jzrq:"2018-1-1"
        ,clrq:"是"
        ,djrq:"110"
        ,ishy:"是"
        ,pronum:"13"
        ,cominfo:"我要理财我要理财我要理财我要理财"
        ,jljl:"三元桥三元桥三元桥三元桥"
        ,address:"三元桥三元桥三元桥三元桥"
        ,operat1:"这是操作"
        ,operat2:"这是操作2"
        }],
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip1: 200333,
          zip2: 200333,
          zip3: 200333,
          zip4: 200333,
          zip5: 200333,
          zip5: 200333,
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip1: 200333,
          zip2: 200333,
          zip3: 200333,
          zip4: 200333,
          zip5: 200333,
          zip5: 200333,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip1: 200333,
          zip2: 200333,
          zip3: 200333,
          zip4: 200333,
          zip5: 200333,
          zip5: 200333,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip1: 200333,
          zip2: 200333,
          zip3: 200333,
          zip4: 200333,
          zip5: 200333,
          zip5: 200333,
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip1: 200333,
          zip2: 200333,
          zip3: 200333,
          zip4: 200333,
          zip5: 200333,
          zip5: 200333,
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip1: 200333,
          zip2: 200333,
          zip3: 200333,
          zip4: 200333,
          zip5: 200333,
          zip5: 200333,
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip1: 200333,
          zip2: 200333,
          zip3: 200333,
          zip4: 200333,
          zip5: 200333,
          zip6: 200333,
        }]
}
}

const mutations = {
    [GETSECONDMENU](state, datas) {
        state.submenu = datas;
        localStorage.currentUrl = JSON.stringify(datas);
    },
    [LST](state) {
        state.submenu = JSON.parse(localStorage.currentUrl);
    },
    // [GETTABLEDATA](state,tabdatas){
    //     state.searchJSON=tabdatas;
    // }
    [GETGJJS](state,datas){
       state.searchJSON=datas;
    },
     [ISOPEN](state,flag){
        state.dialogVisible=flag
     }










    /*分割线*/
    /*头部*/
    ,[SUBLIBTN](state, index) {
        state.subsnump = index;
    },  
    [HEAD_SHOW_SUCCESS](state) {
        state.headShow = true;
    },
    [HEAD_SHOW_FAIL](state) {
        state.headShow = false;
    },
    /*loading*/
    [HIDE_LOADING](state) {
        state.loading = false;
    },
    [SHOW_LOADING](state) {
        state.loading = true;
    },
    /*footer*/
    [FOOTER_HIDE](state) {
        state.footerShow = false;
    },
    [FOOTER_SHOW](state) {
        state.footerShow = true;
    }
};

const getters = {
    count: (state) => {
        return state.count;
    },
    getOdd(state) {
        return state.count % 2 == 0 ? "这货2偶数" : "这是奇数"
    },
    subsnump: (state) => {
        return state.subsnump
    },
    submenu: (state) => {

        return state.submenu
    },
    searchJSON: (state) => {

        return state.searchJSON
    }
    ,dialogVisible:(state)=>{
        return state.dialogVisible;
    }

};

export default {
    state,
    mutations,
    getters
}
