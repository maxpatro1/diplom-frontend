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
  height: 100%;
}
</style>
