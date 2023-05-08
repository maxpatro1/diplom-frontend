<template>
  <button class="button" @click="$emit('update:modelValue', !modelValue)">
    {{ label }}
    <svg-sprite
      :symbol="svgIconName"
      width="24"
      height="24"
      class="button__icon"
    />
  </button>
</template>

<script>
export default {
  name: 'LabStartStopButton',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    labelForStart: {
      type: String,
      default: 'Запустить',
    },
    labelForStop: {
      type: String,
      default: 'На паузу',
    },
  },
  computed: {
    svgIconName() {
      return this.modelValue ? 'lab-stop' : 'lab-start';
    },
    label() {
      return this.modelValue ? this.labelForStop : this.labelForStart;
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
    margin-left: 12px;
  }
}
</style>
