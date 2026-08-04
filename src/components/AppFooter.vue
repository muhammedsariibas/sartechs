<template>
  <footer class="w-full border-t border-white/5 bg-surface-obsidian">
    <div class="flex flex-col md:flex-row justify-between items-center px-gutter py-section-padding-v-mobile max-w-container-max mx-auto gap-8">
      <div class="flex flex-col items-center md:items-start gap-4">
        <img
          src="https://lh3.googleusercontent.com/aida/AP1WRLty_fiSjelvnvJUU_N9Vgoqa25s-UYGEfXUw3XsRfqQeEVJsggnyXPwHaO2vaOsO7PgQOOcEMNlh-KiVFSFU-YO4Y3ShyMAICfmpEo18XkrYAVDE_qPXCHTd0Cy-P5dg5pg_O50VYFEJgYJwz1fnZlmQR5gLLDeW1DbsSo0eENeHzU_dEZ0d3UtPAt4ZVJ4eD6MoO9x9tFEM_4JutbsQbTs3wyc9ZlLVTvnLKWOBNAckoIa0p2RmgirmWs"
          alt="Sartechs"
          class="h-10 w-auto logo-filter"
        />
        <p class="text-on-surface-variant text-xs max-w-xs text-center md:text-left opacity-60">
          {{ t('footer.tagline') }}
        </p>
      </div>

      <div class="flex gap-12">
        <div class="flex flex-col gap-3 text-center md:text-left">
          <span class="font-label-md text-primary mb-2 uppercase tracking-widest text-[10px]">{{ t('footer.company') }}</span>
          <a v-for="link in t('footer.companyLinks')" :key="link" href="#" class="text-on-surface-variant hover:text-white transition-colors text-xs">
            {{ link }}
          </a>
        </div>
        <div class="flex flex-col gap-3 text-center md:text-left">
          <span class="font-label-md text-primary mb-2 uppercase tracking-widest text-[10px]">{{ t('footer.support') }}</span>
          <a v-for="link in t('footer.supportLinks')" :key="link" href="#" class="text-on-surface-variant hover:text-white transition-colors text-xs">
            {{ link }}
          </a>
        </div>
      </div>

      <div class="flex flex-col items-center md:items-end gap-6">
        <div class="flex gap-4">
          <a href="#" class="w-9 h-9 glass-panel rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all border-white/5">
            <span class="material-symbols-outlined text-[18px]">share</span>
          </a>
          <a href="#" class="w-9 h-9 glass-panel rounded-lg flex items-center justify-center hover:bg-primary/10 transition-all border-white/5">
            <span class="material-symbols-outlined text-[18px]">alternate_email</span>
          </a>
        </div>
        <p class="font-body-md text-[11px] text-on-surface-variant opacity-40">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLocale } from '../i18n/index.js'
const { t } = useLocale()
</script>
