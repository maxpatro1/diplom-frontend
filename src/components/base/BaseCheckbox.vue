<template>
  <label :class="classes">
    <input
      :checked="modelValue"
      type="checkbox"
      class="base-checkbox__input"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <span class="base-checkbox__mark"></span>
    <span class="base-checkbox__label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    markLast: {
      type: Boolean,
      default: false,
    },
    isGrayLabel: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'base-checkbox',
        {
          reverse: this.markLast,
          'gray-label': this.isGrayLabel,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.base-checkbox {
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  &.reverse {
    .base-checkbox__mark {
      order: 1;
    }
  }

  &.gray-label {
    .base-checkbox__label {
      color: $grey-primary;
    }
  }

  &__input {
    position: absolute;
    opacity: 0;
    z-index: -1;

    &:checked + .base-checkbox__mark {
      background: $blue-primary;
    }
  }

  &__mark {
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid $grey-primary;
    border-radius: $radius-xs;
    box-shadow: 0px 4px 8px 0px #0010291A;
  }
}
</style>
