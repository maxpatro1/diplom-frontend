<template>
  <base-info-modal
    title="Ваш пароль отправлен на почту"
    buttonText="Понятно"
  />
</template>

<script>
import BaseInfoModal from '@/components/base/BaseInfoModal.vue';

export default {
  name: 'PasswordSentModal',
  components: {
    BaseInfoModal,
  },
};
</script>
