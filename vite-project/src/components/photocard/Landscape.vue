<template>
  <VCard
      :image="image"
      height="100vh"
      width="100vw"
  >
    <VCardText>
      <div class="my-back" style="background-image: bg_image; bottom: 5%; position: absolute;">
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
  background-image: url("../../assets/images/icefield_mountains2.jpeg");
  background-position: 75% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent; /* Fallback */
  font-stretch: extra-expanded;  
  font-family: 'Dela Gothic One', sans-serif;
  font-size: 15vh;
  line-height: 1.2; /* Adjust line height as needed */
  font-weight: 400;
  font-style: normal;
  text-align: center;
}
</style>
