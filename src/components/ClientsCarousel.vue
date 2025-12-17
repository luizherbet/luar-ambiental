<template>
  <div class="clients-section py-12 px-4">
    <v-container>
      <!-- Texto acima do carousel -->
      <div class="text-center mb-8 section-header">
        <h2 class="text-h4 font-weight-bold mb-2">
          + 20 clientes
        </h2>
        <h2 class="text-h4 font-weight-bold mb-2">
          15 fornecedores diretos
        </h2>
        <h2 class="text-h4 font-weight-bold">
          Criada em 2023
        </h2>
      </div>

      <!-- Carousel de logos dos clientes com scroll infinito -->
      <div class="clients-carousel-wrapper">
        <div class="clients-scroll-container" ref="scrollContainer">
          <div class="clients-row" :style="{ transform: `translateX(${scrollPosition}px)` }">
            <!-- Primeira linha de clientes -->
            <div
              v-for="(client, index) in duplicatedClients"
              :key="`first-${index}`"
              class="client-item"
            >
              <v-img
                :src="client.logo"
                :alt="client.name"
                :width="display.mobile.value ? 150 : 200"
                :height="display.mobile.value ? 100 : 120"
                contain
                class="client-logo"
              ></v-img>
            </div>
            <!-- Segunda linha duplicada para loop infinito -->
            <div
              v-for="(client, index) in duplicatedClients"
              :key="`second-${index}`"
              class="client-item"
            >
              <v-img
                :src="client.logo"
                :alt="client.name"
                :width="display.mobile.value ? 150 : 200"
                :height="display.mobile.value ? 100 : 120"
                contain
                class="client-logo"
              ></v-img>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import cliente001 from '../assets/cliente001.jpg'
import cliente002 from '../assets/cliente002.jpg'
import cliente003 from '../assets/cliente003.jpg'
import cliente004 from '../assets/cliente004.jpg'
import cliente005 from '../assets/cliente005.png'
import cliente006 from '../assets/cliente006.png'
import cliente007 from '../assets/cliente007.png'

const display = useDisplay()
const scrollContainer = ref(null)
const scrollPosition = ref(0)
const animationFrameId = ref(null)

const clients = ref([
  {
    name: 'Cliente 1',
    logo: cliente001
  },
  {
    name: 'Cliente 2',
    logo: cliente002
  },
  {
    name: 'Cliente 3',
    logo: cliente003
  },
  {
    name: 'Cliente 4',
    logo: cliente004
  },
  {
    name: 'Cliente 5',
    logo: cliente005
  },
  {
    name: 'Cliente 6',
    logo: cliente006
  },
  {
    name: 'Cliente 7',
    logo: cliente007
  }
])

// Duplica os clientes para criar loop infinito
const duplicatedClients = computed(() => {
  return clients.value
})

// Calcula a largura de um item (incluindo gap)
const itemWidth = computed(() => {
  const baseWidth = display.mobile.value ? 150 : 200
  const gap = 16 // gap-4 = 1rem = 16px
  return baseWidth + gap
})

// Calcula a largura total da primeira linha
const totalWidth = computed(() => {
  return duplicatedClients.value.length * itemWidth.value
})

// Função de animação
const animate = () => {
  scrollPosition.value -= 0.5 // Velocidade do scroll (ajuste conforme necessário)
  
  // Quando chega ao final da primeira linha, reseta para o início
  if (Math.abs(scrollPosition.value) >= totalWidth.value) {
    scrollPosition.value = 0
  }
  
  animationFrameId.value = requestAnimationFrame(animate)
}

onMounted(() => {
  // Aguarda um frame para garantir que o DOM está renderizado
  requestAnimationFrame(() => {
    animate()
  })
})

onUnmounted(() => {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value)
  }
})
</script>

<style scoped>
.clients-section {
  background-color: #ffffff;
  position: relative;
  z-index: 5;
  min-height: 800px;
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .clients-section {
    min-height: 350px;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}

.clients-carousel-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  height: 150px;
  min-height: 150px;
  background-color: transparent;
}

.clients-scroll-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.clients-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
  will-change: transform;
  transition: none;
  position: relative;
}

.client-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
}

@media (min-width: 768px) {
  .client-item {
    min-width: 200px;
  }
}

.client-logo {
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.client-logo:hover {
  opacity: 1;
  transform: scale(1.05);
}

.section-header {
  margin-bottom: 3rem !important;
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: 2rem !important;
  }
}
</style>

