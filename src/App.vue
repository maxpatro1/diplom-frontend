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
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital@0;1&family=Montserrat:wght@500&display=swap');
  .header-color {
      background-color: #1E87F0;
  }
  body {
    background-color: white !important;
  }

  html, body {
      font-family: 'Montserrat', sans-serif;
      font-size: 1vw;
  }

  #app {
    font-family: 'Montserrat', sans-serif;
    font-size: 1vw;
  }
  .text-title {
    color: #081F32;
  }

  .text-description {
    color: #374A59;;
  }
</style>
