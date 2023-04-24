<template>
  <modal-backdrop @clickOnBackdrop="closeModal" @keyupOnBackdrop="closeModal">
    <modal-wrapper title="Регистрация прошла успешно">
      <base-button class="modal-button" @click="closeModal">Отлично</base-button>
    </modal-wrapper>
  </modal-backdrop>
</template>

<script>
import { mapActions } from 'vuex';
import ModalWrapper from '@/components/hoc/ModalWrapper.vue';
import ModalBackdrop from '@/components/hoc/ModalBackdrop.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { MODAL_NAMES } from '@/store/modules/modal/constants';

export default {
  name: 'RegistrationSuccessModal',
  data() {
    return {
      modalName: MODAL_NAMES.REGISTRATION_SUCCESS,
    };
  },
  components: {
    ModalWrapper,
    ModalBackdrop,
    BaseButton,
  },
  methods: {
    ...mapActions({
      hideCurrentModal: 'modal/hideCurrentModal',
    }),
    closeModal() {
      this.hideCurrentModal(this.modalName);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-button {
  width: 100%;
}
</style>
