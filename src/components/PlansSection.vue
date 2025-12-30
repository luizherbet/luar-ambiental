<template>
  <div class="plans-section py-12 px-4">
    <v-container>
      <div class="section-title">
        <h2 class="title-text">Nossos Planos</h2>
      </div>
      <v-row justify="center" class="plan-row" dense>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          class="plan-col"
        >
          <v-card
            class="mx-auto card-simplified"
            height="90%"
            style="cursor: pointer;"
            @click="openModal(index)"
          >
            <v-img
              v-if="card.image"
              class="card-image"
              :src="card.image"
              cover
            ></v-img>

            <v-card-item class="card-title-container">
              <v-card-title class="card-title-text">{{ card.title }}</v-card-title>
            </v-card-item>

            <v-card-text class="card-description">
              <div>{{ card.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                class="price-button plan-button"
                block
                @click="openModal(index)"
              >
                <div class="button-price-content">
                  <span class="current-price">{{ card.price }}</span>
                  <span v-if="card.oldPrice" class="old-price-text">{{ card.oldPrice }}</span>
                </div>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="dialog"
      max-width="800"
      scrollable
      persistent
    >
      <v-card v-if="selectedCard">
        <v-card-title class="d-flex align-center justify-space-between pa-4">
          <span class="text-h5">{{ selectedCard.title }}</span>
          <v-btn icon variant="text" @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="pa-6">
          <div class="mb-4">
            <v-img
              v-if="selectedCard.image"
              :src="selectedCard.image"
              height="300"
              cover
              class="mb-4 rounded"
            ></v-img>
          </div>

          <div class="mb-4">
            <h3 class="text-h6 mb-2">Descrição Completa</h3>
            <p class="text-body-1">{{ selectedCard.fullDescription || selectedCard.description }}</p>
          </div>

          <div class="mb-4">
            <h3 class="text-h6 mb-2">Investimento</h3>
            <div class="d-flex align-center gap-3">
              <span class="text-h5 font-weight-bold text-primary">{{ selectedCard.price }}</span>
              <span v-if="selectedCard.oldPrice" class="text-body-1 text-decoration-line-through text-medium-emphasis">
                {{ selectedCard.oldPrice }}
              </span>
            </div>
          </div>

          <div v-if="selectedCard.benefits" class="mb-4">
            <h3 class="text-h6 mb-2">Benefícios Incluídos</h3>
            <v-list density="compact">
              <v-list-item
                v-for="(benefit, idx) in selectedCard.benefits"
                :key="idx"
                class="pa-0"
              >
                <v-list-item-title class="text-body-2">
                  <v-icon size="small" color="success" class="me-2">mdi-check-circle</v-icon>
                  {{ benefit }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="closeModal">
            Fechar
          </v-btn>
          <v-btn
            color="green-darken-2"
            variant="flat"
            size="large"
            :href="whatsappLink"
            target="_blank"
            @click="closeModal"
          >
            <i class="bi bi-whatsapp me-2"></i>
            Falar no WhatsApp
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import curso001 from '../assets/curso001.jpg'
import curso002 from '../assets/cursos002.jpg'
import curso003 from '../assets/cursos003.jpg'
import curso004 from '../assets/cursos004.jpg'

const dialog = ref(false)
const selectedCardIndex = ref(null)

const selectedCard = computed(() => {
  if (selectedCardIndex.value !== null) {
    return cards.value[selectedCardIndex.value]
  }
  return null
})

const whatsappNumber = ref('5545991365793')
const whatsappMessage = computed(() => {
  if (selectedCard.value) {
    return `Olá! Gostaria de saber mais sobre: ${selectedCard.value.title}`
  }
  return 'Olá! Gostaria de saber mais sobre os serviços da Luar Ambiental.'
})

const whatsappLink = computed(() => {
  const message = encodeURIComponent(whatsappMessage.value)
  return `https://wa.me/${whatsappNumber.value}?text=${message}`
})

function openModal(index) {
  selectedCardIndex.value = index
  dialog.value = true
}

function closeModal() {
  dialog.value = false
  setTimeout(() => {
    selectedCardIndex.value = null
  }, 300)
}

const cards = ref([
  {
    title: 'Plano Básico: Capivara',
    price: 'BRL 49,90',
    description: 'Todos os cursos ambientais e sanitários, acompanhado por especialistas.',
    fullDescription: 'O Plano Básico Capivara oferece acesso completo a todos os cursos ambientais e sanitários exigidos pelas diferentes fiscalizações municipais, estaduais e federais. Todos os cursos são acompanhados por especialistas qualificados, garantindo que sua empresa esteja sempre em conformidade com as exigências legais.',
    image: curso001,
    benefits: [
      'Todos os cursos ambientais e sanitários',
      'Acompanhamento por especialistas',
      'Certificados válidos em todo território nacional',
      'Atualizações automáticas de conteúdo',
      'Suporte técnico especializado'
    ]
  },
  {
    title: 'Plano Essencial: Jaguatirica',
    price: 'BRL 650,00',
    description: 'Tudo do plano anterior mais cursos especializados. Inclui também serviços: desinsetização/desratização, limpeza de caixa d\'água e PMOC.',
    fullDescription: 'O Plano Essencial Jaguatirica inclui tudo do Plano Básico Capivara, além de cursos especializados. Este plano também inclui serviços essenciais: desinsetização/desratização, limpeza de caixa d\'água e PMOC (Plano de Manutenção, Operação e Controle). Ideal para empresas que precisam de uma solução completa em saúde ambiental.',
    image: curso002,
    benefits: [
      'Tudo do Plano Básico Capivara',
      'Cursos especializados adicionais',
      'Serviço de desinsetização/desratização',
      'Limpeza de caixa d\'água',
      'PMOC (Plano de Manutenção, Operação e Controle)',
      'Acompanhamento contínuo por especialistas'
    ]
  },
  {
    title: 'Plano Completo: Harpia',
    price: 'BRL 980,00',
    description: 'Tudo do plano anterior, serviços, PGRS ou PGRCC e auditoria todos os meses.',
    fullDescription: 'O Plano Completo Harpia inclui tudo do Plano Essencial Jaguatirica, além de serviços adicionais, PGRS (Plano de Gerenciamento de Resíduos Sólidos) ou PGRCC (Plano de Gerenciamento de Resíduos da Construção Civil) e auditoria mensal. O perfil que mais se enquadra na maioria das empresas de grande porte. Não quer ter problemas com multas? Escolha este de olhos fechados para que não se preocupe depois!',
    image: curso003,
    benefits: [
      'Tudo do Plano Essencial Jaguatirica',
      'Serviços adicionais inclusos',
      'PGRS ou PGRCC completo',
      'Auditoria todos os meses',
      'Consultoria especializada',
      'Suporte prioritário 24/7',
      'Treinamentos para toda equipe'
    ]
  },
  {
    title: 'Plano Avançado: Cobra',
    price: 'BRL 3.508,00',
    description: 'Tudo do plano anterior, serviços e PGRSS. Os valores podem sofrer alterações de acordo com seu tamanho ou produção de resíduos.',
    fullDescription: 'O Plano Avançado Cobra inclui tudo do Plano Completo Harpia, além de serviços adicionais e PGRSS (Plano de Gerenciamento de Resíduos de Serviços de Saúde). Este é o plano mais completo e eficaz para área da saúde ambiental, com tudo incluso e acompanhamento contínuo. Os valores podem sofrer alterações de acordo com seu tamanho ou produção de resíduos, garantindo um plano customizado para sua necessidade específica.',
    image: curso004,
    benefits: [
      'Tudo do Plano Completo Harpia',
      'Serviços adicionais inclusos',
      'PGRSS (Plano de Gerenciamento de Resíduos de Serviços de Saúde)',
      'Acompanhamento contínuo personalizado',
      'Consultoria técnica especializada',
      'Plano customizado conforme necessidade',
      'Valores ajustáveis conforme tamanho/produção de resíduos'
    ]
  }
])
</script>

<style scoped>
.plans-section {
  background: linear-gradient(135deg, #f3fbff 0%, #f0f7f4 100%);
  min-height: 100vh;
  position: relative;
  z-index: 5;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
}

.title-text {
  font-size: 3rem;
  font-weight: 400;
  color: #1f3b4d;
  margin: 0;
}

@media (max-width: 768px) {
  .title-text {
    font-size: 2rem;
  }
  
  .section-title {
    margin-bottom: 2rem;
    padding-top: 1rem;
  }
}

.card-simplified {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  max-width: 100%;
  margin: 0 auto;
}

.card-simplified :deep(.v-card-text) {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.price-button {
  color: white !important;
  font-weight: bold !important;
  height: auto !important;
  min-height: 48px !important;
  padding: 12px 16px !important;
}

.plan-button {
  background-color: #2b7bbb !important;
}

.plan-button:hover {
  background-color: #1f6aa5 !important;
}

.button-price-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.current-price {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.2;
}

.old-price-text {
  font-size: 0.85rem;
  text-decoration: line-through;
  opacity: 0.8;
  margin-top: 4px;
  font-weight: normal;
}

.card-description {
  height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  line-height: 1.6;
  font-weight: 400;
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center center;
}

.card-simplified :deep(.v-img) {
  width: 100% !important;
  height: 250px !important;
  min-height: 250px !important;
  max-height: 250px !important;
}

.card-simplified :deep(.v-img__img) {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center center !important;
}

.card-title-container {
  min-height: auto;
  padding-bottom: 1rem;
}

.card-title-text {
  white-space: normal !important;
  word-wrap: break-word !important;
  overflow: visible !important;
  text-overflow: unset !important;
  line-height: 1.4 !important;
  font-size: 1.1rem !important;
  height: auto !important;
  max-height: none !important;
  display: block !important;
  -webkit-line-clamp: unset !important;
  -webkit-box-orient: unset !important;
  font-weight: 600;
}

.plan-col {
  max-width: 100%;
  padding-left: 8px;
  padding-right: 8px;
}

@media (min-width: 960px) {
  .plan-col {
    max-width: 25%;
    flex: 0 0 25%;
    padding-left: 6px;
    padding-right: 6px;
  }
}

.plan-row {
  margin-left: -8px;
  margin-right: -8px;
}

@media (max-width: 768px) {
  .plan-col {
    max-width: 88% !important;
    flex: 0 0 88% !important;
    margin-left: auto;
    margin-right: auto;
    padding-left: 8px;
    padding-right: 8px;
  }

  .card-simplified {
    width: 100%;
    height: 100%;
  }
}
</style>

