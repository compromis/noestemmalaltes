<template>
  <article :class="['headline', { 'has-picture': !!picture }]" v-motion-slide-visible-bottom>
    <div v-if="picture" class="headline-picture">
      <img :src="picture" :alt="alt" />
    </div>

    <div class="headline-content">
      <div class="headline-source">
        <img v-if="source === 'levante'" src="../assets/images/logos/levante.svg" alt="Levante" />
        <img v-if="source === 'lasprovincias'" src="../assets/images/logos/lasprovincias.svg" alt="Las Provincias" />
        <img v-if="source === 'eldiario'" src="../assets/images/logos/eldiario.svg" alt="eldiario.es" />
      </div>

      <div class="headline-text headline-font">
        <slot />
      </div>

      <div v-if="$slots.subheading" class="headline-subheading">
        <slot name="subheading" />
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  source: { type: String, default: '' },
  picture: { type: String, default: '' },
  alt: { type: String, default: '' }
})
</script>

<style lang="scss">
  .headline {
    background: var(--white);
    padding: 2rem;
    border-radius: .75rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;

    &-source {
      img {
        height: 1rem;
      }
    }

    &-text {
      font-size: var(--text-xl);
      line-height: 1;
      margin-top: 1rem;
    }

    &-subheading {
      font-size: 1.25rem;
      margin-top: 1rem;

      ul {
        margin-bottom: 0;
      }
    }

    &-picture {
      img {
        width: 100%;
        border-radius: .5rem;
        height: 100%;
        object-fit: cover;
      }
    }

    &:not(.has-picture) {
      .headline-content {
        grid-column: span 2;
      }
    }
  }
</style>