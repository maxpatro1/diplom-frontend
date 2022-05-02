<template>
  <b-row v-if="filteredCourses" class="m-4 d-flex justify-content-around flex-wrap">
    <div v-for="course in filteredCourses" :key="course.id" class="card-width mt-2">
       <CourseCard
           :course="course"
       />
    </div>
  </b-row>
</template>

<script>
import CourseCard from "./CourseCard";
import CourseResource from "../../../resources/course";
export default {
  name: "CoursesList",
  components: { CourseCard },
  data() {
    return {
      courses: null,
      startedCourses: null,
      filteredCourses: null
    }
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.courses = await CourseResource.fetch()
      await this.getCourseStatusForUser()
    },
    async getCourseStatusForUser() {
      this.startedCourses = await CourseResource.getStartedCourses({user_id: this.$store.getters.user.id})
      this.setCourseVariant()
    },
    setCourseVariant() {
      const startedCourseIds = this.startedCourses.map((item) => {
        return item.course.id
      })
      this.filteredCourses = this.courses.map((course) => {
        const variant = startedCourseIds.includes(course.id) ? 'started' : 'new'
        return {
          ...course,
          variant: variant
        }
      })
    }
  },
}
</script>

<style scoped>
  .card-width {
    width: 300px;
  }
</style>