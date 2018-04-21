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
    searchJSON:{ tableData: [
   {"name":"赵伟1","tel":"<a href='#'>156*****1987</a>","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟2","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟3","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟4","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟5","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟6","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟7","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟8","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟9","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                             {"name":"赵伟1","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟2","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟3","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟4","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟5","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟6","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟7","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟8","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟9","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥"},
                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼","glgm":"7,375.15","ygrs":"100","jzrq":"2017-07-04","clrq":"2013-11-14","djrq":"2016-11-11","sfhy":"是","cpsl":"35","gsjs":"http://www.baidu.com","jtjl":"是","bgdz":"北京三元桥","editxt":"AAA","deletxt":"删除"},
                    ],
                    columns: [
                           {field: 'name', title:'序号', width: 50, titleAlign: 'center',columnAlign:'center', isFrozen: true},
                           {field: 'tel', title: '公司简称', width: 250, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'hobby', title: '注册资本(万)', width: 120, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'address', title: '实缴比例', width: 80, titleAlign: 'center',columnAlign:'left',isResize:true},
                           {field: 'glgm', title: '管理规模', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'ygrs', title: '员工人数', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'jzrq', title: '截至日期', width: 160, titleAlign: 'center',columnAlign:'left',isResize:true},
                            {field: 'clrq', title:'成立日期', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'djrq', title: '登记日期', width: 260, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'sfhy', title: '是否会员', width: 40, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'cpsl', title: '产品数量', width: 80, titleAlign: 'center',columnAlign:'left',isResize:true},
                           {field: 'gsjs', title: '公司介绍', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'jljl', title: '尽量记录', width: 380, titleAlign: 'center',columnAlign:'center',isResize:true},
                           {field: 'bgdz', title: '办公地址', width: 430, titleAlign: 'center',columnAlign:'left',isResize:true},
                           {field: 'bgdz2', title: '操作', width: 120, titleAlign: 'center',columnAlign:'left',isResize:true,componentName:"tableoperation"}
                    ]}
};

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
