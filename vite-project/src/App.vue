<script setup>
  import SideBar from "./components/SideBar.vue";
  import Gallery from "./components/Gallery.vue";
</script>

<template>
  <VApp>
    <SideBar></SideBar>
    <VMain>
      <Gallery class="mx-5 my-2 pa-3"></Gallery>
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
