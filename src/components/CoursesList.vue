<template>
  <ul class="list">
    <li>
      <courses-list-item />
    </li>
  </ul>
</template>

<script>
import CoursesListItem from '@/components/CoursesListItem.vue';

export default {
  name: 'CoursesList',
  components: {
    CoursesListItem,
  }
};
</script>

<style lang="scss" scoped>

</style>
