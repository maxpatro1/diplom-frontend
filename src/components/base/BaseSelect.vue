<template>
  <v-field
    v-slot="{ field, meta }"
    :name="name"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <label
      :class="[
        'base-select',
        {
          'base-select--is-opened': isDropdownOpened
        }
      ]"
    >
      <input
        v-bind="field"
        :name="name"
        :value="modelValue"
        tabindex="-1"
        type="text"
        class="base-select__input"
      >
      <button class="base-select__button" @click="toggleDropdown">
        <span v-if="!modelValue && placeholder" class="base-select__placeholder">
          {{ placeholder }}
        </span>
        <span v-else>
          {{ modelValue }}
        </span>
        <svg-sprite
          symbol="arrow-light"
          width="24"
          height="24"
          class="base-select__arrow"
        />
      </button>
      <error-message class="base-select__alert" :name="name" />
    </label>
  </v-field>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'BaseSelect',
  components: {
    VField: Field,
    ErrorMessage,
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isDropdownOpened: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpened = !this.isDropdownOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
.base-select {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: 4px;
  transition: $transition-md;

  &__input {
    position: absolute;
    opacity: 0;
    z-index: -1;
    width: 0;
    height: 0;

    &:focus {
      outline: none;
    }
  }

  &__placeholder {
    color: $traffic-gray;
    font-weight: 400;
  }

  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    border: 1px solid $traffic-gray;
    border-radius: 16px;
    transition: $transition-md;
    background: transparent;

    &:hover {
      background-color: $honey-dew;
    }

    &:focus {
      border: 1px solid $dark-blue;
      outline: none;
    }
  }

  &__arrow {
    transform: rotate(-90deg);
    transition: $transition-md;
  }

  &--is-opened {
    .base-select__arrow {
      transform: rotate(-90deg) rotateY(180deg);
    }
  }
}
</style>
