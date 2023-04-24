import { MODAL_NAMES } from '@/store/modules/modal/constants';

const mutations = {
  showModal(state, modalName) {
    if (!Object.values(MODAL_NAMES).includes(modalName)) {
      throw new Error('"modalName" must be included in the MODAL_NAMES');
    }
    state.activeModal = modalName;
  },
  hideModals(state) {
    state.activeModal = null;
  },
};

export default mutations;
