<template>
  <section class="modal-wrapper">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ModalWrapper'
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 100%;
  max-width: 384px;
  padding: 32px;
  background-color: #fff;
  border-radius: 32px;
}
</style>
