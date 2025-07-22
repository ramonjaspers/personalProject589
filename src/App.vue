<script setup lang="ts">
import { onMounted } from 'vue'
import { setupCursorGlow } from './utils/cursor'

onMounted(() => {
  setupCursorGlow()
})
</script>

<template>
  <div id="site">
    <nav class="navbar">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link">Contact</a>
    </nav>

    <div class="background-text">
      <span class="moving first">simplicity is brilliance</span>
      <span class="moving second">complexity is redundancy</span>
      <span class="moving third">Clarity scales, clutter breaks</span>
    </div>

    <div class="cursor-glow"></div>
  </div>
</template>
