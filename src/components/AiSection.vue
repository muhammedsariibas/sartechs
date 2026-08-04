<template>
  <section class="px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden">
    <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <!-- Visual -->
      <div class="relative">
        <div class="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full"></div>
        <div class="glass-panel p-2 rounded-xl relative z-10 overflow-hidden border-white/10">
          <div class="bg-surface-obsidian rounded-lg p-1 overflow-hidden h-[500px]">
            <img
              class="w-full h-full object-cover rounded-md opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfpCUN3OlvCZ5mhdfKYSRH7hUB6OFv5FoonzdxU_q5wSwVW9YtlweLnhEESIEAql596fl4Hyezdy2u7LGOx6-HX8Ux74572JLO5fkdSffV-HRWTSQsEpwJghvzob1KPAnVOH31PtseoOX4ENZA4qSY4BsPdKxAOgUuoLCLlIkC8stgpCIWtTo5TzBgC2_yWLoeF-99NBvFerlLfsGRbiz-lEvWOarpdwwIEcaoDnJ8jVJSn2cxx4LI"
              alt="AI Engine"
            />
          </div>
          <div class="absolute bottom-10 left-10 right-10 glass-panel p-6 rounded-lg border-white/10 bg-surface-obsidian/40">
            <div class="flex items-center gap-4 mb-3">
              <div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <span class="text-label-sm font-bold tracking-widest text-white uppercase">{{ t('ai.engineLabel') }}</span>
            </div>
            <p class="text-label-md text-on-surface-variant italic font-medium">{{ t('ai.engineQuote') }}</p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div>
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-white tracking-tight">
          {{ t('ai.title1') }} <span class="text-gradient">{{ t('ai.titleHighlight') }}</span> {{ t('ai.title2') }}
        </h2>
        <div class="space-y-8">
          <div v-for="(item, i) in features" :key="i" class="flex gap-6">
            <div class="flex-shrink-0 w-10 h-10 rounded-md glass-panel flex items-center justify-center border-white/10">
              <span class="material-symbols-outlined text-primary text-xl">{{ item.icon }}</span>
            </div>
            <div>
              <h4 class="font-headline-md text-[18px] mb-2 text-white">{{ item.title }}</h4>
              <p class="text-on-surface-variant text-sm leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLocale } from '../i18n/index.js'

const { t, messages, locale } = useLocale()

const icons = ['psychology', 'bolt', 'security']

const features = computed(() =>
  messages[locale.value].ai.features.map((f, i) => ({ icon: icons[i], ...f }))
)
</script>
