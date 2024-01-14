<script setup lang="ts">
  import Gallery from "./components/Gallery.vue";
  import SideBar from "./components/SideBar.vue";
</script>

<template>
  <VApp>
    <SideBar></SideBar>
    <VMain class="pa-0">
      <Gallery></Gallery>
    </VMain>
  </VApp>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
