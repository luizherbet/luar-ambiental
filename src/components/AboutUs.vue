<template>
  <div class="about-section py-12 px-4">
    <v-container>
      <!-- Seção Nossa História -->
      <div id="nossa-historia" class="history-section mb-16">
        <h3 class="section-subtitle mb-8">Nossa História</h3>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <div class="history-content">
              <p class="history-text mb-4">
                A Luar nasceu em 2023 com a missão de ser um agente facilitador para empresas que buscam excelência em conformidade e sustentabilidade. O início foi marcado pelos desafios naturais de quem se propõe a desbravar um setor técnico e rigoroso, mas a intenção de melhorar os processos empresariais e simplificar as papeladas ambientais e sanitárias sempre foi o nosso norte.
              </p>
              <p class="history-text mb-4">
                Hoje, a Luar consolidou-se no mercado através de uma atuação constante e uma equipe técnica de alto nível. Com uma estrutura sólida e parcerias estratégicas com empresas em diversos setores, oferecemos uma rede completa de soluções para nossos clientes.
              </p>
              <p class="history-text">
                O que começou como um sonho de simplificação hoje é uma realidade robusta, contando com mais de 30 serviços especializados que garantem que sua empresa esteja sempre em dia com as exigências legais e comprometida com o meio ambiente.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Seção Estrutura Institucional -->
      <div class="institutional-section mb-16">
        <h3 class="section-subtitle mb-12">Estrutura Institucional</h3>
        
        <!-- Primeira linha: Propósito e Missão -->
        <v-row class="institutional-row" justify="center">
          <!-- Propósito -->
          <v-col cols="12" md="5" class="mb-6 pb-6">
            <div class="institutional-card-item">
              <h3 class="institutional-title-text">Propósito</h3>
              <div class="institutional-divider"></div>
              <p class="institutional-text">
                Descomplicar a gestão ambiental e sanitária para que o empreendedor possa focar no crescimento do seu negócio com segurança e responsabilidade.
              </p>
            </div>
          </v-col>

          <!-- Missão -->
          <v-col cols="12" md="5" class="mb-6">
            <div class="institutional-card-item">
              <h3 class="institutional-title-text">Missão</h3>
              <div class="institutional-divider"></div>
              <p class="institutional-text">
                Oferecer soluções integradas em consultoria, engenharia e serviços ambientais/sanitários, entregando conformidade técnica por meio de uma equipe qualificada e parcerias inovadoras.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- Segunda linha: Visão -->
        <v-row class="institutional-row mb-8" justify="center">
          <v-col cols="12" md="10" class="mb-6">
            <div class="institutional-card-item">
              <h3 class="institutional-title-text">Visão</h3>
              <div class="institutional-divider"></div>
              <p class="institutional-text">
                Ser referência em consultoria multisetorial, reconhecida pela capacidade de resolver burocracias complexas e implementar práticas sustentáveis de forma prática e acessível.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- Terceira linha: Valores -->
        <v-row class="institutional-row" justify="center">
          <v-col cols="12" md="10">
            <div class="institutional-card-item">
              <h3 class="institutional-title-text">Valores</h3>
              <div class="institutional-divider"></div>
              <div class="values-container">
                <div class="value-card">
                  <strong class="value-title">Conformidade Técnica</strong>
                  <p class="value-description">Rigor nos laudos, perícias e programas como PGRCC, PGRSS e PGRS.</p>
                </div>
                <div class="value-card">
                  <strong class="value-title">Colaboração Estratégica</strong>
                  <p class="value-description">Valorização de parcerias que ampliam nosso alcance, da engenharia civil à energia solar.</p>
                </div>
                <div class="value-card">
                  <strong class="value-title">Sustentabilidade Aplicada</strong>
                  <p class="value-description">Foco em soluções reais como compostagem, reuso de água e economia de energia.</p>
                </div>
                <div class="value-card">
                  <strong class="value-title">Constância e Compromisso</strong>
                  <p class="value-description">Atuação ética e contínua para garantir a tranquilidade de nossos clientes.</p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>

    </v-container>
  </div>
</template>

<script setup>
// Componente focado apenas em "Sobre Nós" - História e Estrutura Institucional
</script>

<style scoped>
.about-section {
  min-height: 800px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f7f4 100%);
  position: relative;
  z-index: 5;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.text-section {
  margin-bottom: 3rem;
}

.about-title {
  font-size: 3rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
}


/* Seção Nossa História */
.history-section {
  margin-bottom: 4rem;
}

.section-subtitle {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2rem;
}

.history-content {
  text-align: justify;
}

.history-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

/* Seção Estrutura Institucional */
.institutional-section {
  margin-bottom: 4rem;
}

.institutional-row {
  align-items: stretch;
}

/* Garante altura igual para Propósito e Missão */
.institutional-row > .v-col {
  display: flex;
}

.institutional-row > .v-col .institutional-card-item {
  flex: 1;
  min-height: 240px;
}

.institutional-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.institutional-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15) !important;
}

.institutional-card-item {
  padding: 10px 20px 24px 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 200px;
}

.institutional-card-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.institutional-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem;
}

.institutional-title-text {
  font-size: 2rem !important;
  font-weight: 600 !important;
  color: #1a1a1a;
  text-align: center !important;
  margin: 1rem 0 0.75rem 0 !important;
  padding: 0 !important;
  width: 100%;
  line-height: 1.3;
}

.institutional-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2e7d32, #66bb6a);
  margin: 0 auto 1.25rem auto;
  border-radius: 2px;
}

.institutional-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  font-weight: 400;
  margin: 0;
  text-align: center;
}

.values-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
  align-items: start;
  justify-items: center; /* Centraliza cada card na coluna */
}

@media (max-width: 768px) {
  .values-container {
    grid-template-columns: 1fr;
  }
}

.value-card {
  background: #f8f9fa;
  padding: 0.75rem 1.25rem 0.25rem 1.25rem !important;
  border-radius: 8px;
  border-left: 4px solid #2e7d32;
  text-align: center;
  transition: transform 0.2s ease, background-color 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  width: 100%;
  max-width: 520px;
  margin: 0 auto; /* Centraliza o card dentro da célula */
}

.value-card:hover {
  transform: translateX(4px);
  background-color: #f0f7f4;
}

.value-title {
  font-size: 1.1rem;
  color: #1a1a1a;
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 0 !important;
  padding-top: 0 !important;
  line-height: 1.3;
  position: relative;
  top: 0;
}

.value-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
  font-weight: 400;
  flex: 1;
  text-align: center;
}

@media (max-width: 768px) {
  .section-subtitle {
    font-size: 1.8rem;
  }
  
  .history-text {
    font-size: 1rem;
    text-align: left;
  }
  
  .institutional-title {
    font-size: 1.3rem !important;
  }
  
  .institutional-text,
  .value-item {
    font-size: 0.95rem;
  }
}
</style>







