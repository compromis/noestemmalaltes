<script setup>
defineProps({
  id: { type: String, required: true },
  content: { type: Array, required: true }
})

const openItem = ref(null)

function setItem(id) {
  openItem.value = (openItem.value === id) ? null : id
}
</script>

<template>
  <div :id="id" class="accordion card bg-white rounded-md">
    <div v-for="(item, i) in content" :key="i" class="accordion-item">
      <h4 class="accordion-title">
        <button
          type="button"
          :aria-expanded="openItem === i ? 'true' : 'false'"
          class="accordion-trigger"
          :aria-controls="`${id}-item-${i}`"
          :id="`${id}-button-${i}`"
          @click="setItem(i)"
        >
          <span class="accordion-title">
            <span v-if="item.number" :class="['accordion-number', `bg-${item.color}`]">
              <Icon :name="item.number" />
            </span>
            {{ item.title }}
            <span class="accordion-icon">
              <Icon name="lucide:chevron-down" />
            </span>
          </span>
        </button>
      </h4>
      <Transition name="curtain">
        <div
          v-if="openItem === i"
          :id="`${id}-item-${i}`"
          role="region"
          :aria-labelledby="`${id}-button-${i}`"
          class="accordion-panel"
        >
          <p v-for="line in item.text" v-html="line" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  max-width: var(--text-container);
  margin-inline: auto;
  margin-block: 3rem;

  &-title {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      appearance: none;
      background: transparent;
      color: var(--gray-900);
      padding: 1rem;
      width: 100%;
      text-align: left;
      transition: .25s ease;
      border: 0;
      border-top: 1.5px var(--gray-200) solid;
      font-size: var(--text-md);
      font-weight: 500;

      &[aria-expanded="true"] {
        font-weight: 900;

        .accordion-icon {
          transform: scaleY(-1);
        }
      }

      .accordion-icon {
        margin-inline-start: auto;
        transition: .25s ease;
      }
    }
  }

  &-item {
    transition: .25s ease;

    &:first-child .accordion-title button {
      border-top: 0;
    }

    &:first-child {
      border-top-left-radius: .75rem;
      border-top-right-radius: .75rem;
    }

    &:last-child  {
      border-bottom-left-radius: .75rem;
      border-bottom-right-radius: .75rem;
    }
  }

  &-panel {
    padding: 0 2rem 2rem;
    font-size: var(--text-sm);
    line-height: 1.5;

    :deep(p) {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &-number {
    width: 1.75em;
    height: 1.75em;
    margin: -.25rem 0;
    border-radius: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: 900;
  }
}
</style>