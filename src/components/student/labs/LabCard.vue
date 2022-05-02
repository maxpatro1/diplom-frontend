<template>
  <router-link :to="`lab/${this.lab.id}/`" style="text-decoration: none; color: inherit;">
    <b-card no-body class="scale">
      <div class="px-3 pb-3">
        <div v-if="lab.isComplete === true" class="float-end">
          <span class="badge alert-success">Выполнено</span>
        </div>
        <div v-else class="float-end">
          <span class="badge alert-danger">Не выполнено</span>
        </div>
        <b-card-img class="my-2" src="https://placekitten.com/1000/300"/>
        <h5><b>{{ lab.name }}</b></h5>
        <b-card-text class="text-muted">
          <small>{{ lab.description }}</small>
        </b-card-text>
      </div>
    </b-card>
  </router-link>
</template>

<script>
export default {
  name: "LabCard",
  props: ['lab'],
  mounted() {
    console.log(this.lab)
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
</style>