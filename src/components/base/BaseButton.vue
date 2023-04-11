<template>
  <button :class="classes" :disabled="isLoading">
    <base-circle-loader v-if="isLoading" :color="loaderColor" />
    <slot v-else></slot>
  </button>
</template>

<script>
import BaseCircleLoader from '@/components/base/BaseCircleLoader.vue';

const COLORS = ['blue', 'light', 'danger'];

export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'blue',
      validator: (value) => COLORS.includes(value)
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseCircleLoader,
  },
  computed: {
    loaderColor() {
      switch (this.color) {
        case COLORS[1]:
          return 'dark'
        case COLORS[2]:
          return 'danger'
        default:
          return 'light'
      }
    },
    classes() {
      return [
        'base-button',
        `color-${this.color}`,
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
  font-weight: 400;
  border-radius: 16px;
  cursor: pointer;
  transition: $transition-md;

  &:hover {
    opacity: .5;
  }

  &.color-blue {
    background: $dark-blue;
    color:#fff;
  }

  &.color-light {
    background: $honey-dew;
  }

  &.color-danger {
    background: $honey-dew;
    color: $signal-red;
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
