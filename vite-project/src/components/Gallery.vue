<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <PhotoCardLargeLandscape
      :image="mountainImage"
      :text="mountainText"
      :bg_image="bg_image"
      :additionalStyle="{ bottom: '5%' }"
    ></PhotoCardLargeLandscape>
    <PhotoCardLargePortrait
      :image="spaceImage"
      :text="spaceText"
      :bg_image="bg_image"
      :additionalStyle="{ right: '5%', bottom: '5%' }"
    ></PhotoCardLargePortrait>
    <PhotoCardLargeLandscape
      :image="morganImage"
      :text="morganText"
      :bg_image="bg_image"
      :additionalStyle="{ top: '5%' }"
    ></PhotoCardLargeLandscape>
  </div>
</template>


<script setup lang="ts">
import PhotoCardLargeLandscape from './photocard/Landscape.vue';
import PhotoCardLargePortrait from './photocard/Portrait.vue';

const spaceText = 'Praire\nMountain';
const spaceImage = new URL('../assets/images/space.jpg', import.meta.url).href;

const mountainText = 'Icefield Parkway';
const mountainImage = new URL('../assets/images/icefield_mountains.jpg', import.meta.url).href;
const bg_image = new URL('../assets/images/icefield_mountains2.jpeg', import.meta.url).href;

const morganText = 'Morgan';
const morganImage = new URL('../assets/images/morgan.jpg', import.meta.url).href;

</script>