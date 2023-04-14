<template>
  <section class="modal-wrapper">
    <div class="modal-wrapper__body">
      <button
        v-if="isBaskButton"
        type="button"
        class="modal-wrapper__button"
        @click="$emit('clickBackButton')"
      >
        <svg-sprite
          symbol="arrow-light"
          width="24"
          height="24"
          class="modal-wrapper__icon"
        />
      </button>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ModalWrapper',
  props: {
    isBaskButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 100%;
  max-width: 384px;
  border-radius: 32px;
  background-color: #fff;

  &__body {
    position: relative;
    padding: 32px;
  }

  &__button {
    position: absolute;
    top: 16px;
    left: calc(-48px - 16px);
    width: 48px;
    height: 48px;
    padding: 12px;
    border-radius: 50%;
    background: #fff;
  }

  &__icon {
    stroke: $black-brown;
  }
}
</style>
