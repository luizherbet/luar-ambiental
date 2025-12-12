<template>
  <v-footer class="footer-section" color="grey-darken-4">
    <v-container>
      <v-row>
        <!-- Informações da Empresa -->
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <h3 class="text-h6 font-weight-bold mb-4 text-white">Luar Ambiental</h3>
          <p class="text-body-2 text-grey-lighten-1 mb-2">
            {{ companyInfo.description }}
          </p>
          <div class="d-flex flex-column gap-2">
            <div class="d-flex align-center">
              <v-icon color="white" size="small" class="me-2">mdi-map-marker</v-icon>
              <span class="text-body-2 text-grey-lighten-1">{{ companyInfo.address }}</span>
            </div>
            <div class="d-flex align-center">
              <v-icon color="white" size="small" class="me-2">mdi-phone</v-icon>
              <span class="text-body-2 text-grey-lighten-1">{{ companyInfo.phone }}</span>
            </div>
            <div class="d-flex align-center">
              <v-icon color="white" size="small" class="me-2">mdi-email</v-icon>
              <span class="text-body-2 text-grey-lighten-1">{{ companyInfo.email }}</span>
            </div>
          </div>
        </v-col>

        <!-- Links Rápidos -->
        <v-col cols="12" md="3" class="mb-4 mb-md-0">
          <h3 class="text-h6 font-weight-bold mb-4 text-white">Links Rápidos</h3>
          <v-list class="bg-transparent" density="compact">
            <v-list-item
              v-for="(link, index) in quickLinks"
              :key="index"
              :href="link.href"
              class="pa-0 mb-2"
            >
              <v-list-item-title class="text-body-2 text-grey-lighten-1">
                {{ link.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Redes Sociais e Contato -->
        <v-col cols="12" md="5">
          <h3 class="text-h6 font-weight-bold mb-4 text-white">Entre em Contato</h3>
          
          <!-- Botão WhatsApp -->
          <v-btn
            :href="whatsappLink"
            target="_blank"
            color="green-darken-2"
            size="large"
            class="mb-4"
            block
          >
            <i class="bi bi-whatsapp me-2"></i>
            Fale Conosco no WhatsApp
          </v-btn>

          <!-- Redes Sociais -->
          <div class="d-flex gap-2 mb-4">
            <v-btn
              v-for="(social, index) in socialMedia"
              :key="index"
              :href="social.url"
              target="_blank"
              :color="social.color"
              icon
              variant="text"
              size="small"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>

          <!-- Horário de Atendimento -->
          <div class="text-body-2 text-grey-lighten-1">
            <v-icon color="white" size="small" class="me-2">mdi-clock-outline</v-icon>
            <strong>Horário de Atendimento:</strong><br>
            Segunda a Sexta: 8h às 18h<br>
            Sábado: 8h às 12h
          </div>
        </v-col>
      </v-row>

      <!-- Linha de Copyright -->
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12" class="text-center">
          <p class="text-body-2 text-grey-lighten-1 mb-0">
            © {{ currentYear }} Luar Ambiental. Todos os direitos reservados.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const companyInfo = ref({
  description: 'Soluções ambientais criada em 2023. Comprometidos com a sustentabilidade e excelência em serviços.',
  address: 'Rua Exemplo, 123 - Cidade, Estado - CEP 12345-678',
  phone: '(00) 0000-0000',
  email: 'contato@luarambiental.com.br'
})

const quickLinks = ref([
  { name: 'Início', href: '#home' },
  { name: 'Serviços', href: '#services' },
  { name: 'Sobre Nós', href: '#about' },
  { name: 'Contato', href: '#contact' }
])

const socialMedia = ref([
  { name: 'Instagram', url: 'https://instagram.com', icon: 'mdi-instagram', color: 'pink' },
  { name: 'Facebook', url: 'https://facebook.com', icon: 'mdi-facebook', color: 'blue' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'mdi-linkedin', color: 'blue-darken-2' }
])

const whatsappNumber = ref('5511999999999') // Substitua pelo número real (formato: código do país + DDD + número)
const whatsappMessage = ref('Olá! Gostaria de saber mais sobre os serviços da Luar Ambiental.')

const whatsappLink = computed(() => {
  const message = encodeURIComponent(whatsappMessage.value)
  return `https://wa.me/${whatsappNumber.value}?text=${message}`
})

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-section {
  position: relative;
  z-index: 5;
}

.v-btn {
  text-transform: none;
}
</style>

