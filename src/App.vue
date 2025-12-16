<template>
  <div class="relative w-screen">
    <!-- Carousel atrás do header -->
    <Carousel />
    
    <!-- Header por cima do carousel -->
    <div class="relative z-10 flex flex-col items-center">
      <Header />
    </div>
    
    <!-- Seção de Cards abaixo do carousel -->
    <section id="servicos">
      <CardsSection />
    </section>
    
    <!-- Carousel de Clientes -->
    <section id="clientes">
      <ClientsCarousel />
    </section>
    
    <!-- Seção Sobre Nós -->
    <section id="sobre-nos">
      <AboutUs />
    </section>
    
    <!-- Rodapé -->
    <section id="contato">
      <Footer />
    </section>
    
    <!-- Botão Flutuante de Newsletter -->
    <NewsletterButton />
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import CardsSection from './components/CardsSection.vue';
import ClientsCarousel from './components/ClientsCarousel.vue';
import AboutUs from './components/AboutUs.vue';
import Footer from './components/Footer.vue';
import NewsletterButton from './components/NewsletterButton.vue';

export default {
  name: "App",
  components: {
    Header,
    Carousel,
    CardsSection,
    ClientsCarousel,
    AboutUs,
    Footer,
    NewsletterButton,
  }
}
</script>