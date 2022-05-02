<template>
  <div v-if="this.course">
    <CustomHeader/>
    <h3 class="mx-5 mt-2">{{course.full_name}}</h3>
    <b-row v-if="filteredLabs" class="m-3 d-flex justify-content-around flex-wrap">
    <div v-for="lab in filteredLabs" :key="lab.id" class="card-width mt-2">
       <LabCard :lab="lab"/>
    </div>
  </b-row>
  </div>
</template>

<script>
import LabResource from "../../../resources/lab";
import LabCard from "./LabCard";
import CustomHeader from "../CustomHeader";
import CourseResource from "../../../resources/course";

export default {
  name: "LabList",
  components: {CustomHeader, LabCard },
  data() {
    return {
      labs: null,
      completedLabs: null,
      filteredLabs: null,
      course: null
    }
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.course = await CourseResource.get({id:this.getCourseId})
      this.labs = await LabResource.getLabByCourseId({id: this.getCourseId})
      await this.getLabsStatusForUser()
    },
    async getLabsStatusForUser() {
      this.completedLabs = await LabResource.getCompletedLabs({user_id: this.$store.getters.user.id})
      this.setCourseVariant()
    },
    setCourseVariant() {
      const startedCourseIds = this.completedLabs.map((item) => {
        return item.lab.id
      })
      this.filteredLabs = this.labs.map((lab) => {
        const isComplete = startedCourseIds.includes(lab.id)
        return {
          ...lab,
          isComplete: isComplete
        }
      })
    }
  },
  computed: {
    getCourseId() {
      return this.$route.path.split('/')[3]
    }
  }
}
</script>

<style scoped>
  .card-width {
      width: 300px;
    }

</style>