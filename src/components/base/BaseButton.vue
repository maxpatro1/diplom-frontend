<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss" scoped>
.base-button {
  padding: 8px 24px;
  color: #fff;
  background: $blue-primary;
  border-radius: $radius-sm;
}
</style>
