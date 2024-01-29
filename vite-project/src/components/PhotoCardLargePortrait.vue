<template>
    <VCard height="100vh" width="100%">
        <VImg :src="image" cover position="50% 65%" style="filter: brightness(50%);"></VImg>
        <VImg :src="image" height="100%" width="100vh" style="position: absolute; top: 50%; left: 50%;  transform: translate(-50%, -50%); filter:  drop-shadow(0 0 40px black);"></VImg>
      <VCardText style="white-space: pre;">
        <div class="my-back" style="bottom: 5%; position: absolute;">
          {{ text }}
        </div>
      </VCardText>
    </VCard>
  </template>
  
  <script setup lang="ts">
    const props = defineProps(['text', 'image', 'bg_image']);
    import { VCard, VCardText } from 'vuetify/components';
  </script>
  
<style scoped>
  .my-back {
    background-image: url("../assets/images/space.jpg");
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent; /* Fallback */
    font-stretch: extra-expanded;  
    font-family: 'Dela Gothic One', sans-serif;
    font-size: 15vh;
    line-height: 1.2;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    filter: brightness(200%) drop-shadow(0 0 1px #ffffff); /* Adjust the shadow size as needed */

  }
  </style>
  