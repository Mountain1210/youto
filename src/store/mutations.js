import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    HIDE_LOADING,
    SHOW_LOADING,
    FOOTER_HIDE,
    FOOTER_SHOW,
    SUBLIBTN,
    GETSECONDMENU,
    LST

} from './type'
import Vue from 'vue'



const state = {
    subsnump: 0,
    loading: false,
    footerShow: true,
    count: 3,
    submenu: null
};

const mutations = {
    /*头部*/
    [SUBLIBTN](state, index) {
        state.subsnump = index;
    },
    [GETSECONDMENU](state, datas) {
        state.submenu = datas;
        localStorage.currentUrl = JSON.stringify(datas);
    },
    [LST](state) {
        state.submenu = JSON.parse(localStorage.currentUrl);
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
    }

};

export default {
    state,
    mutations,
    getters
}
