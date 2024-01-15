<template>
  <PhotoCard style="margin-top: 128px;" :text="spaceText" :image="spaceImage"></PhotoCard>
</template>

<script setup lang="ts">
import PhotoCard from './PhotoCard.vue';


const spaceText = 'SPACE';
const spaceImage = new URL('../assets/images/space.jpg', import.meta.url).href;
</script>