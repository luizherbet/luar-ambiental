<template>
  <div class="cards-section py-12 px-4">
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          md="4"
          sm="12"
        >
          <v-card
            :disabled="card.loading"
            :loading="card.loading"
            class="mx-auto"
            max-width="374"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              :src="card.image"
              cover
            ></v-img>

            <v-card-item>
              <v-card-title>{{ card.title }}</v-card-title>

              <v-card-subtitle>
                <span class="me-1">{{ card.subtitle }}</span>

                <v-icon
                  color="error"
                  icon="mdi-fire-circle"
                  size="small"
                ></v-icon>
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :model-value="card.rating"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                ></v-rating>

                <div class="text-grey ms-4">
                  {{ card.rating }} ({{ card.reviews }})
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                {{ card.price }} • {{ card.category }}
              </div>

              <div>{{ card.description }}</div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>

            <v-card-title>{{ card.availabilityTitle }}</v-card-title>

            <div class="px-4 mb-2">
              <v-chip-group v-model="card.selection" selected-class="bg-deep-purple-lighten-2">
                <v-chip
                  v-for="(time, timeIndex) in card.times"
                  :key="timeIndex"
                >
                  {{ time }}
                </v-chip>
              </v-chip-group>
            </div>

            <v-card-actions>
              <v-btn
                color="deep-purple-lighten-2"
                text="Reserve"
                block
                border
                @click="reserve(index)"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  {
    title: 'Cafe Badilico',
    subtitle: 'Local Favorite',
    image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
    rating: 4.5,
    reviews: 413,
    price: '$',
    category: 'Italian, Cafe',
    description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
    availabilityTitle: "Tonight's availability",
    times: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
    selection: 1,
    loading: false
  },
  {
    title: 'Restaurant Example',
    subtitle: 'Popular Choice',
    image: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
    rating: 4.8,
    reviews: 256,
    price: '$$',
    category: 'French, Bistro',
    description: 'Elegant dining experience with a modern twist on classic French cuisine in a cozy atmosphere.',
    availabilityTitle: "Tonight's availability",
    times: ['6:00PM', '7:00PM', '8:30PM', '9:30PM'],
    selection: 0,
    loading: false
  },
  {
    title: 'Bistro Moderno',
    subtitle: 'New Arrival',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    rating: 4.2,
    reviews: 189,
    price: '$$$',
    category: 'Modern, Fusion',
    description: 'Contemporary fusion cuisine blending Asian and European flavors in a stylish urban setting.',
    availabilityTitle: "Tonight's availability",
    times: ['5:00PM', '6:30PM', '8:00PM', '10:00PM'],
    selection: 2,
    loading: false
  }
])

function reserve(index) {
  cards.value[index].loading = true
  setTimeout(() => {
    cards.value[index].loading = false
  }, 2000)
}
</script>

<style scoped>
.cards-section {
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;
  z-index: 5;
  margin-top: 100vh;
}
</style>

