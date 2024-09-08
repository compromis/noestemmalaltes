<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es',
  },
})

useSeoMeta({
  title: 'Aeropuerto sostenible - Compromís',
  ogTitle: 'Aeropuerto sostenible - Compromís',
  description: 'Firma para frenar la ampliación de vuelos y pistas del aeropuerto de manises, para garantizar la salud y el bienestar de miles de personas.',
  ogDescription: 'Firma para frenar la ampliación de vuelos y pistas del aeropuerto de manises, para garantizar la salud y el bienestar de miles de personas.',
  ogImage: 'https://aeroportsostenible.compromis.net/images/ogimage_cas.png',
  twitterCard: 'summary_large_image',
})

const accordion = [
  {
    number: 'material-symbols:person-pin',
    title: 'Los protagonistas',
    text: [
      'Aena, empresa pública participada en un 49% por socios privados desde 2015, quiere aumentar el número de vuelos al Aeropuerto de València para incrementar sus ingresos por tasas. Esta propuesta cuenta con el apoyo del President Carlos Mazón <sup class="pp">(PP)</sup> y de la Consellera Nuria Montes <sup class="pp">(PP)</sup>, así como del Ministro de Transportes, Óscar Puente <sup class="psoe">(PSOE)</sup>, el mismo que apoya a la ampliación del Puerto sin realizar una nueva Declaración de Impacto Ambiental.',
      'Desde la Diputación de Alicante y su Patronato de Turismo, Mazón, y desde la gerencia de la patronal de turismo HOSBEC, Montes, antes de las elecciones de 2023 concertaron con los tour operadores más fuertes ingleses y americanos, la venida masiva de turistas de sol y playa, mayoritariamente de low-cost, a través de paquetes cerrados de vuelo y hotel. Ahora piden una ampliación imposible para conseguir más quieres, más pasajeros y más clientes para los negocios de sus amigos y socios.'
    ]
  },
  {
    number: 'mdi:bar-chart',
    title: 'Las cifras',
    text: [
      'El Aeropuerto de Manises, en la actualidad, tiene un volumen mensual de 7.852 operaciones de aeronaves (mayo 2024): 5.090 durante el día, 1.659 por la tarde y 1.103 por la noche, entre las 23:00 h. y las 7:00 h. El Aeropuerto opera las 24 horas del día.',
      'Esto supone una grave contaminación acústica que se puede doblar si a partir de 2027 se pone en marcha una nueva pista y aumenta el número de vuelos para satisfacer los intereses de los operadores. AENA ha tenido que pagar la insonorización de miles de viviendas porque los niveles de ruido superan los mínimos legales. Es una situación insostenible. Afecta en una población superior a las 500.000 personas que viven en Manises, Quart de Poblet, Aldaia, Barrio de Cristo, Mislata, Xirivella, Orilla roja de Turia y València (esencialmente Patraix).'
    ]
  },
  {
    number: 'octicon:mute-24',
    title: 'Plan de acción contra el ruido',
    text: [
      'La Dirección General de Aviación Civil ha publicado un Plan contra el Ruido del Aeropuerto de València que se encuentra ahora en fase de alegaciones. Servirá como justificación para promover una ampliación de vuelos y pistas que tenemos que frenar.',
      'Por eso, te pedimos tu apoyo firmando el texto que puedes leer a continuación. El Plan presenta varias deficiencias importantes que tienen que ser abordadas para cumplir con la normativa europea y garantizar la protección de los residentes de las poblaciones afectadas.',
    ]
  },
]
</script>

<template>
  <main>
    <div class="container">
      <SiteHeader>
        <SiteTitleCas />
      </SiteHeader>
      <section class="text text-intro">
        <h1 v-motion-fade-visible class="visually-hidden">
          Aeropuerto sostenible
        </h1>

        <Languages />

        <p v-motion-fade-visible>
          Firma para frenar la ampliación de vuelos y pistas del Aeropuerto de Manises, para garantizar la salud y el bienestar de miles de personas
        </p>

        <div v-motion-fade-visible class="sign-cta">
          <a href="#firma" class="button button-primary text-lg button-lg button-solid">
            <Icon name="fluent:signature-20-regular" />
            Firma
          </a>
        </div>
 
        <p v-motion-fade-visible>
          1.103 operaciones nocturnas de aeronaves <sup>(mayo de 2024)</sup>, un turismo de baja calidad que rompe el mercado de la vivienda ocupando apartamentos mayoritariamente ilegales, una población afectada que tiene que cerrar sus ventanas para poder descansar
        </p>
      </section>
    </div>
    <Accordion id="accordtion" :content="accordion" />
    <SiteForm id="firma" cas />
    <Share>
      <template #title>Haz difusión</template>
      <p>Comparte esta página con tus amistades.</p>
    </Share>
  </main>
</template>
