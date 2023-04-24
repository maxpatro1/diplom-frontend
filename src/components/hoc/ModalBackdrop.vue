<template>
  <div class="backdrop" @keyup="$emit('keyupOnBackdrop')" @click="$emit('clickOnBackdrop')">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ModalBackdrop',
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
