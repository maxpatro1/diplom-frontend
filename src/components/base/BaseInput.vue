<template>
  <label :class="classes">
    <span v-if="label" class="base-input__label">{{ label }}</span>
    <input
      :value="modelValue"
      :type="type"
      class="base-input__input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    isGrayLabel: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    classes() {
      return [
        'base-input',
        {
          'gray-label': this.isGrayLabel,
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;

  &.gray-label {
    color: $grey-primary;
  }

  &__label {
    display: block;
    margin-bottom: 8px;
  }

  &__input {
    width: 100%;
    padding: 8px;
    border: 1px solid $blue-primary;
    border-radius: $radius-sm;
  }
}
</style>
