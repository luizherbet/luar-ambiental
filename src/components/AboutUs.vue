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
        <h3 class="text-h4 font-weight-bold text-center mb-8">Nossa Equipe</h3>
        <v-row justify="start">
          <v-col
            v-for="(member, index) in teamMembers"
            :key="index"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="team-card text-center" elevation="2">
              <v-img
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
import equipe003 from '../assets/equipe003.jpg'
import equipe004 from '../assets/equipe004.avif'

const aboutText = ref(
  'Somos uma empresa especializada em serviços de saúde ambiental em Foz do Iguaçu, Paraná, criada em 2023. Nossa missão é proporcionar serviços de excelência, sempre priorizando a sustentabilidade e o cuidado com o meio ambiente. Trabalhamos com dedicação e comprometimento para atender nossos clientes com as melhores soluções do mercado.'
)

const teamMembers = ref([
  {
    name: 'Raul Silva',
    role: 'Diretor Executivo',
    photo: equipe001,
    description: 'Engenheiro Ambiental com mais de 20 anos de experiência em gestão ambiental e sustentabilidade. Especialista em projetos de grande porte.'
  },
  {
    name: 'Anthony Araujo da Silva',
    role: 'Financeiro',
    photo: equipe002,
    description: 'Mestre em Engenharia Ambiental, com foco em gestão de resíduos e tratamento de efluentes. Lidera equipes multidisciplinares há 15 anos.'
  },
  {
    name: 'Pedro Oliveira',
    role: 'Especialista em Consultoria',
    photo: equipe003,
    description: 'Consultor ambiental certificado, especializado em licenciamento ambiental e estudos de impacto. Mais de 12 anos de atuação no setor.'
  },
  {
    name: 'Ana Costa',
    role: 'Gerente de Operações',
    photo: equipe004,
    description: 'Engenheira Química com MBA em Gestão de Operações. Responsável pela execução e monitoramento de projetos ambientais há 10 anos.'
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

@media (min-width: 960px) {
  .team-section :deep(.v-col-md-3) {
    flex: 0 0 25% !important;
    max-width: 25% !important;
  }
}

.team-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-photo {
  border-radius: 4px 4px 0 0;
}
</style>







