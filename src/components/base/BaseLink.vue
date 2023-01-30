<template>
  <router-link v-if="to" class="base-link" :to="to">
    <slot></slot>
  </router-link>
  <a v-else class="base-link" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.base-link {
  color: $blue-primary;

  &:hover {
    text-decoration: underline;
  }
}
</style>
