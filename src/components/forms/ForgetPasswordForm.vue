<template>
  <v-form class="forget-password" @submit="submit">
    <base-input
      v-model="email"
      name="email"
      type="email"
      placeholder="Введите почту"
    />
    <base-button type="submit">Отправить</base-button>
  </v-form>
</template>

<script>
import { Form } from 'vee-validate';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';

export default {
  name: 'ForgetPasswordForm',
  components: {
    BaseButton,
    BaseInput,
    VForm: Form
  },
  data() {
    return {
      email: ''
    };
  },
  methods: {
    submit() {
      this.$emit('submitForm', {
        email: this.email,
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.forget-password {
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: 24px;
}
</style>