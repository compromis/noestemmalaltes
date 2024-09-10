<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es',
  },
})

useSeoMeta({
  title: 'No estamos enfermas - Compromís',
  ogTitle: 'No estamos enfermas - Compromís',
  description: 'Todas las "terapias de conversión" comparten la premisa de que la orientación sexual y la identidad de género pueden ser extirpadas -expulsadas, curadas o rehabilitadas-, como si fueran algo ajeno a la persona, lo que constituye una visión sumamente inhumana de la existencia humana.',
  ogDescription: 'Todas las "terapias de conversión" comparten la premisa de que la orientación sexual y la identidad de género pueden ser extirpadas -expulsadas, curadas o rehabilitadas-, como si fueran algo ajeno a la persona, lo que constituye una visión sumamente inhumana de la existencia humana.',
  ogImage: 'https://noestamosenfermas.com/images/ogimage_cas.png',
  twitterCard: 'summary_large_image',
})

const accordion = [
  {
    number: 'material-symbols:person-pin',
    color: 'blue',
    title: '¿Qué son las terapias de conversión?',
    text: [
      'La ley valenciana LGTBI prohíbe la práctica de métodos, programas y terapias de aversión, conversión o contracondicionamiento destinadas a modificar la orientación sexual, la identidad de género o la expresión de género de las personas.',
      'En algunos ámbitos académicos se definen estas prácticas como cualquier tratamiento, práctica o esfuerzo sostenido que tenga como objetivo reprimir, desalentar o cambiar la orientación sexual, la identidad de género, la modalidad de género, la expresión de género o cualquiera comportamiento asociado con un género diferente al asignado al nacer o que tenga como objetivo alterar un rasgo intersexual sin una justificación adecuada.'
    ]
  },
  {
    number: 'mdi:bar-chart',
    color: 'purple',
    title: '¿Qué hemos propuesto desde Compromís?',
    text: [
      'Hemos propuesto la creación de una comisión de investigación en Les Corts para investigar la trama de terapias de conversión presente en algunos centros educativos y religiosos valencianos.',
      'Hemos prohibido las terapias de conversión en las leyes valencianas trans y LGTBI',
      'Defendemos, además, la tipificación de la práctica de estas terapias en el código Penal para que la prohibición pueda ser realmente efectiva. Durante la tramitación de la Ley Estatal LGTBI apoyamos su inclusión a través de una enmienda que, desgraciadamente, fue rechazada por la mayoría del Congreso.'
    ]
  }
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
          No estamos enfermas
        </h1>

        <Languages v-motion-slide-visible-bottom :delay="100" />

        <div v-motion-slide-visible-bottom :delay="200" class="quote">
          <blockquote>
            Todas las "terapias de conversión" comparten la premisa de que la orientación sexual y la identidad de género pueden ser extirpadas -expulsadas, curadas o rehabilitadas-, como si fueran algo ajeno a la persona, lo que <Annotated type="highlight" inmediate>constituye una visión sumamente inhumana de la existencia humana</Annotated>.
          </blockquote>
          <p>&mdash; <a href="https://documents.un.org/doc/undoc/gen/g20/108/71/pdf/g2010871.pdf" target="_blank">Expert independent de <img src="../assets/images/logos/un.svg" alt="Nacions Unides" class="un-logo" /> <strong>Nacions Unides</strong> sobre orientació sexual i identitat de gènere.</a></p>
        </div>
      </section>

      <div class="connection" v-motion-slide-visible-bottom :delay="300">
        Las "terapias de conversión" contra las personas LGTBI son un ataque a derechos humanos. No descansaremos hasta destapar toda esta trama y garantizar que todas las escuelas sean espacios seguros para todas y todos.
      </div>

      <div class="intro-cta">
        <a href="#contacta">¿Tienes información sobre la trama? Contacta con nosotros</a>
      </div>
    </div>
    <BentoCards />
    <Accordion id="accordtion" :content="accordion" />
    <SiteForm id="contacta" />
    <Share>
      <template #title>Haz difusión</template>
      <p>Comparte esta página con tus amistades.</p>
    </Share>
  </main>
</template>
