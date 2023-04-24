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
        :type="fieldType"
        :placeholder="placeholder"
        :class="[
          'base-input__input',
          {
            'base-input__input--pr': isShowEyeButton
          }
        ]"
      >
      <button
        v-if="isShowEyeButton"
        type="button"
        class="base-input__eye"
        @click="isOpenEye = !isOpenEye"
      >
        <svg-sprite
          v-if="isOpenEye"
          symbol="eye"
          width="24"
          height="24"
          class="base-input__eye-icon"
        />
        <svg-sprite
          v-else
          symbol="eye-close"
          width="24"
          height="24"
          class="base-input__eye-icon"
        />
      </button>
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
      default: '',
    },
    rules: {
      type: [Function, String, Object],
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    hideEyeButton: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VField: Field,
    ErrorMessage,
  },
  data() {
    return {
      isOpenEye: true,
    };
  },
  computed: {
    fieldType() {
      if (!this.isOpenEye) return 'text';
      return this.type;
    },
    isShowEyeButton() {
      return this.type === 'password' && !this.hideEyeButton;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  position: relative;
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

  &__eye {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }

  &__alert {
    padding: 0 12px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: $signal-red;
  }

  &__input {
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    border: 1px solid $traffic-gray;
    border-radius: 16px;
    transition: $transition-md;

    &--pr {
      padding-right: 48px;
    }

    &::placeholder {
      color: $traffic-gray;
      font-weight: 400;
    }

    &:focus {
      border: 1px solid $dark-blue;
      outline: none;
    }
  }
}
</style>
