<template>
  <component :is="tag" :class="['base-title', tag]">
    <slot></slot>
  </component>
</template>

<script>
const TITLE_VALUES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  name: 'BaseTitle',
  props: {
    tag: {
      type: String,
      default: 'h1',
      validator: (value) => TITLE_VALUES.includes(value)
    }
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  &.h1 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
  }
}
</style>
