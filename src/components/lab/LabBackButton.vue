<template>
  <button class="button">
    <svg-sprite
      symbol="arrow-light"
      width="24"
      height="24"
      class="button__icon"
    />
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'LabBackButton',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  background-color: transparent;

  &__icon {
    margin-right: 12px;
    stroke: $black-brown;
  }
}
</style>
