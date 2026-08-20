<template>
  <section id="iletisim" class="px-gutter py-section-padding-v-mobile md:py-section-padding-v relative mesh-gradient">
    <div class="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-xl border-white/10 shadow-2xl">
      <div class="text-center mb-12">
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white tracking-tight">
          {{ t('contact.title1') }} <span class="text-primary">{{ t('contact.titleHighlight') }}</span> {{ t('contact.title2') }}
        </h2>
        <p class="text-on-surface-variant">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="mb-10 grid grid-cols-1 gap-3 border-y border-white/10 py-5 text-sm text-on-surface-variant md:grid-cols-3">
        <a :href="`mailto:${t('contact.email')}`" class="flex items-center justify-center gap-2 transition-colors hover:text-white md:justify-start">
          <span class="material-symbols-outlined text-primary">mail</span>
          {{ t('contact.email') }}
        </a>
        <span class="flex items-center justify-center gap-2 md:justify-start">
          <span class="material-symbols-outlined text-primary">location_on</span>
          {{ t('contact.location') }}
        </span>
        <a :href="`mailto:${t('contact.email')}?subject=${encodeURIComponent(t('contact.quickSubject'))}`" class="flex items-center justify-center gap-2 font-semibold text-primary transition-colors hover:text-white md:justify-start">
          <span class="material-symbols-outlined">bolt</span>
          {{ t('contact.quickContact') }}
        </a>
      </div>

      <form class="space-y-6" @submit.prevent="handleSubmit">
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

        <label class="flex items-start gap-3 text-sm text-on-surface-variant">
          <input v-model="form.consent" type="checkbox" required class="mt-1 h-4 w-4 accent-primary" />
          <span>{{ t('contact.consent') }}</span>
        </label>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-4 bg-primary text-white rounded-lg font-bold text-base glow-button tracking-widest transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? '...' : t('contact.submit') }}
        </button>

        <p v-if="feedback.message" :class="feedback.success ? 'text-green-400' : 'text-red-400'" class="text-center text-sm pt-2">
          {{ feedback.message }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import { useLocale } from '../i18n/index.js'

const { t, messages, locale } = useLocale()

const serviceOptions = computed(() => messages[locale.value].contact.serviceOptions)

const form = reactive({ name: '', email: '', service: '', details: '', consent: false })
const loading = ref(false)
const feedback = reactive({ message: '', success: false })

async function handleSubmit() {
  feedback.message = ''
  loading.value = true
  try {
    const res = await fetch('https://sartechs-fullstack.vercel.app/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    const data = await res.json()
    feedback.message = data.message
    feedback.success = data.success
    if (data.success) {
      form.name = ''
      form.email = ''
      form.service = ''
      form.details = ''
      form.consent = false
    }
  } catch {
    feedback.message = 'Bağlantı hatası. Lütfen tekrar deneyin.'
    feedback.success = false
  } finally {
    loading.value = false
  }
}
</script>
