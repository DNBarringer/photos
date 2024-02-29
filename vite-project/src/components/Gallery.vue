<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <VueScrollSnap>
      <TopBar class="item"/>
      <Landscape
        class="item"
        :image="mountainImage"
        :text="mountainTitle"
        :bg-image="bgImage"
        title-position="SW"
        image-position="center top"/>
      <Portrait
        class="item"
        :image="spaceImage"
        :text="spaceTitle"
        :bg-image="spaceImage"
        title-position="SE"/>
      <Landscape
      class="item"
        :image="morganImage"
        :text="morganTitle"
        :bg-image="bgImage"
        title-position="NW"
        image-position="center 80%"/>
    </VueScrollSnap>
  </div>
</template>


<script setup lang="ts">
  import VueScrollSnap from 'vue-scroll-snap';
  import Landscape from './photocard/Landscape.vue';
  import Portrait from './photocard/Portrait.vue';
  import TopBar from './TopBar.vue';

  const spaceTitle = 'Praire\nMountain';
  const spaceImage = new URL('../assets/images/space.jpg', import.meta.url).href;

  const mountainTitle = 'Icefield Parkway';
  const mountainImage = new URL('../assets/images/icefield_mountains.jpg', import.meta.url).href;
  const bgImage = new URL('../assets/images/icefield_mountains2.jpeg', import.meta.url).href;

  const morganTitle = 'Morgan';
  const morganImage = new URL('../assets/images/morgan.jpg', import.meta.url).href;

</script>

<style>
  .item {
    min-height: 100vh;
  }

  .scroll-snap-container {
    height: 100vh;
    width: 100vw;
  }
</style>