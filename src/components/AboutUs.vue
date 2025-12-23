<template>
  <div class="about-section py-12 px-4">
    <v-container>
      <!-- Título -->
      <div class="text-center mb-8">
        <h2 class="text-h3 font-weight-bold mb-4">Sobre Nós</h2>
      </div>

      <!-- Seção de Texto -->
      <div class="text-section mb-12">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <p class="text-body-1 text-center">
              {{ aboutText }}
            </p>
          </v-col>
        </v-row>
      </div>

      <!-- Seção da Equipe -->
      <div class="team-section">
        <h3 class="text-h4 font-weight-bold text-center mb-12">Nossa Equipe</h3>
        <v-row justify="center" class="team-row">
          <v-col
            v-for="(member, index) in teamMembers"
            :key="index"
            cols="12"
            sm="6"
            md="3"
            class="team-col"
          >
            <v-card class="team-card text-center" elevation="2">
              <v-img
                v-if="member.photo"
                :src="member.photo"
                :alt="member.name"
                height="250"
                cover
                class="team-photo"
              ></v-img>
              
              <v-card-item>
                <v-card-title class="text-h6">{{ member.name }}</v-card-title>
                <v-card-subtitle class="text-subtitle-1 font-weight-medium">
                  {{ member.role }}
                </v-card-subtitle>
              </v-card-item>

              <v-card-text>
                <p class="text-body-2">{{ member.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import equipe001 from '../assets/equipe001.jpeg'
import equipe002 from '../assets/equipe002.jpg'
// import equipe003 from '../assets/equipe003.jpg'
import equipe004 from '../assets/equipe004.jpeg'

const aboutText = ref(
  'Somos uma empresa especializada em serviços de saúde ambiental em Foz do Iguaçu, Paraná, criada em 2023. Nossa missão é proporcionar serviços de excelência, sempre priorizando a sustentabilidade e o cuidado com o meio ambiente. Trabalhamos com dedicação e comprometimento para atender nossos clientes com as melhores soluções do mercado.'
)

const teamMembers = ref([
  {
    name: 'Raul Silva',
    role: 'Presidente Luar',
    photo: equipe001,
    description: 'Graduado em Ciências Biológicas (2016), Pós-graduado em Pericia e auditoria Ambiental. Atualmente Mestrando em Saúde Publica pela Uneatlantico da Espanha.'
  },
  {
    name: 'Kendall Alves de Araújo',
    role: 'Co-Presidente',
    description: 'Técnica em Meio Ambiente (2021). Comanda a parte de Auditoria da Luar Ambiental'
  },
  {
    name: 'Anthony Araujo da Silva',
    role: 'Financeiro',
    photo: equipe002,
    description: 'Administrador financeiro desde os 16 anos na Luar Atualmente, coordena todo o financeiro e toda a Luar Ambiental com suas filiais.'
  },
  {
    name: 'Luiz Herbet',
    role: 'Marketing',
    photo: equipe004,
    description: 'Engenheiro da Computação e Desenvolvedor Full Stack, responsável pela elaboração do site institucional da Luar Ambiental e pela criação de conteúdo para as redes sociais.'
  }
])
</script>

<style scoped>
.about-section {
  min-height: 800px;
  background-color: #f5f5f5;
  position: relative;
  z-index: 5;
}

.text-section {
  margin-bottom: 3rem;
}

.team-section :deep(.v-row) {
  margin: 0;
}

.team-row {
  margin: 0;
}

.team-col {
  padding: 0 4px !important;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

@media (min-width: 960px) {
  .team-section :deep(.v-col-md-3) {
    flex: 0 0 25% !important;
    max-width: 25% !important;
    padding-left: 4px !important;
    padding-right: 4px !important;
  }
  
  .team-col {
    margin-bottom: 0;
    padding: 0 4px !important;
    justify-content: flex-start;
  }
}

.team-card {
  height: 100%;
  transition: transform 0.3s ease;
  max-width: 280px;
  width: 100%;
  margin: 10px auto;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-photo {
  border-radius: 4px 4px 0 0;
}

.team-card :deep(.v-img) {
  width: 100% !important;
  height: 250px !important;
  min-height: 250px !important;
  max-height: 250px !important;
}

.team-card :deep(.v-img__img) {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center center !important;
}
</style>







