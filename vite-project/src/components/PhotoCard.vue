<template>
  <VCard
    class="mx-auto"
    theme="dark"
    width="600"
    height="800"
    :image="test"
  >
  <VCardText class="text-left text-h1" style="position: absolute; bottom: 0;">
      <div style="position: absolute; bottom: 50px; height: max-content; display: flex; align-items: flex-end;">
          SPACE
      </div>
  </VCardText>

</VCard>

</template>s

<script setup lang="ts">
import { VCard } from 'vuetify/components/VCard';

const props = defineProps(['...']); // Define your props here

const test = new URL('../assets/images/space.jpg', import.meta.url).href
console.log(test)

</script>