<template>
  <div class="auth-view">
    <modal-wrapper>
      <auth-form @submitForm="submitAuthForm" />
    </modal-wrapper>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
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
