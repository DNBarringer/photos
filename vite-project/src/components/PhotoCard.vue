<template>
  <VCard
    class="mx-auto"
    theme="dark"
    width="55vh"
    max-width="100%"
    height="85vh"
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
    min-width: 100%; /* Adjust this value as needed */
  }
}
</style>

<script setup lang="ts">
  import { ref } from 'vue';
  import { VCard, VCardText, VDialog, VImg } from 'vuetify/components';

  const props = defineProps(['text', 'image']);
  const showDialog = ref(false);

</script>