<template>
  <section class="location-section">
    <p class="location-label">
      <svg
        class="location-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        />
      </svg>
      Kerro pitäjäs:
    </p>

    <input
      v-model="location"
      type="text"
      class="location-input"
      placeholder="Syötä paikkakunta..."
      @keyup.enter="$emit('select', location)"
    />

    <div class="quick-buttons">
      <button
        v-for="city in popularCities"
        :key="city"
        class="quick-btn"
        :class="{ active: city === modelValue }"
        @click="selectCity(city)"
      >
        {{ city }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  select: [city: string]
}>()

const popularCities = ['Helsinki', 'Tampere', 'Turku', 'Oulu']

const location = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})

function selectCity(city: string) {
  emit('update:modelValue', city)
  emit('select', city)
}
</script>

<style scoped>
@import '~/assets/css/LocationSearch.css';
</style>
