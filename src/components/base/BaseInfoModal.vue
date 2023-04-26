<template>
  <modal-backdrop @clickOnBackdrop="clickOnBackdrop" @keyupOnBackdrop="clickOnBackdrop">
    <modal-wrapper :title="title">
      <base-button class="modal-button" @click="clickOnButton">{{ buttonText }}</base-button>
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
    clickOnBackdrop() {
      this.$emit('clickOnBackdrop');
    },
    clickOnButton() {
      this.$emit('clickOnBackdrop');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-button {
  width: 100%;
}
</style>
