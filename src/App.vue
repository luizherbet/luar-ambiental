<template>
  <div class="bg-gradient-to-t from-green-200 to-amber-100 indigo-100 h-screen w-screen flex flex-col items-center">
    <Header />
  </div>
</template>
<script>
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    Header,
  }
}
</script>