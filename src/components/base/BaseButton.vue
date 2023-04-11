<template>
  <button :class="classes" :disabled="isLoading">
    <base-circle-loader v-if="isLoading" />
    <slot v-else></slot>
  </button>
</template>

<script>
import BaseCircleLoader from '@/components/base/BaseCircleLoader.vue';

export default {
  name: 'BaseButton',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseCircleLoader,
  },
  computed: {
    classes() {
      return [
        'base-button',
        {
          ['is-loading']: this.isLoading
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.base-button {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#fff;
  font-weight: 400;
  background: $dark-blue;
  border-radius: 16px;
  cursor: pointer;
  transition: $transition-md;

  &:hover {
    opacity: .5;
  }

  &.is-loading {
    opacity: .5;
    cursor: wait;

    &:hover {
      opacity: .5s;
    }
  }
}
</style>
