<template>
  <span :class="classes"></span>
</template>

<script>
const COLORS = ['dark', 'light', 'danger'];

export default {
  name: 'BaseRoundLoader',
  props: {
    color: {
      type: String,
      default: 'light',
      validator: (value) => COLORS.includes(value),
    },
  },
  computed: {
    classes() {
      return [
        'base-loader',
        `is-${this.color}`,
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.base-loader {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 2px solid #FFF;
    animation: prixClipFix 2s linear infinite ;
    clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%);
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
}
@keyframes rotate {
  100%   {transform: rotate(360deg)}
}

@keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}
</style>
