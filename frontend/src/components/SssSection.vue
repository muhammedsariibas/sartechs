<template>
  <section id="sss" class="px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30">
    <div class="max-w-container-max mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white">
            {{ t('faq.title1') }} <span class="text-primary">{{ t('faq.titleHighlight') }}</span> {{ t('faq.title2') }}
          </h2>
          <p class="text-body-lg text-on-surface-variant">{{ t('faq.subtitle') }}</p>
        </div>
        <div class="hidden md:block">
          <span class="material-symbols-outlined text-[64px] text-primary/10">help</span>
        </div>
      </div>

      <div class="max-w-2xl mx-auto space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="glass-panel rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
        >
          <button
            @click="toggleItem(index)"
            class="w-full px-6 py-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors text-left"
          >
            <span class="text-headline-md text-[18px] text-white font-medium pr-4">
              {{ item.question }}
            </span>
            <span 
              class="flex-shrink-0 material-symbols-outlined text-primary transition-transform duration-300"
              :class="{ 'rotate-180': expanded[index] }"
            >
              expand_more
            </span>
          </button>

          <transition
            enter-active-class="transition-all duration-300 ease-out overflow-hidden"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-300 ease-in overflow-hidden"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div
              v-show="expanded[index]"
              class="px-6 pb-5 border-t border-white/10 text-on-surface-variant text-body-md leading-relaxed"
            >
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-on-surface-variant mb-6">{{ t('contact.subtitle') }}</p>
        <a 
          href="#iletisim"
          class="inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3 font-label-md text-on-primary hover:bg-primary/90 transition-colors"
        >
          <span class="material-symbols-outlined text-xl">email</span>
          {{ t('contact.title1') }} {{ t('contact.titleHighlight') }} {{ t('contact.title2') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLocale } from '../i18n/index.js'

const { t, messages, locale } = useLocale()
const expanded = ref({})

const faqItems = computed(() => messages[locale.value].faq.items)

const toggleItem = (index) => {
  expanded.value[index] = !expanded.value[index]
}
</script>
