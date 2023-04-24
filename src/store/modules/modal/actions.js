const actions = {
  showModal({ commit }, modalName) {
    commit('showModal', modalName);
  },
  hideCurrentModal({ commit, getters }, modalName) {
    if (modalName === getters.activeModal) {
      commit('hideModals');
    }
  },
  hideAllModals({ commit }) {
    commit('hideModals');
  },
};

export default actions;
