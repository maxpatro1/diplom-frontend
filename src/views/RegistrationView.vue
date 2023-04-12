<template>
  <div class="registration-view">
    <modal-wrapper
      :isBaskButton="!!activeModal.back"
      @clickBackButton="activeModal = activeModal.back"
    >
      <general-info-form
        v-if="activeModal.name === registrationModals.general.name"
        @submitForm="submitGeneralForm"
      />
      <university-info-form
        v-if="activeModal.name === registrationModals.university.name"
        @submitForm="submitUniversityForm"
      />
    </modal-wrapper>
  </div>
</template>

<script>
import GeneralInfoForm from '@/components/GeneralInfoForm.vue';
import UniversityInfoForm from '@/components/UniversityInfoForm.vue';
import ModalWrapper from '@/components/hoc/ModalWrapper.vue';

const GENERAL_MODAL = {
  name: 'GENERAL_MODAL',
  back: null
};

const UNIVERSITY_MODAL = {
  name: 'UNIVERSITY_MODAL',
  back: GENERAL_MODAL
};

export default {
  name: 'RegistrationView',
  components: {
    ModalWrapper,
    GeneralInfoForm,
    UniversityInfoForm,
  },
  data() {
    return {
      registrationModals: {
        general: GENERAL_MODAL,
        university: UNIVERSITY_MODAL
      },
      activeModal: GENERAL_MODAL
    }
  },
  methods: {
    submitGeneralForm(body) {
      console.log(body);
      this.activeModal = this.registrationModals.university;
    },
    submitUniversityForm(body) {
      console.log(body);
    }
  }
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
