<template>
  <label :class="classes">
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
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
    placeholder: {
      type: String,
      default: ''
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
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  display: flex;
  transition: $transition-md;

  &:hover {
    .base-input__input {
      background-color: $honey-dew;
    }
  }

  &__input {
    flex-grow: 1;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    border: 1px solid $traffic-gray;
    border-radius: 16px;
    transition: $transition-md;

    &::placeholder {
      color: $traffic-gray;
      font-weight: 400;
    }

    &:focus {
      border: 1px solid $dark-blue;
    }
  }
}
</style>
