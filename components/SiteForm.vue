<script setup>
import BCard from '@compromis/blobby/components/card/BCard.vue'
import BInputGroup from '@compromis/blobby/components/inputs/BInputGroup.vue'
import BInput from '@compromis/blobby/components/inputs/BInput.vue'
import BCheckbox from '@compromis/blobby/components/inputs/BCheckbox.vue'
import BButton from '@compromis/blobby/components/button/BButton.vue'

const props = defineProps({
  cas: { type: Boolean, default: false }
})

const errors = ref(null)
const submitted = ref(false)
const submitting = ref(false)
const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  message: '',
  privacy: false
})

async function submit() {
  try {
    await $fetch('https://forms.compromis.net/api/forms/no-estem-malaltes', {
      method: 'POST',
      body: form
    })
    submitted.value = true
  } catch(e) {
    errors.value = e
  } finally {
    submitting.value = false
  }
}

const strings = {
  val: {
    title: 'Tens informació sobre la trama de “teràpies” de conversió? Posa’t en contacte amb nosaltres',
    first_name: 'Nom',
    last_name: 'Cognoms',
    phone: 'Telèfon (opcional)',
    message: 'Missatge',
    button: 'Enviar'
  },
  cas: {
    title: '¿Tienes información sobre la trama de “terapias” de conversión? Ponte en contacto',
    first_name: 'Nombre',
    last_name: 'Apellidos',
    phone: 'Teléfono (opcional)',
    message: 'Mensaje',
    button: 'Enviar'
  }
}

const t = computed(() => props.cas ? strings.cas : strings.val)
</script>

<template>
  <section class="form card" v-motion-slide-visible-bottom>
    <BCard padded shadow>
      <h2>{{ t.title }}</h2>
      
      <form v-if="!submitted" @submit.prevent="submit">
        <BInputGroup class="form-group">
          <BInput v-model="form.first_name" variant="float" :label="t.first_name" name="first_name" span="2" required />
          <BInput v-model="form.last_name" variant="float" :label="t.last_name" name="last_name" span="2" required />
          <BInput v-model="form.email" variant="float" label="Email" name="email" type="email" span="4" required />
          <BInput v-model="form.phone" variant="float" :label="t.phone" name="phone" type="tel" span="4" />
          <div class="message-field span-4">
            <BInput v-model="form.message" variant="float" :label="t.message" name="message" type="textarea" span="4" required />
          </div>
        </BInputGroup>

        <BCheckbox v-model="form.privacy" name="privacy" value="Accepte" required class="privacy my-4">
          <template v-if="cas">
            Acepto la <a href="https://compromis.net/avis-legal/">política de privacidad</a> y doy consentimiento para que <strong>Compromís</strong> tramite las alegaciones expuestas en mi nombre.
          </template>
          <template v-else>
            Accepte la <a href="https://compromis.net/avis-legal/">política de privacitat</a> i done consentiment perquè <strong>Compromís</strong> tramite les al·legacions exposades en el meu nom.
          </template>
        </BCheckbox>

        <BButton type="submit" variant="primary" size="lg" :disabled="submitting">
          {{ t.button }}
        </BButton>
      </form>
      <div v-else class="submitted rounded-md">
        <template v-if="cas">
          <h2 class="mb-4">¡Gracias por ponerte en contacto!</h2>
          <p>Te responderemos tan pronto como nos sea posible.</p>
          <p class="mb-0"><a href="#share">Comparte esta página</a> con tus amistades para que llegue a más gente</p>
        </template>
        <template v-else>
          <h2 class="mb-4">Gràcies per contactar-nos!</h2>
          <p>Et respondrem tan prompte com ens siga possible.</p>
          <p class="mb-0"><a href="#share">Comparteix aquesta pàgina</a> amb les teues amistats per arribar a més gent!</p>
        </template>
      </div>
    </BCard>
  </section>
</template>

<style lang="scss">
.form {
  padding: var(--site-padding);
  border-radius: 1rem;
  overflow: hidden;
  max-width: var(--text-container);
  margin: 0 auto;

  h2 {
    color: var(--brown);
    margin-bottom: 2rem !important;
  }

  .button-primary {
    background: var(--brown) !important;
    color: var(--beige);
  }
}

.input-float .input {
  border-radius: 0;
}

.form-group .card {
  box-shadow: none !important;
  border: 1px var(--gray-300) solid;
}

.form .button-lg {
  font-size: 1.5rem !important;
  min-height: auto !important;
}

.submitted {
  color: var(--white);
  background: var(--green);
  padding: 1rem;

  h2 {
    color: var(--white);
  }

  a {
    color: var(--white);
    text-decoration: underline;
  }
}

.input-float.input-has-value .input-label {
  transform: translateY(calc(-50% - .6rem));
}

.message-field {
  .input-float .input-label {
    top: 2em;
    background-color: white;
  }

  textarea {
    display: block;
    field-sizing: content;
    min-height: 200px;
  }
}
</style>