<template>
  <VApp class="ma-0" width="100%">
    <VMain class="d-flex pa-0 ma-0 bg-blue-grey-darken-3">
      <TopBar></TopBar>
      <Gallery></Gallery>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import Gallery from "./components/Gallery.vue";
import TopBar from "./components/TopBar.vue";
</script>
