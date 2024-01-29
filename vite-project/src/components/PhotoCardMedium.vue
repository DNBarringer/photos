<template>
  <VCard
    class="mx-auto"
    theme="dark"
    :width="getCardWidth(photoType)"
    max-width="100%"
    :height="getCardHeight(photoType)"
    max-height="100%"
    :image="image"
    style="border: 6px solid rgb(248, 237, 221); border-radius: 0;"
    @click="showDialog = true"
  >
    <VCardText style="position: absolute; bottom: 0;">
      <div style="font-size: 4vh;">
        {{ text }}
      </div>
    </VCardText>

    <VDialog v-model="showDialog" @overlay-click="showDialog = false" max-width="70%" min-width="500px">
      <div style="overflow-y: auto;">
        <VImg :src="image" contain />
      </div>
    </VDialog>
  </VCard>
</template>

<style scoped>
/* Adjust min-width for different screen sizes using media queries */
@media only screen and (max-width: 600px) {
  .mx-auto {
    width: 100%; /* Adjust this value as needed */
    max-width: 100%; /* Adjust this value as needed */
    height: 100%; /* Adjust this value as needed */
    max-height: 100%; /* Adjust this value as needed */
  }
}
</style>

<script setup lang="ts">
  import { ref } from 'vue';
  import { VCard, VCardText, VDialog, VImg } from 'vuetify/components';
  import { PHOTO_TYPES } from '../photoTypes';

  const props = defineProps(['text', 'image', 'photoType']);
  const showDialog = ref(false);

  const getCardWidth = (type: any) => {
    switch (type) {
      case PHOTO_TYPES.LANDSCAPE:
        return window.innerWidth <= 600 ? '100vw' : '85vh';
      case PHOTO_TYPES.PORTRAIT:
      return window.innerWidth <= 600 ? '100vw' : '55vh';
      case PHOTO_TYPES.SQUARE:
        return '70vh';
      default:
        return '55vh';
    }
  };

  const getCardHeight = (type: any) => {
    switch (type) {
      case PHOTO_TYPES.LANDSCAPE:
      return window.innerWidth <= 600 ? '70vw' : '55vh';
      case PHOTO_TYPES.PORTRAIT:
        return '85vh';
      case PHOTO_TYPES.SQUARE:
        return '70vh';
      default:
        return '85vh';
    }
  };

  const getFontSize = (type: any) => {
    switch (type) {
      case PHOTO_TYPES.LANDSCAPE:
        return '2.5vh';
      case PHOTO_TYPES.PORTRAIT:
        return '4vh';
      case PHOTO_TYPES.SQUARE:
        return '3vh';
      default:
        return '4vh';
    }
  };
</script>
