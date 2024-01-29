<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <PhotoCardLargeLandscape
      :image="mountainImage"
      :text="mountainText"
      :bg_image="bg_image"
      style="height: 100vh; width: 100vw;"
    ></PhotoCardLargeLandscape>
    <PhotoCardLargePortrait
      :image="spaceImage"
      :text="spaceText"
      :bg_image="bg_image"
      style="height: 100vh; width 100vw"
    ></PhotoCardLargePortrait>
  </div>
</template>


<script setup lang="ts">
import { PHOTO_TYPES } from '../photoTypes';
import PhotoCardLargeLandscape from './PhotoCardLargeLandscape.vue';
import PhotoCardLargePortrait from './PhotoCardLargePortrait.vue';
import PhotoCardMedium from './PhotoCardMedium.vue';



const spaceText = 'Praire\nMountain';
const spaceImage = new URL('../assets/images/space.jpg', import.meta.url).href;


const mountainText = 'Icefield Parkway';
const mountainImage = new URL('../assets/images/icefield_mountains.jpg', import.meta.url).href;
const bg_image = new URL('../assets/images/icefield_mountains2.jpeg', import.meta.url).href;

</script>