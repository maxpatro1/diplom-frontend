<template>
  <div class="user">
    <button type="button" class="user__button">
      Екатерина
      <svg-sprite
        symbol="arrow-light"
        width="24"
        height="24"
        class="user__arrow"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'HeaderUserDropdown',
};
</script>

<style lang="scss" scoped>
.user {
  &__button {
    display: grid;
    grid-template-columns: auto auto;
    gap: 16px;
    color: #fff;
    background-color: transparent;
  }

  &__arrow {
    stroke: #fff;
    transform: rotate(-90deg);
  }
}
</style>
