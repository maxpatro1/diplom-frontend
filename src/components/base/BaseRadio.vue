<template>
  <label class="base-radio">
    <input
      :name="name"
      type="radio"
      :value="value"
      :checked="isChecked"
      class="base-radio__input"
      @change="$emit('update:modelValue', value)"
    >
    <div class="base-radio__check-wrapper">
      <svg-sprite
        v-show="isChecked"
        symbol="radio-checked"
        width="24"
        height="24"
        class="base-radio__icon base-radio__icon--checked"
      />
      <svg-sprite
        v-show="!isChecked"
        symbol="radio-not-checked"
        width="24"
        height="24"
        class="base-radio__icon"
    />
    </div>
    <span class="base-radio__label">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  name: 'BaseRadio',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'default label'
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.base-radio {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    input[type=radio] + .base-radio__check-wrapper {
      border: 4px solid $traffic-gray-01;
    }

    input[type=radio]:checked + .base-radio__check-wrapper {
      border: 4px solid $dark-blue-01;
    }
  }
  input[type=radio]:checked:focus-visible + .base-radio__check-wrapper {
    border: 4px solid $dark-blue-01;
  }
  input[type=radio]:checked:focus-visible + .base-radio__check-wrapper {
      border: 4px solid $traffic-gray-01;
  }

  &__check-wrapper {
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid transparent;
    border-radius: 50%;
    transition: $transition-md;
  }

  &__icon {
    margin: -4px;
  }

  &__input {
    width: 0px;
    height: 0px;
    z-index: -1;
    opacity: 0;
    position: absolute;
  }
}
</style>
