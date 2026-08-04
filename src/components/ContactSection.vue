<template>
  <section id="iletisim" class="px-gutter py-section-padding-v-mobile md:py-section-padding-v relative mesh-gradient">
    <div class="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-xl border-white/10 shadow-2xl">
      <div class="text-center mb-12">
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white tracking-tight">
          {{ t('contact.title1') }} <span class="text-primary">{{ t('contact.titleHighlight') }}</span> {{ t('contact.title2') }}
        </h2>
        <p class="text-on-surface-variant">{{ t('contact.subtitle') }}</p>
      </div>

      <form class="space-y-6" @submit.prevent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-label-sm uppercase tracking-widest text-on-surface-variant pl-1">{{ t('contact.labelName') }}</label>
            <input
              v-model="form.name"
              type="text"
              :placeholder="t('contact.placeholderName')"
              class="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"
            />
          </div>
          <div class="space-y-2">
            <label class="text-label-sm uppercase tracking-widest text-on-surface-variant pl-1">{{ t('contact.labelEmail') }}</label>
            <input
              v-model="form.email"
              type="email"
              :placeholder="t('contact.placeholderEmail')"
              class="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-label-sm uppercase tracking-widest text-on-surface-variant pl-1">{{ t('contact.labelService') }}</label>
          <select
            v-model="form.service"
            class="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-white appearance-none"
          >
            <option v-for="opt in serviceOptions" :key="opt" :value="opt" class="bg-surface-obsidian">{{ opt }}</option>
          </select>
        </div>

        <div class="space-y-2">
          <label class="text-label-sm uppercase tracking-widest text-on-surface-variant pl-1">{{ t('contact.labelDetails') }}</label>
          <textarea
            v-model="form.details"
            rows="4"
            :placeholder="t('contact.placeholderDetails')"
            class="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-3.5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/10 text-white"
          ></textarea>
        </div>

        <button type="submit" class="w-full py-4 bg-primary text-white rounded-lg font-bold text-base glow-button tracking-widest transition-all uppercase">
          {{ t('contact.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useLocale } from '../i18n/index.js'

const { t, messages, locale } = useLocale()

const serviceOptions = computed(() => messages[locale.value].contact.serviceOptions)

const form = reactive({ name: '', email: '', service: '', details: '' })
</script>
