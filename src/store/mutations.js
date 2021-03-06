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
    DIFFLIST,
    DIFFARRAYDATADETIAL,
    PREVIEW
}
from './type'
import Vue from 'vue'

/**
 * state不适合存储dom上的数据,应该存储状态上的数据
 */

const state = {
    ArrayDataDetial: [
                    {
                        name: '蒸发量',
                        type: 'line',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    }, 
                    {
                        name: '降水量',
                        type: 'line',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    }, {
                        name: '平均温度',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
 ],
 rightNavArray: [{
     name: "高级检索",
     url: "/SM/SmData/Gjjs"
     }, {
         name: "我的产品池",
         url: "/SmData/Wdcpc"
     }, {
         name: "对比库",
         url: "/SmData/Dbk"
     }, {
         name: "产品快速预览",
         url: "/SmData/Cpksyl"
     }],
    rightShow:true,
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
            zczb: "1000A",
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
            address: "北京市海淀区海淀区中关村银科大厦611室",
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
            address: "北京市海淀区海淀区中关村银科大厦611室",
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
            address: "北京市海淀区海淀区中关村银科大厦611室",
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
            address: "北京市海淀区海淀区中关村银科大厦611室",
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
            address: "北京市海淀区海淀区中关村银科大厦611室",
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
            address: "北京市海淀区海淀区中关村银科大厦611室",
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
            address: "北京市海淀区海淀区中关村银科大厦611室",
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
            address: "北京市海淀区海淀区中关村银科大厦611室",
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
    },[DIFFARRAYDATADETIAL](state,diffArraydata) {
        state.ArrayDataDetial = diffArraydata
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
    }, [PREVIEW](state, index) {
        state.rightShow = !state.rightShow;
        if(state.rightShow){
             document.getElementById("subleftContent").style.width=index+"px"
              
            }else{
             document.getElementById("subleftContent").style.width="100%"
            }
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
    rightNavArray:(state)=>{
        return state.rightNavArray
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
        },
    arrayDatadetial: (state) => {
            return state.ArrayDataDetial;
        },
    rightShow:(state)=>{
        return state.rightShow;
    }
};

export default {
    state,
    mutations,
    getters
}
