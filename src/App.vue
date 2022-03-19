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
  .header-color {
    background-color: #E9EBF8;
  }
  body {
    background-color: #f5f5f5 !important;
  }
</style>
