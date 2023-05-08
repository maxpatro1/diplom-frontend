<template>
  <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
  <label class="lab-range">
    <span v-if="label" class="lab-range__label">{{ label }}</span>
    <div :class="wrapperClasses">
      <span v-if="!isHideLimits" class="lab-range__limit">{{ min }}</span>
      <input
        :value="modelValue"
        :style="sliderStyles"
        type="range"
        class="lab-range__input"
        @input="$event => $emit('update:modelValue', +$event.target.value)"
      >
      <span v-if="!isHideLimits" class="lab-range__limit">{{ max }}</span>
    </div>
  </label>
</template>

<script>
export default {
  name: 'LabRange',
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
      default: '',
    },
    isHideLimits: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sliderStyles() {
      const progress = (this.modelValue / this.max) * 100;
      return {
        background: `linear-gradient(to right, #3F88BC ${progress}%, #EFEFEF ${progress}%)`,
      };
    },
    wrapperClasses() {
      return [
        'lab-range__wrapper',
        {
          'lab-range__wrapper--hide-limits': this.isHideLimits,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.lab-range {
  &__label {
    color: $traffic-gray;
    font-size: 12px;
    line-height: 16px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 8px;
    align-items: center;

    &--hide-limits {
      grid-template-columns: 1fr;
    }
  }

  &__limit {
    font-size: 16px;
    line-height: 24px;
  }

  &__input {
    margin: 18px 0;
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 100%;
    cursor: pointer;
    outline: none;
    border-radius: 15px;
    /*  overflow: hidden;  remove this line*/

    /* New additions */
    height: 4px;
    background: $honey-dew;

    /* Thumb: webkit */
    &::-webkit-slider-thumb {
      /* removing default appearance */
      -webkit-appearance: none;
      appearance: none;
      /* creating a custom design */
      height: 20px;
      width: 20px;
      background-color: $dark-blue;
      border-radius: 50%;
      border: none;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);

      /* box-shadow: -407px 0 0 400px #f50; emove this line */
      transition: $transition-md;

      /* Hover, active & focus Thumb: Webkit */
      &:hover {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 10px $dark-blue-012;
      }
      &:active {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 10px $dark-blue-012;
      }
      &:focus {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 10px $dark-blue-012;
      }
    }

    /* Thumb: Firefox */
    &::-moz-range-thumb {
      height: 15px;
      width: 15px;
      background-color: #f50;
      border-radius: 50%;
      border: none;

      /* box-shadow: -407px 0 0 400px #f50; emove this line */
      transition: .2s ease-in-out;

      /* Hover, active & focus Thumb: Firfox */
      &:hover {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 10px $dark-blue-012;
      }
      &:active {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 10px $dark-blue-012;
      }
      &:focus {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 10px $dark-blue-012;
      }
    }
  }
}
</style>
