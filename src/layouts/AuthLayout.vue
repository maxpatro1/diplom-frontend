<template>
  <main class="auth-layout">
    <section class="auth-layout__content">
      <slot></slot>
    </section>
    <div class="auth-layout__poster">
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: $screen-lg) {
    grid-template-columns: auto;
  }

  &__poster {
    background: url('@/assets/images/auth-background.png') center no-repeat;
    background-size: cover;
    @media (max-width: $screen-lg) {
      display: none;
    }
  }
}
</style>
