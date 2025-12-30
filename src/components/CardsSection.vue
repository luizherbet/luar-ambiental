<template>
  <div class="cards-section py-12 px-4">
    <v-container>
      <div class="section-title">
        <h2 class="title-text">Conheça nossos Cursos</h2>
      </div>
      <v-row justify="center">
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          class="card-col"
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
                class="price-button"
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

    <!-- Modal de Detalhes do Curso/Plano -->
    <v-dialog
      v-model="dialog"
      max-width="800"
      scrollable
      persistent
    >
      <v-card v-if="selectedCard">
        <v-card-title class="d-flex align-center justify-space-between pa-4">
          <span class="text-h5">{{ selectedCard.title }}</span>
          <v-btn
            icon
            variant="text"
            @click="closeModal"
          >
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
          <v-btn
            variant="text"
            @click="closeModal"
          >
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
import curso005 from '../assets/cursos005.jpg'
import curso006 from '../assets/cursos006.jpg'
import curso007 from '../assets/cursos007.jpg'
import curso008 from '../assets/cursos008.jpg'
import curso009 from '../assets/cursos009.jpg'

const dialog = ref(false)
const selectedCardIndex = ref(null)

const selectedCard = computed(() => {
  if (selectedCardIndex.value !== null) {
    return cards.value[selectedCardIndex.value]
  }
  return null
})

const whatsappNumber = ref('5545991365793') // (45) 99136-5793
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
  },
  {
    title: 'Curso Gerenciamento Ambiental de Empresas (INDIVIDUAL)',
    price: 'BRL 1.151,00',
    oldPrice: 'BRL 1.550,00',
    description: 'O curso perfeito para um gestor se tornar um ESG qualificado para sua empresa ser sustentável e com lucros visíveis.',
    fullDescription: 'O curso perfeito para um gestor se tornar um ESG qualificado para sua empresa ser sustentável e com lucros visíveis. Este curso individual oferece capacitação completa em gestão ambiental empresarial, abordando práticas sustentáveis, certificações ambientais, gestão de resíduos e estratégias para tornar sua empresa mais competitiva através da sustentabilidade.',
    image: curso005,
    benefits: [
      'Certificado reconhecido nacionalmente',
      'Material didático completo',
      'Acesso vitalício ao conteúdo',
      'Suporte durante o curso',
      'Aplicação prática imediata'
    ]
  },
  {
    title: 'Curso Boas Praticas Manipulação de Alimentos (INDIVIDUAL)',
    price: 'BRL 251,00',
    oldPrice: 'BRL 350,00',
    description: 'Curso amplamente utilizado para empresas de restaurantes e alimentícios no geral.',
    fullDescription: 'Curso amplamente utilizado para empresas de restaurantes e alimentícios no geral. Este curso individual capacita profissionais do setor alimentício nas melhores práticas de manipulação de alimentos, garantindo segurança alimentar, qualidade e conformidade com as normas da vigilância sanitária.',
    image: curso006,
    benefits: [
      'Certificado válido para vigilância sanitária',
      'Conteúdo atualizado com normas vigentes',
      'Acesso online ilimitado',
      'Material de apoio completo'
    ]
  },
  {
    title: 'Curso Educação Ambiental sobre Resíduos Gerados na Empresa (INDIVIDUAL)',
    price: 'BRL 551,00',
    oldPrice: 'BRL 850,00',
    description: 'Curso amplamente utilizado e de qualidade para lucros eficientes de colaboradores na sua empresa.',
    fullDescription: 'Curso amplamente utilizado e de qualidade para lucros eficientes de colaboradores na sua empresa. Este curso individual foca na educação ambiental sobre resíduos gerados na empresa, capacitando colaboradores para práticas sustentáveis, redução de desperdícios e gestão eficiente de resíduos, resultando em economia e melhor desempenho ambiental.',
    image: curso007,
    benefits: [
      'Capacitação completa em gestão de resíduos',
      'Redução de custos operacionais',
      'Certificado para toda equipe',
      'Material prático e aplicável',
      'Acompanhamento pós-curso'
    ]
  },
  {
    title: 'Curso Manipulação e Higiene de Alimentos (INDIVIDUAL)',
    price: 'BRL 251,00',
    oldPrice: 'BRL 350,00',
    description: 'Curso exigido para todos os cargos efetivos de cozinha pública ou privada.',
    fullDescription: 'Curso exigido para todos os cargos efetivos de cozinha pública ou privada. Este curso individual atende às exigências legais para profissionais que trabalham com manipulação de alimentos, cobrindo normas de higiene, segurança alimentar, boas práticas de fabricação e procedimentos sanitários essenciais.',
    image: curso008,
    benefits: [
      'Atende exigências legais',
      'Certificado reconhecido',
      'Válido para cozinhas públicas e privadas',
      'Conteúdo prático e objetivo',
      'Acesso imediato após compra'
    ]
  },
  {
    title: 'Curso Determinantes Sociais em Saúde Pública (INDIVIDUAL)',
    price: 'BRL 671,00',
    oldPrice: 'BRL 882,00',
    description: 'Curso utilizado para formação de profissionais da saúde, amplamente acolhido no público e privado',
    fullDescription: 'Curso utilizado para formação de profissionais da saúde, amplamente acolhido no público e privado. Este curso individual aborda os determinantes sociais em saúde pública, capacitando profissionais da área da saúde para compreender e atuar sobre os fatores sociais que influenciam a saúde das populações, essencial para profissionais que trabalham em saúde coletiva, atenção primária e gestão em saúde.',
    image: curso009,
    benefits: [
      'Reconhecido no setor público e privado',
      'Certificado válido para progressão',
      'Conteúdo atualizado e relevante',
      'Aplicação prática imediata',
      'Suporte especializado'
    ]
  }
])

</script>

<style scoped>
.cards-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  position: relative;
  z-index: 5;
  margin-top: 100vh;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
}

.title-text {
  font-size: 3rem;
  font-weight: 400;
  color: #333;
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
  max-width: 90%;
  margin: 0 auto;
}

.card-simplified :deep(.v-card-text) {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.price-button {
  background-color: #2e7d32 !important;
  color: white !important;
  font-weight: bold !important;
  height: auto !important;
  min-height: 48px !important;
  padding: 12px 16px !important;
}

.price-button:hover {
  background-color: #1b5e20 !important;
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

.card-col {
  max-width: 100%;
}

@media (min-width: 960px) {
  .card-col {
    max-width: 30%;
  }
}

@media (max-width: 768px) {
  /* Em mobile, cria folga lateral para os cards */
  .card-col {
    max-width: 88% !important;
    flex: 0 0 88% !important;
    margin-left: auto;
    margin-right: auto;
    padding-left: 8px;
    padding-right: 8px;
  }

  .card-simplified {
    width: 100%;
  }
}
</style>

