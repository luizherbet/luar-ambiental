<template>
  <div class="relative w-screen">
    <!-- Carousel atrás do header -->
    <Carousel />
    
    <!-- Header por cima do carousel -->
    <div class="relative z-10 flex flex-col items-center">
      <Header />
    </div>
    
    <!-- Seção de Cards abaixo do carousel -->
    <CardsSection />
    
    <!-- Carousel de Clientes -->
    <ClientsCarousel />
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import CardsSection from './components/CardsSection.vue';
import ClientsCarousel from './components/ClientsCarousel.vue';

export default {
  name: "App",
  components: {
    Header,
    Carousel,
    CardsSection,
    ClientsCarousel,
  }
}
</script>