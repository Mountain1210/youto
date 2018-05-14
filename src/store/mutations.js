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
    CLOSEDIOAG,
    SUBLEFTW,
    DIFFLIST
}
from './type'
import Vue from 'vue'

/**
 * state不适合存储dom上的数据,应该存储状态上的数据
 */

const state = {
    dialogVisible: false,
    subsnump: 0,
    tabheight: 500,
    loading: false,
    footerShow: true,
    count: 3,
    submenu: null,
    diffData: [],
    searchJSON: {
        tableData: [{
            number: "1",
            number2: "2323",
            gsjc: "中天嘉禾",
            zczb: "10000",
            sjbs: "100",
            glgm: "4",
            ygrs: "201812",
            jzrq: "2018-1-1",
            clrq: "是",
            djrq: "110",
            ishy: "是",
            pronum: "13",
            cominfo: "查看详情",
            jljl: "三苑桥",
            address: "三苑桥",
            operat1: "这是操作",
            operat2: "这是操作2"
        }, {
            number: "2",
            number2: "2323",
            gsjc: "中天嘉禾",
            zczb: "10000",
            sjbs: "100",
            glgm: "4",
            ygrs: "201812",
            jzrq: "2018-1-1",
            clrq: "是",
            djrq: "110",
            ishy: "是",
            pronum: "13",
            cominfo: "查看详情",
            jljl: "三苑桥",
            address: "三苑桥",
            operat1: "这是操作",
            operat2: "这是操作2"
        }, {
            number: "3",
            number2: "2323",
            gsjc: "中天嘉禾",
            zczb: "10000",
            sjbs: "100",
            glgm: "4",
            ygrs: "201812",
            jzrq: "2018-1-1",
            clrq: "是",
            djrq: "110",
            ishy: "是",
            pronum: "13",
            cominfo: "查看详情",
            jljl: "三苑桥",
            address: "三苑桥",
            operat1: "这是操作",
            operat2: "这是操作2"
        }, {
            number: "4",
            number2: "2323",
            gsjc: "中天嘉禾",
            zczb: "10000",
            sjbs: "100",
            glgm: "4",
            ygrs: "201812",
            jzrq: "2018-1-1",
            clrq: "是",
            djrq: "110",
            ishy: "是",
            pronum: "13",
            cominfo: "查看详情",
            jljl: "三苑桥",
            address: "三苑桥",
            operat1: "这是操作",
            operat2: "这是操作2"
        }, {
            number: "1",
            number2: "2323",
            gsjc: "中天嘉禾",
            zczb: "10000",
            sjbs: "100",
            glgm: "4",
            ygrs: "201812",
            jzrq: "2018-1-1",
            clrq: "是",
            djrq: "110",
            ishy: "是",
            pronum: "13",
            cominfo: "查看详情",
            jljl: "三苑桥",
            address: "三苑桥",
            operat1: "这是操作",
            operat2: "这是操作2"
        }, {
            number: "2",
            number2: "2323",
            gsjc: "中天嘉禾",
            zczb: "10000",
            sjbs: "100",
            glgm: "4",
            ygrs: "201812",
            jzrq: "2018-1-1",
            clrq: "是",
            djrq: "110",
            ishy: "是",
            pronum: "13",
            cominfo: "查看详情",
            jljl: "三苑桥",
            address: "三苑桥",
            operat1: "这是操作",
            operat2: "这是操作2"
        }, {
            number: "3",
            number2: "2323",
            gsjc: "中天嘉禾",
            zczb: "10000",
            sjbs: "100",
            glgm: "4",
            ygrs: "201812",
            jzrq: "2018-1-1",
            clrq: "是",
            djrq: "110",
            ishy: "是",
            pronum: "13",
            cominfo: "查看详情",
            jljl: "三苑桥",
            address: "三苑桥",
            operat1: "这是操作",
            operat2: "这是操作2"
        }, {
            number: "4",
            number2: "2323",
            gsjc: "中天嘉禾",
            zczb: "10000",
            sjbs: "100",
            glgm: "4",
            ygrs: "201812",
            jzrq: "2018-1-1",
            clrq: "是",
            djrq: "110",
            ishy: "是",
            pronum: "13",
            cominfo: "查看详情",
            jljl: "三苑桥",
            address: "三苑桥",
            operat1: "这是操作",
            operat2: "这是操作2"
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
    }, [LST](state) {
        state.submenu = JSON.parse(localStorage.currentUrl);
    }, [GETGJJS](state, datas) {
        state.searchJSON = datas;
    }, [ISOPEN](state, flag) {
        state.dialogVisible = flag
    },

    [SUBLEFTW](state) {
        state.subleftw = document.body.offsetWidth - 628 + "px";
        console.log(state.subleftw);
    }, [DIFFLIST](state, diffDataArray) {
            //这里面需要对diffDataArray进行分析,然后取得必要的数据进行发送ajax拉取后台的数据
        state.diffData = diffDataArray
    }








    /*分割线*/
    /*头部*/
    , [SUBLIBTN](state, index) {
        state.subsnump = index;
    }, [HEAD_SHOW_SUCCESS](state) {
        state.headShow = true;
    }, [HEAD_SHOW_FAIL](state) {
        state.headShow = false;
    },
    /*loading*/
    [HIDE_LOADING](state) {
        state.loading = false;
    }, [SHOW_LOADING](state) {
        state.loading = true;
    },
    /*footer*/
    [FOOTER_HIDE](state) {
        state.footerShow = false;
    }, [FOOTER_SHOW](state) {
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
    },
    dialogVisible: (state) => {
        return state.dialogVisible;
    },
    tabheight: (state) => {
        return state.tabheight;
    },
    SUBLEFTW: (state) => {
        return state.subleftw;
    },
    DIFFDATA: (state) => {
            return state.diffData;
        }
};

export default {
    state,
    mutations,
    getters
}
