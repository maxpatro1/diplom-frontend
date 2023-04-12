<template>
  <v-form class="university" @submit="submit">
    <h1 class="university__title">Учебное заведение</h1>
    <base-button type="submit">Зарегистрироваться</base-button>
  </v-form>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import { Form } from 'vee-validate';

export default {
  name: 'UniversityInfoForm',
  components: {
    BaseButton,
    VForm: Form
  },
  methods: {
    submit() {
      this.$emit('submitForm', {
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
