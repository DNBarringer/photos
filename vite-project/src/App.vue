<template>
  <VApp>
    <VMain class="bg-blue-grey-darken-3" v-scroll="onScroll">
      <TopBar></TopBar>
      <Gallery></Gallery>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
  import Gallery from "./components/Gallery.vue";
  import TopBar from "./components/TopBar.vue";

  function onScroll () {
    console.log("Scrolled");
  };
</script>