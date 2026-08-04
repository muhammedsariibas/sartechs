<template>
  <section id="surec" class="px-gutter py-section-padding-v-mobile md:py-section-padding-v">
    <div class="max-w-container-max mx-auto">
      <div class="text-center mb-20">
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white">
          {{ t('process.title1') }} <span class="text-primary">{{ t('process.titleHighlight') }}</span>
        </h2>
        <p class="text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-70">
          {{ t('process.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        <div class="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"></div>
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="relative z-10 glass-panel p-8 rounded-xl text-center group hover:bg-white/[0.03] transition-colors border-white/5"
        >
          <div class="w-10 h-10 bg-surface-obsidian text-primary border border-primary/20 rounded-md flex items-center justify-center mx-auto mb-6 font-bold text-sm group-hover:border-primary transition-colors">
            {{ step.number }}
          </div>
          <h4 class="font-headline-md text-[18px] mb-3 text-white">{{ step.title }}</h4>
          <p class="text-on-surface-variant text-xs leading-relaxed opacity-80">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLocale } from '../i18n/index.js'

const { t, messages, locale } = useLocale()

const numbers = ['01', '02', '03', '04']

const steps = computed(() =>
  messages[locale.value].process.steps.map((s, i) => ({ number: numbers[i], ...s }))
)
</script>
