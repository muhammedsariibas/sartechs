<template>
  <section id="projeler" class="px-gutter py-section-padding-v-mobile md:py-section-padding-v relative">
    <div class="max-w-container-max mx-auto">
      <div class="mx-auto max-w-3xl text-center mb-12">
        <span class="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-primary mb-6">
          {{ t('nav.projects') }}
        </span>
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white tracking-tight">
          {{ t('projects.title1') }} <span class="text-primary">{{ t('projects.titleHighlight') }}</span> {{ t('projects.title2') }}
        </h2>
        <p class="text-body-lg text-on-surface-variant leading-relaxed">
          {{ t('projects.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article v-for="(project, index) in items" :key="index" class="glass-panel rounded-2xl border border-white/10 p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1">
          <div class="mb-6 flex items-center justify-between">
            <span class="text-xs uppercase tracking-[0.2em] text-primary">Case study</span>
            <span class="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {{ project.metric }}
            </span>
          </div>

          <div class="mb-6 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            {{ project.name }}
          </div>

          <p class="text-on-surface-variant text-sm leading-relaxed">
            {{ project.detail }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLocale } from '../i18n/index.js'

const { t, messages, locale } = useLocale()
const items = computed(() => messages[locale.value].projects.items)
</script>
