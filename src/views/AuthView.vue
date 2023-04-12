<template>
  <div class="auth-view">
    <auth-form />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';

export default {
  name: 'AuthView',
  components: {
    AuthForm,
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
