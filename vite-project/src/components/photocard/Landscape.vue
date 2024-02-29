<template>
  <VCard
      height="100vh"
      width="100vw"
  > 
    <VImg
      :src="image" 
      cover
      :position="imagePosition"/>

    <div class="title" :style="{ backgroundImage: `url(${bgImage})`, position: 'absolute', ...titlePositionStyle }" @click="text_overlay = !text_overlay">
        <p>{{ text }}</p>
    </div>

    <VOverlay v-model="text_overlay" contained scrim="#000000" class="align-center justify-center">
      <VCard text="This is the additional text that appears"/>
    </VOverlay>

  </VCard>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { VCard, VImg, VOverlay } from 'vuetify/components';

  const { text, image, bgImage, titlePosition, imagePosition } = defineProps({
    text: String,
    image: String,
    bgImage: String,
    titlePosition: {
      type: String,
      default: 'SW',
      validator: (value: string) => ['NW', 'NE', 'SW', 'SE'].includes(value)
    },
    imagePosition: String
  });

  const titlePositionStyle = {
    top: titlePosition.includes('N') ? '5%' : 'auto',
    bottom: titlePosition.includes('S') ? '5%' : 'auto',
    right: titlePosition.includes('E') ? '5%' : 'auto',
    left: titlePosition.includes('W') ? '5%' : 'auto',
  };


  const text_overlay = ref(false);
</script>

<style scoped>

.full-width {
  width: 100%; /* Make the image fill the entire width of its container */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Resize the image to cover the entire container, cropping if necessary */
}
.title {
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
  user-select: none;
  cursor: pointer;
}


</style>
