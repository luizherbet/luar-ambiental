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
      <div class="carousel-text-overlay" :class="{ 'special-slide': slide.special }">
        <h2 
          v-if="!slide.special"
          class="carousel-title"
        >{{ slide.title }}</h2>
        <h2 
          v-else
          class="carousel-title-special"
          v-html="slide.title"
        ></h2>
        <v-btn
          v-if="slide.special && slide.buttonType === 'whatsapp'"
          class="contact-button mt-8"
          color=""
          size="large"
          rounded-lg
          :href="whatsappLink"
          target="_blank"
        >
          Entre em contato
        </v-btn>
        <v-btn
          v-if="slide.special && slide.buttonType === 'appointment'"
          class="contact-button mt-8"
          color=""
          size="large"
          rounded-lg
          :href="slide.appointmentLink"
          target="_blank"
        >
          Marcar agendamento
        </v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed } from 'vue'
import slide001 from '../assets/slide001.png'
import slide002 from '../assets/slide002.png'
import slide003 from '../assets/slide003.png'
import slide004 from '../assets/slide004.png'

const whatsappNumber = '5545991365793' // (45) 99136-5793
const whatsappMessage = 'Olá! Gostaria de saber mais sobre oportunidades de representante.'
const whatsappLink = computed(() => {
  const message = encodeURIComponent(whatsappMessage)
  return `https://wa.me/${whatsappNumber}?text=${message}`
})

const carouselSlides = [
  {
    image: slide001,
    title: 'Conheça nossos planos'
  },
  {
    image: slide002,
    title: 'Atendemos em todo o Brasil',
    special: true,
    buttonType: 'appointment',
    appointmentLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2t8b46fSRZelriTD4eYM1Pzi5asLPHOXwsRzdkbXq6OGEczvEou_9PRAodELfZ8bPGnG0lPXEB?gv=true'
  },
  {
    image: slide003,
    title: 'Licenciamento Ambiental'
  },
  {
    image: slide004,
    title: 'Você é Engenheiro Ambiental ou Biólogo?<br>Torne-se nosso representante.<br>Atuamos em todo o Brasil.',
    special: true,
    buttonType: 'whatsapp'
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
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  color: whitesmoke;
  padding: 2rem;
  max-width: 90%;
  width: 100%;
}

.carousel-title {
  font-size: 4.5rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.2;
  margin: 0 auto;
  text-align: center;
  text-transform: none;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .carousel-title {
    font-size: 3rem;
    letter-spacing: 0.01em;
  }
  
  .carousel-text-overlay {
    padding: 1rem;
  }
}

/* Estilos para o slide especial */
.carousel-title-special {
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.6;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  text-transform: none;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5);
  max-width: 1000px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
}

.carousel-title-special :deep(br) {
  display: block;
  content: "";
  margin: 0.5em 0;
}

@media (max-width: 768px) {
  .carousel-title-special {
    font-size: 2rem;
    letter-spacing: 0.01em;
  }
}

.contact-button {
  font-weight: 500 !important;
  padding: 8px 14px !important;
  text-transform: none !important;
  background-color: white !important;
  color: #333 !important;
  font-size: 0.9rem !important;
  border: 1px solid #e0e0e0 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  transition: transform 0.2s ease !important;
}

.contact-button:hover {
  transform: scale(1.05) !important;
  background-color: #f5f5f5 !important;
}

@media (max-width: 768px) {
  .contact-button {
    padding: 6px 12px !important;
    font-size: 0.8rem !important;
  }
}

.special-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

