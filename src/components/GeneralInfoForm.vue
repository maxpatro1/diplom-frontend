<template>
  <v-form class="general" @submit="submit">
    <h1 class="general__title">Общее</h1>
    <base-input
      v-model="firstName"
      name="firstName"
      type="text"
      placeholder="Введите имя"
      rules="required"
    />
    <base-input
      v-model="lastName"
      name="lastName"
      type="text"
      placeholder="Введите фамилию"
    />
    <base-input
      v-model="email"
      name="email"
      type="email"
      placeholder="Введите почту"
    />
    <base-input
      v-model="password"
      name="password"
      type="password"
      placeholder="Введите пароль"
    />
    <base-input
      v-model="confirmPassword"
      name="confirmPassword"
      type="password"
      placeholder="Повторите пароль"
    />
    <base-button type="submit">Далее</base-button>
  </v-form>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import { Form } from 'vee-validate';

export default {
  name: 'GeneralInfoForm',
  components: {
    BaseButton,
    BaseInput,
    VForm: Form
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    submit() {
      this.$emit('submitForm', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.general {
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
