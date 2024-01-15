<template>
  <VCard
    class="mx-auto"
    theme="dark"
    width="35%"
    height="90%"
    :image="image"
    style="border: 6px solid rgb(248, 237, 221); border-radius: 0;"
    @click="showDialog = true"
  >
    <VCardText class="text-left text-h1" style="position: absolute; bottom: 0;">
      <div style="position: absolute; bottom: 50px; height: max-content; display: flex; align-items: flex-end;">
        {{ text }}
      </div>
    </VCardText>

    <VDialog v-model="showDialog" @overlay-click="showDialog = false" max-width="70%">
      <div style="overflow-y: auto;">
        <VImg :src="image" contain />
      </div>
    </VDialog>
  </VCard>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { VCard, VCardText, VDialog, VImg } from 'vuetify/components';

  const props = defineProps(['text', 'image']); // Define your props here
  const showDialog = ref(false);
</script>