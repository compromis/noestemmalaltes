<template>
  <article class="testimonial" v-motion-slide-visible-bottom>
    <div class="testimonial-picture">
      <div class="testimonial-sticky">
        <img :src="picture" :alt="alt" />
        <p class="testimonial-author">
          <slot name="author" />
        </p>
      </div>
    </div>
    <div class="testimonial-text">
      <blockquote>
        <div class="quote-symbol">
          <svg id="quatationmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.01 37.9">
            <path class="cls-1" d="M11.24,10.21c-1.48,1.53-2.22,3.68-2.22,6.46,0,1.02.05,1.8.14,2.36h9.72v18.88H0v-18.88c0-6.01,1.25-10.69,3.75-14.02C6.25,1.67,9.95,0,14.85,0c1.76,0,3.1.09,4.03.28l-1.11,7.91c-2.87-.18-5.04.49-6.53,2.02ZM36.37,10.21c-1.48,1.53-2.22,3.68-2.22,6.46,0,1.02.05,1.8.14,2.36h9.72v18.88h-18.88v-18.88c0-6.01,1.25-10.69,3.75-14.02,2.5-3.33,6.2-5,11.11-5,1.76,0,3.1.09,4.03.28l-1.11,7.91c-2.87-.18-5.05.49-6.53,2.02Z"/>
          </svg>
        </div>
        <slot />&#8221;
      </blockquote>
    </div>
  </article>
</template>

<script setup>
defineProps({
  picture: { type: String, default: '' },
  alt: { type: String, default: '' }
})
</script>

<style lang="scss">
.testimonial {
  background: var(--white);
  padding: 2rem;
  border-radius: .75rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  &-picture {
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: .5rem;
    }
  }

  &-sticky {
    position: sticky;
    top: 5rem;
  }

  &-text {
    position: relative;

    blockquote {
      initial-letter: 2;
      font-size: 1.25rem;
      margin-bottom: 0;
    }

    .quote-symbol {
      display: inline;
      float: left;
      margin: 0 1rem 0 0;

      svg {
        height: auto;
        width: 3.75rem;
        display: block;
        opacity: .25;

        .cls-1 {
          fill: currentColor;
        }
      }
    }
  }

  &-author {
    margin-top: 1rem;
    margin-bottom: 0;
  }
}
</style>