<template>
  <div class="auth-view">
    <modal-wrapper
      :title="activeModal.title"
      :isBlueTitle="activeModal.isBlueTitle"
      :isBaskButton="!!activeModal.back"
      @clickBackButton="activeModal = activeModal.back"
    >
      <auth-form
        v-if="activeModal.name === authModals.auth.name"
        @submitForm="submitAuthForm"
        @openForgetPassword="openForgetPassword"
      />
      <forget-password-form
        v-else-if="activeModal.name === authModals.forgetPassword.name"
        @submitForm="submitForgetPasswordForm"
      />
    </modal-wrapper>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ModalWrapper from '@/components/hoc/ModalWrapper.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import ForgetPasswordForm from '@/components/forms/ForgetPasswordForm.vue';
import { MODAL_NAMES } from '@/store/modules/modal/constants';

const AUTH_MODAL = {
  name: 'AUTH_MODAL',
  title: 'WebLab',
  isBlueTitle: true,
  back: null,
};

const FORGET_PASSWORD_MODAL = {
  name: 'FORGET_PASSWORD_MODAL',
  title: 'Напомнить пароль',
  isBlueTitle: false,
  back: AUTH_MODAL,
};

export default {
  name: 'AuthView',
  components: {
    ModalWrapper,
    AuthForm,
    ForgetPasswordForm,
  },
  data() {
    return {
      authModals: {
        auth: AUTH_MODAL,
        forgetPassword: FORGET_PASSWORD_MODAL,
      },
      activeModal: AUTH_MODAL,
    };
  },
  methods: {
    ...mapActions({
      showModal: 'modal/showModal',
    }),
    submitAuthForm(body) {
      console.log(body);
    },
    submitForgetPasswordForm(body) {
      console.log(body);
      this.showModal(MODAL_NAMES.PASSWORD_SENT_TO_EMAIL);
    },
    openForgetPassword() {
      this.activeModal = this.authModals.forgetPassword;
      console.log('openForgetPassword');
    },
  },
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
