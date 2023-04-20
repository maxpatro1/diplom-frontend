<template>
  <div class="auth-view">
    <modal-wrapper title="WebLab" isBlueTitle>
      <auth-form
        @submitForm="submitAuthForm"
        @openForgetPassword="openForgetPassword"
      />
    </modal-wrapper>
  </div>
</template>

<script>
import AuthForm from '@/components/forms/AuthForm.vue';
import ModalWrapper from '@/components/hoc/ModalWrapper.vue';

export default {
  name: 'AuthView',
  components: {
    ModalWrapper,
    AuthForm,
  },
  methods: {
    submitAuthForm(body) {
      console.log(body);
    },
    openForgetPassword() {
      console.log('openForgetPassword');
    }
  }
};
</script>

<style>
.auth-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
