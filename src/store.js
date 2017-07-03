import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    pro: '选择省份',
    proId: 0,
    city: '选择市'
  }
})

export default store
