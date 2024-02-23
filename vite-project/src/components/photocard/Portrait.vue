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
          style="position: absolute; top: 50%; left: 50%;  transform: translate(-50%, -50%); filter:  drop-shadow(0 0 40px black); z-index: 2;"
        ></VImg>

        <div class="my-back" :style="{ whiteSpace: 'pre', position: 'absolute', zIndex: '3', ...additionalStyle} ">
          {{ text }}
        </div>

        <VImg 
          id="background-image"
          :src="image"
          cover position="50% 20%"
          style="filter: brightness(40%) blur(5px); z-index: 1;"
        ></VImg>

    </VCard>
  </template>
  
  <script setup lang="ts">
    const props = defineProps(['text', 'image', 'bg_image', 'additionalStyle']);
    import { VCard } from 'vuetify/components';
  </script>
  
<style scoped>

  .my-back {
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
  }
  </style>
  