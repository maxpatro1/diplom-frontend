<template>
  <header class="header-color header-height">
      <div class="d-flex justify-content-between">
        <div class="align-content-center">
          <b-navbar-brand class="mx-3">
            <b-icon-list v-if="labs" class="icon-size mx-2" v-b-toggle.sidebar-backdrop></b-icon-list>
            <router-link class="router-link" to="/student/courses">
              c o u r s e s
            </router-link>
<!--            <span v-if="getLabName">/ l a b {{ $route.path.split('/')[5] }}</span>-->
          </b-navbar-brand>
        </div>
        <div class="mx-3">
          <div class="d-flex justify-content-center">{{$store.getters.user.last_name}} {{$store.getters.user.first_name}}</div>
          <p class="text-muted"><small>{{$store.getters.user.email}}</small></p>
        </div>
      </div>
      <b-sidebar title="Лабораторные работы" no-header id="sidebar-backdrop" backdrop shadow>
        <h5 class="my-3">Cписок лабораторных:</h5>
        <b-list-group>
          <b-list-group-item v-for="lab in labs" :key="lab.id">
            <router-link class="router-link" :to="`/student/course/2/lab/${lab.id}`">
              {{ lab.name }}
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </b-sidebar>
    </header>
</template>

<script>
export default {
  name: "CustomHeader",
  props: ['labs'],
  computed: {
    getLabName() {
      const test = this.$route.path
      console.log(this.labs)
      return test.split('/')[4] === 'lab'
    }
  }
}
</script>

<style scoped>
  .header-height {
   height: 50px;
  }
  .icon-size {
    width: 20px;
  }
  a {
    color: black;
    text-decoration: none;
  }
</style>