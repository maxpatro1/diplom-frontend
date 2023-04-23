<template>
  <span :class="classes">
    <span class="base-loader__text">{{ Math.round(process) }} %</span>
  </span>
</template>

<script>
const COLORS = ['dark', 'light', 'blue', 'danger'];
const PROCESS_NUMBERS = [100, 94, 88, 82, 75, 68, 62, 56, 50, 44, 38, 32, 25, 18, 12, 6, 0];

export default {
  name: 'BaseRoundNumberLoader',
  props: {
    color: {
      type: String,
      default: 'blue',
      validator: (value) => COLORS.includes(value)
    },
    size: {
      type: Number,
      default: 24
    },
    process: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes() {
      const processNumber = this.roundProcessNumber(this.process, 0);
      return [
        'base-loader',
        `is-${this.color}`,
        `size-${this.size}`,
        `process-${processNumber}`
      ];
    }
  },
  methods: {
    roundProcessNumber(number, counter) {
      const currentNumber = Math.round(number);
      if (currentNumber === 0) return currentNumber;

      const downCurrentNumber = currentNumber - counter;
      const upCurrentNumber = currentNumber + counter;

      const process = PROCESS_NUMBERS.find((el) => el === currentNumber || el === upCurrentNumber || el === downCurrentNumber);

      if (process === 0) return process;
      return process || this.roundProcessNumber(number, counter + 1);
    },
  }
}
</script>
<style lang="scss" scoped>
.base-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  border-radius: 50%;
  position: relative;
  background-color: #fff;
  transform: rotate(-135deg);

  &__text {
    transform: rotate(135deg);
  }

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 2px solid #fff;
    animation: prixClipFix 2s linear infinite ;
    clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0);
  }
  &.is-blue {
    &::before {
      border-color: $dark-blue;
    }
  }
  &.is-dark {
    &::before {
      border-color: $black-brown;
    }
  }
  &.is-light {
    &::before {
      border-color: #fff;
    }
  }
  &.is-danger {
    &::before {
      border-color: $signal-red;
    }
  }
  &.size-24 {
    width: 24px;
    height: 24px;
  }
  &.size-48 {
    width: 48px;
    height: 48px;
  }

  &.process-0 {
    &::before {
      clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0);
    }
  }
  &.process-6 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,25% 0);
    }
  }
  
  &.process-12 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,50% 0);
    }
  }
  &.process-18 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,75% 0);
    }
  }
  &.process-25 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0);
    }
  }
  
  &.process-32 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 25%)
    }
  }
  &.process-38 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 50%)
    }
  }
  &.process-44 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 75%)
    }
  }
  &.process-50 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)
    }
  }
  &.process-56 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,75% 100%)
    }
  }
  &.process-62 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,50% 100%)
    }
  }
  &.process-68 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,25% 100%)
    }
  }

  &.process-75 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%);
    }
  }
  &.process-82 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 75%);
    }
  }
  &.process-88 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 50%);
    }
  }
  &.process-94 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 25%);
    }
  }

  &.process-100 {
    &::before {
      clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0);
    }
  }
}

// @keyframes prixClipFix {
//     0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
//     25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
//     50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
//     75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
//     100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
// }
</style>
