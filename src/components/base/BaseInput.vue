<template>
  <v-field
    v-slot="{ field, meta }"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :rules="rules"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <label
      :class="[
        'base-input',
        {
          'base-input--no-valid': !meta.valid && meta.touched
        }
      ]"
    >
      <input
        v-bind="field"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        class="base-input__input"
      >
      <error-message class="base-input__alert" :name="name" />
    </label>
  </v-field>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'BaseInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    rules: {
      type: [Function, String],
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  components: {
    VField: Field,
    ErrorMessage,
  },
  computed: {
    classes() {
      return [
        'base-input',
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: 4px;
  transition: $transition-md;

  &:hover {
    .base-input__input {
      background-color: $honey-dew;
    }
  }

  &--no-valid {
    .base-input__input {
      border: 1px solid $signal-red;
    }
  }

  &__alert {
    padding: 0 12px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: $signal-red;
  }

  &__input {
    flex-grow: 1;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    border: 1px solid $traffic-gray;
    border-radius: 16px;
    transition: $transition-md;

    &::placeholder {
      color: $traffic-gray;
      font-weight: 400;
    }

    &:focus {
      border: 1px solid $dark-blue;
    }
  }
}
</style>
