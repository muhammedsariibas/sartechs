<template>
  <section class="px-gutter py-24 bg-primary/5 border-y border-primary/10">
    <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div>
        <div class="text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter">99.9%</div>
        <div class="text-label-md uppercase tracking-widest text-primary font-bold">{{ t('stats.reliability') }}</div>
      </div>
      <div>
        <div class="text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter">10x</div>
        <div class="text-label-md uppercase tracking-widest text-primary font-bold">{{ t('stats.speed') }}</div>
      </div>
      <div>
        <div class="text-display-xl-mobile md:text-[56px] font-extrabold text-white mb-2 tracking-tighter">100%</div>
        <div class="text-label-md uppercase tracking-widest text-primary font-bold">{{ t('stats.bespoke') }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../i18n/index.js'
const { t } = useLocale()
</script>
