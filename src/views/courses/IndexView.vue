<template>
  <div class="courses-view">
    <courses-list />
  </div>
</template>

<script>
import CoursesList from '@/components/CoursesList.vue';

export default {
  name: 'CoursesView',
  components: {
    CoursesList,
  }
};
</script>

<style lang="scss" scoped>
</style>
