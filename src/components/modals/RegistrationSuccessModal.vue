<template>
  <base-info-modal
    title="Регистрация прошла успешно"
    buttonText="Отлично"
    @clickOnButton="$emit('closeModal')"
    @clickOnBackdrop="$emit('closeModal')"
  />
</template>

<script>
import BaseInfoModal from '@/components/base/BaseInfoModal.vue';

export default {
  name: 'RegistrationSuccessModal',
  components: {
    BaseInfoModal,
  },
};
</script>
