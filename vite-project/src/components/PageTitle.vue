<template>
    <p class="mt-4 ml-16 custom-font" :style="{ fontFamily: 'Cardo, serif', fontSize: fontSize }">
      David Barringer
    </p>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';

const fontSize = ref(window.innerWidth <= 600 ? '1.5rem' : '4rem');

window.onresize = () => {
fontSize.value = window.innerWidth <= 600 ? '1.5rem' : '4rem';
};
  </script>