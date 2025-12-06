<template>
  <v-carousel
    class="carousel-fullscreen"
    height="100vh"
    cycle
    interval="5000"
    show-arrows="hover"
  >
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    ></v-carousel-item>
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped>
.carousel-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
</style>

