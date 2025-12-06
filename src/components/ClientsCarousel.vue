<template>
  <div class="clients-section py-12 px-4">
    <v-container>
      <!-- Texto acima do carousel -->
      <div class="text-center mb-8">
        <h2 class="text-h4 font-weight-bold mb-2">
          + DE 150 CLIENTES SATISFEITOS
        </h2>
        <h2 class="text-h4 font-weight-bold">
          + DE 28 ANOS DE ATUAÇÃO
        </h2>
      </div>

      <!-- Carousel de logos dos clientes -->
      <v-carousel
        :show-arrows="false"
        :show-arrows-on-hover="true"
        cycle
        interval="6000"
        height="150"
        hide-delimiters
        class="clients-carousel"
      >
        <v-carousel-item
          v-for="(group, groupIndex) in clientGroups"
          :key="groupIndex"
        >
          <div class="d-flex justify-center align-center h-100 gap-4 px-4">
            <v-img
              v-for="(client, index) in group"
              :key="index"
              :src="client.logo"
              :alt="client.name"
              :max-width="display.mobile ? '150' : '200'"
              :max-height="display.mobile ? '100' : '120'"
              contain
              class="client-logo"
            ></v-img>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()

const clients = ref([
  {
    name: 'Cliente 1',
    logo: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
  },
  {
    name: 'Cliente 2',
    logo: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg'
  },
  {
    name: 'Cliente 3',
    logo: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
  },
  {
    name: 'Cliente 4',
    logo: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
  },
  {
    name: 'Cliente 5',
    logo: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
  },
  {
    name: 'Cliente 6',
    logo: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg'
  },
  {
    name: 'Cliente 7',
    logo: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
  },
  {
    name: 'Cliente 8',
    logo: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
  },
  {
    name: 'Cliente 9',
    logo: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
  },
  {
    name: 'Cliente 10',
    logo: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg'
  },
  {
    name: 'Cliente 11',
    logo: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
  },
  {
    name: 'Cliente 12',
    logo: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
  }
])

// Agrupa os clientes: 2 no mobile, 4 no desktop
const clientGroups = computed(() => {
  const groups = []
  const itemsPerGroup = display.mobile.value ? 2 : 4
  for (let i = 0; i < clients.value.length; i += itemsPerGroup) {
    groups.push(clients.value.slice(i, i + itemsPerGroup))
  }
  return groups
})
</script>

<style scoped>
.clients-section {
  background-color: #ffffff;
  position: relative;
  z-index: 5;
}

.clients-carousel {
  max-width: 1200px;
  margin: 0 auto;
}

.client-logo {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.client-logo:hover {
  opacity: 1;
  transform: scale(1.05);
}
</style>

