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
      <h1 v-if="title && isH1" :class="titleClasses">
        {{ title }}
      </h1>
      <p v-else-if="title" :class="titleClasses">
        {{ title }}
      </p>
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
      default: false,
    },
    title: {
      type: String,
      required: false,
    },
    isH1: {
      type: Boolean,
      default: true,
    },
    isBlueTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    titleClasses() {
      return [
        'modal-wrapper__title',
        {
          'modal-wrapper__title--blue': this.isBlueTitle,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 100%;
  max-width: 384px;
  border-radius: 32px;
  background-color: #fff;

  &__title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    margin-bottom: 24px;

    &--blue {
      font-size: 32px;
      line-height: 40px;
      font-weight: 500;
      color: $dark-blue;
    }
  }

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
