<template>
  <!-- Botão Flutuante -->
  <v-btn
    class="newsletter-floating-btn"
    size="default"
    @click="dialog = true"
    aria-label="Newsletter"
  >
    <i class="bi bi-envelope email-icon"></i>
    <span class="newsletter-text">Cadastre-se!</span>
  </v-btn>

  <!-- Dialog/Modal -->
  <v-dialog
    v-model="dialog"
    max-width="500"
    persistent
  >
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        <span class="text-h5">Newsletter</span>
        <v-btn
          icon
          variant="text"
          @click="closeDialog"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-6">
        <div v-if="!submitted">
          <p class="mb-4 text-body-1">
            Cadastre-se para receber nossas novidades e atualizações!
          </p>

          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="name"
              label="Nome"
              :rules="nameRules"
              required
              variant="outlined"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              type="email"
              :rules="emailRules"
              required
              variant="outlined"
              class="mb-3"
            ></v-text-field>
          </v-form>
        </div>

        <div v-else class="text-center py-4">
          <v-icon color="success" size="64" class="mb-4">mdi-check-circle</v-icon>
          <h3 class="text-h6 mb-2">Cadastro realizado com sucesso!</h3>
          <p class="text-body-2 text-medium-emphasis">
            Obrigado por se cadastrar em nossa newsletter. Você receberá nossas novidades em breve!
          </p>
        </div>
      </v-card-text>

      <v-divider v-if="!submitted"></v-divider>

      <v-card-actions v-if="!submitted" class="pa-4">
        <v-spacer></v-spacer>
        <v-btn
          variant="text"
          @click="closeDialog"
        >
          Cancelar
        </v-btn>
        <v-btn
          color="primary"
          variant="flat"
          :disabled="!valid"
          :loading="loading"
          @click="submitNewsletter"
        >
          Cadastrar
        </v-btn>
      </v-card-actions>

      <v-card-actions v-else class="pa-4">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          variant="flat"
          @click="closeDialog"
        >
          Fechar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { subscribeToNewsletter } from '../services/newsletterService'

const dialog = ref(false)
const submitted = ref(false)
const loading = ref(false)
const valid = ref(false)
const name = ref('')
const email = ref('')
const form = ref(null)

const nameRules = [
  v => !!v || 'Nome é obrigatório',
  v => (v && v.length >= 3) || 'Nome deve ter pelo menos 3 caracteres'
]

const emailRules = [
  v => !!v || 'E-mail é obrigatório',
  v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
]

const closeDialog = () => {
  dialog.value = false
  // Reset após fechar (com delay para animação)
  setTimeout(() => {
    if (submitted.value) {
      submitted.value = false
      name.value = ''
      email.value = ''
      valid.value = false
      if (form.value) {
        form.value.resetValidation()
      }
    }
  }, 300)
}

// ID da lista do Brevo - obtenha no painel do Brevo
// Para encontrar: https://app.brevo.com > Contacts > Lists > Clique na lista > O ID aparece na URL
const BREVO_LIST_ID = 2 // ⚠️ SUBSTITUA pelo ID numérico real da sua lista (exemplo: 123)

const submitNewsletter = async () => {
  if (!form.value) return
  
  const { valid: formValid } = await form.value.validate()
  if (!formValid) return

  loading.value = true

  try {
    // Chama o serviço de newsletter
    const result = await subscribeToNewsletter(email.value, name.value, BREVO_LIST_ID)
    
    if (result && result.success) {
      submitted.value = true
    } else {
      throw new Error(result?.message || 'Erro desconhecido')
    }
  } catch (error) {
    console.error('Erro ao cadastrar newsletter:', error)
    const errorMessage = error.message || 'Erro ao cadastrar. Verifique sua conexão e tente novamente.'
    alert(errorMessage)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.newsletter-floating-btn {
  position: fixed !important;
  bottom: 24px;
  right: 80px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  transition: transform 0.2s ease;
  padding: 8px 14px !important;
  text-transform: none !important;
  font-weight: 500 !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  background-color: white !important;
  color: #333 !important;
  font-size: 0.9rem !important;
  border: 1px solid #e0e0e0 !important;
  overflow: hidden !important;
}

.newsletter-floating-btn:hover {
  transform: scale(1.05);
  background-color: #f5f5f5 !important;
}

.email-icon {
  font-size: 18px;
  flex-shrink: 0;
  color: #333;
}

.newsletter-text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  animation: textPulse 10s infinite;
}

@keyframes textPulse {
  0%, 30% {
    opacity: 1;
    max-width: 120px;
    padding-right: 0;
  }
  35%, 65% {
    opacity: 0;
    max-width: 0;
    padding-right: 0;
  }
  70%, 100% {
    opacity: 1;
    max-width: 120px;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .newsletter-floating-btn {
    bottom: 16px;
    right: 16px;
    padding: 6px 12px !important;
    font-size: 0.8rem !important;
    gap: 6px !important;
  }
  
  .email-icon {
    font-size: 16px;
  }
  
  .newsletter-text {
    animation: textPulseMobile 10s infinite;
  }
  
  @keyframes textPulseMobile {
    0%, 30% {
      opacity: 1;
      max-width: 100px;
      padding-right: 0;
    }
    35%, 65% {
      opacity: 0;
      max-width: 0;
      padding-right: 0;
    }
    70%, 100% {
      opacity: 1;
      max-width: 100px;
      padding-right: 0;
    }
  }
}
</style>
