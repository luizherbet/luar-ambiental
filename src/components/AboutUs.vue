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
        <v-row justify="center" class="gap-4">
          <v-col
            v-for="(member, index) in teamMembers"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="3"
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

const aboutText = ref(
  'Somos uma empresa especializada em soluções ambientais, com mais de 28 anos de experiência no mercado. Nossa missão é proporcionar serviços de excelência, sempre priorizando a sustentabilidade e o cuidado com o meio ambiente. Trabalhamos com dedicação e comprometimento para atender nossos clientes com as melhores soluções do mercado.'
)

const teamMembers = ref([
  {
    name: 'João Silva',
    role: 'Diretor Executivo',
    photo: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    description: 'Engenheiro Ambiental com mais de 20 anos de experiência em gestão ambiental e sustentabilidade. Especialista em projetos de grande porte.'
  },
  {
    name: 'Maria Santos',
    role: 'Coordenadora de Projetos',
    photo: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
    description: 'Mestre em Engenharia Ambiental, com foco em gestão de resíduos e tratamento de efluentes. Lidera equipes multidisciplinares há 15 anos.'
  },
  {
    name: 'Pedro Oliveira',
    role: 'Especialista em Consultoria',
    photo: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    description: 'Consultor ambiental certificado, especializado em licenciamento ambiental e estudos de impacto. Mais de 12 anos de atuação no setor.'
  },
  {
    name: 'Ana Costa',
    role: 'Gerente de Operações',
    photo: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
    description: 'Engenheira Química com MBA em Gestão de Operações. Responsável pela execução e monitoramento de projetos ambientais há 10 anos.'
  }
])
</script>

<style scoped>
.about-section {
  background-color: #f5f5f5;
  position: relative;
  z-index: 5;
}

.text-section {
  margin-bottom: 3rem;
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







