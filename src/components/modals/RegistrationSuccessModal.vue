<template>
  <base-info-modal
    :modalName="modalName"
    title="Регистрация прошла успешно"
    buttonText="Отлично"
  />
</template>

<script>
import BaseInfoModal from '@/components/base/BaseInfoModal.vue';
import { MODAL_NAMES } from '@/store/modules/modal/constants';

export default {
  name: 'RegistrationSuccessModal',
  data() {
    return {
      modalName: MODAL_NAMES.REGISTRATION_SUCCESS,
    };
  },
  components: {
    BaseInfoModal,
  },
};
</script>
