import state from '@/store/modules/modal/state';
import getters from '@/store/modules/modal/getters';
import actions from '@/store/modules/modal/actions';
import mutations from '@/store/modules/modal/mutations';

const modal = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default modal;
