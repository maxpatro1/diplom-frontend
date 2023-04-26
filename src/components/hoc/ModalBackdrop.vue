<template>
  <div
    data-modal-backdrop
    class="backdrop"
    @keyup="keyupOnBackdrop"
    @click="clickOnBackdrop"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ModalBackdrop',
  methods: {
    clickOnBackdrop(e) {
      if (e.target.dataset.modalBackdrop !== undefined) this.$emit('clickOnBackdrop');
    },
    keyupOnBackdrop(e) {
      if (e.target.dataset.modalBackdrop !== undefined) this.$emit('keyupOnBackdrop');
    },
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(12.5px);
}
</style>
