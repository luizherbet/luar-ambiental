<template>
  <div class="cards-section py-12 px-4">
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            :disabled="card.loading"
            :loading="card.loading"
            class="mx-auto card-simplified"
            height="100%"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              v-if="card.image"
              class="card-image"
              :src="card.image"
              cover
            ></v-img>

            <v-card-item>
              <v-card-title>{{ card.title }}</v-card-title>
            </v-card-item>

            <v-card-text class="card-description">
              <div>{{ card.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="deep-purple-lighten-2"
                :text="card.buttonText || 'Saiba Mais'"
                block
                border
                @click="reserve(index)"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import curso001 from '../assets/curso001.jpg'


const cards = ref([
  {
    title: 'Plano Básico',
    description: 'Ideal para pequenas empresas e residências que buscam soluções ambientais essenciais.',
    image: curso001,
    buttonText: 'Saiba Mais',
    loading: false
  },
  {
    title: 'Plano Intermediário',
    description: 'Solução completa para empresas de médio porte que necessitam de um acompanhamento mais detalhado e personalizado. Inclui todas as funcionalidades do plano básico, além de auditorias ambientais regulares, desenvolvimento de planos de ação específicos, treinamento de equipes e monitoramento contínuo do desempenho ambiental.',
    image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    buttonText: 'Saiba Mais',
    loading: false
  },
  {
    title: 'Plano Premium',
    description: 'O mais completo e abrangente de nossos planos, desenvolvido para grandes corporações e organizações que buscam excelência em gestão ambiental. Inclui todos os serviços dos planos anteriores, além de consultoria estratégica especializada, certificações ambientais e soluções customizadas.',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    buttonText: 'Saiba Mais',
    loading: false
  },
  {
    title: 'Consultoria Ambiental',
    description: 'Serviço especializado de consultoria para empresas que precisam de orientação técnica em questões ambientais. Oferecemos análise de processos, identificação de impactos e desenvolvimento de estratégias personalizadas para cada cliente.',
    image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
    buttonText: 'Saiba Mais',
    loading: false
  },
  {
    title: 'Auditoria Ambiental',
    description: 'Realizamos auditorias completas para verificar o cumprimento das normas ambientais e identificar oportunidades de melhoria. Nossos relatórios detalhados ajudam empresas a se manterem em conformidade com a legislação vigente.',
    image: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
    buttonText: 'Saiba Mais',
    loading: false
  },
  {
    title: 'Gestão de Resíduos',
    description: 'Soluções completas para gestão e tratamento de resíduos industriais e comerciais. Desenvolvemos planos de redução, reutilização e reciclagem que minimizam impactos ambientais e reduzem custos operacionais.',
    image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    buttonText: 'Saiba Mais',
    loading: false
  },
  {
    title: 'Certificação ISO 14001',
    description: 'Auxiliamos empresas na implementação e certificação do sistema de gestão ambiental ISO 14001. Nossa equipe especializada garante que todos os requisitos sejam atendidos de forma eficiente e duradoura.',
    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    buttonText: 'Saiba Mais',
    loading: false
  },
  {
    title: 'Treinamento e Capacitação',
    description: 'Programas de treinamento desenvolvidos para capacitar equipes em práticas ambientais sustentáveis. Oferecemos cursos personalizados que atendem às necessidades específicas de cada organização.',
    image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
    buttonText: 'Saiba Mais',
    loading: false
  },
  {
    title: 'Monitoramento Contínuo',
    description: 'Serviço de monitoramento e acompanhamento contínuo do desempenho ambiental da sua empresa. Fornecemos relatórios periódicos e alertas para garantir que os objetivos ambientais sejam alcançados.',
    image: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
    buttonText: 'Saiba Mais',
    loading: false
  }
])

function reserve(index) {
  cards.value[index].loading = true
  setTimeout(() => {
    cards.value[index].loading = false
  }, 2000)
}
</script>

<style scoped>
.cards-section {
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;
  z-index: 5;
  margin-top: 100vh;
}

.card-simplified {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 500px;
}

.card-simplified :deep(.v-card-text) {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-description {
  height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  line-height: 1.4;
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-simplified :deep(.v-img) {
  width: 100% !important;
  height: 250px !important;
  min-height: 250px !important;
  max-height: 250px !important;
}

.card-simplified :deep(.v-img__img) {
  width: 100% !important;
  height: 250px !important;
  object-fit: cover !important;
}
</style>

