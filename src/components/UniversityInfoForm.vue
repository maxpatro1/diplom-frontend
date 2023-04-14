<template>
  <v-form class="university" @submit="submit">
    <h1 class="university__title">Учебное заведение</h1>
    <base-select
      v-model="university"
      name="university"
      placeholder="Выберите свой ВУЗ"
    />
    <base-input
      v-model="group"
      name="group"
      type="text"
      placeholder="Введите номер группы"
    />
    <base-button type="submit">Зарегистрироваться</base-button>
  </v-form>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import { Form } from 'vee-validate';

export default {
  name: 'UniversityInfoForm',
  components: {
    BaseButton,
    BaseInput,
    BaseSelect,
    VForm: Form
  },
  data() {
    return {
      university: '',
      group: ''
    };
  },
  methods: {
    submit() {
      this.$emit('submitForm', {
        group: this.group
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.university {
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: 24px;

  &__title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
  }
}
</style>
