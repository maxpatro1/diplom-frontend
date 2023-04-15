<template>
  <v-form class="auth" @submit="submit">
    <h1 class="auth__app-title">WebLab</h1>
    <base-input
      v-model="email"
      name="email"
      type="email"
      placeholder="Введите почту"
    />
    <div class="auth__wrapper">
      <base-input
        v-model="password"
        name="password"
        type="password"
        placeholder="Введите пароль"
      />
      <button type="button" class="auth__link">Забыли пароль?</button>
    </div>
    <base-button type="submit">Войти</base-button>
  </v-form>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import { Form } from 'vee-validate';

export default {
  name: 'AuthForm',
  components: {
    BaseButton,
    BaseInput,
    VForm: Form
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submit() {
      this.$emit('submitForm', {
        email: this.email,
        password: this.password
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: 24px;

  &__wrapper {
    display: grid;
    grid-template-columns: auto;
    gap: 8px;
  }

  &__link {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    color: $dark-blue;
    background: transparent;
    justify-self: start;
    transition: $transition-md;

    &:hover {
      opacity: .5;
    }
  }

  &__app-title {
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
    color: $dark-blue;
  }
}
</style>
