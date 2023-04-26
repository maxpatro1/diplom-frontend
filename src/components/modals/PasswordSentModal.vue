<template>
  <base-info-modal
    :modalName="modalName"
    title="Ваш пароль отправлен на почту"
    buttonText="Понятно"
  />
</template>

<script>
import BaseInfoModal from '@/components/base/BaseInfoModal.vue';
import { MODAL_NAMES } from '@/store/modules/modal/constants';

export default {
  name: 'PasswordSentModal',
  data() {
    return {
      modalName: MODAL_NAMES.PASSWORD_SENT_TO_EMAIL,
    };
  },
  components: {
    BaseInfoModal,
  },
};
</script>
