import Vue from 'vue'
import Vuex from 'vuex'
import UserResource from "./resources/user";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: null
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
  },

  actions: {
    FETCH_USER: async ({ commit }) => {
      if (localStorage.getItem('username')) {
        const username = localStorage.username
        const user = await UserResource.getUser(username);
        commit('SET_USER', user[0]);
      }
    },


  },

  getters: {
     user: (state) => state.user,
  }
})
