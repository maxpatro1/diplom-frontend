<template>
  <header class="header">
    <div class="base-container header__wrapper">
      <router-link to="/" class="header__link">
        WebLab
      </router-link>
      <header-user-dropdown />
    </div>
  </header>
</template>

<script>
import HeaderUserDropdown from '@/components/HeaderUserDropdown.vue';

export default {
  name: 'HeaderMain',
  components: {
    HeaderUserDropdown,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 8px 0;
  background-color: $dark-blue;
  color: #fff;
  font-weight: 400;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__link {
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
