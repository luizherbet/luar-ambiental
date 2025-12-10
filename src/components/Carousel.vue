<template>
  <v-carousel
    class="carousel-fullscreen"
    height="100vh"
    cycle
    interval="6000"
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(slide, index) in carouselSlides"
      :key="index"
      :src="slide.image"
      class="carousel-item-image"
    >
      <div class="carousel-text-overlay">
        <h2 class="carousel-title">{{ slide.title }}</h2>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import slide001 from '../assets/slide001.png'
import slide002 from '../assets/slide002.png'
import slide003 from '../assets/slide003.png'

const carouselSlides = [
  {
    image: slide001,
    title: 'LUAR AMBIENTAL'
  },
  {
    image: slide002,
    title: 'LUAR AMBIENTAL'
  },
  {
    image: slide003,
    title: 'LUAR AMBIENTAL'
  }
]
</script>

<style scoped>
.carousel-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: visible;
}

/* Ajusta altura em mobile para garantir que as bolinhas apareçam */
@media (max-width: 768px) {
  .carousel-fullscreen {
    height: 100vh;
    padding-bottom: 0;
  }
}

/* Esconde os botões laterais de navegação */
.carousel-fullscreen :deep(.v-carousel__prev),
.carousel-fullscreen :deep(.v-carousel__next) {
  display: none !important;
}

/* Estiliza os indicadores como bolinhas sem fundo */
.carousel-fullscreen :deep(.v-carousel__controls) {
  background: transparent !important;
  position: absolute !important;
  bottom: 30px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 20 !important;
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* Garante que os indicadores sejam apenas bolinhas */
.carousel-fullscreen :deep(.v-carousel__controls .v-btn) {
  width: 16px !important;
  height: 16px !important;
  min-width: 16px !important;
  border-radius: 50% !important;
  border: 2px solid rgba(255, 255, 255, 0.8) !important;
  background: transparent !important;
  margin: 0 6px !important;
  box-shadow: none !important;
  opacity: 0.6;
}

.carousel-fullscreen :deep(.v-carousel__controls .v-btn--active) {
  background: rgba(255, 255, 255, 0.8) !important;
  border-color: rgba(255, 255, 255, 0.8) !important;
  opacity: 1;
}

.carousel-fullscreen :deep(.v-carousel__controls .v-btn::before) {
  background: transparent !important;
}

/* Ajusta o comportamento da imagem com corte mínimo */
.carousel-fullscreen :deep(.v-carousel-item .v-img__img),
.carousel-fullscreen :deep(.v-carousel-item img) {
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}

/* Em telas maiores, ajusta para minimizar ainda mais o corte */
@media (min-width: 1024px) {
  .carousel-fullscreen :deep(.v-carousel-item .v-img__img),
  .carousel-fullscreen :deep(.v-carousel-item img) {
    object-fit: cover;
    object-position: center center;
    /* Tenta manter a proporção e centralizar para minimizar corte */
    min-width: 100%;
    min-height: 100%;
  }
}

/* Estilização do texto sobreposto */
.carousel-text-overlay {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  color: whitesmoke;
  padding: 2rem;
  max-width: 90%;
}

.carousel-title {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .carousel-title {
    font-size: 2rem;
    letter-spacing: 0.03em;
  }
  
  .carousel-text-overlay {
    padding: 1rem;
  }
}
</style>

