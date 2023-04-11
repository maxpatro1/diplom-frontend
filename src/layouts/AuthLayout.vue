<template>
  <main class="auth-layout">
    <div class="auth-layout__body">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style lang="scss" scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  background-image: url('@/assets/images/auth-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &__body {
    flex-grow: 1;
  }
}
</style>
