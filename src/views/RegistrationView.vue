<template>
  <div class="registration-view">
    <modal-wrapper
      :isBaskButton="!!activeModal.back"
      :title="activeModal.title"
      @clickBackButton="activeModal = activeModal.back"
    >
      <general-info-form
        v-if="activeModal.name === registrationModals.general.name"
        @submitForm="submitGeneralForm"
      />
      <university-info-form
        v-else-if="activeModal.name === registrationModals.university.name"
        @submitForm="submitUniversityForm"
      />
    </modal-wrapper>

    <teleport to="body">
      <password-sent-modal v-if="isPasswordSentModalShow" />
    </teleport>
  </div>
</template>

<script>
import GeneralInfoForm from '@/components/forms/GeneralInfoForm.vue';
import UniversityInfoForm from '@/components/forms/UniversityInfoForm.vue';
import ModalWrapper from '@/components/hoc/ModalWrapper.vue';
import PasswordSentModal from '@/components/modals/PasswordSentModal.vue';

const GENERAL_MODAL = {
  name: 'GENERAL_MODAL',
  title: 'Общее',
  back: null,
};

const UNIVERSITY_MODAL = {
  name: 'UNIVERSITY_MODAL',
  title: 'Учебное заведение',
  back: GENERAL_MODAL,
};

export default {
  name: 'RegistrationView',
  components: {
    ModalWrapper,
    GeneralInfoForm,
    UniversityInfoForm,
    PasswordSentModal,
  },
  data() {
    return {
      isPasswordSentModalShow: false,
      registrationModals: {
        general: GENERAL_MODAL,
        university: UNIVERSITY_MODAL,
      },
      activeModal: GENERAL_MODAL,
    };
  },
  methods: {
    submitGeneralForm(body) {
      console.log(body);
      this.activeModal = this.registrationModals.university;
    },
    submitUniversityForm(body) {
      this.isPasswordSentModalShow = true;
      console.log(body);
    },
  },
};
</script>

<style>
.registration-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
