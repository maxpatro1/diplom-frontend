<template>
  <div class="workplace">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LabWorkplace',
};
</script>

<style lang="scss" scoped>
.workplace {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 72px;
}
</style>
