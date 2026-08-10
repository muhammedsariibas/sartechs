<template>
  <header class="fixed top-0 w-full z-50 bg-surface-obsidian/80 backdrop-blur-md border-b border-white/5">
    <div class="flex justify-between items-center max-w-container-max mx-auto px-gutter py-3">
      <div class="flex items-center gap-3">
        <img
          src="https://lh3.googleusercontent.com/aida/AP1WRLty_fiSjelvnvJUU_N9Vgoqa25s-UYGEfXUw3XsRfqQeEVJsggnyXPwHaO2vaOsO7PgQOOcEMNlh-KiVFSFU-YO4Y3ShyMAICfmpEo18XkrYAVDE_qPXCHTd0Cy-P5dg5pg_O50VYFEJgYJwz1fnZlmQR5gLLDeW1DbsSo0eENeHzU_dEZ0d3UtPAt4ZVJ4eD6MoO9x9tFEM_4JutbsQbTs3wyc9ZlLVTvnLKWOBNAckoIa0p2RmgirmWs"
          alt="Sartechs"
          class="h-9 w-auto logo-filter cursor-pointer"
          @click="scrollTo(null)"
        />
        <span
          class="font-display-xl-mobile text-[20px] font-bold tracking-tight text-white hidden md:block cursor-pointer"
          @click="scrollTo(null)"
        >
          SARTECHS
        </span>
      </div>

      <nav class="hidden md:flex gap-8 items-center">
        <a
          v-for="link in navLinks"
          :key="link.id"
          href="#"
          class="relative font-label-md transition-colors duration-200 py-1"
          :class="activeSection === link.id ? 'text-white' : 'text-on-surface-variant hover:text-white'"
          @click.prevent="scrollTo(link.id)"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-0.5 left-0 h-[2px] bg-primary rounded-full transition-all duration-300"
            :class="activeSection === link.id ? 'w-full opacity-100' : 'w-0 opacity-0'"
          ></span>
        </a>
        <a
          href="#"
          class="bg-primary text-white px-5 py-2 rounded-lg font-label-md glow-button"
          @click.prevent="scrollTo('iletisim')"
        >
          {{ t('nav.cta') }}
        </a>
        <!-- Language toggle -->
        <button
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel border-white/10 text-xs font-bold tracking-widest uppercase text-on-surface-variant hover:text-white transition-colors"
          @click="toggleLocale"
        >
          <span class="material-symbols-outlined text-[14px]">language</span>
          {{ locale === 'tr' ? 'EN' : 'TR' }}
        </button>
      </nav>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center gap-3">
        <button
          class="flex items-center gap-1 px-2.5 py-1 rounded-md glass-panel border-white/10 text-xs font-bold tracking-widest uppercase text-on-surface-variant"
          @click="toggleLocale"
        >
          <span class="material-symbols-outlined text-[13px]">language</span>
          {{ locale === 'tr' ? 'EN' : 'TR' }}
        </button>
        <button class="text-on-surface" @click="mobileOpen = !mobileOpen">
          <span class="material-symbols-outlined text-[28px]">{{ mobileOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <transition name="slide-down">
      <nav v-if="mobileOpen" class="md:hidden flex flex-col px-gutter pb-4 gap-4 border-t border-white/5 bg-surface-obsidian">
        <a
          v-for="link in navLinks"
          :key="link.id"
          href="#"
          class="font-label-md py-2 transition-colors duration-200"
          :class="activeSection === link.id ? 'text-primary' : 'text-on-surface-variant'"
          @click.prevent="scrollTo(link.id); mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#"
          class="bg-primary text-white px-5 py-2 rounded-lg font-label-md text-center glow-button"
          @click.prevent="scrollTo('iletisim'); mobileOpen = false"
        >
          {{ t('nav.cta') }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useLocale } from '../i18n/index.js'

const { locale, t } = useLocale()

function toggleLocale() {
  locale.value = locale.value === 'tr' ? 'en' : 'tr'
}

const navLinks = computed(() => [
  { id: 'hizmetler', label: t('nav.services') },
  { id: 'surec',     label: t('nav.process') },
  { id: 'projeler',  label: t('nav.projects') },
])

const activeSection = ref(null)
const mobileOpen    = ref(false)

function scrollTo(id) {
  const target = id ? document.getElementById(id) : document.documentElement
  if (!target) return
  const headerH  = 72
  const start    = window.scrollY
  const targetY  = id ? target.getBoundingClientRect().top + window.scrollY - headerH : 0
  const distance = targetY - start
  const duration = Math.min(Math.max(Math.abs(distance) * 0.4, 400), 900)
  let startTime  = null
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2 }
  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const elapsed  = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, start + distance * ease(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

let observer
onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  observer = new IntersectionObserver(
    (entries) => { entries.forEach((e) => { if (e.isIntersecting) activeSection.value = e.target.id }) },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  sections.forEach((s) => observer.observe(s))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-to { max-height: 0; opacity: 0; }
.slide-down-enter-to,
.slide-down-leave-from { max-height: 300px; opacity: 1; }
</style>
