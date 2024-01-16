<template>
  <div style="display: flex; flex-direction: column; margin: auto;">
    <PhotoCard style="margin-top: 128px;" :text="spaceText" :image="spaceImage"></PhotoCard>
    <PhotoCard style="margin-top: 128px;" :text="mountainText" :image="mountainImage"></PhotoCard>
  </div>
</template>

<script setup lang="ts">
import PhotoCard from './PhotoCard.vue';


const spaceText = 'Praire Mountain';
const spaceImage = new URL('../assets/images/space.jpg', import.meta.url).href;


const mountainText = 'Icefield Parkway';
const mountainImage = new URL('../assets/images/icefield_mountains.jpg', import.meta.url).href;
</script>