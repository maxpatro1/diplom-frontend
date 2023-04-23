<template>
  <ul class="list">
    <li v-for="el in 9" :key="el">
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
.list {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 24px;

  @media screen and (max-width: $screen-md) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: $screen-sm) {
    grid-template-columns: repeat(1, auto);
  }
}
</style>
