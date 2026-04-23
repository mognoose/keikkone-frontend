<template>
  <header class="app-header">
    <div class="header-inner">
      <img src="/keikkonen_logo.svg" alt="Keikkone logo" class="header-logo" />
      <div class="header-text">
        <h1 class="header-logotype">Keikkone</h1>
        <p class="header-tagline">Missä seuraavaksi bogoillaan?</p>
      </div>
      <button class="dark-toggle" :aria-label="isDark ? 'Vaihda vaaleaan tilaan' : 'Vaihda tummaan tilaan'" @click="toggle">
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-3a1 1 0 011 1v1a1 1 0 01-2 0V5a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zm8.66-12.66a1 1 0 010 1.41l-.7.71a1 1 0 11-1.42-1.42l.71-.7a1 1 0 011.41 0zM4.05 18.36a1 1 0 010 1.41l-.7.71a1 1 0 11-1.42-1.42l.71-.7a1 1 0 011.41 0zM21 12a1 1 0 011 1h1a1 1 0 010 2h-1a1 1 0 01-1-1zm-16 0a1 1 0 01-1 1H3a1 1 0 010-2h1a1 1 0 011 1zm14.36 7.95a1 1 0 01-1.41 0l-.71-.7a1 1 0 111.42-1.42l.7.71a1 1 0 010 1.41zM5.64 4.05a1 1 0 01-1.41 0l-.71-.7A1 1 0 114.93 1.93l.7.71a1 1 0 010 1.41z"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2 1 1 0 00-.64-1.11 1 1 0 00-1.27.52 10.14 10.14 0 1014.22 11.1 1 1 0 000-1z"/></svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isDark, toggle } = useDarkMode()
</script>

<style scoped>
@import '~/assets/css/AppHeader.css';
</style>
