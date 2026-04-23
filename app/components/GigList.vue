<template>
  <section class="gig-section">
    <GigFilters @change="onFilterChange" />

    <p v-if="filteredGigs.length === 0" class="no-results">
      Ei keikkoja näillä suodattimilla. Kokeile muuttaa hakuehtoja!
    </p>

    <ul v-else class="gig-list">
      <li v-for="gig in filteredGigs" :key="gig.id" class="gig-card">
        <div class="gig-date">
          <span class="gig-day">{{ formatDay(gig.date) }}</span>
          <span class="gig-month">{{ formatMonth(gig.date) }}</span>
        </div>
        <div class="gig-info">
          <h3 class="gig-artist">{{ gig.artist }}</h3>
          <p class="gig-venue">{{ gig.venue }}</p>
          <div class="gig-meta">
            <span class="gig-genre">{{ gig.genre }}</span>
            <span class="gig-price">{{ gig.price === 0 ? 'Ilmainen' : `${gig.price} €` }}</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { GigFilterValues } from './GigFilters.vue'

interface Gig {
  id: number
  artist: string
  venue: string
  genre: string
  genreKey: string
  venueSize: string
  price: number
  date: string
  city: string
}

const props = defineProps<{
  city: string
}>()

const filters = ref<GigFilterValues>({ genre: '', venueSize: '', priceRange: '', date: '', artist: '' })

function onFilterChange(f: GigFilterValues) {
  filters.value = f
}

// Mock data — replace with real API later
const allGigs = computed<Gig[]>(() => {
  const city = props.city
  const mockGigs: Gig[] = [
    { id: 1, artist: 'Apulanta', venue: 'Tavastia', genre: 'Rock', genreKey: 'rock', venueSize: 'medium', price: 35, date: '2026-05-10', city: 'Helsinki' },
    { id: 2, artist: 'Nightwish', venue: 'Hartwall Arena', genre: 'Metal', genreKey: 'metal', venueSize: 'large', price: 65, date: '2026-05-15', city: 'Helsinki' },
    { id: 3, artist: 'Portion Boys', venue: 'Olympia-kortteli', genre: 'Pop', genreKey: 'pop', venueSize: 'medium', price: 25, date: '2026-05-18', city: 'Helsinki' },
    { id: 4, artist: 'JVG', venue: 'Circus', genre: 'Hip Hop', genreKey: 'hiphop', venueSize: 'medium', price: 30, date: '2026-05-20', city: 'Helsinki' },
    { id: 5, artist: 'Stam1na', venue: 'On The Rocks', genre: 'Metal', genreKey: 'metal', venueSize: 'small', price: 28, date: '2026-05-22', city: 'Helsinki' },
    { id: 6, artist: 'Cledos', venue: 'Pakkahuone', genre: 'Hip Hop', genreKey: 'hiphop', venueSize: 'medium', price: 32, date: '2026-05-12', city: 'Tampere' },
    { id: 7, artist: 'Eppu Normaali', venue: 'Tullikamari', genre: 'Rock', genreKey: 'rock', venueSize: 'medium', price: 40, date: '2026-05-14', city: 'Tampere' },
    { id: 8, artist: 'Ismo Alanko', venue: 'Klubi', genre: 'Rock', genreKey: 'rock', venueSize: 'small', price: 22, date: '2026-05-19', city: 'Tampere' },
    { id: 9, artist: 'Ville Valo', venue: 'Nokia Arena', genre: 'Rock', genreKey: 'rock', venueSize: 'large', price: 55, date: '2026-06-01', city: 'Tampere' },
    { id: 10, artist: 'Haloo Helsinki!', venue: 'Logomo', genre: 'Pop', genreKey: 'pop', venueSize: 'large', price: 42, date: '2026-05-16', city: 'Turku' },
    { id: 11, artist: 'Chisu', venue: 'Dynamo', genre: 'Pop', genreKey: 'pop', venueSize: 'small', price: 20, date: '2026-05-21', city: 'Turku' },
    { id: 12, artist: 'Mokoma', venue: 'Klubi', genre: 'Metal', genreKey: 'metal', venueSize: 'small', price: 25, date: '2026-05-25', city: 'Turku' },
    { id: 13, artist: 'Korpiklaani', venue: 'Tullisali', genre: 'Folk / Kansanmusiikki', genreKey: 'folk', venueSize: 'medium', price: 30, date: '2026-05-11', city: 'Oulu' },
    { id: 14, artist: 'Blind Channel', venue: 'Club Teatria', genre: 'Rock', genreKey: 'rock', venueSize: 'small', price: 18, date: '2026-05-17', city: 'Oulu' },
    { id: 15, artist: 'DJ Orkidea', venue: '45 Special', genre: 'Elektroninen', genreKey: 'electronic', venueSize: 'small', price: 15, date: '2026-05-23', city: 'Oulu' },
    { id: 16, artist: 'Ilmakitaristit', venue: 'Puisto', genre: 'Rock', genreKey: 'rock', venueSize: 'large', price: 0, date: '2026-06-05', city: 'Oulu' },
    { id: 17, artist: 'Egotrippi', venue: 'Bar 45', genre: 'Rock', genreKey: 'rock', venueSize: 'medium', price: 30, date: '2026-05-13', city: 'Seinäjoki' },
    { id: 18, artist: 'Sanni', venue: 'Rytmikorjaamo', genre: 'Pop', genreKey: 'pop', venueSize: 'medium', price: 28, date: '2026-05-24', city: 'Seinäjoki' },
    { id: 19, artist: 'Klamydia', venue: 'Kerho', genre: 'Rock', genreKey: 'rock', venueSize: 'small', price: 20, date: '2026-05-26', city: 'Seinäjoki' },
    { id: 20, artist: 'Yö', venue: 'Rytmikorjaamo', genre: 'Rock', genreKey: 'rock', venueSize: 'medium', price: 35, date: '2026-06-02', city: 'Seinäjoki' },
    { id: 21, artist: 'Klamydia', venue: 'House Of Rock', genre: 'Rock', genreKey: 'rock', venueSize: 'small', price: 20, date: '2026-05-26', city: 'Kouvola' },
    { id: 22, artist: 'Yö', venue: 'House Of Rock', genre: 'Rock', genreKey: 'rock', venueSize: 'small', price: 35, date: '2026-06-02', city: 'Kouvola' },
  ]

  return mockGigs.filter((g) => g.city.toLowerCase() === city.toLowerCase())
})

const filteredGigs = computed(() => {
  return allGigs.value.filter((gig) => {
    if (filters.value.genre && gig.genreKey !== filters.value.genre) return false
    if (filters.value.venueSize && gig.venueSize !== filters.value.venueSize) return false
    if (filters.value.priceRange) {
      switch (filters.value.priceRange) {
        case 'free':
          if (gig.price !== 0) return false
          break
        case 'under20':
          if (gig.price >= 20 || gig.price === 0) return false
          break
        case '20to50':
          if (gig.price < 20 || gig.price > 50) return false
          break
        case 'over50':
          if (gig.price <= 50) return false
          break
      }
    }
    if (filters.value.date && gig.date !== filters.value.date) return false
    if (filters.value.artist && !gig.artist.toLowerCase().includes(filters.value.artist.toLowerCase())) return false
    return true
  })
})

function formatDay(dateStr: string) {
  return new Date(dateStr).getDate()
}

function formatMonth(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fi-FI', { month: 'short' })
}
</script>

<style scoped>
@import '~/assets/css/GigList.css';
</style>
