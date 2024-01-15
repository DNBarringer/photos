<template>
  <VCard
    class="mx-auto"
    theme="dark"
    width="600"
    height="800"
    :image="image"
    style="border: 6px solid rgb(248, 237, 221); border-radius: 0;"
  >
    <VCardText class="text-left text-h1" style="position: absolute; bottom: 0;">
      <div style="position: absolute; bottom: 50px; height: max-content; display: flex; align-items: flex-end;">
        {{ text }}
      </div>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
import { VCard } from 'vuetify/components/VCard';

const props = defineProps(['text', 'image']); // Define your props here
</script>
