<template>
    <VCard
      height="100vh"
      width="100vw"
    >
      <VImg
        id="primary-image"
        :src="image"
        height="100%"
        width="100%"
        style="position: absolute; top: 50%; left: 50%;  transform: translate(-50%, -50%); filter:  drop-shadow(0 0 40px black); z-index: 2;"/>

      <div class="title" :style="{ backgroundImage: `url(${bgImage})`, whiteSpace: 'pre', position: 'absolute', zIndex: '3', ...titlePositionStyle}"  @click="text_overlay = !text_overlay">
        {{ text }}
      </div>

      <VImg 
        id="background-image"
        :src="image"
        cover position="50% 20%"
        style="filter: brightness(40%) blur(5px); z-index: 1;"/>

      <VOverlay v-model="text_overlay" contained scrim="#000000" class="align-center justify-center">
        <VCard text="This is the additional text that appears"/>
      </VOverlay>

    </VCard>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue';
    import { VCard } from 'vuetify/components';

    const { text, image, bgImage, titlePosition } = defineProps({
    text: String,
    image: String,
    bgImage: String,
    titlePosition: {
      type: String,
      default: 'SW',
      validator: (value: string) => ['NW', 'NE', 'SW', 'SE'].includes(value)
    }
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

  .title {
    background-image: url("../../assets/images/space.jpg");
    -webkit-background-clip: text;
    background-clip: text;
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
    user-select: none;
    cursor: pointer;
  }
  </style>
  