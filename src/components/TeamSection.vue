<template>
  <div class="team-section py-12 px-4">
    <v-container>
      <h3 class="team-title text-center mb-12">Nossa Equipe</h3>
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
              <v-card-title class="team-card-title text-center">{{ member.name }}</v-card-title>
              <v-card-subtitle class="team-card-subtitle text-center font-weight-medium">
                {{ member.role }}
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <p class="text-body-2 text-center">{{ member.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import equipe001 from '../assets/equipe001.jpeg'
import equipe002 from '../assets/equipe002.jpg'
import equipe003 from '../assets/equipe003.jpeg'
import equipe004 from '../assets/equipe004.jpeg'

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
    photo: equipe003,
    description: 'Técnica em Meio Ambiente (2021), lidera a área de Auditoria da Luar Ambiental, com foco em resultados, conformidade legal e sustentabilidade.'
  },
  {
    name: 'Anthony Araujo da Silva',
    role: 'Financeiro',
    photo: equipe002,
    description: 'Administrador financeiro na Luar Ambiental desde 2023, é responsável pela coordenação de todo o setor financeiro e pelo apoio estratégico à gestão da empresa e de suas filiais.'
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
.team-section {
  min-height: 600px;
  background: linear-gradient(135deg, #e9ecef 0%, #e5e8eb 100%);
  position: relative;
  z-index: 5;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.team-title {
  font-size: 2.5rem;
  font-weight: 400;
  color: #1a1a1a;
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

.team-card-title {
  text-align: center !important;
  width: 100% !important;
  justify-content: center !important;
}

.team-card-subtitle {
  text-align: center !important;
  width: 100% !important;
  justify-content: center !important;
}

.team-card :deep(.v-card-item) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (max-width: 768px) {
  .team-title {
    font-size: 1.8rem;
  }
}
</style>

