<template>
  <div class="base-radio-box">
    <p v-if="label" class="base-radio-box__label">{{ label }}</p>
    <base-radio
      v-for="item in items"
      :key="item.valueToSend + item.label"
      :modelValue="modelValue.valueToSend"
      :value="item.valueToSend"
      :label="item.label"
      :name="name"
      @update:modelValue="$emit('update:modelValue', item)"
    />
  </div>
</template>

<script>
import BaseRadio from '@/components/base/BaseRadio.vue';

export default {
  name: 'BaseRadioBox',
  components: {
    BaseRadio,
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        label: 'Default radio',
        valueToSend: 'DEFAULT_RADIO',
      }),
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [
        {
          label: 'Default radio',
          valueToSend: 'DEFAULT_RADIO',
        },
      ],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-radio-box {
  &__label {
    color: $traffic-gray;
    margin: 8px;
  }
}
</style>
