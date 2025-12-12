<template>
  <div class="cards-section py-12 px-4">
    <v-container>
      <div class="section-title">
        <h2 class="title-text">Conheça nossos cursos</h2>
      </div>
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
                @click="reserve(index)"
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import curso001 from '../assets/curso001.jpg'
import curso002 from '../assets/cursos002.jpg'
import curso003 from '../assets/cursos003.jpg'
import curso004 from '../assets/cursos004.jpg'
import curso005 from '../assets/cursos005.jpg'
import curso006 from '../assets/cursos006.jpg'
import curso007 from '../assets/cursos007.jpg'
import curso008 from '../assets/cursos008.jpg'
import curso009 from '../assets/cursos009.jpg'



const cards = ref([
  {
    title: 'Plano Básico',
    price: 'BRL 49,90',
    description: 'O plano perfeito para a empresa que não quer mais dor de cabeça com cursos exigidos pelas diferentes fiscalizações municipais, estaduais e federais.',
    image: curso001,
    loading: false
  },
  {
    title: 'Plano Essencial',
    price: 'BRL 650,00',
    description: 'O plano ideal para a sua empresa ter todos os itens necessários sanitários exigidos pela vigilância sanitária local, verifique a disponibilidade na sua cidade atualmente atendemos Foz do Iguaçu/PR e Niterói/RJ',
    image: curso002,
    loading: false
  },
  {
    title: 'Plano Completo',
    price: 'BRL 980,00',
    description: 'O mais aclamado por todas as empresas de grande porte, tem tudo incluído desde sanitários a PGRS ou PGRCC o perfil que mais se enquadra na maioria, não quer ter problemas com multas, escolha este de olhos fechados para que não se preocupe depois!',
    image: curso003,
    loading: false
  },
  {
    title: 'Plano Avançado',
    price: 'BRL 3.508,00',
    description: 'Plano mais eficaz para área da saúde ambiental, tudo incluso e acompanhamento contínuo, os valores podem sofrer alterações de acordo com seu tamanho ou produção de resíduos.',
    image: curso004,
    loading: false
  },
  {
    title: 'Curso Gerenciamento Ambiental de Empresas (INDIVIDUAL)',
    price: 'BRL 1.151,00',
    oldPrice: 'BRL 1.550,00',
    description: 'O curso perfeito para um gestor se tornar um ESG qualificado para sua empresa ser sustentável e com lucros visíveis.',
    image: curso005,
    loading: false
  },
  {
    title: 'Curso Boas Praticas Manipulação de Alimentos (INDIVIDUAL)',
    price: 'BRL 251,00',
    oldPrice: 'BRL 350,00',
    description: 'Curso amplamente utilizado para empresas de restaurantes e alimentícios no geral.',
    image: curso006,
    loading: false
  },
  {
    title: 'Curso Educação Ambiental sobre Resíduos Gerados na Empresa (INDIVIDUAL)',
    price: 'BRL 551,00',
    oldPrice: 'BRL 850,00',
    description: 'Curso amplamente utilizado e de qualidade para lucros eficientes de colaboradores na sua empresa.',
    image: curso007,
    loading: false
  },
  {
    title: 'Curso Manipulação e Higiene de Alimentos (INDIVIDUAL)',
    price: 'BRL 251,00',
    oldPrice: 'BRL 350,00',
    description: 'Curso exigido para todos os cargos efetivos de cozinha pública ou privada.',
    image: curso008,
    loading: false
  },
  {
    title: 'Curso Determinantes Sociais em Saúde Pública (INDIVIDUAL)',
    price: 'BRL 671,00',
    oldPrice: 'BRL 882,00',
    description: 'Curso utilizado para formação de profissionais da saúde, amplamente acolhido no público e privado',
    image: curso009,
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

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 2rem;
}

.title-text {
  font-family: 'Cardo', serif;
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
}
</style>

