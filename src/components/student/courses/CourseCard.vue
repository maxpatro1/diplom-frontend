<template>
  <router-link :to="`course/${this.course.id}/labs`" style="text-decoration: none; color: inherit;">
    <b-card no-body class="scale">
      <div class="px-3 pb-3">
        <div class="float-end">
          <span :class="statusStyle">{{ statusText }}</span>
        </div>
        <b-card-img class="my-2" src="https://placekitten.com/1000/300"/>
        <h5 class="mt-2 text-title"><b>{{ course.name }}</b></h5>
        <b-card-text class="text-description mt-2">
          <small>{{ course.description }}</small>
        </b-card-text>
      </div>
    </b-card>
  </router-link>
</template>

<script>
export default {
  name: "CourseCard",
  props: ['course'],
  data() {
    return {
      statusText: null,
      statusStyle: ''
    }
  },
  mounted() {
    this.getBadgeStyle()
  },
  methods: {
     getBadgeStyle() {
       this.statusText = this.course.variant === 'new' ? 'Новое' : 'Начатое'
       this.statusStyle = this.course.variant === 'new' ? 'badge alert-success' : 'badge alert-warning'
    }
  }
}
</script>

<style scoped>
  .scale {
    transition: 0.5s; /* Время эффекта */
  }
  .scale:hover {
    transform: scale(1.1); /* Увеличиваем масштаб */
  }
  .description-color {
    color: #374A59;
  }
</style>