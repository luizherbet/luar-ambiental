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
          
          <!-- Botões de Ação -->
          <div class="contact-buttons-container">
            <!-- Botão WhatsApp -->
            <v-btn
              :href="whatsappLink"
              target="_blank"
              class="whatsapp-button mb-3"
              size="large"
              rounded="lg"
              block
            >
              <i class="bi bi-whatsapp me-2"></i>
              Fale Conosco no WhatsApp
            </v-btn>

            <!-- Botão Agendamento -->
            <v-btn
              :href="appointmentLink"
              target="_blank"
              class="appointment-button mb-4"
              size="large"
              rounded="lg"
              block
            >
              <v-icon size="20" class="me-2">mdi-calendar-clock</v-icon>
              Marcar um agendamento
            </v-btn>
          </div>

          <!-- Redes Sociais -->
          <div class="social-media-container">
            <p class="text-body-2 text-grey-lighten-1 mb-2">Siga-nos nas redes sociais:</p>
            <div class="d-flex gap-2">
              <a
                v-for="(social, index) in socialMedia"
                :key="index"
                :href="social.url"
                target="_blank"
                class="social-link"
                :aria-label="social.name"
              >
                <i :class="`${social.icon} social-icon`"></i>
              </a>
            </div>
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
  description: 'Serviço de saúde ambiental em Foz do Iguaçu, Paraná',
  address: 'Tv. Cristiano Weirich, 91 - Centro, Foz do Iguaçu - PR, 85851-901',
  phone: '(45) 99136-5793',
  email: 'comercial@luarambiental.com.br'
})

const appointmentLink = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2t8b46fSRZelriTD4eYM1Pzi5asLPHOXwsRzdkbXq6OGEczvEou_9PRAodELfZ8bPGnG0lPXEB?gv=true'

const quickLinks = ref([
  { name: 'Cursos', href: '#cursos' },
  { name: 'Planos', href: '#planos' },
  { name: 'Serviços', href: '#servicos-detalhados' },
  { name: 'Quem Somos', href: '#sobre-nos' },
  { name: 'Contato', href: '#contato' }
])

const socialMedia = ref([
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/luar-ambiental/', icon: 'bi-linkedin' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1ARc1bH6k4/?mibextid=wwXIfr', icon: 'bi-facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/ambiental.luar?igsh=MW5lb2ozZ3RqMXZoNg%3D%3D&utm_source=qr', icon: 'bi-instagram' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@ambiental.luar?_r=1&_t=ZS-92X6z43Uwk5', icon: 'bi-tiktok' }
])

const whatsappNumber = ref('5545991365793') // (45) 99136-5793
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
  padding-top: 3rem !important;
  padding-bottom: 2rem !important;
}

.v-btn {
  text-transform: none;
}

.contact-buttons-container {
  margin-bottom: 1.5rem;
}

.whatsapp-button {
  background-color: #25d366 !important;
  color: white !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  letter-spacing: 0.5px !important;
  text-transform: none !important;
  box-shadow: 0 3px 10px rgba(37, 211, 102, 0.4) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  height: 48px !important;
}

.whatsapp-button:hover {
  background-color: #20ba5a !important;
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.5) !important;
  transform: translateY(-2px);
}

.whatsapp-button i {
  font-size: 1.3rem;
}

.appointment-button {
  background-color: rgba(255, 255, 255, 0.95) !important;
  color: #333 !important;
  font-weight: 500 !important;
  font-size: 0.95rem !important;
  letter-spacing: 0.3px !important;
  text-transform: none !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  height: 48px !important;
}

.appointment-button:hover {
  background-color: white !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25) !important;
  transform: translateY(-2px);
}

.social-media-container {
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
}

.social-link:hover {
  color: white;
  transform: translateY(-3px) scale(1.1);
  background-color: rgba(255, 255, 255, 0.15);
}

.social-icon {
  font-size: 1.4rem;
}

@media (max-width: 768px) {
  .footer-section {
    padding-top: 2rem !important;
    padding-bottom: 1.5rem !important;
  }
  
  .whatsapp-button,
  .appointment-button {
    height: 44px !important;
    font-size: 0.9rem !important;
  }
  
  .contact-buttons-container {
    margin-bottom: 1rem;
  }
}
</style>

