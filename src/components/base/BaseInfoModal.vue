<template>
  <modal-backdrop @clickOnBackdrop="closeModal" @keyupOnBackdrop="closeModal">
    <modal-wrapper :title="title">
      <base-button class="modal-button" @click="closeModal">{{ buttonText }}</base-button>
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
  name: 'BaseInfoModal',
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    modalName: {
      type: String,
      required: true,
      validator: (value) => Object.values(MODAL_NAMES).includes(value),
    },
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
