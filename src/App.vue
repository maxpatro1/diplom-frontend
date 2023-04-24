<template>
  <div>
    <component v-if="modal" :is="modal"/>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import CoursesLayout from '@/layouts/CoursesLayout.vue';
// modals
import { MODAL_NAMES } from '@/store/modules/modal/constants';
import RegistrationSuccessModal from '@/components/modals/RegistrationSuccessModal.vue';

export default {
  name: 'App',
  components: {
    EmptyLayout,
    AuthLayout,
    CoursesLayout,
    [MODAL_NAMES.REGISTRATION_SUCCESS]: RegistrationSuccessModal,
  },
  computed: {
    ...mapGetters({
      activeModal: 'modal/activeModal',
    }),
    modal() {
      return this.activeModal;
    },
    layout() {
      const { layout } = this.$route.meta;
      return layout || 'empty-layout';
    },
  },
};
</script>
