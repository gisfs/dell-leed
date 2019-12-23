import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: '首页'
  },
  mutations: {
    changeMenu(state,value){
      state.menu=value
    }
  },
  actions: {
    changeMenu(ctx,value){
      ctx.commit('changeMenu',value)
    }
  },
  modules: {}
});
