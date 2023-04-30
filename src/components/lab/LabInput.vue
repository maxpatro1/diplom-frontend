<template>
  <label :class="classes">
    <input
      :value="modelValue"
      class="lab-input__input"
      type="text"
      :disabled="disabled"
      @input="e => $emit('update:modelValue', e.target.value)"
    >
    <span class="lab-input__label">
      <slot name="label">{{ label }}</slot>
    </span>
    <span class="lab-input__border"></span>
    <span class="lab-input__dimension">
      <slot name="dimension">{{ dimension }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LabInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    dimension: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'lab-input',
        {
          'lab-input--disabled': this.disabled,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.lab-input {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  padding: 24px 8px 8px;
  background-color: #fff;
  border-radius: 12px;
  cursor: text;
  transition: $transition-md;

  &:hover {
    background-color: $honey-dew;

    .lab-input__input {
      background-color: $honey-dew;
    }
  }

  &--disabled {
    background-color: $honey-dew;
    cursor: not-allowed;

    .lab-input__input {
      color: $traffic-gray;
      background-color: $honey-dew;
    }

    .lab-input__border {
      border: 1px solid $honey-dew;
    }

    .lab-input__dimension {
      color: $traffic-gray;
    }
  }

  &__border {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: $transition-md;
    border-radius: 12px;
    border: 1px solid $traffic-gray;
  }

  &__label {
    position: absolute;
    top: 8px;
    left: 8px;
    color: $traffic-gray;
    font-size: 12px;
    line-height: 16px;
    transition: $transition-md;
  }

  &__input {
    color: $black-brown;
    font-size: 16px;
    line-height: 24px;
    transition: $transition-md;

    &:focus {
      outline: none;

      & ~ .lab-input__label {
        color: $dark-blue;
      }

      & ~ .lab-input__border {
        border: 1px solid $dark-blue;
      }
    }
  }
}
</style>
