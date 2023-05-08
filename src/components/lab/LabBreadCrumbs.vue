<template>
  <div class="bread-crumbs">
    <template v-for="(crumb, idx) in breadCrumbs" :key="crumb">
      <router-link class="bread-crumbs__link" :to="crumb.link">
       {{ crumb.title }}
      </router-link>
      <span v-if="idx !== breadCrumbs.length - 1" class="bread-crumbs__slash">
        &nbsp;/&nbsp;
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'LabBreadCrumbs',
  props: {
    breadCrumbs: {
      type: Array,
      required: true,
      validator: (arr) => arr.length === arr.filter((el) => (el.title && el.link)).length,
    },
  },
};
</script>

<style lang="scss" scoped>
.bread-crumbs {
  color: $traffic-gray;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;

  &__link {
    &:last-child {
      color: $black-brown;
    }
  }
}
</style>
