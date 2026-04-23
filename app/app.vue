<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <AppHeader />

    <main>
      <LocationSearch v-model="selectedCity" @select="onCitySelect" />

      <Transition name="fade">
        <GigList v-if="showGigs" :city="selectedCity" />
      </Transition>
    </main>
  </div>
</template>

<script setup lang="ts">
const selectedCity = ref('')
const showGigs = ref(false)

function onCitySelect(city: string) {
  if (city.trim()) {
    showGigs.value = true
  }
}
</script>

<style>
@import '~/assets/css/app.css';
</style>
