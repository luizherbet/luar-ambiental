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
    
    <!-- Seção de Serviços Detalhados -->
    <section id="servicos-detalhados">
      <ServicesSection />
    </section>
    
    <!-- Carousel de Clientes -->
    <!-- Oculto temporariamente - descomente para exibir no futuro -->
    <!-- <section id="clientes">
      <ClientsCarousel />
    </section> -->
    
    <!-- Seção Sobre Nós -->
    <section id="sobre-nos">
      <AboutUs />
    </section>
    
    <!-- Seção Nossa Equipe -->
    <section id="nossa-equipe">
      <TeamSection />
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
import ServicesSection from './components/ServicesSection.vue';
import ClientsCarousel from './components/ClientsCarousel.vue';
import AboutUs from './components/AboutUs.vue';
import TeamSection from './components/TeamSection.vue';
import Footer from './components/Footer.vue';
import NewsletterButton from './components/NewsletterButton.vue';

export default {
  name: "App",
  components: {
    Header,
    Carousel,
    CardsSection,
    ServicesSection,
    ClientsCarousel,
    AboutUs,
    TeamSection,
    Footer,
    NewsletterButton,
  }
}
</script>