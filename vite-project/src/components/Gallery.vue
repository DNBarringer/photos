<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <PhotoCardLargeLandscape
      :image="mountainImage"
      :text="mountainText"
      :bg_image="bg_image"
      :additionalStyle="{ bottom: '5%' }"
    />
    <PhotoCardLargePortrait
      :image="spaceImage"
      :text="spaceText"
      :bg_image="bg_image"
      :additionalStyle="{ right: '5%', bottom: '5%' }"
    />
    <VCard
      height="100vh"
      width="100vw"
    > 
      <VImg :src="morganImage" cover position="center 80%"></VImg>
      <div class="my-back" :style="{ backgroundImage: `url(${bg_image})`, marginLeft: '20px', position: 'absolute', top: '5%' }">
        <p>{{ morganText }}</p>
      </div>
    </VCard>
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

<style scoped>

  .my-back {
    -webkit-background-clip: text;
    background-clip: text;
    background-position: 65% 50%;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent; /* Fallback */
    font-stretch: extra-expanded;  
    font-family: 'Dela Gothic One', sans-serif;
    font-size: 12vh;
    line-height: 1.4;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    filter: brightness(110%) drop-shadow(0 0 1px #ffffff); /* Adjust the shadow size as needed */
  }
  </style>