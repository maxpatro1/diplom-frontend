<template>
  <div id="app">
    <main class="background-main">
      <router-view />
    </main>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&display=swap');

  .header-color {
      background-color: #E9EBF8;
  }
  body {
    background-color: #f5f5f5 !important;
  }

  html, body {
      font-family: 'Open Sans', sans-serif;
  }

  #app {
    font-family: 'Open Sans', sans-serif;
  }
  .text-title {
    color: #081F32;
  }

  .text-description {
    color: #374A59;;
  }
</style>
