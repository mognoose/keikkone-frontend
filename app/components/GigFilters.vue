<template>
  <div class="filters">
    <div class="filter-group">
      <label class="filter-label">Artisti</label>
      <input
        v-model="artist"
        type="text"
        class="filter-select"
        placeholder="Hae artistia..."
        @input="emitFilters"
      />
    </div>

    <div class="filter-group">
      <label class="filter-label">Genre</label>
      <select v-model="genre" class="filter-select" @change="emitFilters">
        <option value="">Kaikki</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="metal">Metal</option>
        <option value="hiphop">Hip Hop</option>
        <option value="jazz">Jazz</option>
        <option value="electronic">Elektroninen</option>
        <option value="folk">Folk / Kansanmusiikki</option>
      </select>
    </div>

    <div class="filter-group">
      <label class="filter-label">Paikan koko</label>
      <select v-model="venueSize" class="filter-select" @change="emitFilters">
        <option value="">Kaikki</option>
        <option value="small">Pieni (alle 300)</option>
        <option value="medium">Keskikokoinen (300–1000)</option>
        <option value="large">Suuri (yli 1000)</option>
      </select>
    </div>

    <div class="filter-group">
      <label class="filter-label">Lipun hinta</label>
      <select v-model="priceRange" class="filter-select" @change="emitFilters">
        <option value="">Kaikki</option>
        <option value="free">Ilmainen</option>
        <option value="under20">Alle 20 €</option>
        <option value="20to50">20–50 €</option>
        <option value="over50">Yli 50 €</option>
      </select>
    </div>

    <div class="filter-group">
      <label class="filter-label">Päivämäärä</label>
      <input
        v-model="date"
        type="date"
        class="filter-select"
        @change="emitFilters"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface GigFilterValues {
  genre: string
  venueSize: string
  priceRange: string
  date: string
  artist: string
}

const emit = defineEmits<{
  change: [filters: GigFilterValues]
}>()

const genre = ref('')
const venueSize = ref('')
const priceRange = ref('')
const date = ref('')
const artist = ref('')

function emitFilters() {
  emit('change', {
    genre: genre.value,
    venueSize: venueSize.value,
    priceRange: priceRange.value,
    date: date.value,
    artist: artist.value,
  })
}
</script>

<style scoped>
@import '~/assets/css/GigFilters.css';
</style>
