<template>
  <label :class="classes">
    <input
      :checked="modelValue"
      type="checkbox"
      class="lab-switcher__input"
      @input="$event => $emit('update:modelValue', $event.target.checked)"
    >
    <span v-if="label && !isLabelLast" class="lab-switcher__label">
      {{ label }}
    </span>
    <span class="switcher">
      <span class="switcher__runner"></span>
    </span>
    <span v-if="label && isLabelLast" class="lab-switcher__label">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  name: 'LabSwitcher',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    isLabelLast: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'lab-switcher',
        {
          'lab-switcher--checked': this.modelValue,
          'lab-switcher--label-first': this.label && !this.isLabelLast,
          'lab-switcher--label-last': this.label && this.isLabelLast,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.lab-switcher {
  display: grid;
  grid-template-columns: auto;
  gap: 12px;
  cursor: pointer;

  &__input {
    position: absolute;
    width: 0;
    height: 0;
    outline: none;
    opacity: 0;
    z-index: -1;
  }

  &.lab-switcher--checked {
    .switcher {
      background-color: $dark-blue;
      border: 2px solid $dark-blue;

      &__runner {
        width: 24px;
        height: 24px;
        margin: 2px;
        background-color: #fff;
        transform: translateX(20px);

        &::after {
          top: -8px;
          right: -8px;
          bottom: -8px;
          left: -8px;
          background-color: $dark-blue;
        }
      }
    }
  }

  &--label-first {
    grid-template-columns: 1fr auto;
  }

  &--label-last {
    grid-template-columns: auto 1fr;
  }

  &:hover {
    .switcher__runner::after {
      opacity: 12%;
    }
  }

  .switcher {
    width: 52px;
    height: 32px;
    border-radius: 100px;
    border: 2px solid $traffic-gray;
    background-color: $honey-dew;
    transition: $transition-md;

    &__runner {
      position: relative;
      display: block;
      width: 16px;
      height: 16px;
      margin: 6px;
      border-radius: 50%;
      background-color: $traffic-gray;
      transition: $transition-md;

      &::after {
        content: '';
        opacity: 0;
        position: absolute;
        top: -12px;
        right: -12px;
        bottom: -12px;
        left: -12px;
        border-radius: 50%;
        background-color: $traffic-gray;
        transition: $transition-md;
      }
    }
  }

  &__label {
    display: flex;
    align-items: center;
    font-size: 24px;
    line-height: 24px;
    user-select: none;
  }
}
</style>
