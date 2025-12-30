<template>
  <div class="services-section py-16">
    <v-container class="px-0">
      <div class="text-center mb-12 px-4">
        <h2 class="section-title mb-4">Nossos Serviços</h2>
        <p class="section-subtitle">
          Soluções completas em consultoria ambiental, construção, saúde e serviços especializados
        </p>
      </div>

      <v-row class="services-row">
        <v-col
          v-for="(category, index) in serviceCategories"
          :key="index"
          cols="12"
          md="6"
          lg="3"
          class="pa-2 service-col"
        >
          <div 
            class="service-category-card" 
            :class="`category-${category.name.toLowerCase()}`"
          >
            <div class="category-header" :style="{ background: category.gradient }">
              <h3 class="category-title">{{ category.name }}</h3>
            </div>
            
            <div class="category-content">
              <ul class="service-list">
                <li
                  v-for="(service, serviceIndex) in category.services"
                  :key="serviceIndex"
                  class="service-item"
                >
                  <v-icon size="small" :color="category.checkColor" class="check-icon">mdi-check-circle</v-icon>
                  <span class="service-text">{{ service }}</span>
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const serviceCategories = ref([
  {
    name: 'CONSTRUÇÃO',
    icon: 'mdi-hammer-wrench',
    color: 'blue-darken-2',
    gradient: 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)',
    iconColor: '#ffffff',
    checkColor: '#64b5f6',
    services: [
      'PGRCC – Programa de Gerenciamento de Resíduos de Construção Civil',
      'Laudos e Perícias Ambientais',
      'Projetos Hidrossanitário',
      'Laudo Técnico de reforma, assistência técnica condominial entre outros',
      'Serviços arquitetônicos',
      'Plano Completo (consultar vendedor)',
      'Açudes sustentáveis',
      'Reutilização de vidros'
    ]
  },
  {
    name: 'SAÚDE',
    icon: 'mdi-medical-bag',
    color: 'red-darken-2',
    gradient: 'linear-gradient(135deg, #f48fb1 0%, #f06292 100%)',
    iconColor: '#ffffff',
    checkColor: '#f06292',
    services: [
      'PGRSS – Programa de Gerenciamento de Resíduos de Serviço de Saúde',
      'Cursos Sanitários exigidos pela VISA – Vigilância Sanitária',
      'Esgoto Sanitário',
      'Coleta de bitucas',
      'TAP – Tratamento de água de poços',
      'Plano Avançado (consultar vendedor)',
      'Estudos de saúde pública',
      'Emissão de gases'
    ]
  },
  {
    name: 'AMBIENTAL',
    icon: 'mdi-tree',
    color: 'green-darken-2',
    gradient: 'linear-gradient(135deg, #81c784 0%, #66bb6a 100%)',
    iconColor: '#ffffff',
    checkColor: '#66bb6a',
    services: [
      'PGRS – Programa de Gerenciamento de Resíduos Sólidos',
      'Compostagem orgânica',
      'Cursos Ambientais',
      'Monitoramento de fauna',
      'Censo de espécies arbóreas',
      'Compensação de Carbono',
      'Plano Básico (consultar vendedor)',
      'Agricultura Sustentável'
    ]
  },
  {
    name: 'SERVIÇOS',
    icon: 'mdi-cog',
    color: 'orange-darken-2',
    gradient: 'linear-gradient(135deg, #ffb74d 0%, #ffa726 100%)',
    iconColor: '#ffffff',
    checkColor: '#ffa726',
    services: [
      'PMOC – Programa de Manutenção Operação e Controle',
      'Limpeza de caixa d\'água',
      'Desinsetização e Desratização',
      'Placas Solares',
      'Reuso de Água',
      'Economia de água',
      'Plano Essencial (consultar vendedor)',
      'Materiais têxtil reutilizado'
    ]
  }
])
</script>

<style scoped>
.services-section {
  background: linear-gradient(135deg, #f0f7f4 0%, #eaf3ef 100%);
  position: relative;
  z-index: 5;
}

.section-title {
  font-size: 3rem;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  line-height: 1.6;
}

.services-row {
  margin: 0;
}

.service-category-card {
  height: 100%;
  background: #ffffff;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.service-category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
  z-index: 10;
}

.category-header {
  padding: 2rem 1.5rem;
  text-align: center;
  position: relative;
}

.category-title {
  font-size: 1.4rem !important;
  font-weight: 600 !important;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
  margin: 0;
}

.category-content {
  padding: 0;
  background: #ffffff;
  flex: 1;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;
  gap: 0.75rem;
}

.service-item:last-child {
  border-bottom: none;
}

.service-item:hover {
  background-color: #f8f9fa;
}

.check-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.service-text {
  line-height: 1.6;
  font-size: 0.95rem;
  color: #444;
  font-weight: 400;
  flex: 1;
}

/* Cores específicas por categoria */
.category-construção .category-header {
  background: linear-gradient(135deg, #90caf9 0%, #64b5f6 100%);
}

.category-saúde .category-header {
  background: linear-gradient(135deg, #f48fb1 0%, #f06292 100%);
}

.category-ambiental .category-header {
  background: linear-gradient(135deg, #81c784 0%, #66bb6a 100%);
}

.category-serviços .category-header {
  background: linear-gradient(135deg, #ffb74d 0%, #ffa726 100%);
}

@media (max-width: 960px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .category-header {
    padding: 1.5rem 1rem;
  }
  
  .category-title {
    font-size: 1.2rem !important;
  }
  
  .service-item {
    padding: 0.875rem 1.25rem;
  }
  
  .service-text {
    font-size: 0.9rem;
  }
  
  .service-category-card {
    margin-bottom: 1rem;
  }
  
  .service-category-card:last-child {
    margin-bottom: 0;
  }
}

/* Mobile: dar folga lateral nos cards de serviços */
@media (max-width: 768px) {
  .service-col {
    max-width: 88% !important;
    flex: 0 0 88% !important;
    margin-left: auto;
    margin-right: auto;
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>

