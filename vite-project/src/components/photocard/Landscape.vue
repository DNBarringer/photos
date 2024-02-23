<template>
  <VCard
      height="100vh"
      width="100vw"
  > 
  <VImg :src="image" cover position="center top"></VImg>
  <div class="my-back" :style="{ backgroundImage: `url(${bg_image})`, position: 'absolute', marginLeft: '20px', ...additionalStyle }">
    <p>{{ text }}</p>
  </div>
  </VCard>
</template>

<script setup lang="ts">
  const props = defineProps(['text', 'image', 'bg_image', 'additionalStyle']);
  import { VCard } from 'vuetify/components';
</script>

<style scoped>

.full-width {
  width: 100%; /* Make the image fill the entire width of its container */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Resize the image to cover the entire container, cropping if necessary */
}
.my-back {
  background-position: 75% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent; /* Fallback */
  font-stretch: extra-expanded;  
  font-family: 'Dela Gothic One', sans-serif;
  font-size: 15vh;
  line-height: 1.4; /* Adjust line height as needed */
  font-weight: 400;
  font-style: normal;
  text-align: center;
}
</style>
