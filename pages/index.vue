<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ca',
  },
})

useSeoMeta({
  title: 'No estem malaltes - Compromís',
  ogTitle: 'No estem malaltes - Compromís',
  description: '.',
  ogDescription: '.',
  ogImage: 'https://noestemmalaltes.com/images/ogimage.png',
  twitterCard: 'summary_large_image',
})

const accordion = [
  {
    number: 'material-symbols:person-pin',
    color: 'blue',
    title: 'Què son les teràpies de conversió?',
    text: [
      'La llei valenciana LGTBI prohibeix la pràctica de mètodes, programes i teràpies d’aversió, conversió o contracondicionament destinades a modificar l’orientació sexual, la identitat de gènere o l’expressió de gènere de les persones.',
      'En alguns àmbits acadèmics es defineixen estes pràctiques com qualsevol tractament, pràctica o esforç sostingut que tinga com a objectiu reprimir, descoratjar o canviar l\'orientació sexual, la identitat de gènere, la modalitat de gènere, l\'expressió de gènere o qualsevol comportament associat amb un gènere diferent de l\'assignat en nàixer o que tinga com a objectiu alterar un tret intersexual sense una justificació adequada.'
    ]
  },
  {
    number: 'mdi:bar-chart',
    color: 'purple',
    title: 'Què hem proposat des de Compromís?',
    text: [
      'Hem proposat la creació d’una comissió d’investigació a les Corts per tal d’investigar la trama de teràpies de conversió present en alguns centres educatius i religiosos valencians.',
      'Hem prohibit les teràpies de conversió a les lleis valencianes trans i LGTBI',
      'Defensem, a més, la tipificació de la pràctica d’estes teràpies al codi Penal perquè la prohibició puga ser realment efectiva. Durant la tramitació de la Llei Estatal LGTBI vàrem donar suport a la seua inclusió a través d’una esmena que, malauradament, va ser rebutjada per la majoria del Congrés.'
    ]
  }
]
</script>

<template>
  <main>
    <div class="container">
      <SiteHeader>
        <SiteTitle />
      </SiteHeader>
      <section class="text text-intro">
        <h1 v-motion-fade-visible class="visually-hidden">
          No estem malaltes
        </h1>

        <Languages v-motion-slide-visible-bottom :delay="100" />

        <div v-motion-slide-visible-bottom :delay="200" class="quote">
          <blockquote>
            “Totes les «teràpies de conversió» comparteixen la premissa que l'orientació sexual i la identitat de gènere poden ser extirpades -expulsades, curades o rehabilitades-, com si foren alguna cosa aliena a la persona, la qual cosa <Annotated type="highlight" inmediate>constitueix una visió summament inhumana de l'existència humana</Annotated>.”
          </blockquote>
          <p>&mdash; <a href="https://documents.un.org/doc/undoc/gen/g20/108/71/pdf/g2010871.pdf" target="_blank">Expert independent de <img src="../assets/images/logos/un.svg" alt="Nacions Unides" class="un-logo" /> <strong>Nacions Unides</strong> sobre orientació sexual i identitat de gènere.</a></p>
        </div>
      </section>

      <div class="connection" v-motion-slide-visible-bottom :delay="300">
        Les "teràpies de conversió" contra les persones LGTBI són un atac als drets humans. No descansarem fins destapar tota esta trama i garantir que totes les escoles siguen espais segurs per a totes i tots.
      </div>

      <div class="intro-cta">
        <a href="#contacta">Tens informació sobre la trama? Contacta amb nosaltres</a>
      </div>
    </div>
    <BentoCards />
    <Accordion id="accordtion" :content="accordion" />
    <SiteForm id="contacta" />
    <Share>
      <template #title>Fes-ne difusió!</template>
      <p>Comparteix aquesta pàgina amb les teues amistats.</p>
    </Share>
  </main>
</template>
