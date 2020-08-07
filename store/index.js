import Vue from 'vue'
import Vuex from 'vuex'

 Vue.use(Vuex)
 
 const store = new Vuex.Store({
 	state: {
		hasCommit: false,
		userInfo: {},
		
		
	},
	mutations: {
		commit(state){
			state.hasCommit = true
		}
	},
	
 })
 
 export default store
 