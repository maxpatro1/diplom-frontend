<template>
  <modal-backdrop @clickOnBackdrop="closeModal" @keyupOnBackdrop="closeModal">
    <modal-wrapper :title="title">
      <base-button class="modal-button" @click="closeModal">{{ buttonText }}</base-button>
    </modal-wrapper>
  </modal-backdrop>
</template>

<script>
import ModalWrapper from '@/components/hoc/ModalWrapper.vue';
import ModalBackdrop from '@/components/hoc/ModalBackdrop.vue';
import BaseButton from '@/components/base/BaseButton.vue';

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
  },
  components: {
    ModalWrapper,
    ModalBackdrop,
    BaseButton,
  },
  methods: {
    closeModal() {
      // this.hideCurrentModal(this.modalName);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-button {
  width: 100%;
}
</style>
