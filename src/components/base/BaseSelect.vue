<template>
  <v-field
    v-slot="{ field, meta }"
    :name="name"
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
        :value="modelValue.value"
        tabindex="-1"
        type="text"
        class="base-select__input"
      >
      <button type="button" class="base-select__button" @click="toggleDropdown">
        <span v-if="!modelValue.value && placeholder" class="base-select__placeholder">
          {{ placeholder }}
        </span>
        <span v-else>
          {{ modelValue.value }}
        </span>
        <svg-sprite
          symbol="arrow-light"
          width="24"
          height="24"
          class="base-select__arrow"
        />
      </button>
      <div v-if="isDropdownOpened" class="base-select-dropdown">
        <ul class="base-select-dropdown__list">
          <li v-for="item in dropdownItems" :key="item.value + item.valueToSend" class="base-select-dropdown__item">
            <button type="button" @click="selectItem(item)" class="base-select-dropdown__button">
              {{ item.value }}
            </button>
          </li>
        </ul>
      </div>
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
      type: Object,
      default: () => ({
        value: '',
        valueToSend: ''
      }),
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    dropdownItems: {
      type: Array,
      default: () => [
        {
          value: 'Default item',
          valueToSend: 'DEFAULT_ITEM',
        }
      ]
    }
  },
  data() {
    return {
      isDropdownOpened: false
    };
  },
  methods: {
    selectItem(item) {
      this.$emit('update:modelValue', item);
      this.closeDropdown();
    },
    toggleDropdown() {
      this.isDropdownOpened = !this.isDropdownOpened;
    },
    closeDropdown() {
      this.isDropdownOpened = false;
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
    transition: background $transition-md;
    background: transparent;

    &:hover {
      background-color: $honey-dew;

      .base-select__arrow {
        stroke: $black-brown;
      }
    }

    &:focus {
      border: 1px solid $dark-blue;
      outline: none;

      .base-select__arrow {
        stroke: $black-brown;
      }
    }
  }

  &__arrow {
    stroke: $traffic-gray;
    transform: rotate(-90deg);
    transition: $transition-md;
  }

  &--is-opened {
    .base-select__button {
      border-radius: 16px 16px 0 0;
      border: 1px solid $dark-blue;
    }
    .base-select__arrow {
      transform: rotate(-90deg) rotateY(180deg);
    }

    .base-select-dropdown {
      border-radius: 0 0 16px 16px;
      border: 1px solid $dark-blue;
      border-top: none;
    }
  }
}

.base-select-dropdown {
  padding: 12px 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  max-height: 168px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid $traffic-gray;
  border-top: none;
  transition: $transition-md;
  overflow-y: scroll;

  &__list {
    display: grid;
    grid-template-columns: auto;
  }

  &__item {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
  }

  &__button {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 12px;
    font-size: 16px;
    line-height: 24px;
    background: transparent;
    transition: $transition-md;

    &:hover {
      background: $honey-dew;
    }
  }
}
</style>
