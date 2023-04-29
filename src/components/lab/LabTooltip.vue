<template>
  <div class="lab-tooltip">
    <span class="lab-tooltip__body">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Lab-tooltip',
};
</script>

<style lang="scss" scoped>
.lab-tooltip {
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  line-height: 18px;
  background-color: $black-brown;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  &__body {
    display: block;
    position: relative;
    padding: 7px 12px;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0;
      height: 0;
      border-top: 10px solid $black-brown;
      border-right: 10px solid transparent;
      border-radius: 2px;
      transform: rotate(-135deg) translate(80%, 10%);
    }
  }
}
</style>
