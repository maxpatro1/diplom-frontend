<template>
  <button type="button" :class="classes" :disabled="disabled">
    <lab-tooltip v-if="title" class="lab-button__tooltip">
      {{ title }}
    </lab-tooltip>
    <slot></slot>
  </button>
</template>

<script>
import LabTooltip from '@/components/lab/LabTooltip.vue';

const STATES = {
  DEFAULT: 'default',
  START: 'start',
  PROCESS: 'process',
  FINISH: 'finish',
};

export default {
  name: 'LabButton',
  components: {
    LabTooltip,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      default: STATES.DEFAULT,
      validator: (val) => Object.values(STATES).includes(val),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'lab-button',
        `lab-button--${this.state}`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.lab-button {
  position: relative;
  padding: 12px 24px;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  border-radius: 14px;
  transition: $transition-md;

  &:hover {
    .lab-button__tooltip {
      opacity: 1;
    }
  }

  &__tooltip {
    position: absolute;
    opacity: 0;
    bottom: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    transition: $transition-md;
    user-select: none;
    pointer-events: none;
  }

  &.lab-button {
    &--default {
      background-color: #fff;
      border: 1px solid $traffic-gray;

      &:hover {
        background-color: $honey-dew;
      }
    }

    &--start {
      background-color: #fff;
      border: 1px solid $dark-blue;
    }

    &--process {
      background-color: rgba(63, 136, 188, 0.4);
      border: 1px solid $dark-blue;
    }

    &--finish {
      color: #fff;
      background-color: $dark-blue;
      border: 1px solid $dark-blue;
    }

    &:disabled {
      color: $traffic-gray;
      background-color: $honey-dew;
      border: 1px solid $honey-dew;
      cursor: default;
    }
  }
}
</style>
