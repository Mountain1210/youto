import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
});
