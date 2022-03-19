<template>
  <b-row class="m-4 d-flex justify-content-around flex-wrap">
    <div v-for="course in courses" :key="course.id" class="card-width">
       <CourseCard
           :course="course"
       />
    </div>
  </b-row>
</template>

<script>
import CourseCard from "./CourseCard";
import CourseResource from "../../resources/course";
export default {
  name: "CoursesList",
  components: { CourseCard },
  data() {
    return {
      courses: null
    }
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.courses = await CourseResource.fetch()
    }
  }
}
</script>

<style scoped>
  .card-width {
    width: 300px;
  }
</style>