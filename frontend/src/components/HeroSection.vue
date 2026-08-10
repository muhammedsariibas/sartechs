<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden mesh-gradient">
    <HeroBackground />
    <div class="max-w-container-max mx-auto text-center z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md glass-panel mb-8 border-primary/10">
        <span class="text-label-sm text-primary uppercase tracking-widest font-bold">{{ t('hero.badge') }}</span>
      </div>
      <h1 class="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl leading-tight mb-6 max-w-4xl mx-auto tracking-tighter">
        {{ t('hero.title1') }} <span class="text-gradient">{{ t('hero.titleHighlight') }}</span> {{ t('hero.title2') }}
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 opacity-80">
        {{ t('hero.subtitle') }}
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a href="#iletisim" class="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-lg font-label-md glow-button">
          {{ t('hero.ctaPrimary') }}
        </a>
        <a href="#hizmetler" class="w-full md:w-auto px-10 py-4 glass-panel text-white rounded-lg font-label-md hover:bg-white/5 transition-all border-white/10">
          {{ t('hero.ctaSecondary') }}
        </a>
      </div>
    </div>

    <!-- Hero Dashboard Card -->
    <div class="mt-20 relative w-full max-w-5xl mx-auto px-4 perspective-1000">
      <div class="glass-panel p-6 md:p-8 rounded-xl border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform rotate-x-2 transition-transform duration-700 hover:rotate-x-0">
        <div class="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div class="flex gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-white/20"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-white/10"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
          </div>
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-on-surface-variant text-sm">search</span>
            <span class="material-symbols-outlined text-on-surface-variant text-sm">notifications</span>
            <div class="w-7 h-7 rounded-full bg-surface-container-high border border-white/10 overflow-hidden">
              <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv0F79NkO9VKa1cmN5FfkqX-Hzbayd_b5KgZwFWXV3a5nxzCxuiz5VLnAzE667CQLlx0uO_RXd-P_lda2mjdC-vMpgTXW741bD3mvN4Yqms58St7jhWcYRdVPnlLK11NDSaMheBTlowFuV0-SyE0aPwnM2DhW-JCk8nghIkMjryISzckuO5P2y-hr5YQlZFBHmMCnemVNoS_HQ6sAibs0Lci-qgT5yww4VBoYwucwgI9z2--bvS7XV" alt="avatar" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="h-32 rounded-lg bg-white/5 flex flex-col justify-center px-6 border border-white/5">
            <span class="text-label-sm text-on-surface-variant mb-2">{{ t('hero.stat1Label') }}</span>
            <span class="text-headline-md font-bold text-white">124%</span>
          </div>
          <div class="h-32 rounded-lg bg-primary/10 flex flex-col justify-center px-6 border border-primary/20">
            <span class="text-label-sm text-on-surface-variant mb-2">{{ t('hero.stat2Label') }}</span>
            <span class="text-headline-md font-bold text-primary">{{ t('hero.stat2Value') }}</span>
          </div>
          <div class="h-32 rounded-lg bg-white/5 flex flex-col justify-center px-6 border border-white/5">
            <span class="text-label-sm text-on-surface-variant mb-2">{{ t('hero.stat3Label') }}</span>
            <span class="text-headline-md font-bold text-on-surface">99.9%</span>
          </div>
        </div>
        <div class="mt-8 h-48 rounded-lg bg-white/5 w-full flex items-center justify-center overflow-hidden border border-white/5">
          <div
            class="w-full h-full bg-cover bg-center opacity-20 grayscale"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEZIgpl6lDz5no4_Zmyrl52mVp-AOgxq2QCsVvjubjzHzH8JXkxLSsAJ_DZxayrKl121YQg9zHHVrv7uQBAcnxtED87L-7L7zi6tLpO-Taz9C0ajNpjZzp707ga-b7e9FRcpFe3ouzHRirUtSOKFqipZh_Oc1PEOlO3UzXKhVPQOsjvSEfldiM2J5ajk12at__c3Epin9cZB_7zvp88lKv9SlMXaO8eNSMf8RupXBM6xMPK9lKK0XG')"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroBackground from './HeroBackground.vue'
import { useLocale } from '../i18n/index.js'
const { t } = useLocale()
</script>
