<template>
  <section id="hakkimizda" class="px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30">
    <div class="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
      <div>
        <span class="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary mb-6">
          {{ t('nav.about') }}
        </span>
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 text-white tracking-tight">
          {{ t('about.title1') }} <span class="text-primary">{{ t('about.titleHighlight') }}</span> {{ t('about.title2') }}
        </h2>
        <p class="text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-8">
          {{ t('about.subtitle') }}
        </p>

        <ul class="space-y-4">
          <li v-for="(point, index) in points" :key="index" class="flex items-start gap-3 text-on-surface-variant">
            <span class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
              <span class="material-symbols-outlined text-[14px]">check</span>
            </span>
            <span class="leading-relaxed">{{ point }}</span>
          </li>
        </ul>
      </div>

      <div class="relative">
        <div class="absolute -right-8 top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>
        <div class="glass-panel relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 shadow-[0_30px_60px_-20px_rgba(14,165,233,0.20)]">
          <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>

          <div class="mb-6 flex items-center justify-between">
            <div>
              <p class="text-[10px] font-bold uppercase tracking-[0.28em] text-on-surface-variant">{{ t('about.card.label') }}</p>
              <h3 class="mt-2 text-xl font-semibold text-white">{{ t('about.card.title') }}</h3>
            </div>
          </div>

          <div class="space-y-4">
            <div v-for="(item, index) in cardItems" :key="index" class="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div class="mb-2 flex items-center justify-between">
                <span class="text-sm font-medium text-white">{{ item.title }}</span>
                <span class="text-primary text-xs font-semibold uppercase tracking-[0.18em]">{{ String(index + 1).padStart(2, '0') }}</span>
              </div>
              <p v-if="item.description" class="text-sm leading-relaxed text-on-surface-variant">
                {{ item.description }}
              </p>
              <div v-else-if="index === cardItems.length - 1" class="mt-3 flex flex-wrap gap-2">
                <span v-for="(tech, techIndex) in techs" :key="techIndex" class="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/80">
                  {{ tech }}
                </span>
              </div>
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
const points = computed(() => messages[locale.value].about.points)
const techs = computed(() => messages[locale.value].about.techs)
const cardItems = computed(() => messages[locale.value].about.card.items)
</script>
