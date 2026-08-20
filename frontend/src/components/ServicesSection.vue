<template>
  <section id="hizmetler" class="px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30">
    <div class="max-w-container-max mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white">
            {{ t('services.sectionTitle1') }} <span class="text-primary">{{ t('services.sectionTitleHighlight') }}</span>
          </h2>
          <p class="text-body-lg text-on-surface-variant">{{ t('services.sectionSubtitle') }}</p>
        </div>
        <div class="hidden md:block">
          <span class="material-symbols-outlined text-[64px] text-primary/10">terminal</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="glass-panel p-8 rounded-xl hover:border-primary/30 transition-all duration-300 group"
        >
          <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
            <span class="material-symbols-outlined text-primary text-2xl">{{ card.icon }}</span>
          </div>
          <h3 class="text-headline-md text-[20px] mb-4 text-white">{{ card.title }}</h3>
          <p class="text-on-surface-variant text-body-md mb-6 leading-relaxed">{{ card.description }}</p>
          <a href="#iletisim" class="inline-flex items-center text-primary font-label-md gap-2 group-hover:translate-x-1 transition-transform">
            {{ t('services.details') }} <span class="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLocale } from '../i18n/index.js'

const { t, messages, locale } = useLocale()

const icons = ['devices', 'hub', 'code_blocks', 'auto_awesome']

const cards = computed(() =>
  messages[locale.value].services.cards.map((card, i) => ({
    icon: icons[i],
    ...card,
  }))
)
</script>
